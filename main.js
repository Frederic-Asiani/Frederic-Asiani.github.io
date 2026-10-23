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

const menuButton=document.querySelector('.menu-button');const siteNav=document.querySelector('#site-nav');if(menuButton&&siteNav){const closeMenu=()=>{siteNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Ouvrir le menu');};menuButton.addEventListener('click',()=>{const open=!siteNav.classList.contains('is-open');siteNav.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});siteNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});window.addEventListener('resize',()=>{if(window.innerWidth>850)closeMenu()});}
