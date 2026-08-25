const PRICE = "Ціна";
const DATA = [
  {cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["ATAMAN"],
   name:"Диск відрізний", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["1,0 мм", "1,2 мм", "1,6 мм"],
      prices: ["15,00", "16,00", "17,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["20,00", "22,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["2,0 мм", "2,5 мм"],
      prices: ["40,00", "42,00"]
    },
    {
      diameter: "300(305) мм",
      thickness: ["3,0 мм", "3,5 мм"],
      prices: ["60,00", "70,00"]
    },
    {
      diameter: "350(355) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["100,00", "120,00"]
    },
    {
      diameter: "400(405) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["150,00", "160,00"]
    }
   ]},

  {cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["GERRARD"],
   name:"Диск відрізний", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["1,0 мм", "1,2 мм", "1,6 мм"],
      prices: ["15,00", "16,00", "17,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["20,00", "22,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["2,0 мм", "2,5 мм"],
      prices: ["40,00", "42,00"]
    },
    {
      diameter: "300(305) мм",
      thickness: ["3,0 мм", "3,5 мм"],
      prices: ["60,00", "70,00"]
    },
    {
      diameter: "350(355) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["100,00", "120,00"]
    },
    {
      diameter: "400(405) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["150,00", "160,00"]
    } 
   ]},

  {cat:"Відрізні диски", images:["images/photo_2026-08-15_18-05-12.jpg", "images/photo_2026-08-15_18-05-14.jpg"], brands:["ЗАК"],
   name:"Диск відрізний", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["1,0 мм", "1,2 мм", "1,6 мм"],
      prices: ["15,00", "16,00", "17,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["20,00", "22,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["2,0 мм", "2,5 мм"],
      prices: ["40,00", "42,00"]
    },
    {
      diameter: "300(305) мм",
      thickness: ["3,0 мм", "3,5 мм"],
      prices: ["60,00", "70,00"]
    },
    {
      diameter: "350(355) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["100,00", "120,00"]
    },
    {
      diameter: "400(405) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["150,00", "160,00"]
    }
   ]},

  {cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["Klingspor Kronenflex"],
   name:"Диск відрізний", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["1,0 мм", "1,2 мм", "1,6 мм"],
      prices: ["15,00", "16,00", "17,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["20,00", "22,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["1,6 мм", "2,0 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["2,0 мм", "2,5 мм"],
      prices: ["40,00", "42,00"]
    },
    {
      diameter: "300(305) мм",
      thickness: ["3,0 мм", "3,5 мм"],
      prices: ["60,00", "70,00"]
    },
    {
      diameter: "350(355) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["100,00", "120,00"]
    },
    {
      diameter: "400(405) мм",
      thickness: ["3,5 мм", "4,0 мм"],
      prices: ["150,00", "160,00"]
    }
   ]},


  {cat:"Зачисні диски", img:"images/Шліф диск Ataman.jpg", brands:["ATAMAN"],
   name:"Диск зачисний", sub:"125 мм, Т27 / Т29",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["30,00", "32,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["40,00", "50,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["60,00", "70,00"]
    },
   ]},

  {cat:"Зачисні диски", img:"images/Шліф диск Gerrard.jpg", brands:["GERRARD"],
   name:"Диск зачисний", sub:"125 мм, Т27 / Т29",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["30,00", "32,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["40,00", "50,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["60,00", "70,00"]
    },
   ]},

  {cat:"Зачисні диски", img:"images/Шліф диск ZAK.jpg", brands:["ЗАК"],
   name:"Диск зачисний", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["30,00", "32,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["40,00", "50,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["60,00", "70,00"]
    },
   ]},

  {cat:"Зачисні диски", img:"images/Шліф диск Kronpflex.jpg", brands:["Klingspor Kronenflex"],
   name:"Диск зачисний", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Діаметр","Товщина"],
   rows:[
    {
      diameter: "125 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["25,00", "26,00"]
    },
    {
      diameter: "150 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["30,00", "32,00"]
    },
    {
      diameter: "180 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["40,00", "50,00"]
    },
    {
      diameter: "230 мм",
      thickness: ["6,0 мм", "6,3 мм"],
      prices: ["60,00", "70,00"]
    },
   ]},



  {cat:"Зачисні диски", img:"images/photo_2026-08-15_18-05-12.jpg", brands:["BEST","Dneprometiz"],
   name:"Шліфувальний КЛТ Диск", sub:"СВ08Г2С, для напівавтомата",
   cols:["Зерно","Тип"],
   rows:[
    {
      diameter: "Р 40",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 60",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 80",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 100",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 120",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-12.jpg", brands:["GERRARD","BEST"],
   name:"Шліфувальний КЛТ Диск", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Зерно","Тип"],
   rows:[
    {
      diameter: "Р 40",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 60",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 80",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 100",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 120",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зачисні диски", img:"images/photo_2026-08-15_18-05-12.jpg", brands:["BEST","GERRARD"],
   name:"Шліфувальний КЛТ Диск", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Зерно","Тип"],
   rows:[
    {
      diameter: "Р 40",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 60",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 80",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 100",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 120",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-12.jpg", brands:["BEST"],
   name:"Шліфувальний КЛТ Диск", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Зерно","Тип"],
   rows:[
    {
      diameter: "Р 40",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 60",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 80",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 100",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Р 120",
      thickness: ["Т29", "Т27"],
      prices: ["20,00", "21,00"]
    },
   ]},



  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий» 90 пелюстків", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий Оксид Алюмінію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["BEST"],
   name:"Пелюстковий «Карбід Кремнію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["BEST"],
   name:"Пелюстковий «Оксид Алюмінію — Електрокорунд»", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},



  {cat:"Електроди", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qj.png", brands:["Sumy Electrode","Astorel-RC"],
   name:"Зварювальні електроди", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Марка","Діаметр","Фасування"],
   rows:[["АНО-21","3 мм","2,5 кг · 5 кг"],["АНО-21","4 мм","2,5 кг · 5 кг"],["АНО-36","3 мм","2,5 кг"],["АНО-36","4 мм","2,5 кг · 5 кг"]]},

  {cat:"Зварювальний дріт", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qj.png", brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},

   {cat:"Відрізні диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qj.png", brands:["GERRARD","BEST"],
   name:"Диск відрізний", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","1,0 · 1,2 · 1,6 мм",PRICE],["150 мм","1,6 · 2,0 мм",PRICE],["180 мм","1,6 · 2,0 мм",PRICE],["230 мм","2,0 · 2,5 мм",PRICE],["300 мм","3,0 · 3,5 мм",PRICE],["355 мм","3,5 мм",PRICE],["400 мм","3,5 · 4,0 мм",PRICE]]},

  {cat:"Зачисні диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qj.png", brands:["BEST","GERRARD"],
   name:"Диск зачисний", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Товщина","Ціна"],
   rows:[["125 мм","6,0 мм",PRICE],["150 мм","6,0 мм",PRICE],["180 мм","6,0 мм",PRICE],["230 мм","6,0 мм",PRICE]]},



  {cat:"Пелюсткові диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qjф.png", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Тип","Жорсткість"],
   rows:[["125 мм","Т 27","Soft"],["125 мм","Т 27","Medium"],["125 мм","Т 27","Hard"]]},

  {cat:"Пелюсткові диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qjф.png", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий» 90 пелюстків", sub:"Підвищений ресурс, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qjф.png", brands:["BEST"],
   name:"Пелюстковий «Цирконієвий Оксид Алюмінію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE]]},

  {cat:"Пелюсткові диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqn2qjф.png", brands:["BEST"],
   name:"Пелюстковий «Карбід Кремнію»", sub:"125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},



  {cat:"Пелюсткові диски", img:"images/8j8oxf8itlbiet8aewyjwui51qhqnц2qj.png", brands:["BEST"],
   name:"Пелюстковий «Оксид Алюмінію — Електрокорунд»", sub:"Нормальний, 125 мм, Т27 / Т29",
   cols:["Тип","Зерно","Ціна"],
   rows:[["Т 27 / Т 29","Р 40",PRICE],["Т 27 / Т 29","Р 60",PRICE],["Т 27 / Т 29","Р 80",PRICE],["Т 27 / Т 29","Р 100",PRICE],["Т 27 / Т 29","Р 120",PRICE]]},

  {cat:"Електроди", img:"images/8j8oxf8itlbiet8aewyjwui51qhqnц2qj.png", brands:["Sumy Electrode","Astorel-RC"],
   name:"Зварювальні електроди", sub:"АНО-21 · АНО-36, рутилові",
   cols:["Марка","Діаметр","Фасування"],
   rows:[["АНО-21","3 мм","2,5 кг · 5 кг"],["АНО-21","4 мм","2,5 кг · 5 кг"],["АНО-36","3 мм","2,5 кг"],["АНО-36","4 мм","2,5 кг · 5 кг"]]},

  {cat:"Зварювальний дріт", img:"images/8j8oxf8itlbiet8aewyjwui51qhqnц2qj.png", brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},
  
   {cat:"Зварювальний дріт", img:"images/8j8oxf8itlbiet8aewyjwui51qhqnц2qj.png", brands:["BEST","Dneprometiz"],
   name:"Дріт зварювальний омідненний", sub:"СВ08Г2С, для напівавтомата",
   cols:["Бренд","Діаметр","Котушка"],
   rows:[["BEST","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"],["Dneprometiz","0,8 · 1,0 · 1,2 мм","5 кг · 15 кг"]]},

  ];

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
function render(){
  const list=DATA.filter(matches);grid.innerHTML='';
  if(!list.length){grid.innerHTML='<div class="empty">За запитом нічого не знайдено. Спробуйте «диск», «125», «Р60» або «дріт».</div>';return;}
  list.forEach(d=>{
    const card=document.createElement('article');card.className='card';
    const brands=d.brands.map(b=>`<span class="brand-tag">${b}</span>`).join('');
    const head=d.cols.map(c=>`<th>${c}</th>`).join('');
    const body=d.rows.map(r => `
    <tr class="size-row">
        <td>${r.diameter}</td>
        <td>
            <div class="variants" style="grid-template-columns: repeat(${r.thickness.length}, 1fr)">
                ${r.thickness.map(x => `<span>${x}</span>`).join("")}
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
      <div class="card-head"><h3>${d.name}</h3><div class="sub">${d.sub}</div></div>
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