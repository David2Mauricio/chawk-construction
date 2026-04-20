    /**
     * C HAWK CONSTRUCTION - Main Application
     * 
     * @fileoverview Main application entry point and module initialization
     * @version 3.6.0
     * @author David Mauricio Herazo Lopez
     * @company C Hawk Construction and Renovation LLC
     * 
     * @description
     * Central orchestrator for the C Hawk Construction website managing navigation,
     * language switching, conversion forms, image galleries, and FAQ interactions
     * through a modular architecture with optimized performance and accessibility.
     * 
     * CHANGELOG v3.6.0:
     * - FIXED: Mobile language switcher event binding with proper selector
     * - ENHANCED: Dynamic button selection in updateSwitcherUI for reliability
     * - OPTIMIZED: Event delegation and DOM caching strategy
     * 
     * CHANGELOG v3.5.1:
     * - FIXED: Desktop header container animation synchronization on language change
     * - ENHANCED: Hierarchical animation system for smoother transitions
     * - OPTIMIZED: Parent-child animation coordination
     */

    import './Language.js';

    (function() {
        'use strict';
        
        const APP_CONFIG = {
            name: 'C Hawk Construction',
            version: '3.6.0',
            apiEndpoint: '/api',
            defaultLanguage: 'en',
            supportedLanguages: ['en', 'es'],
            debug: false
        };
        
        class NavigationHandler {
            constructor(app) {
                this.app = app;
                this.navToggle = document.getElementById('navToggle');
                this.nav = document.getElementById('nav');
                this.navMobile = document.getElementById('navMobile');
                this.navOverlay = document.getElementById('navOverlay');
                this.servicesMenuTrigger = document.getElementById('servicesMenuTrigger');
                this.servicesSubmenu = document.getElementById('servicesSubmenu');
                this.submenuBack = document.querySelector('.nav__submenu-back');
                this.servicesDropdownTrigger = document.getElementById('servicesDropdownTrigger');
                this.megaMenu = document.getElementById('megaMenu');
                this.body = document.body;
                this.html = document.documentElement;

                this.state = {
                    isMobileMenuOpen: false,
                    isSubmenuOpen: false,
                    isMegaMenuOpen: false,
                    scrollPosition: 0
                };

                this._langShowTimeout = null;

                this.init();
            }

            init() {
                if (!this.navToggle) return;
                this.bindEvents();
                this.handleScroll();
            }

            // Lazy getter — TranslationHandler may not have created the element yet at constructor time
            get langSwitcher() {
                return document.getElementById('languageSwitcherMobile');
            }

            bindEvents() {
                this.navToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleMobileMenu();
                });

                this.servicesMenuTrigger?.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openSubmenu();
                });

                this.submenuBack?.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.closeSubmenu();
                });

                this.servicesDropdownTrigger?.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleMegaMenu();
                });

                document.addEventListener('click', (e) => this.handleOutsideClick(e));

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') this.closeAll();
                });

                let scrollTimeout;
                window.addEventListener('scroll', () => {
                    if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
                    scrollTimeout = window.requestAnimationFrame(() => this.handleScroll());
                }, { passive: true });

                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => this.handleResize(), 150);
                }, { passive: true });

                this.navMobile?.addEventListener('touchmove', (e) => {
                    if (this.state.isMobileMenuOpen) e.stopPropagation();
                }, { passive: true });

                this.servicesSubmenu?.addEventListener('touchmove', (e) => {
                    if (this.state.isSubmenuOpen) e.stopPropagation();
                }, { passive: true });
            }

            toggleMobileMenu() {
                this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
                this.state.isMobileMenuOpen ? this.openMobileMenu() : this.closeMobileMenu();
            }

            openMobileMenu() {
                this.state.scrollPosition = window.pageYOffset || this.html.scrollTop;
                this.navToggle.setAttribute('aria-expanded', 'true');
                this.navMobile.setAttribute('aria-hidden', 'false');
                this.navOverlay?.setAttribute('aria-hidden', 'false');
                this.html.style.overflow = 'hidden';
                this.body.style.overflow = 'hidden';
                this.state.isMobileMenuOpen = true;
                this.hideLangSwitcher();
                this.app.announce('Mobile menu opened');
            }

            closeMobileMenu() {
                this.navToggle.setAttribute('aria-expanded', 'false');
                this.navMobile.setAttribute('aria-hidden', 'true');
                this.navOverlay?.setAttribute('aria-hidden', 'true');
                this.html.style.overflow = '';
                this.body.style.overflow = '';
                window.scrollTo(0, this.state.scrollPosition);
                this.state.isMobileMenuOpen = false;
                if (this.state.isSubmenuOpen) this.closeSubmenu();
                this.showLangSwitcher(400);
                this.app.announce('Mobile menu closed');
            }

            openSubmenu() {
                this.servicesMenuTrigger.setAttribute('aria-expanded', 'true');
                this.servicesSubmenu.setAttribute('aria-hidden', 'false');
                this.body.classList.add('submenu-open');
                this.state.isSubmenuOpen = true;
                this.navToggle.classList.add('nav__toggle--submenu-open');
                this.hideLangSwitcher();
                this.app.announce('Services submenu opened');
            }

            closeSubmenu() {
                this.servicesMenuTrigger.setAttribute('aria-expanded', 'false');
                this.servicesSubmenu.setAttribute('aria-hidden', 'true');
                this.body.classList.remove('submenu-open');
                this.state.isSubmenuOpen = false;
                this.navToggle.classList.remove('nav__toggle--submenu-open');
                if (!this.state.isMobileMenuOpen) this.showLangSwitcher(400);
                this.app.announce('Services submenu closed');
            }

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

            hideLangSwitcher() {
                const el = this.langSwitcher;
                if (!el) return;

                if (this._langShowTimeout) {
                    clearTimeout(this._langShowTimeout);
                    this._langShowTimeout = null;
                }

                el.style.transition = 'opacity 200ms ease';
                el.style.opacity = '0';
                el.style.pointerEvents = 'none';
                el.style.visibility = 'hidden';
            }

            showLangSwitcher(delay = 0) {
                if (this._langShowTimeout) {
                    clearTimeout(this._langShowTimeout);
                    this._langShowTimeout = null;
                }

                this._langShowTimeout = setTimeout(() => {
                    const el = this.langSwitcher;
                    if (!el) return;

                    el.style.transition = 'opacity 400ms ease';
                    el.style.opacity = '1';
                    el.style.pointerEvents = 'auto';
                    el.style.visibility = 'visible';
                    this._langShowTimeout = null;
                }, delay);
            }

            handleOutsideClick(e) {
                if (this.megaMenu && this.state.isMegaMenuOpen) {
                    if (!this.megaMenu.contains(e.target) && !this.servicesDropdownTrigger.contains(e.target)) {
                        this.state.isMegaMenuOpen = false;
                        this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                        this.megaMenu.setAttribute('aria-hidden', 'true');
                    }
                }

                if (this.navOverlay && e.target === this.navOverlay) {
                    this.closeMobileMenu();
                }
            }

            handleScroll() {}

            handleResize() {
                const isDesktop = window.innerWidth >= 1024;

                if (isDesktop) {
                    if (this.state.isMobileMenuOpen) this.closeMobileMenu();
                    if (this.state.isSubmenuOpen) this.closeSubmenu();
                } else {
                    if (this.state.isMegaMenuOpen) {
                        this.state.isMegaMenuOpen = false;
                        this.servicesDropdownTrigger?.setAttribute('aria-expanded', 'false');
                        this.megaMenu?.setAttribute('aria-hidden', 'true');
                    }
                }
            }

            closeAll() {
                if (this.state.isMobileMenuOpen) this.closeMobileMenu();
                if (this.state.isSubmenuOpen) this.closeSubmenu();
                if (this.state.isMegaMenuOpen) {
                    this.state.isMegaMenuOpen = false;
                    this.servicesDropdownTrigger?.setAttribute('aria-expanded', 'false');
                    this.megaMenu?.setAttribute('aria-hidden', 'true');
                }
            }

            getState() {
                return { ...this.state };
            }

            destroy() {
                this.html.style.overflow = '';
                this.body.style.overflow = '';
                this.body.classList.remove('submenu-open');
                this.showLangSwitcher(0);
            }
        }
        
        class TranslationHandler {
            constructor(app, translations) {
                this.app = app;
                this.translations = translations;
                
                this.state = {
                    currentLanguage: this.getStoredLanguage() || this.app.config.defaultLanguage || 'en',
                    isInitialized: false,
                    supportedLanguages: this.app.config.supportedLanguages || ['en', 'es'],
                    isTransitioning: false
                };
                
                this.elements = {
                    languageButtons: null,
                    translatedElements: null,
                    placeholderElements: null,
                    animatableElements: null
                };
                
                this.animationConfig = {
                    fadeOutDuration: 200,
                    contentChangeDuration: 400,
                    fadeInDuration: 500,
                    staggerDelay: 10,
                    totalDuration: 1120
                };
                
                this.init();
            }
            
            init() {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => this.setup());
                } else {
                    this.setup();
                }
            }
            
            setup() {
                try {
                    this.createLanguageSwitcher();
                    
                    setTimeout(() => {
                        this.cacheElements();
                        this.bindEvents();
                        this.applyLanguage(this.state.currentLanguage);
                        document.documentElement.lang = this.state.currentLanguage;
                        this.state.isInitialized = true;
                    }, 150);
                    
                    this.observeDynamicContent();
                } catch (error) {
                    console.error('[TranslationHandler] Setup error:', error);
                }
            }
            
            createLanguageSwitcher() {
                const currentLang = this.state.currentLanguage;
                
                const desktopHTML = `
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
                
                const desktopNav = document.querySelector('.nav__desktop .nav__list');
                if (desktopNav) {
                    desktopNav.insertAdjacentHTML('beforeend', desktopHTML);
                }
                
                const mobileHTML = `
                    <div class="language-switcher-mobile">
                        <button 
                            class="language-switcher-mobile__button ${currentLang === 'en' ? 'active' : ''}" 
                            data-lang="en"
                            aria-label="Switch to English"
                            aria-pressed="${currentLang === 'en'}"
                            type="button"
                        >
                            EN
                        </button>
                        <span class="language-switcher-mobile__divider" aria-hidden="true">|</span>
                        <button 
                            class="language-switcher-mobile__button ${currentLang === 'es' ? 'active' : ''}" 
                            data-lang="es"
                            aria-label="Cambiar a Español"
                            aria-pressed="${currentLang === 'es'}"
                            type="button"
                        >
                            ES
                        </button>
                    </div>
                `;
                
                const mobileWrapper = document.getElementById('languageSwitcherMobile');
                if (mobileWrapper) {
                    mobileWrapper.innerHTML = mobileHTML;
                }
            }
            
            cacheElements() {
                this.elements.languageButtons = document.querySelectorAll('[data-lang]');
                this.elements.translatedElements = document.querySelectorAll('[data-i18n]');
                this.elements.placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
                
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
            
            switchLanguage(lang) {
                if (!this.state.supportedLanguages.includes(lang)) return;
                if (lang === this.state.currentLanguage || this.state.isTransitioning) return;
                
                const previousLanguage = this.state.currentLanguage;
                this.state.isTransitioning = true;
                this.animatedLanguageChange(lang, previousLanguage);
            }
            
            animatedLanguageChange(newLang, oldLang) {
                document.body.classList.add('language-transitioning');
                
                this.fadeOutPage();
                
                setTimeout(() => {
                    this.state.currentLanguage = newLang;
                    this.applyLanguage(newLang);
                    this.updateSwitcherUI(newLang);
                    this.storeLanguage(newLang);
                    document.documentElement.lang = newLang;
                }, this.animationConfig.fadeOutDuration);
                
                setTimeout(() => {
                    this.fadeInPage();
                }, this.animationConfig.fadeOutDuration + this.animationConfig.contentChangeDuration);
                
                setTimeout(() => {
                    document.body.classList.remove('language-transitioning');
                    this.cleanupAnimations();
                    this.state.isTransitioning = false;
                    
                    const event = new CustomEvent('languageChanged', { 
                        detail: { language: newLang, previousLanguage: oldLang } 
                    });
                    window.dispatchEvent(event);
                    
                    this.app.announce(`Language changed to ${newLang === 'en' ? 'English' : 'Spanish'}`);
                }, this.animationConfig.totalDuration);
            }
            
            fadeOutPage() {
                document.body.classList.add('page-fade-out');
                
                this.elements.animatableElements.forEach((element, index) => {
                    element.style.transition = `opacity ${this.animationConfig.fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1), transform ${this.animationConfig.fadeOutDuration}ms cubic-bezier(0.4, 0, 1, 1)`;
                    element.style.transitionDelay = `${index * 20}ms`;
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(-20px) scale(0.98)';
                });
            }
            
            fadeInPage() {
                document.body.classList.remove('page-fade-out');
                document.body.classList.add('page-fade-in');
                
                const desktopNav = document.querySelector('.nav__desktop');
                const isDesktop = desktopNav && window.innerWidth >= 1220;
                
                if (isDesktop) {
                    this.restartDesktopHeaderAnimations();
                }
                
                this.elements.animatableElements.forEach((element, index) => {
                    element.style.transition = `opacity ${this.animationConfig.fadeInDuration}ms cubic-bezier(0, 0, 0.2, 1), transform ${this.animationConfig.fadeInDuration}ms cubic-bezier(0, 0, 0.2, 1)`;
                    element.style.transitionDelay = `${index * this.animationConfig.staggerDelay}ms`;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0) scale(1)';
                });
            }
            
            restartDesktopHeaderAnimations() {
                const navContainer = document.querySelector('.nav__container');
                const navDesktop = document.querySelector('.nav__desktop');
                const logo = document.querySelector('.nav__logo');
                const navItems = document.querySelectorAll('.nav__item');
                const navActions = document.querySelector('.nav__actions');
                
                if (navContainer) {
                    navContainer.style.opacity = '0';
                    navContainer.style.transform = 'translateY(-10px)';
                    navContainer.offsetHeight;
                    navContainer.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
                    navContainer.style.opacity = '1';
                    navContainer.style.transform = 'translateY(0)';
                }
                
                if (navDesktop) {
                    navDesktop.style.opacity = '0';
                    navDesktop.offsetHeight;
                    navDesktop.style.transition = 'opacity 0.3s ease-out 0.1s';
                    navDesktop.style.opacity = '1';
                }
                
                if (logo) {
                    logo.style.animation = 'none';
                    logo.offsetHeight;
                    logo.style.animation = 'logo-entrance 0.8s ease-out 0.1s forwards';
                }
                
                navItems.forEach((item, index) => {
                    item.style.animation = 'none';
                    item.offsetHeight;
                    const delay = 0.2 + (index * 0.1);
                    item.style.animation = `nav-item-entrance 0.6s ease-out ${delay}s forwards`;
                });
                
                if (navActions) {
                    navActions.style.animation = 'none';
                    navActions.offsetHeight;
                    navActions.style.animation = 'actions-entrance 0.8s ease-out 0.6s forwards';
                }
            }
            
            cleanupAnimations() {
                document.body.classList.remove('page-fade-in');
                
                this.elements.animatableElements.forEach(element => {
                    element.style.transition = '';
                    element.style.transitionDelay = '';
                    element.style.opacity = '';
                    element.style.transform = '';
                });
                
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
            
            applyLanguage(lang) {
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
                
                this.elements.placeholderElements.forEach(element => {
                    const key = element.dataset.i18nPlaceholder;
                    const translation = this.getTranslation(key, lang);
                    if (translation) element.placeholder = translation;
                });
            }
            
            getTranslation(key, lang) {
                try {
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
            
            updateSwitcherUI(lang) {
                const allButtons = document.querySelectorAll('[data-lang]');
                
                allButtons.forEach(button => {
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
            
            storeLanguage(lang) {
                try {
                    localStorage.setItem('preferredLanguage', lang);
                } catch (error) {}
            }
            
            getStoredLanguage() {
                try {
                    return localStorage.getItem('preferredLanguage');
                } catch (error) {
                    return null;
                }
            }
            
            observeDynamicContent() {
                const observer = new MutationObserver((mutations) => {
                    let needsUpdate = false;
                    
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
                    
                    if (needsUpdate) this.refresh();
                });
                
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
            
            getCurrentLanguage() {
                return this.state.currentLanguage;
            }
            
            refresh() {
                this.cacheElements();
                this.bindEvents();
                this.applyLanguage(this.state.currentLanguage);
            }
            
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
            
            destroy() {
                document.querySelectorAll('.nav__item--language, .language-switcher-mobile').forEach(el => {
                    el.remove();
                });
                
                this.state.isInitialized = false;
                this.state.isTransitioning = false;
            }
        }
        
        class ConversionHandler {
            constructor(app) {
                this.app = app;
                
                this.testimonials = [
                    { name: "Michael Patterson", location: "East Berlin, PA", text: "Outstanding work on our kitchen remodel. The team was professional, on time, and the quality exceeded our expectations. Highly recommend C Hawk!", project: "Kitchen Remodel" },
                    { name: "Myriam Valencia", location: "York, PA", text: "Couldn't be happier with our bathroom renovation. From design to completion, everything was perfect. The attention to detail is incredible.", project: "Bathroom Renovation" },
                    { name: "Robert Thompson", location: "Harrisburg, PA", text: "C Hawk transformed our entire home. They were respectful, clean, and delivered exactly what they promised. Best decision we made!", project: "Full Home Remodel" },
                    { name: "Cesar Olivarez", location: "Lancaster, PA", text: "Professional service from start to finish. Great communication throughout the project. The results speak for themselves - amazing quality!", project: "Kitchen & Bath" },
                    { name: "Jennifer Morrison", location: "Gettysburg, PA", text: "We've worked with other contractors before, but C Hawk is in a different league. Licensed, insured, and truly care about their work.", project: "Kitchen Remodel" },
                    { name: "Mauricio Herazo", location: "Hanover, PA", text: "Incredible transformation of our master bathroom. The team was courteous, efficient, and the craftsmanship is top-notch. Worth every penny!", project: "Master Bathroom" }
                ];
                
                this.state = { 
                    currentTestimonial: 0, 
                    isFormSubmitted: false, 
                    testimonialInterval: null, 
                    scrollObserver: null 
                };
                
                this.elements = {};
                this.init();
            }
            
            init() {
                this.cacheElements();
                if (!this.elements.section) return;
                this.setupScrollAnimations();
                this.setupTestimonials();
                this.setupForm();
                this.setupCardHovers();
            }
            
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
            
            setupScrollAnimations() {
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
                
                this.elements.animatedElements.forEach(el => this.state.scrollObserver.observe(el));
            }
            
            setupTestimonials() {
                if (!this.elements.testimonialText) return;
                this.displayTestimonial(0);
                this.createTestimonialDots();
                this.startTestimonialRotation();
            }
            
            displayTestimonial(index) {
                if (index < 0 || index >= this.testimonials.length) return;
                
                const testimonial = this.testimonials[index];
                this.state.currentTestimonial = index;
                
                this.elements.testimonialText.style.animation = 'none';
                setTimeout(() => {
                    this.elements.testimonialText.textContent = `"${testimonial.text}"`;
                    this.elements.testimonialText.style.animation = 'fadeIn 0.5s ease-in';
                }, 10);
                
                this.elements.testimonialName.textContent = testimonial.name;
                this.elements.testimonialMeta.textContent = `${testimonial.location} • ${testimonial.project}`;
                
                const initials = testimonial.name.split(' ').map(n => n[0]).join('');
                this.elements.testimonialAvatar.textContent = initials;
                
                this.updateTestimonialDots(index);
            }
            
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
            
            startTestimonialRotation() {
                this.state.testimonialInterval = setInterval(() => {
                    const nextIndex = (this.state.currentTestimonial + 1) % this.testimonials.length;
                    this.displayTestimonial(nextIndex);
                }, 5000);
            }
            
            restartTestimonialRotation() {
                if (this.state.testimonialInterval) clearInterval(this.state.testimonialInterval);
                this.startTestimonialRotation();
            }
            
            stopTestimonialRotation() {
                if (this.state.testimonialInterval) {
                    clearInterval(this.state.testimonialInterval);
                    this.state.testimonialInterval = null;
                }
            }
            
            setupForm() {
                if (!this.elements.form) return;
                
                this.elements.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
                
                const inputs = this.elements.form.querySelectorAll('input, select');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('focus', () => this.removeFieldError(input));
                });
            }
            
            validateField(field) {
                const value = field.value.trim();
                const isRequired = field.hasAttribute('required');
                
                if (!isRequired && !value) return true;
                
                let isValid = true;
                let errorMessage = '';
                
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
                
                if (!isValid && isRequired) {
                    this.showFieldError(field, errorMessage);
                } else {
                    this.removeFieldError(field);
                }
                
                return isValid;
            }
            
            showFieldError(field, message) {
                field.style.borderColor = '#EF4444';
                field.setAttribute('aria-invalid', 'true');
                
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
            
            removeFieldError(field) {
                field.style.borderColor = '';
                field.setAttribute('aria-invalid', 'false');
                
                const errorEl = field.parentElement.querySelector('.conversion__field-error');
                if (errorEl) errorEl.remove();
            }
            
            handleFormSubmit(e) {
                const requiredFields = this.elements.form.querySelectorAll('[required]');
                let isFormValid = true;
                
                requiredFields.forEach(field => {
                    if (!this.validateField(field)) isFormValid = false;
                });
                
                if (!isFormValid) {
                    e.preventDefault();
                    this.app.announce('Please correct the errors in the form');
                    return;
                }
                
                const submitButton = this.elements.form.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    const buttonText = submitButton.querySelector('span');
                    if (buttonText) buttonText.textContent = 'Sending...';
                }
            }
            
            showFormSuccess() {
                this.state.isFormSubmitted = true;
                this.elements.formContent.style.display = 'none';
                this.elements.formSuccess.style.display = 'block';
                this.elements.formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            setupCardHovers() {
                const cards = document.querySelectorAll('.conversion__card');
                
                cards.forEach(card => {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const deltaX = (x - centerX) / 50;
                        const deltaY = (y - centerY) / 50;
                        
                        card.style.transform = `translateY(-10px) scale(1.02) rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        card.style.transform = '';
                    });
                });
            }
            
            resetForm() {
                if (this.elements.form) this.elements.form.reset();
                this.state.isFormSubmitted = false;
                if (this.elements.formContent) this.elements.formContent.style.display = 'block';
                if (this.elements.formSuccess) this.elements.formSuccess.style.display = 'none';
            }
            
            getState() {
                return { ...this.state };
            }
            
            destroy() {
                this.stopTestimonialRotation();
                if (this.state.scrollObserver) this.state.scrollObserver.disconnect();
            }
        }
        
        class GalleryHandler {
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
            
            init() {
                this.cacheElements();
                if (!this.elements.section) return;
                this.setupScrollAnimations();
                this.setupSliders();
                this.setupCardAnimations();
            }
            
            cacheElements() {
                this.elements = {
                    section: document.getElementById('gallery-section'),
                    sliderInputs: document.querySelectorAll('.gallery__slider-input'),
                    cards: document.querySelectorAll('.gallery__card'),
                    animatedElements: document.querySelectorAll('#gallery-section [data-animate]')
                };
            }
            
            setupScrollAnimations() {
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
                
                this.elements.animatedElements.forEach(el => this.state.scrollObserver.observe(el));
            }
            
            setupSliders() {
                if (this.elements.sliderInputs.length === 0) return;
                
                this.elements.sliderInputs.forEach((input, index) => {
                    const wrapper = input.closest('.gallery__image-wrapper');
                    if (!wrapper) return;
                    
                    const afterImage = wrapper.querySelector('.gallery__image--after');
                    const sliderLine = wrapper.querySelector('.gallery__slider-line');
                    const sliderHandle = wrapper.querySelector('.gallery__slider-handle');
                    
                    if (!afterImage) return;
                    
                    this.updateSlider(input, afterImage, sliderLine, sliderHandle);
                    
                    input.addEventListener('input', (e) => {
                        this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
                    });
                    
                    input.addEventListener('change', (e) => {
                        this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
                        this.app.announce(`Comparison slider at ${e.target.value}%`);
                    });
                    
                    input.addEventListener('touchstart', () => {
                        wrapper.classList.add('gallery__image-wrapper--dragging');
                    }, { passive: true });
                    
                    input.addEventListener('touchmove', () => {
                        this.updateSlider(input, afterImage, sliderLine, sliderHandle);
                    }, { passive: true });
                    
                    input.addEventListener('touchend', () => {
                        wrapper.classList.remove('gallery__image-wrapper--dragging');
                    }, { passive: true });
                    
                    input.addEventListener('mousedown', () => {
                        wrapper.classList.add('gallery__image-wrapper--dragging');
                    });
                    
                    input.addEventListener('mouseup', () => {
                        wrapper.classList.remove('gallery__image-wrapper--dragging');
                    });
                    
                    this.sliders.push({ input, wrapper, afterImage, sliderLine, sliderHandle, index });
                    this.state.activeSliders++;
                });
            }
            
            updateSlider(input, afterImage, line, handle) {
                if (!input || !afterImage) return;
                
                const value = parseFloat(input.value);
                const percentage = value + '%';
                const inversePercentage = (100 - value) + '%';
                
                afterImage.style.clipPath = `inset(0 ${inversePercentage} 0 0)`;
                
                if (line) line.style.left = percentage;
                if (handle) handle.style.left = percentage;
            }
            
            setupCardAnimations() {
                if (this.elements.cards.length === 0) return;
                
                this.elements.cards.forEach((card) => {
                    card.addEventListener('mouseenter', () => {
                        card.style.willChange = 'transform';
                    });
                    
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const deltaX = (x - centerX) / centerX;
                        const deltaY = (y - centerY) / centerY;
                        
                        const rotateX = deltaY * -5;
                        const rotateY = deltaX * 5;
                        
                        card.style.transform = `translateY(-12px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        card.style.transform = '';
                        card.style.willChange = 'auto';
                    });
                    
                    card.addEventListener('touchstart', () => {
                        card.style.transform = 'scale(0.98)';
                    }, { passive: true });
                    
                    card.addEventListener('touchend', () => {
                        card.style.transform = '';
                    }, { passive: true });
                });
            }
            
            resetSlider(index) {
                if (index < 0 || index >= this.sliders.length) return;
                
                const slider = this.sliders[index];
                slider.input.value = 50;
                this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
            }
            
            resetAllSliders() {
                this.sliders.forEach((_, index) => this.resetSlider(index));
            }
            
            getSliderValue(index) {
                if (index < 0 || index >= this.sliders.length) return null;
                return parseFloat(this.sliders[index].input.value);
            }
            
            setSliderValue(index, value) {
                if (index < 0 || index >= this.sliders.length) return;
                
                const clampedValue = Math.max(0, Math.min(100, value));
                const slider = this.sliders[index];
                slider.input.value = clampedValue;
                this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
            }
            
            getState() {
                return {
                    ...this.state,
                    sliders: this.sliders.map((slider, index) => ({
                        index,
                        value: this.getSliderValue(index)
                    }))
                };
            }
            
            destroy() {
                if (this.state.scrollObserver) this.state.scrollObserver.disconnect();
                
                this.elements.cards.forEach(card => {
                    card.style.transform = '';
                    card.style.willChange = 'auto';
                });
                
                this.sliders = [];
                this.state.activeSliders = 0;
            }
        }
        
        class FAQHandler {
            constructor(app) {
                this.app = app;
                this.faqItems = document.querySelectorAll('.faq__item');
                this.init();
            }
            
            init() {
                if (this.faqItems.length === 0) return;
                
                this.faqItems.forEach(item => {
                    const question = item.querySelector('.faq__question');
                    const answer = item.querySelector('.faq__answer');
                    
                    if (question && answer) {
                        answer.style.maxHeight = '0px';
                        
                        question.addEventListener('click', () => {
                            this.toggleItem(question, answer);
                        });
                        
                        question.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                this.toggleItem(question, answer);
                            }
                        });
                    }
                });
            }
            
            toggleItem(question, answer) {
                const isExpanded = question.getAttribute('aria-expanded') === 'true';
                
                if (isExpanded) {
                    this.closeItem(question, answer);
                } else {
                    this.closeAllItems();
                    this.openItem(question, answer);
                }
            }
            
            openItem(question, answer) {
                question.setAttribute('aria-expanded', 'true');
                const contentHeight = answer.scrollHeight;
                answer.style.maxHeight = contentHeight + 'px';
                this.app.announce('FAQ item opened');
            }
            
            closeItem(question, answer) {
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0px';
                this.app.announce('FAQ item closed');
            }
            
            closeAllItems() {
                this.faqItems.forEach(item => {
                    const question = item.querySelector('.faq__question');
                    const answer = item.querySelector('.faq__answer');
                    if (question && answer) this.closeItem(question, answer);
                });
            }
            
            destroy() {
                this.faqItems.forEach(item => {
                    const answer = item.querySelector('.faq__answer');
                    if (answer) answer.style.maxHeight = '';
                });
            }
        }
        
        class CHawkApp {
            constructor(config) {
                this.config = config;
                this.navigationHandler = null;
                this.conversionHandler = null;
                this.galleryHandler = null;
                this.faqHandler = null;
                this.translationHandler = null;
                this.translations = {};
                this.currentLanguage = config.defaultLanguage;
                
                this.observers = { 
                    conversion: null, 
                    gallery: null, 
                    faq: null 
                };
                
                this.init();
            }
            
            init() {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
                } else {
                    this.onDOMReady();
                }
            }
            
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
            
            loadInitialLanguage() {
                try {
                    const savedLang = localStorage.getItem('chawk_language');
                    if (savedLang && this.config.supportedLanguages.includes(savedLang)) {
                        this.currentLanguage = savedLang;
                    }
                    this.loadTranslations(this.currentLanguage);
                } catch (error) {}
            }
            
            initializeNavigation() {
                try {
                    this.navigationHandler = new NavigationHandler(this);
                } catch (error) {
                    console.error('[App] Navigation initialization failed:', error);
                }
            }
            
            initializeConversionLazy() {
                try {
                    if (!('IntersectionObserver' in window)) {
                        this.conversionHandler = new ConversionHandler(this);
                        return;
                    }
                    
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
                        this.conversionHandler = new ConversionHandler(this);
                    }
                } catch (error) {
                    console.error('[App] Conversion initialization failed:', error);
                }
            }
            
            initializeGalleryLazy() {
                try {
                    if (!('IntersectionObserver' in window)) {
                        this.galleryHandler = new GalleryHandler(this);
                        return;
                    }
                    
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
                        this.galleryHandler = new GalleryHandler(this);
                    }
                } catch (error) {
                    console.error('[App] Gallery initialization failed:', error);
                }
            }
            
            initializeFAQLazy() {
                try {
                    if (!('IntersectionObserver' in window)) {
                        this.faqHandler = new FAQHandler(this);
                        return;
                    }
                    
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
                        this.faqHandler = new FAQHandler(this);
                    }
                } catch (error) {
                    console.error('[App] FAQ initialization failed:', error);
                }
            }
            
            initializeTranslation() {
                try {
                    if (typeof translations !== 'undefined') {
                        this.translationHandler = new TranslationHandler(this, translations);
                    }
                } catch (error) {
                    console.error('[App] Translation initialization failed:', error);
                }
            }
            
            setupGlobalEventListeners() {
                document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
                window.addEventListener('online', () => this.handleOnlineStatus(true));
                window.addEventListener('offline', () => this.handleOnlineStatus(false));
                window.addEventListener('beforeunload', () => this.handleBeforeUnload());
            }
            
            loadTranslations(lang) {
                return this.translations;
            }
            
            handleLanguageChange(lang) {
                if (!this.config.supportedLanguages.includes(lang)) return;
                
                const previousLanguage = this.currentLanguage;
                this.currentLanguage = lang;
                
                if (this.translationHandler) {
                    this.translationHandler.switchLanguage(lang);
                }
                
                try {
                    localStorage.setItem('chawk_language', lang);
                    localStorage.setItem('chawk_language_timestamp', Date.now().toString());
                } catch (error) {}
                
                const languageChangeEvent = new CustomEvent('languageChanged', { 
                    detail: { language: lang, previousLanguage: previousLanguage }
                });
                document.dispatchEvent(languageChangeEvent);
            }
            
            handleVisibilityChange() {}
            
            handleOnlineStatus(isOnline) {
                if (!isOnline) {
                    this.announce('You are currently offline');
                } else {
                    this.announce('Connection restored');
                }
            }
            
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
                    
                    document.querySelectorAll('.animate-on-scroll').forEach(el => {
                        observer.observe(el);
                    });
                }
            }
            
            handleBeforeUnload() {
                if (this.navigationHandler) this.navigationHandler.destroy();
                if (this.conversionHandler) this.conversionHandler.destroy();
                if (this.galleryHandler) this.galleryHandler.destroy();
                if (this.faqHandler) this.faqHandler.destroy();
                if (this.translationHandler) this.translationHandler.destroy();
                
                Object.values(this.observers).forEach(observer => {
                    if (observer) observer.disconnect();
                });
            }
            
            announce(message) {
                const liveRegion = document.getElementById('app-announcer');
                if (!liveRegion) return;
                
                liveRegion.textContent = '';
                setTimeout(() => {
                    liveRegion.textContent = message;
                }, 100);
            }
            
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
        
        const app = new CHawkApp(APP_CONFIG);
        window.CHawkApp = app;
        
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = CHawkApp;
        }
        
    })();