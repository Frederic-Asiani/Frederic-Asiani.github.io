from playwright.sync_api import sync_playwright
from pathlib import Path
import json
URL='http://127.0.0.1:8765/index.html'
results={}
with sync_playwright() as p:
  browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-gpu'])
  for label,view in [('desktop',{'width':1440,'height':900}),('tablet',{'width':820,'height':1024}),('iphone',{'width':390,'height':844}),('tiny',{'width':320,'height':700})]:
    page=browser.new_page(viewport=view,device_scale_factor=1,reduced_motion='reduce')
    errors=[];page.on('pageerror', lambda e:errors.append(str(e)))
    page.goto(URL,wait_until='domcontentloaded')
    page.wait_for_timeout(200)
    initial=page.locator('html').get_attribute('data-theme')
    overflow=page.evaluate('document.documentElement.scrollWidth>document.documentElement.clientWidth')
    btn=page.locator('#theme-toggle'); before=btn.get_attribute('aria-label')
    btn.click(); after=page.locator('html').get_attribute('data-theme')
    aria=btn.get_attribute('aria-label');pressed=btn.get_attribute('aria-pressed')
    persisted=page.evaluate('localStorage.getItem("fa-theme")')
    page.reload(wait_until='domcontentloaded')
    reloaded=page.locator('html').get_attribute('data-theme')
    if label=='desktop':
      page.locator('#search-pubs').fill('diversification')
      filtered=page.locator('#pub-list .pub:not(.hide)').count()
      page.locator('#search-pubs').fill('abcdefghijk')
      noresults=page.locator('#empty-pubs').is_visible()
      page.locator('#search-pubs').fill('')
      results['search']={'matches_diversification':filtered,'empty_message_visible':noresults}
      page.locator('#theme-toggle').click() # restore light
      page.screenshot(path='/mnt/data/refonte_frederic/preview_clair.png',full_page=True)
      page.locator('#theme-toggle').click()
      page.screenshot(path='/mnt/data/refonte_frederic/preview_sombre.png',full_page=True)
    if label in ('iphone','tiny'):
      menu=page.locator('.menu-button'); menu.click()
      menu_open=page.locator('#site-nav').is_visible()
      expanded=menu.get_attribute('aria-expanded')
      page.keyboard.press('Escape')
      menu_closed=not page.locator('#site-nav').is_visible()
      results[label+'_menu']={'open':menu_open,'aria_expanded':expanded,'closed_escape':menu_closed}
    results[label]={'viewport':view,'initial_theme':initial,'after_toggle':after,'aria_label_before':before,'aria_label_after':aria,'aria_pressed':pressed,'persisted':persisted,'theme_after_reload':reloaded,'horizontal_overflow':overflow,'js_errors':errors}
    page.close()
  browser.close()
Path('/mnt/data/refonte_frederic/resultats_tests.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps(results,ensure_ascii=False,indent=2))
