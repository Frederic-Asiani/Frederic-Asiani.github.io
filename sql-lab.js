/* SQL Lab : exécution SQLite via sql.js (WebAssembly), données démo en mémoire. */
(() => {
'use strict';
const root=document.querySelector('[data-sql-lab]');
if (!root) return;
const $=id=>root.querySelector('#'+id);
const ui={preset:$('sql-preset'), editor:$('sql-editor'), run:$('sql-run'), reset:$('sql-reset'), export:$('sql-export'), status:root.querySelector('.sql-status'), feedback:$('sql-feedback'), rowcount:$('sql-rowcount'), metrics:$('sql-metrics'), bars:$('sql-bars'), table:$('sql-table'), note:$('sql-result-note')};
let db=null, presets=[], latest=null, preview=null, currentIndex=0;
const setStatus=(text,kind)=>{ui.status.textContent=text;ui.status.className='sql-status '+kind;};
const setFeedback=(text,error=false)=>{ui.feedback.textContent=text;ui.feedback.classList.toggle('is-error',error);};
const safeText=value=>value===null?'NULL':value instanceof Uint8Array?'[BLOB]':String(value);
const prettyNumber=value=>typeof value==='number'?new Intl.NumberFormat('fr-FR',{maximumFractionDigits:2}).format(value):safeText(value);
const formatCSV=value=>'"'+safeText(value).replace(/"/g,'""')+'"';
const isReadonly=sql=>{const normalized=sql.replace(/^\uFEFF/,'').replace(/^(?:\s|--[^\n]*(?:\n|$)|\/\*[\s\S]*?\*\/)+/g,'').trim(); if(!/^(SELECT|WITH)\b/i.test(normalized))return false;const statements=normalized.replace(/;\s*$/,'').split(';');return statements.length===1;};
function chooseMetrics(cols,rows){
 const numeric=cols.filter((c,i)=>rows.some(r=>typeof r[i]==='number'));
 const priority=[/volume|encours|depots|chiffre|revenu|montant|commissions|exposition|marge/i,/nb_|nombre|total|ratio|pct|stock|prets/i];
 const key=priority.map(rx=>numeric.find(k=>rx.test(k))).find(Boolean)||numeric[0];
 return {key, numeric};
}
function showRows(result, fromPreview=false){
 latest=result;
 const cols=result.columns||[], rows=result.values||[];
 ui.rowcount.textContent=rows.length+' ligne'+(rows.length>1?'s':'')+(fromPreview?' · aperçu':'');
 ui.metrics.replaceChildren(); ui.bars.replaceChildren(); ui.table.replaceChildren();
 if(cols.length===0){const p=document.createElement('p');p.className='sql-empty';p.textContent='Cette requête ne retourne aucune colonne.';ui.table.append(p);return;}
 if(rows.length===0){const p=document.createElement('p');p.className='sql-empty';p.textContent='Aucune ligne ne répond à cette requête.';ui.table.append(p);return;}
 const {key,numeric}=chooseMetrics(cols,rows);
 if(rows.length===1){numeric.slice(0,4).forEach(k=>{let i=cols.indexOf(k);const card=document.createElement('div');card.className='sql-metric';const name=document.createElement('span');name.textContent=k.replaceAll('_',' ');const value=document.createElement('strong');value.textContent=prettyNumber(rows[0][i]);card.append(name,value);ui.metrics.append(card);});}
 else if(key){let metricIdx=cols.indexOf(key);let labelIdx=cols.findIndex((c,i)=>i!==metricIdx&&rows.some(r=>typeof r[i]==='string'));
 if(labelIdx===-1)labelIdx=0;
 const barData=rows.slice(0,8).filter(r=>Number(r[metricIdx])>0);
 const max=Math.max(0,...barData.map(r=>Number(r[metricIdx])));
 if(max>0 && labelIdx!==metricIdx){const hdr=document.createElement('p');hdr.className='sql-chart-title';hdr.textContent='Visualisation · '+key.replaceAll('_',' ');ui.bars.append(hdr);
 barData.forEach(row=>{const item=document.createElement('div');item.className='sql-bar-row';const lbl=document.createElement('span');lbl.className='sql-bar-label';lbl.textContent=safeText(row[labelIdx]);const track=document.createElement('div');track.className='sql-bar-track';const fill=document.createElement('div');fill.className='sql-bar-fill';fill.style.width=Math.min(100,Math.max(1,Number(row[metricIdx])/max*100))+'%';track.append(fill);const val=document.createElement('span');val.className='sql-bar-value';val.textContent=prettyNumber(row[metricIdx]);item.append(lbl,track,val);ui.bars.append(item);});}}
 const table=document.createElement('table');const cap=document.createElement('caption');cap.textContent='Résultats de l’analyse SQL';table.append(cap);
 const thead=document.createElement('thead');const trh=document.createElement('tr');cols.forEach(c=>{const th=document.createElement('th');th.textContent=c;trh.append(th);});thead.append(trh);table.append(thead);
 const tbody=document.createElement('tbody');rows.slice(0,150).forEach(r=>{const tr=document.createElement('tr');r.forEach(v=>{const td=document.createElement('td');td.textContent=prettyNumber(v);tr.append(td)});tbody.append(tr);});table.append(tbody);ui.table.append(table);
 ui.note.textContent=fromPreview?'Aperçu pré-calculé : le moteur SQLite n’a pas pu démarrer. Les requêtes personnalisées ne sont pas exécutées.':'Résultats exécutés en mémoire dans SQLite WebAssembly · données synthétiques.';
 ui.export.disabled=false;
}
function executeSQL(){if(!db){setFeedback('SQLite n’est pas prêt : les exemples sont consultables, mais le SQL personnalisé ne peut pas être exécuté.',true);return;}
 const statement=ui.editor.value.trim();if(!isReadonly(statement)){setFeedback('Requête refusée : utilisez une seule requête SELECT ou WITH en lecture seule.',true);return;}
 try{const started=performance.now();const results=db.exec(statement);const set=results[0]||{columns:[],values:[]};showRows(set);setFeedback('Analyse exécutée en '+Math.round(performance.now()-started)+' ms. Aucun changement enregistré.');}catch(e){setFeedback('Erreur SQL : '+e.message,true);}}
function asPreview(obj){if(!obj)return null;if(Array.isArray(obj.apercu)){return{columns:obj.colonnes,values:obj.apercu.map(row=>obj.colonnes.map(k=>row[k]))};}
 if(Array.isArray(obj.lignes)){return{columns:obj.colonnes,values:obj.lignes};}return null;}
function showPreview(){let data=Array.isArray(preview)?preview[currentIndex]:preview?Object.values(preview)[currentIndex]:null;let res=asPreview(data);if(res)showRows(res,true);}
function chooseIndex(index){currentIndex=index;ui.editor.value=presets[index].sql;if(db){executeSQL();}else{showPreview();setFeedback('Aperçu consultable. Le moteur SQL se charge…');}}
function downloadCSV(){if(!latest||!latest.columns?.length)return;const lines=[latest.columns.map(formatCSV).join(',')];latest.values.forEach(r=>lines.push(r.map(formatCSV).join(',')));const content='\uFEFF'+lines.join('\r\n');const blob=new Blob([content],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=(root.dataset.project||'analyse').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'-resultats.csv';document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);}
async function init(){try{
 const [qRes,pRes]=await Promise.all([fetch('queries.json'),fetch('resultats_valides.json')]);
 if(!qRes.ok||!pRes.ok)throw new Error('Impossible de charger les fichiers JSON. Ouvrez le projet depuis un serveur web (GitHub Pages), et non en double-cliquant sur le fichier HTML.');
 presets=await qRes.json();preview=await pRes.json();
 ui.preset.replaceChildren();presets.forEach((p,i)=>{let opt=document.createElement('option');opt.value=String(i);opt.textContent=(i+1)+'. '+p.name;ui.preset.append(opt);});ui.preset.disabled=false;ui.editor.disabled=false;ui.reset.disabled=false;ui.preset.value='0';chooseIndex(0);
 ui.preset.addEventListener('change',()=>chooseIndex(Number(ui.preset.value)));
 ui.run.addEventListener('click',executeSQL);ui.reset.addEventListener('click',()=>{ui.editor.value=presets[currentIndex].sql;if(db)executeSQL();else showPreview();});ui.export.addEventListener('click',downloadCSV);
 if(typeof window.initSqlJs!=='function')throw new Error('Le moteur SQLite WebAssembly n’a pas pu être chargé. Vérifiez votre connexion Internet.');
 setStatus('Initialisation de SQLite…','is-loading');
 const SQL=await window.initSqlJs({locateFile:file=>'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/'+file});
 const dbRes=await fetch(root.dataset.database);if(!dbRes.ok)throw new Error('Base SQLite introuvable ('+dbRes.status+').');
 const bytes=new Uint8Array(await dbRes.arrayBuffer());db=new SQL.Database(bytes);db.exec('PRAGMA query_only=ON;');
 ui.run.disabled=false;setStatus('SQLite prêt · 100 % navigateur','is-ready');executeSQL();
 }catch(e){setStatus('Aperçu seulement','is-fallback');setFeedback('Mode aperçu : '+e.message+' Les résultats pré-calculés restent consultables.',true);ui.run.disabled=true;ui.editor.disabled=true;}}
init();
})();
