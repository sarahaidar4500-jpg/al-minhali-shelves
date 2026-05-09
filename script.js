// ====== الإعدادات ======
const WHATSAPP_NUMBER = "967772046780"; // غيّر الرقم هنا

const PRODUCTS = [
  { id:"gondola",   name:"رف جزيرة (جوندولا)",       description:"رف معدني مزدوج الواجهة لوسط الممرات.", price:1850, image:"images/product-gondola.jpg" },
  { id:"wall",      name:"رف جداري",                  description:"رف جداري قوي مع ألواح خلفية مثقبة.",   price:1450, image:"images/product-wall.jpg" },
  { id:"warehouse", name:"رفوف مستودعات ثقيلة",       description:"هيكل صلب لتخزين الباليتات والأحمال.",  price:3200, image:"images/product-warehouse.jpg" },
  { id:"checkout",  name:"كاونتر كاشير",              description:"وحدة كاشير حديثة بتشطيب ستانلس متين.", price:2750, image:"images/product-checkout.jpg" },
  { id:"fridge",    name:"ثلاجة عرض زجاجية",          description:"ثلاجة عرض رأسية بأبواب زجاجية.",       price:5400, image:"images/product-fridge.jpg" },
  { id:"produce",   name:"ستاند خضار وفواكه",         description:"ستاند خشبي معدني لعرض الخضار.",        price:1650, image:"images/product-produce.jpg" },
];

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
function renderProducts(){
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = PRODUCTS.map(p=>`
    <article class="card">
      <div class="card-img"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="card-foot">
          <div class="price">${p.price.toLocaleString('ar-SA')} <small>ر.س</small></div>
          <button class="btn btn-primary" onclick="addToCart('${p.id}')">أضف للسلة</button>
        </div>
      </div>
    </article>
  `).join("");
}

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
      <button class="del" onclick="removeItem('${i.id}')" aria-label="حذف">🗑️</button>
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

// السنة
document.getElementById("year").textContent = new Date().getFullYear();

// تشغيل
renderProducts();
renderCart();
