import './Language';

/**
 * C HAWK CONSTRUCTION - Main Application
 * 
 * @fileoverview Main application entry point and module initialization
 * @version 3.5.1
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * This file serves as the main orchestrator for the C Hawk Construction website.
 * It manages navigation, language switching, conversion forms, image galleries,
 * and FAQ interactions through a modular architecture.
 * 
 * CHANGELOG v3.5.1:
 * - FIXED: Desktop header container animation synchronization on language change
 * - ENHANCED: Hierarchical animation system for smoother transitions
 * - OPTIMIZED: Parent-child animation coordination
 * 
 * CHANGELOG v3.5.0:
 * - ENHANCED: Full-page smooth transitions with staggered animations
 * - IMPROVED: Professional fade out/in for all content sections
 * - ADDED: Dynamic content detection and animation
 * - OPTIMIZED: Smooth, cinematic language switching experience
 */

(function() {
    'use strict';
    
    // ============================================================================
    // APPLICATION CONFIGURATION
    // ============================================================================
    
    /**
     * Application configuration object
     * @const {Object} APP_CONFIG
     * @property {string} name - Application name
     * @property {string} version - Current version
     * @property {string} apiEndpoint - API base URL
     * @property {string} defaultLanguage - Default language code
     * @property {Array<string>} supportedLanguages - List of supported language codes
     * @property {boolean} debug - Debug mode flag
     */
    const APP_CONFIG = {
        name: 'C Hawk Construction',
        version: '3.5.1',
        apiEndpoint: '/api',
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'es'],
        debug: false
    };
    
    // ============================================================================
    // NAVIGATION HANDLER
    // ============================================================================
    
    /**
     * Handles all navigation-related functionality
     * 
     * @class NavigationHandler
     * @description Manages mobile menu, desktop mega menu, submenus, scroll behavior,
     * and responsive navigation states. Ensures proper accessibility and smooth UX.
     */
    class NavigationHandler {
        /**
         * Creates a NavigationHandler instance
         * @param {CHawkApp} app - Reference to main application instance
         */
        constructor(app) {
            this.app = app;
            
            // DOM element references
            this.navToggle = document.getElementById('navToggle');
            this.nav = document.getElementById('nav');
            this.navMobile = document.getElementById('navMobile');
            this.navOverlay = document.getElementById('navOverlay');
            this.servicesMenuTrigger = document.getElementById('servicesMenuTrigger');
            this.servicesSubmenu = document.getElementById('servicesSubmenu');
            this.submenuBack = document.querySelector('.nav__submenu-back');
            this.body = document.body;
            this.html = document.documentElement;
            this.servicesDropdownTrigger = document.getElementById('servicesDropdownTrigger');
            this.megaMenu = document.getElementById('megaMenu');
            
            // Navigation state management
            this.state = {
                isMobileMenuOpen: false,
                isSubmenuOpen: false,
                isMegaMenuOpen: false,
                scrollPosition: 0
            };
            
            this.init();
        }
        
        /**
         * Initialize navigation handler
         * @private
         */
        init() {
            if (!this.navToggle) return;
            this.bindEvents();
            this.handleScroll();
        }
        
        /**
         * Bind all navigation event listeners
         * @private
         */
        bindEvents() {
            // Mobile menu toggle
            this.navToggle?.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
            
            // Services submenu trigger (mobile)
            this.servicesMenuTrigger?.addEventListener('click', (e) => {
                e.preventDefault();
                this.openSubmenu();
            });
            
            // Submenu back button
            this.submenuBack?.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeSubmenu();
            });
            
            // Services dropdown trigger (desktop)
            this.servicesDropdownTrigger?.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMegaMenu();
            });
            
            // Global click handler for closing menus
            document.addEventListener('click', (e) => this.handleOutsideClick(e));
            
            // ESC key handler
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeAll();
            });
            
            // Optimized scroll handler with requestAnimationFrame
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
                scrollTimeout = window.requestAnimationFrame(() => this.handleScroll());
            }, { passive: true });
            
            // Debounced resize handler
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => this.handleResize(), 150);
            }, { passive: true });
            
            // Touch event handlers for mobile menu
            this.navMobile?.addEventListener('touchmove', (e) => {
                if (this.state.isMobileMenuOpen) e.stopPropagation();
            }, { passive: true });
            
            // Touch event handlers for submenu
            this.servicesSubmenu?.addEventListener('touchmove', (e) => {
                if (this.state.isSubmenuOpen) e.stopPropagation();
            }, { passive: true });
        }
        
        /**
         * Toggle mobile menu open/closed state
         * @private
         */
        toggleMobileMenu() {
            this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
            if (this.state.isMobileMenuOpen) {
                this.openMobileMenu();
            } else {
                this.closeMobileMenu();
            }
        }
        
        /**
         * Open mobile menu and prevent body scroll
         * @private
         */
        openMobileMenu() {
            // Save current scroll position
            this.state.scrollPosition = window.pageYOffset || this.html.scrollTop;
            
            // Update ARIA attributes
            this.navToggle.setAttribute('aria-expanded', 'true');
            this.navMobile.setAttribute('aria-hidden', 'false');
            this.navOverlay?.setAttribute('aria-hidden', 'false');
            
            // Prevent body scroll
            this.html.style.overflow = 'hidden';
            this.body.style.overflow = 'hidden';
            
            this.state.isMobileMenuOpen = true;
            this.app.announce('Mobile menu opened');
        }
        
        /**
         * Close mobile menu and restore body scroll
         * @private
         */
        closeMobileMenu() {
            // Update ARIA attributes
            this.navToggle.setAttribute('aria-expanded', 'false');
            this.navMobile.setAttribute('aria-hidden', 'true');
            this.navOverlay?.setAttribute('aria-hidden', 'true');
            
            // Restore body scroll
            this.html.style.overflow = '';
            this.body.style.overflow = '';
            
            // Restore scroll position
            window.scrollTo(0, this.state.scrollPosition);
            
            this.state.isMobileMenuOpen = false;
            
            // Close submenu if open
            if (this.state.isSubmenuOpen) this.closeSubmenu();
            
            this.app.announce('Mobile menu closed');
        }
        
        /**
         * Open services submenu (mobile)
         * @private
         */
        openSubmenu() {
            this.servicesMenuTrigger.setAttribute('aria-expanded', 'true');
            this.servicesSubmenu.setAttribute('aria-hidden', 'false');
            this.body.classList.add('submenu-open');
            this.state.isSubmenuOpen = true;
            this.navToggle.classList.add('nav__toggle--submenu-open');
            this.app.announce('Services submenu opened');
        }
        
        /**
         * Close services submenu (mobile)
         * @private
         */
        closeSubmenu() {
            this.servicesMenuTrigger.setAttribute('aria-expanded', 'false');
            this.servicesSubmenu.setAttribute('aria-hidden', 'true');
            this.body.classList.remove('submenu-open');
            this.state.isSubmenuOpen = false;
            this.navToggle.classList.remove('nav__toggle--submenu-open');
            this.app.announce('Services submenu closed');
        }
        
        /**
         * Toggle mega menu (desktop services dropdown)
         * @private
         */
        toggleMegaMenu() {
            this.state.isMegaMenuOpen = !this.state.isMegaMenuOpen;
            if (this.state.isMegaMenuOpen) {
                this.servicesDropdownTrigger.setAttribute('aria-expanded', 'true');
                this.megaMenu.setAttribute('aria-hidden', 'false');
                this.app.announce('Services menu opened');
            } else {
                this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                this.megaMenu.setAttribute('aria-hidden', 'true');
                this.app.announce('Services menu closed');
            }
        }
        
        /**
         * Handle clicks outside of menus to close them
         * @private
         * @param {Event} e - Click event
         */
        handleOutsideClick(e) {
            // Close mega menu if clicked outside
            if (this.megaMenu && this.state.isMegaMenuOpen) {
                if (!this.megaMenu.contains(e.target) && !this.servicesDropdownTrigger.contains(e.target)) {
                    this.state.isMegaMenuOpen = false;
                    this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                    this.megaMenu.setAttribute('aria-hidden', 'true');
                }
            }
            
            // Close mobile menu if overlay clicked
            if (this.navOverlay && e.target === this.navOverlay) {
                this.closeMobileMenu();
            }
        }
        
        /**
         * Handle scroll events (placeholder for future scroll-based features)
         * @private
         */
        handleScroll() {}
        
        /**
         * Handle window resize events
         * @private
         */
        handleResize() {
            const isDesktop = window.innerWidth >= 1024;
            
            if (isDesktop) {
                // Close mobile menus on desktop
                if (this.state.isMobileMenuOpen) this.closeMobileMenu();
                if (this.state.isSubmenuOpen) this.closeSubmenu();
            } else {
                // Close desktop menus on mobile
                if (this.state.isMegaMenuOpen) {
                    this.state.isMegaMenuOpen = false;
                    if (this.servicesDropdownTrigger) this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                    if (this.megaMenu) this.megaMenu.setAttribute('aria-hidden', 'true');
                }
            }
        }
        
        /**
         * Close all open menus
         * @public
         */
        closeAll() {
            if (this.state.isMobileMenuOpen) this.closeMobileMenu();
            if (this.state.isSubmenuOpen) this.closeSubmenu();
            if (this.state.isMegaMenuOpen) {
                this.state.isMegaMenuOpen = false;
                if (this.servicesDropdownTrigger) this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                if (this.megaMenu) this.megaMenu.setAttribute('aria-hidden', 'true');
            }
        }
        
        /**
         * Get current navigation state
         * @public
         * @returns {Object} Current state object
         */
        getState() {
            return { ...this.state };
        }
        
        /**
         * Cleanup and reset navigation state
         * @public
         */
        destroy() {
            this.html.style.overflow = '';
            this.body.style.overflow = '';
            this.body.classList.remove('submenu-open');
            this.nav?.classList.remove('scrolled');
        }
    }
    
    // ============================================================================
    // TRANSLATION HANDLER
    // ============================================================================
    
    /**
     * Handles internationalization and language switching
     * 
     * @class TranslationHandler
     * @description Manages multi-language support with smooth animated transitions,
     * dynamic content translation, and persistent language preferences.
     */
    class TranslationHandler {
        /**
         * Creates a TranslationHandler instance
         * @param {CHawkApp} app - Reference to main application instance
         * @param {Object} translations - Translation dictionary object
         */
        constructor(app, translations) {
            this.app = app;
            this.translations = translations;
            
            // Translation state management
            this.state = {
                currentLanguage: this.getStoredLanguage() || this.app.config.defaultLanguage || 'en',
                isInitialized: false,
                supportedLanguages: this.app.config.supportedLanguages || ['en', 'es'],
                isTransitioning: false
            };
            
            // Cached DOM elements
            this.elements = {
                languageButtons: null,
                translatedElements: null,
                placeholderElements: null,
                animatableElements: null
            };
            
            // Animation timing configuration
            this.animationConfig = {
                fadeOutDuration: 200,
                contentChangeDuration: 400,
                fadeInDuration: 500,
                staggerDelay: 10,
                totalDuration: 1120
            };
            
            this.init();
        }
        
        /**
         * Initialize translation handler
         * @private
         */
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }
        
        /**
         * Setup translation system after DOM is ready
         * @private
         */
        setup() {
            try {
                this.createLanguageSwitcher();
                this.cacheElements();
                this.bindEvents();
                this.applyLanguage(this.state.currentLanguage);
                this.observeDynamicContent();
                document.documentElement.lang = this.state.currentLanguage;
                this.state.isInitialized = true;
            } catch (error) {
                console.error('[TranslationHandler] Setup error:', error);
            }
        }
        
        /**
         * Create and inject language switcher UI into navigation
         * @private
         */
        createLanguageSwitcher() {
            const currentLang = this.state.currentLanguage;
            
            // Desktop language switcher HTML
            const switcherHTML = `
                <li class="nav__item nav__item--language" role="none">
                    <div class="language-switcher">
                        <button 
                            class="language-switcher__button ${currentLang === 'en' ? 'active' : ''}" 
                            data-lang="en"
                            aria-label="Switch to English"
                            aria-pressed="${currentLang === 'en'}"
                            type="button"
                        >
                            EN
                        </button>
                        <span class="language-switcher__divider" aria-hidden="true">|</span>
                        <button 
                            class="language-switcher__button ${currentLang === 'es' ? 'active' : ''}" 
                            data-lang="es"
                            aria-label="Cambiar a Español"
                            aria-pressed="${currentLang === 'es'}"
                            type="button"
                        >
                            ES
                        </button>
                    </div>
                </li>
            `;
            
            // Inject into desktop navigation
            const desktopNav = document.querySelector('.nav__desktop .nav__list');
            if (desktopNav) {
                desktopNav.insertAdjacentHTML('beforeend', switcherHTML);
            }
            
            // Mobile language switcher HTML
            const mobileSwitcherHTML = `
                <li class="nav__mobile-item nav__mobile-item--language">
                    <div class="language-switcher language-switcher--mobile">
                        <button 
                            class="language-switcher__button ${currentLang === 'en' ? 'active' : ''}" 
                            data-lang="en"
                            aria-label="Switch to English"
                            aria-pressed="${currentLang === 'en'}"
                            type="button"
                        >
                            EN
                        </button>
                        <span class="language-switcher__divider" aria-hidden="true">|</span>
                        <button 
                            class="language-switcher__button ${currentLang === 'es' ? 'active' : ''}" 
                            data-lang="es"
                            aria-label="Cambiar a Español"
                            aria-pressed="${currentLang === 'es'}"
                            type="button"
                        >
                            ES
                        </button>
                    </div>
                </li>
            `;
            
            // Inject into mobile navigation
            const mobileNav = document.querySelector('.nav__mobile-list');
            if (mobileNav) {
                mobileNav.insertAdjacentHTML('beforeend', mobileSwitcherHTML);
            }
        }
        
        /**
         * Cache frequently accessed DOM elements
         * @private
         */
        cacheElements() {
            this.elements.languageButtons = document.querySelectorAll('.language-switcher__button[data-lang]');
            this.elements.translatedElements = document.querySelectorAll('[data-i18n]');
            this.elements.placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
            
            // Elements that will be animated during language switch
            this.elements.animatableElements = document.querySelectorAll(`
                section, 
                .hero, 
                .header,
                header,
                main > *,
                [data-animate],
                .nav__desktop,
                .nav__logo
            `);
        }
        
        /**
         * Bind event listeners to language buttons
         * @private
         */
        bindEvents() {
            this.elements.languageButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = button.dataset.lang;
                    this.switchLanguage(lang);
                });
            });
        }
        
        /**
         * Switch to a different language
         * @public
         * @param {string} lang - Language code to switch to
         */
        switchLanguage(lang) {
            // Validate language
            if (!this.state.supportedLanguages.includes(lang)) return;
            
            // Prevent switching to same language or during transition
            if (lang === this.state.currentLanguage || this.state.isTransitioning) return;
            
            const previousLanguage = this.state.currentLanguage;
            this.state.isTransitioning = true;
            this.animatedLanguageChange(lang, previousLanguage);
        }
        
        /**
         * Perform animated language change with smooth transitions
         * @private
         * @param {string} newLang - New language code
         * @param {string} oldLang - Previous language code
         */
        animatedLanguageChange(newLang, oldLang) {
            document.body.classList.add('language-transitioning');
            
            // Phase 1: Fade out current content
            this.fadeOutPage();
            
            // Phase 2: Change language content (after fade out)
            setTimeout(() => {
                this.state.currentLanguage = newLang;
                this.applyLanguage(newLang);
                this.updateSwitcherUI(newLang);
                this.storeLanguage(newLang);
                document.documentElement.lang = newLang;
            }, this.animationConfig.fadeOutDuration);
            
            // Phase 3: Fade in new content (after content change)
            setTimeout(() => {
                this.fadeInPage();
            }, this.animationConfig.fadeOutDuration + this.animationConfig.contentChangeDuration);
            
            // Phase 4: Cleanup and emit event (after fade in completes)
            setTimeout(() => {
                document.body.classList.remove('language-transitioning');
                this.cleanupAnimations();
                this.state.isTransitioning = false;
                
                // Emit custom event
                const event = new CustomEvent('languageChanged', { 
                    detail: { language: newLang, previousLanguage: oldLang } 
                });
                window.dispatchEvent(event);
                
                this.app.announce(`Language changed to ${newLang === 'en' ? 'English' : 'Spanish'}`);
            }, this.animationConfig.totalDuration);
        }
        
        /**
         * Animate page fade out with staggered timing
         * @private
         */
        fadeOutPage() {
            document.body.classList.add('page-fade-out');
            
            // Apply staggered fade out animation to each element
            this.elements.animatableElements.forEach((element, index) => {
                element.style.transition = `opacity ${this.animationConfig.fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1), transform ${this.animationConfig.fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1)`;
                element.style.transitionDelay = `${index * 20}ms`;
                element.style.opacity = '0';
                element.style.transform = 'translateY(-20px) scale(0.98)';
            });
        }
        
        /**
         * Animate page fade in with staggered timing
         * @private
         */
        fadeInPage() {
            document.body.classList.remove('page-fade-out');
            document.body.classList.add('page-fade-in');
            
            // Restart desktop header animations if on desktop
            const desktopNav = document.querySelector('.nav__desktop');
            const isDesktop = desktopNav && window.innerWidth >= 1220;
            
            if (isDesktop) {
                this.restartDesktopHeaderAnimations();
            }
            
            // Apply staggered fade in animation to each element
            this.elements.animatableElements.forEach((element, index) => {
                element.style.transition = `opacity ${this.animationConfig.fadeInDuration}ms cubic-bezier(0, 0, 0.2, 1), transform ${this.animationConfig.fadeInDuration}ms cubic-bezier(0, 0, 0.2, 1)`;
                element.style.transitionDelay = `${index * this.animationConfig.staggerDelay}ms`;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            });
        }
        
        /**
         * Restart desktop header entrance animations
         * @private
         */
        restartDesktopHeaderAnimations() {
            const navContainer = document.querySelector('.nav__container');
            const navDesktop = document.querySelector('.nav__desktop');
            const logo = document.querySelector('.nav__logo');
            const navItems = document.querySelectorAll('.nav__item');
            const navActions = document.querySelector('.nav__actions');
            
            // Animate navigation container
            if (navContainer) {
                navContainer.style.opacity = '0';
                navContainer.style.transform = 'translateY(-10px)';
                navContainer.offsetHeight; // Force reflow
                navContainer.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
                navContainer.style.opacity = '1';
                navContainer.style.transform = 'translateY(0)';
            }
            
            // Animate desktop navigation
            if (navDesktop) {
                navDesktop.style.opacity = '0';
                navDesktop.offsetHeight; // Force reflow
                navDesktop.style.transition = 'opacity 0.3s ease-out 0.1s';
                navDesktop.style.opacity = '1';
            }
            
            // Animate logo
            if (logo) {
                logo.style.animation = 'none';
                logo.offsetHeight; // Force reflow
                logo.style.animation = 'logo-entrance 0.8s ease-out 0.1s forwards';
            }
            
            // Animate navigation items with stagger
            navItems.forEach((item, index) => {
                item.style.animation = 'none';
                item.offsetHeight; // Force reflow
                const delay = 0.2 + (index * 0.1);
                item.style.animation = `nav-item-entrance 0.6s ease-out ${delay}s forwards`;
            });
            
            // Animate action buttons
            if (navActions) {
                navActions.style.animation = 'none';
                navActions.offsetHeight; // Force reflow
                navActions.style.animation = 'actions-entrance 0.8s ease-out 0.6s forwards';
            }
        }
        
        /**
         * Remove all animation styles after transition completes
         * @private
         */
        cleanupAnimations() {
            document.body.classList.remove('page-fade-in');
            
            // Reset animatable elements
            this.elements.animatableElements.forEach(element => {
                element.style.transition = '';
                element.style.transitionDelay = '';
                element.style.opacity = '';
                element.style.transform = '';
            });
            
            // Reset desktop header elements if on desktop
            const desktopNav = document.querySelector('.nav__desktop');
            if (desktopNav && window.innerWidth >= 1220) {
                const navContainer = document.querySelector('.nav__container');
                const logo = document.querySelector('.nav__logo');
                const navItems = document.querySelectorAll('.nav__item');
                const navActions = document.querySelector('.nav__actions');
                
                if (navContainer) {
                    navContainer.style.transition = '';
                    navContainer.style.opacity = '';
                    navContainer.style.transform = '';
                }
                
                if (desktopNav) {
                    desktopNav.style.transition = '';
                    desktopNav.style.opacity = '';
                }
                
                if (logo) logo.style.animation = '';
                navItems.forEach(item => item.style.animation = '');
                if (navActions) navActions.style.animation = '';
            }
        }
        
        /**
         * Apply translations to all elements with data-i18n attributes
         * @private
         * @param {string} lang - Language code to apply
         */
        applyLanguage(lang) {
            // Translate text content
            this.elements.translatedElements.forEach(element => {
                const key = element.dataset.i18n;
                const translation = this.getTranslation(key, lang);
                
                if (translation) {
                    if (element.tagName === 'OPTION') {
                        element.textContent = translation;
                    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.value = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            });
            
            // Translate placeholder attributes
            this.elements.placeholderElements.forEach(element => {
                const key = element.dataset.i18nPlaceholder;
                const translation = this.getTranslation(key, lang);
                
                if (translation) {
                    element.placeholder = translation;
                }
            });
        }
        
        /**
         * Get translation for a specific key and language
         * @private
         * @param {string} key - Translation key (dot notation supported)
         * @param {string} lang - Language code
         * @returns {string|null} Translated string or null if not found
         */
        getTranslation(key, lang) {
            try {
                // Support dot notation for nested keys (e.g., "nav.home")
                const keys = key.split('.');
                let value = this.translations;
                
                for (const k of keys) {
                    value = value?.[k];
                    if (value === undefined) return null;
                }
                
                return value?.[lang] || null;
            } catch (error) {
                return null;
            }
        }
        
        /**
         * Update language switcher UI to reflect current language
         * @private
         * @param {string} lang - Current language code
         */
        updateSwitcherUI(lang) {
            this.elements.languageButtons.forEach(button => {
                const isActive = button.dataset.lang === lang;
                
                if (isActive) {
                    button.classList.add('active');
                    button.setAttribute('aria-pressed', 'true');
                } else {
                    button.classList.remove('active');
                    button.setAttribute('aria-pressed', 'false');
                }
            });
        }
        
        /**
         * Store language preference in localStorage
         * @private
         * @param {string} lang - Language code to store
         */
        storeLanguage(lang) {
            try {
                localStorage.setItem('preferredLanguage', lang);
            } catch (error) {
                // Silently fail if localStorage is unavailable
            }
        }
        
        /**
         * Retrieve stored language preference from localStorage
         * @private
         * @returns {string|null} Stored language code or null
         */
        getStoredLanguage() {
            try {
                return localStorage.getItem('preferredLanguage');
            } catch (error) {
                return null;
            }
        }
        
        /**
         * Observe DOM for dynamically added translatable content
         * @private
         */
        observeDynamicContent() {
            const observer = new MutationObserver((mutations) => {
                let needsUpdate = false;
                
                // Check if any added nodes need translation
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.hasAttribute?.('data-i18n') || 
                                node.querySelector?.('[data-i18n]') ||
                                node.hasAttribute?.('data-i18n-placeholder') ||
                                node.querySelector?.('[data-i18n-placeholder]')) {
                                needsUpdate = true;
                            }
                        }
                    });
                });
                
                if (needsUpdate) {
                    this.refresh();
                }
            });
            
            // Start observing the document body for changes
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
        
        /**
         * Get current language code
         * @public
         * @returns {string} Current language code
         */
        getCurrentLanguage() {
            return this.state.currentLanguage;
        }
        
        /**
         * Refresh translations by re-caching elements and re-applying language
         * @public
         */
        refresh() {
            this.cacheElements();
            this.applyLanguage(this.state.currentLanguage);
        }
        
        /**
         * Get current translation handler state
         * @public
         * @returns {Object} Current state information
         */
        getState() {
            return {
                currentLanguage: this.state.currentLanguage,
                supportedLanguages: this.state.supportedLanguages,
                isInitialized: this.state.isInitialized,
                isTransitioning: this.state.isTransitioning,
                translatedElementsCount: this.elements.translatedElements?.length || 0,
                placeholderElementsCount: this.elements.placeholderElements?.length || 0,
                languageButtonsCount: this.elements.languageButtons?.length || 0
            };
        }
        
        /**
         * Cleanup and remove translation functionality
         * @public
         */
        destroy() {
            // Remove language switchers from DOM
            document.querySelectorAll('.nav__item--language, .nav__mobile-item--language').forEach(el => {
                el.remove();
            });
            
            this.state.isInitialized = false;
            this.state.isTransitioning = false;
        }
    }
    
    // ============================================================================
    // CONVERSION HANDLER
    // ============================================================================
    
    /**
     * Handles conversion-related functionality (testimonials, forms, CTAs)
     * 
     * @class ConversionHandler
     * @description Manages testimonial rotation, consultation form validation,
     * scroll animations, and interactive card effects in the conversion section.
     */
    class ConversionHandler {
        /**
         * Creates a ConversionHandler instance
         * @param {CHawkApp} app - Reference to main application instance
         */
        constructor(app) {
            this.app = app;
            
            // Testimonial data
            this.testimonials = [
                { name: "Michael Patterson", location: "East Berlin, PA", text: "Outstanding work on our kitchen remodel. The team was professional, on time, and the quality exceeded our expectations. Highly recommend C Hawk!", project: "Kitchen Remodel" },
                { name: "Myriam Valencia", location: "York, PA", text: "Couldn't be happier with our bathroom renovation. From design to completion, everything was perfect. The attention to detail is incredible.", project: "Bathroom Renovation" },
                { name: "Robert Thompson", location: "Harrisburg, PA", text: "C Hawk transformed our entire home. They were respectful, clean, and delivered exactly what they promised. Best decision we made!", project: "Full Home Remodel" },
                { name: "Cesar Olivarez", location: "Lancaster, PA", text: "Professional service from start to finish. Great communication throughout the project. The results speak for themselves - amazing quality!", project: "Kitchen & Bath" },
                { name: "Jennifer Morrison", location: "Gettysburg, PA", text: "We've worked with other contractors before, but C Hawk is in a different league. Licensed, insured, and truly care about their work.", project: "Kitchen Remodel" },
                { name: "Mauricio Herazo", location: "Hanover, PA", text: "Incredible transformation of our master bathroom. The team was courteous, efficient, and the craftsmanship is top-notch. Worth every penny!", project: "Master Bathroom" }
            ];
            
            // Conversion state management
            this.state = { 
                currentTestimonial: 0, 
                isFormSubmitted: false, 
                testimonialInterval: null, 
                scrollObserver: null 
            };
            
            this.elements = {};
            this.init();
        }
        
        /**
         * Initialize conversion handler
         * @private
         */
        init() {
            this.cacheElements();
            if (!this.elements.section) return;
            this.setupScrollAnimations();
            this.setupTestimonials();
            this.setupForm();
            this.setupCardHovers();
        }
        
        /**
         * Cache frequently accessed DOM elements
         * @private
         */
        cacheElements() {
            this.elements = {
                section: document.getElementById('conversion-section'),
                testimonialText: document.getElementById('testimonial-text'),
                testimonialName: document.getElementById('testimonial-name'),
                testimonialMeta: document.getElementById('testimonial-meta'),
                testimonialAvatar: document.getElementById('testimonial-avatar'),
                testimonialDots: document.getElementById('testimonial-dots'),
                form: document.getElementById('consultation-form-element'),
                formContent: document.getElementById('form-content'),
                formSuccess: document.getElementById('form-success'),
                animatedElements: document.querySelectorAll('#conversion-section [data-animate]')
            };
        }
        
        /**
         * Setup scroll-triggered animations using Intersection Observer
         * @private
         */
        setupScrollAnimations() {
            // Fallback for browsers without IntersectionObserver
            if (!('IntersectionObserver' in window)) {
                this.elements.animatedElements.forEach(el => el.classList.add('animate-in'));
                return;
            }
            
            const observerOptions = { 
                threshold: 0.1, 
                rootMargin: '0px 0px -50px 0px' 
            };
            
            this.state.scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        this.state.scrollObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe all animatable elements
            this.elements.animatedElements.forEach(el => this.state.scrollObserver.observe(el));
        }
        
        /**
         * Setup testimonial carousel
         * @private
         */
        setupTestimonials() {
            if (!this.elements.testimonialText) return;
            this.displayTestimonial(0);
            this.createTestimonialDots();
            this.startTestimonialRotation();
        }
        
        /**
         * Display specific testimonial by index
         * @private
         * @param {number} index - Testimonial index to display
         */
        displayTestimonial(index) {
            if (index < 0 || index >= this.testimonials.length) return;
            
            const testimonial = this.testimonials[index];
            this.state.currentTestimonial = index;
            
            // Animate text change
            this.elements.testimonialText.style.animation = 'none';
            setTimeout(() => {
                this.elements.testimonialText.textContent = `"${testimonial.text}"`;
                this.elements.testimonialText.style.animation = 'fadeIn 0.5s ease-in';
            }, 10);
            
            // Update testimonial metadata
            this.elements.testimonialName.textContent = testimonial.name;
            this.elements.testimonialMeta.textContent = `${testimonial.location} • ${testimonial.project}`;
            
            // Generate avatar initials
            const initials = testimonial.name.split(' ').map(n => n[0]).join('');
            this.elements.testimonialAvatar.textContent = initials;
            
            this.updateTestimonialDots(index);
        }
        
        /**
         * Create testimonial navigation dots
         * @private
         */
        createTestimonialDots() {
            if (!this.elements.testimonialDots) return;
            
            this.elements.testimonialDots.innerHTML = '';
            
            this.testimonials.forEach((_, index) => {
                const button = document.createElement('button');
                button.className = 'conversion__dot';
                button.setAttribute('aria-label', `View testimonial ${index + 1}`);
                button.addEventListener('click', () => {
                    this.displayTestimonial(index);
                    this.restartTestimonialRotation();
                });
                
                if (index === 0) button.classList.add('conversion__dot--active');
                
                this.elements.testimonialDots.appendChild(button);
            });
        }
        
        /**
         * Update active state of testimonial dots
         * @private
         * @param {number} activeIndex - Index of active testimonial
         */
        updateTestimonialDots(activeIndex) {
            const dots = this.elements.testimonialDots.querySelectorAll('.conversion__dot');
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('conversion__dot--active');
                } else {
                    dot.classList.remove('conversion__dot--active');
                }
            });
        }
        
        /**
         * Start automatic testimonial rotation
         * @private
         */
        startTestimonialRotation() {
            this.state.testimonialInterval = setInterval(() => {
                const nextIndex = (this.state.currentTestimonial + 1) % this.testimonials.length;
                this.displayTestimonial(nextIndex);
            }, 5000); // Rotate every 5 seconds
        }
        
        /**
         * Restart testimonial rotation (clear and start new interval)
         * @private
         */
        restartTestimonialRotation() {
            if (this.state.testimonialInterval) clearInterval(this.state.testimonialInterval);
            this.startTestimonialRotation();
        }
        
        /**
         * Stop testimonial rotation
         * @public
         */
        stopTestimonialRotation() {
            if (this.state.testimonialInterval) {
                clearInterval(this.state.testimonialInterval);
                this.state.testimonialInterval = null;
            }
        }
        
        /**
         * Setup consultation form validation and submission
         * @private
         */
        setupForm() {
            if (!this.elements.form) return;
            
            // Form submission handler
            this.elements.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
            
            // Field validation on blur
            const inputs = this.elements.form.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('focus', () => this.removeFieldError(input));
            });
        }
        
        /**
         * Validate individual form field
         * @private
         * @param {HTMLElement} field - Form field element to validate
         * @returns {boolean} True if field is valid
         */
        validateField(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            
            // Skip validation for optional empty fields
            if (!isRequired && !value) return true;
            
            let isValid = true;
            let errorMessage = '';
            
            // Validate based on field type
            switch (field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = emailRegex.test(value);
                    errorMessage = 'Please enter a valid email address';
                    break;
                    
                case 'tel':
                    const phoneRegex = /^[\d\s\-\(\)]+$/;
                    isValid = phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
                    errorMessage = 'Please enter a valid phone number';
                    break;
                    
                case 'text':
                    isValid = value.length >= 2;
                    errorMessage = 'Please enter at least 2 characters';
                    break;
                    
                default:
                    if (field.tagName === 'SELECT') {
                        isValid = value !== '';
                        errorMessage = 'Please select an option';
                    } else {
                        isValid = value !== '';
                        errorMessage = 'This field is required';
                    }
            }
            
            // Show error if invalid and required
            if (!isValid && isRequired) {
                this.showFieldError(field, errorMessage);
            } else {
                this.removeFieldError(field);
            }
            
            return isValid;
        }
        
        /**
         * Display validation error for a field
         * @private
         * @param {HTMLElement} field - Form field element
         * @param {string} message - Error message to display
         */
        showFieldError(field, message) {
            field.style.borderColor = '#EF4444';
            field.setAttribute('aria-invalid', 'true');
            
            // Create or update error message element
            let errorEl = field.parentElement.querySelector('.conversion__field-error');
            if (!errorEl) {
                errorEl = document.createElement('span');
                errorEl.className = 'conversion__field-error';
                errorEl.style.color = '#EF4444';
                errorEl.style.fontSize = '0.875rem';
                errorEl.style.marginTop = '0.25rem';
                errorEl.style.display = 'block';
                field.parentElement.appendChild(errorEl);
            }
            errorEl.textContent = message;
        }
        
        /**
         * Remove validation error from a field
         * @private
         * @param {HTMLElement} field - Form field element
         */
        removeFieldError(field) {
            field.style.borderColor = '';
            field.setAttribute('aria-invalid', 'false');
            
            const errorEl = field.parentElement.querySelector('.conversion__field-error');
            if (errorEl) errorEl.remove();
        }
        
        /**
         * Handle form submission
         * @private
         * @param {Event} e - Submit event
         */
        handleFormSubmit(e) {
            const requiredFields = this.elements.form.querySelectorAll('[required]');
            let isFormValid = true;
            
            // Validate all required fields
            requiredFields.forEach(field => {
                if (!this.validateField(field)) isFormValid = false;
            });
            
            // Prevent submission if validation fails
            if (!isFormValid) {
                e.preventDefault();
                this.app.announce('Please correct the errors in the form');
                return;
            }
            
            // Disable submit button and show loading state
            const submitButton = this.elements.form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                const buttonText = submitButton.querySelector('span');
                if (buttonText) buttonText.textContent = 'Sending...';
            }
        }
        
        /**
         * Display form success message
         * @public
         */
        showFormSuccess() {
            this.state.isFormSubmitted = true;
            this.elements.formContent.style.display = 'none';
            this.elements.formSuccess.style.display = 'block';
            this.elements.formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        /**
         * Setup 3D hover effects for conversion cards
         * @private
         */
        setupCardHovers() {
            const cards = document.querySelectorAll('.conversion__card');
            
            cards.forEach(card => {
                // 3D tilt effect on mouse move
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate rotation based on cursor position
                    const deltaX = (x - centerX) / 50;
                    const deltaY = (y - centerY) / 50;
                    
                    card.style.transform = `translateY(-10px) scale(1.02) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
                });
                
                // Reset transform on mouse leave
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                });
            });
        }
        
        /**
         * Reset consultation form to initial state
         * @public
         */
        resetForm() {
            if (this.elements.form) this.elements.form.reset();
            this.state.isFormSubmitted = false;
            if (this.elements.formContent) this.elements.formContent.style.display = 'block';
            if (this.elements.formSuccess) this.elements.formSuccess.style.display = 'none';
        }
        
        /**
         * Get current conversion handler state
         * @public
         * @returns {Object} Current state object
         */
        getState() {
            return { ...this.state };
        }
        
        /**
         * Cleanup and reset conversion functionality
         * @public
         */
        destroy() {
            this.stopTestimonialRotation();
            if (this.state.scrollObserver) this.state.scrollObserver.disconnect();
        }
    }
    
    // ============================================================================
    // GALLERY HANDLER
    // ============================================================================
    
    /**
     * Handles gallery functionality (before/after sliders, card animations)
     * 
     * @class GalleryHandler
     * @description Manages interactive before/after image sliders with smooth
     * dragging, 3D card hover effects, and scroll-triggered animations.
     */
    class GalleryHandler {
        /**
         * Creates a GalleryHandler instance
         * @param {CHawkApp} app - Reference to main application instance
         */
        constructor(app) {
            this.app = app;
            this.sliders = [];
            this.state = { 
                activeSliders: 0, 
                scrollObserver: null 
            };
            this.elements = {};
            this.init();
        }
        
        /**
         * Initialize gallery handler
         * @private
         */
        init() {
            this.cacheElements();
            if (!this.elements.section) return;
            this.setupScrollAnimations();
            this.setupSliders();
            this.setupCardAnimations();
        }
        
        /**
         * Cache frequently accessed DOM elements
         * @private
         */
        cacheElements() {
            this.elements = {
                section: document.getElementById('gallery-section'),
                sliderInputs: document.querySelectorAll('.gallery__slider-input'),
                cards: document.querySelectorAll('.gallery__card'),
                animatedElements: document.querySelectorAll('#gallery-section [data-animate]')
            };
        }
        
        /**
         * Setup scroll-triggered animations using Intersection Observer
         * @private
         */
        setupScrollAnimations() {
            // Fallback for browsers without IntersectionObserver
            if (!('IntersectionObserver' in window)) {
                this.elements.animatedElements.forEach(el => el.classList.add('animate-in'));
                return;
            }
            
            const observerOptions = { 
                threshold: 0.1, 
                rootMargin: '0px 0px -100px 0px' 
            };
            
            this.state.scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        this.state.scrollObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe all animatable elements
            this.elements.animatedElements.forEach(el => this.state.scrollObserver.observe(el));
        }
        
        /**
         * Setup before/after image comparison sliders
         * @private
         */
        setupSliders() {
            if (this.elements.sliderInputs.length === 0) return;
            
            this.elements.sliderInputs.forEach((input, index) => {
                const wrapper = input.closest('.gallery__image-wrapper');
                if (!wrapper) return;
                
                // Get slider components
                const afterImage = wrapper.querySelector('.gallery__image--after');
                const sliderLine = wrapper.querySelector('.gallery__slider-line');
                const sliderHandle = wrapper.querySelector('.gallery__slider-handle');
                
                if (!afterImage) return;
                
                // Initialize slider position
                this.updateSlider(input, afterImage, sliderLine, sliderHandle);
                
                // Input event for real-time updates
                input.addEventListener('input', (e) => {
                    this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
                });
                
                // Change event for accessibility announcement
                input.addEventListener('change', (e) => {
                    this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
                    this.app.announce(`Comparison slider at ${e.target.value}%`);
                });
                
                // Touch events for mobile
                input.addEventListener('touchstart', () => {
                    wrapper.classList.add('gallery__image-wrapper--dragging');
                }, { passive: true });
                
                input.addEventListener('touchmove', () => {
                    this.updateSlider(input, afterImage, sliderLine, sliderHandle);
                }, { passive: true });
                
                input.addEventListener('touchend', () => {
                    wrapper.classList.remove('gallery__image-wrapper--dragging');
                }, { passive: true });
                
                // Mouse events for desktop
                input.addEventListener('mousedown', () => {
                    wrapper.classList.add('gallery__image-wrapper--dragging');
                });
                
                input.addEventListener('mouseup', () => {
                    wrapper.classList.remove('gallery__image-wrapper--dragging');
                });
                
                // Store slider reference
                this.sliders.push({ input, wrapper, afterImage, sliderLine, sliderHandle, index });
                this.state.activeSliders++;
            });
        }
        
        /**
         * Update slider position and after image reveal
         * @private
         * @param {HTMLInputElement} input - Range input element
         * @param {HTMLElement} afterImage - After image element
         * @param {HTMLElement} line - Slider line element
         * @param {HTMLElement} handle - Slider handle element
         */
        updateSlider(input, afterImage, line, handle) {
            if (!input || !afterImage) return;
            
            const value = parseFloat(input.value);
            const percentage = value + '%';
            const inversePercentage = (100 - value) + '%';
            
            // Update after image reveal using clip-path
            afterImage.style.clipPath = `inset(0 ${inversePercentage} 0 0)`;
            
            // Update slider line and handle positions
            if (line) line.style.left = percentage;
            if (handle) handle.style.left = percentage;
        }
        
        /**
         * Setup 3D hover effects for gallery cards
         * @private
         */
        setupCardAnimations() {
            if (this.elements.cards.length === 0) return;
            
            this.elements.cards.forEach((card) => {
                // Optimize performance with will-change
                card.addEventListener('mouseenter', () => {
                    card.style.willChange = 'transform';
                });
                
                // 3D tilt effect on mouse move
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate normalized deltas
                    const deltaX = (x - centerX) / centerX;
                    const deltaY = (y - centerY) / centerY;
                    
                    // Apply 3D rotation
                    const rotateX = deltaY * -5;
                    const rotateY = deltaX * 5;
                    
                    card.style.transform = `translateY(-12px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                // Reset transform on mouse leave
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    card.style.willChange = 'auto';
                });
                
                // Touch feedback for mobile
                card.addEventListener('touchstart', () => {
                    card.style.transform = 'scale(0.98)';
                }, { passive: true });
                
                card.addEventListener('touchend', () => {
                    card.style.transform = '';
                }, { passive: true });
            });
        }
        
        /**
         * Reset slider to default position (50%)
         * @public
         * @param {number} index - Slider index
         */
        resetSlider(index) {
            if (index < 0 || index >= this.sliders.length) return;
            
            const slider = this.sliders[index];
            slider.input.value = 50;
            this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
        }
        
        /**
         * Reset all sliders to default position
         * @public
         */
        resetAllSliders() {
            this.sliders.forEach((_, index) => this.resetSlider(index));
        }
        
        /**
         * Get current value of a slider
         * @public
         * @param {number} index - Slider index
         * @returns {number|null} Slider value (0-100) or null if invalid
         */
        getSliderValue(index) {
            if (index < 0 || index >= this.sliders.length) return null;
            return parseFloat(this.sliders[index].input.value);
        }
        
        /**
         * Set value of a slider programmatically
         * @public
         * @param {number} index - Slider index
         * @param {number} value - Value to set (0-100)
         */
        setSliderValue(index, value) {
            if (index < 0 || index >= this.sliders.length) return;
            
            const clampedValue = Math.max(0, Math.min(100, value));
            const slider = this.sliders[index];
            slider.input.value = clampedValue;
            this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
        }
        
        /**
         * Get current gallery handler state
         * @public
         * @returns {Object} Current state with slider values
         */
        getState() {
            return {
                ...this.state,
                sliders: this.sliders.map((slider, index) => ({
                    index,
                    value: this.getSliderValue(index)
                }))
            };
        }
        
        /**
         * Cleanup and reset gallery functionality
         * @public
         */
        destroy() {
            if (this.state.scrollObserver) this.state.scrollObserver.disconnect();
            
            // Reset card transforms
            this.elements.cards.forEach(card => {
                card.style.transform = '';
                card.style.willChange = 'auto';
            });
            
            this.sliders = [];
            this.state.activeSliders = 0;
        }
    }
    
    // ============================================================================
    // FAQ HANDLER
    // ============================================================================
    
    /**
     * Handles FAQ accordion functionality
     * 
     * @class FAQHandler
     * @description Manages expandable FAQ items with smooth height transitions
     * and proper accessibility (ARIA attributes, keyboard navigation).
     */
    class FAQHandler {
        /**
         * Creates a FAQHandler instance
         * @param {CHawkApp} app - Reference to main application instance
         */
        constructor(app) {
            this.app = app;
            this.faqItems = document.querySelectorAll('.faq__item');
            this.init();
        }
        
        /**
         * Initialize FAQ handler
         * @private
         */
        init() {
            if (this.faqItems.length === 0) return;
            
            this.faqItems.forEach(item => {
                const question = item.querySelector('.faq__question');
                const answer = item.querySelector('.faq__answer');
                
                if (question && answer) {
                    // Initialize collapsed state
                    answer.style.maxHeight = '0px';
                    
                    // Click event
                    question.addEventListener('click', () => {
                        this.toggleItem(question, answer);
                    });
                    
                    // Keyboard navigation (Enter and Space)
                    question.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.toggleItem(question, answer);
                        }
                    });
                }
            });
        }
        
        /**
         * Toggle FAQ item expanded/collapsed state
         * @private
         * @param {HTMLElement} question - Question button element
         * @param {HTMLElement} answer - Answer content element
         */
        toggleItem(question, answer) {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                this.closeItem(question, answer);
            } else {
                this.closeAllItems(); // Close other items (accordion behavior)
                this.openItem(question, answer);
            }
        }
        
        /**
         * Open FAQ item
         * @private
         * @param {HTMLElement} question - Question button element
         * @param {HTMLElement} answer - Answer content element
         */
        openItem(question, answer) {
            question.setAttribute('aria-expanded', 'true');
            const contentHeight = answer.scrollHeight;
            answer.style.maxHeight = contentHeight + 'px';
            this.app.announce('FAQ item opened');
        }
        
        /**
         * Close FAQ item
         * @private
         * @param {HTMLElement} question - Question button element
         * @param {HTMLElement} answer - Answer content element
         */
        closeItem(question, answer) {
            question.setAttribute('aria-expanded', 'false');
            answer.style.maxHeight = '0px';
            this.app.announce('FAQ item closed');
        }
        
        /**
         * Close all FAQ items
         * @public
         */
        closeAllItems() {
            this.faqItems.forEach(item => {
                const question = item.querySelector('.faq__question');
                const answer = item.querySelector('.faq__answer');
                if (question && answer) this.closeItem(question, answer);
            });
        }
        
        /**
         * Cleanup and reset FAQ functionality
         * @public
         */
        destroy() {
            this.faqItems.forEach(item => {
                const answer = item.querySelector('.faq__answer');
                if (answer) answer.style.maxHeight = '';
            });
        }
    }
    
    // ============================================================================
    // MAIN APPLICATION CLASS
    // ============================================================================
    
    /**
     * Main application orchestrator
     * 
     * @class CHawkApp
     * @description Central application controller that initializes and coordinates
     * all modules (navigation, translation, conversion, gallery, FAQ). Manages
     * global state, accessibility features, and lifecycle events.
     */
    class CHawkApp {
        /**
         * Creates a CHawkApp instance
         * @param {Object} config - Application configuration object
         */
        constructor(config) {
            this.config = config;
            
            // Module instances
            this.navigationHandler = null;
            this.conversionHandler = null;
            this.galleryHandler = null;
            this.faqHandler = null;
            this.translationHandler = null;
            
            // Translation data
            this.translations = {};
            this.currentLanguage = config.defaultLanguage;
            
            // Intersection observers for lazy loading
            this.observers = { 
                conversion: null, 
                gallery: null, 
                faq: null 
            };
            
            this.init();
        }
        
        /**
         * Initialize application
         * @private
         */
        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
            } else {
                this.onDOMReady();
            }
        }
        
        /**
         * Handle DOM ready event and initialize all modules
         * @private
         */
        onDOMReady() {
            this.setupAccessibility();
            this.loadInitialLanguage();
            this.initializeNavigation();
            this.initializeTranslation();
            this.initializeConversionLazy();
            this.initializeGalleryLazy();
            this.initializeFAQLazy();
            this.setupGlobalEventListeners();
            this.initializeAnimations();
            document.body.classList.add('app-loaded');
        }
        
        /**
         * Setup accessibility features (ARIA live region for announcements)
         * @private
         */
        setupAccessibility() {
            if (!document.getElementById('app-announcer')) {
                const liveRegion = document.createElement('div');
                liveRegion.id = 'app-announcer';
                liveRegion.setAttribute('role', 'status');
                liveRegion.setAttribute('aria-live', 'polite');
                liveRegion.setAttribute('aria-atomic', 'true');
                liveRegion.style.position = 'absolute';
                liveRegion.style.left = '-10000px';
                liveRegion.style.width = '1px';
                liveRegion.style.height = '1px';
                liveRegion.style.overflow = 'hidden';
                document.body.appendChild(liveRegion);
            }
        }
        
        /**
         * Load initial language from localStorage or use default
         * @private
         */
        loadInitialLanguage() {
            try {
                const savedLang = localStorage.getItem('chawk_language');
                if (savedLang && this.config.supportedLanguages.includes(savedLang)) {
                    this.currentLanguage = savedLang;
                }
                this.loadTranslations(this.currentLanguage);
            } catch (error) {
                // Silently fail if localStorage unavailable
            }
        }
        
        /**
         * Initialize navigation module
         * @private
         */
        initializeNavigation() {
            try {
                this.navigationHandler = new NavigationHandler(this);
            } catch (error) {
                console.error('[App] Navigation initialization failed:', error);
            }
        }
        
        /**
         * Initialize conversion module with lazy loading
         * @private
         */
        initializeConversionLazy() {
            try {
                // Fallback for browsers without IntersectionObserver
                if (!('IntersectionObserver' in window)) {
                    this.conversionHandler = new ConversionHandler(this);
                    return;
                }
                
                // Lazy load when section approaches viewport
                this.observers.conversion = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.conversionHandler = new ConversionHandler(this);
                            this.observers.conversion.disconnect();
                        }
                    });
                }, { rootMargin: '300px' });
                
                const section = document.getElementById('conversion-section');
                if (section) {
                    this.observers.conversion.observe(section);
                } else {
                    // Initialize immediately if section not found
                    this.conversionHandler = new ConversionHandler(this);
                }
            } catch (error) {
                console.error('[App] Conversion initialization failed:', error);
            }
        }
        
        /**
         * Initialize gallery module with lazy loading
         * @private
         */
        initializeGalleryLazy() {
            try {
                // Fallback for browsers without IntersectionObserver
                if (!('IntersectionObserver' in window)) {
                    this.galleryHandler = new GalleryHandler(this);
                    return;
                }
                
                // Lazy load when section approaches viewport
                this.observers.gallery = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.galleryHandler = new GalleryHandler(this);
                            this.observers.gallery.disconnect();
                        }
                    });
                }, { rootMargin: '300px' });
                
                const section = document.getElementById('gallery-section');
                if (section) {
                    this.observers.gallery.observe(section);
                } else {
                    // Initialize immediately if section not found
                    this.galleryHandler = new GalleryHandler(this);
                }
            } catch (error) {
                console.error('[App] Gallery initialization failed:', error);
            }
        }
        
        /**
         * Initialize FAQ module with lazy loading
         * @private
         */
        initializeFAQLazy() {
            try {
                // Fallback for browsers without IntersectionObserver
                if (!('IntersectionObserver' in window)) {
                    this.faqHandler = new FAQHandler(this);
                    return;
                }
                
                // Lazy load when section approaches viewport
                this.observers.faq = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.faqHandler = new FAQHandler(this);
                            this.observers.faq.disconnect();
                        }
                    });
                }, { rootMargin: '300px' });
                
                const section = document.getElementById('faq-section');
                if (section) {
                    this.observers.faq.observe(section);
                } else {
                    // Initialize immediately if section not found
                    this.faqHandler = new FAQHandler(this);
                }
            } catch (error) {
                console.error('[App] FAQ initialization failed:', error);
            }
        }
        
        /**
         * Initialize translation module
         * @private
         */
        initializeTranslation() {
            try {
                if (typeof translations !== 'undefined') {
                    this.translationHandler = new TranslationHandler(this, translations);
                }
            } catch (error) {
                console.error('[App] Translation initialization failed:', error);
            }
        }
        
        /**
         * Setup global event listeners
         * @private
         */
        setupGlobalEventListeners() {
            // Visibility change (tab switching)
            document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
            
            // Online/offline status
            window.addEventListener('online', () => this.handleOnlineStatus(true));
            window.addEventListener('offline', () => this.handleOnlineStatus(false));
            
            // Before unload (cleanup)
            window.addEventListener('beforeunload', () => this.handleBeforeUnload());
        }
        
        /**
         * Load translation data (placeholder)
         * @private
         * @param {string} lang - Language code
         * @returns {Object} Translation data
         */
        loadTranslations(lang) {
            return this.translations;
        }
        
        /**
         * Handle language change event
         * @public
         * @param {string} lang - New language code
         */
        handleLanguageChange(lang) {
            if (!this.config.supportedLanguages.includes(lang)) return;
            
            const previousLanguage = this.currentLanguage;
            this.currentLanguage = lang;
            
            // Trigger translation handler
            if (this.translationHandler) {
                this.translationHandler.switchLanguage(lang);
            }
            
            // Store preference
            try {
                localStorage.setItem('chawk_language', lang);
                localStorage.setItem('chawk_language_timestamp', Date.now().toString());
            } catch (error) {
                // Silently fail
            }
            
            // Emit custom event
            const languageChangeEvent = new CustomEvent('languageChanged', { 
                detail: { language: lang, previousLanguage: previousLanguage }
            });
            document.dispatchEvent(languageChangeEvent);
        }
        
        /**
         * Handle visibility change event (placeholder)
         * @private
         */
        handleVisibilityChange() {
            // Placeholder for future implementation
        }
        
        /**
         * Handle online/offline status changes
         * @private
         * @param {boolean} isOnline - Online status
         */
        handleOnlineStatus(isOnline) {
            if (!isOnline) {
                this.announce('You are currently offline');
            } else {
                this.announce('Connection restored');
            }
        }
        
        /**
         * Initialize scroll-triggered animations
         * @private
         */
        initializeAnimations() {
            if ('IntersectionObserver' in window) {
                const observerOptions = { 
                    threshold: 0.1, 
                    rootMargin: '0px 0px -100px 0px' 
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                // Observe all elements with animation class
                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                    observer.observe(el);
                });
            }
        }
        
        /**
         * Handle before unload event (cleanup)
         * @private
         */
        handleBeforeUnload() {
            // Cleanup all modules
            if (this.navigationHandler) this.navigationHandler.destroy();
            if (this.conversionHandler) this.conversionHandler.destroy();
            if (this.galleryHandler) this.galleryHandler.destroy();
            if (this.faqHandler) this.faqHandler.destroy();
            if (this.translationHandler) this.translationHandler.destroy();
            
            // Disconnect all observers
            Object.values(this.observers).forEach(observer => {
                if (observer) observer.disconnect();
            });
        }
        
        /**
         * Announce message to screen readers via ARIA live region
         * @public
         * @param {string} message - Message to announce
         */
        announce(message) {
            const liveRegion = document.getElementById('app-announcer');
            if (!liveRegion) return;
            
            // Clear and announce with slight delay for reliability
            liveRegion.textContent = '';
            setTimeout(() => {
                liveRegion.textContent = message;
            }, 100);
        }
        
        /**
         * Get application information and state
         * @public
         * @returns {Object} Application info object
         */
        getInfo() {
            return {
                name: this.config.name,
                version: this.config.version,
                currentLanguage: this.currentLanguage,
                navigationState: this.navigationHandler?.getState(),
                conversionState: this.conversionHandler?.getState(),
                galleryState: this.galleryHandler?.getState(),
                translationState: this.translationHandler?.getState(),
                translations: this.translations,
                lazyLoadStatus: {
                    conversion: !!this.conversionHandler,
                    gallery: !!this.galleryHandler,
                    faq: !!this.faqHandler
                }
            };
        }
    }
    
    // ============================================================================
    // APPLICATION INITIALIZATION
    // ============================================================================
    
    /**
     * Create and initialize main application instance
     * Expose to global scope for external access if needed
     */
    const app = new CHawkApp(APP_CONFIG);
    window.CHawkApp = app;
    
    /**
     * CommonJS export support for bundlers
     */
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = CHawkApp;
    }
    
})();