// Updated scripts.js — full, resilient client-side logic for pages
const products = [
  {id:1,name:"Navy Wool Overcoat",price:249.00,category:"jackets",img: "https://www.roderickcharles.com/wp-content/uploads/2023/02/single-breasted-plain-mens-wool-overcoat-scaled.jpg" ,desc:"A classic overcoat in premium wool — warm, structured, and elegant.", sizes:["S","M","L","XL"], colors:["Navy","Black"]},

  {id:2,name:"Slim Oxford Shirt",price:69.00,category:"shirts",img:"https://tse1.mm.bing.net/th/id/OIP.B6RrYPagQyEzvHBi7a_GwwHaLH?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3",desc:"Slim Oxford Shirt — soft oxford cloth with a tailored fit.", sizes:["S","M","L","XL"], colors:["White","Blue"]},
  {id:4,name:"Textured Chinos",price:89.00,category:"pants",img:"https://tse4.mm.bing.net/th/id/OIP.Dqc-yPkDmSih6aRPnxTEdwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Durable chinos with subtle texture and modern taper.", sizes:["30","32","34","36"], colors:["Beige","Olive"]},
  {id:5,name:"Leather Bomber Jacket",price:299.00,category:"jackets",img:"https://th.bing.com/th?q=Leather+Bomber+Jacket+with+Fur+Collar&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247 ",desc:"Premium leather with soft lining — a contemporary essential.", sizes:["M","L","XL"], colors:["Brown","Black"]},
  {id:6,name:"Casual Linen Shirt",price:59.00,category:"shirts",img:"data:image/webp;base64,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",desc:"Lightweight linen for warm-weather comfort.", sizes:["S","M","L"], colors:["White","Sand"]},
  {id:7,name:"Tailored Trousers",price:119.00,category:"pants",img:"https://th.bing.com/th/id/OIP.fEdxyfV2m_beXiUI2cuXuAHaLH?w=136&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", sizes:["30","32","34","36"], colors:["Charcoal","Navy"]},
  {id:8,name:"Merino Crew Sweater",price:129.00,category:"shirts",img:"https://tse3.mm.bing.net/th/id/OIP.LW5WG5iAyobHKeIXgciFBQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Fine merino wool with natural thermoregulation.", sizes:["S","M","L","XL"], colors:["Grey","Navy"]},
  {id:9,name:"Checkers shirt",price:219.00,category:"shirts",img:"https://tse2.mm.bing.net/th/id/OIP.uFgw8_oeiqz6QoWVsvxuSQHaJw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"A classic checkered shirt for casual and semi-formal occasions.", sizes:["S","M","L"], colors:["Red","Black"]}
];

const grid = document.getElementById('products-grid');
const filterSelect = document.getElementById('filter-select');
const cartBtn = document.getElementById('open-cart');
const cartDrawer = document.getElementById('cart-drawer');
const closeCart = document.getElementById('close-cart');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.getElementById('cart-count');

let cart = [];

// Load cart from localStorage
try{
  const stored = localStorage.getItem('abdullah_cart');
  if(stored) cart = JSON.parse(stored) || [];
}catch(e){cart = []}

function renderProducts(filter='all'){
  if(!grid) return;
  grid.innerHTML = '';
  const list = products.filter(p => filter==='all' ? true : p.category===filter);
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="media" style="background-image:url('${p.img}')"></div>
      <div class="meta">
        <div>
          <div class="muted">${p.category}</div>
          <div class="title-sm">${p.name}</div>
        </div>
        <div style="text-align:right">
          <div class="price">$${p.price.toFixed(2)}</div>
          <div style="display:flex;gap:6px;justify-content:flex-end">
            <button class="add-btn" data-id="${p.id}">Add</button>
            <a class="add-btn" href="product.html?id=${p.id}" style="text-decoration:none;padding:0.6rem 0.8rem;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:var(--muted);">View</a>
          </div>
        </div>
      </div>
    `;
    // tilt effect on desktop
    if(window.matchMedia('(hover: hover)').matches){
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateX(${(-y*6)}deg) rotateY(${x*8}deg) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', ()=> card.style.transform = '');
    }

    grid.appendChild(card);
    // attach explicit add handler for reliability
    const addBtn = card.querySelector('.add-btn[data-id]');
    if(addBtn){
      addBtn.addEventListener('click', e=>{
        e.preventDefault(); e.stopPropagation();
        const id = addBtn.dataset.id;
        // default options for card-level add
        const options = { qty:1 };
        addToCart(id, options);
      });
    }
  });
}

function addToCart(id, options = {}){
  const p = products.find(x=>x.id===+id);
  console.log('addToCart()', id, options);
  if(!p) return;
  // normalize options
  const optKey = JSON.stringify(options || {});
  const exists = cart.find(i=>i.id===p.id && i.optKey===optKey);
  if(exists) exists.qty += (options.qty || 1);
  else cart.push({...p, qty:(options.qty||1), options:{...options}, optKey});
  updateCart();
}

function updateCart(){
  if(!cartItemsEl) return;
  cartItemsEl.innerHTML = '';
  let total = 0; let count = 0;
  console.log('updateCart start', cart);
  cart.forEach(item=>{
    total += item.price*item.qty; count += item.qty;
    const el = document.createElement('div');
    el.className = 'cart-item';
    const opts = item.options ? `<div class="muted">${item.options.size? 'Size: '+item.options.size : ''}${item.options.color? ' • Color: '+item.options.color : ''}</div>` : '';
    el.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div style="flex:1">
        <div style="font-weight:700">${item.name}</div>
        ${opts}
        <div class="muted">$${item.price.toFixed(2)} × ${item.qty}</div>
      </div>
      <div>
        <button class="add-small" data-id="${item.id}" data-optkey='${item.optKey}'>+</button>
        <button class="sub-small" data-id="${item.id}" data-optkey='${item.optKey}'>−</button>
      </div>
    `;
    cartItemsEl.appendChild(el);
  });
  if(cartTotalEl) cartTotalEl.textContent = total.toFixed(2);
  if(cartCountEl) cartCountEl.textContent = count;
  console.log('updateCart end', {subtotal: total, count});
  // compute breakdown
  const subtotal = total;
  const tax = +(subtotal * 0.10).toFixed(2);
  const shipping = subtotal > 200 ? 0 : (subtotal>0 ? 10 : 0);
  const grand = +(subtotal + tax + shipping).toFixed(2);
  const subEl = document.getElementById('cart-subtotal'); if(subEl) subEl.textContent = subtotal.toFixed(2);
  const taxEl = document.getElementById('cart-tax'); if(taxEl) taxEl.textContent = tax.toFixed(2);
  const shipEl = document.getElementById('cart-shipping'); if(shipEl) shipEl.textContent = shipping.toFixed(2);
  const totEl = document.getElementById('cart-total'); if(totEl) totEl.textContent = grand.toFixed(2);
  // persist
  try{ localStorage.setItem('abdullah_cart', JSON.stringify(cart)); }catch(e){}
  // add handlers
  cartItemsEl.querySelectorAll('.add-small').forEach(b=>b.addEventListener('click', e=>{
    const id = e.target.dataset.id; const optKey = e.target.dataset.optkey; const it = cart.find(x=>x.id==id && x.optKey==optKey); if(it){ it.qty++; updateCart(); }
  }));
  cartItemsEl.querySelectorAll('.sub-small').forEach(b=>b.addEventListener('click', e=>{
    const id = e.target.dataset.id; const optKey = e.target.dataset.optkey; const it = cart.find(x=>x.id==id && x.optKey==optKey); if(!it) return; it.qty--; if(it.qty<=0) cart=cart.filter(x=>!(x.id==id && x.optKey==optKey)); updateCart();
  }));
}

// global listeners
document.addEventListener('click', e=>{
  const add = e.target.closest('.add-btn');
  if(add && add.dataset && add.dataset.id){
    const id = add.dataset.id;
    // try to find option selectors in modal or product detail
    const modalRoot = add.closest('.modal-panel') || document.getElementById('product-detail');
    let options = {};
    if(modalRoot){
      const sizeEl = modalRoot.querySelector('#modal-size, select[name="size"], #pd-size');
      const colorEl = modalRoot.querySelector('#modal-color, select[name="color"], #pd-color');
      const qtyEl = modalRoot.querySelector('#modal-qty, input[name="qty"], #pd-qty');
      if(sizeEl) options.size = sizeEl.value || null;
      if(colorEl) options.color = colorEl.value || null;
      if(qtyEl) options.qty = parseInt(qtyEl.value) || 1;
    }
    // fallback qty
    if(!options.qty) options.qty = 1;
    addToCart(id, options);
  }
});

if(filterSelect) filterSelect.addEventListener('change', e=>{ renderProducts(e.target.value); });

if(cartBtn && cartDrawer) cartBtn.addEventListener('click', ()=> cartDrawer.classList.add('open'));
if(closeCart) closeCart.addEventListener('click', ()=> cartDrawer.classList.remove('open'));

// small open/close by clicking outside
document.addEventListener('click', e=>{
  if(cartDrawer && cartDrawer.classList.contains('open') && !e.composedPath().includes(cartDrawer) && !e.composedPath().includes(cartBtn)){
    cartDrawer.classList.remove('open');
  }
});

// set year
const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

// initial render
renderProducts();

// render cart page if present
const cartPageContent = document.getElementById('cart-page-content');
function renderCartPage(){
  if(!cartPageContent) return;
  if(!cart || cart.length===0){ cartPageContent.innerHTML = '<div class="cart-empty">Your cart is empty.</div>'; return; }
  const subtotal = cart.reduce((s,i)=>s + i.price*i.qty,0);
  const tax = +(subtotal * 0.10).toFixed(2);
  const shipping = subtotal > 200 ? 0 : (subtotal>0 ? 10 : 0);
  const grand = +(subtotal + tax + shipping).toFixed(2);
  const listHtml = cart.map((item,idx)=>{
    const opts = item.options ? `<div class="muted">${item.options.size? 'Size: '+item.options.size : ''}${item.options.color? ' • Color: '+item.options.color : ''}</div>` : '';
    return `
      <div class="cart-line">
        <img src="${item.img}" alt="${item.name}">
        <div class="meta">
          <div style="font-weight:700">${item.name}</div>
          ${opts}
          <div class="muted">$${item.price.toFixed(2)} each</div>
        </div>
        <div style="text-align:right">
          <div>
            <button data-idx="${idx}" class="qty-decr">−</button>
            <span style="margin:0 0.6rem">${item.qty}</span>
            <button data-idx="${idx}" class="qty-incr">+</button>
          </div>
          <div class="line-price">$${(item.price*item.qty).toFixed(2)}</div>
        </div>
      </div>`;
  }).join('');
  cartPageContent.innerHTML = `
    <div class="cart-page">
      <div class="cart-list">${listHtml}</div>
      <aside class="cart-sidebar">
        <h3>Order Summary</h3>
        <div class="cart-summary">
          <div>Subtotal: $${subtotal.toFixed(2)}</div>
          <div>Tax (10%): $${tax.toFixed(2)}</div>
          <div>Shipping: $${shipping.toFixed(2)}</div>
          <div class="total">Total: $${grand.toFixed(2)}</div>
        </div>
        <div style="margin-top:1rem"><button class="checkout">Proceed to checkout</button></div>
      </aside>
    </div>`;
  // attach qty handlers
  cartPageContent.querySelectorAll('.qty-incr').forEach(b=>b.addEventListener('click', e=>{
    const i = +e.target.dataset.idx; cart[i].qty++; updateCart(); renderCartPage();
  }));
  cartPageContent.querySelectorAll('.qty-decr').forEach(b=>b.addEventListener('click', e=>{
    const i = +e.target.dataset.idx; cart[i].qty--; if(cart[i].qty<=0) cart.splice(i,1); updateCart(); renderCartPage();
  }));
}
renderCartPage();

// helpers for rendering option badges
function sizeColorToHex(key){
  const map = {S:'#4CAF50',M:'#2196F3',L:'#FF9800',XL:'#9C27B0','30':'#4CAF50','32':'#2196F3','34':'#FF9800','36':'#9C27B0'};
  return map[key] || '#7f8c8d';
}

function renderSizeBadges(selectEl, sizes){
  if(!selectEl) return;
  // remove existing badge container
  let container = selectEl.nextElementSibling;
  if(!container || !container.classList || !container.classList.contains('option-badges')){
    container = document.createElement('div'); container.className = 'option-badges'; selectEl.parentNode.insertBefore(container, selectEl.nextSibling);
  }
  container.innerHTML = '';
  sizes.forEach(s=>{
    const btn = document.createElement('button'); btn.type='button'; btn.className='badge'; btn.textContent = s;
    const hex = sizeColorToHex(s);
    btn.style.background = 'rgba(255,255,255,0.03)';
    btn.style.borderColor = hex;
    btn.style.color = hex;
    btn.addEventListener('click', ()=>{
      // set select value and active state
      selectEl.value = s;
      container.querySelectorAll('.badge').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      // when active make background colored and text dark for contrast
      container.querySelectorAll('.badge').forEach(b=>{ b.style.background='rgba(255,255,255,0.03)'; b.style.color = sizeColorToHex(b.textContent) });
      btn.style.background = hex; btn.style.color = '#061017';
    });
    container.appendChild(btn);
  });
  // activate first
  const first = container.querySelector('.badge'); if(first){ first.classList.add('active'); selectEl.value = sizes[0]; }
}

function renderColorBadges(selectEl, colors){
  if(!selectEl) return;
  let container = selectEl.nextElementSibling;
  if(!container || !container.classList || !container.classList.contains('option-badges')){
    container = document.createElement('div'); container.className = 'option-badges'; selectEl.parentNode.insertBefore(container, selectEl.nextSibling);
  }
  container.innerHTML = '';
  colors.forEach(c=>{
    const btn = document.createElement('button'); btn.type='button'; btn.className='badge';
    const hex = sizeColorToHex(c.replace(/\s+/g,''));
    btn.innerHTML = `<span class=\"swatch\" style=\"background:${hex}\"></span> <span style=\"color:${hex};font-weight:700;margin-left:6px\">${c}</span>`;
    btn.addEventListener('click', ()=>{
      selectEl.value = c;
      container.querySelectorAll('.badge').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
    });
    container.appendChild(btn);
  });
  const first = container.querySelector('.badge'); if(first){ first.classList.add('active'); selectEl.value = colors[0]; }
}

// Product detail page handling
function getQueryParam(name){ try{ const params = new URLSearchParams(location.search); return params.get(name); }catch(e){return null} }

const productDetailEl = document.getElementById('product-detail');
if(productDetailEl){
  const id = getQueryParam('id');
  const p = products.find(x=>x.id==id) || products[0];
  productDetailEl.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;align-items:start;">
      <div>
        <img id="pd-main-img" src="${(p.images && p.images.length)?p.images[0]:p.img}" style="width:100%;height:520px;object-fit:cover;border-radius:10px">
        <div id="pd-thumbs" style="display:flex;gap:0.5rem;margin-top:0.6rem">
          ${(p.images && p.images.length)? p.images.map((im,idx)=>`<img class=\"pd-thumb\" data-idx=\"${idx}\" src=\"${im}\" style=\"width:72px;height:96px;object-fit:cover;border-radius:6px;cursor:pointer;border:1px solid rgba(255,255,255,0.04)\">`).join('') : ''}
        </div>
      </div>
      <div>
        <h2>${p.name}</h2>
        <div class="muted">${p.category}</div>
        <p style="margin-top:1rem">${p.desc || ''}</p>
        <div class="price" style="margin-top:1rem">$${p.price.toFixed(2)}</div>
        <div class="product-options" style="margin-top:0.8rem">
          <label>Size
            <select id="pd-size" name="size">
            ${p.sizes ? p.sizes.map(s=>`<option value="${s}">${s}</option>`).join('') : ''}
            </select>
          </label>
          <label>Color
            <select id="pd-color" name="color">
            ${p.colors ? p.colors.map(c=>`<option value="${c}">${c}</option>`).join('') : ''}
            </select>
          </label>
          <label>Qty
            <input id="pd-qty" name="qty" type="number" min="1" value="1">
          </label>
        </div>
        <div style="margin-top:1rem"><button class="add-btn" data-id="${p.id}">Add to cart</button> <a class="add-btn" href="javascript:;" onclick="location.href='catalog.html'">Back</a></div>
      </div>
    </div>
  `;
  // attach thumbnail handlers
  const mainImg = document.getElementById('pd-main-img');
  const thumbs = document.querySelectorAll('.pd-thumb');
  thumbs.forEach(t=> t.addEventListener('click', e=>{ if(mainImg) mainImg.src = e.target.src; }));
  // render size/color badges on product detail
  const pdSize = document.getElementById('pd-size');
  const pdColor = document.getElementById('pd-color');
  if(pdSize && p.sizes) renderSizeBadges(pdSize, p.sizes);
  if(pdColor && p.colors) renderColorBadges(pdColor, p.colors);
  // attach Add to cart on product detail
  const pdAdd = productDetailEl.querySelector('.add-btn[data-id]');
  if(pdAdd){
    pdAdd.addEventListener('click', e=>{
      e.preventDefault(); e.stopPropagation();
      const id = pdAdd.dataset.id;
      const size = (document.getElementById('pd-size')||{}).value;
      const color = (document.getElementById('pd-color')||{}).value;
      const qty = parseInt((document.getElementById('pd-qty')||{}).value) || 1;
      addToCart(id, {size, color, qty});
    });
  }
}

// Login form (demo)
const loginForm = document.getElementById('login-form');
if(loginForm) loginForm.addEventListener('submit', e=>{
  e.preventDefault();
  const em = loginForm.querySelector('input[name="email"]').value;
  localStorage.setItem('abdullah_user', JSON.stringify({email:em}));
  const msg = document.getElementById('login-msg'); if(msg) msg.textContent = 'Signed in as ' + em + ' (demo)';
});

// Contact/newsletter form handlers
document.addEventListener('submit', e=>{
  if(e.target && e.target.matches('.newsletter form')){
    e.preventDefault();
    const em = e.target.querySelector('input[name="email"]').value;
    alert('Thanks — ' + em + ' added to Abdullah newsletter.');
    e.target.reset();
  }
  if(e.target && e.target.matches('.contact-form form')){
    e.preventDefault();
    alert('Message sent — we will reply to you shortly.');
    e.target.reset();
  }
});

const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalPrice = document.getElementById('modal-price');
const modalAdd = document.getElementById('modal-add');
const modalClose = document.getElementById('modal-close');
let modalCurrentId = null;

function openModal(id){
  if(!modal) return;
  const p = products.find(x=>x.id==id);
  if(!p) return;
  modalCurrentId = p.id;
  if(modalImg) modalImg.src = p.img;
  if(modalTitle) modalTitle.textContent = p.name;
  if(modalCategory) modalCategory.textContent = p.category;
  if(modalPrice) modalPrice.textContent = `$${p.price.toFixed(2)}`;
  // populate options
  if(modalSize){
    modalSize.innerHTML = '';
    if(p.sizes && p.sizes.length){
      p.sizes.forEach(s=>{ const opt = document.createElement('option'); opt.value = s; opt.textContent = s; modalSize.appendChild(opt); });
      modalSize.style.display = '';
      // render size badges
      renderSizeBadges(modalSize, p.sizes);
    } else { modalSize.style.display = 'none'; }
  }
  if(modalColor){
    modalColor.innerHTML = '';
    if(p.colors && p.colors.length){
      p.colors.forEach(c=>{ const opt = document.createElement('option'); opt.value = c; opt.textContent = c; modalColor.appendChild(opt); });
      modalColor.style.display = '';
      renderColorBadges(modalColor, p.colors);
    } else { modalColor.style.display = 'none'; }
  }
  if(modalQty) modalQty.value = 1;
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){ if(modal) modal.setAttribute('aria-hidden','true'); modalCurrentId = null }
if(modalClose) modalClose.addEventListener('click', closeModal);
if(modal) modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
if(modalAdd) modalAdd.addEventListener('click', ()=>{ if(modalCurrentId) addToCart(modalCurrentId); });

// Newsletter & contact (client-side only)
// create minimal handlers if forms exist
document.addEventListener('submit', e=>{
  if(e.target && e.target.matches('.newsletter form')){
    e.preventDefault();
    const em = e.target.querySelector('input[name="email"]').value;
    alert('Thanks — ' + em + ' added to Abdullah newsletter.');
    e.target.reset();
  }
  if(e.target && e.target.matches('.contact-form form')){
    e.preventDefault();
    alert('Message sent — we will reply to you shortly.');
    e.target.reset();
  }
  if(e.target && e.target.matches('#login-form')){
    e.preventDefault();
    const em = e.target.querySelector('input[name="email"]').value;
    // mock authentication
    localStorage.setItem('abdullah_user', JSON.stringify({email:em}));
    const msg = document.getElementById('login-msg');
    if(msg) msg.textContent = 'Signed in as ' + em + ' (demo)';
  }
});

// lazy load images inside CSS background: nothing extra, images load as background-image URLs