(()=>{'use strict';
const $=id=>document.getElementById(id);
const models=[{name:'Ava',skin:'#e9aa83',shade:'#cf856e',hair:'#4a2b35',eyes:'#654654',avatar:'✿'},{name:'Mia',skin:'#f3c9a8',shade:'#d8a281',hair:'#6e4433',eyes:'#577472',avatar:'♡'},{name:'Zara',skin:'#a96e51',shade:'#81513c',hair:'#282734',eyes:'#463f5c',avatar:'★'},{name:'Luna',skin:'#d9a077',shade:'#ac725c',hair:'#a44c68',eyes:'#6c4b62',avatar:'✦'}];
const colors=['#ff5da7','#9d7bff','#37bcd7','#ffba3c','#68d88b','#ff7772','#4177d9','#f2e8f7','#38384f','#f176d8','#a5da4e','#ed5a4a'];
const catalog={
 dress:[['daydream','Daydream'],['princess','Princess'],['party','Party Pop'],['summer','Sunshine'],['ballgown','Ball Gown'],['sparkle','Sparkle'],['layered','Ruffles'],['shirt','Shirt Dress']],
 top:[['tee','Cute Tee'],['blouse','Puff Blouse'],['crop','Crop Top'],['hoodie','Hoodie'],['cardigan','Cardigan'],['halter','Halter'],['bow','Bow Top'],['jacket','Jacket']],
 bottom:[['skirt','Skater Skirt'],['jeans','Flared Jeans'],['shorts','Shorts'],['pleated','Pleated'],['maxi','Maxi Skirt'],['pants','Wide Pants'],['tutu','Tutu'],['overall','Overalls']],
 shoes:[['sneakers','Sneakers'],['boots','Tall Boots'],['heels','Party Heels'],['flats','Ballet Flats'],['sandals','Sandals'],['highTops','High Tops'],['ankleBoot','Ankle Boots'],['platform','Platforms']],
 hair:[['long','Long Waves'],['bob','Cute Bob'],['ponytail','Ponytail'],['buns','Space Buns'],['braid','Side Braid'],['curly','Big Curls'],['pixie','Pixie'],['straight','Straight']],
 accessory:[['none','No Extras'],['bag','Handbag'],['crown','Tiara'],['glasses','Sunglasses'],['necklace','Necklace'],['bow','Hair Bow'],['hat','Sun Hat'],['headphones','Headphones']]
};
const labels={dress:'Dresses',top:'Tops',bottom:'Bottoms',shoes:'Shoes',hair:'Hair',accessory:'Extras'};
const icons={dress:'👗',top:'👚',bottom:'👖',shoes:'👟',hair:'🎀',accessory:'💍'};
const state={model:0,category:'dress',dress:'daydream',top:'blouse',bottom:'skirt',shoes:'flats',hair:'long',accessory:'none',color:'#ff5da7',scene:0,mode:'dress'};
const backgrounds=[{name:'Pink Dream',top:'#ffe0f2',bottom:'#ffc4db',floor:'#ffb0cb',stars:'#fff4b6'},{name:'Lavender',top:'#e8d9ff',bottom:'#d7c4ff',floor:'#bba8f3',stars:'#fff'},{name:'Blue Skies',top:'#d5f7ff',bottom:'#c8eaff',floor:'#adddec',stars:'#fff'},{name:'Sunny',top:'#fff1cd',bottom:'#ffe1a6',floor:'#f4c489',stars:'#fff7df'}];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const blend=(hex,amt)=>{const v=parseInt(hex.slice(1),16);const c=[v>>16&255,v>>8&255,v&255].map(n=>Math.max(0,Math.min(255,Math.round(n+(amt>=0?(255-n):n)*amt))));return '#'+c.map(n=>n.toString(16).padStart(2,'0')).join('');};
const path=(d,fill,more='')=>`<path d="${d}" fill="${fill}" ${more}/>`;
function garmentSVG(kind,type,color,preview=false){const dark=blend(color,-.18),light=blend(color,.30);let x='';const topShape='M137 166 Q151 154 165 151 L185 151 Q199 154 213 166 L228 189 L213 201 L206 182 L204 234 Q175 247 146 234 L144 183 L137 200 L121 188Z';
 if(kind==='dress'){
  let skirt='M146 222 Q175 234 204 222 L232 355 Q175 370 117 355Z';
  if(type==='princess'||type==='ballgown')skirt='M147 222 Q175 231 203 222 Q222 266 258 355 Q176 381 94 355 Q126 278 147 222Z';
  if(type==='summer'||type==='shirt')skirt='M146 222 Q175 234 204 222 L219 331 Q176 343 129 331Z';
  if(type==='party')skirt='M146 218 Q175 235 204 218 L229 301 Q175 317 122 301Z';
  x+=path(skirt,color,`stroke="${dark}" stroke-width="2"`);
  if(type==='layered'||type==='princess'||type==='ballgown'){x+=path('M116 312 Q175 344 233 312 L241 343 Q175 369 109 343Z',light,'opacity=".8"');x+=path('M129 269 Q175 291 220 270 L228 294 Q175 314 121 294Z',light,'opacity=".5"');}
  if(type==='sparkle'||type==='party')for(const [cx,cy] of [[154,267],[187,294],[167,328],[211,280],[145,302]])x+=`<path d="M${cx} ${cy-6}l2 5 6 1-6 2-2 6-2-6-6-2 6-1Z" fill="#fffbe5"/>`;
  if(type==='daydream'||type==='summer')for(const [cx,cy] of [[154,267],[196,299],[170,324],[209,337]])x+=`<circle cx="${cx}" cy="${cy}" r="5" fill="${light}"/><circle cx="${cx}" cy="${cy}" r="2" fill="#fff"/>`;
  x+=path(topShape,color,`stroke="${dark}" stroke-width="2"`);
  x+=path('M154 153 Q176 181 196 153', 'none',`stroke="${light}" stroke-width="5"`);
  if(type==='princess'||type==='ballgown')x+=path('M147 225 Q174 232 204 225','none',`stroke="#fdf5d4" stroke-width="7"`);
  if(type==='shirt')x+=path('M177 175 L177 325','none',`stroke="${light}" stroke-width="3" stroke-dasharray="3 8"`);
 }
 if(kind==='top'){
   let d=topShape;if(type==='crop')d='M137 166 Q151 154 165 151 L185 151 Q199 154 213 166 L225 188 L210 199 L205 181 L204 207 Q176 216 146 207 L144 181 L139 199 L124 188Z';
   if(type==='halter')d='M161 153 L189 153 L204 175 L206 232 Q175 246 145 232 L147 175Z';
   if(type==='hoodie'||type==='jacket')d='M137 162 Q151 149 165 151 L185 151 Q201 150 213 162 L232 218 L213 224 L204 181 L206 244 Q175 250 144 244 L146 181 L137 224 L118 218Z';
   x+=path(d,color,`stroke="${dark}" stroke-width="2"`);
   if(type==='blouse'||type==='bow')x+=`<circle cx="175" cy="174" r="7" fill="${light}"/>`+path('M175 176 Q154 151 151 175 Q160 193 175 176 Q195 150 200 175 Q191 192 175 176',light);
   if(type==='tee')x+=`<path d="M160 196l10-12 6 11 11-10 5 12-16 16Z" fill="${light}"/>`;
   if(type==='cardigan'||type==='jacket')x+=path('M175 166L175 239','none',`stroke="${dark}" stroke-width="4" stroke-dasharray="5 6"`);
   if(type==='hoodie')x+=path('M151 153 Q175 133 201 153','none',`stroke="${dark}" stroke-width="8"`);
 }
 if(kind==='bottom'){
  if(['skirt','pleated','maxi','tutu'].includes(type)){
    const max=type==='maxi';const hem=max?379:314;
    x+=path(`M149 227 Q175 232 201 227 L${max?226:226} ${hem} Q175 ${hem+12} 124 ${hem}Z`,color,`stroke="${dark}" stroke-width="2"`);
    if(type==='pleated')for(const xx of [143,156,170,186,200])x+=path(`M175 232L${xx} 309`,'none',`stroke="${light}" stroke-width="3"`);
    if(type==='tutu')for(const yy of [279,294,308])x+=path(`M130 ${yy}Q175 ${yy+25} 220 ${yy}`,'none',`stroke="${light}" stroke-width="8" opacity=".7"`);
  }else if(type==='shorts')x+=path('M148 229L203 229L207 282L176 281L173 272L170 282L143 280Z',color,`stroke="${dark}" stroke-width="2"`);
  else {
    x+=path(`M147 229L203 229L210 ${type==='jeans'?384:378}L182 ${type==='jeans'?382:376}L176 268L171 ${type==='jeans'?382:376}L140 ${type==='jeans'?384:378}Z`,color,`stroke="${dark}" stroke-width="2"`);
    x+=path('M176 258L176 339','none',`stroke="${dark}" stroke-width="2"`);
    if(type==='overall'){x+=path('M154 230 L154 172 L166 172 L166 233 M189 230L189 172L201 172L201 233','none',`stroke="${dark}" stroke-width="10"`);}
  }
 }
 if(kind==='shoes'){
  const tall=type==='boots',ankle=type==='ankleBoot',height=tall?337:ankle?372:397;
  for(const center of [155,194]){
   const y=height;x+=`<path d="M${center-11} ${y}L${center+10} ${y}L${center+11} 419Q${center+28} 425 ${center+22} 434 L${center-22} 434Q${center-28} 425 ${center-12} 416Z" fill="${color}" stroke="${dark}" stroke-width="2"/>`;
   if(['sneakers','highTops'].includes(type))x+=path(`M${center-8} 418L${center+11} 418`,'none',`stroke="#fff" stroke-width="4" stroke-dasharray="4 3"`);
   if(type==='heels')x+=path(`M${center+14} 431L${center+17} 443`,'none',`stroke="${dark}" stroke-width="4"`);
   if(type==='sandals')x+=path(`M${center-9} 423L${center+12} 423`,'none',`stroke="${light}" stroke-width="6"`);
   if(type==='platform')x+=path(`M${center-22} 434L${center+22} 434`,'none',`stroke="#fff" stroke-width="7"`);
  }
 }
 return x;
}
function hairBack(type,color){const shade=blend(color,-.22);let p='';if(['long','straight','curly','braid','ponytail'].includes(type)){
 p+=path('M140 62 Q122 93 126 172L152 204 L151 111L205 111L211 204L234 169Q230 99 214 60Z',color);
 if(type==='ponytail')p+=path('M208 82Q260 107 239 211Q217 209 221 157Q231 115 204 101Z',shade);
 if(type==='braid')for(let y=111;y<225;y+=17)p+=`<ellipse cx="226" cy="${y}" rx="10" ry="13" fill="${y%2?shade:color}"/>`;
 if(type==='curly')for(const [x,y] of [[129,117],[127,142],[135,165],[215,150],[224,180],[224,124],[138,189]])p+=`<circle cx="${x}" cy="${y}" r="18" fill="${color}"/>`;
 }
 if(type==='buns')p+=`<circle cx="133" cy="72" r="28" fill="${color}"/><circle cx="216" cy="72" r="28" fill="${color}"/>`;
 return p;
}
function hairFront(type,color){const shade=blend(color,-.20);let p=path('M136 100 Q132 37 176 35 Q223 37 217 105 Q202 77 190 70 Q159 94 136 100Z',color);
 if(type==='pixie')p=path('M139 89Q129 48 168 42L180 29L193 44Q226 44 213 98L204 78Q174 83 162 69Z',color);
 if(type==='bob')p+=path('M138 74 Q114 109 132 160L150 158Q139 112 145 99 M210 74Q235 110 220 159L204 159Q215 110 204 100',color);
 if(type==='curly')for(const [x,y] of [[144,55],[168,45],[192,48],[213,66],[137,85],[204,91]])p+=`<circle cx="${x}" cy="${y}" r="17" fill="${x%2?shade:color}"/>`;
 if(type==='long')p+=path('M143 83Q158 110 150 154','none',`stroke="${shade}" stroke-width="5"`);
 return p;
}
function accessorySVG(type,color){const dark=blend(color,-.20);switch(type){
 case 'bag':return path('M220 228 Q257 203 261 244 L264 295Q240 309 218 288Z',color,`stroke="${dark}" stroke-width="3"`)+path('M225 238Q218 202 244 211Q258 218 251 243','none',`stroke="${dark}" stroke-width="5"`);
 case 'crown':return path('M150 44L156 22L169 37L176 15L185 37L199 20L204 46Z',color,`stroke="${dark}" stroke-width="2"`);
 case 'glasses':return `<rect x="146" y="99" width="26" height="19" rx="9" fill="${dark}" opacity=".85"/><rect x="180" y="99" width="26" height="19" rx="9" fill="${dark}" opacity=".85"/>`+path('M172 106H181M140 106H146M206 106H213','none',`stroke="${color}" stroke-width="4"`);
 case 'necklace':return path('M161 152Q175 178 190 152','none',`stroke="${color}" stroke-width="4"`)+`<circle cx="175" cy="174" r="6" fill="${color}"/>`;
 case 'bow':return path('M190 69Q207 46 214 72Q206 92 190 73Q175 57 163 76Q173 92 190 73',color)+`<circle cx="190" cy="72" r="5" fill="${dark}"/>`;
 case 'hat':return `<ellipse cx="176" cy="63" rx="70" ry="12" fill="${color}"/>`+path('M142 63Q135 12 176 14Q217 12 210 63Z',color,`stroke="${dark}" stroke-width="2"`)+path('M144 57H208','none',`stroke="#fff7db" stroke-width="6"`);
 case 'headphones':return path('M139 118Q127 40 176 39Q225 40 214 118','none',`stroke="${color}" stroke-width="12"`)+`<rect x="126" y="99" width="17" height="35" rx="8" fill="${dark}"/><rect x="209" y="99" width="17" height="35" rx="8" fill="${dark}"/>`;
 default:return '';
 }}
function modelSVG({mini=false,photo=false}={}){
 const m=models[state.model],col=state.color,bg=backgrounds[state.scene];
 const dress=state.mode==='dress',garments=dress?garmentSVG('dress',state.dress,col):garmentSVG('bottom',state.bottom,blend(col,-.09))+garmentSVG('top',state.top,col);
 const head=`<ellipse cx="175" cy="102" rx="40" ry="55" fill="${m.skin}"/><path d="M144 109Q174 128 205 109" fill="none" stroke="${m.shade}" stroke-width="1.5" opacity=".4"/><path d="M154 107Q161 100 169 107M182 107Q191 100 198 107" fill="none" stroke="${m.eyes}" stroke-width="3.4" stroke-linecap="round"/><circle cx="163" cy="107" r="2" fill="#292333"/><circle cx="191" cy="107" r="2" fill="#292333"/><path d="M171 127Q177 133 184 127" fill="none" stroke="#bd626e" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="149" cy="120" rx="9" ry="5" fill="#e88891" opacity=".35"/><ellipse cx="203" cy="120" rx="9" ry="5" fill="#e88891" opacity=".35"/>`;
 const figure=`<path d="M154 140L154 160L196 160L196 140Z" fill="${m.skin}"/><path d="M151 152Q131 160 125 186L118 251Q114 267 119 273Q128 280 133 262L150 199L145 235Q175 246 205 235L201 198L219 265Q225 279 233 267L227 245L225 187Q218 160 198 152L190 147Q176 163 161 147Z" fill="${m.skin}" stroke="${m.shade}" stroke-width="1.2"/><path d="M147 228Q175 240 203 228L205 270L204 329L205 402Q203 418 191 418Q181 415 179 402L175 294L170 402Q168 418 155 418Q144 414 146 399L147 328Z" fill="${m.skin}" stroke="${m.shade}" stroke-width="1.2"/>`;
 const hair=state.hair==='pixie'?m.hair:state.model===3&&state.hair==='long'?'#a44c68':m.hair;
 const decor=mini?'':`<circle cx="48" cy="91" r="4" fill="${bg.stars}"/><path d="M291 91l6 13 13 5-13 5-6 13-5-13-13-5 13-5Z" fill="${bg.stars}"/><path d="M63 310l4 9 9 3-9 4-4 9-4-9-9-4 9-3Z" fill="${bg.stars}" opacity=".8"/><circle cx="275" cy="334" r="5" fill="${bg.stars}"/>`;
 const scene=mini?'':`<defs><linearGradient id="sceneGradient" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${bg.top}"/><stop offset="1" stop-color="${bg.bottom}"/></linearGradient></defs><rect width="350" height="480" fill="url(#sceneGradient)"/><ellipse cx="175" cy="457" rx="165" ry="37" fill="${bg.floor}"/><ellipse cx="175" cy="440" rx="73" ry="12" fill="#5e355a" opacity=".13"/>${decor}`;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 480" preserveAspectRatio="xMidYMid meet" aria-label="${esc(m.name)} wearing selected outfit">${scene}<g>${hairBack(state.hair,hair)}${figure}${garments}${garmentSVG('shoes',state.shoes,blend(col,-.12))}${head}${hairFront(state.hair,hair)}${accessorySVG(state.accessory,blend(col,-.04))}</g></svg>`;
 return svg;
}
function itemSVG(kind,type){const c=state.color;let body='';if(kind==='dress')body=garmentSVG(kind,type,c);else if(kind==='top')body=garmentSVG(kind,type,c);else if(kind==='bottom')body=garmentSVG(kind,type,c);else if(kind==='shoes')body=garmentSVG(kind,type,c);else if(kind==='hair')body=hairBack(type,'#704656')+hairFront(type,'#704656');else body=accessorySVG(type,c);
 // The preview is a crop of the same vector paths, using coordinates appropriate to the item category.
 const view=kind==='hair'?'108 11 134 205':kind==='accessory'?(type==='bag'?'204 184 79 140':'104 8 150 175'):kind==='shoes'?'114 326 122 129':kind==='bottom'?'107 201 139 205':kind==='top'?'107 141 139 125':'91 138 169 244';
 return `<svg viewBox="${view}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body||`<circle cx="177" cy="96" r="29" fill="#ead3ed"/><path d="M164 95h26" stroke="#9c7b9a" stroke-width="5"/>`}</svg>`;
}
function paint(){ $('stage').innerHTML=modelSVG();$('modelName').textContent=models[state.model].name;$('modelAvatar').textContent=models[state.model].avatar;renderModels();renderItems();renderColors();}
function renderModels(){ $('models').innerHTML=models.map((m,i)=>`<button class="model-btn ${i===state.model?'active':''}" data-index="${i}" aria-pressed="${i===state.model}"><svg class="model-thumb" viewBox="115 34 120 150" aria-hidden="true"><path d="M136 93Q123 34 175 30Q228 33 214 97L221 178L133 178Z" fill="${m.hair}"/><ellipse cx="176" cy="87" rx="37" ry="47" fill="${m.skin}"/><path d="M137 81Q133 33 175 32Q218 34 215 84L202 65Q173 84 137 81Z" fill="${m.hair}"/><path d="M144 163L207 163L224 212H127Z" fill="${colors[i*3]}"/><circle cx="160" cy="92" r="3" fill="${m.eyes}"/><circle cx="190" cy="92" r="3" fill="${m.eyes}"/><path d="M168 112Q175 118 182 112" stroke="#ab5872" fill="none" stroke-width="2"/></svg><strong>${esc(m.name)}</strong></button>`).join('');document.querySelectorAll('.model-btn').forEach(b=>b.addEventListener('click',()=>{state.model=+b.dataset.index;paint();}));}
function renderTabs(){ $('tabs').innerHTML=Object.keys(catalog).map(k=>`<button class="tab ${k===state.category?'active':''}" data-cat="${k}" aria-pressed="${k===state.category}">${icons[k]} ${labels[k]}</button>`).join('');document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{state.category=b.dataset.cat;renderTabs();renderItems();}));}
function renderItems(){const cat=state.category;$('categoryHeading').textContent=labels[cat];$('categoryCount').textContent=`${catalog[cat].length} styles`;const active=state[cat];$('items').innerHTML=catalog[cat].map(([id,name])=>`<button class="item ${id===active?'active':''}" data-item="${esc(id)}" aria-pressed="${id===active}">${itemSVG(cat,id)}<span>${esc(name)}</span></button>`).join('');document.querySelectorAll('.item').forEach(b=>b.addEventListener('click',()=>{state[cat]=b.dataset.item;if(cat==='dress')state.mode='dress';if(cat==='top'||cat==='bottom')state.mode='separates';paint();}));}
function renderColors(){ $('colors').innerHTML=colors.map(c=>`<button class="swatch ${c===state.color?'active':''}" style="--swatch:${c}" data-color="${c}" title="Color ${c}" aria-label="Select color ${c}" aria-pressed="${c===state.color}"></button>`).join('');document.querySelectorAll('.swatch').forEach(b=>b.addEventListener('click',()=>{state.color=b.dataset.color;paint();}));}
function toast(s){$('toast').textContent=s;}
function surprise(all=false){if(all){state.model=Math.floor(Math.random()*models.length);state.mode=Math.random()>.45?'dress':'separates';state.scene=Math.floor(Math.random()*backgrounds.length);}const kinds=all?Object.keys(catalog):[state.category];for(const kind of kinds){const arr=catalog[kind];state[kind]=arr[Math.floor(Math.random()*arr.length)][0];}state.color=colors[Math.floor(Math.random()*colors.length)];paint();toast(all?'A brand-new look! ✨':'New style unlocked! ✨');}
$('randomAll').addEventListener('click',()=>surprise(true));$('shuffleCategory').addEventListener('click',()=>surprise(false));$('bgChange').addEventListener('click',()=>{state.scene=(state.scene+1)%backgrounds.length;paint();toast(`Scene: ${backgrounds[state.scene].name}`);});$('reset').addEventListener('click',()=>{Object.assign(state,{dress:'daydream',top:'blouse',bottom:'skirt',shoes:'flats',hair:'long',accessory:'none',color:'#ff5da7',mode:'dress'});state.category='dress';renderTabs();paint();toast('Fresh start!');});
function downloadSVG(){const svg=modelSVG({photo:true});const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`color-pop-${models[state.model].name.toLowerCase()}-${Date.now()}.svg`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);toast('Your outfit image is ready to save!');}
$('snapshot').addEventListener('click',downloadSVG);
$('save').addEventListener('click',()=>{try{const saved=JSON.parse(localStorage.getItem('color-pop-saved')||'[]');saved.unshift({...state,created:new Date().toISOString()});localStorage.setItem('color-pop-saved',JSON.stringify(saved.slice(0,15)));toast(`Saved outfit #${Math.min(saved.length,15)} on this device ♡`);}catch{toast('Browser storage unavailable. Use Photo to save instead.');}});
renderTabs();paint();
})();