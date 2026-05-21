const APP = {
  whatsapp: "967772046780",
  currency: "ر.س"
};

// ====== الإعدادات ======
const WHATSAPP_NUMBER = "967772046780"; // غيّر الرقم هنا

const CATEGORIES=[
  {id:"all",label:"الكل"},
  {id:"supermarket",label:"رفوف جدارية"},
  {id:"storage",label:"رفوف وسطية"},
  {id:"heavy",label:"المستودعات الثقيلة"},
  {id:"chrome",label:"الكرومات"},
  {id:"chromes",label:"الخانات"},
  {id:"otherS",label:"ملحقات وأنظمة التركيب"},
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
  {id:"heavy-rack-1",name:"رف جداري أبيض - ظهر أملس",gallery:["images/1778642902980.png","images/1778642958528.png","images/1778643002638.png"],shortDescription:"رف معدني ثقيل بحمولة 300 كجم لكل رف",description:"رفوف تجمع بين الأناقة في العرض والقوة في التحمل بفضل الظهر الأملس والتصميم العصري.",price:850,image:"images/1778546229148.png",images:["images/1778546322976.png","images/1778546229148.png","images/1778546383705.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"أبيض / أسود / رصاصي",usage:"الصيدليات / السوبر ماركت / المتاجر",availability:"متوفر"}},
  {id:"heavy-rack-2",name:"رف جداري أسود - ظهر أملس",gallery:["images/1778643241307.png","images/1778643180414.png","images/1778643294641.png"],shortDescription:"رف بأربعة مستويات بتصميم متين",description:"يتميز بخلفية ملساء انسيابية، تمنح متجرك مظهراً عصرياً.",price:720,image:"images/1778546322976.png",images:["images/1778546229148.png","images/1778546322976.png","images/1778546383705.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"الصيدليات / السوبر ماركت / المتاجر / محلات التجميل",availability:"متوفر"}},
  {id:"heavy-rack-3",name:"رف جداري رصاصي - ظهر أملس",shortDescription:"رف عريض بحمولة عالية وثبات ممتاز",description:"توازن مثالي بين الحداثة والقوة، رفوف رمادية صُممت لتمنح عرضك طابعاً احترافياً لايضاهى.",price:950,image:"images/1778546383705.png",images:["images/1778546229148.png","images/1778546383705.png","images/1778546322976.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"رصاصي / أسود / أبيض",usage:"معارض التكنولوجيا والكهربائيات / المتاجر / المخازن / المحلات",availability:"متوفر"}},
  {id:"supermarket-1",name:"رف جداري أبيض - ظهر مخرم",shortDescription:"رف عرض احترافي بشريط أزرق أنيق",description:"رف جداري مخرم، رفيقك الأمثل لتنظيم يتجاوز التوقعات.",price:1100,image:"images/1778643515823.png",images:["images/1778644689987.png","images/1778643515823.png","images/1778644945066.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"أبيض / أسود / رصاصي",usage:"سوبر ماركت / صيدليات / محلات جوالات وإكسسوارات وأدوات الرياض",availability:"متوفر"}},
  {id:"supermarket-2",name:"رف جداري أسود - ظهر مخرم",shortDescription:"نظام رفوف ركني للسوبر ماركت",description:"يجمع بين هيبة اللون الأسود واحترافية العرض الفاخر.",price:1250,image:"images/1778644689987.png",images:["images/1778643515823.png","images/1778644689987.png","images/1778644945066.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"محلات الإلكترونيات والجوالات / متاجر العطور والساعات / محلات الملابس / المكتبات الحديثة",availability:"متوفر"}},
  {id:"supermarket-3",name:"رف جداري رصاصي - ظهر مخرم",shortDescription:"نظام جوندولا أسود بشريط أخضر",description:"الاحترافية الصناعية في أبهى صورها، مرونة فائقة في العرض مع صلابة معدنية تضمن أقصى درجات التحمل.",price:1450,image:"images/1778644945066.png",images:["images/1778644689987.png","images/1778644945066.png","images/1778643515823.png"],category:"supermarket",specs:{height:"225 سم",width:"100 سم",depth:"40 سم /  35 سم",material:"45 سم /  40 سم",capacity:"-----",colors:"رصاصي / أسود / أبيض",usage:"معارض الأدوات والعدد الصناعية / محلات قطع الغيار والتقنية / مراكز الصيانة ومحلات الكمبيوتر / المتاجر الكبرى",availability:"متوفر"}},
  {id:"light-shelf-1",name:"رف وسطي أبيض - ظهر مخرم",shortDescription:"رف منزلي خفيف ومرن",description:"استغلال ذكي لقلب المساحات، نظام الرفوف الوسطية المخرمة تمنح متجرك انسيابية الحركة وأعلى كفاءة للعرض ثنائي الجوانب.",price:380,image:"images/1778803321606.png",images:["images/1778803581205.png","images/1778803321606.png","images/1778804049805.png"], category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"أبيض / أسود / رصاصي",usage:"الصيدليات / المراكز الطبية / محلات أدوات التجميل / السوبر ماركت / محلات الألعاب والقرطاسية",availability:"متوفر"}},
  {id:"light-shelf-2",name:"رف وسطي أسود - ظهر مخرم",shortDescription:"رف منزلي خفيف ومرن",description:"فخامة استثنائية واستغلال ذكي للمساحات، نظام الرفوف الوسطية المزدوجة تمنح متجرك تنظيماً فريداً ثنائي الجوانب.",price:380,image:"images/1778803581205.png",images:["images/1778803321606.png","images/1778803581205.png","images/1778804049805.png"], category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"الصيدليات / مراكز التجميل / متاجر العطور / محلات النظارات والإلكترونيات / المقاهي",availability:"متوفر"}},
  {id:"light-shelf-3",name:"رف وسطي رصاصي - ظهر مخرم",shortDescription:"رف منزلي خفيف ومرن",description:"كفاءة صناعية وتكامل ذكي للعرض، نظام الرفوف الوسطية الرمادية يمنح مساحتك طابعاً احترافياً وقدرة فائقة على التنظيم ثنائي الجوانب",price:380,image:"images/1778804049805.png",images:["images/1778803321606.png","images/1778804049805.png","images/1778803581205.png"], category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"رصاصي / أسود / أبيض",usage:"الصيدليات / المراكز الطبية / معارض الالكترونيات / المتاجر / الأسواق المركزية",availability:"متوفر"}},
  {id:"light-shelf-4",name:"رف وسطي رصاصي - ظهر مخرم (3 أرفف)",shortDescription:"رف منزلي خفيف ومرن",description:"رفوف بارتفاع 165 سم، مع 3 مستويات تنظيمية تمنح متجرك طابعاً مرتباً ومريحاً للعين.",price:380,image:"images/1779300473673.png",images:["images/1779300739784.png","images/1779300473673.png","images/1779300796434.png"], category:"storage",specs:{height:"165 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"رصاصي / أسود / أبيض",usage:"صيدليات / محلات التجميل / معارض الالكترونيات / متاجر /",availability:"متوفر"}},
  {id:"folding-shelf-1",name:"رف قابل للطي أسود بعجلات",shortDescription:"رف عملي قابل للطي ومتنقل",description:"رف عملي قابل للطي بسهولة ومزوّد بعجلات للنقل، مثالي للمنزل والمطبخ.",price:290,image:"images/product-folding-shelf-1.jpg",category:"other",specs:{height:"150 سم",width:"70 سم",depth:"35 سم",material:"حديد مطلي",capacity:"40 كجم لكل رف",colors:"أسود",usage:"منزلي",availability:"متوفر"}},
  {id:"folding-shelf-2",name:"رف قابل للطي أبيض بعجلات",shortDescription:"رف منزلي عملي بلون أبيض أنيق",description:"رف عصري قابل للطي بلون أبيض ناعم، يجمع بين الأناقة والعملية.",price:310,image:"images/product-folding-shelf-2.jpg",category:"other",specs:{height:"150 سم",width:"70 سم",depth:"35 سم",material:"حديد مطلي",capacity:"40 كجم لكل رف",colors:"أبيض",usage:"منزلي",availability:"متوفر"}},
 {id:"wire-basket-1",name:"كروم سلال شبكية بعجلات",shortDescription:"كروم احترافي بسلال شبكية متعددة",description:"كروم سلال شبكية متعدد الطبقات بعجلات، مناسب لعرض المنتجات في السوبر ماركت والمحلات.",price:420,image:"images/product-wire-basket-1.jpg",category:"chrome",specs:{height:"120 سم",width:"60 سم",depth:"40 سم",material:"أسلاك كروم",capacity:"50 كجم",colors:"كروم/أبيض",usage:"عرض المنتجات",availability:"متوفر"}},
 {id:"cart-1",name:"ترولي خدمة أبيض",shortDescription:"ترولي عملي بطبقات متعددة وعجلات",description:"ترولي خدمة أنيق بطبقة خشبية علوية وأرفف شبكية، مثالي للمطاعم والمنزل.",price:240,image:"images/product-cart-1.jpg",category:"other",specs:{height:"75 سم",width:"45 سم",depth:"30 سم",material:"حديد + خشب",capacity:"30 كجم",colors:"أبيض",usage:"مطاعم / منزل",availability:"متوفر"}},
 {id:"cart-2",name:"ترولي خدمة دائري أسود",shortDescription:"ترولي ثلاث طبقات بتصميم دائري عصري",description:"ترولي خدمة بتصميم دائري عصري بثلاث طبقات وأعمدة خشبية أنيقة.",price:260,image:"images/product-cart-2.jpg",category:"other",specs:{height:"80 سم",width:"45 سم",depth:"45 سم",material:"حديد + خشب طبيعي",capacity:"35 كجم",colors:"أسود",usage:"منزل / مطاعم",availability:"متوفر"}},
 {id:"bins-1",name:"نظام صناديق تخزين زرقاء",shortDescription:"حائط كامل من صناديق التخزين البلاستيكية",description:"نظام تخزين متكامل بصناديق بلاستيكية زرقاء على هيكل حديدي، مثالي لورش العمل والمستودعات.",price:1850,image:"images/product-bins-1.jpg",category:"other",specs:{height:"200 سم",width:"300 سم",depth:"30 سم",material:"بلاستيك + حديد",capacity:"متعدد الأقسام",colors:"أزرق",usage:"ورش / مستودعات",availability:"متوفر"}},
 {id:"display-table-1",name:"ستاند عرض خضار وفواكه - سعة 6 سلات",shortDescription:"طاولة عرض بصناديق بلاستيكية للخضار والفواكه بسعة 6 سلات",description:"طاولة عرض احترافية للخضار والفواكه بهيكل معدني وصناديق بلاستيكية.",price:540,image:"images/product-display-table-1.jpg",category:"other",specs:{height:"120 سم",width:"120 سم",depth:"-----",material:"-----",capacity:"-----",colors:"أخضر",usage:"خضار وفواكه / سوبر ماركت / محلات البقالة",availability:"متوفر"}},
 {id:"cashier-1",name:"كاونتر كاشير حرف L",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت مع مرونة كاملة في التوجيه يميناً أو يساراً.",price:1650,image:"images/product-cashier-1.jpg",category:"other",specs:{height:"-----",width:"180 سم",depth:"-----",material:"-----",capacity:"-----",colors:"رمادي + أبيض",usage:"سوبر ماركت / محلات / متاجر",availability:"متوفر"}},
 {id:"cashier-2",name:"رف وسطي أسود - ظهر أملس",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"أناقة انسيابية تعزز قيمة معروضاتك، نظام الرفوف الوسطية السوداء بالظهر الأملس يمنح متجرك لمسة عصرية.",price:1650,image:"images/1778804139929.png",images:["images/1778804357362.png","images/1778804139929.png","images/1778804520470.png"], category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"الصيدليات / السوبر ماركت / مراكز العناية / متاجر مستحضرات التجميل والعطور / عرض المنتجات التقنية",availability:"متوفر"}},
 {id:"cashier-3",name:"رف وسطي رصاصي - ظهر أملس",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"التوازن المثالي بين الطابع العصري والكفاءة العملية، نظام الرفوف الوسطية الرمادية بالظهر الأملس تعيد هندسة المساحة بأسلوب احترافي ثنائي الجوانب.",price:1650,image:"images/1778804357362.png",images:["images/1778804139929.png","images/1778804357362.png","images/1778804520470.png"],category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"رصاصي / أبيض / أسود",usage:"الصيدليات / مراكز الرعاية الصحية / معارض الإلكترونيات / متاجر مستحضرات التجميل والعطور / الهايبر ماركت",availability:"متوفر"}},
 {id:"cashier-4",name:"رف وسطي أبيض - ظهر أملس",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"النقاء، التنظيم ، نظام الرفوف الوسطية البيضاء بالظهر الأملس تمنح متجرك إضاءة مضاعفة وعرضاً انسيابياً من كلا الجانبين.",price:1650,image:"images/1778804520470.png",images:["images/1778804357362.png","images/1778804520470.png","images/1778804139929.png"],category:"storage",specs:{height:"195 سم",width:"100 سم",depth:"40 سم / 35 سم / 30 سم ",material:"45 سم / 40 سم / 35 سم ",capacity:"-----",colors:"أبيض / أسود / رصاصي",usage:"الصيدليات / مراكز الرعاية الطبية / عيادات ومراكز التجميل / سوبر ماركت ",availability:"متوفر"}},
 {id:"cashier-5",name:"نهاية رفوف وسطية ( جندولة معارض )",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"اللمسة النهائية المثالية لعرض متكامل، جندولة المنهالي الوسطية مصممة لاستغلال زوايا الممرات وجذب انتباه المتسوقين من كل اتجاه.",price:1650,image:"images/1778804689702.png",category:"storage",specs:{height:"225 سم / 195 سم / 165 سم ",width:"-----",depth:"-----",material:"-----",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"سوبر ماركت / صيدليات / محلات الإكسسوارات / مراكز التجميل",availability:"متوفر"}},
 {id:"cashier-6",name:"رفوف نظام الفراشة للتخزين الثقيل - أسود",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"القوة المطلقة للتخزين الشاق، رفوف نظام الفراشة المصممة هندسياً لتحمل الأوزان العالية وتنظيم المستودعات بكفاءة وأمان تام.",price:1650,image:"images/1778804876534.png",category:"chromes",specs:{height:"200 سم / 300 سم",width:"100 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أسود / أبيض / برتقالي+أزرق / أسود+أبيض ",usage:"مستودعات / مخازن / محلات",availability:"متوفر"}},
 {id:"cashier-7",name:"رفوف نظام الفراشة للتخزين الثقيل - أبيض",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"نظام رفوف الفراشة الذي يجمع بين متانة التحمل الفائقة والمظهر المنظم المشرق.",price:1650,image:"images/IMG-20260510-WA0060.jpg",category:"chromes",specs:{height:"200 سم / 300 سم",width:"100 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أبيض / أسود / برتقالي+أزرق / أسود+أبيض ",usage:"مستودعات / مخازن / محلات",availability:"متوفر"}},
 {id:"cashier-8",name:"رفوف نظام الفراشة - برتقالي وأزرق (عرض 100 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"فولاذ لاينحني وتنظيم لاينتهي، رفوف الفراشة الخيار الأول للتخزين الشاق والمستودعات الذكية.",price:1650,image:"images/IMG-20260510-WA0071.jpg",category:"chromes",specs:{height:"200 سم / 300 سم",width:"100 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أبيض / أسود / برتقالي+أزرق / أسود+أبيض ",usage:"مستودعات / مخازن / محلات",availability:"متوفر"}},
 {id:"cashier-9",name:"رفوف نظام الفراشة للتخزين الثقيل - أسود وأبيض ",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"التناغم المثالي بين الفخامة والنقاء، رفوف الفراشة باللونين الأسود والأبيض تجمع بين قوة الهيكل وأناقة التنظيم للمستودعات العصرية.",price:1650,image:"images/IMG-20260510-WA0075.jpg",category:"chromes",specs:{height:"200 سم / 300 سم",width:"100 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أبيض / أسود / برتقالي+أزرق / أسود+أبيض ",usage:"مستودعات / مخازن / محلات",availability:"متوفر"}},
 {id:"cashier10",name:"خانة دكسون للتخزين الثقيل - حمولة 500 كجم",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"العمود الفقري للمستودعات اللوجستية والمصانع، نظام دكسون الثقيل يوفر الحلول الهندسية الأكثر أماناً واستقراراً لرفع وتخزين الأوزان العملاقة.",price:1650,image:"images/1778805064620.png",category:"chromes",specs:{height:"200 سم / 300 سم",width:"200 سم",depth:"90 سم",material:"-----",capacity:"500 كيلوجرام لكل رف",colors:"برتقالي + أزرق",usage:"مستودعات / مخازن",availability:"متوفر"}},
 {id:"cashier-11",name:"خانة دكسون - ارتفاع 600 سم",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"نظام دكسون بارتفاع 6 أمتار وحمولة 3 أطنان مصمم خصيصاً للمستودعات المركزية العملاقة والمصانع التي لاتعرف الحدود.",price:1650,image:"images/1778805118372.png",category:"heavy",specs:{height:"600 سم",width:"270 سم",depth:"-----",material:"-----",capacity:"3000 كيلوجرام",colors:"برتقالي + أزرق",usage:"مستودعات / مخازن / مصانع",availability:"متوفر"}},
 {id:"cashier-12",name:"رفوف نظام الفراشة للتخزين الثقيل - أبيض",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف الفراشة بعرض 200 سم تمنحك ضعف مساحة التخزين الأفقي للأوزان الشاقة والمستودعات الكبرى.",price:1650,image:"images/IMG-20260510-WA0088.jpg",category:"chromes",specs:{height:"200 سم / 300 سم ",width:"200 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أبيض / أسود / برتقالي+أزرق / أسود+أبيض ",usage:"مستودعات / مخازن / محلات ",availability:"متوفر"}},
 {id:"cashier-13",name:"رفوف نظام الفراشة للتخزين الثقيل - أسود",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"الهيبة الفولاذية والسعة القصوى، رفوف الفراشة السوداء بعرض 200 سم تجمع بين فخامة المظهر والقدرة الفائقة على التحمل.",price:1650,image:"images/IMG-20260510-WA0102.jpg",category:"chromes",specs:{height:"200 سم / 300 سم ",width:"200 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أسود / أبيض / أسود+أبيض / برتقالي+أزرق ",usage:"مستودعات / مخازن / محلات ",availability:"متوفر"}},
 {id:"cashier-14",name:"رفوف نظام الفراشة للتخزين الثقيل - أسود وأبيض",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف الفراشة باللونين الأسود والأبيض وبعرض 200 سم تجمع بين اللمسة الاحترافية والقدرة العالية على تنظيم أضخم البضائع.",price:1650,image:"images/IMG-20260510-WA0103.jpg",category:"chromes",specs:{height:"200 سم / 300 سم",width:"200 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أسود / أبيض / أسود+أبيض / برتقالي+أزرق ",usage:"مستودعات / مخازن / محلات ",availability:"متوفر"}},
 {id:"cashier-15",name:"رفوف نظام الفراشة - أزرق وبرتقالي (عرض 200 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف الفراشة باللونين الأزرق والبرتقالي تمنح مستودعك تنظيماً آمناً وسعة أفقية هائلة للأحمال الشاقة.",price:1650,image:"images/IMG-20260510-WA0119.jpg",category:"chromes",specs:{height:"200 سم / 300 سم",width:"200 سم",depth:"40 سم",material:"-----",capacity:"300 كيلوجرام لكل رف",colors:"أسود / أبيض / أسود+أبيض / برتقالي+أزرق ",usage:"مستودعات / مخازن / محلات ",availability:"متوفر"}},
 {id:"cashier-16",name:"رفوف عرض دائرة سوبر 3 أرفف - أبيض ",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف (دائرة سوبر) البيضاء مصممة بذكاء لتكون النقطة المحورية الأكثر جاذبية للمنتجات الحصرية في صالة عرضك.",price:1650,image:"images/IMG-20260510-WA0129.jpg",category:"storage",specs:{height:"165 سم / مزود ب 3 أرفف دائرية علوية + القاعدة",width:"-----",depth:"35 سم",material:"40 سم",capacity:"-----",colors:"أبيض / أسود / رصاصي",usage:"الصيدليات / محلات الهدايا والالعاب / السوبر ماركت / متاجر المخبوزات والحلويات",availability:"متوفر"}},
 {id:"cashier-17",name:"رفوف عرض دائرة سوبر 3 أرفف - أسود",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف (دائرة سوبر) السوداء صممت لتكسر النمط التقليدي وتصنع منصة عرض مركزية لا يمكن تجاهلها.",price:1650,image:"images/IMG-20260510-WA0138.jpg",category:"storage",specs:{height:"165 سم / مزود ب 3 أرفف دائرية علوية + القاعدة",width:"-----",depth:"35 سم",material:"40 سم",capacity:"-----",colors:"أسود / أبيض / رصاصي",usage:"محلات التجميل والعطور / المقاهي / متاجر الإلكترونيات / محلات الهدايا ",availability:"متوفر"}},
 {id:"cashier-18",name:"رفوف عرض دائرة سوبر 3 أرفف - رصاصي",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف (دائرة سوبر) باللون الرصاصي تمنح صالة عرضك انسيابية كاملة مع مظهر عملي وعصري.",price:1650,image:"images/IMG-20260510-WA0133.jpg",category:"storage",specs:{height:"165 سم / مزود ب 3 أرفف دائرية علوية + القاعدة",width:"-----",depth:"35 سم",material:"40 سم",capacity:"-----",colors:"رصاصي / أسود / أبيض",usage:"المعارض التجارية / الصيدليات / محلات الإلكترونيات / محلات الأدوات المنزلية والكهربائية / متاجر / مستودعات",availability:"متوفر"}},
 {id:"cashier-19",name:"رفوف شبكية معدنية - كرومات (عمق 45 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"الأناقة العصرية والتهوية المثالية، رفوف الكروم الشبكية تمنحك مزيجاً استثنائياً بين فخامة العرض، وقوة التحمل.",price:1650,image:"images/1778898229058.png",category:"chrome",specs:{height:"200 سم",width:"90 سم",depth:"45 سم",material:"-----",capacity:"-----",colors:"فضي لامع",usage:"صيدليات / مراكز طبية / مختبرات / فنادق / مطاعم / محلات / منازل / مكاتب",availability:"متوفر"}},
 {id:"cashier-20",name:"رفوف شبكية معدنية - كرومات (عمق 90 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"الأناقة العصرية والتهوية المثالية، رفوف الكروم الشبكية بعمق 90 سم، تمنحك مزيجاً استثنائياً بين فخامة العرض، وقوة التحمل.",price:1650,image:"images/1778898348220.png",category:"chrome",specs:{height:"200 سم",width:"60 سم",depth:"90 سم",material:"-----",capacity:"-----",colors:"فضي لامع",usage:"مستشفيات / مطاعم / صيدليات / مختبرات / فنادق / محلات",availability:"متوفر"}},
 {id:"cashier-21",name:"رفوف شبكية معدنية - كرومات (عرض 75 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"المرونة المطلقة في أبعاد ذكية، رفوف الكروم بعرض 75 سم توفر لك الحل الأمثل للتخزين الصحي والمنظم في أضيق الزوايا وبأعلى معايير الأناقة.",price:1650,image:"images/1778898610834.png",category:"chrome",specs:{height:"200 سم",width:"75 سم",depth:"45 سم",material:"-----",capacity:"-----",colors:"كروم فضي لامع",usage:"صيدليات / فنادق / مختبرات / مطاعم / متاجر",availability:"متوفر"}},
 {id:"cashier-22",name:"رفوف شبكية معدنية - كرومات (عرض 180 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"رفوف الكروم بعرض 180 سم تمنح صالة عرضك سعة أفقية هائلة وعرضاً فاخراً يجمع بين المتانة والمعايير الصحية.",price:1650,image:"images/1778898911007.png",category:"chrome",specs:{height:"200 سم",width:"180 سم",depth:"45 سم",material:"-----",capacity:"-----",colors:"كروم فضي لامع",usage:"فنادق / مستشفيات / صيدليات / مطاعم / مخازن طبية / متاجر",availability:"متوفر"}},
 {id:"cashier-23",name:"رفوف شبكية معدنية - كرومات (عمق 60 سم)",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"التناسق المربع والتهوية المثالية، رفوف الكروم بأبعاد 60*60 سم تقدم الحل الأذكى للمساحات المدمجة والزوايا التي تتطلب عمقاً ممتازاً وأناقة لا تضاهى.",price:1650,image:"images/1778898992247.png",category:"chrome",specs:{height:"200 سم",width:"60 سم",depth:"60 سم",material:"-----",capacity:"-----",colors:"كروم فضي لامع",usage:"مستشفيات / صيدليات / مختبرات طبية / فنادق / مطاعم / متاجر",availability:"متوفر"}},
 {id:"cashier-24",name:"ستاند عرض خضار وفواكه جداري - موديل الزجاج الفاخر",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778899060946.png",category:"other",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-25",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778899160280.png",category:"other",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-26",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778899222202.png",category:"other",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-27",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778899380652.png",category:"other",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
 {id:"cashier-28",name:"كاونتر كاشير سوبر ماركت",shortDescription:"كاونتر دفع احترافي بحواف مطاطية",description:"كاونتر كاشير عصري بتصميم متين وحواف مطاطية حامية مناسب للسوبر ماركت.",price:1650,image:"images/1778899544279.png",category:"other",specs:{height:"90 سم",width:"180 سم",depth:"60 سم",material:"حديد + بلاستيك",capacity:"—",colors:"رمادي + أبيض",usage:"سوبر ماركت",availability:"متوفر"}},
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
          <small>س.ر</small>
            ${p.price.toLocaleString('en-US')}
          </div>

<div class="card-actions">

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
currentImages = (p.images && p.images.length) ? p.images : [p.image];    currentIndex = 0;
    const singleImage =currentImages.length ===1; 

    const specs = [
        ["الارتفاع", p.specs.height],
        ["العرض", p.specs.width],
        ["عمق الرفوف", p.specs.depth],
        ["عمق القاعدة", p.specs.material],
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
  ❯
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
        ❮
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

   const sideImgs =
document.querySelectorAll(".side-img");

if(sideImgs[0]){
sideImgs[0].src = left;
}

mainImage.src = center;

if(sideImgs[1]){
sideImgs[1].src = right;
}

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

const bestTrack = document.getElementById("bestTrack");

let currentSlide = 0;

function moveBestSlider(){

const cards = document.querySelectorAll(".best-card");

const cardWidth = cards[0].offsetWidth + 20;

currentSlide++;

if(currentSlide >= cards.length){

currentSlide = 0;
}

bestTrack.style.transform =
`translateX(${currentSlide * cardWidth}px)`;

}

setInterval(moveBestSlider,7000);

//اسهم الاكثر مبيعاً



function moveBest(direction){

currentIndex += direction;

if(currentIndex < 0){

currentIndex = totalCards - 1;
}

if(currentIndex >= totalCards){

currentIndex = 0;
}

track.style.transform =
`translateX(${currentIndex * cardWidth}px)`;
}

// السنة
document.getElementById("year").textContent = new Date().getFullYear();

// تشغيل
renderProducts();
renderFilters();
renderCart();

