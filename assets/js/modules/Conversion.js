/**
 * C HAWK CONSTRUCTION - CONVERSION SECTION HANDLER
 * 
 * @fileoverview Manages all conversion section functionality including testimonials,
 * form validation, scroll animations, and interactive card effects
 * @version 1.0.0
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Standalone module that handles the conversion/consultation section of the website.
 * Features include:
 * - Automated testimonial carousel with smooth transitions
 * - Real-time form validation with accessibility support
 * - Scroll-triggered reveal animations using Intersection Observer
 * - 3D card hover effects for enhanced user interaction
 * - Integration with main CHawkApp for centralized state management
 * 
 * Dependencies:
 * - Requires CHawkApp to be loaded first
 * - Uses Intersection Observer API (with fallback)
 * - Integrates with global accessibility announcer
 * 
 * Module Pattern:
 * - Self-executing anonymous function (IIFE) for encapsulation
 * - Exposes ConversionHandler class to window.CHawkConversion
 * - Auto-initializes on DOM ready
 * 
 * @class ConversionHandler
 * @requires CHawkApp
 */

(function() {
    'use strict';
    
    /**
     * ConversionHandler Class
     * Handles all conversion section functionality
     */
    class ConversionHandler {
        constructor(app) {
            this.app = app;
            
            // Testimonials data
            this.testimonials = [
                {
                    name: "Michael Patterson",
                    location: "East Berlin, PA",
                    text: "Outstanding work on our kitchen remodel. The team was professional, on time, and the quality exceeded our expectations. Highly recommend C Hawk!",
                    project: "Kitchen Remodel"
                },
                {
                    name: "Myriam Valencia",
                    location: "York, PA",
                    text: "Couldn't be happier with our bathroom renovation. From design to completion, everything was perfect. The attention to detail is incredible.",
                    project: "Bathroom Renovation"
                },
                {
                    name: "Robert Thompson",
                    location: "Harrisburg, PA",
                    text: "C Hawk transformed our entire home. They were respectful, clean, and delivered exactly what they promised. Best decision we made!",
                    project: "Full Home Remodel"
                },
                {
                    name: "Cesar Olivarez",
                    location: "Lancaster, PA",
                    text: "Professional service from start to finish. Great communication throughout the project. The results speak for themselves - amazing quality!",
                    project: "Kitchen & Bath"
                },
                {
                    name: "Jennifer Morrison",
                    location: "Gettysburg, PA",
                    text: "We've worked with other contractors before, but C Hawk is in a different league. Licensed, insured, and truly care about their work.",
                    project: "Kitchen Remodel"
                },
                {
                    name: "Paul Smith",
                    location: "Hanover, PA",
                    text: "Incredible transformation of our master bathroom. The team was courteous, efficient, and the craftsmanship is top-notch. Worth every penny!",
                    project: "Master Bathroom"
                }
            ];
            
            // State
            this.state = {
                currentTestimonial: 0,
                isFormSubmitted: false,
                testimonialInterval: null,
                scrollObserver: null
            };
            
            // DOM Elements
            this.elements = {};
            
            this.init();
        }
        
        /**
         * Initialize conversion handler
         */
        init() {
            this.log('Initializing conversion section...');
            
            // Cache DOM elements
            this.cacheElements();
            
            // Setup functionality
            this.setupScrollAnimations();
            this.setupTestimonials();
            this.setupForm();
            this.setupCardHovers();
            
            this.log('Conversion section initialized');
        }
        
        /**
         * Cache DOM elements
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
                animatedElements: document.querySelectorAll('[data-animate]')
            };
        }
        
        /**
         * Setup scroll reveal animations
         */
        setupScrollAnimations() {
            if (!('IntersectionObserver' in window)) {
                this.warn('IntersectionObserver not supported');
                // Fallback: show all elements
                this.elements.animatedElements.forEach(el => {
                    el.classList.add('animate-in');
                });
                return;
            }
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            this.state.scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add class to trigger animation
                        entry.target.classList.add('animate-in');
                        
                        // Unobserve after animation
                        this.state.scrollObserver.unobserve(entry.target);
                        
                        this.log('Animated:', entry.target.id || entry.target.className);
                    }
                });
            }, observerOptions);
            
            // Observe all animated elements
            this.elements.animatedElements.forEach(el => {
                this.state.scrollObserver.observe(el);
            });
            
            this.log('Scroll animations initialized');
        }
        
        /**
         * Setup testimonials
         */
        setupTestimonials() {
            if (!this.elements.testimonialText) {
                this.warn('Testimonial elements not found');
                return;
            }
            
            // Display first testimonial
            this.displayTestimonial(0);
            
            // Create dots
            this.createTestimonialDots();
            
            // Auto-rotate every 5 seconds
            this.startTestimonialRotation();
            
            this.log('Testimonials initialized');
        }
        
        /**
         * Display testimonial by index
         * @param {number} index - Testimonial index
         */
        displayTestimonial(index) {
            if (index < 0 || index >= this.testimonials.length) {
                this.warn('Invalid testimonial index:', index);
                return;
            }
            
            const testimonial = this.testimonials[index];
            this.state.currentTestimonial = index;
            
            // Update text with fade effect
            this.elements.testimonialText.style.animation = 'none';
            setTimeout(() => {
                this.elements.testimonialText.textContent = `"${testimonial.text}"`;
                this.elements.testimonialText.style.animation = 'fadeIn 0.5s ease-in';
            }, 10);
            
            // Update name and meta
            this.elements.testimonialName.textContent = testimonial.name;
            this.elements.testimonialMeta.textContent = `${testimonial.location} • ${testimonial.project}`;
            
            // Update avatar initials
            const initials = testimonial.name.split(' ').map(n => n[0]).join('');
            this.elements.testimonialAvatar.textContent = initials;
            
            // Update active dot
            this.updateTestimonialDots(index);
            
            this.log('Displayed testimonial:', index);
        }
        
        /**
         * Create testimonial navigation dots
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
                
                if (index === 0) {
                    button.classList.add('conversion__dot--active');
                }
                
                this.elements.testimonialDots.appendChild(button);
            });
        }
        
        /**
         * Update active testimonial dot
         * @param {number} activeIndex - Active testimonial index
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
         * Start testimonial auto-rotation
         */
        startTestimonialRotation() {
            this.state.testimonialInterval = setInterval(() => {
                const nextIndex = (this.state.currentTestimonial + 1) % this.testimonials.length;
                this.displayTestimonial(nextIndex);
            }, 5000); // 5 seconds
        }
        
        /**
         * Restart testimonial rotation
         */
        restartTestimonialRotation() {
            if (this.state.testimonialInterval) {
                clearInterval(this.state.testimonialInterval);
            }
            this.startTestimonialRotation();
        }
        
        /**
         * Stop testimonial rotation
         */
        stopTestimonialRotation() {
            if (this.state.testimonialInterval) {
                clearInterval(this.state.testimonialInterval);
                this.state.testimonialInterval = null;
            }
        }
        
        /**
         * Setup form functionality
         */
        setupForm() {
            if (!this.elements.form) {
                this.warn('Form element not found');
                return;
            }
            
            // Form validation
            this.elements.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e);
            });
            
            // Real-time validation on blur
            const inputs = this.elements.form.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                // Remove error on focus
                input.addEventListener('focus', () => {
                    this.removeFieldError(input);
                });
            });
            
            this.log('Form initialized');
        }
        
        /**
         * Validate form field
         * @param {HTMLElement} field - Form field element
         * @returns {boolean} Is valid
         */
        validateField(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            
            if (!isRequired && !value) {
                return true; // Optional and empty is valid
            }
            
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
        
        /**
         * Show field error
         * @param {HTMLElement} field - Form field
         * @param {string} message - Error message
         */
        showFieldError(field, message) {
            field.style.borderColor = '#EF4444';
            field.setAttribute('aria-invalid', 'true');
            
            // Create or update error message
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
         * Remove field error
         * @param {HTMLElement} field - Form field
         */
        removeFieldError(field) {
            field.style.borderColor = '';
            field.setAttribute('aria-invalid', 'false');
            
            const errorEl = field.parentElement.querySelector('.conversion__field-error');
            if (errorEl) {
                errorEl.remove();
            }
        }
        
        /**
         * Handle form submission
         * @param {Event} e - Submit event
         */
        handleFormSubmit(e) {
            e.preventDefault();
            
            // Validate all required fields
            const requiredFields = this.elements.form.querySelectorAll('[required]');
            let isFormValid = true;
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isFormValid = false;
                }
            });
            
            if (!isFormValid) {
                this.warn('Form validation failed');
                this.app.announce('Please correct the errors in the form');
                return;
            }
            
            // Get form data
            const formData = new FormData(this.elements.form);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                project: formData.get('project'),
                time: formData.get('time')
            };
            
            this.log('Form data:', data);
            
            // Submit form (you'll need to implement your actual submission logic)
            this.submitForm(data);
        }
        
        /**
         * Submit form data
         * @param {Object} data - Form data
         */
        async submitForm(data) {
            this.log('Submitting form...', data);
            
            // Disable submit button
            const submitButton = this.elements.form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
            
            try {
                // TODO: Replace with actual API endpoint
                // const response = await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(data)
                // });
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success state
                this.showFormSuccess();
                
                // Announce to screen reader
                this.app.announce('Form submitted successfully');
                
                this.log('Form submitted successfully');
                
            } catch (error) {
                this.error('Form submission failed:', error);
                this.app.announce('Form submission failed. Please try again.');
                
                // Re-enable submit button
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Request Free Consultation';
                }
            }
        }
        
        /**
         * Show form success state
         */
        showFormSuccess() {
            this.state.isFormSubmitted = true;
            
            // Hide form, show success message
            this.elements.formContent.style.display = 'none';
            this.elements.formSuccess.style.display = 'block';
            
            // Scroll to success message
            this.elements.formSuccess.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
        
        /**
         * Setup card hover effects
         */
        setupCardHovers() {
            const cards = document.querySelectorAll('.conversion__card');
            
            cards.forEach(card => {
                // Mouse move effect (optional magnetic hover)
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const deltaX = (x - centerX) / 50;
                    const deltaY = (y - centerY) / 50;
                    
                    card.style.transform = `
                        translateY(-10px) 
                        scale(1.02) 
                        rotateX(${-deltaY}deg) 
                        rotateY(${deltaX}deg)
                    `;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                });
            });
            
            this.log('Card hover effects initialized');
        }
        
        /**
         * Reset form
         */
        resetForm() {
            if (this.elements.form) {
                this.elements.form.reset();
            }
            
            this.state.isFormSubmitted = false;
            
            if (this.elements.formContent) {
                this.elements.formContent.style.display = 'block';
            }
            
            if (this.elements.formSuccess) {
                this.elements.formSuccess.style.display = 'none';
            }
            
            this.log('Form reset');
        }
        
        /**
         * Get current state
         * @returns {Object} Current state
         */
        getState() {
            return { ...this.state };
        }
        
        /**
         * Destroy handler and clean up
         */
        destroy() {
            // Stop testimonial rotation
            this.stopTestimonialRotation();
            
            // Disconnect observer
            if (this.state.scrollObserver) {
                this.state.scrollObserver.disconnect();
            }
            
            this.log('Conversion handler destroyed');
        }
        
        /**
         * Log helper methods
         */
        log(...args) {
            if (this.app && this.app.log) {
                this.app.log('[Conversion]', ...args);
            } else {
                console.log('[Conversion]', ...args);
            }
        }
        
        warn(...args) {
            if (this.app && this.app.warn) {
                this.app.warn('[Conversion]', ...args);
            } else {
                console.warn('[Conversion]', ...args);
            }
        }
        
        error(...args) {
            if (this.app && this.app.error) {
                this.app.error('[Conversion]', ...args);
            } else {
                console.error('[Conversion]', ...args);
            }
        }
    }
    
    /**
     * Initialize conversion handler when DOM is ready
     */
    function initConversion() {
        // Wait for CHawkApp to be available
        if (typeof window.CHawkApp === 'undefined') {
            console.warn('[Conversion] CHawkApp not found, retrying...');
            setTimeout(initConversion, 100);
            return;
        }
        
        // Initialize handler
        const conversionHandler = new ConversionHandler(window.CHawkApp);
        
        // Make globally accessible
        window.CHawkConversion = conversionHandler;
        
        // Add to CHawkApp instance
        if (window.CHawkApp) {
            window.CHawkApp.conversionHandler = conversionHandler;
        }
        
        console.log('[Conversion] Handler initialized and attached to CHawkApp');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConversion);
    } else {
        initConversion();
    }
    
    // Export for module systems
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = ConversionHandler;
    }
    
})();