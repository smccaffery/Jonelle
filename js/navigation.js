// Function to inject the Header and Footer
function injectLayout() {
    const isBlog = window.location.pathname.includes('/blog/');
    const basePath = isBlog ? '../' : '';

    const headerHTML = `
        <nav>
            <div class="container nav-content">
                <div class="nav-brand-centered">
                    <a href="${basePath}index.html"><img src="${basePath}images/Logo.png" alt="Simply Essential Cleaning Logo" class="nav-logo"></a>
                </div>
                <ul>
                    <li><a href="${basePath}index.html#services">Services</a></li>
                    <li><a href="${basePath}blog/index.html">Blog</a></li>
                    <li><a href="${basePath}index.html#book">Request a Cleaning</a></li>
                </ul>
            </div>
        </nav>
    `;

    const footerHTML = `
        <footer>
            <div class="container">
                <p>&copy; 2026 Simply Essential Cleaning. All rights reserved.</p>
            </div>
        </footer>
    `;

    // Target the placeholder IDs in your HTML
    if (document.getElementById('header-placeholder')) {
        document.getElementById('header-placeholder').innerHTML = headerHTML;
    }
    if (document.getElementById('footer-placeholder')) {
        document.getElementById('footer-placeholder').innerHTML = footerHTML;
    }
}

// Run the function when the page loads
window.onload = injectLayout;