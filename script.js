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
        genres: ['Sport'] 
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
        genres: ['Action', 'RPG', 'Open World'], 
        largeImage: 'https://wallpapercave.com/wp/wp13797968.jpg',
        discount: '-15%'
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
        genres: ['Action', 'RPG', 'Open World'], 
        largeImage: 'https://images3.alphacoders.com/135/1353566.jpeg',
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
        genres: ['Action', 'RPG', 'Soul-like'] 
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
        genres: ['Top-up'] 
    },
    {
        id: 6,
        name: 'Helldivers 2',
        platform: 'PlayStation',
        type: 'Game',
        price: 1490.00,
        image: 'https://images5.alphacoders.com/133/1337070.jpeg',
        description: 'เข้าร่วมหน่วย Helldivers และต่อสู้เพื่ออิสรภาพในกาแล็กซีที่เต็มไปด้วยศตรู',
        tags: ['Best Seller'],
        genres: ['Action', 'Co-op', 'Shooter'] 
    },
    {
        id: 7,
        name: 'Steam Wallet 1,000 THB',
        platform: 'PC',
        type: 'Top-up',
        price: 1000.00,
        image: 'https://www.getsteamwallet.com/cdn-cgi/image/fit=scale-down,w=1920,q=85,f=auto,anim=false,sharpen=0,onerror=redirect,metadata=none/storage/product_groups/0mGiqUhquq8swhJkA0ELYKt1L5z1Tkr5PS2dAhLd.jpeg?md=1646932855',
        description: 'บัตรเติมเงิน Steam Wallet มูลค่า 1,000 บาท',
        tags: ['Top-up'],
        genres: ['Top-up'] 
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
        genres: ['Subscription'] 
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
        genres: ['Action', 'RPG', 'Open World'], 
        largeImage: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
        discount: '-50%'
    }
    
    
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
        // window.location.href = 'checkout.html'; 
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

// ========== 4. Logic การทำงานตามหน้า (Page-specific Logic) ==========

// (อัปเดต) ฟังก์ชัน Render หน้ารายละเอียดสินค้า
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

// (แก้ไข) VVVVVVVVVV แก้ไขฟังก์ชันนี้ VVVVVVVVVV
function renderAdditionalHeroSlides() {
    // ID ของสินค้าที่มีสไลด์อยู่แล้วใน HTML (Wukong ID 4, Elden Ring ID 3)
    const existingSlideProductIds = [3, 4]; 
    
    // กรองสินค้าที่ "ยังไม่มี" สไลด์ และ "ไม่ใช่ Top-up"
    const productsToRender = allProducts.filter(p => 
        !existingSlideProductIds.includes(p.id) && p.type !== 'Top-up'
    );

    const banner = document.querySelector('.hero-banner');
    const nextButton = document.querySelector('.hero-next'); // เราจะแทรกสไลด์ "ก่อน" ปุ่มนี้

    if (!banner || !nextButton) return; // ถ้าหาไม่เจอ ก็ไม่ทำอะไร

    productsToRender.forEach(product => {
        const newSlide = document.createElement('div');
        newSlide.className = 'hero-slide';
        
        // --- (แก้ไข) VVVVVV เพิ่ม logic ตรวจสอบ videoUrl VVVVVV ---
        if (product.videoUrl) {
            // 1. ถ้ามี videoUrl: สร้างสไลด์แบบ <iframe>
            newSlide.innerHTML = `
                <iframe class="hero-video-iframe" 
                 src="${product.videoUrl}" 
                 frameborder="0" 
                 allow="autoplay; encrypted-media" 
                 allowfullscreen>
                </iframe>
                <div class="video-overlay"></div> 
                <div class="hero-content">
                   <h2>${product.name}</h2>
                   <p>${product.description.split('.')[0]}</p>
                   <a href="product-detail.html?id=${product.id}" class="btn btn-primary">ซื้อเลย</a>
                </div>
            `;
        } else {
            // 2. ถ้าไม่มี videoUrl: สร้างสไลด์แบบ background-image (เหมือนเดิม)
            const imageUrl = product.largeImage || product.image;
            newSlide.style.backgroundImage = `url('${imageUrl}')`;
            newSlide.style.backgroundSize = 'cover';
            newSlide.style.backgroundPosition = 'center';

            newSlide.innerHTML = `
                <div class="video-overlay"></div> 
                <div class="hero-content">
                   <h2>${product.name}</h2>
                   <p>${product.description.split('.')[0]}</p>
                   <a href="product-detail.html?id=${product.id}" class="btn btn-primary">ซื้อเลย</a>
                </div>
            `;
        }
        // --- (แก้ไข) ^^^^^^^^^^ จบ logic ^^^^^^^^^^ ---
        
        banner.insertBefore(newSlide, nextButton);
    });
}
// (แก้ไข) ^^^^^^^^^^ จบส่วนฟังก์ชันที่แก้ไข ^^^^^^^^^^

// ตรวจสอบว่าเราอยู่หน้าไหน
const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'index.html' || currentPage === '') {
    // --- หน้าแรก ---
    
    // (ใหม่) VVVVVVVVVV เรียกใช้ฟังก์ชันที่เพิ่มมา VVVVVVVVVV
    // ต้องเรียกใช้ฟังก์ชันนี้ "ก่อน" ที่จะ querySelectorAll '.hero-slide'
    // เพื่อให้สไลด์ทั้งหมดถูกสร้างขึ้นมาก่อน
    renderAdditionalHeroSlides();
    // (ใหม่) ^^^^^^^^^^ จบส่วนที่เรียกใช้ ^^^^^^^^^^

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

} else if (currentPage === 'checkout.html') {
    // --- Logic หน้าชำระเงิน ---
    
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
    
    // (ฟังก์ชันนี้ซ้ำกับฟังก์ชันด้านบน แต่ไม่เป็นไรเพราะมันถูกเรียกใช้ในหน้านี้เท่านั้น)
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
            
            if (radio.value !== 'card' && installmentToggle.checked) {
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
        
        installmentDetailsEl.innerHTML = `
            ผ่อน <strong>${monthlyPayment.toFixed(2)} ฿</strong> / เดือน
            (ยอดรวม <strong>${totalWithInterest.toFixed(2)} ฿</strong>)
        `;
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
                document.querySelector('input[name="payment"][value="card"]').click();
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