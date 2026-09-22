const PRICE = "Ціна";
const DATA = [
  {id: "product-1", group: "ataman",
   cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-03.jpg", brands:["ATAMAN"],
   name:"Диск відрізний «Атаман»", sub:"Метал / нержавіюча сталь, Виробництво КНР",
   description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
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

  {
   id: "product-2", 
   cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-10.jpg", brands:["GERRARD"],
   name:"Диск відрізний «Жерард»", sub:"Метал / нержавіюча сталь, Виробництво КНР",
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

  {id: "product-3", 
   cat:"Відрізні диски", images:["images/photo_2026-08-15_18-05-12.jpg", "images/photo_2026-08-15_18-05-14.jpg"], brands:["ЗАК"],
   name:"Диск відрізний «ЗАК»", sub:"Метал / Сталь, Виробництво Україна «Запорізький абразивний комбінат»",
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

  {id: "product-4", 
   cat:"Відрізні диски", img:"images/photo_2026-08-15_18-05-16.jpg", brands:["Klingspor Kronenflex"],
   name:"Диск відрізний «Klingspor»", sub:"Метал / нержавіюча сталь, Розроблено в Німеччині — виготовлено в Європі",
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


  {id: "product-5", group: "ataman",
   cat:"Зачисні диски", img:"images/photo_2026-09-03_15-14-03.jpg", brands:["ATAMAN"],
   name:"Диск зачисний «Атаман»", sub:"Тип T27 / T29",
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

  {cat:"Зачисні диски", img:"images/photo_2026-09-20_12-56-20.jpg", brands:["GERRARD"],
   name:"Диск зачисний «Жерард»", sub:"Тип T27 / T29",
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

  {cat:"Зачисні диски", img:"images/photo_2026-09-20_12-57-22.jpg", brands:["ЗАК"],
   name:"Диск зачисний «Klingspor»", sub:"Тип T27 / T29",
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

  {cat:"Зачисні диски", img:"images/photo_2026-09-20_12-58-28.jpg", brands:["Klingspor Kronenflex"],
   name:"Диск зачисний «ЗАК»", sub:"Тип T27 / T29",
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



  {cat:"Пелюсткові диски", img:"images/КЛТ 1.png", brands:["BEST"],
   name:"Диск пелюстковий шліфувальний КЛТ «Оксид Алюмінія – для обробки Сталі»", sub:"Тип T27 (КЛТ - 1 ) / T29 ( КЛТ - 2 )",
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


  {cat:"Пелюсткові диски", img:"images/haisser.png", brands:["HAISSER"],
   name:" Диск пелюстковий шліфувальний КЛТ   «Оксид Алюмінія – для обробки Сталі та загартовані та високоміцні сплави", sub:"Тип T27 (КЛТ - 1 ) / T29 ( КЛТ - 2 )",
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


  {cat:"Пелюсткові диски", img:"images/цирконий.png", brands:["BEST"],
   name:"Диск пелюстковий шліфувальний КЛТ   «Цирконієвий» 72 та90 пелюсток – для обробки нержавіючих та алюмінієвих виробів", sub:"Тип T27 (КЛТ - 1 ) / T29 ( КЛТ - 2 )",
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


  {cat:"Пелюсткові диски", img:"images/Корал.png", brands:["BEST"],
    name:"Зачисні коралові кола – Дрібнофракційні зерна, з карбіду кремнію", sub:"Тип T27 (КЛТ - 1 ) ",
    cols:["Зерно","Тип"],
    rows:[
    {
      diameter: "Р 40",
      thickness: ["Т27"],
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


   
 {cat:"Зварювальні дроти", img:"images/photo_2026-08-30_11-57-28.jpg", brands:["DNEPROMETIZ"],
   name:"Зварювальний дріт «Оміднений»", sub:"СВ08Г2С, для напівавтомата",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["5кг", "15к"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["5к", "15к"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["5к", "15к"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні електроди", img:"images/photo_2026-09-20_12-01-25.jpg", brands:["ASTOREL"],
   name:"Зварювальні єлектроди «Рутилові»", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "3",
      thickness: ["1кг", "2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "4",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "5",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні дроти", img:"images/photo_2026-09-20_12-01-37.jpg", brands:["WELDING DRAGON"],
   name:"Зварювальний дріт «Нержавійка 308/308L»", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні дроти", img:"images/photo_2026-09-20_12-01-42.png", brands:["WELDING DRAGON"],
   name:"Зварювальний дріт «Алюміній ER 4043/5356»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

    {cat:"Зварювальні дроти", img:"images/photo_2026-09-03_15-14-033.png", brands:["DNEPROMETIZ"],
   name:"Зварювальний дріт «Оміднений»", sub:"СВ08Г2С, для напівавтомата",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["5кг", "15к"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["5к", "15к"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["5к", "15к"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні електроди", img:"images/photo_2026-09-20_12-17-22.jpg", brands:["ASTOREL"],
   name:"Зварювальні єлектроди «Рутилові»", sub:"Метал / нержавіюча сталь, A60S-BF41",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "3",
      thickness: ["1кг", "2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "4",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "5",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні дроти", img:"images/photo_2026-08-30_11-57-43.jpg", brands:["WELDING DRAGON"],
   name:"Зварювальний дріт «Нержавійка 308/308L»", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Зварювальні дроти", img:"images/photo_2026-09-03_15-14-0314.png", brands:["WELDING DRAGON"],
   name:"Зварювальний дріт «Алюміній ER 4043/5356»", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},


{cat:"Розхідники на зварювання", img:"images/photo_2026-08-30_11-57-52.jpg", brands:["BEST","Dneprometiz"],
   name:"Комплектуючі для зварювальних робіт", sub:"Пальники MB / RF 15,24,36,40   Пальники TIG WP-9,18,26",
   cols:["Продукт","Тип"],
   rows:[
    {
      diameter: "Наконечники 0,8/1,0/1,2",
      thickness: ["М6", "М8", "М10"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Сопла MB / RF",
      thickness: ["15", "24", "36", "40"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Вставка для наконечника",
      thickness: ["М6", "М8", "М10"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Завихрювач керамічний",
      thickness: ["MB / RF 24","36","40"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Гусак",
      thickness: ["MB / RF 15","24","36","40"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Цанга тип WEа",
      thickness: ["TIG WP-9","18","26"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Сізи", img:"images/photo_2026-09-20_12-38-14.jpg", brands:["GERRARD","BEST"],
   name:"Засоби індивідуального захисту", sub:"Засоби захисту - Голови, Рук, Очей, Тіла",
   cols:["Продукт","Тип/Вага"],
   rows:[
    {
      diameter: "Рукавички ПВХ з крапкой",
      thickness: ["'5' 8511", "Твист 8611", "Корона 5611"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Кобиеированні",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "Кожані + Краги",
      thickness: ["2,5кг", "5кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

  {cat:"Свердла, бури", img:"images/photo_2026-09-20_12-47-40.jpg", brands:["BEST","GERRARD"],
   name:"Свердла та бури - витратні інструменти для створення отворів", sub:"Обдирка зварних швів, A60S-BF41",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    
   ]},

  {cat:"Мітчики, різці", img:"images/photo_2026-09-03_15-15-04.jpg", brands:["BEST"],
   name:"Металорізальний інструмент", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

   {cat:"Мітчики, різці", img:"images/photo_2026-09-03_15-14-03.png", brands:["BEST"],
   name:"Металорізальний інструмент", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

   {cat:"Мітчики, різці", img:"images/photo_2026-09-03_15-14-036.png", brands:["BEST"],
   name:"Металорізальний інструмент", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

   {cat:"Мітчики, різці", img:"images/photo_2026-09-20_12-29-58.jpg", brands:["BEST"],
   name:"Металорізальний інструмент", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},

   {cat:"Мітчики, різці", img:"images/photo_2026-09-20_12-29-10.jpg", brands:["BEST"],
   name:"Металорізальний інструмент", sub:"Шліфувальний, Т27 · soft / medium / hard",
   cols:["Діаметр","Вага"],
   rows:[
    {
      diameter: "0,8",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,0",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
    {
      diameter: "1,2",
      thickness: ["2кг", "7кг"],
      prices: ["20,00", "21,00"]
    },
   ]},
  
  ];