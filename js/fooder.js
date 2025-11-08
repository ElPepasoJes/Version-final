// Crear el footer dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="bg-gray-800 text-white py-12 px-6 mt-16">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4 text-blue-400">VideoGamesMVP</h3>
                    <p class="text-gray-300">La mejor página para comprar videojuegos.</p>
                </div>
                
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4 text-blue-400">Enlaces rápidos</h3>
                    <a href="index.html" class="block text-gray-300 hover:text-blue-400 mb-2 transition-colors">Inicio</a>
                    <a href="index.html" class="block text-gray-300 hover:text-blue-400 mb-2 transition-colors">Productos</a>
                    <a href="index.html" class="block text-gray-300 hover:text-blue-400 mb-2 transition-colors">Servicios</a>
                    <a href="contacto.html" class="block text-gray-300 hover:text-blue-400 mb-2 transition-colors">Contacto</a>
                </div>
                
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4 text-blue-400">Contacto</h3>
                    <p class="text-gray-300 mb-2">
                        <i class="fas fa-map-marker-alt mr-2"></i>Calle VideojuegosWP 123
                    </p>
                    <p class="text-gray-300 mb-2">
                        <i class="fas fa-phone mr-2"></i>+51 74390375
                    </p>
                    <p class="text-gray-300 mb-2">
                        <i class="fas fa-envelope mr-2"></i>videojuegosmvp@gmail.com
                    </p>
                </div>
                
                <div class="footer-section">
                    <h3 class="text-xl font-bold mb-4 text-blue-400">Síguenos</h3>
                    <div class="flex gap-4 mb-4">
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all transform hover:-translate-y-1">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-black transition-all transform hover:-translate-y-1">
                            <i class="fab fa-tiktok"></i>
                        </a>
                    </div>
                    <div class="flex gap-2">
                        <input type="email" placeholder="Tu email..." class="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>&copy; 2024 VideoGamesMVP. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
    
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});