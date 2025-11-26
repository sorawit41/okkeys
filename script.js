// ========== 1. ฐานข้อมูลสินค้าทั้งหมด (อัปเดต) ==========
const allProducts = [
    {
        id: 1,
        name: 'EA SPORTS FC 26 - 5900 FC Points',
        platform: 'Xbox',
        type: 'Top-up',
        price: 1750.00,
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3170610/header.jpg?t=1752684565',
        description: 'เติม 5900 FC Points สำหรับเกม EA SPORTS FC 26 บนแพลตฟอร์ม Xbox One และ Xbox Series X/S',
        tags: ['Top-up'],
        genres: ['Sport'] // (ใหม่)
    },
    {
        id: 2,
        name: 'Stellar Blade - Deluxe Edition',
        platform: 'PlayStation',
        type: 'Game',
        price: 2490.00,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202401/2211/40e7cfd126a11fe5118310ebce6d9b3a23e7cabaca717217.png',
        description: 'สัมผัสประสบการณ์เกม Action RPG สุดมันส์ในฐานะ EVE กับภารกิจกอบกู้โลกใน Stellar Blade',
        tags: ['Best Seller'],
        genres: ['Action', 'RPG'] // (ใหม่)
    },
    {
        id: 3,
        name: 'Elden Ring: Shadow of the Erdtree',
        platform: 'PC',
        type: 'DLC',
        price: 1190.00,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202412/1301/308f8421ff74f3b061b231defc364d3f01e1710ea6fe6876.png',
        description: 'ส่วนขยายที่ทุกคนรอคอยของ Elden Ring ที่จะพาคุณไปสู่ดินแดนเงา (Shadow Land)',
        tags: ['Special Deal', 'DLC'],
        genres: ['Action', 'RPG', 'Open World'], // (ใหม่)
        largeImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202412/1301/308f8421ff74f3b061b231defc364d3f01e1710ea6fe6876.png',
        discount: '-15%'
    },
    {
        id: 4,
        name: 'Black Myth: Wukong',
        platform: 'PC',
        type: 'Game',
        price: 1899.00,
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/page_bg_raw.jpg?t=1760601605',
        description: 'เกม Action RPG ที่สร้างจากตำนานไซอิ๋ว สวมบทบาทเป็นเห้งเจีย (Wukong)',
        tags: ['Best Seller'],
        genres: ['Action', 'RPG', 'Soul-like'] // (ใหม่)
    },
    {
        id: 5,
        name: 'Nintendo eShop Card $50',
        platform: 'Nintendo',
        type: 'Top-up',
        price: 1650.00,
        image: 'https://cdn.salla.sa/nEddBy/SzsRGaASP53QX4QXbCAa2Lhfh2aEZoK1WBLHqioB.png',
        description: 'บัตรเติมเงินมูลค่า $50 สำหรับ Nintendo eShop',
        tags: ['Top-up'],
        genres: ['Top-up'] // (ใหม่)
    },
    {
        id: 6,
        name: 'Helldivers 2',
        platform: 'PlayStation',
        type: 'Game',
        price: 1490.00,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202509/0421/7b29684b4459ddccd5f00633d21f58cbaad699b955a43fda.jpg',
        description: 'เข้าร่วมหน่วย Helldivers และต่อสู้เพื่ออิสรภาพในกาแล็กซีที่เต็มไปด้วยศตรู',
        tags: ['Best Seller'],
        genres: ['Action', 'Co-op', 'Shooter'] // (ใหม่)
    },
    {
        id: 7,
        name: 'Steam Wallet 1,000 THB',
        platform: 'PC',
        type: 'Top-up',
        price: 1000.00,
        image: 'https://www.getsteamwallet.com/cdn-cgi/image/fit=scale-down,w=1920,q=85,f=auto,anim=false,sharpen=0,onerror=redirect,metadata=none/storage/product_groups/0mGiqUhquq8swhJkA0ELYKt1L5z1Tkr5PS2dAhLd.jpeg?md-1646932855',
        description: 'บัตรเติมเงิน Steam Wallet มูลค่า 1,000 บาท',
        tags: ['Top-up'],
        genres: ['Top-up'] // (ใหม่)
    },
    {
        id: 8,
        name: 'Xbox Game Pass Ultimate - 1 Month',
        platform: 'Xbox',
        type: 'Top-up',
        price: 350.00,
        image: 'https://cms-assets.xboxservices.com/assets/62/6d/626d1db3-32b8-43bc-adbb-63ee3bb564ad.jpg?n=XboxGamePass-Poster-720x1080.jpg?q=90&o=f&w=80&h=128',
        description: 'เล่นเกมกว่า 100+ เกมบน Xbox, PC และ Cloud Gaming',
        tags: ['Top-up'],
        genres: ['Subscription'] // (ใหม่)
    },
    {
        id: 9,
        name: 'Cyberpunk 2077: Ultimate Edition',
        platform: 'PC',
        type: 'Game',
        price: 1495.00,
        image: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
        description: 'เกม Open-world RPG ในมหานคร Night City ที่เต็มไปด้วยอำนาจ, เสน่ห์ และการดัดแปลงร่างกาย',
        tags: ['Special Deal'],
        genres: ['Action', 'RPG', 'Open World'], // (ใหม่)
        largeImage: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
        discount: '-50%'
    },
    {
        id: 10,
        name: 'Battlefield 6',
        platform: 'PC',
        type: 'Game',
        price: 3000.00,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/b/a/battlefield_6_pc_cdkeys_2.png',
        description: 'เกม shooting สมจริง ',
        tags: ['Special Deal'],
        genres: ['Action', 'Shooting', 'Open World'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/b/a/battlefield_6_pc_cdkeys_2.png',
        discount: '-20%'
    },
    {
        id: 11,
        name: 'Palworld PC Key',
        platform: 'PC',
        type: 'Game',
        price: 781.00,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/n/e/new_project_-_2024-01-22t144018.803_1.jpg',
        description: 'เกมแนวเอาชีวิตรอด ประดิษฐ์สิ่งของ และจับมอนสเตอร์แบบโอเพ่นเวิลด์ที่มีผู้เล่นหลายคน ผู้เล่นสามารถสำรวจโลกอันกว้างใหญ่ที่เต็มไปด้วยสิ่งมีชีวิตลึกลับที่เรียกว่า "Pals" ซึ่งมีลักษณะคล้ายสัตว์หรือสัตว์ในตำนาน ',
        tags: ['Special Deal'],
        genres: ['Action', 'Shooting', 'Open World'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/b/a/battlefield_6_pc_cdkeys_2.png',
        discount: '-20%'
    },
    {
        id: 12,
        name: 'Minecraft',
        platform: 'PC',
        type: 'Game',
        price: 1024.00,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/n/e/new_project_88__2_1.jpg',
        description: 'สำรวจโลกที่สร้างขึ้นจากบล็อกทรงลูกบาศก์ที่ไม่มีที่สิ้นสุด และมีปฏิสัมพันธ์กับสภาพแวดล้อมและสิ่งมีชีวิตต่างๆ ในเกมได้อย่างอิสระ ',
        tags: ['Special Deal'],
        genres: ['Open World'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/n/e/new_project_88__2_1.jpg',
        discount: '-60%'
    },
    {
        id: 13,
        name: 'Marvels Spider-Man Remastered',
        platform: 'PC',
        type: 'Game',
        price: 1024.00,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/s/g/sgvsvsfv.jpg',
        description: 'สำรวจโลกที่สร้างขึ้นจากบล็อกทรงลูกบาศก์ที่ไม่มีที่สิ้นสุด และมีปฏิสัมพันธ์กับสภาพแวดล้อมและสิ่งมีชีวิตต่างๆ ในเกมได้อย่างอิสระ ',
        tags: ['Special Deal'],
        genres: ['Open World'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/s/g/sgvsvsfv.jpg',
        discount: '-60%'
    },
    {
        id: 14,
        name: 'Europa Universalis V PC',
        platform: 'PC',
        type: 'Game',
        price: 1724.29,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/e/u/europa_universalis_v.png',
        description: 'สุดยอดเกมวางแผนเชิงลึกจาก Paradox Interactive ที่ให้คุณสร้างจักรวรรดิในแบบของคุณเอง! ',
        tags: ['Special Deal'],
        genres: ['Historical Simulation'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/e/u/europa_universalis_v.png',
        discount: '-20%'
    },
    {
        id: 15,
        name: 'Escape the Backrooms PC',
        platform: 'PC',
        type: 'Game',
        price: 224.11,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/e/s/escape_the_backrooms.jpg',
        description: 'ติดอยู่ในโลกสุดหลอนของ “Backrooms” — ทางเดินสีเหลืองไม่มีที่สิ้นสุด เสียงไฟฟ้าครางอยู่ตลอดเวลา และบางสิ่ง... กำลังตามคุณอยู่',
        tags: ['Special Deal'],
        genres: ['Horror, Survival, Exploration, Co-op'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/e/s/escape_the_backrooms.jpg',
        discount: '-60%'
    },
    {
        id: 16,
        name: 'Detroit: Become Human PC (Steam)',
        platform: 'PC',
        type: 'Game',
        price: 286.40,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/c/o/co2228_7_.jpg',
        description: 'ก้าวเข้าสู่โลกอนาคตที่เทคโนโลยี Android กลายเป็นส่วนหนึ่งของชีวิตประจำวัน Detroit: Become Human พาผู้เล่นควบคุมตัวละคร Android หลายตัว และตัดสินใจทุกทางเลือกที่จะส่งผลต่อชะตากรรมของพวกเขา ',
        tags: ['Special Deal'],
        genres: ['Interactive Drama / Action-Adventure'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/c/o/co2228_7_.jpg',
        discount: '-70%'
    },
    {
        id: 17,
        name: 'DOOM: The Dark Ages Premium Edition PC',
        platform: 'PC',
        type: 'Game',
        price: 3100.00,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/1893e77387eec1591406d71c98f8d4074b7c32664c3bf5af.jpg',
        description: 'ย้อนเวลากลับสู่ยุคมืดแห่งความโหดร้ายใน DOOM: The Dark Ages! ผสมผสานแอ็กชันสุดมันส์และเรื่องราวเข้มข้น คุณจะได้สวมบทนักรบผู้กล้า ต่อสู้กับปีศาจและสิ่งชั่วร้ายที่คุกคามอาณาจักร ค้นพบอาวุธล้ำยุค สกิลใหม่ๆ และภารกิจสุดท้าทายที่จะทดสอบความสามารถของคุณ',
        tags: ['Special Deal'],
        genres: ['Action, Hack and Slash, RPG'], // (ใหม่)
        largeImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/1893e77387eec1591406d71c98f8d4074b7c32664c3bf5af.jpg',
        discount: '-40%'
    },
    {
        id: 18,
        name: 'Atelier Resleriana: The Red Alchemist & the White Guardian Ultimate Edition PC',
        platform: 'PC',
        type: 'Game',
        price: 3080.00,
        image: 'https://www.gamesrig.com/img/index/atelier-resleriana-the-red-alchemist-the-white-guardian-digital-deluxe-edition-cover.jpg',
        description: 'สำรวจโลกที่สร้างขึ้นจากบล็อกทรงลูกบาศก์ที่ไม่มีที่สิ้นสุด และมีปฏิสัมพันธ์กับสภาพแวดล้อมและสิ่งมีชีวิตต่างๆ ในเกมได้อย่างอิสระ ',
        tags: ['Special Deal'],
        genres: ['Role‑playing Game (RPG), Simulation (Shop Management)'], // (ใหม่)
        largeImage: 'https://www.gamesrig.com/img/index/atelier-resleriana-the-red-alchemist-the-white-guardian-digital-deluxe-edition-cover.jpg',
        discount: '-10%'
    },
    {
        id: 19,
        name: 'FAIRY TAIL 2 Ultimate Edition PC Key',
        platform: 'PC',
        type: 'Game',
        price: 3050.17,
        image: 'https://gpstatic.com/acache/72/94/3/us/packshot-970c9bddb9601d0b96192a19abba4582.jpg',
        description: 'ย้อนเข้าสู่บทสรุปของอาณาจักรฟิออร์! ใน FAIRY TAIL 2 Ultimate Edition คุณจะได้ร่วมเดินทางกับกิลด์ Fairy Tail ใน “Alvarez Empire Arc” ซึ่งเป็นพล็อตสุดเข้มข้นของซีรีส์ต้นฉบับ',
        tags: ['Special Deal'],
        genres: ['Action, RPG, Adventure'], // (ใหม่)
        largeImage: 'https://gpstatic.com/acache/72/94/3/us/packshot-970c9bddb9601d0b96192a19abba4582.jpg',
        discount: '-20%'
    },
    {
        id: 20,
        name: 'Monster Hunter Wilds',
        platform: 'PC',
        type: 'Game',
        price: 1823.00,
        image: 'https://imgproxy.eneba.games/zdBPaVwChsLxw3BKNNvtMVRBzV9YrRbBjjPWxSsJcHI/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9X/TlhJa3VlNnhXdWFi/RzZ3dGdPZDlsVDZU/UlJweUNMazN2Mmgw/Rnp6UWNBLmpwZw',
        description: 'สำรวจโลกที่สร้างขึ้นจากบล็อกทรงลูกบาศก์ที่ไม่มีที่สิ้นสุด และมีปฏิสัมพันธ์กับสภาพแวดล้อมและสิ่งมีชีวิตต่างๆ ในเกมได้อย่างอิสระ ',
        tags: ['Special Deal'],
        genres: ['Open World , RPG, Action'], // (ใหม่)
        largeImage: 'https://imgproxy.eneba.games/zdBPaVwChsLxw3BKNNvtMVRBzV9YrRbBjjPWxSsJcHI/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9X/TlhJa3VlNnhXdWFi/RzZ3dGdPZDlsVDZU/UlJweUNMazN2Mmgw/Rnp6UWNBLmpwZw',
        discount: '-60%'
    },
    {
        id: 21,
        name: 'Hogwarts Legacy Deluxe Edition PC (WW)',
        platform: 'PC',
        type: 'Game',
        price: 303.67,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/c/a/capsule_616x353_1__1_3_1_1.jpg',
        description: 'Hogwarts Legacy เป็นเกม แอ็กชัน RPG แบบโลกเปิด (Open-world Action RPG) ที่ผู้เล่นจะได้รับบทเป็นนักเรียนในยุคปี 1800 ของโรงเรียนคาถาพ่อมดแม่มดและเวทมนตร์ศาสตร์ฮอกวอตส์ ผู้เล่นสามารถ สำรวจฮอกวอตส์และพื้นที่โดยรอบ, เรียนรู้คาถา, ปรุงยา, ฝึกฝนสัตว์มหัศจรรย์, และพัฒนาตัวละคร ของตัวเองได้ตามต้องการ',
        tags: ['Special Deal'],
        genres: ['Open World , action , RPG'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/c/a/capsule_616x353_1__1_3_1_1.jpg',
        discount: '-30%'
    },
    {
        id: 22,
        name: 'Valorant 5350 VP ',
        platform: 'PC',
        type: 'Top-up',
        price: 1268.00,
        image: 'https://imgproxy.eneba.games/5IaDcaXFgYHhZ8Gzg_jjY3k1KD_PY3LQXgFMG-lJ35s/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9N/Q2ZQdEF6MmpEbDVN/c2hkTTlWbXphMHRB/b2JCbWZBNkY5TUkw/T19xN1pFLmpwZWc',
        description: '',
        tags: ['Special Deal'],
        genres: ['FPS'], // (ใหม่)
        largeImage: 'https://imgproxy.eneba.games/5IaDcaXFgYHhZ8Gzg_jjY3k1KD_PY3LQXgFMG-lJ35s/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9N/Q2ZQdEF6MmpEbDVN/c2hkTTlWbXphMHRB/b2JCbWZBNkY5TUkw/T19xN1pFLmpwZWc',
        discount: '-60%'
    },
    {
        id: 23,
        name: 'Forza Horizon 5 PS5',
        platform: 'PlayStation',
        type: 'game',
        price: 2384.00,
        image: 'https://cdn.cdkeys.com/496x700/media/catalog/product/u/n/untitled-1_6_8.jpg',
        description: 'Forza Horizon คือซีรีส์เกมแข่งรถแบบโลกเปิดที่ผู้เล่นจะได้สัมผัสกับการแข่งขันที่หลากหลายและสำรวจโลกกว้างอันสวยงาม โดยมีภาคหลักอย่าง Forza Horizon 5 ซึ่งมีฉากหลังเป็นประเทศเม็กซิโก ที่เปิดโอกาสให้ผู้เล่นได้แข่งขันในเทศกาล Horizon Festival ที่มีชื่อเสียง',
        tags: ['Best Seller'],
        genres: ['Open World racing'], // (ใหม่)
        largeImage: 'https://cdn.cdkeys.com/496x700/media/catalog/product/u/n/untitled-1_6_8.jpg',
        discount: ''
    },
];

// ========== 2. ฟังก์ชันสำหรับ Render สินค้า (ใช้ซ้ำ) ==========

function createProductCardHTML(product) {
    return `
        <div class="product-image">
            <a href="product-detail.html?id=${product.id}" class="product-image-link">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <button class="add-to-cart-btn" data-id="${product.id}">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>
        <div class="product-info">
            <span class="product-platform">${product.platform}</span>
            <a href="product-detail.html?id=${product.id}">
                <h3>${product.name}</h3>
            </a>
            <span class="product-price">${product.price.toFixed(2)} ฿</span>
        </div>
    `;
}

// (ฟังก์ชันนี้ยังอยู่ แต่ไม่ได้ถูกเรียกใช้ในหน้า index.html)
function createDealCardHTML(product) {
    return `
    <div class="deal-card">
        <img src="${product.largeImage || product.image}" alt="${product.name}">
        <div class="deal-info">
            <h3>${product.name}</h3>
            <span>${product.discount || ''}</span>
            <a href="product-detail.html?id=${product.id}" class="btn btn-secondary">ซื้อเลย</a>
        </div>
    </div>
    `;
}

function renderProductCarousel(products, containerId) {
    const carousel = document.getElementById(containerId);
    if (!carousel) return;

    carousel.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = createProductCardHTML(product);
        carousel.appendChild(productCard);
    });
}

function renderProductGrid(products, containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = '';
    if (products.length === 0) {
        // (แก้ไข) ถ้าไม่มีสินค้าในหมวดนั้น ให้แสดงข้อความ
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #888; padding: 2rem 0;">ไม่มีสินค้าในหมวดนี้</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = createProductCardHTML(product);
        grid.appendChild(productCard);
    });
}

// (ฟังก์ชันนี้ยังอยู่ แต่ไม่ได้ถูกเรียกใช้ในหน้า index.html)
function renderSpecialDeals(products, containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = '';
    products.forEach(product => {
        grid.innerHTML += createDealCardHTML(product);
    });
}


// ========== 3. ระบบตะกร้าสินค้า (Cart) ==========
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotalPriceEl = document.getElementById('cart-total-price');
const cartEmptyMsg = document.querySelector('.cart-empty');

let cart = JSON.parse(localStorage.getItem('okItCart')) || [];

function saveCart() {
    localStorage.setItem('okItCart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

function renderCart() {
    if (!cartItemsList) return; 

    cartItemsList.innerHTML = ''; 
    if (cart.length === 0) {
        if (cartEmptyMsg) cartEmptyMsg.style.display = 'block';
    } else {
        if (cartEmptyMsg) cartEmptyMsg.style.display = 'none';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">${item.price.toFixed(2)} ฿</span>
                    <div class="cart-item-remove" data-id="${item.id}">ลบออก</div>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    }
    
    const totalPrice = getCartTotal();
    if (cartTotalPriceEl) cartTotalPriceEl.textContent = `${totalPrice.toFixed(2)} ฿`;
    
    saveCart();
}

function addToCart(productId) {
    const gameToAdd = allProducts.find(game => game.id === productId);
    if (gameToAdd) {
        cart.push(gameToAdd);
        renderCart();
        if (cartSidebar) cartSidebar.classList.add('active');
    }
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
    renderCart();
    
    if (document.getElementById('checkout-summary-items')) {
        renderCheckoutSummary();
    }
}

document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
        e.preventDefault();
        const productId = parseInt(addBtn.dataset.id);
        addToCart(productId);
    }
    
    const buyBtn = e.target.closest('.buy-now-btn');
    if (buyBtn) {
        e.preventDefault();
        const productId = parseInt(buyBtn.dataset.id);
        addToCart(productId); 

    }
    
    const removeBtn = e.target.closest('.cart-item-remove');
    if (removeBtn) {
        const productId = parseInt(removeBtn.dataset.id);
        removeFromCart(productId);
    }
});

if (cartBtn) cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (cartSidebar) cartSidebar.classList.add('active');
});
if (closeCartBtn) closeCartBtn.addEventListener('click', () => {
    if (cartSidebar) cartSidebar.classList.remove('active');
});
// ========== 6. Logic สำหรับหน้า Admin (Admin Page Logic) ==========

if (window.location.pathname.includes('admin.html')) {
    
    const adminTableBody = document.getElementById('admin-product-table');
    const productModal = document.getElementById('product-modal');
    const productForm = document.getElementById('product-form');
    const totalCountEl = document.getElementById('total-products-count');

    // Render ตารางสินค้า
    function renderAdminTable() {
        adminTableBody.innerHTML = '';
        allProducts.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>#${product.id}</td>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${product.platform}</td>
                <td>${product.price.toFixed(2)} ฿</td>
                <td>
                    <button class="action-btn btn-edit" onclick="editProduct(${product.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn btn-delete" onclick="deleteProduct(${product.id})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            adminTableBody.appendChild(tr);
        });
        totalCountEl.textContent = allProducts.length;
    }

    // เปิด Modal
    window.openModal = function() { // ใช้ window. เพื่อให้ HTML เรียกใช้ได้
        productForm.reset();
        document.getElementById('p-id').value = ''; // เคลียร์ ID เพื่อบอกว่าเป็นโหมดเพิ่ม
        document.getElementById('modal-title').textContent = 'เพิ่มสินค้าใหม่';
        productModal.classList.add('active');
    }

    // ปิด Modal
    window.closeModal = function() {
        productModal.classList.remove('active');
    }

    // แก้ไขสินค้า
    window.editProduct = function(id) {
        const product = allProducts.find(p => p.id === id);
        if(product) {
            document.getElementById('p-id').value = product.id;
            document.getElementById('p-name').value = product.name;
            document.getElementById('p-price').value = product.price;
            document.getElementById('p-platform').value = product.platform;
            document.getElementById('p-type').value = product.type;
            document.getElementById('p-image').value = product.image;
            document.getElementById('p-desc').value = product.description;
            document.getElementById('p-tags').value = product.tags.join(', ');
            
            document.getElementById('modal-title').textContent = 'แก้ไขสินค้า';
            productModal.classList.add('active');
        }
    }

    // ลบสินค้า
    window.deleteProduct = function(id) {
        if(confirm('คุณแน่ใจหรือไม่ที่จะลบสินค้านี้?')) {
            allProducts = allProducts.filter(p => p.id !== id);
            saveProductsToStorage();
            renderAdminTable();
        }
    }

    // บันทึกฟอร์ม (เพิ่ม/แก้ไข)
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const idInput = document.getElementById('p-id').value;
        const name = document.getElementById('p-name').value;
        const price = parseFloat(document.getElementById('p-price').value);
        const platform = document.getElementById('p-platform').value;
        const type = document.getElementById('p-type').value;
        const image = document.getElementById('p-image').value;
        const desc = document.getElementById('p-desc').value;
        const tags = document.getElementById('p-tags').value.split(',').map(tag => tag.trim());

        if (idInput) {
            // โหมดแก้ไข
            const index = allProducts.findIndex(p => p.id === parseInt(idInput));
            if (index !== -1) {
                allProducts[index] = { 
                    ...allProducts[index], // เก็บค่าเดิมไว้ (เช่น genres)
                    name, price, platform, type, image, description: desc, tags 
                };
            }
        } else {
            // โหมดเพิ่มใหม่
            const newId = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id)) + 1 : 1;
            const newProduct = {
                id: newId,
                name, price, platform, type, image, description: desc, tags,
                genres: [] // ใส่ว่างไว้ก่อน
            };
            allProducts.push(newProduct);
        }

        saveProductsToStorage();
        renderAdminTable();
        closeModal();
    });

    // ปุ่ม Reset Data (กรณีข้อมูลพัง)
    window.resetDefaultData = function() {
        if(confirm('การกระทำนี้จะลบข้อมูลที่แก้ไขทั้งหมดและกลับไปเป็นค่าเริ่มต้น ยืนยันหรือไม่?')) {
            localStorage.removeItem('okItProducts');
            window.location.reload();
        }
    }

    // เรียกทำงานครั้งแรก
    renderAdminTable();
}
// ========== 4. Logic การทำงานตามหน้า (Page-specific Logic) ==========

function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const productDetailContainer = document.getElementById('product-detail-container');

    if (!productId || !productDetailContainer) {
        if(productDetailContainer) productDetailContainer.innerHTML = '<h2 class="section-title">ไม่พบ ID สินค้า</h2>';
        return;
    }

    const product = allProducts.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} - OK-IT Game Store`;
        
        const genreTags = product.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');

        productDetailContainer.innerHTML = `
            <div class="product-detail-grid">
                <div class="product-detail-image">
                    <img src="${(product.largeImage || product.image).replace('300x200', '600x400')}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    
                    <h1>${product.name}</h1>

                    <div class="product-meta-info">
                        <div class="meta-item">
                            <strong>แพลตฟอร์ม:</strong> 
                            <span>${product.platform}</span>
                        </div>
                        <div class="meta-item">
                            <strong>ประเภท:</strong> 
                            <span>${product.type}</span>
                        </div>
                        <div class="meta-item genres">
                            <strong>แนวเกม:</strong> 
                            <div class="genre-tags">
                                ${genreTags}
                            </div>
                        </div>
                    </div>
                    
                    <p class="product-detail-description">
                        ${product.description}
                    </p>
                    <span class="product-detail-price">${product.price.toFixed(2)} ฿</span>
                    
                    <div class="buy-actions">
                        <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                            <i class="fa-solid fa-cart-plus"></i> เพิ่มลงตะกร้า
                        </button>
                        <button class="btn btn-secondary buy-now-btn" data-id="${product.id}">
                            <i class="fa-solid fa-bolt"></i> ซื้อเลย
                        </button>
                    </div>
                    </div>
            </div>
        `;
        
        let relatedProducts = allProducts.filter(
            p => p.platform === product.platform && p.id !== product.id
        );
        
        if (relatedProducts.length < 5) {
            const sameTypeProducts = allProducts.filter(
                p => p.type === product.type && 
                     p.id !== product.id && 
                     !relatedProducts.some(rp => rp.id === p.id) 
            );
            relatedProducts.push(...sameTypeProducts);
        }

        renderProductCarousel(relatedProducts.slice(0, 5), 'product-carousel-related');
        
    } else {
        productDetailContainer.innerHTML = '<h2 class="section-title">ไม่พบสินค้า</h2>';
    }
}


// (ใหม่) ฟังก์ชัน Render สรุปหน้า Checkout
function renderCheckoutSummary() {
    const container = document.getElementById('checkout-summary-items');
    const checkoutTotalPriceEl = document.getElementById('checkout-total-price');
    if (!container || !checkoutTotalPriceEl) return;
    
    container.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #888;">ตะกร้าของคุณว่างเปล่า</p>';
    }

    cart.forEach(item => {
        const itemHTML = `
            <div class="checkout-summary-item">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div class="checkout-summary-info">
                    <h4>${item.name}</h4>
                </div>
                <span class="checkout-summary-price">${item.price.toFixed(2)} ฿</span>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
    
    const totalPrice = getCartTotal();
    checkoutTotalPriceEl.textContent = `${totalPrice.toFixed(2)} ฿`;
    
    document.querySelectorAll('.payment-amount').forEach(el => {
        el.textContent = `${totalPrice.toFixed(2)} ฿`;
    });
    
    const installmentToggle = document.getElementById('installment-toggle');
    if (installmentToggle) installmentToggle.checked = false;
    
    const installmentOptions = document.getElementById('installment-options');
    if (installmentOptions) installmentOptions.classList.add('hidden');
    
    const installmentDetails = document.getElementById('installment-details');
    if (installmentDetails) installmentDetails.innerHTML = '';
}

const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'index.html' || currentPage === '') {

    renderAdditionalHeroSlides();

    const bestSellers = allProducts.filter(p => p.tags.includes('Best Seller'));
    renderProductCarousel(bestSellers, 'product-carousel-bestsellers');
    
    // บรรทัดนี้จะดึงสไลด์ทั้งหมด (รวม 2 อันเดิม และสไลด์ใหม่ที่เพิ่งสร้าง)
    const heroSlides = document.querySelectorAll('.hero-slide'); 
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    let currentHeroSlide = 0;
    let autoSlideInterval; // (เพิ่ม) ประกาศตัวแปรสำหรับ autoplay

    function showHeroSlide(index) {
        if (!heroSlides.length) return;
        
        // (แก้ไข) คำนวณ index ให้วนลูป
        if (index >= heroSlides.length) {
            currentHeroSlide = 0;
        } else if (index < 0) {
            currentHeroSlide = heroSlides.length - 1;
        } else {
            currentHeroSlide = index;
        }

        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroSlides[currentHeroSlide].classList.add('active');
    }

    // (เพิ่ม) ฟังก์ชันสำหรับสไลด์ถัดไป (สำหรับ autoplay)
    function nextHeroSlide() {
        showHeroSlide(currentHeroSlide + 1);
    }

    // (เพิ่ม) ฟังก์ชันเริ่ม autoplay
    function startAutoplay() {
        clearInterval(autoSlideInterval); // เคลียร์ของเก่าก่อน
        autoSlideInterval = setInterval(nextHeroSlide, 5000); // 5000ms = 5 วินาที
    }

    if (heroNext) heroNext.addEventListener('click', () => {
        nextHeroSlide();
        startAutoplay(); // รีเซ็ตตัวนับเวลาเมื่อกดเอง
    });
    if (heroPrev) heroPrev.addEventListener('click', () => {
        showHeroSlide(currentHeroSlide - 1);
        startAutoplay(); // รีเซ็ตตัวนับเวลาเมื่อกดเอง
    });

    startAutoplay(); // (เพิ่ม) เริ่ม autoplay เมื่อโหลดหน้า

    // (แก้ไข) โค้ดเลื่อนสไลด์ autoplay จากครั้งก่อน (ย้ายมารวมกัน)
    // (ส่วนนี้เป็นโค้ดเดิมของคุณที่ผมเพิ่มให้ครั้งที่แล้ว)


    const productCarousel = document.getElementById('product-carousel-bestsellers');
    const productPrevBtn = document.querySelector('.product-prev');
    const productNextBtn = document.querySelector('.product-next');
    
    if (productCarousel) {
        const scrollAmount = 276; 
        productNextBtn.addEventListener('click', () => {
            productCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        productPrevBtn.addEventListener('click', () => {
            productCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

} else if (currentPage === 'store.html') {
    // --- (แก้ไข) Logic หน้า Store เพื่อรองรับการค้นหา ---
    const filterBar = document.getElementById('filter-bar');
    
    const urlParamsStore = new URLSearchParams(window.location.search);
    const searchQuery = urlParamsStore.get('search');

    if (searchQuery) {
        // --- A. ถ้ามี Search Query ---
        
        if (filterBar) {
            filterBar.style.display = 'none'; 
        }

        const grid = document.getElementById('product-grid-store');
        if (grid && grid.parentElement) {
            const searchTitle = document.createElement('h2');
            searchTitle.className = 'section-title';
            searchTitle.textContent = `ผลการค้นหาสำหรับ: "${searchQuery}"`;
            grid.parentElement.insertBefore(searchTitle, grid);
        }

        const lowerCaseQuery = searchQuery.toLowerCase();
        const searchResults = allProducts.filter(p => 
            p.name.toLowerCase().includes(lowerCaseQuery) ||
            p.platform.toLowerCase().includes(lowerCaseQuery)
        );
        
        renderProductGrid(searchResults, 'product-grid-store');
        
    } else {
        // --- B. ถ้าไม่มี Search Query (ทำงานปกติ) ---
        
        function applyStoreFilter(filter) {
            let filteredProducts;
            if (filter === 'all') {
                filteredProducts = allProducts;
            } else {
                filteredProducts = allProducts.filter(p => p.type === filter);
            }
            renderProductGrid(filteredProducts, 'product-grid-store');
        }
        
        if(filterBar) {
            filterBar.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    filterBar.querySelector('.active').classList.remove('active');
                    e.target.classList.add('active');
                    const filter = e.target.dataset.filter;
                    applyStoreFilter(filter);
                }
            });
        }
        
        applyStoreFilter('all');
    }
    // --- (จบส่วนที่แก้ไข) ---

// (แก้ไข) VVVVVVVV อัปเดต logic หน้านี้ VVVVVVVV
} else if (currentPage === 'platform.html') {
    // --- หน้า Platform ---
    const urlParams = new URLSearchParams(window.location.search);
    const platform = urlParams.get('platform');
    
    if (platform) {
        document.title = `${platform} Games - OK-IT Game Store`;
        const titleEl = document.getElementById('platform-title');
        if (titleEl) titleEl.textContent = `เกมสำหรับ ${platform}`;
        
        // (แก้ไข) VVVVVVV กรอง p.type !== 'Top-up' ออก VVVVVVV
        const platformProducts = allProducts.filter(p => p.platform === platform && p.type !== 'Top-up');
        // (แก้ไข) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        renderProductGrid(platformProducts, 'product-grid-platform');
    }
// (แก้ไข) ^^^^^^^^^^ จบส่วนที่แก้ไข ^^^^^^^^^^

} else if (currentPage === 'topup.html') {
    // --- (แก้ไข) หน้า Top-up ---
    
    // 1. กรองสินค้า 'Top-up' ทั้งหมด
    const allTopupProducts = allProducts.filter(p => p.type === 'Top-up');

    // 2. กรองย่อยตามแพลตฟอร์ม
    const psTopup = allTopupProducts.filter(p => p.platform === 'PlayStation');
    const pcTopup = allTopupProducts.filter(p => p.platform === 'PC');
    const xboxTopup = allTopupProducts.filter(p => p.platform === 'Xbox');
    const nintendoTopup = allTopupProducts.filter(p => p.platform === 'Nintendo');

    // 3. Render ลงใน Grid ที่ถูกต้อง (ตาม ID ที่เราตั้งใน html)
    renderProductGrid(psTopup, 'topup-grid-playstation');
    renderProductGrid(pcTopup, 'topup-grid-pc');
    renderProductGrid(xboxTopup, 'topup-grid-xbox');
    renderProductGrid(nintendoTopup, 'topup-grid-nintendo');


} else if (currentPage === 'product-detail.html') {
    // --- หน้า Product Detail ---
    
    renderProductDetail(); 

    const relatedCarousel = document.getElementById('product-carousel-related');
    const relatedPrevBtn = document.getElementById('related-prev');
    const relatedNextBtn = document.getElementById('related-next');

    if (relatedCarousel && relatedPrevBtn && relatedNextBtn) {
        const scrollAmount = 276; 
        
        relatedNextBtn.addEventListener('click', () => {
            relatedCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        relatedPrevBtn.addEventListener('click', () => {
            relatedCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
}
else if (currentPage === 'checkout.html') {
    // --- Logic เดิม: การคำนวณราคาและเลือกวิธีชำระเงิน ---
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const paymentDetails = document.querySelectorAll('.payment-method-details');
    const allPaymentAmounts = document.querySelectorAll('.payment-amount');
    const installmentToggle = document.getElementById('installment-toggle');
    const installmentOptions = document.getElementById('installment-options');
    const installmentMonthRadios = document.querySelectorAll('input[name="installment"]');
    const installmentDetailsEl = document.getElementById('installment-details');
    
    let currentTotal = 0; 

    function updatePaymentAmount(price) {
        const formattedPrice = `${price.toFixed(2)} ฿`;
        allPaymentAmounts.forEach(el => {
            el.textContent = formattedPrice;
        });
    }
    
    function renderCheckoutSummary() {
        const container = document.getElementById('checkout-summary-items');
        const checkoutTotalPriceEl = document.getElementById('checkout-total-price');
        if (!container || !checkoutTotalPriceEl) return;
        
        container.innerHTML = '';
        if (cart.length === 0) {
            container.innerHTML = '<p style="color: #888;">ตะกร้าของคุณว่างเปล่า</p>';
        }

        cart.forEach(item => {
            const itemHTML = `
                <div class="checkout-summary-item">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                    <div class="checkout-summary-info">
                        <h4>${item.name}</h4>
                    </div>
                    <span class="checkout-summary-price">${item.price.toFixed(2)} ฿</span>
                </div>
            `;
            container.innerHTML += itemHTML;
        });
        
        currentTotal = getCartTotal();
        checkoutTotalPriceEl.textContent = `${currentTotal.toFixed(2)} ฿`;
        updatePaymentAmount(currentTotal);
        resetInstallments();
    }

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            paymentDetails.forEach(detail => detail.classList.add('hidden'));
            const targetId = `${radio.value}-details`;
            const targetDetail = document.getElementById(targetId);
            if (targetDetail) {
                targetDetail.classList.remove('hidden');
            }
            
            if (radio.value !== 'card' && installmentToggle && installmentToggle.checked) {
                installmentToggle.checked = false;
                installmentOptions.classList.add('hidden');
                resetInstallments();
            }
        });
    });

    function calculateInstallment(total, months) {
        const interestRate = 0.008; // 0.8%
        const totalWithInterest = total * (1 + (interestRate * months));
        const monthlyPayment = totalWithInterest / months;
        
        if(installmentDetailsEl) {
            installmentDetailsEl.innerHTML = `
                ผ่อน <strong>${monthlyPayment.toFixed(2)} ฿</strong> / เดือน
                (ยอดรวม <strong>${totalWithInterest.toFixed(2)} ฿</strong>)
            `;
        }
        updatePaymentAmount(totalWithInterest); 
    }

    function resetInstallments() {
        if(installmentDetailsEl) installmentDetailsEl.innerHTML = '';
        installmentMonthRadios.forEach(radio => radio.checked = false);
        updatePaymentAmount(getCartTotal()); 
    }

    if(installmentToggle) {
        installmentToggle.addEventListener('change', () => {
            if (installmentToggle.checked) {
                installmentOptions.classList.remove('hidden');
                const cardRadio = document.querySelector('input[name="payment"][value="card"]');
                if(cardRadio) cardRadio.click();
            } else {
                installmentOptions.classList.add('hidden');
                resetInstallments();
            }
        });
    }

    installmentMonthRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const months = parseInt(radio.value);
            calculateInstallment(getCartTotal(), months);
        });
    });
    
    renderCheckoutSummary();

    // --- (ส่วนที่เพิ่มใหม่) Logic การกดชำระเงินและ Gen Code ---
    
    function generateGameKey() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = '';
        for (let i = 0; i < 3; i++) {
            let segment = '';
            for (let j = 0; j < 5; j++) {
                segment += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            key += segment + (i < 2 ? '-' : '');
        }
        return key;
    }

    const checkoutForm = document.querySelector('.payment-form form');
    const successModal = document.getElementById('payment-success-modal');
    const generatedKeysList = document.getElementById('generated-keys-list');
    const closeSuccessBtn = document.getElementById('close-success-modal');

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault(); // หยุดการ Refresh หน้าเว็บ

            // 1. เช็คว่ามีของในตะกร้าไหม
            if (cart.length === 0) {
                alert('ไม่มีสินค้าในตะกร้า');
                return;
            }

            // 2. จำลองการโหลด (Loading)
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> กำลังดำเนินการ...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // 3. สร้างรายการ Key
                if(generatedKeysList) {
                    generatedKeysList.innerHTML = ''; // เคลียร์ของเก่า
                    cart.forEach(item => {
                        const fakeKey = generateGameKey();
                        const keyItemHTML = `
                            <div class="key-item">
                                <span class="game-name-key"><i class="fa-solid fa-gamepad"></i> ${item.name}</span>
                                <span class="code-box">${fakeKey}</span>
                            </div>
                        `;
                        generatedKeysList.innerHTML += keyItemHTML;
                    });
                }

                // 4. แสดง Modal
                if(successModal) successModal.classList.add('active');
                
                // 5. ล้างตะกร้าสินค้า
                cart = [];
                saveCart();
                renderCart(); // อัปเดต Sidebar
                renderCheckoutSummary(); // อัปเดตหน้า Checkout
                
                // คืนค่าปุ่ม
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

            }, 1500); 
        });
    }

    // ปุ่มปิด Modal -> กลับหน้าแรก
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            if(successModal) successModal.classList.remove('active');
            window.location.href = 'index.html'; 
        });
    }
}
// ========== (ใหม่) 5. Logic สำหรับ Search Bar (อัปเกรด) ==========
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const searchResultsList = document.getElementById('search-results-list'); // (ใหม่)

// (ฟังก์ชันเดิม - ใช้สำหรับกดปุ่ม)
function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        // ส่งไปหน้า store.html พร้อมคำค้นหา
        window.location.href = `store.html?search=${encodeURIComponent(query)}`;
    } else {
        // ถ้าช่องค้นหาว่าง ก็แค่ไปหน้า store.html (แบบไม่ค้นหา)
        window.location.href = 'store.html';
    }
}

if (searchButton && searchInput && searchResultsList) {
    
    // 1. (ใหม่) เมื่อ "พิมพ์" ในช่องค้นหา
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        
        if (query === '') {
            searchResultsList.innerHTML = '';
            searchResultsList.classList.add('hidden');
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        // กรองและจำกัดผลลัพธ์แค่ 5 รายการ
        const results = allProducts.filter(p => 
            p.name.toLowerCase().includes(lowerCaseQuery)
        ).slice(0, 5); 

        searchResultsList.innerHTML = ''; // เคลียร์รายการเก่า
        
        if (results.length > 0) {
            results.forEach(product => {
                const itemLink = document.createElement('a');
                itemLink.href = `product-detail.html?id=${product.id}`;
                itemLink.className = 'search-result-item';
                // (ใหม่) แสดงรูปภาพ, ชื่อ, และแพลตฟอร์ม
                itemLink.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <div class="item-name">${product.name}</div>
                        <div class="item-platform">${product.platform}</div>
                    </div>
                `;
                searchResultsList.appendChild(itemLink);
            });
        } else {
            // (ใหม่) แสดงว่า "ไม่พบ"
            searchResultsList.innerHTML = '<div class="search-no-results">ไม่พบสินค้าที่ตรงกัน</div>';
        }

        searchResultsList.classList.remove('hidden'); // แสดงกล่อง
    });

    // 2. (เดิม) เมื่อ "คลิก" ปุ่มค้นหา
    searchButton.addEventListener('click', handleSearch);
    
    // 3. (เดิม) เมื่อ "กด Enter"
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            handleSearch();
        }
    });

    // 4. (ใหม่) เมื่อ "คลิกนอก" ช่องค้นหา ให้ซ่อนรายการ
    document.addEventListener('click', (e) => {
        // ถ้าคลิกนอก .search-bar (ซึ่งเป็น parent)
        if (!e.target.closest('.search-bar')) {
            searchResultsList.classList.add('hidden');
        }
    });

}
// --- (จบส่วน Logic Search Bar) ---


// --- โหลดตะกร้าครั้งแรก (ทำงานทุกหน้า) ---
renderCart();
// ========== เพิ่ม Logic สำหรับหน้า Login และ Profile ==========

if (currentPage === 'login.html') {
    const loginForm = document.querySelector('.login-form-wrapper form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // ป้องกันเว็บรีโหลด

            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            // ตรวจสอบว่ากรอกข้อมูลครบไหม
            if (usernameInput === '' || passwordInput === '') {
                alert('กรุณากรอกอีเมล/ชื่อผู้ใช้ และรหัสผ่าน');
                return;
            }

            // --- เงื่อนไขการ Login ---
            
            // 1. กรณีเป็น Admin
            if (usernameInput === 'admin' && passwordInput === '1234') {
                alert('ยินดีต้อนรับ Admin!');
                // (Optional) บันทึกสถานะว่า login แล้ว
                localStorage.setItem('okItUser', JSON.stringify({ role: 'admin', name: 'Administrator' }));
                
                window.location.href = 'admin.html';
            } 
            // 2. กรณีเป็น User ทั่วไป
            else {
                alert(`ยินดีต้อนรับคุณ ${usernameInput}!`);
                // (Optional) บันทึกสถานะว่า login แล้วเป็น user ทั่วไป
                localStorage.setItem('okItUser', JSON.stringify({ role: 'user', name: usernameInput }));
                
                window.location.href = 'profile.html';
            }
        });
    }
}

// Logic สำหรับหน้า Profile (เพื่อให้กด Logout ได้)
else if (currentPage === 'profile.html') {
    // ดึงชื่อผู้ใช้มาแสดง (ถ้ามี)
    const user = JSON.parse(localStorage.getItem('okItUser'));
    const profileNameEl = document.getElementById('profile-name-display');
    
    if (user && profileNameEl) {
        profileNameEl.textContent = user.name;
    } else if (!user) {
        // ถ้าไม่ได้ login ให้เด้งกลับไปหน้า login
        window.location.href = 'login.html';
    }

    // ปุ่ม Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('okItUser'); // ลบสถานะ login
            alert('ออกจากระบบเรียบร้อย');
            window.location.href = 'login.html';
        });
    }
    function generateGameKey() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = '';
        for (let i = 0; i < 3; i++) {
            let segment = '';
            for (let j = 0; j < 5; j++) {
                segment += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            key += segment + (i < 2 ? '-' : '');
        }
        return key;
    }

    const checkoutForm = document.querySelector('.payment-form form');
    const successModal = document.getElementById('payment-success-modal');
    const generatedKeysList = document.getElementById('generated-keys-list');
    const closeSuccessBtn = document.getElementById('close-success-modal');

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault(); // หยุดการ Refresh หน้าเว็บ

            // 1. เช็คว่ามีของในตะกร้าไหม
            if (cart.length === 0) {
                alert('ไม่มีสินค้าในตะกร้า');
                return;
            }

            // 2. จำลองการโหลด (Loading) เล็กน้อยเพื่อให้ดูสมจริง (ถ้าต้องการ)
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> กำลังดำเนินการ...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // 3. สร้างรายการ Key สำหรับแต่ละเกมในตะกร้า
                generatedKeysList.innerHTML = ''; // เคลียร์ของเก่า
                
                cart.forEach(item => {
                    const fakeKey = generateGameKey();
                    
                    const keyItemHTML = `
                        <div class="key-item">
                            <span class="game-name-key"><i class="fa-solid fa-gamepad"></i> ${item.name}</span>
                            <span class="code-box">${fakeKey}</span>
                        </div>
                    `;
                    generatedKeysList.innerHTML += keyItemHTML;
                });

                // 4. แสดง Modal
                successModal.classList.add('active');
                
                // 5. ล้างตะกร้าสินค้าหลังจากซื้อเสร็จ
                cart = [];
                saveCart();
                renderCart(); // อัปเดต Sidebar (ให้โล่ง)
                renderCheckoutSummary(); // อัปเดตหน้า Checkout (ให้โล่ง)
                
                // คืนค่าปุ่ม
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

            }, 1500); // รอ 1.5 วินาที แล้วค่อยเด้ง Pop-up
        });
    }

    // ปุ่มปิด Modal -> กลับหน้าแรก
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            window.location.href = 'index.html'; // ส่งกลับหน้าแรก
        });
    }
}