/* ═══════════════════════════════════════════════
   SportEx — script.js  v3
   Categories + subcategories modal system
═══════════════════════════════════════════════ */
'use strict';

/* ─── TELEGRAM ───────────────────────────────── */
const TG_TOKEN   = '8667869989:AAF5GKSaQZQY5o5-nSp7icEE4K8XBCUG8eI';
const TG_CHAT_ID = '8667869989'; // замени на свой личный chat_id

/* ═══════════════════════════════════════════════
   CATEGORIES DATA  — полная структура
═══════════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'clothing',
    icon: '👕',
    name: 'Спортивная одежда',
    name_ua: 'Спортивний одяг',
    name_en: 'Sportswear',
    totalCount: 195,
    subcategories: [
      { icon: '👔', name: 'Спортивная одежда мужская',       name_ua: 'Спортивний одяг чоловічий',     name_en: 'Men\'s sportswear',        count: 29 },
      { icon: '🩱', name: 'Компрессионная одежда',           name_ua: 'Компресійний одяг',             name_en: 'Compression wear',         count: 86 },
      { icon: '👦', name: 'Детская компрессионная одежда',   name_ua: 'Дитячий компресійний одяг',     name_en: 'Kids compression wear',    count: 66 },
      { icon: '🧣', name: 'Термобелье',                      name_ua: 'Термобілизна',                  name_en: 'Thermal underwear',        count: 5  },
      { icon: '👩', name: 'Женская спортивная одежда',       name_ua: 'Жіночий спортивний одяг',       name_en: 'Women\'s sportswear',      count: 2  },
      { icon: '🧒', name: 'Детские спортивные костюмы',     name_ua: 'Дитячі спортивні костюми',      name_en: 'Kids sport suits',         count: 7  },
    ]
  },
  {
    id: 'martial',
    icon: '🥊',
    name: 'Единоборства',
    name_ua: 'Єдиноборства',
    name_en: 'Martial Arts',
    totalCount: 98,
    subcategories: [
      { icon: '🥊', name: 'Боксёрские перчатки',         name_ua: 'Боксерські рукавиці',     name_en: 'Boxing gloves',           count: 25 },
      { icon: '🤚', name: 'Лапы боксёрские',             name_ua: 'Лапи боксерські',         name_en: 'Boxing pads',             count: 5  },
      { icon: '😬', name: 'Капы',                        name_ua: 'Капи',                    name_en: 'Mouthguards',             count: 9  },
      { icon: '🏋️', name: 'Тренажёр боксёрский',        name_ua: 'Тренажер боксерський',    name_en: 'Boxing trainer',          count: 4  },
      { icon: '⛑️', name: 'Шлем боксёрский',            name_ua: 'Шолом боксерський',       name_en: 'Boxing helmet',           count: 8  },
      { icon: '🛡️', name: 'Защита',                     name_ua: 'Захист',                  name_en: 'Protection',              count: 17 },
      { icon: '👕', name: 'Одежда для бокса',            name_ua: 'Одяг для боксу',          name_en: 'Boxing clothing',         count: 6  },
      { icon: '👟', name: 'Обувь для борьбы и бокса',   name_ua: 'Взуття для боротьби',     name_en: 'Combat sports shoes',     count: 7  },
      { icon: '🩹', name: 'Бинт боксёрский',             name_ua: 'Бинт боксерський',        name_en: 'Boxing wraps',            count: 6  },
      { icon: '⚡', name: 'Битки для единоборств',       name_ua: 'Щитки для єдиноборств',   name_en: 'Martial arts pads',       count: 11 },
    ]
  },
  {
    id: 'football',
    icon: '⚽',
    name: 'Футбол',
    name_ua: 'Футбол',
    name_en: 'Football',
    totalCount: 106,
    subcategories: [
      { icon: '⚽', name: 'Футбольные мячи',                 name_ua: 'Футбольні м\'ячі',         name_en: 'Footballs',               count: 13 },
      { icon: '🧦', name: 'Гетры футбольные',               name_ua: 'Гетри футбольні',          name_en: 'Football socks',          count: 6  },
      { icon: '🧤', name: 'Перчатки вратарские',            name_ua: 'Рукавиці воротарські',     name_en: 'Goalkeeper gloves',       count: 9  },
      { icon: '👕', name: 'Форма футбольных клубов юниор',  name_ua: 'Форма клубів юніор',       name_en: 'Junior club kits',        count: 44 },
      { icon: '🏆', name: 'Форма футбольная взрослая',      name_ua: 'Форма футбольна доросла',  name_en: 'Adult football kits',     count: 5  },
      { icon: '🦵', name: 'Щитки футбольные',               name_ua: 'Щитки футбольні',          name_en: 'Shin guards',             count: 9  },
      { icon: '👟', name: 'Сороконожки',                    name_ua: 'Сороконіжки',              name_en: 'Turfs',                   count: 12 },
      { icon: '⚡', name: 'Копы футбольные',                name_ua: 'Копи футбольні',           name_en: 'Football cleats',         count: 4  },
      { icon: '🏃', name: 'Обувь для футзала',              name_ua: 'Взуття для футзалу',       name_en: 'Futsal shoes',            count: 2  },
      { icon: '🧢', name: 'Шапки горловики',               name_ua: 'Шапки горловики',          name_en: 'Neck warmers',            count: 2  },
    ]
  },
  {
    id: 'sport',
    icon: '🏋️',
    name: 'Спорт товары',
    name_ua: 'Спорт товари',
    name_en: 'Sport goods',
    totalCount: 54,
    subcategories: [
      { icon: '🔱', name: 'Турники',                      name_ua: 'Турніки',                  name_en: 'Pull-up bars',            count: 2  },
      { icon: '🎒', name: 'Сумки спортивные',             name_ua: 'Сумки спортивні',          name_en: 'Sport bags',              count: 10 },
      { icon: '🏓', name: 'Настольный теннис',            name_ua: 'Настільний теніс',         name_en: 'Table tennis',            count: 9  },
      { icon: '👊', name: 'Мешки боксёрские и крепление', name_ua: 'Мішки боксерські',         name_en: 'Punching bags',           count: 3  },
      { icon: '⚙️', name: 'Тренажёры',                   name_ua: 'Тренажери',                name_en: 'Gym equipment',           count: 6  },
      { icon: '🔗', name: 'Аксессуары',                   name_ua: 'Аксесуари',                name_en: 'Accessories',             count: 2  },
      { icon: '🏋️', name: 'Утяжелители',                 name_ua: 'Обважнювачі',              name_en: 'Ankle weights',           count: 13 },
      { icon: '🏆', name: 'Тяжёлая атлетика',            name_ua: 'Важка атлетика',           name_en: 'Weightlifting',           count: 3  },
      { icon: '💆', name: 'Массажёры',                    name_ua: 'Масажери',                 name_en: 'Massagers',               count: 4  },
      { icon: '🪢', name: 'Скакалки',                     name_ua: 'Скакалки',                 name_en: 'Jump ropes',              count: 1  },
      { icon: '🏸', name: 'Бадминтон',                    name_ua: 'Бадмінтон',                name_en: 'Badminton',               count: 1  },
    ]
  },
  {
    id: 'basketball',
    icon: '🏀',
    name: 'Баскетбол',
    name_ua: 'Баскетбол',
    name_en: 'Basketball',
    totalCount: 20,
    subcategories: [
      { icon: '🏀', name: 'Баскетбольные мячи',     name_ua: 'Баскетбольні м\'ячі', name_en: 'Basketballs',         count: 8  },
      { icon: '👕', name: 'Форма баскетбольная',     name_ua: 'Форма баскетбольна',  name_en: 'Basketball kits',     count: 7  },
      { icon: '👟', name: 'Кроссовки баскетбольные', name_ua: 'Кросівки баскетбол',  name_en: 'Basketball shoes',    count: 5  },
    ]
  },
  {
    id: 'volleyball',
    icon: '🏐',
    name: 'Волейбол',
    name_ua: 'Волейбол',
    name_en: 'Volleyball',
    totalCount: 11,
    subcategories: [
      { icon: '🏐', name: 'Мячи для волейбола',        name_ua: 'М\'ячі для волейболу',    name_en: 'Volleyballs',         count: 5 },
      { icon: '🦵', name: 'Наколенники для волейбола', name_ua: 'Наколінники для волейболу', name_en: 'Volleyball knee pads', count: 6 },
    ]
  },
  {
    id: 'swimming',
    icon: '🏊',
    name: 'Плавание',
    name_ua: 'Плавання',
    name_en: 'Swimming',
    totalCount: 32,
    subcategories: [
      { icon: '🤿', name: 'Маски трубки',              name_ua: 'Маски трубки',              name_en: 'Masks & snorkels',    count: 14 },
      { icon: '🦶', name: 'Ласты',                     name_ua: 'Ласти',                     name_en: 'Fins',                count: 9  },
      { icon: '🥽', name: 'Очки для плавания',         name_ua: 'Окуляри для плавання',      name_en: 'Swimming goggles',    count: 5  },
      { icon: '🩱', name: 'Шапочки для бассейна',      name_ua: 'Шапочки для басейну',       name_en: 'Swim caps',           count: 1  },
      { icon: '🏊', name: 'Досточки для плавания',     name_ua: 'Дошки для плавання',        name_en: 'Kickboards',          count: 2  },
    ]
  },
  {
    id: 'fitness',
    icon: '🧘',
    name: 'Фитнес йога',
    name_ua: 'Фітнес йога',
    name_en: 'Fitness & Yoga',
    totalCount: 14,
    subcategories: [
      { icon: '👗', name: 'Одежда для фитнеса',    name_ua: 'Одяг для фітнесу',     name_en: 'Fitness clothing',   count: 7 },
      { icon: '🎽', name: 'Аксессуары для фитнеса', name_ua: 'Аксесуари для фітнесу', name_en: 'Fitness accessories', count: 7 },
    ]
  },
  {
    id: 'karate',
    icon: '🥋',
    name: 'Каратэ',
    name_ua: 'Карате',
    name_en: 'Karate',
    totalCount: 5,
    subcategories: [
      { icon: '👘', name: 'Кимоно для каратэ',    name_ua: 'Кімоно для карате',   name_en: 'Karate gi',           count: 3 },
      { icon: '🥊', name: 'Защита для каратэ',    name_ua: 'Захист для карате',   name_en: 'Karate protection',   count: 2 },
    ]
  },
  {
    id: 'taekwondo',
    icon: '🦵',
    name: 'Тхэквондо',
    name_ua: 'Тхеквондо',
    name_en: 'Taekwondo',
    totalCount: 2,
    subcategories: [
      { icon: '🥋', name: 'Добок (форма тхэквондо)', name_ua: 'Добок (форма)',     name_en: 'Dobok (uniform)',     count: 1 },
      { icon: '🥊', name: 'Защита для тхэквондо',    name_ua: 'Захист тхеквондо',  name_en: 'Taekwondo protection', count: 1 },
    ]
  },
  {
    id: 'winter',
    icon: '⛷️',
    name: 'Зимний спорт',
    name_ua: 'Зимовий спорт',
    name_en: 'Winter sports',
    totalCount: 10,
    subcategories: [
      { icon: '🧤', name: 'Перчатки зимние спортивные', name_ua: 'Рукавиці зимові',   name_en: 'Winter gloves',       count: 4 },
      { icon: '🧣', name: 'Термобелье зимнее',          name_ua: 'Термобілизна зимова', name_en: 'Winter thermals',    count: 4 },
      { icon: '🎿', name: 'Аксессуары зимнего спорта',  name_ua: 'Аксесуари зимового', name_en: 'Winter accessories',  count: 2 },
    ]
  },
  {
    id: 'tourism',
    icon: '🏕️',
    name: 'Товары для туризма и отдыха',
    name_ua: 'Товари для туризму та відпочинку',
    name_en: 'Tourism & outdoor',
    totalCount: 26,
    subcategories: [
      { icon: '🎒', name: 'Рюкзаки туристические',   name_ua: 'Рюкзаки туристичні',    name_en: 'Hiking backpacks',    count: 6  },
      { icon: '🏕️', name: 'Туристическое снаряжение', name_ua: 'Туристичне спорядження', name_en: 'Camping gear',        count: 8  },
      { icon: '🔦', name: 'Фонари и освещение',       name_ua: 'Ліхтарі та освітлення', name_en: 'Flashlights',         count: 5  },
      { icon: '🧰', name: 'Аксессуары для туризма',   name_ua: 'Аксесуари для туризму', name_en: 'Tourism accessories',  count: 7  },
    ]
  },
];

/* ─── STATE ──────────────────────────────────── */
const State = {
  lang: localStorage.getItem('sx_lang') || null,
  dict: {},
  allLang: {},
  products: [],
  currentProduct: null,
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  initCursor();
  try {
    const [langData, products] = await Promise.all([
      fetch('lang.json').then(r => r.json()),
      (async () => {
        // Firebase first → localStorage → products.json
        if (window.__fbReady && window.FB) {
          try {
            const fbProds = await window.FB.getProducts();
            if (fbProds && fbProds.length > 0) return fbProds;
          } catch(e) { console.warn('FB getProducts fallback:', e); }
        }
        const saved = localStorage.getItem('sx_products');
        if (saved) return JSON.parse(saved);
        const res = await fetch('products.json');
        const data = await res.json();
        // First run: seed Firebase with products.json data
        if (window.__fbReady && window.FB) {
          window.FB.seedProducts(data).then(() =>
            console.log('✅ Товары загружены в Firebase')
          );
        }
        return data;
      })(),
    ]);
    State.products = products;
    State.allLang  = langData;
    if (!State.lang) { State.lang = 'ru'; localStorage.setItem('sx_lang', 'ru'); }
    applyLang(langData[State.lang]);
    initApp();

    // If Firebase already fired before script.js was ready — apply now
    if (window.__fbLastProducts && window.__fbLastProducts.length > 0) {
      State.products = window.__fbLastProducts;
      renderProducts();
      renderCategories();
    }

    // Subscribe to future Firebase real-time updates
    window.__fbOnProducts = function(products) {
      if (!products || !products.length) return;
      State.products = products;
      renderProducts();
      renderCategories();
      if (typeof window.__admRefresh === 'function') window.__admRefresh(products);
    };

  } catch(e) {
    console.error('Boot:', e);
    initApp();
  }
}

/* ═══════════════════════════════════════════════
   CURSOR
═══════════════════════════════════════════════ */
function initCursor() {
  const cursor = $('#cursor'), ring = $('#cursor-ring');
  if (!cursor || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  });
  (function loop(){
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    if(e.target.closest('a,button,[role="button"],.product-card,.cat-card,.subcat-item,.splash-lang-btn')) {
      cursor.style.width='20px'; cursor.style.height='20px';
      ring.style.width='52px'; ring.style.height='52px'; ring.style.opacity='.9';
    }
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest('a,button,[role="button"],.product-card,.cat-card,.subcat-item,.splash-lang-btn')) {
      cursor.style.width='12px'; cursor.style.height='12px';
      ring.style.width='36px'; ring.style.height='36px'; ring.style.opacity='.6';
    }
  });
}

/* ═══════════════════════════════════════════════
   SPLASH
═══════════════════════════════════════════════ */
function showSplash(langData) {
  const splash = $('#splash');
  if (!splash) return;
  splash.classList.remove('hidden');
  $$('.splash-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.lang = btn.dataset.lang;
      localStorage.setItem('sx_lang', State.lang);
      applyLang(langData[State.lang]);
      splash.style.transition = 'opacity .45s ease, transform .45s ease';
      splash.style.opacity = '0'; splash.style.transform = 'scale(1.04)';
      setTimeout(() => {
        splash.classList.add('hidden');
        window.scrollTo({ top:0, behavior:'instant' });
        initApp();
      }, 460);
    });
  });
}

/* ═══════════════════════════════════════════════
   I18N
═══════════════════════════════════════════════ */
function applyLang(dict) {
  if (!dict) return;
  State.dict = dict;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] === undefined) return;
    if (el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=dict[key];
    else if (el.hasAttribute('data-i18n-html')) el.innerHTML=dict[key];
    else el.textContent=dict[key];
  });
  $$('.lang-switch-btn').forEach(b => b.classList.toggle('active', b.dataset.lang===State.lang));
  document.documentElement.lang = State.lang==='ua'?'uk':(State.lang||'ru');
}
function t(k){ return State.dict[k]||k; }

/* ═══════════════════════════════════════════════
   INIT APP
═══════════════════════════════════════════════ */
function initApp() {
  initHeader();
  initMobileNav();
  initReveal();
  renderCategories();
  renderProducts();
  renderFooterCats();
  initCategoryModal();
  initLangSwitch();
  handleUrlProduct();
  window.addEventListener('popstate', handleUrlProduct);
}

function initHeader() {
  const h = $('#header');
  if (!h) return;
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', scrollY>50), {passive:true});
}
function initMobileNav() {
  const burger=$('#burgerBtn'), nav=$('#mobileNav');
  if (!burger||!nav) return;
  burger.addEventListener('click', () => nav.classList.add('open'));
  $('#closeNav')?.addEventListener('click', () => nav.classList.remove('open'));
  $$('.mobile-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
function initReveal() {
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold:.1 }
  );
  $$('.reveal').forEach(el => obs.observe(el));
}
function initLangSwitch() {
  $$('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.lang = btn.dataset.lang;
      localStorage.setItem('sx_lang', State.lang);
      applyLang(State.allLang[State.lang]);
      renderCategories();
      renderProducts();
      renderFooterCats();
    });
  });
}

/* ═══════════════════════════════════════════════
   RENDER CATEGORIES GRID
═══════════════════════════════════════════════ */
function getCatName(cat) {
  return State.lang==='ua' ? cat.name_ua : State.lang==='en' ? cat.name_en : cat.name;
}
function getSubName(sub) {
  return State.lang==='ua' ? sub.name_ua : State.lang==='en' ? sub.name_en : sub.name;
}

function renderCategories() {
  const grid = $('#categoriesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CATEGORIES.forEach((cat, i) => {
    const name = getCatName(cat);
    const delay = (i % 4) + 1;
    const card = document.createElement('div');
    card.className = `cat-card reveal reveal-delay-${delay}`;
    card.dataset.catId = cat.id;
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.innerHTML = `
      <div class="cat-bg-art">${cat.icon}</div>
      <div class="cat-gradient"></div>
      <div class="cat-card-line"></div>
      <div class="cat-info">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${name}</span>
        <span class="cat-sub-count">${cat.totalCount} ${t('stat_products')||'товаров'} · ${cat.subcategories.length} подкатегорий</span>
      </div>
      <span class="cat-arrow">→</span>`;
    card.addEventListener('click', () => openCategoryModal(cat));
    card.addEventListener('keydown', e => { if(e.key==='Enter') openCategoryModal(cat); });
    grid.appendChild(card);
  });

  initReveal();
}

function renderFooterCats() {
  const el = $('#footerCatLinks');
  if (!el) return;
  el.innerHTML = CATEGORIES.slice(0,8).map(c =>
    `<span class="footer-link" style="cursor:default">${getCatName(c)}</span>`
  ).join('');
}

/* ═══════════════════════════════════════════════
   CATEGORY MODAL (with subcategories)
═══════════════════════════════════════════════ */
function initCategoryModal() {
  const modal = $('#catModal');
  if (!modal) return;

  $('#catModalClose')?.addEventListener('click', closeCategoryModal);
  modal.addEventListener('click', e => { if(e.target===modal) closeCategoryModal(); });
  document.addEventListener('keydown', e => {
    if(e.key==='Escape' && modal.classList.contains('open')) closeCategoryModal();
  });
}

function openCategoryModal(cat) {
  const modal   = $('#catModal');
  const title   = $('#catModalTitle');
  const icon    = $('#catModalIcon');
  const list    = $('#catModalList');
  if (!modal) return;

  title.textContent = getCatName(cat);
  icon.textContent  = cat.icon;
  list.innerHTML    = '';

  cat.subcategories.forEach(sub => {
    const name = getSubName(sub);
    const item = document.createElement('div');
    item.className = 'subcat-item';
    item.innerHTML = `
      <div class="subcat-left">
        <span class="subcat-icon">${sub.icon}</span>
        <span class="subcat-name">${name}</span>
      </div>
      <div class="subcat-right">
        <span class="subcat-count">${sub.count}</span>
        <span class="subcat-arrow">→</span>
      </div>`;

    // Click on sub → scroll to products + filter (future: add product filter by subcat)
    item.addEventListener('click', () => {
      closeCategoryModal();
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
      }, 350);
    });
    list.appendChild(item);
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeCategoryModal() {
  const modal = $('#catModal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => {
    modal.classList.add('hidden');
    if (!$('#productOverlay') && !$('#checkoutModal')) document.body.style.overflow = '';
  }, 360);
}

/* ═══════════════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════════════ */
function getProductName(p) {
  return State.lang==='ua' ? p.name_ua : State.lang==='en' ? p.name_en : p.name;
}

function renderProducts() {
  const grid = $('#productsGrid');
  if (!grid) return;
  const dict = State.dict;
  grid.innerHTML = '';

  State.products.forEach((p, i) => {
    const name  = getProductName(p);
    const badge = p.badge==='new' ? (dict.badge_new||'NEW')
                : p.badge==='hit' ? (dict.badge_hit||'ХИТ') : '';
    const card = document.createElement('div');
    card.className = `product-card reveal reveal-delay-${(i%4)+1}`;
    card.setAttribute('role','button'); card.setAttribute('tabindex','0');
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${name}" class="product-img" loading="lazy"
          onerror="this.src='https://placehold.co/400x400/161616/444?text=SportEx'"/>
        ${badge?`<span class="product-badge">${badge}</span>`:''}
      </div>
      <div class="product-info">
        <div class="product-name">${name}</div>
        <div class="product-footer">
          <div class="product-price">${p.price.toLocaleString('uk-UA')}<span> ₴</span></div>
          <button class="btn-buy" aria-label="${dict.btn_buy||'Купить'}">→</button>
        </div>
      </div>`;
    card.addEventListener('click', e => { if(!e.target.closest('.btn-buy')) openProductPage(p.id); });
    card.querySelector('.btn-buy').addEventListener('click', e => { e.stopPropagation(); openCheckout(p); });
    card.addEventListener('keydown', e => { if(e.key==='Enter') openProductPage(p.id); });
    grid.appendChild(card);
  });
  initReveal();
}

/* ═══════════════════════════════════════════════
   PRODUCT PAGE
═══════════════════════════════════════════════ */
function openProductPage(id) {
  const p = State.products.find(x=>x.id===id);
  if (!p) return;
  State.currentProduct = p;
  history.pushState({productId:id}, '', `?product=${id}`);
  renderProductPage(p);
}
function closeProductPage() {
  State.currentProduct = null;
  history.pushState({}, '', window.location.pathname);
  const o=$('#productOverlay');
  if(o){o.classList.remove('open');setTimeout(()=>o.remove(),400);}
  document.body.style.overflow='';
}
function handleUrlProduct() {
  const id=parseInt(new URLSearchParams(location.search).get('product'));
  if(id){const p=State.products.find(x=>x.id===id);if(p){State.currentProduct=p;renderProductPage(p);return;}}
  const o=$('#productOverlay');
  if(o){o.classList.remove('open');setTimeout(()=>o.remove(),400);document.body.style.overflow='';}
}
function renderProductPage(product) {
  $('#productOverlay')?.remove();
  const dict=State.dict, name=getProductName(product);
  const overlay=document.createElement('div');
  overlay.id='productOverlay'; overlay.className='product-overlay';
  overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-modal','true');
  overlay.innerHTML=`
    <div class="product-overlay-inner">
      <button class="product-back-btn" id="productBackBtn">${dict.product_back||'← Назад в каталог'}</button>
      <div class="product-page-grid">
        <div class="product-page-img-wrap">
          <img src="${product.image}" alt="${name}" class="product-page-img"
            onerror="this.src='https://placehold.co/600x600/161616/444?text=SportEx'"/>
        </div>
        <div class="product-page-info">
          <div class="product-page-label">${product.category.toUpperCase()}${product.brand?' · '+product.brand:''}</div>
          <h1 class="product-page-name">${name}</h1>
          <div class="product-page-price">${product.price.toLocaleString('uk-UA')} <span>₴</span></div>
          <div class="product-page-meta">
            ${product.brand?`<div class="meta-row"><span>${dict.product_brand||'Бренд'}:</span><strong>${product.brand}</strong></div>`:''}
            ${product.sku?`<div class="meta-row"><span>${dict.product_sku||'Артикул'}:</span><strong>${product.sku}</strong></div>`:''}
            <div class="meta-row meta-available"><span class="available-dot"></span><span>${dict.product_available||'В наличии'}</span></div>
          </div>
          <button class="btn-primary product-buy-btn" id="productBuyBtn">${dict.product_btn_buy||'Оформить заказ'}</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>overlay.classList.add('open'));
  $('#productBackBtn').addEventListener('click', closeProductPage);
  overlay.addEventListener('click', e=>{if(e.target===overlay)closeProductPage();});
  $('#productBuyBtn').addEventListener('click', ()=>openCheckout(product));
  const onEsc=e=>{if(e.key==='Escape'){closeProductPage();document.removeEventListener('keydown',onEsc);}};
  document.addEventListener('keydown',onEsc);
}

/* ═══════════════════════════════════════════════
   CHECKOUT
═══════════════════════════════════════════════ */
function openCheckout(product) {
  $('#checkoutModal')?.remove();
  const dict=State.dict, name=getProductName(product);
  const modal=document.createElement('div');
  modal.id='checkoutModal'; modal.className='checkout-modal';
  modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
  modal.innerHTML=`
    <div class="checkout-inner">
      <button class="checkout-close-btn" id="checkoutCloseBtn">✕</button>
      <h2 class="checkout-title">${dict.checkout_title||'Оформление заказа'}</h2>
      <div class="checkout-product-info">
        <img src="${product.image}" alt="${name}" class="checkout-product-img"
          onerror="this.src='https://placehold.co/80x80/161616/444?text=SX'"/>
        <div>
          <div class="checkout-product-name">${name}</div>
          <div class="checkout-product-price">${product.price.toLocaleString('uk-UA')} ₴</div>
        </div>
      </div>
      <form id="checkoutForm" novalidate autocomplete="on">
        <div class="form-group">
          <label for="cf-name">${dict.checkout_name||'Имя *'}</label>
          <input type="text" id="cf-name" name="name" required autocomplete="given-name" placeholder="${dict.checkout_name_ph||'Ваше имя'}"/>
          <span class="field-error" id="err-name"></span>
        </div>
        <div class="form-group">
          <label for="cf-phone">${dict.checkout_phone||'Телефон *'}</label>
          <input type="tel" id="cf-phone" name="phone" required autocomplete="tel" placeholder="+380 (99) 999-99-99" maxlength="19"/>
          <span class="field-error" id="err-phone"></span>
        </div>
        <div class="form-group">
          <label for="cf-city">${dict.checkout_city||'Город *'}</label>
          <input type="text" id="cf-city" name="city" required autocomplete="address-level2" placeholder="${dict.checkout_city_ph||'Введите город'}" list="ukraine-cities"/>
          <datalist id="ukraine-cities">
            <option value="Одеса"><option value="Київ"><option value="Харків">
            <option value="Дніпро"><option value="Запоріжжя"><option value="Львів">
            <option value="Миколаїв"><option value="Херсон"><option value="Полтава">
            <option value="Черкаси"><option value="Вінниця"><option value="Житомир">
            <option value="Суми"><option value="Хмельницький"><option value="Рівне">
            <option value="Тернопіль"><option value="Луцьк"><option value="Ужгород">
            <option value="Чернівці"><option value="Чернігів"><option value="Кропивницький">
          </datalist>
          <span class="field-error" id="err-city"></span>
        </div>
        <div class="form-group">
          <label>${dict.checkout_size||'Размер'}</label>
          <div class="size-options">
            ${['XS','S','M','L','XL','XXL'].map((s,i)=>`
              <label class="size-btn-label">
                <input type="radio" name="size" value="${s}" ${i===2?'checked':''}>
                <span class="size-btn">${s}</span>
              </label>`).join('')}
          </div>
        </div>
        <div class="form-group">
          <label>${dict.checkout_delivery||'Служба доставки *'}</label>
          <div class="delivery-options">
            <label class="radio-label"><input type="radio" name="delivery" value="nova" checked><span class="radio-custom"></span><span>${dict.checkout_nova||'Нова Пошта'}</span></label>
            <label class="radio-label"><input type="radio" name="delivery" value="ukr"><span class="radio-custom"></span><span>${dict.checkout_ukr||'Укрпошта'}</span></label>
          </div>
        </div>
        <div class="form-group">
          <label for="cf-branch">${dict.checkout_branch||'Номер отделения'}</label>
          <input type="text" id="cf-branch" name="branch" placeholder="${dict.checkout_branch_ph||'№ отделения'}"/>
        </div>
        <button type="submit" class="btn-primary checkout-submit-btn">${dict.checkout_btn||'Подтвердить заказ'}</button>
      </form>
      <div class="checkout-success hidden" id="checkoutSuccess">
        <div class="success-icon">✓</div>
        <p>${dict.checkout_success||'🎉 Спасибо за заказ!'}</p>
        <button class="btn-outline success-close-btn" id="successCloseBtn">${dict.checkout_close||'Закрыть'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>modal.classList.add('open'));
  const ph=$('#cf-phone',modal);
  ph.addEventListener('input',()=>applyPhoneMask(ph));
  $('#checkoutCloseBtn').addEventListener('click',closeCheckout);
  modal.addEventListener('click',e=>{if(e.target===modal)closeCheckout();});
  const onEsc=e=>{if(e.key==='Escape'){closeCheckout();document.removeEventListener('keydown',onEsc);}};
  document.addEventListener('keydown',onEsc);
  $('#checkoutForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(validateCheckoutForm(modal)) submitOrder(collectFormData(modal,product));
  });
  $('#successCloseBtn')?.addEventListener('click',closeCheckout);
}

function closeCheckout() {
  const m=$('#checkoutModal');
  if(!m)return;
  m.classList.remove('open');
  setTimeout(()=>{m.remove();if(!$('#productOverlay'))document.body.style.overflow='';},400);
}

/* ─── Phone mask ─── */
function applyPhoneMask(input) {
  let d=input.value.replace(/\D/g,'');
  if(d.startsWith('380'))d=d.slice(3);
  else if(d.startsWith('80'))d=d.slice(2);
  else if(d.startsWith('0'))d=d.slice(1);
  d=d.slice(0,9);
  let out='+380 ';
  if(d.length>0)out+='('+d.slice(0,2);
  if(d.length>=2)out+=') '+d.slice(2,5);
  if(d.length>=5)out+='-'+d.slice(5,7);
  if(d.length>=7)out+='-'+d.slice(7,9);
  input.value=out;
}

/* ─── Validation ─── */
function validateCheckoutForm(modal) {
  let ok=true;
  const err=(id,msg)=>{const el=$(`#${id}`,modal);if(el)el.textContent=msg;if(msg)ok=false;};
  err('err-name','');err('err-phone','');err('err-city','');
  const nameVal=$('#cf-name',modal).value.trim();
  const phoneRaw=$('#cf-phone',modal).value.replace(/\D/g,'');
  const cityVal=$('#cf-city',modal).value.trim();
  if(!nameVal) err('err-name','⚠ Обязательное поле');
  if(phoneRaw.length<12) err('err-phone','⚠ Введите полный номер: +380XXXXXXXXX');
  if(!cityVal) err('err-city','⚠ Обязательное поле');
  return ok;
}

/* ─── Collect ─── */
function collectFormData(modal,product){
  return {
    product_id:product.id,
    product_name:getProductName(product),
    product_price:product.price,
    customer_name:$('#cf-name',modal).value.trim(),
    phone:$('#cf-phone',modal).value.trim(),
    city:$('#cf-city',modal).value.trim(),
    size:$('input[name="size"]:checked',modal)?.value||'—',
    delivery:$('input[name="delivery"]:checked',modal)?.value||'nova',
    branch:$('#cf-branch',modal).value.trim(),
    timestamp:new Date().toISOString(),
    lang:State.lang||'ru',
  };
}

/* ═══════════════════════════════════════════════
   submitOrder — Telegram
═══════════════════════════════════════════════ */
async function submitOrder(data) {
  // Save order — Firebase first, localStorage as fallback
  if (window.__fbReady && window.FB) {
    try { await window.FB.saveOrder(data); }
    catch(e) { console.warn('FB saveOrder fallback:', e); }
  }
  try {
    const orders = JSON.parse(localStorage.getItem('sx_orders') || '[]');
    orders.push(data);
    localStorage.setItem('sx_orders', JSON.stringify(orders));
  } catch(e) { console.error('Order localStorage error:', e); }

  const delivLabel = data.delivery==='nova'?'🟡 Нова Пошта':'🔵 Укрпошта';
  const time = new Date(data.timestamp).toLocaleString('ru-UA',{timeZone:'Europe/Kiev'});
  const text = [
    '🛒 <b>НОВЫЙ ЗАКАЗ — SportEx</b>','',
    `📦 <b>Товар:</b> ${data.product_name}`,
    `💰 <b>Цена:</b> ${data.product_price.toLocaleString('uk-UA')} ₴`,
    `📐 <b>Размер:</b> <b>${data.size}</b>`,'',
    `👤 <b>Покупатель:</b> ${data.customer_name}`,
    `📞 <b>Телефон:</b> ${data.phone}`,
    `🏙 <b>Город:</b> ${data.city}`,
    `🚚 <b>Доставка:</b> ${delivLabel}`,
    `🏪 <b>Отделение:</b> ${data.branch||'—'}`,'',
    `🌐 <b>Язык:</b> ${data.lang.toUpperCase()}`,
    `🕐 <b>Время:</b> ${time}`,
  ].join('\n');
  try {
    const res=await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:TG_CHAT_ID,text,parse_mode:'HTML'}),
    });
    const json=await res.json();
    if(!json.ok) console.warn('TG error:',json.description);
  } catch(e){console.error('TG fetch:',e);}

  const form=$('#checkoutForm'), success=$('#checkoutSuccess');
  if(form&&success){
    form.style.transition='opacity .3s,transform .3s';
    form.style.opacity='0'; form.style.transform='translateY(-12px)';
    setTimeout(()=>{form.style.display='none';success.classList.remove('hidden');},320);
  }
}

document.addEventListener('DOMContentLoaded', boot);

/* ═══════════════════════════════════════════════
   BUILT-IN ADMIN PANEL
   Активируется через скрытую кнопку ⚙ в футере
═══════════════════════════════════════════════ */
(function() {
  'use strict';

  /* ─── Config ─── */
  const PASS_KEY  = 'sx_adm_pass';
  const AUTH_KEY  = 'sx_adm_auth';
  const PROD_KEY  = 'sx_products';
  const ORD_KEY   = 'sx_orders';
  const SET_KEY   = 'sx_settings';
  const DEF_PASS  = 'sportex2024';
  const PER_PAGE  = 15;

  /* ─── State ─── */
  let admProducts = [];
  let admFiltered = [];
  let admPage     = 1;
  let admEditId   = null;
  let toastTimer  = null;

  /* ─── Helpers ─── */
  const $i = id => document.getElementById(id);
  const getPass = () => localStorage.getItem(PASS_KEY) || DEF_PASS;

  function admToast(msg, isErr = false) {
    const el = $i('admToast');
    if (!el) return;
    clearTimeout(toastTimer);
    el.textContent = msg;
    el.className = 'adm-toast' + (isErr ? ' err' : '') + ' show';
    toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
  }

  /* ═══ BOOT ═══ */
  document.addEventListener('DOMContentLoaded', () => {
    /* Secret button */
    const secretBtn = $i('adminSecretBtn');
    if (secretBtn) secretBtn.addEventListener('click', openAdminLogin);

    /* Login form */
    const passInput = $i('adminPassInput');
    if (passInput) passInput.addEventListener('keydown', e => { if (e.key === 'Enter') window.submitAdminLogin(); });

    /* Close login overlay on backdrop click */
    const loginOverlay = $i('adminLoginOverlay');
    if (loginOverlay) loginOverlay.addEventListener('click', e => { if (e.target === loginOverlay) closeAdminLogin(); });

    /* Editor modal backdrop */
    const editorOverlay = $i('admProductModal');
    if (editorOverlay) editorOverlay.addEventListener('click', e => { if (e.target === editorOverlay) window.closeAdmProductModal(); });

    /* Menu items */
    document.querySelectorAll('.adm-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        const section = item.dataset.section;
        showAdmSection(section);
      });
    });

    /* Logout */
    const logoutBtn = $i('adminLogoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', admLogout);

    /* Close login btn */
    const loginCloseBtn = $i('adminLoginClose');
    if (loginCloseBtn) loginCloseBtn.addEventListener('click', closeAdminLogin);

    /* Auto-restore session */
    if (localStorage.getItem(AUTH_KEY) === '1') {
      openAdminPanel();
    }
  });

  /* ═══ LOGIN ═══ */
  function openAdminLogin() {
    const overlay = $i('adminLoginOverlay');
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('open'));
    setTimeout(() => $i('adminPassInput')?.focus(), 120);
  }
  function closeAdminLogin() {
    const overlay = $i('adminLoginOverlay');
    overlay.classList.remove('open');
    setTimeout(() => overlay.classList.add('hidden'), 340);
    if ($i('adminPassInput')) $i('adminPassInput').value = '';
    if ($i('adminPassErr'))   $i('adminPassErr').textContent = '';
  }
  window.submitAdminLogin = function() {
    const val = ($i('adminPassInput')?.value || '').trim();
    if (val === getPass()) {
      localStorage.setItem(AUTH_KEY, '1');
      closeAdminLogin();
      setTimeout(openAdminPanel, 360);
    } else {
      $i('adminPassErr').textContent = '⚠ Неверный пароль';
      $i('adminPassInput').value = '';
      $i('adminPassInput').focus();
    }
  };
  window.openAdminLogin = openAdminLogin;
  window.closeAdminLogin = closeAdminLogin;

  /* ═══ PANEL ═══ */
  function openAdminPanel() {
    loadAdmProducts();
    loadAdmSettings();
    renderAdmOrders();
    const panel = $i('adminPanel');
    panel.classList.remove('hidden');
    requestAnimationFrame(() => panel.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }
  function admLogout() {
    localStorage.removeItem(AUTH_KEY);
    const panel = $i('adminPanel');
    panel.classList.remove('open');
    setTimeout(() => { panel.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
  }

  function showAdmSection(name) {
    document.querySelectorAll('.adm-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.adm-menu-item').forEach(m => m.classList.remove('active'));
    const sec = $i('adm-section-' + name);
    if (sec) sec.classList.add('active');
    document.querySelector(`[data-section="${name}"]`)?.classList.add('active');
    const titles = { products:'📦 Товары', categories:'🗂️ Категории', orders:'🛒 Заказы', settings:'⚙️ Настройки' };
    if ($i('admTopbarTitle')) $i('admTopbarTitle').textContent = titles[name] || name;
    if (name === 'orders') renderAdmOrders();
    if (name === 'categories') {
      setTimeout(() => {
        const tabs = document.getElementById('admCatTabs');
        if (tabs && typeof CATEGORIES !== 'undefined' && CATEGORIES.length) {
          tabs.innerHTML = CATEGORIES.map(cat =>
            `<button class="adm-cat-tab" onclick="window.admSelectCat('${cat.id}')">${cat.icon||'📦'} ${cat.name}</button>`
          ).join('');
        }
      }, 80);
    }
  }

  /* ═══ PRODUCTS ═══ */
  async function loadAdmProducts() {
    // Try Firebase first
    if (window.__fbReady && window.FB) {
      try {
        const fbProds = await window.FB.getProducts();
        if (fbProds && fbProds.length > 0) {
          admProducts = fbProds;
          admFiltered = [...admProducts];
          renderAdmTable();
          if ($i('admProdBadge')) $i('admProdBadge').textContent = admProducts.length;
          // Register realtime refresh hook
          window.__admRefresh = (products) => {
            admProducts = products;
            admFiltered = admProducts.filter(p => {
              const q = ($i('admSearch')?.value||'').toLowerCase();
              const cat = $i('admCatFilter')?.value||'';
              const searchStr = (p.name+' '+(p.brand||'')+' '+(p.sku||'')).toLowerCase();
              return searchStr.includes(q) && (!cat||p.category===cat);
            });
            renderAdmTable();
            if ($i('admProdBadge')) $i('admProdBadge').textContent = admProducts.length;
          };
          return;
        }
      } catch(e) { console.warn('Admin FB load fallback:', e); }
    }
    // Fallback: localStorage → products.json
    const saved = localStorage.getItem(PROD_KEY);
    if (saved) {
      admProducts = JSON.parse(saved);
    } else {
      try {
        const res = await fetch('products.json');
        admProducts = await res.json();
      } catch(e) { admProducts = []; }
    }
    admFiltered = [...admProducts];
    renderAdmTable();
    if ($i('admProdBadge')) $i('admProdBadge').textContent = admProducts.length;
  }

  function saveAdmProducts() {
    localStorage.setItem(PROD_KEY, JSON.stringify(admProducts));
    if (typeof State !== 'undefined') {
      State.products = [...admProducts];
      if (typeof renderProducts === 'function') renderProducts();
    }
    if ($i('admProdBadge')) $i('admProdBadge').textContent = admProducts.length;
  }

  /* Firebase-aware save for single product */
  async function fbSaveOne(product) {
    if (window.__fbReady && window.FB) {
      try {
        await window.FB.saveProduct(product);
        return true;
      } catch(e) {
        console.warn('FB save error:', e);
        return false;
      }
    }
    return false;
  }
  async function fbDeleteOne(id) {
    if (window.__fbReady && window.FB) {
      try {
        await window.FB.deleteProduct(id);
        return true;
      } catch(e) {
        console.warn('FB delete error:', e);
        return false;
      }
    }
    return false;
  }

  window.admFilterProducts = function() {
    const q   = ($i('admSearch')?.value || '').toLowerCase();
    const cat = $i('admCatFilter')?.value || '';
    admFiltered = admProducts.filter(p => {
      const searchStr = (p.name + ' ' + (p.brand||'') + ' ' + (p.sku||'')).toLowerCase();
      return searchStr.includes(q) && (!cat || p.category === cat);
    });
    admPage = 1;
    renderAdmTable();
  };

  function renderAdmTable() {
    const tbody = $i('admProductsTbody');
    if (!tbody) return;
    const start = (admPage - 1) * PER_PAGE;
    const items = admFiltered.slice(start, start + PER_PAGE);
    const total = admFiltered.length;

    tbody.innerHTML = items.map(p => `
      <tr>
        <td><img src="${p.image||''}" class="adm-td-img" onerror="this.src='https://placehold.co/44x44/111/333?text=?'" loading="lazy"/></td>
        <td>
          <div class="adm-td-name" title="${p.name}">${p.name}</div>
          ${p.sku ? `<div style="font-size:13px;color:var(--light);letter-spacing:1px;margin-top:2px">SKU: <strong>${p.sku}</strong></div>` : ''}
          ${p.description ? `<div style="font-size:11px;color:#555;margin-top:3px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.description}</div>` : ''}
        </td>
        <td><div class="adm-td-price">${(p.price||0).toLocaleString('uk-UA')} ₴</div></td>
        <td><span class="adm-td-category">${p.category||'—'}</span></td>
        <td>${p.badge === 'new' ? '<span style="color:#60a5fa;font-size:11px">🆕 Новинка</span>'
               : p.badge === 'hit' ? '<span style="color:#fbbf24;font-size:11px">🔥 Хит</span>'
               : '<span style="color:#333;font-size:11px">—</span>'}</td>
        <td><span style="font-size:12px">${p.brand||'—'}</span></td>
        <td>
          <div class="adm-td-actions">
            <button class="adm-btn adm-btn-outline adm-btn-sm adm-btn-icon"
              onclick="window.openAdmProductModal(window._admGetProduct(${p.id}))" title="Редактировать">✏️</button>
            <button class="adm-btn adm-btn-danger adm-btn-sm adm-btn-icon"
              onclick="window.admQuickDelete(${p.id})" title="Удалить">🗑</button>
          </div>
        </td>
      </tr>`).join('');

    if ($i('admPagInfo')) $i('admPagInfo').textContent =
      total ? `Показано ${start+1}–${Math.min(start+PER_PAGE, total)} из ${total}` : 'Нет товаров';

    const btnsEl = $i('admPagBtns');
    if (btnsEl) {
      btnsEl.innerHTML = '';
      const pages = Math.ceil(total / PER_PAGE);
      for (let i = 1; i <= pages; i++) {
        const b = document.createElement('button');
        b.className = 'adm-pag-btn' + (i === admPage ? ' active' : '');
        b.textContent = i;
        b.onclick = () => { admPage = i; renderAdmTable(); };
        btnsEl.appendChild(b);
      }
    }
  }

  /* ─── Product modal ─── */
  window._admGetProduct = id => admProducts.find(x => x.id === id);

  window.openAdmProductModal = function(product) {
    admEditId = product ? product.id : null;
    if ($i('admModalTitle')) $i('admModalTitle').textContent = product ? '✏️ Редактировать товар' : '➕ Добавить товар';
    const delBtn = $i('admDeleteBtn');

    if (product) {
      $i('adm-p-id').value       = product.id;
      $i('adm-p-name').value     = product.name     || '';
      $i('adm-p-name-ua').value  = product.name_ua  || '';
      $i('adm-p-name-en').value  = product.name_en  || '';
      $i('adm-p-price').value    = product.price     || '';
      $i('adm-p-brand').value    = product.brand     || '';
      $i('adm-p-sku').value      = product.sku       || '';
      $i('adm-p-image').value    = product.image     || '';
      $i('adm-p-category').value = product.category  || 'boxing';
      $i('adm-p-badge').value    = product.badge     || '';
      if (delBtn) delBtn.style.display = 'flex';
      window.admUpdateImgPreview();
      // Store sizes for renderAdmSizes to pick up
      if ($i('adm-p-sizes') && product.sizes) {
        $i('adm-p-sizes').value = JSON.stringify(product.sizes);
      }
      // Load description
      if ($i('adm-p-desc')) $i('adm-p-desc').value = product.description || '';
    } else {
      ['adm-p-id','adm-p-name','adm-p-name-ua','adm-p-name-en','adm-p-price','adm-p-brand','adm-p-sku','adm-p-image'].forEach(id => {
        const el = $i(id); if (el) el.value = '';
      });
      $i('adm-p-category').value = 'boxing';
      $i('adm-p-badge').value    = '';
      if (delBtn) delBtn.style.display = 'none';
      if ($i('admImgPreviewWrap')) $i('admImgPreviewWrap').style.display = 'none';
    }

    const overlay = $i('admProductModal');
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('open'));
  };

  window.closeAdmProductModal = function() {
    const overlay = $i('admProductModal');
    overlay.classList.remove('open');
    setTimeout(() => overlay.classList.add('hidden'), 300);
  };

  window.admUpdateImgPreview = function() {
    const url = ($i('adm-p-image')?.value || '').trim();
    const wrap = $i('admImgPreviewWrap');
    const img  = $i('admImgPreview');
    if (wrap && img) { wrap.style.display = url ? 'block' : 'none'; if (url) img.src = url; }
  };

  window.admSaveProduct = function() {
    const name  = ($i('adm-p-name')?.value || '').trim();
    const price = parseFloat($i('adm-p-price')?.value || '');
    if (!name)        { admToast('⚠ Введите название товара', true); return; }
    if (isNaN(price)) { admToast('⚠ Введите цену', true); return; }

    // Parse sizes from hidden field
    let sizesData = null;
    try {
      const sizesRaw = $i('adm-p-sizes')?.value || window.__pendingSizes || '';
      if (sizesRaw) sizesData = JSON.parse(sizesRaw);
    } catch(e) {}

    // Collect stock
    window.updateStockHidden && window.updateStockHidden();
    const stockData = (window.__pendingStock && Object.keys(window.__pendingStock).length)
      ? window.__pendingStock : null;

    const data = {
      id:          admEditId || Date.now(),
      name,
      name_ua:     ($i('adm-p-name-ua')?.value||'').trim() || name,
      name_en:     ($i('adm-p-name-en')?.value||'').trim() || name,
      price,
      brand:       ($i('adm-p-brand')?.value||'').trim(),
      sku:         ($i('adm-p-sku')?.value||'').trim(),
      image:       ($i('adm-p-image')?.value||'').trim(),
      category:    $i('adm-p-category')?.value || 'boxing',
      badge:       $i('adm-p-badge')?.value || null,
      sizes:       sizesData,
      description: ($i('adm-p-desc')?.value||'').trim() || null,
      stock:       stockData,
    };

    if (admEditId) {
      const idx = admProducts.findIndex(p => p.id === admEditId);
      if (idx > -1) admProducts[idx] = data;
      admToast('✅ Товар обновлён!');
    } else {
      admProducts.unshift(data);
      admToast('✅ Товар добавлен!');
    }

    saveAdmProducts();
    admFiltered = [...admProducts];
    renderAdmTable();
    window.closeAdmProductModal();

    // Firebase save + instantly refresh main site for ALL visitors
    fbSaveOne(data).then(ok => {
      if (ok) {
        // Force update main site immediately (don't wait for onSnapshot)
        if (typeof State !== 'undefined') {
          State.products = [...admProducts];
          if (typeof renderProducts === 'function') renderProducts();
          if (typeof renderCategories === 'function') renderCategories();
        }
      }
    });
  };

  window.admDeleteProduct = function() {
    if (!admEditId) return;
    if (!confirm('Удалить этот товар? Действие необратимо.')) return;
    const delId = admEditId;
    admProducts = admProducts.filter(p => p.id !== delId);
    admFiltered = admFiltered.filter(p => p.id !== delId);
    saveAdmProducts();
    renderAdmTable();
    window.closeAdmProductModal();
    admToast('🗑 Товар удалён');
    fbDeleteOne(delId).then(() => {
      if (typeof State !== 'undefined') {
        State.products = [...admProducts];
        if (typeof renderProducts === 'function') renderProducts();
        if (typeof renderCategories === 'function') renderCategories();
      }
    });
  };

  window.admQuickDelete = function(id) {
    if (!confirm('Удалить этот товар?')) return;
    admProducts = admProducts.filter(p => p.id !== id);
    admFiltered = admFiltered.filter(p => p.id !== id);
    saveAdmProducts();
    fbDeleteOne(id); // Firebase
    renderAdmTable();
    admToast('🗑 Товар удалён');
  };

  /* ═══ EXPORT products.json ═══ */
  window.exportProductsJSON = function() {
    const json = JSON.stringify(admProducts, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'products.json';
    a.click();
    URL.revokeObjectURL(a.href);
    admToast('📥 products.json скачан! Загрузи его на хостинг.');
  };

  /* ═══ ORDERS ═══ */
  async function renderAdmOrders() {
    let orders = [];
    if (window.__fbReady && window.FB) {
      try { orders = await window.FB.getOrders(); } catch(e) {}
    }
    if (!orders.length) {
      orders = JSON.parse(localStorage.getItem(ORD_KEY) || '[]');
    }
    if ($i('admOrderBadge')) $i('admOrderBadge').textContent = orders.length;
    const wrap = $i('admOrdersWrap');
    if (!wrap) return;

    if (!orders.length) {
      wrap.innerHTML = '<div class="adm-empty">📭 Заказов пока нет.<br><span style="font-size:12px;color:#444">Они появятся здесь после первого оформления на сайте</span></div>';
      return;
    }

    wrap.innerHTML = `
      <table class="adm-table">
        <thead><tr>
          <th>#</th><th>Дата</th><th>Товар</th><th>Размер</th>
          <th>Покупатель</th><th>Телефон</th><th>Город</th><th>Доставка</th><th>Цена</th>
        </tr></thead>
        <tbody>
          ${orders.slice().reverse().map((o,i) => `
            <tr>
              <td style="color:#444">${orders.length-i}</td>
              <td style="font-size:11px;color:#555;white-space:nowrap">${new Date(o.timestamp).toLocaleString('ru-UA')}</td>
              <td><div class="adm-td-name" title="${o.product_name||''}">${o.product_name||'—'}</div></td>
              <td><strong>${o.size||'—'}</strong></td>
              <td>${o.customer_name||'—'}</td>
              <td style="white-space:nowrap">${o.phone||'—'}</td>
              <td>${o.city||'—'}</td>
              <td>${o.delivery==='nova'?'🟡 Нова Пошта':'🔵 Укрпошта'}${o.branch?' #'+o.branch:''}</td>
              <td class="adm-td-price">${(o.product_price||0).toLocaleString('uk-UA')} ₴</td>
            </tr>`).join('')}
        </tbody>
      </table>`;
  }

  window.admClearOrders = async function() {
    if (!confirm('Очистить все заказы? Они удалятся и из Firebase!')) return;
    // Clear Firebase orders
    if (window.__fbReady && window.FB) {
      try {
        const orders = await window.FB.getOrders();
        await Promise.all(orders.map(o => o._fbId ? window.FB.deleteOrder(o._fbId) : null));
      } catch(e) { console.warn('FB clear orders:', e); }
    }
    localStorage.removeItem(ORD_KEY);
    renderAdmOrders();
    admToast('🗑 Заказы очищены');
  };

  window.admExportOrders = async function() {
    let orders = [];
    if (window.__fbReady && window.FB) {
      try { orders = await window.FB.getOrders(); } catch(e) {}
    }
    if (!orders.length) orders = JSON.parse(localStorage.getItem(ORD_KEY) || '[]');
    if (!orders.length) { admToast('Нет заказов', true); return; }
    const hdr = ['Дата','Товар','Цена','Размер','Покупатель','Телефон','Город','Доставка','Отделение'];
    const rows = orders.map(o => [
      new Date(o.timestamp).toLocaleString('ru-UA'),
      o.product_name, o.product_price, o.size,
      o.customer_name, o.phone, o.city,
      o.delivery==='nova'?'Нова Пошта':'Укрпошта', o.branch
    ].map(v => `"${v||''}"`).join(','));
    const csv  = [hdr.join(','), ...rows].join('\n');
    const a    = document.createElement('a');
    a.href     = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csv);
    a.download = `orders-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    admToast('📥 CSV экспортирован');
  };

  /* ═══ SETTINGS ═══ */
  function loadAdmSettings() {
    try {
      const s = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
      if ($i('s-name'))    $i('s-name').value    = s.name    || 'SportEx';
      if ($i('s-address')) $i('s-address').value = s.address || 'ул. Пантелеймоновская 25, ТЦ «Новый Привоз», 3 этаж';
      if ($i('s-phone'))   $i('s-phone').value   = s.phone   || '';
      if ($i('s-hours'))   $i('s-hours').value   = s.hours   || 'Пн–Вс: 09:00 – 21:00';
      if ($i('s-tgtoken')) $i('s-tgtoken').value = s.tgToken  || '';
      if ($i('s-tgchat'))  $i('s-tgchat').value  = s.tgChatId || '';
    } catch(e) {}
  }

  window.admSaveSettings = function() {
    const s = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
    s.name    = $i('s-name')?.value    || '';
    s.address = $i('s-address')?.value || '';
    s.phone   = $i('s-phone')?.value   || '';
    s.hours   = $i('s-hours')?.value   || '';
    localStorage.setItem(SET_KEY, JSON.stringify(s));
    admToast('✅ Настройки сохранены!');
  };

  window.admSaveTG = function() {
    const s = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
    s.tgToken  = $i('s-tgtoken')?.value || '';
    s.tgChatId = $i('s-tgchat')?.value  || '';
    localStorage.setItem(SET_KEY, JSON.stringify(s));
    admToast('✅ Telegram настройки сохранены!');
  };

  window.admChangePass = function() {
    const cur  = $i('s-oldpass')?.value  || '';
    const nw   = $i('s-newpass')?.value  || '';
    const nw2  = $i('s-newpass2')?.value || '';
    if (cur !== getPass())  { admToast('⚠ Неверный текущий пароль', true); return; }
    if (!nw)                { admToast('⚠ Введите новый пароль', true); return; }
    if (nw !== nw2)         { admToast('⚠ Пароли не совпадают', true); return; }
    localStorage.setItem(PASS_KEY, nw);
    ['s-oldpass','s-newpass','s-newpass2'].forEach(id => { const el=$i(id); if(el) el.value=''; });
    admToast('🔒 Пароль изменён!');
  };

})();

/* ═══════════════════════════════════════════════
   CATEGORY PAGE — страница товаров по категории
═══════════════════════════════════════════════ */
(function() {

  let currentCat   = null;  // текущая категория
  let currentSub   = null;  // текущая подкатегория (фильтр)
  let catUnsubscr  = null;  // Firebase unsubscribe

  /* ─── Open category page ─── */
  window.openCategoryPage = function(cat) {
    currentCat = cat;
    currentSub = null;

    const overlay = document.getElementById('catPageOverlay');
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';

    // Update URL
    history.pushState({ catId: cat.id }, '', `?cat=${cat.id}`);

    renderCatPage();
    setupCatPageBack();
  };

  function closeCategoryPage() {
    const overlay = document.getElementById('catPageOverlay');
    overlay.classList.remove('open');
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }, 400);
    history.pushState({}, '', window.location.pathname);
    currentCat = null;
    currentSub = null;
  }

  function setupCatPageBack() {
    const btn = document.getElementById('catPageBackBtn');
    if (!btn) return;
    btn.onclick = closeCategoryPage;
  }

  /* ─── Render category page ─── */
  function renderCatPage() {
    if (!currentCat) return;

    const dict = State.dict || {};
    const lang  = State.lang || 'ru';

    // Title & icon
    document.getElementById('catPageIcon').textContent  = currentCat.icon;
    document.getElementById('catPageTitle').textContent =
      lang === 'ua' ? currentCat.name_ua :
      lang === 'en' ? currentCat.name_en :
      currentCat.name;

    // Get products for this category
    const products = getProductsForCat(currentCat, currentSub);

    // Count
    document.getElementById('catPageCount').textContent =
      `${products.length} ${dict.stat_products || 'товаров'}`;

    // Subcategory pills
    renderCatFilters();

    // Products grid
    renderCatGrid(products);
  }

  function getProductsForCat(cat, subFilter) {
    // Map category id to product category values
    const catMap = {
      'clothing':   ['clothing','compression'],
      'martial':    ['boxing','mma'],
      'football':   ['football'],
      'sport':      ['sport'],
      'basketball': ['basketball'],
      'volleyball': ['volleyball'],
      'swimming':   ['swimming'],
      'fitness':    ['fitness'],
      'karate':     ['karate'],
      'taekwondo':  ['taekwondo'],
      'winter':     ['winter'],
      'tourism':    ['tourism'],
    };

    const validCats = catMap[cat.id] || [cat.id];
    let products = State.products.filter(p =>
      validCats.includes(p.category)
    );

    if (subFilter) {
      // filter by subcategory name match (loose)
      products = products.filter(p =>
        (p.name || '').toLowerCase().includes(subFilter.toLowerCase()) ||
        (p.brand || '').toLowerCase().includes(subFilter.toLowerCase()) ||
        (p.category || '') === subFilter
      );
    }

    return products;
  }

  /* ─── Subcategory filter pills ─── */
  function renderCatFilters() {
    const container = document.getElementById('catPageFilters');
    if (!container || !currentCat) return;

    const lang = State.lang || 'ru';
    const subs = currentCat.subcategories || [];

    // "Все" pill
    let html = `<button class="cat-filter-pill ${!currentSub ? 'active' : ''}"
      onclick="window.__setCatSub(null)">
      Все товары
    </button>`;

    subs.forEach(sub => {
      const name = lang === 'ua' ? sub.name_ua :
                   lang === 'en' ? sub.name_en : sub.name;
      const isActive = currentSub === sub.name;
      html += `<button class="cat-filter-pill ${isActive ? 'active' : ''}"
        onclick="window.__setCatSub('${sub.name.replace(/'/g,"\\'")}')">
        ${sub.icon || ''} ${name}
      </button>`;
    });

    container.innerHTML = html;
  }

  window.__setCatSub = function(subName) {
    currentSub = subName;
    renderCatPage();
  };

  /* ─── Products grid inside category page ─── */
  function renderCatGrid(products) {
    const grid = document.getElementById('catPageGrid');
    if (!grid) return;

    if (!products.length) {
      grid.innerHTML = `
        <div class="cat-page-empty" style="grid-column:1/-1">
          <span class="empty-icon">📦</span>
          <p>Товаров пока нет</p>
          <span>В этой категории скоро появятся товары</span>
        </div>`;
      return;
    }

    const dict = State.dict || {};
    grid.innerHTML = '';

    products.forEach((p, i) => {
      const name = State.lang === 'ua' ? p.name_ua :
                   State.lang === 'en' ? p.name_en : p.name;
      const badge = p.badge === 'new' ? (dict.badge_new || 'NEW') :
                    p.badge === 'hit' ? (dict.badge_hit || 'ХИТ') : '';

      const card = document.createElement('div');
      card.className = `product-card reveal reveal-delay-${(i % 4) + 1}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${p.image || ''}" alt="${name}" class="product-img" loading="lazy"
            onerror="this.src='https://placehold.co/400x400/161616/444?text=SPX'"/>
          ${badge ? `<span class="product-badge">${badge}</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-name">${name}</div>
          <div class="product-footer">
            <div class="product-price">${(p.price || 0).toLocaleString('uk-UA')}<span> ₴</span></div>
            <button class="btn-buy" aria-label="${dict.btn_buy || 'Купить'}">→</button>
          </div>
        </div>`;

      card.addEventListener('click', e => {
        if (!e.target.closest('.btn-buy')) openProductPage(p.id);
      });
      card.querySelector('.btn-buy').addEventListener('click', e => {
        e.stopPropagation();
        openCheckout(p);
      });
      grid.appendChild(card);
    });

    // Animate
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ─── Override renderCategories to add product counts + click → category page ─── */
  const _origRenderCats = window.renderCategories;
  window.renderCategories = function() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const lang = State.lang || 'ru';
    const dict = State.dict || {};

    CATEGORIES.forEach((cat, i) => {
      const name = lang === 'ua' ? cat.name_ua :
                   lang === 'en' ? cat.name_en : cat.name;

      // Count products for this category
      const catMap = {
        'clothing':   ['clothing','compression'],
        'martial':    ['boxing','mma'],
        'football':   ['football'],
        'sport':      ['sport'],
        'basketball': ['basketball'],
        'volleyball': ['volleyball'],
        'swimming':   ['swimming'],
        'fitness':    ['fitness'],
        'karate':     ['karate'],
        'taekwondo':  ['taekwondo'],
        'winter':     ['winter'],
        'tourism':    ['tourism'],
      };
      const validCats = catMap[cat.id] || [cat.id];
      const prodCount = State.products
        ? State.products.filter(p => validCats.includes(p.category)).length
        : 0;

      const delay = (i % 4) + 1;
      const card  = document.createElement('div');
      card.className = `cat-card reveal reveal-delay-${delay}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <div class="cat-bg-art">${cat.icon}</div>
        <div class="cat-gradient"></div>
        <div class="cat-card-line"></div>
        <div class="cat-product-count">${prodCount} тов.</div>
        <div class="cat-info">
          <span class="cat-icon">${cat.icon}</span>
          <span class="cat-name">${name}</span>
          <span class="cat-sub-count">
            ${prodCount} ${dict.stat_products || 'товаров'} · ${cat.subcategories.length} подкат.
          </span>
        </div>
        <span class="cat-arrow">→</span>`;

      card.addEventListener('click', () => window.openCategoryPage(cat));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') window.openCategoryPage(cat);
      });
      grid.appendChild(card);
    });

    // Re-observe reveals
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  };

  /* ─── Handle ?cat= in URL ─── */
  function handleUrlCat() {
    const catId = new URLSearchParams(location.search).get('cat');
    if (catId && typeof CATEGORIES !== 'undefined') {
      const cat = CATEGORIES.find(c => c.id === catId);
      if (cat) { window.openCategoryPage(cat); return; }
    }
    // Close if open
    const overlay = document.getElementById('catPageOverlay');
    if (overlay && overlay.classList.contains('open')) {
      closeCategoryPage();
    }
  }

  // Listen to back/forward browser buttons
  window.addEventListener('popstate', handleUrlCat);

  // ESC to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('catPageOverlay');
      if (overlay && overlay.classList.contains('open')) closeCategoryPage();
    }
  });

})();

/* ═══════════════════════════════════════════════
   SMART SIZE SYSTEM
   Автоматически подбирает размеры по категории товара
═══════════════════════════════════════════════ */

/* ─── Size presets by category ─── */
const SIZE_PRESETS = {
  // Типы размеров
  types: {
    clothing:      { label: 'Одежда',            sizes: ['XS','S','M','L','XL','XXL','XXXL'] },
    boxing_gloves: { label: 'Перчатки (oz)',      sizes: ['6','8','10','12','14','16','18'] },
    mma_gloves:    { label: 'Перчатки MMA',       sizes: ['XS','S','M','L','XL'] },
    shoes:         { label: 'Обувь',              sizes: ['35','36','37','38','39','40','41','42','43','44','45','46'] },
    helmet:        { label: 'Шлем / Защита',      sizes: ['XS','S','M','L','XL'] },
    balls:         { label: 'Мяч (номер)',         sizes: ['№1','№2','№3','№4','№5'] },
    universal:     { label: 'Универсальный',       sizes: ['ONE SIZE'] },
    weight:        { label: 'Вес (кг)',            sizes: ['0.5','1','1.5','2','3','5','10','15','20'] },
    fins:          { label: 'Ласты',              sizes: ['XS','S','M','L','XL'] },
    none:          { label: 'Без размера',         sizes: [] },
  },

  // Какие типы доступны для каждой категории + дефолтный
  byCategory: {
    boxing:      { default: 'boxing_gloves', available: ['boxing_gloves','clothing','helmet','shoes','universal','none'] },
    mma:         { default: 'mma_gloves',    available: ['mma_gloves','clothing','shoes','universal','none'] },
    protection:  { default: 'helmet',        available: ['helmet','clothing','shoes','universal','none'] },
    compression: { default: 'clothing',      available: ['clothing','universal','none'] },
    clothing:    { default: 'clothing',      available: ['clothing','shoes','universal','none'] },
    football:    { default: 'balls',         available: ['balls','clothing','shoes','helmet','universal','none'] },
    basketball:  { default: 'balls',         available: ['balls','clothing','shoes','universal','none'] },
    volleyball:  { default: 'balls',         available: ['balls','clothing','shoes','universal','none'] },
    swimming:    { default: 'fins',          available: ['fins','clothing','universal','none'] },
    fitness:     { default: 'clothing',      available: ['clothing','weight','universal','none'] },
    sport:       { default: 'universal',     available: ['universal','clothing','weight','none'] },
    karate:      { default: 'clothing',      available: ['clothing','shoes','universal','none'] },
    taekwondo:   { default: 'clothing',      available: ['clothing','shoes','universal','none'] },
    winter:      { default: 'clothing',      available: ['clothing','shoes','universal','none'] },
    tourism:     { default: 'universal',     available: ['universal','clothing','shoes','none'] },
  },
};

/* ─── Get preset for category ─── */
function getSizePreset(category) {
  const catPreset = SIZE_PRESETS.byCategory[category] || { default: 'universal', available: ['universal','none'] };
  return catPreset;
}

/* ─── Render admin size selector ─── */
function renderAdmSizes(category, selectedSizes = [], selectedType = null) {
  const typeRow  = document.getElementById('admSizeTypeRow');
  const cbWrap   = document.getElementById('admSizeCheckboxes');
  if (!typeRow || !cbWrap) return;

  const preset = getSizePreset(category);
  const activeType = selectedType || preset.default;

  // Type switcher buttons
  typeRow.innerHTML = preset.available.map(typeKey => {
    const type = SIZE_PRESETS.types[typeKey];
    return `<button type="button" class="adm-size-type-btn ${activeType === typeKey ? 'active' : ''}"
      onclick="window.admSwitchSizeType('${typeKey}', '${category}')">${type.label}</button>`;
  }).join('');

  // Checkboxes for selected type
  const sizes = SIZE_PRESETS.types[activeType]?.sizes || [];
  if (!sizes.length) {
    cbWrap.innerHTML = '<span class="size-no-sizes">Этот тип без размеров (универсальный)</span>';
    updateAdmSizesHidden(['ONE SIZE'], activeType);
    return;
  }

  // Default: check all sizes if none selected yet
  const toCheck = selectedSizes.length > 0 ? selectedSizes : sizes;

  cbWrap.innerHTML = sizes.map(s => `
    <label class="adm-size-cb-label">
      <input type="checkbox" name="adm-size-cb" value="${s}"
        ${toCheck.includes(s) ? 'checked' : ''}
        onchange="window.admUpdateSizesHidden('${activeType}')"/>
      <span class="adm-size-cb-box">${s}</span>
    </label>`).join('');

  updateAdmSizesHidden(toCheck, activeType);
}

window.admSwitchSizeType = function(typeKey, category) {
  const sizes = SIZE_PRESETS.types[typeKey]?.sizes || [];
  // Re-render with new type, select all by default
  renderAdmSizes(category, sizes, typeKey);
};

window.admUpdateSizesHidden = function(typeKey) {
  const checked = [...document.querySelectorAll('input[name="adm-size-cb"]:checked')]
    .map(cb => cb.value);
  updateAdmSizesHidden(checked, typeKey);
};

function updateAdmSizesHidden(sizes, typeKey) {
  const hidden = document.getElementById('adm-p-sizes');
  if (hidden) {
    hidden.value = JSON.stringify({ type: typeKey, sizes });
  }
}

/* ─── Hook into category change ─── */
function hookAdmCategoryChange() {
  const catSelect = document.getElementById('adm-p-category');
  if (!catSelect) return;
  catSelect.addEventListener('change', () => {
    renderAdmSizes(catSelect.value, [], null);
  });
}

/* ─── Override openAdmProductModal to render sizes ─── */
const _origOpenAdmModal = window.openAdmProductModal;
window.openAdmProductModal = function(product) {
  _origOpenAdmModal(product);

  // Render sizes after modal opens
  setTimeout(() => {
    const cat = document.getElementById('adm-p-category')?.value || 'boxing';
    let selectedSizes = [];
    let selectedType  = null;

    if (product && product.sizes) {
      try {
        const parsed = typeof product.sizes === 'string'
          ? JSON.parse(product.sizes) : product.sizes;
        selectedSizes = parsed.sizes || [];
        selectedType  = parsed.type  || null;
      } catch(e) {}
    }

    renderAdmSizes(cat, selectedSizes, selectedType);
    hookAdmCategoryChange();
  }, 50);
};

/* ─── Override admSaveProduct to include sizes ─── */
const _origAdmSave = window.admSaveProduct;
window.admSaveProduct = function() {
  // Inject sizes into the product data before saving
  const sizesHidden = document.getElementById('adm-p-sizes');
  const sizesVal = sizesHidden?.value || '';

  // Temporarily store to be picked up by save
  window.__pendingSizes = sizesVal;

  _origAdmSave();
};

/* ─── Patch the actual save inside IIFE ─── */
// We intercept by patching saveAdmProducts hook
const _origSaveAdmProds = window.__patchSaveForSizes;

// Direct patch: after admSaveProduct collects data, inject sizes
// We patch admSaveProduct at the source via a proxy on the data object
(function patchSizesIntoSave() {
  // Find the save and patch data collection
  const origSave = window.admSaveProduct;
  window.admSaveProduct = function() {
    const sizesHidden = document.getElementById('adm-p-sizes');
    window.__pendingSizes = sizesHidden?.value || '';
    origSave();
  };

  // Patch to inject sizes into product data
  // We monitor adm-p-sku (last field before sizes) and inject after
  const origCollect = window.__collectAdmProduct;
})();

/* ─── CHECKOUT: Dynamic sizes based on product ─── */
function getCheckoutSizes(product) {
  // If product has sizes defined — use them
  if (product.sizes) {
    try {
      const parsed = typeof product.sizes === 'string'
        ? JSON.parse(product.sizes) : product.sizes;
      if (parsed.sizes && parsed.sizes.length > 0) {
        return { type: parsed.type, sizes: parsed.sizes };
      }
    } catch(e) {}
  }

  // Fallback: auto-detect by category
  const preset = getSizePreset(product.category || 'universal');
  const typeKey = preset.default;
  const sizes   = SIZE_PRESETS.types[typeKey]?.sizes || [];
  return { type: typeKey, sizes };
}

function renderCheckoutSizes(product, modal) {
  const wrap = modal.querySelector('.size-options');
  if (!wrap) return;

  const { type, sizes } = getCheckoutSizes(product);

  if (!sizes.length || (sizes.length === 1 && sizes[0] === 'ONE SIZE')) {
    wrap.innerHTML = '<span class="size-no-sizes">Универсальный размер</span>';
    // Set hidden value
    const hiddenInputs = modal.querySelectorAll('input[name="size"]');
    hiddenInputs.forEach(i => i.remove());
    const hidden = document.createElement('input');
    hidden.type = 'hidden'; hidden.name = 'size'; hidden.value = 'ONE SIZE';
    wrap.appendChild(hidden);
    return;
  }

  // Type label
  const typeLabel = SIZE_PRESETS.types[type]?.label || '';
  wrap.innerHTML = `
    <div style="width:100%;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;margin-bottom:6px">
      ${typeLabel}
    </div>` +
    sizes.map((s, i) => `
      <label class="size-btn-label">
        <input type="radio" name="size" value="${s}" ${i === 0 ? 'checked' : ''}>
        <span class="size-btn">${s}</span>
      </label>`).join('');
}

/* ─── Patch openCheckout to use dynamic sizes ─── */
const _origOpenCheckout = window.openCheckout;
window.openCheckout = function(product) {
  _origOpenCheckout(product);

  // After modal renders, replace size options
  setTimeout(() => {
    const modal = document.getElementById('checkoutModal');
    if (modal) renderCheckoutSizes(product, modal);
  }, 30);
};

/* ─── Patch admSaveProduct to save sizes in product data ─── */
// Hook into the IIFE's internal save by monitoring the product construction
// We wrap the global admSaveProduct that was set inside the IIFE
(function() {
  const iifeSave = window.admSaveProduct;
  window.admSaveProduct = function() {
    // Store pending sizes before IIFE's save runs
    const sizesEl = document.getElementById('adm-p-sizes');
    window.__pendingSizes = sizesEl?.value || '';
    iifeSave();
  };
})();

// Patch saveAdmProducts to inject __pendingSizes into the last saved product
const _origSaveAdmProducts = null; // handled via State sync

// Direct injection: modify the product object right before it's pushed
// We do this by patching admProducts array modification
function injectSizesIntoLastSave(admProductsRef) {
  if (!window.__pendingSizes || !admProductsRef.length) return;
  try {
    const sizes = JSON.parse(window.__pendingSizes);
    // Find the product that was just saved (by editId or first element)
    const editId = parseInt(document.getElementById('adm-p-id')?.value || '0');
    const idx = editId
      ? admProductsRef.findIndex(p => p.id === editId)
      : 0;
    if (idx > -1) {
      admProductsRef[idx].sizes = sizes;
    }
  } catch(e) {}
  window.__pendingSizes = '';
}

// Expose for the IIFE to call
window.__injectSizesIntoLastSave = injectSizesIntoLastSave;

/* ═══════════════════════════════════════════════
   STOCK & DESCRIPTION SYSTEM
═══════════════════════════════════════════════ */

/* ─── Render stock inputs under size checkboxes ─── */
function renderStockInputs(sizes, stockData) {
  const wrap = document.getElementById('admStockInputs');
  if (!wrap) return;

  if (!sizes || !sizes.length || (sizes.length === 1 && sizes[0] === 'ONE SIZE')) {
    wrap.innerHTML = `
      <div class="adm-stock-label-row">
        <span class="adm-stock-title">Остаток в наличии</span>
      </div>
      <div class="adm-stock-grid">
        <div class="adm-stock-item">
          <label>Кол-во</label>
          <input type="number" min="0" id="stock-ONE_SIZE"
            value="${stockData?.['ONE SIZE'] ?? ''}"
            placeholder="∞" oninput="window.updateStockHidden()"/>
        </div>
      </div>`;
    return;
  }

  wrap.innerHTML = `
    <div class="adm-stock-label-row">
      <span class="adm-stock-title">Остаток по размерам (оставь пустым = неограничено)</span>
    </div>
    <div class="adm-stock-grid">
      ${sizes.map(s => `
        <div class="adm-stock-item">
          <label>${s}</label>
          <input type="number" min="0" id="stock-${s.replace(/[^a-zA-Z0-9]/g,'_')}"
            data-size="${s}"
            value="${stockData?.[s] ?? ''}"
            placeholder="∞"
            oninput="window.updateStockHidden()"/>
        </div>`).join('')}
    </div>`;
}

/* ─── Collect stock data into hidden field ─── */
window.updateStockHidden = function() {
  const inputs = document.querySelectorAll('#admStockInputs input[data-size], #admStockInputs input#stock-ONE_SIZE');
  const stock  = {};
  inputs.forEach(inp => {
    const size = inp.dataset.size || 'ONE SIZE';
    const val  = inp.value.trim();
    if (val !== '') stock[size] = parseInt(val) || 0;
  });
  window.__pendingStock = stock;
};

/* ─── Override renderAdmSizes to also render stock ─── */
const _origRenderAdmSizes = window.renderAdmSizes || function(){};
window.renderAdmSizes = function(category, selectedSizes, selectedType, stockData) {
  // Call original size renderer
  const preset    = getSizePreset(category);
  const activeType = selectedType || preset.default;
  const typeRow   = document.getElementById('admSizeTypeRow');
  const cbWrap    = document.getElementById('admSizeCheckboxes');
  if (!typeRow || !cbWrap) return;

  // Type switcher
  typeRow.innerHTML = preset.available.map(typeKey => {
    const type = SIZE_PRESETS.types[typeKey];
    return `<button type="button" class="adm-size-type-btn ${activeType === typeKey ? 'active' : ''}"
      onclick="window.admSwitchSizeType('${typeKey}', '${category}')">${type.label}</button>`;
  }).join('');

  const sizes = SIZE_PRESETS.types[activeType]?.sizes || [];

  if (!sizes.length) {
    cbWrap.innerHTML = '<span class="size-no-sizes">Универсальный размер</span>';
    updateAdmSizesHidden(['ONE SIZE'], activeType);
    renderStockInputs(['ONE SIZE'], stockData || window.__currentStock || {});
    return;
  }

  const toCheck = selectedSizes && selectedSizes.length > 0 ? selectedSizes : sizes;

  cbWrap.innerHTML = sizes.map(s => `
    <label class="adm-size-cb-label">
      <input type="checkbox" name="adm-size-cb" value="${s}"
        ${toCheck.includes(s) ? 'checked' : ''}
        onchange="window.admSizeCbChanged('${activeType}')"/>
      <span class="adm-size-cb-box">${s}</span>
    </label>`).join('');

  updateAdmSizesHidden(toCheck, activeType);
  renderStockInputs(toCheck, stockData || window.__currentStock || {});
};

/* ─── When checkbox changes - update stock inputs too ─── */
window.admSizeCbChanged = function(typeKey) {
  const checked = [...document.querySelectorAll('input[name="adm-size-cb"]:checked')]
    .map(cb => cb.value);
  updateAdmSizesHidden(checked, typeKey);
  // Re-render stock inputs with current stock data
  const currentStock = window.__currentStock || {};
  renderStockInputs(checked, currentStock);
};

/* ─── Override admSwitchSizeType to pass stock ─── */
window.admSwitchSizeType = function(typeKey, category) {
  const sizes = SIZE_PRESETS.types[typeKey]?.sizes || [];
  window.renderAdmSizes(category, sizes, typeKey, window.__currentStock || {});
};

/* ─── Override openAdmProductModal for desc + stock ─── */
const _origOpenAdmModal2 = window.openAdmProductModal;
window.openAdmProductModal = function(product) {
  _origOpenAdmModal2(product);

  setTimeout(() => {
    // Load description
    const descEl = document.getElementById('adm-p-desc');
    if (descEl) descEl.value = product?.description || '';

    // Load stock
    window.__currentStock = {};
    if (product?.stock) {
      window.__currentStock = typeof product.stock === 'string'
        ? JSON.parse(product.stock) : product.stock;
    }
    window.__pendingStock = { ...window.__currentStock };

    // Render sizes with stock
    const cat = document.getElementById('adm-p-category')?.value || 'boxing';
    let selectedSizes = [];
    let selectedType  = null;
    if (product?.sizes) {
      try {
        const parsed = typeof product.sizes === 'string'
          ? JSON.parse(product.sizes) : product.sizes;
        selectedSizes = parsed.sizes || [];
        selectedType  = parsed.type  || null;
      } catch(e) {}
    }
    window.renderAdmSizes(cat, selectedSizes, selectedType, window.__currentStock);

    // Hook category change
    const catSel = document.getElementById('adm-p-category');
    if (catSel) {
      catSel.onchange = () => {
        window.__currentStock = {};
        window.renderAdmSizes(catSel.value, [], null, {});
      };
    }
  }, 60);
};

/* ─── Patch admSaveProduct to save desc + stock ─── */
const _origAdmSave2 = window.admSaveProduct;
window.admSaveProduct = function() {
  // Collect description
  window.__pendingDesc  = document.getElementById('adm-p-desc')?.value?.trim() || '';
  // Collect stock (already in __pendingStock via updateStockHidden)
  window.updateStockHidden();
  _origAdmSave2();
};

/* ─── Patch product data collection to include desc + stock ─── */
const _origSizeInject = window.__injectSizesIntoLastSave;
window.__injectSizesIntoLastSave = function(admProductsRef) {
  if (_origSizeInject) _origSizeInject(admProductsRef);

  // Also inject description and stock
  const editId = parseInt(document.getElementById('adm-p-id')?.value || '0');
  const idx = editId
    ? admProductsRef.findIndex(p => p.id === editId)
    : 0;
  if (idx > -1) {
    if (window.__pendingDesc !== undefined) {
      admProductsRef[idx].description = window.__pendingDesc;
    }
    if (window.__pendingStock && Object.keys(window.__pendingStock).length > 0) {
      admProductsRef[idx].stock = window.__pendingStock;
    }
  }
};

/* ─── Patch product data object in IIFE save ─── */
// Additional: patch the sizes object in index.html IIFE save
// This is handled via window.__pendingSizes which now also reads desc/stock

/* ═══════════════════════════════════════════════
   CHECKOUT: Stock-aware size display + auto-decrement
═══════════════════════════════════════════════ */

/* ─── Override renderCheckoutSizes to show stock ─── */
const _origRenderCheckoutSizes = window.renderCheckoutSizes;
window.renderCheckoutSizes = function(product, modal) {
  const wrap = modal.querySelector('.size-options');
  if (!wrap) return;

  const { type, sizes } = getCheckoutSizes(product);
  const stock = product.stock || {};

  if (!sizes.length || (sizes.length === 1 && sizes[0] === 'ONE SIZE')) {
    const qty = stock['ONE SIZE'];
    if (qty !== undefined && qty <= 0) {
      wrap.innerHTML = '<span style="color:#f87171;font-size:13px">❌ Нет в наличии</span>';
      return;
    }
    wrap.innerHTML = '<span class="size-no-sizes">Универсальный размер</span>';
    const hidden = document.createElement('input');
    hidden.type = 'hidden'; hidden.name = 'size'; hidden.value = 'ONE SIZE';
    wrap.appendChild(hidden);
    return;
  }

  const typeLabel = SIZE_PRESETS.types[type]?.label || '';

  // Filter out sizes with 0 stock (if stock is defined)
  const availableSizes = sizes.filter(s => {
    const qty = stock[s];
    return qty === undefined || qty > 0; // show if unlimited or > 0
  });

  if (!availableSizes.length) {
    wrap.innerHTML = '<span style="color:#f87171;font-size:13px;letter-spacing:1px">❌ Все размеры распроданы</span>';
    return;
  }

  wrap.innerHTML = `
    <div style="width:100%;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;margin-bottom:6px">${typeLabel}</div>` +
    availableSizes.map((s, i) => {
      const qty = stock[s];
      const isLow   = qty !== undefined && qty <= 3 && qty > 0;
      const stockTxt = qty !== undefined ? (isLow ? `осталось ${qty}` : '') : '';
      return `
        <label class="size-btn-label ${isLow ? 'low-stock' : ''}">
          <input type="radio" name="size" value="${s}" ${i === 0 ? 'checked' : ''}>
          <span class="size-btn">${s}</span>
          ${stockTxt ? `<span class="size-stock-badge">${stockTxt}</span>` : ''}
        </label>`;
    }).join('');
};

/* ─── Decrement stock after order ─── */
async function decrementStock(product, size) {
  if (!product.stock) return;
  const stock = typeof product.stock === 'string'
    ? JSON.parse(product.stock) : { ...product.stock };

  if (stock[size] !== undefined && stock[size] > 0) {
    stock[size] = stock[size] - 1;

    // Update Firebase
    if (window.__fbReady && window.FB) {
      try {
        await window.FB.saveProduct({ ...product, stock });
        console.log(`📦 Остаток ${size}: ${stock[size]}`);
      } catch(e) { console.warn('Stock update error:', e); }
    }

    // Update local State
    const idx = State.products.findIndex(p => p.id === product.id);
    if (idx > -1) {
      State.products[idx].stock = stock;
      // Re-render if category page open
      if (typeof renderProducts === 'function') renderProducts();
    }
  }
}

/* ─── Patch submitOrder to decrement stock ─── */
const _origSubmitOrder = window.submitOrder || submitOrder;
window.submitOrder = async function(data) {
  // Find product and decrement
  const product = State.products.find(p => p.id === data.product_id);
  if (product && data.size && data.size !== '—' && data.size !== 'ONE SIZE') {
    await decrementStock(product, data.size);
  }
  // Call original
  await _origSubmitOrder(data);
};

/* ─── Show description on product page ─── */
const _origRenderProductPage = window.renderProductPage;
window.renderProductPage = function(product) {
  // Store for later injection
  window.__currentPageProduct = product;
  _origRenderProductPage(product);

  // Inject description after render
  setTimeout(() => {
    const infoEl = document.querySelector('.product-page-info');
    if (!infoEl || !product.description) return;

    const existingDesc = document.getElementById('productPageDesc');
    if (existingDesc) existingDesc.remove();

    const desc = document.createElement('div');
    desc.id = 'productPageDesc';
    desc.className = 'product-page-desc';
    desc.textContent = product.description;

    // Insert before buy button
    const buyBtn = infoEl.querySelector('.product-buy-btn');
    if (buyBtn) infoEl.insertBefore(desc, buyBtn);
    else infoEl.appendChild(desc);
  }, 80);
};

/* ═══════════════════════════════════════════════
   ADMIN CATEGORIES MANAGEMENT — полное управление
═══════════════════════════════════════════════ */
(function() {
  'use strict';

  const CATS_KEY = 'sx_categories';
  let admCats    = [];        // рабочая копия
  let editCatId  = null;      // null = новая, string = редактирование

  /* ─── Load categories (Firebase → localStorage → CATEGORIES const) ─── */
  async function loadAdmCats() {
    if (window.__fbReady && window.FB) {
      try {
        const snap = await window.FB.db
          ? (await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'))
            .then(({ collection, getDocs }) => getDocs(collection(window.FB.db, 'categories')))
          : null;

        if (snap && !snap.empty) {
          admCats = [];
          snap.forEach(d => admCats.push({ ...d.data(), _fbId: d.id }));
          admCats.sort((a,b) => (a.order||0)-(b.order||0));
          renderAdmCatList();
          syncCatsToMain();
          return;
        }
      } catch(e) { console.warn('FB cats load:', e); }
    }

    // Fallback: localStorage → CATEGORIES constant
    const saved = localStorage.getItem(CATS_KEY);
    if (saved) {
      admCats = JSON.parse(saved);
    } else if (typeof CATEGORIES !== 'undefined') {
      admCats = CATEGORIES.map((c, i) => ({ ...c, order: i }));
      saveCatsLocal();
    }
    renderAdmCatList();
    syncCatsToMain();
  }

  function saveCatsLocal() {
    localStorage.setItem(CATS_KEY, JSON.stringify(admCats));
  }

  async function saveCatsFirebase(cat) {
    if (!window.__fbReady || !window.FB) return;
    try {
      const { doc, setDoc, serverTimestamp } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const ref = doc(window.FB.db, 'categories', String(cat.id));
      await setDoc(ref, { ...cat, updatedAt: serverTimestamp() }, { merge: true });
    } catch(e) { console.warn('FB cat save:', e); }
  }

  async function deleteCatFirebase(id) {
    if (!window.__fbReady || !window.FB) return;
    try {
      const { doc, deleteDoc } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      await deleteDoc(doc(window.FB.db, 'categories', String(id)));
    } catch(e) { console.warn('FB cat delete:', e); }
  }

  /* ─── Sync edited cats to main site CATEGORIES ─── */
  function syncCatsToMain() {
    if (typeof CATEGORIES !== 'undefined') {
      // Update the global CATEGORIES array used by the site
      CATEGORIES.length = 0;
      admCats.forEach(c => CATEGORIES.push(c));
    }
    // Re-render site categories
    if (typeof renderCategories === 'function') renderCategories();
  }

  /* ─── Watch Firebase for real-time category changes ─── */
  async function watchCatsFirebase() {
    if (!window.__fbReady || !window.FB) return;
    try {
      const { collection, onSnapshot } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      onSnapshot(collection(window.FB.db, 'categories'), snap => {
        if (snap.empty) return;
        admCats = [];
        snap.forEach(d => admCats.push({ ...d.data(), _fbId: d.id }));
        admCats.sort((a,b) => (a.order||0)-(b.order||0));
        saveCatsLocal();
        renderAdmCatList();
        syncCatsToMain();
      });
    } catch(e) { console.warn('FB cats watch:', e); }
  }

  /* ─── Render admin categories list ─── */
  function renderAdmCatList() {
    const list = document.getElementById('admCatList');
    if (!list) return;

    if (!admCats.length) {
      list.innerHTML = '<div class="adm-empty">📂 Категорий пока нет. Нажми «+ Добавить категорию»</div>';
      return;
    }

    list.innerHTML = admCats.map(cat => `
      <div class="adm-cat-card">
        <div class="adm-cat-card-icon">${cat.icon || '📦'}</div>
        <div class="adm-cat-card-body">
          <div class="adm-cat-card-name">${cat.name}</div>
          <div style="font-size:11px;color:#444;margin-bottom:6px">
            ID: ${cat.id} · UA: ${cat.name_ua||'—'} · EN: ${cat.name_en||'—'}
          </div>
          <div class="adm-cat-card-subs">
            ${(cat.subcategories||[]).length
              ? (cat.subcategories||[]).map(s =>
                  `<span class="adm-cat-sub-pill">${s.icon||''} ${s.name}</span>`
                ).join('')
              : '<span style="font-size:11px;color:#333">Нет подкатегорий</span>'}
          </div>
        </div>
        <div class="adm-cat-card-actions">
          <button class="adm-btn adm-btn-outline adm-btn-sm"
            onclick="window.openAdmCatModal('${cat.id}')">✏️ Ред.</button>
        </div>
      </div>`).join('');
  }

  /* ─── Open category modal ─── */
  window.openAdmCatModal = function(catId) {
    editCatId = catId || null;
    const modal = document.getElementById('admCatModal');
    const delBtn = document.getElementById('admCatDeleteBtn');
    document.getElementById('admCatModalTitle').textContent =
      catId ? '✏️ Редактировать категорию' : '➕ Добавить категорию';

    if (catId) {
      const cat = admCats.find(c => c.id === catId);
      if (!cat) return;
      document.getElementById('adm-cat-id').value      = cat.id;
      document.getElementById('adm-cat-slug').value    = cat.id;
      document.getElementById('adm-cat-icon').value    = cat.icon    || '';
      document.getElementById('adm-cat-name').value    = cat.name    || '';
      document.getElementById('adm-cat-name-ua').value = cat.name_ua || '';
      document.getElementById('adm-cat-name-en').value = cat.name_en || '';
      if (delBtn) delBtn.style.display = 'flex';
      renderSubcatRows(cat.subcategories || []);
    } else {
      ['adm-cat-id','adm-cat-slug','adm-cat-icon',
       'adm-cat-name','adm-cat-name-ua','adm-cat-name-en'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
      });
      if (delBtn) delBtn.style.display = 'none';
      renderSubcatRows([]);
    }

    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.style.overflow = 'hidden';
  };

  window.closeAdmCatModal = function() {
    const modal = document.getElementById('admCatModal');
    modal.classList.remove('open');
    setTimeout(() => { modal.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
  };

  /* ─── Render subcategory rows ─── */
  function renderSubcatRows(subs) {
    const wrap = document.getElementById('admSubcatRows');
    if (!wrap) return;

    // Header
    wrap.innerHTML = `
      <div class="adm-subcat-header">
        <span>Иконка</span><span>Название (RU)</span><span>Название (UA)</span><span>Название (EN)</span><span></span>
      </div>` +
      (subs.length ? subs.map((s, i) => buildSubcatRow(s, i)).join('') : '');
  }

  function buildSubcatRow(sub, idx) {
    return `
      <div class="adm-subcat-row" id="subcatRow_${idx}">
        <input placeholder="🥊" value="${sub.icon||''}" data-field="icon" data-idx="${idx}" style="text-align:center;font-size:18px"/>
        <input placeholder="Название RU" value="${sub.name||''}" data-field="name" data-idx="${idx}"/>
        <input placeholder="Назва UA" value="${sub.name_ua||''}" data-field="name_ua" data-idx="${idx}"/>
        <input placeholder="Name EN" value="${sub.name_en||''}" data-field="name_en" data-idx="${idx}"/>
        <button class="adm-subcat-remove" onclick="admRemoveSubcatRow(${idx})" title="Удалить">✕</button>
      </div>`;
  }

  window.admAddSubcatRow = function() {
    const wrap = document.getElementById('admSubcatRows');
    const rows = wrap.querySelectorAll('.adm-subcat-row');
    const idx  = rows.length;
    const div  = document.createElement('div');
    div.innerHTML = buildSubcatRow({}, idx);
    wrap.appendChild(div.firstElementChild);
  };

  window.admRemoveSubcatRow = function(idx) {
    const row = document.getElementById(`subcatRow_${idx}`);
    if (row) row.remove();
    // Re-index remaining rows
    document.querySelectorAll('.adm-subcat-row').forEach((row, i) => {
      row.id = `subcatRow_${i}`;
      row.querySelectorAll('[data-idx]').forEach(el => el.dataset.idx = i);
      const btn = row.querySelector('.adm-subcat-remove');
      if (btn) btn.setAttribute('onclick', `admRemoveSubcatRow(${i})`);
    });
  };

  /* ─── Collect subcategory rows ─── */
  function collectSubcats() {
    const rows = document.querySelectorAll('.adm-subcat-row');
    const subs = [];
    rows.forEach(row => {
      const name = row.querySelector('[data-field="name"]')?.value.trim();
      if (!name) return; // skip empty rows
      subs.push({
        icon:    row.querySelector('[data-field="icon"]')?.value.trim()    || '📦',
        name,
        name_ua: row.querySelector('[data-field="name_ua"]')?.value.trim() || name,
        name_en: row.querySelector('[data-field="name_en"]')?.value.trim() || name,
        count:   0,
      });
    });
    return subs;
  }

  /* ─── Save category ─── */
  window.admSaveCat = async function() {
    const name = document.getElementById('adm-cat-name')?.value.trim();
    const slug = document.getElementById('adm-cat-slug')?.value.trim();
    const icon = document.getElementById('adm-cat-icon')?.value.trim();
    if (!name) { admCatToast('⚠ Введите название'); return; }
    if (!slug) { admCatToast('⚠ Введите ID категории'); return; }

    const cat = {
      id:            slug,
      icon:          icon || '📦',
      name,
      name_ua:       document.getElementById('adm-cat-name-ua')?.value.trim() || name,
      name_en:       document.getElementById('adm-cat-name-en')?.value.trim() || name,
      subcategories: collectSubcats(),
      totalCount:    0,
      order:         editCatId ? (admCats.find(c=>c.id===editCatId)?.order || 99) : admCats.length,
    };

    if (editCatId) {
      const idx = admCats.findIndex(c => c.id === editCatId);
      if (idx > -1) admCats[idx] = cat;
      else admCats.push(cat);
    } else {
      // Check duplicate id
      if (admCats.find(c => c.id === slug)) {
        admCatToast('⚠ Категория с таким ID уже существует'); return;
      }
      admCats.push(cat);
    }

    saveCatsLocal();
    saveCatsFirebase(cat);
    syncCatsToMain();
    renderAdmCatList();
    window.closeAdmCatModal();
    admCatToast('✅ Категория сохранена!');
  };

  /* ─── Delete category ─── */
  window.admDeleteCat = async function() {
    if (!editCatId) return;
    if (!confirm(`Удалить категорию "${editCatId}"? Товары останутся, только категория исчезнет.`)) return;
    admCats = admCats.filter(c => c.id !== editCatId);
    saveCatsLocal();
    deleteCatFirebase(editCatId);
    syncCatsToMain();
    renderAdmCatList();
    window.closeAdmCatModal();
    admCatToast('🗑 Категория удалена');
  };

  /* ─── Toast for cats ─── */
  function admCatToast(msg) {
    if (typeof admToast === 'function') admToast(msg);
    else {
      const t = document.getElementById('admToast');
      if (!t) return;
      t.textContent = msg; t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
    }
  }

  /* ─── Init: hook into admin panel open ─── */
  const _origOpenAdmPanel = window.openAdminPanel;
  if (_origOpenAdmPanel) {
    window.openAdminPanel = function() {
      _origOpenAdmPanel();
      loadAdmCats();
      watchCatsFirebase();
    };
  }

  /* ─── Hook showAdmSection to load cats when switching ─── */
  const _origShowSection = window.showAdmSection;
  window.showAdmSection = function(name) {
    if (typeof _origShowSection === 'function') _origShowSection(name);
    else {
      document.querySelectorAll('.adm-section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.adm-menu-item').forEach(m => m.classList.remove('active'));
      const sec = document.getElementById('adm-section-' + name);
      if (sec) sec.classList.add('active');
      document.querySelector(`[data-section="${name}"]`)?.classList.add('active');
      const titles = { products:'📦 Товары', categories:'🗂️ Категории', orders:'🛒 Заказы', settings:'⚙️ Настройки' };
      const tb = document.getElementById('admTopbarTitle');
      if (tb) tb.textContent = titles[name] || name;
    }
    if (name === 'categories') {
      setTimeout(() => {
        if (typeof CATEGORIES !== 'undefined' && CATEGORIES.length) {
          const tabs = document.getElementById('admCatTabs');
          if (tabs) {
            tabs.innerHTML = CATEGORIES.map(cat =>
              `<button class="adm-cat-tab" onclick="window.admSelectCat('${cat.id}')">${cat.icon||'📦'} ${cat.name}</button>`
            ).join('');
          }
        }
      }, 50);
    }
  };

  /* ─── Close modal on backdrop click ─── */
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('admCatModal');
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === modal) window.closeAdmCatModal();
      });
    }
  });

})();

/* ═══════════════════════════════════════════════
   FREE-FORM SIZE INPUT
   Убираем пресеты — вводим что угодно вручную
═══════════════════════════════════════════════ */
(function() {

  /* ─── Override renderAdmSizes — free-form input ─── */
  window.renderAdmSizes = function(category, selectedSizes, selectedType, stockData) {
    const typeRow = document.getElementById('admSizeTypeRow');
    const cbWrap  = document.getElementById('admSizeCheckboxes');
    const stockWrap = document.getElementById('admStockInputs');
    if (!cbWrap) return;

    // Hide type switcher (no longer needed)
    if (typeRow) typeRow.innerHTML = '';

    // Current sizes list
    const currentSizes = (selectedSizes && selectedSizes.length)
      ? selectedSizes
      : [];

    renderSizeTagsAdmin(currentSizes, stockData || {});
  };

  function renderSizeTagsAdmin(sizes, stockData) {
    const cbWrap    = document.getElementById('admSizeCheckboxes');
    const stockWrap = document.getElementById('admStockInputs');
    if (!cbWrap) return;

    cbWrap.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:10px" id="admSizeTagList">
        ${sizes.map(s => `
          <span class="adm-size-tag-item" data-size="${s}">
            <span style="font-family:'Bebas Neue';font-size:15px;letter-spacing:1px">${s}</span>
            <button type="button" onclick="admRemoveSizeTag('${s}')"
              style="background:none;border:none;color:#666;font-size:14px;cursor:pointer;margin-left:4px;line-height:1">✕</button>
          </span>`).join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <input type="text" id="admSizeNewInput"
          placeholder="Введи размер: XL, 12, 42, M, 10oz..."
          style="background:#060606;border:1px solid #1e1e1e;color:#fff;padding:9px 14px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;flex:1;transition:border-color .2s"
          onkeydown="if(event.key==='Enter'){event.preventDefault();admAddSizeTag()}"
          onfocus="this.style.borderColor='var(--red)'"
          onblur="this.style.borderColor='#1e1e1e'"/>
        <button type="button" class="adm-btn adm-btn-red" onclick="admAddSizeTag()"
          style="padding:9px 16px;font-size:12px;white-space:nowrap">+ Добавить</button>
      </div>
      <div style="font-size:11px;color:#333;margin-top:6px">
        Нажми Enter или кнопку чтобы добавить. Примеры: XS, S, M, L, XL, XXL, 8oz, 10oz, 12oz, 36, 38, 40, ONE SIZE
      </div>`;

    updateSizesHiddenFree(sizes);
    renderStockFree(sizes, stockData);
  }

  window.admAddSizeTag = function() {
    const input = document.getElementById('admSizeNewInput');
    const val   = (input?.value || '').trim().toUpperCase();
    if (!val) return;

    // Get current sizes
    const current = getCurrentSizeTags();
    if (current.includes(val)) { input.value = ''; return; } // no duplicates

    current.push(val);
    const stockData = collectStockFree();
    renderSizeTagsAdmin(current, stockData);
    updateSizesHiddenFree(current);
    input.value = '';
    input.focus();
  };

  window.admRemoveSizeTag = function(size) {
    const current = getCurrentSizeTags().filter(s => s !== size);
    const stockData = collectStockFree();
    renderSizeTagsAdmin(current, stockData);
    updateSizesHiddenFree(current);
  };

  function getCurrentSizeTags() {
    return [...document.querySelectorAll('.adm-size-tag-item')]
      .map(el => el.dataset.size);
  }

  function updateSizesHiddenFree(sizes) {
    const h = document.getElementById('adm-p-sizes');
    if (h) h.value = JSON.stringify({ type: 'custom', sizes });
    window.__pendingSizes = JSON.stringify({ type: 'custom', sizes });
  }

  function collectStockFree() {
    const result = {};
    document.querySelectorAll('.adm-stock-free-input').forEach(inp => {
      const size = inp.dataset.size;
      const val  = inp.value.trim();
      if (val !== '') result[size] = parseInt(val) || 0;
    });
    return result;
  }

  function renderStockFree(sizes, stockData) {
    const wrap = document.getElementById('admStockInputs');
    if (!wrap) return;

    if (!sizes.length) {
      wrap.innerHTML = '';
      return;
    }

    wrap.innerHTML = `
      <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#444;margin-bottom:8px;margin-top:4px">
        Остаток по размерам (пусто = неограничено)
      </div>
      <div class="adm-stock-grid">
        ${sizes.map(s => `
          <div class="adm-stock-item">
            <label>${s}</label>
            <input type="number" min="0"
              class="adm-stock-free-input"
              data-size="${s}"
              value="${stockData?.[s] ?? ''}"
              placeholder="∞"
              oninput="window.updateStockHidden()"/>
          </div>`).join('')}
      </div>`;
  }

  /* ─── Override renderCheckoutSizes to use free sizes ─── */
  window.renderCheckoutSizes = function(product, modal) {
    const wrap = modal.querySelector('.size-options');
    if (!wrap) return;

    let sizes = [];
    if (product.sizes) {
      try {
        const parsed = typeof product.sizes === 'string'
          ? JSON.parse(product.sizes) : product.sizes;
        sizes = parsed.sizes || [];
      } catch(e) {}
    }

    const stock = product.stock || {};

    // Filter out zero-stock sizes
    const available = sizes.filter(s => {
      const qty = stock[s];
      return qty === undefined || qty > 0;
    });

    if (!sizes.length) {
      // No sizes defined — show simple selector
      wrap.innerHTML = `
        <label class="size-btn-label">
          <input type="radio" name="size" value="ONE SIZE" checked>
          <span class="size-btn">ONE SIZE</span>
        </label>`;
      return;
    }

    if (!available.length) {
      wrap.innerHTML = '<span style="color:#f87171;font-size:13px">❌ Все размеры распроданы</span>';
      return;
    }

    wrap.innerHTML = available.map((s, i) => {
      const qty    = stock[s];
      const isLow  = qty !== undefined && qty <= 3;
      const badge  = isLow ? `<span class="size-stock-badge">осталось ${qty}</span>` : '';
      return `
        <label class="size-btn-label ${isLow ? 'low-stock' : ''}">
          <input type="radio" name="size" value="${s}" ${i===0?'checked':''}>
          <span class="size-btn">${s}</span>
          ${badge}
        </label>`;
    }).join('');
  };

  /* ─── Patch openAdmProductModal to use free-form sizes ─── */
  const _orig = window.openAdmProductModal;
  window.openAdmProductModal = function(product) {
    _orig(product);
    setTimeout(() => {
      const cat  = document.getElementById('adm-p-category')?.value || '';
      let sizes  = [];
      let stock  = {};
      if (product?.sizes) {
        try {
          const p = typeof product.sizes === 'string'
            ? JSON.parse(product.sizes) : product.sizes;
          sizes = p.sizes || [];
        } catch(e) {}
      }
      if (product?.stock) {
        stock = typeof product.stock === 'string'
          ? JSON.parse(product.stock) : product.stock;
      }
      window.__currentStock = stock;
      renderSizeTagsAdmin(sizes, stock);
    }, 80);
  };

})();

/* ═══════════════════════════════════════════════
   SUBCATEGORY EDITOR — простой и рабочий
   Берёт данные из CATEGORIES, сохраняет в Firebase
═══════════════════════════════════════════════ */
(function() {
  'use strict';

  const SUBCATS_KEY = 'sx_subcats'; // localStorage key
  let activeCatId   = null;

  /* ─── Init when admin panel opens ─── */
  function initSubcatEditor() {
    // Wait for CATEGORIES to be available
    if (typeof CATEGORIES === 'undefined' || !CATEGORIES.length) {
      setTimeout(initSubcatEditor, 100);
      return;
    }
    renderCatTabs();
    watchSubcatsFirebase();
  }

  /* ─── Save/load subcats from Firebase ─── */
  async function saveSubcatsToFirebase(catId, subcategories) {
    if (!window.__fbReady || !window.FB) return false;
    try {
      const { doc, setDoc, serverTimestamp } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      await setDoc(
        doc(window.FB.db, 'subcategories', catId),
        { catId, subcategories, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return true;
    } catch(e) { console.warn('FB subcats save:', e); return false; }
  }

  async function loadSubcatsFromFirebase() {
    if (!window.__fbReady || !window.FB) return null;
    try {
      const { collection, getDocs } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const snap = await getDocs(collection(window.FB.db, 'subcategories'));
      const data = {};
      snap.forEach(d => { data[d.id] = d.data().subcategories || []; });
      return data;
    } catch(e) { console.warn('FB subcats load:', e); return null; }
  }

  async function watchSubcatsFirebase() {
    if (!window.__fbReady || !window.FB) return;
    try {
      const { collection, onSnapshot } =
        await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      onSnapshot(collection(window.FB.db, 'subcategories'), snap => {
        snap.forEach(d => {
          const catId = d.id;
          const subs  = d.data().subcategories || [];
          // Update CATEGORIES array
          const cat = CATEGORIES.find(c => c.id === catId);
          if (cat) {
            cat.subcategories = subs;
            // Save to localStorage
            const stored = JSON.parse(localStorage.getItem(SUBCATS_KEY) || '{}');
            stored[catId] = subs;
            localStorage.setItem(SUBCATS_KEY, JSON.stringify(stored));
          }
        });
        // Re-render site categories
        if (typeof renderCategories === 'function') renderCategories();
        // Re-render tabs if editor is open
        if (activeCatId) renderSubcatRows(activeCatId);
      });
    } catch(e) { console.warn('FB subcats watch:', e); }
  }

  /* ─── Get subcats for a category (Firebase override → CATEGORIES default) ─── */
  function getSubcats(catId) {
    // Check localStorage override first
    const stored = JSON.parse(localStorage.getItem(SUBCATS_KEY) || '{}');
    if (stored[catId]) return stored[catId];
    // Fall back to CATEGORIES array
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat?.subcategories || [];
  }

  /* ─── Render category tabs ─── */
  function renderCatTabs() {
    const tabs = document.getElementById('admCatTabs');
    if (!tabs) return;
    if (typeof CATEGORIES === 'undefined' || !CATEGORIES.length) {
      tabs.innerHTML = '<div style="color:#444;font-size:13px">Загрузка категорий...</div>';
      setTimeout(renderCatTabs, 200);
      return;
    }
    tabs.innerHTML = CATEGORIES.map(cat => `
      <button class="adm-cat-tab ${activeCatId === cat.id ? 'active' : ''}"
        onclick="window.admSelectCat('${cat.id}')">
        ${cat.icon || '📦'} ${cat.name}
      </button>`).join('');
  }

  /* ─── Select category ─── */
  window.admSelectCat = function(catId) {
    activeCatId = catId;
    renderCatTabs();

    const cat = CATEGORIES.find(c => c.id === catId);
    if (!cat) return;

    document.getElementById('admActiveCatIcon').textContent = cat.icon;
    document.getElementById('admActiveCatName').textContent = cat.name;
    document.getElementById('admSubcatEditor').style.display = 'block';

    renderSubcatRows(catId);
  };

  /* ─── Render subcat rows ─── */
  function renderSubcatRows(catId) {
    const list = document.getElementById('admSubcatList');
    if (!list) return;

    const subs = getSubcats(catId);

    if (!subs.length) {
      list.innerHTML = `
        <div style="padding:20px;text-align:center;color:#444;font-size:13px;border:1px dashed #1a1a1a">
          Подкатегорий пока нет. Нажми «+ Добавить подкатегорию»
        </div>`;
      return;
    }

    list.innerHTML = `
      <div style="display:grid;grid-template-columns:52px 1fr 32px;gap:8px;padding:0 12px;margin-bottom:4px">
        <span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#333">Иконка</span>
        <span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#333">Название</span>
        <span></span>
      </div>` +
      subs.map((s, i) => `
        <div class="adm-subcat-edit-row" id="sceRow_${i}">
          <input value="${s.icon||''}" placeholder="🥊"
            data-idx="${i}" data-field="icon"
            style="text-align:center;font-size:18px"/>
          <input value="${s.name||''}" placeholder="Название подкатегории"
            data-idx="${i}" data-field="name"/>
          <button class="adm-subcat-del-btn"
            onclick="window.admSubcatDelRow(${i})">✕</button>
        </div>`).join('');
  }

  /* ─── Add new row ─── */
  window.admSubcatAddRow = function() {
    const list  = document.getElementById('admSubcatList');
    if (!list || !activeCatId) return;

    const subs  = getSubcats(activeCatId);
    const i     = subs.length;

    // Remove "empty" placeholder if present
    const placeholder = list.querySelector('[style*="dashed"]');
    if (placeholder) placeholder.remove();
    // Remove header if list was empty
    if (!list.querySelector('.adm-subcat-edit-row')) list.innerHTML = `
      <div style="display:grid;grid-template-columns:52px 1fr 32px;gap:8px;padding:0 12px;margin-bottom:4px">
        <span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#333">Иконка</span>
        <span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#333">Название</span>
        <span></span>
      </div>`;

    const div = document.createElement('div');
    div.innerHTML = `
      <div class="adm-subcat-edit-row" id="sceRow_${i}">
        <input value="" placeholder="📦"
          data-idx="${i}" data-field="icon"
          style="text-align:center;font-size:18px"/>
        <input value="" placeholder="Название подкатегории"
          data-idx="${i}" data-field="name"/>
        <button class="adm-subcat-del-btn"
          onclick="window.admSubcatDelRow(${i})">✕</button>
      </div>`;
    list.appendChild(div.firstElementChild);

    // Focus name field
    div.querySelector?.('[data-field="name"]')?.focus();
    list.lastElementChild?.querySelector('[data-field="name"]')?.focus();
  };

  /* ─── Delete row ─── */
  window.admSubcatDelRow = function(idx) {
    const row = document.getElementById(`sceRow_${idx}`);
    if (row) {
      row.style.opacity = '0'; row.style.transform = 'translateX(-10px)';
      row.style.transition = 'all .2s';
      setTimeout(() => {
        row.remove();
        reIndexRows();
        const list = document.getElementById('admSubcatList');
        if (list && !list.querySelector('.adm-subcat-edit-row')) {
          list.innerHTML = `
            <div style="padding:20px;text-align:center;color:#444;font-size:13px;border:1px dashed #1a1a1a">
              Подкатегорий пока нет. Нажми «+ Добавить подкатегорию»
            </div>`;
        }
      }, 200);
    }
  };

  function reIndexRows() {
    document.querySelectorAll('.adm-subcat-edit-row').forEach((row, i) => {
      row.id = `sceRow_${i}`;
      row.querySelectorAll('[data-idx]').forEach(el => el.dataset.idx = i);
      const btn = row.querySelector('.adm-subcat-del-btn');
      if (btn) btn.setAttribute('onclick', `admSubcatDelRow(${i})`);
    });
  }

  /* ─── Collect rows into array ─── */
  function collectSubcatRows() {
    const rows = document.querySelectorAll('.adm-subcat-edit-row');
    const result = [];
    rows.forEach(row => {
      const name = row.querySelector('[data-field="name"]')?.value.trim();
      const icon = row.querySelector('[data-field="icon"]')?.value.trim();
      if (!name) return;
      result.push({ icon: icon || '📦', name, name_ua: name, name_en: name, count: 0 });
    });
    return result;
  }

  /* ─── Save subcategories ─── */
  window.admSaveSubcats = async function() {
    if (!activeCatId) return;

    const subcategories = collectSubcatRows();

    // Update CATEGORIES array in memory
    const cat = CATEGORIES.find(c => c.id === activeCatId);
    if (cat) cat.subcategories = subcategories;

    // Save to localStorage
    const stored = JSON.parse(localStorage.getItem(SUBCATS_KEY) || '{}');
    stored[activeCatId] = subcategories;
    localStorage.setItem(SUBCATS_KEY, JSON.stringify(stored));

    // Save to Firebase
    const ok = await saveSubcatsToFirebase(activeCatId, subcategories);

    // Re-render site immediately
    if (typeof renderCategories === 'function') renderCategories();

    // Toast
    const toast = document.getElementById('admToast');
    if (toast) {
      toast.textContent = ok
        ? `✅ Подкатегории сохранены в Firebase!`
        : `✅ Сохранено локально (Firebase недоступен)`;
      toast.className = 'adm-toast show';
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  };

  /* ─── Load subcats from Firebase on init ─── */
  async function loadAndApplySubcats() {
    const fbData = await loadSubcatsFromFirebase();
    if (!fbData) return;

    // Apply to CATEGORIES
    Object.entries(fbData).forEach(([catId, subs]) => {
      const cat = CATEGORIES.find(c => c.id === catId);
      if (cat && subs.length) cat.subcategories = subs;
    });

    // Save to localStorage
    localStorage.setItem(SUBCATS_KEY, JSON.stringify(fbData));

    // Re-render site
    if (typeof renderCategories === 'function') renderCategories();
  }

  /* ─── Hook into admin open ─── */
  const _orig = window.openAdminPanel;
  window.openAdminPanel = function() {
    if (typeof _orig === 'function') _orig();
    setTimeout(() => {
      loadAndApplySubcats();
      initSubcatEditor();
    }, 150);
  };

  /* ─── Hook into showAdmSection ─── */
  const _origSection = window.showAdmSection;
  window.showAdmSection = function(name) {
    if (typeof _origSection === 'function') _origSection(name);
    if (name === 'categories') {
      setTimeout(initSubcatEditor, 50);
    }
  };

  /* ─── Also load subcats on site boot (for visitors) ─── */
  window.addEventListener('load', () => {
    // Apply stored subcats from localStorage immediately
    const stored = localStorage.getItem(SUBCATS_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      Object.entries(data).forEach(([catId, subs]) => {
        const cat = CATEGORIES.find(c => c.id === catId);
        if (cat && subs.length) cat.subcategories = subs;
      });
    }
    // Then load from Firebase (async, will update if different)
    if (window.__fbReady && window.FB) loadAndApplySubcats();
  });

})();

/* ═══════════════════════════════════════════════
   IMAGE UPLOAD FROM PC
═══════════════════════════════════════════════ */

/* ─── Switch between upload/url tabs ─── */
window.admSwitchImgTab = function(tab) {
  const uploadArea = document.getElementById('imgUploadArea');
  const urlArea    = document.getElementById('imgUrlArea');
  const tabUpload  = document.getElementById('imgTabUpload');
  const tabUrl     = document.getElementById('imgTabUrl');
  if (!uploadArea) return;

  if (tab === 'upload') {
    uploadArea.style.display = 'flex';
    urlArea.style.display    = 'none';
    tabUpload.classList.add('active');
    tabUrl.classList.remove('active');
  } else {
    uploadArea.style.display = 'none';
    urlArea.style.display    = 'block';
    tabUpload.classList.remove('active');
    tabUrl.classList.add('active');
    setTimeout(() => document.getElementById('adm-p-image-url')?.focus(), 50);
  }
};

/* ─── Handle file upload — convert to base64 ─── */
window.admHandleFileUpload = function(input) {
  const file = input.files?.[0];
  if (!file) return;

  // Validate size (5MB max)
  if (file.size > 5 * 1024 * 1024) {
    alert('Файл слишком большой. Максимум 5MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result; // data:image/...;base64,...

    // Set hidden field
    const hidden = document.getElementById('adm-p-image');
    if (hidden) hidden.value = base64;

    // Show preview in upload area
    const area        = document.getElementById('imgUploadArea');
    const placeholder = document.getElementById('admUploadPlaceholder');
    if (area) {
      area.classList.add('has-image');
      // Remove old preview
      area.querySelector('.adm-upload-preview')?.remove();
      area.querySelector('.adm-upload-change')?.remove();
      if (placeholder) placeholder.style.display = 'none';

      const img = document.createElement('img');
      img.src       = base64;
      img.className = 'adm-upload-preview';
      img.alt       = 'Preview';
      area.appendChild(img);

      const changeHint = document.createElement('div');
      changeHint.className   = 'adm-upload-change';
      changeHint.textContent = 'Нажми чтобы изменить';
      area.appendChild(changeHint);
    }

    // Also update image preview box if exists
    const preview = document.getElementById('admImgPreview');
    const wrap    = document.getElementById('admImgPreviewWrap');
    if (preview && wrap) {
      preview.src        = base64;
      wrap.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
};

/* ─── URL input syncs to hidden field ─── */
window.admUpdateImgPreview = function() {
  const urlInput = document.getElementById('adm-p-image-url');
  const hidden   = document.getElementById('adm-p-image');
  const url      = (urlInput?.value || '').trim();

  if (url && hidden) hidden.value = url;

  // Preview
  const wrap    = document.getElementById('admImgPreviewWrap');
  const preview = document.getElementById('admImgPreview');
  if (wrap && preview) {
    wrap.style.display = url ? 'block' : 'none';
    if (url) preview.src = url;
  }
};

/* ─── Load image when editing existing product ─── */
const _origOpenAdmModal3 = window.openAdmProductModal;
window.openAdmProductModal = function(product) {
  _origOpenAdmModal3(product);

  setTimeout(() => {
    const uploadArea  = document.getElementById('imgUploadArea');
    const urlArea     = document.getElementById('imgUrlArea');
    const placeholder = document.getElementById('admUploadPlaceholder');
    const hidden      = document.getElementById('adm-p-image');

    // Reset upload area
    if (uploadArea) {
      uploadArea.classList.remove('has-image');
      uploadArea.querySelectorAll('.adm-upload-preview,.adm-upload-change').forEach(el => el.remove());
      if (placeholder) placeholder.style.display = 'flex';
    }

    const imgVal = product?.image || '';
    if (hidden) hidden.value = imgVal;

    if (imgVal) {
      if (imgVal.startsWith('data:')) {
        // Base64 — show in upload area
        window.admSwitchImgTab('upload');
        if (uploadArea) {
          uploadArea.classList.add('has-image');
          if (placeholder) placeholder.style.display = 'none';
          const img = document.createElement('img');
          img.src = imgVal; img.className = 'adm-upload-preview';
          uploadArea.appendChild(img);
          const ch = document.createElement('div');
          ch.className = 'adm-upload-change'; ch.textContent = 'Нажми чтобы изменить';
          uploadArea.appendChild(ch);
        }
      } else {
        // URL — show in url tab
        window.admSwitchImgTab('url');
        const urlInput = document.getElementById('adm-p-image-url');
        if (urlInput) urlInput.value = imgVal;
        const wrap = document.getElementById('admImgPreviewWrap');
        const prev = document.getElementById('admImgPreview');
        if (wrap && prev) { wrap.style.display = 'block'; prev.src = imgVal; }
      }
    } else {
      window.admSwitchImgTab('upload');
    }
  }, 100);
};
