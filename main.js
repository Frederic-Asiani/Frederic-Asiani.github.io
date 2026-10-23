'use strict';
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const field = document.querySelector('#search-pubs');
const items = Array.from(document.querySelectorAll('#pub-list .pub'));
const empty = document.querySelector('#empty-pubs');
if(field){field.addEventListener('input', () => {
 const query = field.value.trim().toLocaleLowerCase('fr');
 let visible = 0;
 items.forEach(item => {const match = item.textContent.toLocaleLowerCase('fr').includes(query);
 item.classList.toggle('hide', !match); if (match) visible++; });
 if(empty) empty.classList.toggle('hide', visible > 0);
});}

const menuButton=document.querySelector('.menu-button');
const siteNav=document.querySelector('#site-nav');
if(menuButton&&siteNav){
 const english=document.documentElement.lang==='en';
 const setMenu=open=>{
  siteNav.classList.toggle('is-open',open);
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?(english?'Close menu':'Fermer le menu'):(english?'Open menu':'Ouvrir le menu'));
 };
 menuButton.addEventListener('click',()=>setMenu(!siteNav.classList.contains('is-open')));
 siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&siteNav.classList.contains('is-open')){setMenu(false);menuButton.focus();}});
 document.addEventListener('click',event=>{if(siteNav.classList.contains('is-open')&&!siteNav.contains(event.target)&&!menuButton.contains(event.target))setMenu(false);});
 window.addEventListener('resize',()=>{if(window.innerWidth>850)setMenu(false)});
}
// Hide broken remote headshot; initials remain visible behind the photo.
document.querySelectorAll('.dash-avatar img').forEach(img=>{
 const hide=()=>img.classList.add('is-unavailable');
 img.addEventListener('error',hide);
 if(img.complete && img.naturalWidth===0)hide();
});
