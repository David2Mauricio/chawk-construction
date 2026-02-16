/**
 * Translation Handler
 * Bilingual language switcher with animated transitions
 * 
 * @author David Mauricio Herazo Lopez
 * @version 3.1.0
 * @company C Hawk Construction and Renovation LLC
 */

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
            placeholderElements: null
        };
        
        this.animationConfig = {
            fadeOutDuration: 250,
            fadeInDuration: 400,
            fadeInDelay: 100,
            totalDuration: 750
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
        if (lang === this.state.currentLanguage) return;
        if (this.state.isTransitioning) return;
        
        const previousLanguage = this.state.currentLanguage;
        this.state.isTransitioning = true;
        this.animatedLanguageChange(lang, previousLanguage);
    }
    
    animatedLanguageChange(newLang, oldLang) {
        document.body.classList.add('language-transitioning');
        
        this.fadeOutContent();
        
        setTimeout(() => {
            this.state.currentLanguage = newLang;
            this.applyLanguage(newLang);
            this.updateSwitcherUI(newLang);
            this.storeLanguage(newLang);
            document.documentElement.lang = newLang;
            this.fadeInContent();
        }, this.animationConfig.fadeOutDuration);
        
        setTimeout(() => {
            document.body.classList.remove('language-transitioning');
            this.state.isTransitioning = false;
            
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: newLang, previousLanguage: oldLang }
            }));
        }, this.animationConfig.totalDuration);
    }
    
    fadeOutContent() {
        const sections = document.querySelectorAll('section, .nav__container, .nav__mobile');
        sections.forEach(section => section.classList.add('language-fade-out'));
    }
    
    fadeInContent() {
        setTimeout(() => {
            const sections = document.querySelectorAll('section, .nav__container, .nav__mobile');
            sections.forEach(section => {
                section.classList.remove('language-fade-out');
                section.classList.add('language-fade-in');
            });
            
            const nav = document.querySelector('.nav__container');
            if (nav) nav.classList.add('restart-nav-animations');
            
            document.body.classList.add('restart-section-animations');
            
            setTimeout(() => {
                sections.forEach(section => section.classList.remove('language-fade-in'));
                if (nav) nav.classList.remove('restart-nav-animations');
                document.body.classList.remove('restart-section-animations');
            }, this.animationConfig.fadeInDuration);
        }, this.animationConfig.fadeInDelay);
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
    
    isInitialized() {
        return this.state.isInitialized;
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

export default TranslationHandler;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationHandler;
}