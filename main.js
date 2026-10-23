/* Shared behavior: keyboard-accessible navigation, two persistent themes, publications search. */
'use strict';
(function(){
 const root=document.documentElement;
 const en=root.lang.toLowerCase().startsWith('en');
 const themeButton=document.getElementById('theme-toggle');
 const colorMeta=document.querySelector('meta[name="theme-color"]');
 const mq=window.matchMedia('(prefers-color-scheme: dark)');
 function persistTheme(theme){try{localStorage.setItem('asiani-color-theme',theme)}catch(e){}}
 function applyTheme(theme,save=false){
  root.dataset.theme=theme;root.style.colorScheme=theme;
  if(colorMeta)colorMeta.content=theme==='dark'?'#0d1923':'#f7f6f2';
  if(themeButton){
   const dark=theme==='dark';
   themeButton.setAttribute('aria-pressed',String(dark));
   themeButton.setAttribute('aria-label',dark?(en?'Activate light theme':'Activer le thème clair'):(en?'Activate dark theme':'Activer le thème sombre'));
   themeButton.title=dark?(en?'Light mode':'Mode clair'):(en?'Dark mode':'Mode sombre');
  }
  if(save)persistTheme(theme);
 }
 applyTheme(root.dataset.theme==='dark'?'dark':'light');
 if(themeButton)themeButton.addEventListener('click',()=>applyTheme(root.dataset.theme==='dark'?'light':'dark',true));
 mq.addEventListener?.('change',event=>{let selected=null;try{selected=localStorage.getItem('asiani-color-theme')}catch(e){}if(selected!=='light'&&selected!=='dark')applyTheme(event.matches?'dark':'light')});
 const menuButton=document.querySelector('.menu-button');
 const nav=document.getElementById('site-nav');
 if(menuButton&&nav){
  const setOpen=open=>{nav.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?(en?'Close menu':'Fermer le menu'):(en?'Open menu':'Ouvrir le menu'));};
  menuButton.addEventListener('click',()=>setOpen(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){setOpen(false);menuButton.focus()}});
  document.addEventListener('pointerdown',e=>{if(nav.classList.contains('is-open')&&!nav.contains(e.target)&&!menuButton.contains(e.target))setOpen(false)});
  window.addEventListener('resize',()=>{if(innerWidth>950)setOpen(false)},{passive:true});
 }
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const search=document.getElementById('search-pubs');
 if(search){const items=[...document.querySelectorAll('#pub-list .pub')];const empty=document.getElementById('empty-pubs');search.addEventListener('input',()=>{const q=search.value.trim().toLocaleLowerCase('fr');let visible=0;items.forEach(item=>{const match=item.textContent.toLocaleLowerCase('fr').includes(q);item.hidden=!match;if(match)visible++});if(empty)empty.hidden=visible>0})}
 document.querySelectorAll('.portrait-inner img,.hero-portrait img').forEach(img=>{
   const loaded=()=>{if(img.naturalWidth>0){img.classList.add('is-loaded');img.classList.remove('is-unavailable');img.closest('.hero-portrait')?.classList.add('has-photo');}};
   const fallback=()=>{img.classList.remove('is-loaded');img.classList.add('is-unavailable');img.closest('.hero-portrait')?.classList.remove('has-photo')};
   img.addEventListener('load',loaded);img.addEventListener('error',fallback);
   if(img.complete){img.naturalWidth?loaded():fallback()}
 });
})();
