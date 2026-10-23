"use strict";
(async()=>{
const out=document.querySelector('#excel-error');
const fmt=v=>new Intl.NumberFormat('fr-FR',{maximumFractionDigits:0}).format(v||0);
const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
try{
 const response=await fetch('synthese.json');if(!response.ok)throw Error('Fichier de données indisponible');
 const d=await response.json();
 const picker=document.querySelector('#agency-picker');
 d.agences.forEach(a=>{const opt=document.createElement('option');opt.value=a.agence;opt.textContent=a.agence;picker.appendChild(opt)});
 const renderAgency=()=>{const v=picker.value;const x=v?d.agences.find(a=>a.agence===v):{comptes:d.comptes,solde:d.solde_total,transactions:d.transactions,volume:d.volume_transactions};
 const values={'agency-accounts':x.comptes,'agency-balance':x.solde,'agency-operations':x.transactions,'agency-volume':x.volume};Object.keys(values).forEach(id=>document.getElementById(id).textContent=fmt(values[id]));};
 picker.addEventListener('change',renderAgency);renderAgency();
 const metric=document.querySelector('#metric-mode');
 const drawMonthly=()=>{const target=document.getElementById('monthly-chart');target.replaceChildren();const key=metric.value;const values=d.evolution_mensuelle;const max=Math.max(1,...values.map(r=>Number(r[key]||0)));
 values.forEach(item=>{const row=make('div','dash-row');const name=make('span','dash-label',item.mois);const track=make('div','dash-track');const bar=make('span','dash-fill');bar.style.width=Math.max(2,Number(item[key])/max*100)+'%';track.append(bar);const value=make('span','dash-value',fmt(item[key]));row.append(name,track,value);target.append(row)});target.setAttribute('aria-label',values.map(v=>v.mois+': '+fmt(v[key])).join(', '));};
 metric.addEventListener('change',drawMonthly);drawMonthly();
 const target=document.getElementById('transaction-chart');d.types_transactions.forEach(r=>{const div=make('div','split-item');div.append(make('span','',r.type),make('strong','',fmt(r.nombre)),make('small','',fmt(r.montant)+' unités de volume'));target.append(div)});
 }catch(error){out.textContent='L’aperçu dynamique n’est pas disponible. Le fichier de synthèse Excel reste téléchargeable.';}
})();