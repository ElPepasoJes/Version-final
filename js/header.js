// Crear el header dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center gap-2 text-2xl font-bold">
                    <i class="fas fa-gamepad text-3xl"></i>
                    <span>VideoGamesMVP</span>
                </div>
                <div class="hamburger hidden flex-col gap-1 cursor-pointer" onclick="toggleMenu()">
                    <span class="w-6 h-0.5 bg-white rounded transition-all"></span>
                    <span class="w-6 h-0.5 bg-white rounded transition-all"></span>
                    <span class="w-6 h-0.5 bg-white rounded transition-all"></span>
                </div>
                <nav id="mainNav" class="flex gap-8 items-center">
                    <a href="index.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">Novedades</a>
                    <a href="PS5.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">PS5</a>
                    <a href="PS4.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">PS4</a>
                    <a href="Nintendo.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">Nintendo Switch</a>
                    <a href="Juegos.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">Juegos</a>
                    <a href="contacto.html" class="hover:bg-white/20 px-4 py-2 rounded-lg transition-all font-medium">Contacto</a>
                    <a href="#" class="cart-btn bg-white text-blue-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all" onclick="toggleCart(); return false;">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count bg-red-500 text-white rounded-full px-2 py-0.5 text-sm min-w-[20px] text-center" id="cartCount">0</span>
                    </a>
                </nav>
            </div>
        </header>

        <style>
            @media (max-width: 768px) {
                .hamburger {
                    display: flex !important;
                }
                
                #mainNav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #1e40af;
                    flex-direction: column;
                    padding: 1rem;
                    gap: 0;
                }
                
                #mainNav.active {
                    display: flex;
                }
                
                #mainNav a {
                    width: 100%;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(8px, 8px);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            }
        </style>
    `;
    
    document.getElementById('header').innerHTML = headerHTML;
    
    // Cargar el carrito si existe
    loadCartCount();
});

function loadCartCount() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cart = JSON.parse(savedCart);
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartCountEl = document.getElementById('cartCount');
            if (cartCountEl) {
                cartCountEl.textContent = totalItems;
            }
        }
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
    }
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function toggleCart() {
    // Redirigir a index con el carrito abierto
    localStorage.setItem('openCart', 'true');
    window.location.href = 'index.html';
}