// Função para carregar componentes HTML
async function loadComponent(componentPath, containerId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${componentPath}: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        
        // Reaplica eventos JavaScript após carregar o componente
        applyComponentScripts(componentPath);
    } catch (error) {
        console.error(error);
    }
}

// Função para reaplicar scripts específicos de cada componente
function applyComponentScripts(componentPath) {
    if (componentPath.includes('header.html')) {
        applyHeaderScripts();
    }
    if (componentPath.includes('footer.html')) {
        applyFooterScripts();
    }
}

// Scripts específicos do header
function applyHeaderScripts() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scripts específicos do footer
function applyFooterScripts() {
    // Aqui você pode adicionar scripts específicos do footer se necessário
}

// Carrega todos os componentes quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    // Carrega header
    if (document.getElementById('header-container')) {
        loadComponent('components/header.html', 'header-container');
    }
    
    // Carrega footer
    if (document.getElementById('footer-container')) {
        loadComponent('components/footer.html', 'footer-container');
    }
});