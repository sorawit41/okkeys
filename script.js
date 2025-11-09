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
        description: 'เข้าร่วมหน่วย Helldivers และต่อสู้เพื่ออิสรภาพในกาแล็กซีที่เต็มไปด้วยศัตรู',
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
        image: 'https://cms-assets.xboxservices.com/assets/62/6d/626d1db3-32b8-43bc-adbb-63ee3bb564ad.jpg?n=XboxGamePass-Poster-720x1080.jpg&q=90&o=f&w=80&h=128',
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
        grid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = createProductCardHTML(product);
        grid.appendChild(productCard);
    });
}

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
    
    // อัปเดตหน้า Checkout ถ้าเราอยู่ที่นั่น
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

// (ใหม่) ฟังก์ชันสำหรับ Dropdown
function handleDropdown() {
    const dropdown = document.getElementById('platform-dropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        // (ใหม่) คลิกที่อื่นเพื่อปิด
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
}

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
    
    // อัปเดตยอดเงินในทุกที่ที่ใช้ .payment-amount
    document.querySelectorAll('.payment-amount').forEach(el => {
        el.textContent = `${totalPrice.toFixed(2)} ฿`;
    });
    
    // รีเซ็ตการผ่อนเมื่อมีการเปลี่ยนแปลงตะกร้า
    const installmentToggle = document.getElementById('installment-toggle');
    if (installmentToggle) installmentToggle.checked = false;
    document.getElementById('installment-options')?.classList.add('hidden');
    document.getElementById('installment-details').innerHTML = '';
}

// ตรวจสอบว่าเราอยู่หน้าไหน
const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'index.html' || currentPage === '') {
    // --- หน้าแรก ---
    const bestSellers = allProducts.filter(p => p.tags.includes('Best Seller'));
    renderProductCarousel(bestSellers, 'product-carousel-bestsellers');
    
    const specialDeals = allProducts.filter(p => p.tags.includes('Special Deal'));
    renderSpecialDeals(specialDeals, 'deals-grid-container'); 
    
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    let currentHeroSlide = 0;

    function showHeroSlide(index) {
        if (!heroSlides.length) return;
        heroSlides.forEach(slide => slide.classList.remove('active'));
        if (index >= heroSlides.length) currentHeroSlide = 0;
        else if (index < 0) currentHeroSlide = heroSlides.length - 1;
        else currentHeroSlide = index;
        heroSlides[currentHeroSlide].classList.add('active');
    }
    if (heroNext) heroNext.addEventListener('click', () => showHeroSlide(currentHeroSlide + 1));
    if (heroPrev) heroPrev.addEventListener('click', () => showHeroSlide(currentHeroSlide - 1));

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
    // --- หน้า Store ---
    const filterBar = document.getElementById('filter-bar');
    
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

} else if (currentPage === 'platform.html') {
    // --- หน้า Platform ---
    const urlParams = new URLSearchParams(window.location.search);
    const platform = urlParams.get('platform');
    
    if (platform) {
        document.title = `${platform} Games - OK-IT Game Store`;
        const titleEl = document.getElementById('platform-title');
        if (titleEl) titleEl.textContent = `เกมสำหรับ ${platform}`;
        
        const platformProducts = allProducts.filter(p => p.platform === platform);
        renderProductGrid(platformProducts, 'product-grid-platform');
    }

} else if (currentPage === 'topup.html') {
    // --- หน้า Top-up ---
    const topupProducts = allProducts.filter(p => p.type === 'Top-up');
    renderProductGrid(topupProducts, 'product-grid-topup');

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
    // --- (ใหม่) Logic หน้าชำระเงิน ---
    
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const paymentDetails = document.querySelectorAll('.payment-method-details');
    const allPaymentAmounts = document.querySelectorAll('.payment-amount');
    const installmentToggle = document.getElementById('installment-toggle');
    const installmentOptions = document.getElementById('installment-options');
    const installmentMonthRadios = document.querySelectorAll('input[name="installment"]');
    const installmentDetailsEl = document.getElementById('installment-details');
    
    let currentTotal = 0; 

    // 1. ฟังก์ชันอัปเดตยอดเงิน
    function updatePaymentAmount(price) {
        const formattedPrice = `${price.toFixed(2)} ฿`;
        allPaymentAmounts.forEach(el => {
            el.textContent = formattedPrice;
        });
    }
    
    // (ย้าย renderCheckoutSummary มาไว้ใน if นี้)
    // 2. ฟังก์ชัน Render สรุปตะกร้า
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
        
        currentTotal = getCartTotal(); // อัปเดตยอดรวมปัจจุบัน
        checkoutTotalPriceEl.textContent = `${currentTotal.toFixed(2)} ฿`;
        updatePaymentAmount(currentTotal); // อัปเดตยอดเงินในปุ่มและที่อื่นๆ
        resetInstallments(); // รีเซ็ตการผ่อน
    }

    // 3. Logic เลือกช่องทางชำระเงิน
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

    // 4. Logic การผ่อนชำระ
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
        installmentDetailsEl.innerHTML = '';
        installmentMonthRadios.forEach(radio => radio.checked = false);
        updatePaymentAmount(getCartTotal()); 
    }

    installmentToggle.addEventListener('change', () => {
        if (installmentToggle.checked) {
            installmentOptions.classList.remove('hidden');
            document.querySelector('input[name="payment"][value="card"]').click();
        } else {
            installmentOptions.classList.add('hidden');
            resetInstallments();
        }
    });

    installmentMonthRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const months = parseInt(radio.value);
            calculateInstallment(getCartTotal(), months);
        });
    });
    
    // โหลดครั้งแรก
    renderCheckoutSummary();
}

// --- โหลด Dropdown (ทำงานทุกหน้า) ---
handleDropdown();

// --- โหลดตะกร้าครั้งแรก (ทำงานทุกหน้า) ---
renderCart();