/**
 * C HAWK CONSTRUCTION - GALLERY HANDLER
 * 
 * @fileoverview Manages before/after image comparison sliders and gallery animations
 * @version 1.0.0
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Handles all gallery section functionality including interactive before/after
 * image comparison sliders with smooth dragging, 3D card hover effects, and
 * scroll-triggered animations.
 * 
 * Features:
 * - Before/after image comparison with draggable slider
 * - Smooth clip-path animations for image reveal
 * - Touch and mouse input support for all devices
 * - 3D card hover effects with perspective transforms
 * - Scroll-triggered reveal animations using Intersection Observer
 * - Programmatic slider control (get/set/reset)
 * 
 * Slider Functionality:
 * - Range input (0-100) controls image reveal percentage
 * - Visual feedback with slider line and handle
 * - Touch events for mobile with passive listeners
 * - Mouse drag support for desktop
 * - Accessibility announcements for screen readers
 * 
 * Dependencies:
 * - Requires CHawkApp instance for logging and announcements
 * - Uses Intersection Observer API (with fallback)
 * - Requires specific DOM structure with BEM classes
 * 
 * @class GalleryHandler
 * @requires CHawkApp
 */

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
        this.app.log('Initializing gallery section...');
        
        this.cacheElements();
        
        if (!this.elements.section) {
            this.app.log('Gallery section not found, skipping initialization');
            return;
        }
        
        this.setupScrollAnimations();
        this.setupSliders();
        this.setupCardAnimations();
        
        this.app.log('Gallery section initialized');
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
            this.app.warn('IntersectionObserver not supported');
            this.elements.animatedElements.forEach(el => {
                el.classList.add('animate-in');
            });
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
                    this.app.log('Gallery element animated:', entry.target.className);
                }
            });
        }, observerOptions);
        
        this.elements.animatedElements.forEach(el => {
            this.state.scrollObserver.observe(el);
        });
        
        this.app.log('Gallery scroll animations initialized');
    }
    
    setupSliders() {
        if (this.elements.sliderInputs.length === 0) {
            this.app.warn('No gallery sliders found');
            return;
        }
        
        this.elements.sliderInputs.forEach((input, index) => {
            const wrapper = input.closest('.gallery__image-wrapper');
            
            if (!wrapper) {
                this.app.warn(`Slider ${index + 1}: wrapper not found`);
                return;
            }
            
            const afterImage = wrapper.querySelector('.gallery__image--after');
            const sliderLine = wrapper.querySelector('.gallery__slider-line');
            const sliderHandle = wrapper.querySelector('.gallery__slider-handle');
            
            if (!afterImage) {
                this.app.warn(`Slider ${index + 1}: after image not found`);
                return;
            }
            
            // Set initial position
            this.updateSlider(input, afterImage, sliderLine, sliderHandle);
            
            // Input event - desktop drag
            input.addEventListener('input', (e) => {
                this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
            });
            
            // Change event - accessibility
            input.addEventListener('change', (e) => {
                this.updateSlider(e.target, afterImage, sliderLine, sliderHandle);
                this.app.announce(`Comparison slider at ${e.target.value}%`);
            });
            
            // Touch support for mobile
            input.addEventListener('touchstart', () => {
                wrapper.classList.add('gallery__image-wrapper--dragging');
            }, { passive: true });
            
            input.addEventListener('touchmove', (e) => {
                this.updateSlider(input, afterImage, sliderLine, sliderHandle);
            }, { passive: true });
            
            input.addEventListener('touchend', () => {
                wrapper.classList.remove('gallery__image-wrapper--dragging');
            }, { passive: true });
            
            // Mouse drag support
            input.addEventListener('mousedown', () => {
                wrapper.classList.add('gallery__image-wrapper--dragging');
            });
            
            input.addEventListener('mouseup', () => {
                wrapper.classList.remove('gallery__image-wrapper--dragging');
            });
            
            // Store slider data
            this.sliders.push({
                input,
                wrapper,
                afterImage,
                sliderLine,
                sliderHandle,
                index
            });
            
            this.state.activeSliders++;
            
            this.app.log(`Gallery slider ${index + 1} initialized`);
        });
        
        this.app.log(`Total gallery sliders initialized: ${this.state.activeSliders}`);
    }
    
    updateSlider(input, afterImage, line, handle) {
        if (!input || !afterImage) {
            return;
        }
        
        const value = parseFloat(input.value);
        const percentage = value + '%';
        const inversePercentage = (100 - value) + '%';
        
        // Update after image clip-path with smooth transition
        afterImage.style.clipPath = `inset(0 ${inversePercentage} 0 0)`;
        
        // Update slider line position
        if (line) {
            line.style.left = percentage;
        }
        
        // Update handle position
        if (handle) {
            handle.style.left = percentage;
        }
    }
    
    setupCardAnimations() {
        if (this.elements.cards.length === 0) {
            return;
        }
        
        this.elements.cards.forEach((card, index) => {
            // Hover effect with 3D tilt
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
                
                card.style.transform = `
                    translateY(-12px) 
                    perspective(1000px)
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                    scale3d(1.02, 1.02, 1.02)
                `;
            });
            
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
        
        this.app.log('Gallery card animations initialized');
    }
    
    resetSlider(index) {
        if (index < 0 || index >= this.sliders.length) {
            this.app.warn(`Invalid slider index: ${index}`);
            return;
        }
        
        const slider = this.sliders[index];
        slider.input.value = 50;
        this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
        
        this.app.log(`Gallery slider ${index + 1} reset to 50%`);
    }
    
    resetAllSliders() {
        this.sliders.forEach((_, index) => {
            this.resetSlider(index);
        });
        
        this.app.log('All gallery sliders reset');
    }
    
    getSliderValue(index) {
        if (index < 0 || index >= this.sliders.length) {
            return null;
        }
        
        return parseFloat(this.sliders[index].input.value);
    }
    
    setSliderValue(index, value) {
        if (index < 0 || index >= this.sliders.length) {
            this.app.warn(`Invalid slider index: ${index}`);
            return;
        }
        
        const clampedValue = Math.max(0, Math.min(100, value));
        const slider = this.sliders[index];
        
        slider.input.value = clampedValue;
        this.updateSlider(slider.input, slider.afterImage, slider.sliderLine, slider.sliderHandle);
        
        this.app.log(`Gallery slider ${index + 1} set to ${clampedValue}%`);
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
        if (this.state.scrollObserver) {
            this.state.scrollObserver.disconnect();
        }
        
        this.elements.cards.forEach(card => {
            card.style.transform = '';
            card.style.willChange = 'auto';
        });
        
        this.sliders = [];
        this.state.activeSliders = 0;
        
        this.app.log('Gallery handler destroyed');
    }
}