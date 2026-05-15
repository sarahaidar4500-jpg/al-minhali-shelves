// ====== الإعدادات ======
const WHATSAPP_NUMBER = "967772046780"; // غيّر الرقم هنا

const CATEGORIES=[
  {id:"all",label:"الكل"},
  {id:"supermarket",label:"السوبر ماركت"},
  {id:"storage",label:"التخزين"},
  {id:"heavy",label:"المستودعات الثقيلة"},
  {id:"chrome",label:"الكرومات"},
  {id:"other",label:"أخرى"},
];



// Icons
const I = {
  cart:'<svg class="icn" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  menu:'<svg class="icn" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  x:'<svg class="icn" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  plus:'<svg class="icn" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  minus:'<svg class="icn" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  trash:'<svg class="icn" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  eye:'<svg class="icn" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  wa:'<svg class="icn" viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-1.2 4.4L21 22l-6.3-1.6A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  arrow:'<svg class="icn" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  phone:'<svg class="icn" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/></svg>',
  mail:'<svg class="icn" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>',
  pin:'<svg class="icn" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  fb:'<svg class="icn" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  ig:'<svg class="icn" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1 4 4 0 0 1 7.9-1z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>',
  shield:'<svg class="icn" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  truck:'<svg class="icn" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  wrench:'<svg class="icn" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/></svg>',
  award:'<svg class="icn" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.2 13.7 7 22 12 19 17 22 15.8 13.7"/></svg>',
};

const PRODUCTS=[
  {id:"heavy-rack-1",name:"رف أبيض ( جداري - أملس )",gallery:["images/1778642902980.png","images/1778642958528.png","images/1778643002638.png"],shortDescription:"رف معدني ثقيل بحمولة 300 كجم لكل رف",description:"رفوف تجمع بين الأناقة في العرض والقوة في التحمل بفضل الظهر الأملس والتصميم العصري، تُعد الحل الأمثل للصيدليات ومحلات التجميل  والمحلات التجارية.",price:850,image:"images/1778546229148.png",images:["images/1778546322976.png","images/1778546229148.png","images/1778546383705.png"],category:"supermarket",specs:{height:"200 سم",width:"200 سم",depth:"60 سم",material:"حديد مدلفن على البارد",capacity:"300 كجم لكل رف",colors:"أزرق + برتقالي",usage:"مستودعات / مخازن",availability:"متوفر"}},
  {id:"heavy-rack-2",name:"رف أسود ( جداري - أملس )",gallery:["images/1778643241307.png","images/1778643180414.png","images/1778643294641.png"],shortDescription:"رف بأربعة مستويات بتصميم متين",description:"رفوف تجمع بين الفخامة في العرض والقوة في التحمل بفضل الظهر الأملس والتصميم العصري، تبرز جمال المنتجات المعروضة.",price:720,image:"images/1778546322976.png",images:["images/1778546229148.png","images/1778546322976.png","images/1778546383705.png"],category:"supermarket",specs:{height:"200 سم",width:"180 سم",depth:"60 سم",material:"حديد بطلاء كهروستاتيكي",capacity:"250 كجم لكل رف",colors:"أزرق + برتقالي",usage:"مخازن وورش",availability:"متوفر"}},
  {id:"heavy-rack-3",name:"رف رصاصي ( جداري - أملس )",shortDescription:"رف عريض بحمولة عالية وثبات ممتاز",description:"رفوف تجمع بين الأناقة في العرض والقوة في التحمل بفضل الظهر الأملس والتصميم العصري، تُعد الحل الأمثل للصيدليات ومحلات التجميل  والمحلات التجارية.",price:950,image:"images/1778546383705.png",images:["images/1778546229148.png","images/1778546383705.png","images/1778546322976.png"],category:"supermarket",specs:{height:"220 سم",width:"240 سم",depth:"60 سم",material:"حديد سميك",capacity:"350 كجم لكل رف",colors:"أزرق داكن + برتقالي",usage:"مستودعات كبيرة",availability:"متوفر"}},
  {id:"supermarket-1",name:"رف سوبر ماركت بنهايات دائرية",shortDescription:"رف عرض احترافي بشريط أزرق أنيق",description:"رف سوبر ماركت بتصميم عصري ونهايات دائرية لعرض المنتجات بشكل جذاب وآمن.",price:1100,image:"images/1778643515823.png",images:["images/1778644689987.png","images/1778643515823.png","images/1778644945066.png"],category:"supermarket",specs:{height:"180 سم",width:"300 سم",depth:"50 سم",material:"صاج مدلفن",capacity:"150 كجم لكل رف",colors:"أبيض + أزرق",usage:"سوبر ماركت / بقالات",availability:"متوفر"}},
  {id:"supermarket-2",name:"رف سوبر ماركت زاوية أحمر",shortDescription:"نظام رفوف ركني للسوبر ماركت",description:"نظام رفوف ركني متكامل مع شريط أحمر لتمييز المنتجات وزيادة جاذبية العرض.",price:1250,image:"images/1778644689987.png",images:["images/1778643515823.png","images/1778644689987.png","images/1778644945066.png"],category:"supermarket",specs:{height:"200 سم",width:"250 سم",depth:"45 سم",material:"صاج مطلي كهروستاتيكي",capacity:"120 كجم لكل رف",colors:"أبيض + أحمر",usage:"سوبر ماركت",availability:"متوفر"}},
  {id:"supermarket-3",name:"رفوف سوبر ماركت سوداء",shortDescription:"نظام جوندولا أسود بشريط أخضر",description:"نظام رفوف جوندولا متكامل بتصميم أنيق أسود مع إضاءة شريطية خضراء.",price:1450,image:"images/1778644945066.png",images:["images/1778644689987.png","images/1778644945066.png","images/1778643515823.png"],category:"supermarket",specs:{height:"210 سم",width:"120 سم",depth:"50 سم",material:"صاج مطلي",capacity:"150 كجم لكل رف",colors:"أسود + أخضر",usage:"سوبر ماركت / محلات",availability:"متوفر"}},
  {id:"light-shelf-1",name:"رف تخزين خفيف فضي",shortDescription:"رف منزلي خفيف ومرن",description:"رف تخزين خفيف بلون فضي عملي مناسب للمنازل والمكاتب والمحلات.",price:380,image:"images/1778803321606.png",images:["images/1778803581205.png","images/1778803321606.png","images/1778804049805.png"], category:"storage",specs:{height:"180 سم",width:"150 سم",depth:"50 سم",material:"صاج خفيف",capacity:"80 كجم لكل رف",colors:"فضي",usage:"منازل / مكاتب",availability:"متوفر"}},
  {id:"light-shelf-2",name:"رف تخزين خفيف فضي",shortDescription:"رف منزلي خفيف ومرن",description:"رف تخزين خفيف بلون فضي عملي مناسب للمنازل والمكاتب والمحلات.",price:380,image:"images/1778803581205.png",images:["images/1778803321606.png","images/1778803581205.png","images/1778804049805.png"], category:"storage",specs:{height:"180 سم",width:"150 سم",depth:"50 سم",material:"صاج خفيف",capacity:"80 كجم لكل رف",colors:"فضي",usage:"منازل / مكاتب",availability:"متوفر"}},
  {id:"light-shelf-3",name:"رف تخزين خفيف فضي",shortDescription:"رف منزلي خفيف ومرن",description:"رف تخزين خفيف بلون فضي عملي مناسب للمنازل والمكاتب والمحلات.",price:380,image:"images/1778804049805.png",images:["images/1778803321606.png","images/1778804049805.png","images/1778803581205.png"], category:"storage",specs:{height:"180 سم",width:"150 سم",depth:"50 سم",material:"صاج خفيف",capacity:"80 كجم لكل رف",colors:"فضي",usage:"منازل / مكاتب",availability:"متوفر"}},
  {id:"folding-shelf-1",name:"رف قابل للطي أسود بعجلات",shortDescription:"رف عملي قابل للطي ومتنقل",description:"رف عملي قابل للطي بسهولة ومزوّد بعجلات للنقل، مثالي للمنزل والمطبخ.",price:290,image:"images/product-folding-shelf-1.jpg",category:"storage",specs:{height:"150 سم",width:"70 سم",depth:"35 سم",material:"حديد مطلي",capacity:"40 كجم لكل رف",colors:"أسود",usage:"منزلي",availability:"متوفر"}},
  {id:"folding-shelf-2",name:"رف قابل للطي أبيض بعجلات",shortDescription:"رف منزلي عملي بلون أبيض أنيق",description:"رف عصري قابل للطي بلون أبيض ناعم، يجمع بين الأناقة والعملية.",price:310,image:"images/product-folding-shelf-2.jpg",category:"storage",specs:{height:"150 سم",width:"70 سم",depth:"35 سم",material:"حديد مطلي",capacity:"40 كجم لكل رف",colors:"أبيض",usage:"منزلي",availability:"متوفر"}},
 {id:"wire-basket-1",name:"كروم سلال شبكية بعجلات",shortDescription:"كروم احترافي بسلال شبكية متعددة",description:"كروم سلال شبكية متعدد الطبقات بعجلات، مناسب لعرض المنتجات في السوبر ماركت والمحلات.",price:420,image:"images/product-wire-basket-1.jpg",category:"chrome",specs:{height:"120 سم",width:"60 سم",depth:"40 سم",material:"أسلاك كروم",capacity:"50 كجم",colors:"كروم/أبيض",usage:"عرض المنتجات",availability:"متوفر"}},
 {id:"cart-1",name:"ترولي خدمة أبيض",shortDescription:"ترولي عملي بطبقات متعددة وعجلات",description:"ترولي خدمة أنيق بطبقة خشبية علوية وأرفف شبكية، مثالي للمطاعم والمنزل.",price:240,image:"images/product-cart-1.jpg",category:"other",specs:{height:"75 سم",width:"45 سم",depth:"30 سم",material:"حديد + خشب",capacity:"30 كجم",colors:"أبيض",usage:"مطاعم / منزل",availability:"متوفر"}},
 {id:"cart-2",name:"ترولي خدمة دائري أسود",shortDescription:"ترولي ثلاث طبقات بتصميم دائري عصري",description:"ترولي خدمة بتصميم دائري عصري بثلاث طبقات وأعمدة خشبية أنيقة.",price:260,image:"images/product-cart-2.jpg",category:"other",specs:{height:"80 سم",width:"45 سم",depth:"45 سم",material:"حديد + خشب طبيعي",capacity:"35 كجم",colors:"أسود",usage:"منزل / مطاعم",availability:"متوفر"}},
 {id:"bins-1",name:"نظام صناديق تخزين زرقاء",shortDescription:"حائط كامل من صناديق التخزين البلاستيكية",description:"نظام تخزين متكامل بصناديق بلاستيكية زرقاء على هيكل حديدي، مثالي لورش العمل والمستودعات.",price:1850,image:"images/product-bins-1.jpg",category:"storage",specs:{height:"200 سم",width:"300 سم",depth:"30 سم",material:"بلاستيك + حديد",capacity:"متعدد الأقسام",colors:"أزرق",usage:"ورش / مستودعات",availability:"متوفر"}},
 {id:"display-table-1",name:"طاولة عرض خضار خضراء",shortDescription:"طاولة عرض بصناديق بلاستيكية للخضار والفواكه",description:"طاولة عرض احترافية للخضار والفواكه بهيكل معدني وصناديق بلاستيكية.",price:540,image:"images/product-display-table-1.jpg",category:"supermarket",specs:{height:"85 سم",width:"120 سم",depth:"100 سم",material:"حديد + بلاستيك",capacity:"100 كجم",colors:"أخضر",usage:"خضار وفواكه",availability:"متوفر"}},
 {id:"cashier-1",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/product-cashier-1.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-2",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778804139929.png",images:["images/1778804357362.png","images/1778804139929.png","images/1778804520470.png"], category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-3",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778804357362.png",images:["images/1778804139929.png","images/1778804357362.png","images/1778804520470.png"], category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-4",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778804520470.png",images:["images/1778804357362.png","images/1778804520470.png","images/1778804139929.png"], category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-5",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778804689702.png",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-6",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778804876534.png",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-7",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0060.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-8",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0071.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-9",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0075.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier10",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778805064620.png",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-11",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778805118372.png",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-12",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0088.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-13",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0102.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-14",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0103.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-15",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0119.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-16",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0129.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-17",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0138.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-18",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/IMG-20260510-WA0133.jpg",category:"supermarket",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
];

let activeCat="all";
function renderProducts(){

  const grid = document.getElementById("productsGrid");

  if(!grid) return;

  const items = activeCat === "all"

  ? PRODUCTS

  : PRODUCTS.filter(
      p => p.category === activeCat
    );

  grid.innerHTML = items.map(p=>`

    <article class="card">

      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>

      <div class="card-body">

        <h3>${p.name}</h3>

        <p>${p.description}</p>

        <div class="card-foot">

          <div class="price">
            ${p.price.toLocaleString('ar-SA')}
            <small>ر.س</small>
          </div>

          <button
          class="btn btn-primary"
          onclick="addToCart('${p.id}')">

          أضف للسلة

          </button>

          <button
          class="btn-details"
          onclick="openModal('${p.id}')">

          ${I.eye}
          تفاصيل

          </button>

        </div>

      </div>

    </article>

  `).join("");

}
function renderFilters(){
  const f=document.getElementById("filters"); if(!f) return;
  f.innerHTML=CATEGORIES.map(c=>`<button class="filter ${c.id===activeCat?'active':''}" data-cat="${c.id}">${c.label}</button>`).join("");
  f.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{activeCat=b.dataset.cat;location.hash=activeCat;renderFilters();renderProducts()});
}

// ====== السلة (LocalStorage) ======
const KEY = "shelves_cart_v1";
const getCart = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
const saveCart = (c) => { localStorage.setItem(KEY, JSON.stringify(c)); renderCart(); };

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const cart = getCart();
  const ex = cart.find(i=>i.id===id);
  if(ex) ex.qty += 1; else cart.push({id, qty:1});
  saveCart(cart);
  toast(`تمت إضافة ${p.name}`);
}
function setQty(id, qty){
  let cart = getCart();
  if(qty<=0) cart = cart.filter(i=>i.id!==id);
  else cart = cart.map(i=>i.id===id?{...i,qty}:i);
  saveCart(cart);
}
function removeItem(id){ saveCart(getCart().filter(i=>i.id!==id)); }
function clearCart(){ saveCart([]); }

// ====== العرض ======

  
  function renderCart(){
    const cart = getCart();
    const items = cart.map(i=>{ const p=PRODUCTS.find(x=>x.id===i.id); return p?{...p,qty:i.qty}:null; }).filter(Boolean);
    const count = items.reduce((s,i)=>s+i.qty,0);
    const total = items.reduce((s,i)=>s+i.price*i.qty,0);
    
    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartTotal").textContent = total.toLocaleString('ar-SA');
    
    const body = document.getElementById("cartItems");
    if(!items.length){
      body.innerHTML = `<div class="cart-empty">السلة فارغة<br/><small>أضف منتجات لبدء طلبك</small></div>`;
      return;
    }
    body.innerHTML = items.map(i=>`
      <div class="cart-item">
      <img src="${i.image}" alt="${i.name}" />
      <div class="cart-item-info">
      <h4>${i.name}</h4>
      <div class="ip">${(i.price*i.qty).toLocaleString('ar-SA')} ر.س</div>
      <div class="qty">
      <button onclick="setQty('${i.id}',${i.qty-1})">−</button>
      <span>${i.qty}</span>
      <button onclick="setQty('${i.id}',${i.qty+1})">+</button>
      </div>
      </div>
      <button class="del" onclick="removeItem('${i.id}')" aria-label="حذف"><svg class="icn" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
</button>
      </div>
      `).join("");
    }
    
    // ====== Modal السلة ======
    const cartModal = document.getElementById("cartModal");
    document.getElementById("openCart").onclick = ()=>{ cartModal.hidden=false; document.body.style.overflow="hidden"; };
    document.getElementById("closeCart").onclick = ()=>{ cartModal.hidden=true; document.body.style.overflow=""; };
    cartModal.onclick = (e)=>{ if(e.target===cartModal){ cartModal.hidden=true; document.body.style.overflow=""; } };
    document.getElementById("clearCart").onclick = ()=>{ if(confirm("هل تريد تفريغ السلة؟")) clearCart(); };
    
    // ====== إرسال الطلب لواتساب ======
    function buildWhatsAppUrl(){
      const cart = getCart();
  const items = cart.map(i=>{ const p=PRODUCTS.find(x=>x.id===i.id); return p?{...p,qty:i.qty}:null; }).filter(Boolean);
  const total = items.reduce((s,i)=>s+i.price*i.qty,0);
  const lines = [
    "مرحباً، أرغب بطلب المنتجات التالية:","",
    ...items.map((i,idx)=>`${idx+1}. ${i.name} × ${i.qty} = ${(i.price*i.qty).toLocaleString('ar-SA')} ر.س`),
    "",`الإجمالي: ${total.toLocaleString('ar-SA')} ر.س`,
  ];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
document.getElementById("orderWhatsapp").onclick = ()=>{
  if(!getCart().length){ toast("السلة فارغة"); return; }
  window.open(buildWhatsAppUrl(),"_blank");
};

// زر واتساب العائم
document.getElementById("waFloat").href =
`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أرغب بالاستفسار عن رفوف السوبرماركت")}`;

// Toast
let toastTimer;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2200);
}

function openModal(id){

    const p = PRODUCTS.find(x => x.id === id);

    if(!p) return;
    currentImages = p.images && p.images.length?p.images:[p.image];
    const singleImage =currentImages.length ===1; 

    const specs = [
        ["الارتفاع", p.specs.height],
        ["العرض", p.specs.width],
        ["العمق", p.specs.depth],
        ["الخامة", p.specs.material],
        ["الألوان", p.specs.colors],
        ["الحمولة", p.specs.capacity],
        ["الاستخدام", p.specs.usage],
        ["التوفر", p.specs.availability],
    ];

    document.getElementById("productModalContent").innerHTML = `

        <div class="product-details-layout">

            <div class="product-details-info">

<div class="product-slider">

  ${!singleImage ? `

  <button class="slider-btn left"
  onclick="changeSlide(-1)">
  ❮
  </button>

  ` : ""}

  <div class="slider-images">

    ${!singleImage ? `

    <img class="side-img"
    src="${currentImages[0]}">

    ` : ""}

    <img class="main-img"
    id="mainSliderImage"
    src="${currentImages[1] || currentImages[0]}">

    ${!singleImage ? `

    <img class="side-img"
    src="${currentImages[2] || currentImages[0]}">

    ` : ""}

  </div>

  ${!singleImage ? `

  <button class="slider-btn right"
  onclick="changeSlide(1)">
  ❯
  </button>

  ` : ""}

</div>

                <h2>${p.name}</h2>

                <p>${p.description}</p>

                <div class="product-price">
                    ${p.price} ر.س
                </div>

                <div class="specs-grid">

                    ${specs.map(spec => `

                        <div class="spec-item">

                            <div class="spec-title">
                                ${spec[0]}
                            </div>

                            <div class="spec-value">
                                ${spec[1]}
                            </div>

                        </div>

                    `).join("")}

                </div>


                ${p.gallery ? `
                
                
                <div class="real-gallery">
                
                <h3>
                صور المنتج بعد التركيب
                </h3>
                
                <div class="real-gallery-grid">
                
                ${p.gallery.map(img => `
                  
                  <img src="${img}">
                  
                  `).join("")}
                  
                  </div>
                  
                  ` : ""}
                  
                  <div class="modal-buttons">
  
  
  
  
                      <button class="btn btn-primary"
                      onclick="addToCart('${p.id}')">
                      أضف للسلة
                      </button>
  
                      <a
                      class="btn btn-accent"
                      target="_blank"
                      href="https://wa.me/${WHATSAPP_NUMBER}">
                      طلب عبر واتساب
                      </a>
  
                  </div>

</div>


            </div>

            

        </div>

    `;

    document
    .getElementById("productModal")
    .classList.add("show");

    document.body.style.overflow = "hidden";
}
function closeModal(){

    document
    .getElementById("productModal")
    .classList.remove("show");

    document.body.style.overflow = "";

}
const productModal =
document.getElementById("productModal");

productModal.addEventListener("click", function(e){

    if(e.target === productModal){

        closeModal();

    }

});



let currentImages = [];
let currentIndex = 1;

function changeSlide(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = currentImages.length - 1;
    }

    if(currentIndex >= currentImages.length){
        currentIndex = 0;
    }

    const left =
    currentImages[
    (currentIndex - 1 + currentImages.length)
    % currentImages.length
    ];

    const center =
    currentImages[currentIndex];

    const right =
    currentImages[
    (currentIndex + 1)
    % currentImages.length
    ];

    const mainImage =
document.getElementById("mainSliderImage");

mainImage.style.opacity = "0";

setTimeout(()=>{

    document.querySelectorAll(".side-img")[0]
    .src = left;

    mainImage.src = center;

    document.querySelectorAll(".side-img")[1]
    .src = right;

    mainImage.style.opacity = "1";

},200);
}

function toggleMenu(){

const nav =
document.querySelector(".nav-links");

const btn =
document.querySelector(".menu-toggle");

nav.classList.toggle("show");

btn.classList.toggle("active");

if(nav.classList.contains("show")){

document.querySelector(".menu-icon")
.textContent = "×";

}else{

document.querySelector(".menu-icon")
.textContent = "☰";

}

}
document.addEventListener("click",function(e){

const nav =
document.querySelector(".nav-links");

const btn =
document.querySelector(".menu-toggle");

if(
!nav.contains(e.target)
&&
!btn.contains(e.target)
){

nav.classList.remove("show");

btn.classList.remove("active");

document.querySelector(".menu-icon")
.textContent = "☰";

}

});

// السنة
document.getElementById("year").textContent = new Date().getFullYear();

// تشغيل
renderProducts();
renderFilters();
renderCart();

