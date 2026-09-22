const grid=document.getElementById('grid');
const filtersEl=document.getElementById('filters');
const cats=["Усі",...[...new Set(DATA.map(d=>d.cat))]];
let activeCat="Усі",query="";

cats.forEach((c,i)=>{
  const b=document.createElement('button');
  b.className='chip'+(i===0?' active':'');b.textContent=c;
  b.onclick=()=>{activeCat=c;[...filtersEl.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');render();};
  filtersEl.appendChild(b);
});

function matches(d){
  if(activeCat!=="Усі"&&d.cat!==activeCat)return false;
  if(!query)return true;
  const hay=(d.name+" "+d.sub+" "+d.cat+" "+d.brands.join(" ")+" "+d.rows.flat().join(" ")).toLowerCase();
  return hay.includes(query);
}

function highlight(text) {
  if (!query) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');

  return String(text).replace(regex, '<mark class="search-highlight">$1</mark>');
}

function render(){
  const list=DATA.filter(matches);grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="empty">За запитом нічого не знайдено. Спробуйте «диск», «125», «Р60» або «дріт».</div>';return;}
  list.forEach(d=>{
    const card=document.createElement('article');card.className='card';
    card.onclick = () => {
        window.location.href = `product_page.html?id=${d.id}`;
    };
    const brands=d.brands.map(b => `<span class="brand-tag">${highlight(b)}</span>`).join('');
    const head=d.cols.map(c=>`<th>${c}</th>`).join('');
    const body=d.rows.map(r => `
    <tr class="size-row">
        <td>${highlight(r.diameter)}</td>
        <td>
            <div class="variants" style="grid-template-columns: repeat(${r.thickness.length}, 1fr)">
                ${r.thickness.map(x => `<span>${highlight(x)}</span>`).join("")}
            </div>
        </td>
    </tr>

    <tr class="price-row">
        <td class="price-label">Ціна</td>
        <td>
            <div class="prices" style="grid-template-columns: repeat(${r.prices.length}, 1fr)">
                ${r.prices.map(x => `<span>${x}</span>`).join("")}
            </div>
        </td>
    </tr>
`).join("");

    card.innerHTML=`
      <div class="card-media">
  <div class="brands">${brands}</div>
  <span class="cat-pill">${d.cat}</span>

  <div class="product-slider">
    <img
      class="slider-img"
      src="${d.images ? d.images[0] : d.img}"
      alt="${d.name}"
      loading="lazy"
    >

    ${d.images && d.images.length > 1 ? `
      <button class="slider-btn slider-prev" type="button">‹</button>
      <button class="slider-btn slider-next" type="button">›</button>

      <div class="slider-dots">
        ${d.images.map((_, i) =>
          `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`
        ).join('')}
      </div>
    ` : ''}
  </div>
</div>
      <div class="card-head"><h3>${highlight(d.name)}</h3><div class="sub">${highlight(d.sub)}</div></div>
      <div class="card-body"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>
      <div class="card-foot"><span class="n">${d.rows.length} позиц.</span>
        <button class="btn-ask" data-name="${d.name}">Запит ціни</button></div>`;
    grid.appendChild(card);
    if (d.images && d.images.length > 1) {
  let currentImage = 0;

  const img = card.querySelector(".slider-img");
  const prev = card.querySelector(".slider-prev");
  const next = card.querySelector(".slider-next");
  const dots = card.querySelectorAll(".slider-dot");

  function showImage(index) {
    currentImage = index;

    if (currentImage < 0) {
      currentImage = d.images.length - 1;
    }

    if (currentImage >= d.images.length) {
      currentImage = 0;
    }

    img.src = d.images[currentImage];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentImage);
    });
  }

  prev.onclick = () => {
    showImage(currentImage - 1);
  };

  next.onclick = () => {
    showImage(currentImage + 1);
  };
}
  });
  document.querySelectorAll('.btn-ask').forEach(b=>b.onclick=()=>askPrice(b.dataset.name));
}
function askPrice(name){
  const subj=encodeURIComponent("Запит ціни: "+name);
  const body=encodeURIComponent("Доброго дня! Цікавить ціна та наявність:\n\n• "+name+" — \n\nКількість: \nМісто доставки: ");
  showToast(name);
  setTimeout(()=>{window.location.href=`mailto:info.specelektrod@gmail.com?subject=${subj}&body=${body}`;},500);
}
const toast=document.getElementById('toast');let tT;
function showToast(name){toast.innerHTML=`Формуємо запит: <b>${name}</b> → відкриваю пошту`;toast.classList.add('show');clearTimeout(tT);tT=setTimeout(()=>toast.classList.remove('show'),3200);}
document.getElementById('q').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});
document.getElementById('st-cat').textContent=new Set(DATA.map(d=>d.cat)).size;
document.getElementById('st-sku').textContent=DATA.reduce((s,d)=>s+d.rows.length,0)+'+';
document.getElementById('yr').textContent=new Date().getFullYear();
render();