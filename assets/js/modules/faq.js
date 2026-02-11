/**
 * C HAWK CONSTRUCTION - FAQ ACCORDION HANDLER
 * 
 * @fileoverview Manages interactive FAQ accordion with smooth height animations
 * and full accessibility support
 * @version 1.0.0
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Standalone module for FAQ (Frequently Asked Questions) accordion functionality.
 * Provides smooth expand/collapse animations, keyboard navigation, and ARIA
 * compliance for screen readers.
 * 
 * Features:
 * - Smooth height-based transitions using max-height
 * - Automatic calculation of content height
 * - Full keyboard accessibility (Enter and Space keys)
 * - ARIA attributes for screen reader support
 * - Single-item expansion (accordion behavior)
 * - Auto-initialization on DOM ready
 * 
 * Usage:
 * - Automatically initializes when DOM is ready
 * - Can be manually instantiated: new FAQHandler()
 * - Works with .faq__item, .faq__question, .faq__answer classes
 * 
 * Accessibility:
 * - Uses aria-expanded attribute for state management
 * - Keyboard navigation support (Enter/Space)
 * - Semantic HTML structure required
 * 
 * @class FAQHandler
 */

/**
 * FAQ Accordion Handler Class
 * 
 * @class
 * @description Manages FAQ accordion interactions with smooth animations
 * and accessibility features
 */
class FAQHandler {
  /**
   * Creates an FAQHandler instance
   * @constructor
   */
  constructor() {
    /**
     * Collection of all FAQ item elements
     * @type {NodeList}
     * @private
     */
    this.faqItems = document.querySelectorAll('.faq__item');
    
    this.init();
  }

  /**
   * Initialize FAQ handler and bind events
   * @private
   */
  init() {
    // Exit if no FAQ items found
    if (this.faqItems.length === 0) {
      console.warn('[FAQHandler] No FAQ items found');
      return;
    }
    
    // Setup each FAQ item
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      const answer = item.querySelector('.faq__answer');
      
      if (question && answer) {
        // Initialize collapsed state (max-height: 0)
        answer.style.maxHeight = '0px';
        
        // Click event listener
        question.addEventListener('click', () => {
          this.toggleItem(question, answer);
        });
        
        // Keyboard accessibility (Enter and Space keys)
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleItem(question, answer);
          }
        });
      }
    });
    
    console.log(`[FAQHandler] Initialized ${this.faqItems.length} FAQ items`);
  }

  /**
   * Toggle FAQ item between expanded and collapsed states
   * @private
   * @param {HTMLElement} question - Question button element
   * @param {HTMLElement} answer - Answer content element
   */
  toggleItem(question, answer) {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Close the item if already open
      this.closeItem(question, answer);
    } else {
      // Close all other items first (accordion behavior - single item open)
      // Remove this line if you want multiple items open simultaneously
      this.closeAllItems();
      
      // Open the clicked item
      this.openItem(question, answer);
    }
  }

  /**
   * Open (expand) an FAQ item
   * @private
   * @param {HTMLElement} question - Question button element
   * @param {HTMLElement} answer - Answer content element
   */
  openItem(question, answer) {
    // Update ARIA attribute for accessibility
    question.setAttribute('aria-expanded', 'true');
    
    // Calculate the actual height needed for the content
    const contentHeight = answer.scrollHeight;
    
    // Animate to the calculated height
    answer.style.maxHeight = contentHeight + 'px';
    
    console.log('[FAQHandler] Opened item');
  }

  /**
   * Close (collapse) an FAQ item
   * @private
   * @param {HTMLElement} question - Question button element
   * @param {HTMLElement} answer - Answer content element
   */
  closeItem(question, answer) {
    // Update ARIA attribute for accessibility
    question.setAttribute('aria-expanded', 'false');
    
    // Animate to closed state (height: 0)
    answer.style.maxHeight = '0px';
    
    console.log('[FAQHandler] Closed item');
  }

  /**
   * Close all FAQ items
   * @public
   * @description Used to ensure only one item is open at a time (accordion behavior)
   */
  closeAllItems() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      const answer = item.querySelector('.faq__answer');
      
      if (question && answer) {
        this.closeItem(question, answer);
      }
    });
  }

  /**
   * Destroy handler and cleanup
   * @public
   * @description Removes event listeners and resets styles
   */
  destroy() {
    this.faqItems.forEach(item => {
      const answer = item.querySelector('.faq__answer');
      if (answer) {
        answer.style.maxHeight = '';
      }
    });
    
    console.log('[FAQHandler] Destroyed');
  }
}

// ============================================================================
// MODULE EXPORTS
// ============================================================================

/**
 * CommonJS export for bundlers (Webpack, Browserify, etc.)
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FAQHandler;
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

/**
 * Auto-initialize FAQ handler when not using module system
 * Waits for DOM to be fully loaded before initialization
 */
if (typeof module === 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.faqHandler = new FAQHandler();
      console.log('[FAQHandler] Auto-initialized on DOM ready');
    });
  } else {
    // DOM already loaded
    window.faqHandler = new FAQHandler();
    console.log('[FAQHandler] Auto-initialized immediately');
  }
}