// Social Media Links Injector
// This script adds LinkedIn and GitHub icons to the RTD theme sidebar

(function() {
    'use strict';
    
    // Configuration
    const config = {
        email: {
            url: 'mailto:alvaro.riquelme@uai.cl',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>`,
            title: 'Email'
        },
        linkedin: {
            url: 'https://www.linkedin.com/in/álvaro-riquelme-sandoval-53bb5b121/',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>`,
            title: 'LinkedIn Profile'
        },
        github: {
            url: 'https://github.com/arqlm',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>`,
            title: 'GitHub Profile'
        },
        scholar: {
            url: 'https://scholar.google.com/citations?user=JiRzi5EAAAAJ&hl=en',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L1 7l4 2.18v6L12 19l7-3.82v-6L23 7l-11-6zM18.5 9L12 12 5.5 9 12 6l6.5 3zM12 16.2l-5-2.7V10l5 2.7L17 10v3.5l-5 2.7z"/>
            </svg>`,
            title: 'Google Scholar'
        },
        orcid: {
            url: 'https://orcid.org/0000-0003-1332-8809',
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947-.525 0-.946-.422-.946-.947 0-.516.421-.947.946-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.794-1.313 3.794-3.722 0-2.2-1.297-3.722-3.794-3.722h-2.297z"/>
            </svg>`,
            title: 'ORCID Profile'
        }
    };
    
    // CSS styles for social links
    const styles = `
        .social-links-js {
            text-align: center;
            margin: 15px 10px 10px 10px;
            padding: 10px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            white-space: nowrap;
            overflow-x: auto;
        }
        
        .social-link-js {
            display: inline-block;
            margin: 0 4px;
            padding: 6px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            width: 36px;
            height: 36px;
            position: relative;
            flex-shrink: 0;
        }
        
        .social-link-js:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon-js {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: filter 0.3s ease;
        }
        
        .social-link-js.linkedin:hover .social-icon-js {
            filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(1706%) hue-rotate(183deg) brightness(92%) contrast(85%);
        }
        
        .social-link-js.github:hover .social-icon-js {
            filter: brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(0%) hue-rotate(296deg) brightness(94%) contrast(89%);
        }
        
        .social-link-js.email:hover .social-icon-js {
            filter: brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(7493%) hue-rotate(4deg) brightness(97%) contrast(109%);
        }
        
        .social-link-js.scholar:hover .social-icon-js {
            filter: brightness(0) saturate(100%) invert(52%) sepia(98%) saturate(1852%) hue-rotate(198deg) brightness(103%) contrast(103%);
        }
        
        .social-link-js.orcid:hover .social-icon-js {
            filter: brightness(0) saturate(100%) invert(64%) sepia(25%) saturate(2158%) hue-rotate(89deg) brightness(95%) contrast(87%);
        }
        
        @media (max-width: 768px) {
            .social-links-js {
                margin: 10px 5px;
                padding: 8px 0;
            }
            
            .social-link-js {
                margin: 0 3px;
                padding: 5px;
                width: 32px;
                height: 32px;
            }
            
            .social-icon-js {
                width: 18px;
                height: 18px;
            }
        }
    `;
    
    // Function to inject CSS
    function injectStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    // Function to create social links HTML with name
    function createSocialLinks() {
        // Remove any existing name block to prevent duplicates
        const oldName = document.querySelector('.social-name-block');
        if (oldName && oldName.parentNode) {
            oldName.parentNode.removeChild(oldName);
        }

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';

        // Name block
        const nameDiv = document.createElement('div');
        nameDiv.textContent = 'Álvaro I. Riquelme';
        nameDiv.className = 'social-name-block';
    nameDiv.style.fontWeight = 'bold';
    nameDiv.style.fontSize = '1.15em';
    nameDiv.style.marginBottom = '6px';
    nameDiv.style.marginTop = '2px';
    nameDiv.style.letterSpacing = '0.5px';
    nameDiv.style.textAlign = 'center';
    nameDiv.style.fontFamily = 'Palatino Linotype, Palatino, serif';
        wrapper.appendChild(nameDiv);

        // Social links
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-links-js';
        Object.keys(config).forEach(platform => {
            const link = document.createElement('a');
            link.href = config[platform].url;
            link.target = '_blank';
            link.className = `social-link-js ${platform}`;
            link.title = config[platform].title;
            link.innerHTML = `<div class=\"social-icon-js\">${config[platform].icon}</div>`;
            socialContainer.appendChild(link);
        });
        wrapper.appendChild(socialContainer);
        return wrapper;
    }
    
    // Function to inject social links into the sidebar
    function injectSocialLinks() {
        // Try multiple selectors for different RTD theme versions
        const selectors = [
            '.wy-side-nav-search',
            '.wy-nav-side .wy-side-nav-search',
            'nav.wy-nav-side .wy-side-nav-search',
            '.rst-versions'
        ];
        
        let targetElement = null;
        
        for (const selector of selectors) {
            targetElement = document.querySelector(selector);
            if (targetElement) {
                console.log('Found target element:', selector);
                break;
            }
        }
        
        if (targetElement) {
            // Remove existing social links if they exist
            const existingSocial = targetElement.querySelector('.social-links-js');
            if (existingSocial) {
                existingSocial.remove();
            }
            
            const socialLinks = createSocialLinks();
            targetElement.appendChild(socialLinks);
            console.log('Social links injected successfully');
        } else {
            console.warn('Could not find suitable location to inject social links');
            // Fallback: try to inject into sidebar
            const sidebar = document.querySelector('.wy-nav-side');
            if (sidebar) {
                const socialLinks = createSocialLinks();
                sidebar.insertBefore(socialLinks, sidebar.firstChild);
                console.log('Social links injected into sidebar as fallback');
            }
        }
    }
    
    // Main initialization function
    function init() {
        injectStyles();
        injectSocialLinks();
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Also run when the page is fully loaded (for dynamic content)
    window.addEventListener('load', function() {
        // Small delay to ensure all RTD theme elements are loaded
        setTimeout(init, 100);
    });
    
})();
