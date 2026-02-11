
/**
 * C HAWK CONSTRUCTION - LANGUAGE TRANSLATION HANDLER
 * 
 * @fileoverview Manages bilingual language switching (EN/ES) with smooth animations
 * and persistent user preferences
 * @version 2.0.0
 * @author David Mauricio Herazo Lopez
 * @company C Hawk Construction and Renovation LLC
 * @license PA190465
 * @date 2025
 * 
 * @description
 * Comprehensive internationalization (i18n) system handling bilingual content
 * switching with professional animations, localStorage persistence, and
 * dynamic content observation.
 * 
 * Features:
 * - Smooth fade-out/fade-in transitions during language change
 * - localStorage persistence for user language preference
 * - MutationObserver for dynamically added content
 * - Nested translation key support (dot notation)
 * - Desktop and mobile language switcher UI
 * - Full accessibility with ARIA attributes
 * - Animation coordination with page sections
 * - Support for text content and placeholder translations
 * - Transition locking to prevent multiple simultaneous switches
 * 
 * Animation Flow:
 * 1. Fade out current content (250ms)
 * 2. Change language and update DOM
 * 3. Fade in new content (400ms)
 * 4. Cleanup and emit events
 * 
 * Translation Key Format:
 * - Uses dot notation for nested keys: "nav.home", "hero.title"
 * - Each key resolves to an object with 'en' and 'es' properties
 * - Example: translations.nav.home.en → "Home"
 * 
 * Dependencies:
 * - Requires CHawkApp instance for configuration and events
 * - Requires translations object from Language.js
 * - Uses localStorage API (with fallback)
 * - Uses MutationObserver API
 * 
 * @class TranslationHandler
 * @requires CHawkApp
 * @requires translations
 */

class TranslationHandler {
    constructor(app, translations) {
        this.app = app;
        this.translations = translations;
        
        // Handler state
        this.state = {
            currentLanguage: this.getStoredLanguage() || this.app.config.defaultLanguage || 'en',
            isInitialized: false,
            supportedLanguages: this.app.config.supportedLanguages || ['en', 'es'],
            isTransitioning: false
        };
        
        // Cached DOM elements for performance
        this.elements = {
            languageButtons: null,
            translatedElements: null,
            placeholderElements: null
        };
        
        // Animation timing configuration
        this.animationConfig = {
            fadeOutDuration: 250,    // Fade out duration in ms
            fadeInDuration: 400,     // Fade in duration in ms
            fadeInDelay: 100,        // Delay before fade in starts
            totalDuration: 750       // Total transition duration
        };
        
        this.init();
    }
    
    /**
     * Initialize translation handler
     * Waits for DOM ready state before setup
     */
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    /**
     * Setup translation system
     * Creates UI, caches elements, applies initial language
     */
    setup() {
        try {
            // Create language switcher UI in navigation
            this.createLanguageSwitcher();
            
            // Cache DOM elements for performance
            this.cacheElements();
            
            // Apply initial language without animation
            this.applyLanguage(this.state.currentLanguage);
            
            // Bind event listeners
            this.bindEvents();
            
            // Set HTML lang attribute for accessibility
            document.documentElement.lang = this.state.currentLanguage;
            
            this.state.isInitialized = true;
            
            if (this.app.config.debug) {
                console.log(`[TranslationHandler] Initialized with language: ${this.state.currentLanguage}`);
                console.log(`[TranslationHandler] Found ${this.elements.translatedElements.length} translatable elements`);
            }
            
        } catch (error) {
            console.error('[TranslationHandler] Setup error:', error);
        }
    }
    
    /**
     * Create language switcher buttons in navigation
     * Inserts switcher in both desktop and mobile navigation
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
        
        // Insert in desktop navigation
        const desktopNav = document.querySelector('.nav__desktop .nav__list');
        if (desktopNav) {
            desktopNav.insertAdjacentHTML('beforeend', switcherHTML);
            if (this.app.config.debug) {
                console.log('[TranslationHandler] Desktop switcher inserted');
            }
        } else {
            console.warn('[TranslationHandler] Desktop nav not found (.nav__desktop .nav__list)');
        }
        
        // Insert in mobile navigation
        const mobileNav = document.querySelector('.nav__mobile-list');
        if (mobileNav) {
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
            mobileNav.insertAdjacentHTML('beforeend', mobileSwitcherHTML);
            if (this.app.config.debug) {
                console.log('[TranslationHandler] Mobile switcher inserted');
            }
        } else {
            console.warn('[TranslationHandler] Mobile nav not found (.nav__mobile-list)');
        }
    }
    
    /**
     * Cache DOM elements for performance
     * Reduces repeated DOM queries
     */
    cacheElements() {
        this.elements.languageButtons = document.querySelectorAll('[data-lang]');
        this.elements.translatedElements = document.querySelectorAll('[data-i18n]');
        this.elements.placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        
        if (this.app.config.debug) {
            console.log(`[TranslationHandler] Cached ${this.elements.languageButtons.length} language buttons`);
            console.log(`[TranslationHandler] Cached ${this.elements.translatedElements.length} text elements`);
            console.log(`[TranslationHandler] Cached ${this.elements.placeholderElements.length} placeholder elements`);
        }
    }
    
    /**
     * Bind event listeners
     * Sets up click handlers and dynamic content observation
     */
    bindEvents() {
        // Language button click handlers
        this.elements.languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.dataset.lang;
                this.switchLanguage(lang);
            });
        });
        
        // Observe for dynamically added content
        this.observeDynamicContent();
        
        if (this.app.config.debug) {
            console.log('[TranslationHandler] Event listeners bound');
        }
    }
    
    /**
     * Switch to a different language with smooth animations
     * @param {string} lang - Language code ('en' or 'es')
     */
    switchLanguage(lang) {
        // Validate language
        if (!this.state.supportedLanguages.includes(lang)) {
            console.warn(`[TranslationHandler] Language "${lang}" is not supported`);
            return;
        }
        
        // Check if already on this language
        if (lang === this.state.currentLanguage) {
            if (this.app.config.debug) {
                console.log(`[TranslationHandler] Already on ${lang}, no action needed`);
            }
            return;
        }
        
        // Prevent multiple simultaneous transitions
        if (this.state.isTransitioning) {
            if (this.app.config.debug) {
                console.log('[TranslationHandler] Transition already in progress');
            }
            return;
        }
        
        if (this.app.config.debug) {
            console.log(`[TranslationHandler] Switching language: ${this.state.currentLanguage} → ${lang}`);
        }
        
        // Store previous language for event
        const previousLanguage = this.state.currentLanguage;
        
        // Mark transition as in progress
        this.state.isTransitioning = true;
        
        // Execute animated language change
        this.animatedLanguageChange(lang, previousLanguage);
    }
    
    /**
     * Perform animated language transition
     * @param {string} newLang - New language code
     * @param {string} oldLang - Previous language code
     */
    animatedLanguageChange(newLang, oldLang) {
        // Step 1: Add transitioning class to body (locks interactions)
        document.body.classList.add('language-transitioning');
        
        // Step 2: Add pulse effect to clicked button
        const clickedButton = document.querySelector(`[data-lang="${newLang}"]`);
        if (clickedButton) {
            clickedButton.classList.add('switching');
        }
        
        // Step 3: Fade out current content
        this.fadeOutContent();
        
        // Step 4: After fade out, change language and update content
        setTimeout(() => {
            // Update state
            this.state.currentLanguage = newLang;
            
            // Apply new translations
            this.applyLanguage(newLang);
            
            // Update switcher UI
            this.updateSwitcherUI(newLang);
            
            // Store preference
            this.storeLanguage(newLang);
            
            // Update HTML lang attribute
            document.documentElement.lang = newLang;
            
            // Step 5: Fade in new content
            this.fadeInContent();
            
        }, this.animationConfig.fadeOutDuration);
        
        // Step 6: Clean up after transition completes
        setTimeout(() => {
            // Remove transitioning class
            document.body.classList.remove('language-transitioning');
            
            // Remove pulse effect from button
            if (clickedButton) {
                clickedButton.classList.remove('switching');
            }
            
            // Mark transition as complete
            this.state.isTransitioning = false;
            
            // Notify app of language change
            if (typeof this.app.emit === 'function') {
                this.app.emit('languageChanged', { 
                    language: newLang,
                    previousLanguage: oldLang 
                });
            }
            
            // Dispatch window event for external listeners
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: newLang, previousLanguage: oldLang }
            }));
            
            if (this.app.config.debug) {
                console.log(`[TranslationHandler] Language change complete: ${newLang}`);
            }
            
        }, this.animationConfig.totalDuration);
    }
    
    /**
     * Fade out page content before language change
     * Applies animation class to main sections
     */
    fadeOutContent() {
        // Target main content areas
        const sections = document.querySelectorAll('section, .nav__container, .nav__mobile');
        
        sections.forEach(section => {
            section.classList.add('language-fade-out');
        });
        
        if (this.app.config.debug) {
            console.log(`[TranslationHandler] Fading out ${sections.length} sections`);
        }
    }
    
    /**
     * Fade in page content after language change
     * Replaces fade-out class with fade-in class
     */
    fadeInContent() {
        setTimeout(() => {
            const sections = document.querySelectorAll('section, .nav__container, .nav__mobile');
            
            sections.forEach(section => {
                section.classList.remove('language-fade-out');
                section.classList.add('language-fade-in');
            });
            
            // Restart navigation animations
            const nav = document.querySelector('.nav__container');
            if (nav) {
                nav.classList.add('restart-nav-animations');
            }
            
            // Restart section animations
            document.body.classList.add('restart-section-animations');
            
            // Clean up animation classes after animations complete
            setTimeout(() => {
                sections.forEach(section => {
                    section.classList.remove('language-fade-in');
                });
                
                if (nav) {
                    nav.classList.remove('restart-nav-animations');
                }
                
                document.body.classList.remove('restart-section-animations');
                
            }, this.animationConfig.fadeInDuration);
            
            if (this.app.config.debug) {
                console.log('[TranslationHandler] Content faded in with animations');
            }
            
        }, this.animationConfig.fadeInDelay);
    }
    
    /**
     * Apply language to all translatable elements
     * @param {string} lang - Language code
     */
    applyLanguage(lang) {
        let translatedCount = 0;
        let errorCount = 0;
        
        // Update text content elements
        this.elements.translatedElements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key, lang);
            
            if (translation) {
                // Handle different element types
                if (element.tagName === 'OPTION') {
                    element.textContent = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translation;
                } else {
                    element.textContent = translation;
                }
                translatedCount++;
            } else {
                errorCount++;
                if (this.app.config.debug) {
                    console.warn(`[TranslationHandler] Translation not found for key: ${key}`);
                }
            }
        });
        
        // Update placeholder attributes
        this.elements.placeholderElements.forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            const translation = this.getTranslation(key, lang);
            
            if (translation) {
                element.placeholder = translation;
                translatedCount++;
            } else {
                errorCount++;
                if (this.app.config.debug) {
                    console.warn(`[TranslationHandler] Placeholder translation not found for key: ${key}`);
                }
            }
        });
        
        if (this.app.config.debug) {
            console.log(`[TranslationHandler] Applied ${lang} translations: ${translatedCount} successful, ${errorCount} missing`);
        }
    }
    
    /**
     * Get translation by nested key path
     * @param {string} key - Translation key (e.g., "nav.home")
     * @param {string} lang - Language code
     * @returns {string|null} - Translation text or null if not found
     */
    getTranslation(key, lang) {
        try {
            // Split key by dots (e.g., "hero.title" -> ["hero", "title"])
            const keys = key.split('.');
            let value = this.translations;
            
            // Navigate through nested object
            for (const k of keys) {
                value = value?.[k];
                if (value === undefined) {
                    return null;
                }
            }
            
            // Return translation for specified language
            return value?.[lang] || null;
            
        } catch (error) {
            console.error(`[TranslationHandler] Error getting translation for key "${key}":`, error);
            return null;
        }
    }
    
    /**
     * Update switcher button active states
     * @param {string} lang - Active language code
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
        
        if (this.app.config.debug) {
            console.log(`[TranslationHandler] Switcher UI updated to ${lang}`);
        }
    }
    
    /**
     * Store language preference in localStorage
     * @param {string} lang - Language code to store
     */
    storeLanguage(lang) {
        try {
            localStorage.setItem('preferredLanguage', lang);
            if (this.app.config.debug) {
                console.log(`[TranslationHandler] Language preference saved: ${lang}`);
            }
        } catch (error) {
            console.warn('[TranslationHandler] Could not save language preference:', error);
        }
    }
    
    /**
     * Get stored language preference from localStorage
     * @returns {string|null} - Stored language code or null
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
     * Uses MutationObserver to detect new [data-i18n] elements
     */
    observeDynamicContent() {
        const observer = new MutationObserver((mutations) => {
            let needsUpdate = false;
            
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if node or its children have translation attributes
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
                if (this.app.config.debug) {
                    console.log('[TranslationHandler] Detected new translatable content');
                }
                this.refresh();
            }
        });
        
        // Start observing document body for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        if (this.app.config.debug) {
            console.log('[TranslationHandler] DOM observer started');
        }
    }
    
    /**
     * Get current active language
     * @returns {string} - Current language code
     */
    getCurrentLanguage() {
        return this.state.currentLanguage;
    }
    
    /**
     * Check if handler is initialized
     * @returns {boolean} - Initialization status
     */
    isInitialized() {
        return this.state.isInitialized;
    }
    
    /**
     * Manually refresh translations
     * Useful after dynamic content is added
     */
    refresh() {
        if (this.app.config.debug) {
            console.log('[TranslationHandler] Refreshing translations...');
        }
        this.cacheElements();
        this.applyLanguage(this.state.currentLanguage);
    }
    
    /**
     * Get handler state for debugging
     * @returns {object} - Current handler state
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
     * Destroy handler and cleanup resources
     * Removes event listeners and DOM elements
     */
    destroy() {
        // Remove event listeners
        if (this.elements.languageButtons) {
            this.elements.languageButtons.forEach(button => {
                button.removeEventListener('click', this.switchLanguage);
            });
        }
        
        // Remove switcher from DOM
        document.querySelectorAll('.nav__item--language, .nav__mobile-item--language').forEach(el => {
            el.remove();
        });
        
        // Reset state
        this.state.isInitialized = false;
        this.state.isTransitioning = false;
        
        if (this.app.config.debug) {
            console.log('[TranslationHandler] Destroyed');
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationHandler;
}