/* styles.js
   Este archivo inyecta dinámicamente los estilos que estaban en css/styles.css
   Mantengo css/styles.css como copia de seguridad.
*/
(function () {
  const css = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f5f5f5;
}

/* Header */
header {
    background: linear-gradient(135deg, #2855d6 0%, #1e40af 100%);
    color: white;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.logo i {
    font-size: 2rem;
}

nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
}

nav a:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
}

.cart-btn {
    background: white !important;
    color: #2855d6 !important;
    padding: 0.6rem 1.2rem !important;
    border-radius: 25px !important;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.cart-btn:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.cart-count {
    background: #ef4444;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.85rem;
    min-width: 20px;
    text-align: center;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
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

/* Main Content */
main {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2rem;
    min-height: 60vh;
}

.page-title {
    text-align: center;
    color: #2855d6;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.product-card {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.product-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.product-name {
    font-size: 1.1rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.5rem;
    text-align: center;
}

.product-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e40af;
    margin: 1rem 0;
}

.add-to-cart-btn {
    background: linear-gradient(135deg, #2855d6 0%, #1e40af 100%);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    box-shadow: 0 4px 6px rgba(40, 85, 214, 0.3);
}

.add-to-cart-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(40, 85, 214, 0.4);
}

/* Cart Modal */
.cart-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 2000;
    animation: fadeIn 0.3s ease;
}

.cart-modal.active {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-content {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    animation: slideUp 0.3s ease;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e5e7eb;
}

.cart-header h2 {
    color: #2855d6;
}

.close-cart {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #6b7280;
    transition: color 0.3s ease;
}

.close-cart:hover {
    color: #ef4444;
}

.cart-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    align-items: center;
}

.cart-item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-item-details {
    flex: 1;
}

.cart-item-name {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.cart-item-price {
    color: #2855d6;
    font-weight: bold;
}

.cart-item-quantity {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 0.5rem;
}

.qty-btn {
    background: #2855d6;
    color: white;
    border: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.qty-btn:hover {
    background: #1e40af;
    transform: scale(1.1);
}

.remove-btn {
    background: #ef4444;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.remove-btn:hover {
    background: #dc2626;
}

.cart-total {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid #2855d6;
    text-align: right;
}

.cart-total h3 {
    font-size: 1.5rem;
    color: #2855d6;
}

.checkout-btn {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
}

.checkout-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(16, 185, 129, 0.4);
}

.empty-cart {
    text-align: center;
    padding: 2rem;
    color: #6b7280;
}

/* Footer */
footer {
    background: #1f2937;
    color: white;
    padding: 3rem 2rem 1rem;
    margin-top: 4rem;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    color: #60a5fa;
}

.footer-section p, .footer-section a {
    color: #d1d5db;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: #60a5fa;
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #374151;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social-icons a:hover {
    background: #60a5fa;
    transform: translateY(-3px);
}

.newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.7rem;
    border: none;
    border-radius: 8px;
    background: #374151;
    color: white;
}

.newsletter-form button {
    background: #2855d6;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.newsletter-form button:hover {
    background: #1e40af;
}

/* Order Confirmation */
.order-confirmation {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    max-width: 500px;
    animation: slideUp 0.3s ease;
}

.order-confirmation i {
    font-size: 4rem;
    color: #10b981;
    margin-bottom: 1rem;
}

.order-confirmation h2 {
    color: #2855d6;
    margin-bottom: 1rem;
}

.order-number {
    background: #eff6ff;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
    font-weight: bold;
    color: #2855d6;
}

/* Contact Page */
.contact-container {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 10px;
}

.contact-item i {
    font-size: 2rem;
    color: #2855d6;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: bold;
    color: #1f2937;
}

.form-group input,
.form-group textarea {
    padding: 0.8rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2855d6;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    background: linear-gradient(135deg, #2855d6 0%, #1e40af 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(40, 85, 214, 0.3);
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(40, 85, 214, 0.4);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    nav {
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

    nav.active {
        display: flex;
    }

    nav a {
        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    main {
        padding: 0 1rem;
    }

    .page-title {
        font-size: 1.5rem;
    }
}`;

  const styleEl = document.createElement("style");
  styleEl.setAttribute("data-generated", "css-injector");
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);
})();
