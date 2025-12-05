requirejs.config({
    paths: {
        base: '/static/base',
        plotly: 'https://cdn.plot.ly/plotly-2.12.1.min.js?noext',
    },
});

// Add language switcher to top of page
document.addEventListener('DOMContentLoaded', function() {
    const contentWrap = document.querySelector('.wy-nav-content-wrap');
    if (contentWrap) {
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        
        const link = document.createElement('a');
        link.href = 'https://arqlm.github.io/courses/MIN431/';  // Replace with your English version URL
        link.textContent = 'Versión en Español';
        
        languageSwitcher.appendChild(link);
        contentWrap.insertBefore(languageSwitcher, contentWrap.firstChild);
    }
});
