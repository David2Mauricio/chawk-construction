/**
 * TRANSLATIONS MODULE - C HAWK CONSTRUCTION
 * 
 * @fileoverview Bilingual translation dictionary for English and Spanish
 * @version 1.0.0
 * @author David Mauricio Herazo Lopez
 * 
 * @description
 * Complete internationalization (i18n) data structure containing all UI text,
 * labels, and content in both English and Spanish. Organized by sections
 * (navigation, hero, conversion, gallery, FAQ, footer) for easy maintenance
 * and scalability.
 * 
 * Structure:
 * - Each key contains an object with 'en' and 'es' properties
 * - Nested objects represent logical content groupings
 * - Supports dot notation access (e.g., "nav.home.en")
 * 
 * Usage:
 * - Import this file in app.js to enable language switching
 * - Access translations via TranslationHandler class
 * - Update content here to add/modify translations
 * 
 * Supported Languages:
 * - English (en) - Primary language
 * - Spanish (es) - Secondary language
 */


const translations = {
    // NAVIGATION
    nav: {
        home: { en: "Home", es: "Inicio" },
        services: { en: "Services", es: "Servicios" },
        portfolio: { en: "Portfolio", es: "Portafolio" },
        about: { en: "About", es: "Nosotros" },
        blog: { en: "Blog", es: "Blog" },
        contact: { en: "Contact", es: "Contacto" },
        
        // Mega menu
        mega: {
            subtitle: { en: "Professional Remodeling Services", es: "Servicios Profesionales de Remodelación" },
            license: { en: "Licensed PA #046465 • Fully Insured", es: "Licencia PA #046465 • Totalmente Asegurados" },
            directServices: { en: "Direct Services", es: "Servicios Directos" },
            directServicesDesc: { en: "Expert remodeling and construction", es: "Remodelación experta y construcción" },
            
            // Services
            carpentry: { en: "Carpentry & Framing", es: "Carpintería y Marcos" },
            carpentryDesc: { en: "Custom woodwork and structural framing", es: "Carpintería personalizada y marcos estructurales" },
            drywall: { en: "Drywall & Ceiling", es: "Paneles y Cielos" },
            drywallDesc: { en: "Professional drywall installation and finishing", es: "Instalación profesional de paneles y acabados" },
            flooring: { en: "Flooring", es: "Pisos" },
            flooringDesc: { en: "Ceramic, wood, and carpet installation", es: "Instalación de cerámica, madera y alfombra" },
            remodeling: { en: "Full Remodeling", es: "Remodelación Completa" },
            remodelingDesc: { en: "Complete home transformation projects", es: "Proyectos completos de transformación del hogar" },
            painting: { en: "Painting & Finishing", es: "Pintura y Acabados" },
            paintingDesc: { en: "Interior and exterior painting services", es: "Servicios de pintura interior y exterior" },
            weatherization: { en: "Weatherization", es: "Climatización" },
            weatherizationDesc: { en: "Energy efficiency improvements", es: "Mejoras de eficiencia energética" },
            
            ctaTitle: { en: "Ready to Start?", es: "¿Listo para Comenzar?" },
            ctaText: { en: "Get your free consultation today", es: "Obtenga su consulta gratuita hoy" },
            ctaButton: { en: "Schedule Consultation", es: "Agendar Consulta" },
            
            // Partner services
            partnerServices: { en: "Partner Services", es: "Servicios Asociados" },
            partnerServicesDesc: { en: "Emergency restoration through trusted partners", es: "Restauración de emergencia a través de socios confiables" },
            emergency: { en: "Emergency Services", es: "Servicios de Emergencia" },
            water: { en: "Water Damage", es: "Daños por Agua" },
            waterDesc: { en: "24/7 water extraction and restoration", es: "Extracción de agua y restauración 24/7" },
            fire: { en: "Fire Restoration", es: "Restauración por Incendio" },
            fireDesc: { en: "Complete fire damage recovery", es: "Recuperación completa de daños por incendio" },
            mold: { en: "Mold Remediation", es: "Remediación de Moho" },
            moldDesc: { en: "Professional mold removal services", es: "Servicios profesionales de remoción de moho" },
            biohazard: { en: "Biohazard Cleanup", es: "Limpieza de Riesgos Biológicos" },
            biohazardDesc: { en: "Safe biohazard material cleanup", es: "Limpieza segura de materiales peligrosos" },
            energy: { en: "Energy Audit", es: "Auditoría Energética" },
            energyDesc: { en: "Home energy efficiency assessment", es: "Evaluación de eficiencia energética del hogar" },
            
            // CARE card
            careTagline: { en: "Certified Restoration Excellence", es: "Excelencia en Restauración Certificada" },
            careDesc: { en: "Professional emergency services through certified partners", es: "Servicios de emergencia profesionales a través de socios certificados" },
            careTagEmergency: { en: "Emergency", es: "Emergencia" },
            careTagWater: { en: "Water", es: "Agua" },
            careTagFire: { en: "Fire", es: "Incendio" },
            careTagMold: { en: "Mold", es: "Moho" },
            careCta: { en: "24/7 Emergency Response", es: "Respuesta de Emergencia 24/7" }
        },
        
        // Mobile menu
        mobile: {
            years: { en: "10+ Years Experience", es: "10+ Años de Experiencia" },
            language: { en: "Language", es: "Idioma" },
            back: { en: "Back", es: "Atrás" }
        }
    },
    
    // HERO SECTION
    hero: {
        title: { en: "Transform Your Home Into", es: "Transforma Tu Hogar En" },
        titleHighlight: { en: "Something Extraordinary", es: "Algo Extraordinario" },
        subtitle: { en: "Expert remodeling and renovation services bringing architectural precision and artisan craftsmanship to every project across Pennsylvania.", es: "Servicios expertos de remodelación y renovación que aportan precisión arquitectónica y artesanía a cada proyecto en Pennsylvania." },
        locationStrong: { en: "Serving All of Pennsylvania", es: "Sirviendo a Todo Pennsylvania" },
        locationBased: { en: "• Based in East Berlin, PA", es: "• Con sede en East Berlin, PA" },
        ctaPrimary: { en: "Schedule Free Consultation", es: "Agendar Consulta Gratuita" },
        
        // Stats
        statProjects: { en: "Projects Completed", es: "Proyectos Completados" },
        statRating: { en: "Client Rating", es: "Calificación de Clientes" },
        statYears: { en: "Years Excellence", es: "Años de Excelencia" },
        
        // Cards
        cardKitchenTag: { en: "Kitchen", es: "Cocina" },
        cardKitchenTitle: { en: "Modern Kitchen", es: "Cocina Moderna" },
        cardKitchenDesc: { en: "Custom cabinetry and premium finishes", es: "Gabinetes personalizados y acabados premium" },
        
        cardBathroomTag: { en: "Bathroom", es: "Baño" },
        cardBathroomTitle: { en: "Luxury Bathroom", es: "Baño de Lujo" },
        cardBathroomDesc: { en: "Spa-inspired design with premium fixtures", es: "Diseño inspirado en spa con accesorios premium" },
        
        cardFullHomeTag: { en: "Full Home", es: "Casa Completa" },
        cardFullHomeTitle: { en: "Complete Remodel", es: "Remodelación Completa" },
        cardFullHomeDesc: { en: "Comprehensive home transformation", es: "Transformación integral del hogar" }
    },
    
    // CONVERSION SECTION
    conversion: {
        banner: {
            title: { en: "Get Expert Remodeling Guidance", es: "Obtenga Orientación Experta en Remodelación" },
            subtitle: { en: "Free consultation • Professional assessment • Detailed quote", es: "Consulta gratuita • Evaluación profesional • Cotización detallada" },
            projectsDone: { en: "Projects Done", es: "Proyectos Realizados" }
        },
        
        headline: {
            badge: { en: "LICENSED PA #046465 • FULLY INSURED • 5.0 RATING", es: "LICENCIA PA #046465 • TOTALMENTE ASEGURADOS • CALIFICACIÓN 5.0" },
            title: { en: "Ready to Transform", es: "¿Listo para Transformar" },
            titleAccent: { en: "Your Home?", es: "Tu Hogar?" },
            description: { en: "Get professional guidance from Pennsylvania's trusted remodeling experts", es: "Obtenga orientación profesional de los expertos en remodelación de confianza de Pennsylvania" }
        },
        
        callCard: {
            label: { en: "FASTEST RESPONSE", es: "RESPUESTA MÁS RÁPIDA" },
            title: { en: "Call Now", es: "Llamar Ahora" },
            subtitle: { en: "Speak directly with our team", es: "Hable directamente con nuestro equipo" },
            benefit1: { en: "Immediate answers", es: "Respuestas inmediatas" },
            benefit2: { en: "Project assessment", es: "Evaluación del proyecto" },
            benefit3: { en: "Free quote over phone", es: "Cotización gratuita por teléfono" },
            benefit4: { en: "Schedule site visit", es: "Programar visita al sitio" },
            status: { en: "Available Now", es: "Disponible Ahora" }
        },
        
        scheduleCard: {
            label: { en: "MOST POPULAR", es: "MÁS POPULAR" },
            title: { en: "Schedule Call", es: "Agendar Llamada" },
            subtitle: { en: "Pick a time that works for you", es: "Elija un horario que le convenga" },
            benefit1: { en: "Flexible scheduling", es: "Programación flexible" },
            benefit2: { en: "Detailed consultation", es: "Consulta detallada" },
            benefit3: { en: "Email confirmation", es: "Confirmación por correo" },
            benefit4: { en: "No obligation", es: "Sin compromiso" },
            button: { en: "Request Free Consultation", es: "Solicitar Consulta Gratuita" },
            status: { en: "Preferred by 70% of clients", es: "Preferido por el 70% de clientes" }
        },
        
        form: {
            title: { en: "Schedule Free Consultation", es: "Agendar Consulta Gratuita" },
            subtitle: { en: "We'll contact you within 24 hours", es: "Nos comunicaremos en 24 horas" },
            
            nameLabel: { en: "Your Name *", es: "Su Nombre *" },
            namePlaceholder: { en: "John Smith", es: "Juan Pérez" },
            phoneLabel: { en: "Phone Number *", es: "Número de Teléfono *" },
            emailLabel: { en: "Email *", es: "Correo Electrónico *" },
            emailPlaceholder: { en: "john@email.com", es: "juan@correo.com" },
            projectLabel: { en: "Project Type *", es: "Tipo de Proyecto *" },
            projectPlaceholder: { en: "Select project...", es: "Seleccionar proyecto..." },
            projectKitchen: { en: "Kitchen Remodel", es: "Remodelación de Cocina" },
            projectBathroom: { en: "Bathroom Renovation", es: "Renovación de Baño" },
            projectFullHome: { en: "Full Home Remodel", es: "Remodelación de Casa Completa" },
            projectOther: { en: "Other", es: "Otro" },
            timeLabel: { en: "Best Time to Call", es: "Mejor Hora para Llamar" },
            timeAny: { en: "Any time", es: "Cualquier hora" },
            timeMorning: { en: "Morning (8am-12pm)", es: "Mañana (8am-12pm)" },
            timeAfternoon: { en: "Afternoon (12pm-5pm)", es: "Tarde (12pm-5pm)" },
            timeEvening: { en: "Evening (5pm-7pm)", es: "Noche (5pm-7pm)" },
            submitButton: { en: "Request Free Consultation", es: "Solicitar Consulta Gratuita" },
            
            trust1: { en: "24h email response", es: "Respuesta por correo en 24h" },
            trust2: { en: "No obligation", es: "Sin compromiso" },
            trust3: { en: "Licensed & insured", es: "Con licencia y asegurados" }
        },
        
        success: {
            title: { en: "Thank You!", es: "¡Gracias!" },
            text: { en: "We'll contact you shortly", es: "Nos comunicaremos pronto" },
            label: { en: "Need immediate help?", es: "¿Necesita ayuda inmediata?" }
        },
        
        testimonials: {
            title: { en: "What Our Clients Say", es: "Lo Que Dicen Nuestros Clientes" },
            subtitle: { en: "Based on 100+ completed projects", es: "Basado en más de 100 proyectos completados" }
        },
        
        activity: {
            title: { en: "Recent Contacts", es: "Contactos Recientes" },
            typePhone: { en: "Phone", es: "Teléfono" },
            typeScheduled: { en: "Scheduled", es: "Agendado" },
            typeEmail: { en: "Email", es: "Correo" }
        }
    },
    
    // GALLERY SECTION
    gallery: {
        badge: { en: "OUR PORTFOLIO", es: "NUESTRO PORTAFOLIO" },
        title: { en: "Recent", es: "Proyectos" },
        titleAccent: { en: "Projects", es: "Recientes" },
        description: { en: "Explore our portfolio of completed remodeling projects across Pennsylvania", es: "Explore nuestro portafolio de proyectos de remodelación completados en Pennsylvania" },
        before: { en: "Before", es: "Antes" },
        after: { en: "After", es: "Después" },
        
        kitchen: {
            category: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
            title: { en: "Modern Kitchen Transformation", es: "Transformación de Cocina Moderna" },
            description: { en: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and premium appliances", es: "Renovación completa de cocina con gabinetes personalizados, mesones de cuarzo y electrodomésticos premium" },
            duration: { en: "6 weeks", es: "6 semanas" },
            feature1: { en: "Custom white shaker cabinets", es: "Gabinetes shaker blancos personalizados" },
            feature2: { en: "Quartz waterfall island", es: "Isla con cascada de cuarzo" },
            feature3: { en: "Professional-grade appliances", es: "Electrodomésticos de grado profesional" }
        },
        
        bathroom: {
            category: { en: "Bathroom Renovation", es: "Renovación de Baño" },
            title: { en: "Luxury Bathroom Spa Retreat", es: "Retiro de Spa de Baño de Lujo" },
            description: { en: "Full bathroom renovation with walk-in shower, custom vanity, and premium fixtures", es: "Renovación completa de baño con ducha walk-in, tocador personalizado y accesorios premium" },
            duration: { en: "4 weeks", es: "4 semanas" },
            feature1: { en: "Frameless glass shower", es: "Ducha de vidrio sin marco" },
            feature2: { en: "Heated tile flooring", es: "Piso de baldosas con calefacción" },
            feature3: { en: "Custom dual vanity", es: "Tocador doble personalizado" }
        },
        
        fullhome: {
            category: { en: "Full Home Renovation", es: "Renovación de Casa Completa" },
            title: { en: "Complete Home Makeover", es: "Renovación Completa del Hogar" },
            description: { en: "Whole home renovation including kitchen, bathrooms, flooring, and paint throughout", es: "Renovación completa del hogar incluyendo cocina, baños, pisos y pintura" },
            duration: { en: "12 weeks", es: "12 semanas" },
            feature1: { en: "Open concept layout", es: "Diseño de concepto abierto" },
            feature2: { en: "New hardwood flooring", es: "Piso de madera nuevo" },
            feature3: { en: "Modern light fixtures", es: "Accesorios de iluminación modernos" }
        },
        
        ctaButton: { en: "View All Projects", es: "Ver Todos los Proyectos" },
        ctaText: { en: "or schedule your free consultation", es: "o agende su consulta gratuita" }
    },
    
    // WHY US SECTION  
    whyUs: {
        badge: { en: "TRUSTED BY 100+ FAMILIES", es: "CONFIADO POR MÁS DE 100 FAMILIAS" },
        title: { en: "Why Pennsylvania Homeowners", es: "Por Qué Los Propietarios de Pennsylvania" },
        titleAccent: { en: "Choose C Hawk Construction", es: "Eligen C Hawk Construction" },
        description: { en: "Licensed, insured, and committed to turning your remodeling vision into reality with quality craftsmanship and professional service.", es: "Con licencia, asegurados y comprometidos a convertir su visión de remodelación en realidad con artesanía de calidad y servicio profesional." },
        
        trust1: {
            title: { en: "Licensed PA #046465", es: "Licencia PA #046465" },
            subtitle: { en: "State Certified Contractor", es: "Contratista Certificado del Estado" }
        },
        trust2: {
            title: { en: "Fully Insured", es: "Totalmente Asegurados" },
            subtitle: { en: "Comprehensive Coverage", es: "Cobertura Integral" }
        },
        trust3: {
            title: { en: "5.0 Star Rating", es: "Calificación 5.0 Estrellas" },
            subtitle: { en: "100+ Happy Clients", es: "Más de 100 Clientes Satisfechos" }
        },
        trust4: {
            title: { en: "10+ Years", es: "10+ Años" },
            subtitle: { en: "Industry Experience", es: "Experiencia en la Industria" }
        },
        
        feature1: {
            title: { en: "Licensed & Insured Protection", es: "Protección Con Licencia y Asegurados" },
            description: { en: "Pennsylvania state licensed contractor (#046465) with comprehensive insurance coverage. Your project and property are fully protected throughout the entire remodeling process.", es: "Contratista con licencia estatal de Pennsylvania (#046465) con cobertura de seguro integral. Su proyecto y propiedad están completamente protegidos durante todo el proceso de remodelación." },
            item1: { en: "State certified contractor", es: "Contratista certificado del estado" },
            item2: { en: "Full liability coverage", es: "Cobertura de responsabilidad completa" },
            item3: { en: "Workers compensation", es: "Compensación para trabajadores" }
        },
        
        feature2: {
            title: { en: "On-Time Project Completion", es: "Finalización de Proyectos a Tiempo" },
            description: { en: "We respect your time and schedule. Every project comes with a clear timeline and we're committed to completing your remodel on time, every time.", es: "Respetamos su tiempo y horario. Cada proyecto viene con un cronograma claro y estamos comprometidos a completar su remodelación a tiempo, siempre." },
            item1: { en: "Detailed project timeline", es: "Cronograma detallado del proyecto" },
            item2: { en: "Regular progress updates", es: "Actualizaciones regulares de progreso" },
            item3: { en: "No unnecessary delays", es: "Sin retrasos innecesarios" }
        },
        
        feature3: {
            title: { en: "Transparent Communication", es: "Comunicación Transparente" },
            description: { en: "No hidden surprises. We provide detailed quotes upfront and keep you informed every step of the way with clear, honest communication throughout your project.", es: "Sin sorpresas ocultas. Proporcionamos cotizaciones detalladas por adelantado y lo mantenemos informado en cada paso con comunicación clara y honesta durante su proyecto." },
            item1: { en: "Detailed written estimates", es: "Estimaciones escritas detalladas" },
            item2: { en: "Clear scope of work", es: "Alcance de trabajo claro" },
            item3: { en: "Daily progress reports", es: "Reportes de progreso diarios" }
        },
        
        feature4: {
            title: { en: "Premium Quality Materials", es: "Materiales de Calidad Premium" },
            description: { en: "We use only high-quality materials from trusted suppliers. Your investment deserves the best, and we deliver lasting results with superior craftsmanship.", es: "Usamos solo materiales de alta calidad de proveedores confiables. Su inversión merece lo mejor, y entregamos resultados duraderos con artesanía superior." },
            item1: { en: "Top-grade materials only", es: "Solo materiales de primera calidad" },
            item2: { en: "Trusted brand partners", es: "Socios de marca confiables" },
            item3: { en: "Long-lasting durability", es: "Durabilidad duradera" }
        },
        
        feature5: {
            title: { en: "Family-Owned & Local", es: "De Propiedad Familiar y Local" },
            description: { en: "As a family-owned Pennsylvania business, we treat your home like our own. Personal attention, local expertise, and genuine care for every project we undertake.", es: "Como un negocio familiar de Pennsylvania, tratamos su hogar como si fuera nuestro. Atención personal, experiencia local y cuidado genuino por cada proyecto que emprendemos." },
            item1: { en: "Personal owner involvement", es: "Participación personal del propietario" },
            item2: { en: "Local Pennsylvania business", es: "Negocio local de Pennsylvania" },
            item3: { en: "Community trusted", es: "Confiado por la comunidad" }
        },
        
        feature6: {
            title: { en: "Always Available Support", es: "Soporte Siempre Disponible" },
            description: { en: "Questions? Concerns? We're here for you. Reach us by phone or email throughout your project and even after completion for any follow-up needs.", es: "¿Preguntas? ¿Preocupaciones? Estamos aquí para usted. Comuníquese con nosotros por teléfono o correo electrónico durante su proyecto e incluso después de la finalización para cualquier necesidad de seguimiento." },
            item1: { en: "Direct owner contact", es: "Contacto directo con el propietario" },
            item2: { en: "Fast response times", es: "Tiempos de respuesta rápidos" },
            item3: { en: "Post-project support", es: "Soporte posterior al proyecto" }
        },
        
        process: {
            title: { en: "Our Simple 4-Step Process", es: "Nuestro Simple Proceso de 4 Pasos" },
            subtitle: { en: "From initial consultation to final walkthrough, we make remodeling stress-free", es: "Desde la consulta inicial hasta la inspección final, hacemos que la remodelación sea libre de estrés" },
            
            step1: {
                title: { en: "Free Consultation", es: "Consulta Gratuita" },
                description: { en: "We discuss your vision, needs, and budget. Visit your home to assess the space and provide expert recommendations.", es: "Discutimos su visión, necesidades y presupuesto. Visitamos su hogar para evaluar el espacio y proporcionar recomendaciones expertas." },
                duration: { en: "Duration: 30-60 minutes", es: "Duración: 30-60 minutos" }
            },
            step2: {
                title: { en: "Detailed Proposal", es: "Propuesta Detallada" },
                description: { en: "Receive a comprehensive written quote with detailed scope of work, materials list, and project timeline. No hidden fees.", es: "Reciba una cotización escrita integral con alcance detallado del trabajo, lista de materiales y cronograma del proyecto. Sin tarifas ocultas." },
                duration: { en: "Delivered: Within 48 hours", es: "Entregado: En 48 horas" }
            },
            step3: {
                title: { en: "Professional Execution", es: "Ejecución Profesional" },
                description: { en: "Our licensed team brings your vision to life with quality craftsmanship, clean work practices, and daily progress updates.", es: "Nuestro equipo con licencia da vida a su visión con artesanía de calidad, prácticas de trabajo limpias y actualizaciones de progreso diarias." },
                duration: { en: "Timeline: As quoted in proposal", es: "Cronograma: Como se cotizó en la propuesta" }
            },
            step4: {
                title: { en: "Final Walkthrough", es: "Inspección Final" },
                description: { en: "Complete project inspection with you. We ensure every detail meets your expectations before considering the job complete.", es: "Inspección completa del proyecto con usted. Nos aseguramos de que cada detalle cumpla con sus expectativas antes de considerar el trabajo completo." },
                duration: { en: "Your satisfaction guaranteed", es: "Su satisfacción garantizada" }
            }
        },
        
        guarantee: {
            title: { en: "Our Quality Guarantee", es: "Nuestra Garantía de Calidad" },
            text: { en: "We stand behind our work with a comprehensive satisfaction guarantee. If you're not completely satisfied with the quality of our craftsmanship, we'll make it right. Your trust is our top priority, and we're committed to delivering results that exceed your expectations.", es: "Respaldamos nuestro trabajo con una garantía de satisfacción integral. Si no está completamente satisfecho con la calidad de nuestra artesanía, lo arreglaremos. Su confianza es nuestra máxima prioridad, y estamos comprometidos a entregar resultados que superen sus expectativas." },
            feature1: { en: "Quality workmanship guaranteed", es: "Artesanía de calidad garantizada" },
            feature2: { en: "Licensed & insured protection", es: "Protección con licencia y asegurados" },
            feature3: { en: "Clear written contracts", es: "Contratos escritos claros" }
        },
        
        cta: {
            title: { en: "Ready to Start Your Project?", es: "¿Listo para Comenzar Su Proyecto?" },
            text: { en: "Join 100+ satisfied Pennsylvania homeowners who chose quality and professionalism", es: "Únase a más de 100 propietarios satisfechos de Pennsylvania que eligieron calidad y profesionalismo" },
            button: { en: "Get Your Free Consultation", es: "Obtenga Su Consulta Gratuita" },
            callText: { en: "Or call us directly:", es: "O llámenos directamente:" }
        }
    },
    
    // FAQ SECTION
    faq: {
        badge: { en: "ANSWERS YOU NEED", es: "RESPUESTAS QUE NECESITA" },
        title: { en: "Frequently Asked", es: "Preguntas" },
        titleAccent: { en: "Questions", es: "Frecuentes" },
        description: { en: "Clear answers to help you make the best decision for your home remodeling project in Pennsylvania.", es: "Respuestas claras para ayudarlo a tomar la mejor decisión para su proyecto de remodelación del hogar en Pennsylvania." },
        
        q1: {
            question: { en: "How long does a typical remodeling project take?", es: "¿Cuánto tiempo toma un proyecto típico de remodelación?" },
            intro: { en: "Project timelines vary based on scope and complexity. Here are typical timeframes:", es: "Los cronogramas del proyecto varían según el alcance y la complejidad. Aquí hay plazos típicos:" },
            bathroom: { en: "Bathroom Remodel:", es: "Remodelación de Baño:" },
            bathroomTime: { en: "2-4 weeks", es: "2-4 semanas" },
            kitchen: { en: "Kitchen Remodel:", es: "Remodelación de Cocina:" },
            kitchenTime: { en: "4-8 weeks", es: "4-8 semanas" },
            fullHome: { en: "Full Home Renovation:", es: "Renovación de Casa Completa:" },
            fullHomeTime: { en: "8-16 weeks", es: "8-16 semanas" },
            outro: { en: "We provide a detailed timeline in your project proposal and keep you updated throughout the entire process. Our commitment to punctuality means we stick to agreed schedules.", es: "Proporcionamos un cronograma detallado en su propuesta de proyecto y lo mantenemos actualizado durante todo el proceso. Nuestro compromiso con la puntualidad significa que nos apegamos a los horarios acordados." }
        },
        
        q2: {
            question: { en: "What services does C Hawk Construction offer?", es: "¿Qué servicios ofrece C Hawk Construction?" },
            intro: { en: "We specialize in comprehensive residential remodeling and renovation services, including:", es: "Nos especializamos en servicios integrales de remodelación y renovación residencial, que incluyen:" },
            service1: { en: "Kitchen & Bathroom Remodeling:", es: "Remodelación de Cocina y Baño:" },
            service1Desc: { en: "Complete renovations with modern designs", es: "Renovaciones completas con diseños modernos" },
            service2: { en: "Carpentry & Framing:", es: "Carpintería y Marcos:" },
            service2Desc: { en: "Custom woodwork and structural improvements", es: "Carpintería personalizada y mejoras estructurales" },
            service3: { en: "Flooring:", es: "Pisos:" },
            service3Desc: { en: "Ceramic, wood, and carpet installation", es: "Instalación de cerámica, madera y alfombra" },
            service4: { en: "Drywall & Painting:", es: "Paneles y Pintura:" },
            service4Desc: { en: "Professional finish work", es: "Trabajo de acabado profesional" },
            service5: { en: "Full Home Renovations:", es: "Renovaciones de Casa Completa:" },
            service5Desc: { en: "Complete property transformations", es: "Transformaciones completas de propiedad" },
            service6: { en: "Emergency Restoration:", es: "Restauración de Emergencia:" },
            service6Desc: { en: "Water damage, mold remediation, and board-up services", es: "Daños por agua, remediación de moho y servicios de cierre" },
            outro: { en: "All services are performed by our licensed team with the same commitment to quality and professionalism.", es: "Todos los servicios son realizados por nuestro equipo con licencia con el mismo compromiso con la calidad y el profesionalismo." }
        },
        
        q3: {
            question: { en: "How much does a remodeling project cost?", es: "¿Cuánto cuesta un proyecto de remodelación?" },
            intro: { en: "Every project is unique, and costs depend on several factors including size, materials, and complexity. We provide:", es: "Cada proyecto es único, y los costos dependen de varios factores, incluidos el tamaño, los materiales y la complejidad. Proporcionamos:" },
            item1: { en: "Free Consultation:", es: "Consulta Gratuita:" },
            item1Desc: { en: "We visit your home to understand your vision", es: "Visitamos su hogar para comprender su visión" },
            item2: { en: "Transparent Pricing:", es: "Precios Transparentes:" },
            item2Desc: { en: "Detailed written quotes with no hidden fees", es: "Cotizaciones escritas detalladas sin tarifas ocultas" },
            item3: { en: "Flexible Options:", es: "Opciones Flexibles:" },
            item3Desc: { en: "We work within your budget and suggest alternatives when needed", es: "Trabajamos dentro de su presupuesto y sugerimos alternativas cuando sea necesario" },
            outro: { en: "Our quotes are delivered within 48 hours of your consultation and include a complete breakdown of costs, materials, and timeline. Contact us for a free, no-obligation estimate.", es: "Nuestras cotizaciones se entregan dentro de las 48 horas de su consulta e incluyen un desglose completo de costos, materiales y cronograma. Contáctenos para una estimación gratuita y sin compromiso." }
        },
        
        q4: {
            question: { en: "Are you licensed and insured in Pennsylvania?", es: "¿Tienen licencia y seguro en Pennsylvania?" },
            intro: { en: "Yes, absolutely.", es: "Sí, absolutamente." },
            company: { en: "C Hawk Construction is:", es: "C Hawk Construction es:" },
            item1: { en: "Pennsylvania Licensed:", es: "Con Licencia de Pennsylvania:" },
            item1Desc: { en: "Contractor License #046465", es: "Licencia de Contratista #046465" },
            item2: { en: "Fully Insured:", es: "Totalmente Asegurados:" },
            item2Desc: { en: "Comprehensive liability coverage for your protection", es: "Cobertura de responsabilidad integral para su protección" },
            item3: { en: "Workers Compensation:", es: "Compensación de Trabajadores:" },
            item3Desc: { en: "All team members are covered", es: "Todos los miembros del equipo están cubiertos" },
            outro: { en: "Your property and investment are fully protected throughout the entire project. We're happy to provide copies of our licenses and insurance certificates upon request.", es: "Su propiedad e inversión están completamente protegidas durante todo el proyecto. Estamos encantados de proporcionar copias de nuestras licencias y certificados de seguro a pedido." }
        },
        
        q5: {
            question: { en: "Do I need to obtain permits for my project?", es: "¿Necesito obtener permisos para mi proyecto?" },
            intro: { en: "Permit requirements vary based on the scope of work and your local jurisdiction. We handle this for you:", es: "Los requisitos de permisos varían según el alcance del trabajo y su jurisdicción local. Manejamos esto por usted:" },
            item1: { en: "We Assess Requirements:", es: "Evaluamos los Requisitos:" },
            item1Desc: { en: "During consultation, we identify necessary permits", es: "Durante la consulta, identificamos los permisos necesarios" },
            item2: { en: "We Handle Applications:", es: "Manejamos las Aplicaciones:" },
            item2Desc: { en: "Our team manages all permit paperwork and applications", es: "Nuestro equipo gestiona todos los trámites y aplicaciones de permisos" },
            item3: { en: "We Ensure Compliance:", es: "Aseguramos el Cumplimiento:" },
            item3Desc: { en: "All work meets Pennsylvania building codes and regulations", es: "Todo el trabajo cumple con los códigos y regulaciones de construcción de Pennsylvania" },
            outro: { en: "You don't need to worry about the bureaucratic process—we take care of it as part of our professional service.", es: "No necesita preocuparse por el proceso burocrático, nos encargamos de ello como parte de nuestro servicio profesional." }
        },
        
        q6: {
            question: { en: "What warranty or guarantee do you provide?", es: "¿Qué garantía o garantía proporcionan?" },
            intro: { en: "We stand behind our work with a comprehensive quality guarantee:", es: "Respaldamos nuestro trabajo con una garantía de calidad integral:" },
            item1: { en: "Workmanship Guarantee:", es: "Garantía de Artesanía:" },
            item1Desc: { en: "We ensure all work meets our high-quality standards", es: "Nos aseguramos de que todo el trabajo cumpla con nuestros altos estándares de calidad" },
            item2: { en: "Satisfaction Commitment:", es: "Compromiso de Satisfacción:" },
            item2Desc: { en: "If you're not satisfied, we make it right", es: "Si no está satisfecho, lo arreglamos" },
            item3: { en: "Material Warranties:", es: "Garantías de Materiales:" },
            item3Desc: { en: "All materials come with manufacturer warranties", es: "Todos los materiales vienen con garantías del fabricante" },
            outro: { en: "Before project completion, we conduct a thorough walkthrough with you to ensure every detail meets your expectations. Your satisfaction is our priority.", es: "Antes de la finalización del proyecto, realizamos una inspección exhaustiva con usted para asegurarnos de que cada detalle cumpla con sus expectativas. Su satisfacción es nuestra prioridad." }
        },
        
        q7: {
            question: { en: "Will I need to leave my home during the renovation?", es: "¿Necesitaré dejar mi hogar durante la renovación?" },
            intro: { en: "In most cases, you can remain in your home during renovation. We take steps to minimize disruption:", es: "En la mayoría de los casos, puede permanecer en su hogar durante la renovación. Tomamos medidas para minimizar la interrupción:" },
            item1: { en: "Contained Work Zones:", es: "Zonas de Trabajo Contenidas:" },
            item1Desc: { en: "We isolate construction areas with protective barriers", es: "Aislamos las áreas de construcción con barreras protectoras" },
            item2: { en: "Daily Cleanup:", es: "Limpieza Diaria:" },
            item2Desc: { en: "We maintain a clean, organized workspace", es: "Mantenemos un espacio de trabajo limpio y organizado" },
            item3: { en: "Flexible Scheduling:", es: "Programación Flexible:" },
            item3Desc: { en: "We work around your daily routine when possible", es: "Trabajamos alrededor de su rutina diaria cuando es posible" },
            outro: { en: "For extensive whole-home renovations, temporary relocation might be recommended for your comfort and safety. We'll discuss this during your consultation and help plan accordingly.", es: "Para renovaciones extensas de toda la casa, se podría recomendar la reubicación temporal para su comodidad y seguridad. Discutiremos esto durante su consulta y ayudaremos a planificar en consecuencia." }
        },
        
        q8: {
            question: { en: "How do I get started with my project?", es: "¿Cómo empiezo con mi proyecto?" },
            intro: { en: "Getting started is simple and straightforward:", es: "Comenzar es simple y directo:" },
            step1: { en: "Contact Us:", es: "Contáctenos:" },
            step1Desc: { en: "Call (443) 858-0904 or email contact@chawkconstruction.com", es: "Llame al (443) 858-0904 o envíe un correo a contact@chawkconstruction.com" },
            step2: { en: "Free Consultation:", es: "Consulta Gratuita:" },
            step2Desc: { en: "We visit your home to discuss your vision and needs (30-60 minutes)", es: "Visitamos su hogar para discutir su visión y necesidades (30-60 minutos)" },
            step3: { en: "Detailed Proposal:", es: "Propuesta Detallada:" },
            step3Desc: { en: "Receive a comprehensive quote within 48 hours", es: "Reciba una cotización integral en 48 horas" },
            step4: { en: "Project Start:", es: "Inicio del Proyecto:" },
            step4Desc: { en: "Once approved, we schedule your project and begin work", es: "Una vez aprobado, programamos su proyecto y comenzamos el trabajo" },
            outro: { en: "The entire process is transparent, professional, and designed around your schedule. We're here to make your remodeling experience stress-free.", es: "Todo el proceso es transparente, profesional y diseñado alrededor de su horario. Estamos aquí para hacer que su experiencia de remodelación sea libre de estrés." }
        },
        
        cta: {
            title: { en: "Still Have Questions?", es: "¿Todavía Tiene Preguntas?" },
            text: { en: "Our team is ready to provide personalized answers for your specific project", es: "Nuestro equipo está listo para proporcionar respuestas personalizadas para su proyecto específico" },
            callButton: { en: "Call (443) 858-0904", es: "Llamar (443) 858-0904" },
            emailButton: { en: "Send Email", es: "Enviar Correo" }
        }
    },
    
    // FOOTER
    footer: {
        tagline: { en: "Transforming Pennsylvania homes with precision, quality, and professionalism since 2022.", es: "Transformando hogares de Pennsylvania con precisión, calidad y profesionalismo desde 2022." },
        
        license: {
            label: { en: "Licensed Contractor", es: "Contratista Con Licencia" }
        },
        
        trust: {
            insured: { en: "Fully Insured", es: "Totalmente Asegurados" },
            rating: { en: "5.0 Rating", es: "Calificación 5.0" },
            years: { en: "10+ Years", es: "10+ Años" }
        },
        
        quickLinks: {
            title: { en: "Quick Links", es: "Enlaces Rápidos" },
            home: { en: "Home", es: "Inicio" },
            services: { en: "Our Services", es: "Nuestros Servicios" },
            portfolio: { en: "Portfolio", es: "Portafolio" },
            about: { en: "About Us", es: "Nosotros" },
            blog: { en: "Blog", es: "Blog" },
            contact: { en: "Contact", es: "Contacto" }
        },
        
        services: {
            title: { en: "Our Services", es: "Nuestros Servicios" },
            kitchen: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
            bathroom: { en: "Bathroom Renovation", es: "Renovación de Baño" },
            carpentry: { en: "Custom Carpentry", es: "Carpintería Personalizada" },
            drywall: { en: "Drywall & Finishing", es: "Paneles y Acabados" },
            flooring: { en: "Flooring Installation", es: "Instalación de Pisos" },
            viewAll: { en: "View All Services", es: "Ver Todos los Servicios" }
        },
        
        contact: {
            title: { en: "Get In Touch", es: "Contáctenos" },
            callUs: { en: "Call Us", es: "Llámenos" },
            email: { en: "Email", es: "Correo" },
            location: { en: "Location", es: "Ubicación" },
            hours: { en: "Business Hours", es: "Horario de Atención" },
            monFri: { en: "Mon-Fri:", es: "Lun-Vie:" },
            sat: { en: "Sat:", es: "Sáb:" },
            sun: { en: "Sun:", es: "Dom:" },
            closed: { en: "Closed", es: "Cerrado" }
        },
        
        social: {
            title: { en: "Follow Us", es: "Síguenos" }
        },
        
        copyright: { en: "© 2025 C Hawk Construction and Renovation LLC. All rights reserved.", es: "© 2025 C Hawk Construction and Renovation LLC. Todos los derechos reservados." },
        
        legal: {
            privacy: { en: "Privacy Policy", es: "Política de Privacidad" },
            terms: { en: "Terms of Service", es: "Términos de Servicio" },
            sitemap: { en: "Sitemap", es: "Mapa del Sitio" }
        },
        
        developer: {
            credit: { en: "Designed & Developed by", es: "Diseñado y Desarrollado por" }
        }
    },
     // ============================================================
  // CONTACT PAGE
  // ============================================================
  contact: {

    // Hero
    hero: {
      badge:        { en: "GET IN TOUCH WITH OUR TEAM",                                                              es: "CONTÁCTATE CON NUESTRO EQUIPO" },
      title:        { en: "Let's Build",                                                                             es: "Construyamos" },
      titleAccent:  { en: "Your Dream Home",                                                                         es: "Tu Hogar Ideal" },
      description:  { en: "Our licensed Pennsylvania team is ready to transform your vision into reality. With 2000+ completed projects since 2021, we bring expertise, passion, and dedication to every job.", es: "Nuestro equipo licenciado en Pennsylvania está listo para transformar tu visión en realidad. Con más de 2000 proyectos completados desde 2021, aportamos experiencia, pasión y dedicación a cada trabajo." },
      stat1Number:  { en: "24h",          es: "24h" },
      stat1Label:   { en: "Response Time", es: "Tiempo de Respuesta" },
      stat2Label:   { en: "Projects",     es: "Proyectos" },
      stat3Label:   { en: "Rating",       es: "Calificación" },
      ctaCall:      { en: "Call Now",     es: "Llamar Ahora" },
      ctaForm:      { en: "Send Message", es: "Enviar Mensaje" },
      licenseLabel: { en: "Licensed",     es: "Licenciado" }
    },

    // Team
    team: {
      title:          { en: "Meet Our",                    es: "Conoce a Nuestro" },
      titleAccent:    { en: "Leadership Team",             es: "Equipo Directivo" },
      subtitle:       { en: "Experienced professionals dedicated to your project success", es: "Profesionales con experiencia dedicados al éxito de tu proyecto" },
      member1Role:    { en: "Financial & Administrative Director", es: "Director Financiero y Administrativo" },
      member1Desc:    { en: "Manages financial operations, budget planning, and administrative oversight to ensure project efficiency", es: "Gestiona operaciones financieras, planificación presupuestaria y supervisión administrativa para garantizar la eficiencia del proyecto" },
      member2Role:    { en: "Operations & Logistics Director", es: "Director de Operaciones y Logística" },
      member2Desc:    { en: "Coordinates project logistics, materials procurement, and operational execution for seamless delivery", es: "Coordina la logística del proyecto, adquisición de materiales y ejecución operativa para una entrega impecable" },
      linkedinConnect: { en: "Connect on LinkedIn", es: "Conectar en LinkedIn" }
    },

    // Contact Methods
    methods: {
      title:    { en: "Choose Your Preferred Contact Method",                    es: "Elige Tu Método de Contacto Preferido" },
      subtitle: { en: "We're here to help you bring your remodeling vision to life", es: "Estamos aquí para ayudarte a hacer realidad tu visión de remodelación" },

      call: {
        badge:       { en: "FASTEST",                                            es: "MÁS RÁPIDO" },
        title:       { en: "Call Us Directly",                                   es: "Llámanos Directamente" },
        description: { en: "Speak with our Pennsylvania team for immediate assistance and quick answers", es: "Habla con nuestro equipo de Pennsylvania para asistencia inmediata y respuestas rápidas" },
        label:       { en: "Phone",                                              es: "Teléfono" },
        feature1:    { en: "Immediate response",                                 es: "Respuesta inmediata" },
        feature2:    { en: "Mon-Sat 8AM-6PM",                                   es: "Lun-Sáb 8AM-6PM" },
        feature3:    { en: "Free consultation",                                  es: "Consulta gratuita" },
        button:      { en: "Call Now",                                           es: "Llamar Ahora" }
      },

      email: {
        badge:       { en: "DETAILED",                                           es: "DETALLADO" },
        title:       { en: "Email Us",                                           es: "Escríbenos" },
        description: { en: "Send detailed messages about your project with photos and specifications", es: "Envía mensajes detallados sobre tu proyecto con fotos y especificaciones" },
        label:       { en: "Email",                                              es: "Correo" },
        feature1:    { en: "24h response time",                                  es: "Respuesta en 24h" },
        feature2:    { en: "Attach photos",                                      es: "Adjunta fotos" },
        feature3:    { en: "Detailed responses",                                 es: "Respuestas detalladas" },
        button:      { en: "Send Email",                                         es: "Enviar Correo" }
      },

      schedule: {
        badge:       { en: "FLEXIBLE",                                           es: "FLEXIBLE" },
        title:       { en: "Schedule Consultation",                              es: "Agenda una Consulta" },
        description: { en: "Book a free virtual or on-site consultation at your convenience", es: "Reserva una consulta gratuita virtual o presencial a tu conveniencia" },
        label:       { en: "Availability",                                       es: "Disponibilidad" },
        value:       { en: "Mon-Sat: 8AM-6PM",                                  es: "Lun-Sáb: 8AM-6PM" },
        feature1:    { en: "Virtual or on-site",                                 es: "Virtual o presencial" },
        feature2:    { en: "No obligation",                                      es: "Sin compromiso" },
        feature3:    { en: "Expert guidance",                                    es: "Orientación experta" },
        button:      { en: "Schedule Now",                                       es: "Agendar Ahora" }
      }
    },

    // Contact Form
    form: {
      title:              { en: "Send Us a Message",                             es: "Envíanos un Mensaje" },
      subtitle:           { en: "Fill out the form and we'll get back to you within 24 hours", es: "Completa el formulario y te responderemos en 24 horas" },
      nameLabel:          { en: "Your Name *",                                   es: "Tu Nombre *" },
      namePlaceholder:    { en: "John Smith",                                    es: "Juan García" },
      emailLabel:         { en: "Email Address *",                               es: "Correo Electrónico *" },
      emailPlaceholder:   { en: "john@email.com",                                es: "juan@correo.com" },
      phoneLabel:         { en: "Phone Number *",                                es: "Número de Teléfono *" },
      locationLabel:      { en: "Your Location *",                               es: "Tu Ubicación *" },
      locationPlaceholder:{ en: "Select your area...",                           es: "Selecciona tu área..." },
      subjectLabel:       { en: "Project Type *",                                es: "Tipo de Proyecto *" },
      subjectPlaceholder: { en: "Select project type...",                        es: "Selecciona el tipo de proyecto..." },
      subjectKitchen:     { en: "Kitchen Remodeling",                            es: "Remodelación de Cocina" },
      subjectBathroom:    { en: "Bathroom Renovation",                           es: "Renovación de Baño" },
      subjectFullHome:    { en: "Full Home Remodel",                             es: "Remodelación Completa del Hogar" },
      subjectCarpentry:   { en: "Carpentry Services",                            es: "Servicios de Carpintería" },
      subjectFlooring:    { en: "Flooring Installation",                         es: "Instalación de Pisos" },
      subjectOther:       { en: "Other",                                         es: "Otro" },
      messageLabel:       { en: "Your Message *",                                es: "Tu Mensaje *" },
      messagePlaceholder: { en: "Tell us about your project...",                 es: "Cuéntanos sobre tu proyecto..." },
      submitButton:       { en: "Send Message",                                  es: "Enviar Mensaje" },
      trust1:             { en: "Your information is secure",                    es: "Tu información está segura" },
      trust2:             { en: "24h response guaranteed",                       es: "Respuesta en 24h garantizada" }
    },

    // Trust Cards
    trust: {
      licensedTitle: { en: "Licensed & Insured",        es: "Licenciado y Asegurado" },
      licensedText:  { en: "PA190465 with full insurance coverage", es: "PA190465 con cobertura total de seguro" },
      ratingTitle:   { en: "5.0 Star Rating",           es: "Calificación 5.0 Estrellas" },
      ratingText:    { en: "2000+ satisfied customers", es: "2000+ clientes satisfechos" }
    },

    // Testimonials
    testimonials: {
      title:             { en: "What Our",                                       es: "Lo Que Dicen" },
      titleAccent:       { en: "Customers Say",                                  es: "Nuestros Clientes" },
      subtitle:          { en: "Real feedback from Pennsylvania & Maryland homeowners", es: "Opiniones reales de propietarios de Pennsylvania y Maryland" },
      customer1Name:     { en: "Sarah M.",     es: "Sarah M." },
      customer1Location: { en: "York, PA",     es: "York, PA" },
      customer1Text:     { en: '"Outstanding kitchen remodel! The team was professional, punctual, and the quality exceeded our expectations. Highly recommend C Hawk Construction."', es: '"¡Remodelación de cocina excepcional! El equipo fue profesional, puntual y la calidad superó nuestras expectativas. Recomiendo ampliamente C Hawk Construction."' },
      customer2Name:     { en: "Michael R.",   es: "Michael R." },
      customer2Location: { en: "Hanover, PA",  es: "Hanover, PA" },
      customer2Text:     { en: '"From start to finish, C Hawk made our bathroom renovation stress-free. Amazing craftsmanship and attention to detail. Worth every penny!"', es: '"De principio a fin, C Hawk hizo que nuestra renovación de baño fuera sin estrés. ¡Artesanía increíble y atención al detalle. Valió cada centavo!"' },
      customer3Name:     { en: "Jennifer L.",  es: "Jennifer L." },
      customer3Location: { en: "Baltimore, MD", es: "Baltimore, MD" },
      customer3Text:     { en: '"Best decision we made! The team transformed our outdated home into a modern masterpiece. Professional, reliable, and incredibly skilled."', es: '"¡La mejor decisión que tomamos! El equipo transformó nuestra casa anticuada en una obra maestra moderna. Profesionales, confiables e increíblemente hábiles."' }
    }
  }
};



window.translations = translations;

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}