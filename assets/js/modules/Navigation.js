/**
 * C HAWK CONSTRUCTION - NAVIGATION HANDLER
 * 
 * @fileoverview Manages all navigation interactions including mobile menu,
 * desktop mega menu, submenus, and scroll behavior
 * @version 1.0.0
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Comprehensive navigation management system handling both mobile and desktop
 * navigation patterns. Includes mobile hamburger menu, nested submenus,
 * desktop mega menu dropdown, and smooth transitions between states.
 * 
 * Features:
 * - Mobile hamburger menu with slide-in animation
 * - Nested submenu navigation (Services submenu)
 * - Desktop mega menu dropdown with hover/click
 * - Scroll position preservation when opening mobile menu
 * - Keyboard navigation support (ESC to close)
 * - Click outside to close functionality
 * - Responsive behavior on window resize
 * - Touch event support for mobile devices
 * - ARIA attributes for accessibility
 * 
 * Fixed Issues:
 * - Removed body position:fixed that caused scroll jump
 * - Added scroll position preservation
 * - Fixed hamburger button positioning conflicts
 * - Added scrollbar width compensation
 * 
 * Breakpoints:
 * - Mobile: < 1024px (hamburger menu)
 * - Desktop: >= 1024px (horizontal navigation with mega menu)
 * 
 * Dependencies:
 * - Requires CHawkApp instance for announcements
 * - Uses ARIA attributes for screen reader support
 * - Requires specific BEM class structure in HTML
 * 
 * State Management:
 * - isMobileMenuOpen: Mobile menu visibility state
 * - isSubmenuOpen: Services submenu visibility state
 * - isMegaMenuOpen: Desktop mega menu visibility state
 * - scrollPosition: Preserved scroll position when menu opens
 * 
 * @class NavigationHandler
 * @requires CHawkApp
 */

/**
 * Navigation Handler Class
 * 
 * @class
 * @description Manages navigation interactions across mobile and desktop viewports
 * 
 * @param {CHawkApp} app - Reference to main application instance
 */
class NavigationHandler {
    /**
     * Creates a NavigationHandler instance
     * @param {CHawkApp} app - Main application instance for accessibility announcements
     */
    constructor(app) {
        /**
         * Reference to main application
         * @type {CHawkApp}
         * @private
         */
        this.app = app;
        
        // DOM element references
        /**
         * Mobile menu toggle button
         * @type {HTMLElement}
         * @private
         */
        this.navToggle = document.getElementById('navToggle');
        
        /**
         * Main navigation container
         * @type {HTMLElement}
         * @private
         */
        this.nav = document.getElementById('nav');
        
        /**
         * Mobile navigation panel
         * @type {HTMLElement}
         * @private
         */
        this.navMobile = document.getElementById('navMobile');
        
        /**
         * Mobile menu overlay backdrop
         * @type {HTMLElement}
         * @private
         */
        this.navOverlay = document.getElementById('navOverlay');
        
        /**
         * Services submenu trigger (mobile)
         * @type {HTMLElement}
         * @private
         */
        this.servicesMenuTrigger = document.getElementById('servicesMenuTrigger');
        
        /**
         * Services submenu panel (mobile)
         * @type {HTMLElement}
         * @private
         */
        this.servicesSubmenu = document.getElementById('servicesSubmenu');
        
        /**
         * Submenu back button
         * @type {HTMLElement}
         * @private
         */
        this.submenuBack = document.querySelector('.nav__submenu-back');
        
        /**
         * Document body reference
         * @type {HTMLElement}
         * @private
         */
        this.body = document.body;
        
        /**
         * Services dropdown trigger (desktop)
         * @type {HTMLElement}
         * @private
         */
        this.servicesDropdownTrigger = document.getElementById('servicesDropdownTrigger');
        
        /**
         * Desktop mega menu panel
         * @type {HTMLElement}
         * @private
         */
        this.megaMenu = document.getElementById('megaMenu');
        
        /**
         * Navigation state
         * @type {Object}
         * @private
         */
        this.state = {
            isMobileMenuOpen: false,
            isSubmenuOpen: false,
            isMegaMenuOpen: false,
            scrollPosition: 0 // Preserved scroll position
        };
        
        this.init();
    }
    
    /**
     * Initialize navigation handler
     * @private
     */
    init() {
        // Exit if toggle button not found
        if (!this.navToggle) {
            console.warn('[NavigationHandler] Toggle button not found');
            return;
        }
        
        this.bindEvents();
        this.handleScroll();
        
        console.log('[NavigationHandler] Initialized successfully');
    }
    
    /**
     * Bind all event listeners
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
        
        // Close menus on outside click
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        
        // ESC key to close menus
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });
        
        // Optimized scroll handler with requestAnimationFrame
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(() => {
                this.handleScroll();
            });
        }, { passive: true });
        
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 150);
        }, { passive: true });
        
        // Prevent scroll propagation on mobile menu
        this.navMobile?.addEventListener('touchmove', (e) => {
            if (this.state.isMobileMenuOpen) {
                e.stopPropagation();
            }
        }, { passive: true });
        
        // Prevent scroll propagation on submenu
        this.servicesSubmenu?.addEventListener('touchmove', (e) => {
            if (this.state.isSubmenuOpen) {
                e.stopPropagation();
            }
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
     * Open mobile menu
     * @private
     */
    openMobileMenu() {
        // Preserve current scroll position
        this.state.scrollPosition = window.pageYOffset;
        
        // Update ARIA attributes
        this.navToggle.setAttribute('aria-expanded', 'true');
        this.navMobile.setAttribute('aria-hidden', 'false');
        this.navOverlay?.setAttribute('aria-hidden', 'false');
        
        // Compensate for scrollbar width to prevent layout shift
        this.body.style.paddingRight = this.getScrollbarWidth() + 'px';
        
        this.state.isMobileMenuOpen = true;
        
        // Announce to screen readers
        this.app.announce('Mobile menu opened');
        
        console.log('[NavigationHandler] Mobile menu opened');
    }
    
    /**
     * Close mobile menu
     * @private
     */
    closeMobileMenu() {
        // Update ARIA attributes
        this.navToggle.setAttribute('aria-expanded', 'false');
        this.navMobile.setAttribute('aria-hidden', 'true');
        this.navOverlay?.setAttribute('aria-hidden', 'true');
        
        // Remove scrollbar compensation
        this.body.style.overflow = '';
        this.body.style.paddingRight = '';
        
        this.state.isMobileMenuOpen = false;
        
        // Close submenu if open
        if (this.state.isSubmenuOpen) {
            this.closeSubmenu();
        }
        
        // Announce to screen readers
        this.app.announce('Mobile menu closed');
        
        console.log('[NavigationHandler] Mobile menu closed');
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
        
        // Update toggle button state
        this.navToggle.classList.add('nav__toggle--submenu-open');
        
        this.app.announce('Services submenu opened');
        console.log('[NavigationHandler] Submenu opened');
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
        
        // Reset toggle button state
        this.navToggle.classList.remove('nav__toggle--submenu-open');
        
        this.app.announce('Services submenu closed');
        console.log('[NavigationHandler] Submenu closed');
    }
    
    /**
     * Toggle desktop mega menu
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
        
        console.log('[NavigationHandler] Mega menu toggled:', this.state.isMegaMenuOpen);
    }
    
    /**
     * Handle clicks outside of menus
     * @private
     * @param {Event} e - Click event
     */
    handleOutsideClick(e) {
        // Close mega menu if clicked outside
        if (this.megaMenu && this.state.isMegaMenuOpen) {
            if (!this.megaMenu.contains(e.target) && 
                !this.servicesDropdownTrigger.contains(e.target)) {
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
     * Handle scroll events
     * @private
     * @description Placeholder for scroll-based navigation effects
     */
    handleScroll() {
        // Placeholder for future scroll-based features
        // (e.g., sticky header, hide on scroll down, show on scroll up)
    }
    
    /**
     * Handle window resize events
     * @private
     */
    handleResize() {
        const isDesktop = window.innerWidth >= 1024;
        
        if (isDesktop) {
            // Close mobile-specific menus on desktop
            if (this.state.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
            
            if (this.state.isSubmenuOpen) {
                this.closeSubmenu();
            }
        } else {
            // Close desktop-specific menus on mobile
            if (this.state.isMegaMenuOpen) {
                this.state.isMegaMenuOpen = false;
                if (this.servicesDropdownTrigger) {
                    this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
                }
                if (this.megaMenu) {
                    this.megaMenu.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    
    /**
     * Close all open menus
     * @public
     */
    closeAll() {
        if (this.state.isMobileMenuOpen) {
            this.closeMobileMenu();
        }
        
        if (this.state.isSubmenuOpen) {
            this.closeSubmenu();
        }
        
        if (this.state.isMegaMenuOpen) {
            this.state.isMegaMenuOpen = false;
            if (this.servicesDropdownTrigger) {
                this.servicesDropdownTrigger.setAttribute('aria-expanded', 'false');
            }
            if (this.megaMenu) {
                this.megaMenu.setAttribute('aria-hidden', 'true');
            }
        }
        
        console.log('[NavigationHandler] All menus closed');
    }
    
    /**
     * Calculate browser scrollbar width
     * @private
     * @returns {number} Scrollbar width in pixels
     */
    getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
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
        this.body.style.overflow = '';
        this.body.style.paddingRight = '';
        this.body.classList.remove('submenu-open');
        
        console.log('[NavigationHandler] Destroyed');
    }
}