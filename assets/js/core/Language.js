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
                    subtitle: { en: "Based on 100+ completed projects", es: "Basado en más de 2000 proyectos completados" }
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
                badge: { en: "TRUSTED BY 2000+ FAMILIES", es: "CONFIADO POR MÁS DE 2000 FAMILIAS" },
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
                    subtitle: { en: "2000+ Happy Clients", es: "Más de 2000 Clientes Satisfechos" }
                },
                trust4: {
                    title: { en: "5+ Years", es: "5+ Años" },
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
                    text: { en: "Join 2000+ satisfied Pennsylvania homeowners who chose quality and professionalism", es: "Únase a más de 2000 propietarios satisfechos de Pennsylvania que eligieron calidad y profesionalismo" },
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
            ,

            // ============================================================
            // BLOG SECTION
            // ============================================================
            blog: {
                index: {
                    // Breadcrumb
                    breadcrumb: { en: "Blog", es: "Blog" },
                    
                    // Hero
                    eyebrow: { en: "Knowledge Center · PA190465", es: "Centro de Conocimiento · PA190465" },
                    title: {
                        part1: { en: "Renovation Guides", es: "Guías de Renovación" },
                        em: { en: "Built for Pennsylvania.", es: "Diseñadas para Pennsylvania." }
                    },
                    desc: { en: "Data-backed guides on costs, health risks, contractor licensing, materials, and planning — written for homeowners in Hanover, York, and Gettysburg by a licensed PA contractor with 2,000+ local projects.", es: "Guías respaldadas por datos sobre costos, riesgos de salud, licencias de contratistas, materiales y planificación — escritas para propietarios en Hanover, York y Gettysburg por un contratista licenciado de PA con más de 2,000 proyectos locales." },
                    stat1: { en: "Expert Guides", es: "Guías Expertas" },
                    stat2: { en: "PA Projects", es: "Proyectos en PA" },
                    stat3: { en: "HICPA Licensed", es: "Licencia HICPA" },
                    
                    // Featured Article
                    featured: {
                        label: { en: "Featured Guide", es: "Guía Destacada" },
                        badge: { en: "Featured", es: "Destacado" },
                        readTime: { en: "12 min read", es: "12 min de lectura" },
                        source: { en: "1,335+ PA Projects", es: "1,335+ Proyectos en PA" },
                        title: { en: "How Much Does a Kitchen Remodel Cost in Pennsylvania? 2025 Complete Guide by Tier", es: "¿Cuánto Cuesta Remodelar una Cocina en Pennsylvania? Guía Completa 2025 por Nivel" },
                        excerpt: { en: "Real cost data from 1,335+ Adams and York County kitchen projects. Minor ($8K–$25K), mid-range ($25K–$65K), and major ($65K–$150K+) tiers with full ROI analysis, local market factors, and what you should never accept in a contractor quote.", es: "Datos reales de costos de más de 1,335 proyectos de cocina en los condados de Adams y York. Niveles menor ($8K–$25K), medio ($25K–$65K) y mayor ($65K–$150K+) con análisis completo de ROI, factores del mercado local y lo que nunca debes aceptar en una cotización de contratista." },
                        cta: { en: "Read the Guide", es: "Leer la Guía" }
                    },
                    
                    // All Articles Section
                    allArticles: {
                        label: { en: "All Guides", es: "Todas las Guías" },
                        title: { en: "Everything You Need to Know", es: "Todo lo que Necesitas Saber" }
                    },
                    
                    // Category Filters
                    filter: {
                        all: { en: "All", es: "Todos" },
                        contractor: { en: "Contractor Guide", es: "Guía de Contratistas" },
                        health: { en: "Home Health", es: "Salud del Hogar" },
                        flooring: { en: "Flooring", es: "Pisos" },
                        planning: { en: "Planning Guide", es: "Guía de Planificación" }
                    },
                    
                    // Categories (badges on cards)
                    cat: {
                        kitchen: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
                        contractor: { en: "Contractor Guide", es: "Guía de Contratistas" },
                        health: { en: "Home Health & Safety", es: "Salud y Seguridad del Hogar" },
                        wellbeing: { en: "Home & Wellbeing", es: "Hogar y Bienestar" },
                        flooring: { en: "Flooring & Materials", es: "Pisos y Materiales" },
                        planning: { en: "Planning Guide", es: "Guía de Planificación" }
                    },
                    
                    // Read More Button
                    readMore: { en: "Read", es: "Leer" },
                    
                    // Card 2: HICPA
                    card2: {
                        title: { en: "Licensed vs. Unlicensed Contractor in Pennsylvania: What HICPA Means for Your Home", es: "Contratista Licenciado vs. No Licenciado en Pennsylvania: Qué Significa HICPA para Tu Hogar" },
                        excerpt: { en: "What Pennsylvania law says, what the real risks are, and how to verify any contractor in under two minutes. Free — no registration needed.", es: "Qué dice la ley de Pennsylvania, cuáles son los riesgos reales y cómo verificar cualquier contratista en menos de dos minutos. Gratis — sin necesidad de registro." }
                    },
                    
                    // Card 3: Mold
                    card3: {
                        title: { en: "Mold in Pennsylvania Homes: What the CDC and WHO Say You Should Know", es: "Moho en Hogares de Pennsylvania: Lo que el CDC y la OMS Dicen que Debes Saber" },
                        excerpt: { en: "What federal health agencies say about indoor mold — who is most vulnerable, where it hides in PA homes, and when cleaning is not enough.", es: "Lo que dicen las agencias federales de salud sobre el moho interior — quiénes son los más vulnerables, dónde se esconde en los hogares de PA y cuándo la limpieza no es suficiente." }
                    },
                    
                    // Card 4: Psychology
                    card4: {
                        title: { en: "The Psychology of Home: How Your Living Space Affects Your Mental Health Every Day", es: "La Psicología del Hogar: Cómo Tu Espacio de Vida Afecta Tu Salud Mental Cada Día" },
                        excerpt: { en: "Harvard, NIH, and Cornell research on how your home directly shapes cortisol levels, sleep quality, and daily wellbeing — and which changes carry the most measurable impact.", es: "Investigaciones de Harvard, NIH y Cornell sobre cómo tu hogar afecta directamente los niveles de cortisol, la calidad del sueño y el bienestar diario — y qué cambios tienen el mayor impacto medible." }
                    },
                    
                    // Card 5: Flooring
                    card5: {
                        title: { en: "Best Flooring for Pennsylvania Homes: Cold Climate, High Humidity, and Real Durability", es: "Los Mejores Pisos para Hogares de Pennsylvania: Clima Frío, Alta Humedad y Durabilidad Real" },
                        excerpt: { en: "LVP, hardwood, tile, carpet — how each performs in PA's freeze-thaw cycles and 40–55 point humidity swings. Cost per sq ft and room-by-room recommendations from 2,000+ projects.", es: "LVP, madera, cerámica, alfombra — cómo funciona cada uno en los ciclos de congelación-descongelación de PA y las variaciones de humedad de 40–55 puntos. Costo por pie cuadrado y recomendaciones por habitación de más de 2,000 proyectos." }
                    },
                    
                    // Card 6: Planning
                    card6: {
                        title: { en: "The Complete Home Remodeling Planning Guide for Pennsylvania Homeowners", es: "La Guía Completa de Planificación de Remodelación para Propietarios de Pennsylvania" },
                        excerpt: { en: "From NAHB research to Harvard housing data — how to plan a renovation that holds its value. Budget framework, ROI by project, contractor vetting, permits, and sequencing.", es: "Desde investigaciones de NAHB hasta datos de vivienda de Harvard — cómo planificar una renovación que mantenga su valor. Marco presupuestario, ROI por proyecto, evaluación de contratistas, permisos y secuenciación." }
                    },
                    
                    // Topics Section
                    topics: {
                        label: { en: "Browse by Topic", es: "Explorar por Tema" },
                        title: { en: "Every Subject We Cover", es: "Todos los Temas que Cubrimos" }
                    },
                    
                    // Topic Cards
                    topic1: {
                        name: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
                        count: { en: "Costs · ROI · PA Data", es: "Costos · ROI · Datos de PA" }
                    },
                    topic2: {
                        name: { en: "Contractor Licensing", es: "Licencias de Contratistas" },
                        count: { en: "HICPA · PA Law · Verify", es: "HICPA · Ley de PA · Verificar" }
                    },
                    topic3: {
                        name: { en: "Mold & Health", es: "Moho y Salud" },
                        count: { en: "CDC · WHO · Prevention", es: "CDC · OMS · Prevención" }
                    },
                    topic4: {
                        name: { en: "Home Wellbeing", es: "Bienestar del Hogar" },
                        count: { en: "Harvard · Cornell · NIH", es: "Harvard · Cornell · NIH" }
                    },
                    topic5: {
                        name: { en: "Flooring PA", es: "Pisos PA" },
                        count: { en: "LVP · Hardwood · Tile", es: "LVP · Madera · Cerámica" }
                    },
                    topic6: {
                        name: { en: "Renovation Planning", es: "Planificación de Renovación" },
                        count: { en: "Budget · ROI · Sequence", es: "Presupuesto · ROI · Secuencia" }
                    },
                    
                    // CTA Strip
                    cta: {
                        eyebrow: { en: "HICPA PA190465 · Hanover · York · Gettysburg", es: "HICPA PA190465 · Hanover · York · Gettysburg" },
                        title: {
                            part1: { en: "Read the guides.", es: "Lee las guías." },
                            em: { en: "Then call us.", es: "Luego llámanos." }
                        },
                        desc: { en: "2,000+ renovations in Adams and York County. Licensed, insured, and written contracts on every project. Free estimate — no obligation.", es: "Más de 2,000 renovaciones en los condados de Adams y York. Licenciados, asegurados y contratos escritos en cada proyecto. Estimación gratuita — sin compromiso." },
                        btn1: { en: "(443) 858-0904", es: "(443) 858-0904" },
                        btn2: { en: "Free Estimate", es: "Estimación Gratuita" },
                        trust1: { en: "Licensed PA190465", es: "Licencia PA190465" },
                        trust2: { en: "5.0 Stars", es: "5.0 Estrellas" },
                        trust3: { en: "Written Contracts", es: "Contratos Escritos" }
                    }
                },
                hicpa: {
                    breadcrumb: { current: { en: "Licensed Contractor PA Guide", es: "Guía de Contratista Licenciado PA" } },
                    category: { en: "Contractor Guide", es: "Guía de Contratistas" },

                    title: {
                        part1: { en: "Licensed vs. Unlicensed Contractor in Pennsylvania:", es: "Contratista Licenciado vs. No Licenciado en Pennsylvania:" },
                        accent: { en: "What HICPA Means for Your Home", es: "Qué Significa HICPA para Tu Hogar" }
                    },

                    meta: {
                        date: { en: "February 10, 2025", es: "10 de febrero de 2025" },
                        readTime: { en: "9 min read", es: "9 min de lectura" },
                        license: { en: "PA190465", es: "PA190465" },
                        licenseLabel: { en: "· Verified Active", es: "· Verificado Activo" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA", es: "Hanover · York · Gettysburg, PA" },
                        updated: { en: "Updated July 2025", es: "Actualizado julio 2025" }
                    },

                    hero: {
                        caption: { en: "C Hawk Construction holds Pennsylvania HICPA registration PA190465 — Active status, verifiable at the PA Attorney General database in under 2 minutes.", es: "C Hawk Construction tiene el registro HICPA de Pennsylvania PA190465 — estado Activo, verificable en la base de datos del Fiscal General de PA en menos de 2 minutos." }
                    },

                    toc: {
                        title: { en: "In This Guide", es: "En Esta Guía" },
                        item1: { en: "What HICPA Is and Why It Exists", es: "Qué es HICPA y por qué existe" },
                        item2: { en: "What HICPA Registration Actually Requires", es: "Qué requiere realmente el registro HICPA" },
                        item3: { en: "The Real Risks of Hiring an Unlicensed Contractor", es: "Los riesgos reales de contratar sin licencia" },
                        item4: { en: "Licensed vs. Unlicensed — Side by Side", es: "Licenciado vs. No Licenciado — Comparativa" },
                        item5: { en: "How to Verify Any Contractor in 2 Minutes", es: "Cómo verificar cualquier contratista en 2 minutos" },
                        item6: { en: "What HICPA Requires in Your Contract", es: "Qué exige HICPA en tu contrato" },
                        item7: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" }
                    },

                    intro: {
                        p1: { en: "Someone quotes you a price. It is lower than everyone else. They say they have been doing this work for years. They show you photos on a phone. They want 50% upfront and can start next week. Before you hand them a check, there is one question you should ask — and one database you should check. It takes under two minutes and it is free.", es: "Alguien te da un precio. Es más bajo que todos los demás. Dicen llevar años haciendo este trabajo. Te muestran fotos en el teléfono. Piden el 50% por adelantado y pueden empezar la próxima semana. Antes de entregarles un cheque, hay una pregunta que debes hacer — y una base de datos que debes consultar. Toma menos de dos minutos y es gratuita." },
                        p2: { en: "Pennsylvania's Home Improvement Consumer Protection Act — HICPA — has required every home improvement contractor performing work valued at $500 or more to register with the Office of Attorney General since 2008. The registration is public, searchable, and takes you about 90 seconds to check. It tells you whether a contractor is registered, whether their registration is active, and whether there are complaints on record.", es: "La Ley de Protección al Consumidor de Mejoras del Hogar de Pennsylvania — HICPA — exige desde 2008 que todo contratista que realice trabajos valorados en $500 o más se registre ante la Fiscalía General. El registro es público, consultable y toma unos 90 segundos verificarlo. Te indica si el contratista está registrado, si su registro está activo y si hay quejas en el expediente." },
                        p3: { en: "This guide explains what HICPA requires, what the real consequences are for homeowners who hire unregistered contractors, and exactly how to verify any contractor — including us — before you sign anything.", es: "Esta guía explica qué exige HICPA, cuáles son las consecuencias reales para los propietarios que contratan sin licencia, y exactamente cómo verificar cualquier contratista — incluidos nosotros — antes de firmar nada." }
                    },

                    sources: {
                        title: { en: "Sources Referenced in This Article", es: "Fuentes Referenciadas en Este Artículo" },
                        item1: { en: "Pennsylvania General Assembly — Home Improvement Consumer Protection Act, Act 132 of 2008, 73 P.S. §§ 517.1–517.19. legis.state.pa.us", es: "Asamblea General de Pennsylvania — Ley de Protección al Consumidor de Mejoras del Hogar, Ley 132 de 2008, 73 P.S. §§ 517.1–517.19. legis.state.pa.us" },
                        item2: { en: "Pennsylvania Office of Attorney General — Home Improvement Contractor Search Database. attorneygeneral.gov", es: "Fiscalía General de Pennsylvania — Base de Datos de Búsqueda de Contratistas de Mejoras del Hogar. attorneygeneral.gov" },
                        item3: { en: "Pennsylvania Attorney General — Consumer Protection Enforcement Actions 2024 Annual Report. attorneygeneral.gov", es: "Fiscal General de Pennsylvania — Informe Anual 2024 de Acciones de Cumplimiento de Protección al Consumidor. attorneygeneral.gov" },
                        item4: { en: "C Hawk Construction and Renovation LLC — HICPA Registration PA190465, Active Status. Verifiable at attorneygeneral.gov", es: "C Hawk Construction and Renovation LLC — Registro HICPA PA190465, Estado Activo. Verificable en attorneygeneral.gov" }
                    },

                    section1: {
                        badge: { en: "THE LAW", es: "LA LEY" },
                        title: { en: "What HICPA Is and Why It Exists", es: "Qué es HICPA y por qué existe" },
                        p1: { en: "Before 2008, Pennsylvania had no statewide system for registering home improvement contractors. Any person with a truck and a business card could perform home improvement work on any home in the state with no licensing requirement, no proof of insurance, and no background disclosure. Consumer complaints had no formal administrative pathway — homeowners with grievances had to pursue civil litigation.", es: "Antes de 2008, Pennsylvania no tenía un sistema estatal para registrar contratistas de mejoras del hogar. Cualquier persona con una camioneta y una tarjeta de presentación podía realizar trabajos en cualquier hogar sin requisito de licencia, sin prueba de seguro y sin declaración de antecedentes. Las quejas de los consumidores no tenían vía administrativa formal — los propietarios con reclamos debían recurrir a litigios civiles." },
                        p2: { en: "HICPA — the Home Improvement Consumer Protection Act, signed into law as Act 132 of 2008 — changed that. It requires every contractor performing residential home improvement work valued at $500 or more to register with the Pennsylvania Office of Attorney General before accepting any work in the state.", es: "HICPA — la Ley de Protección al Consumidor de Mejoras del Hogar, promulgada como Ley 132 de 2008 — cambió eso. Exige que todo contratista que realice trabajos residenciales de mejoras del hogar valorados en $500 o más se registre ante la Fiscalía General de Pennsylvania antes de aceptar cualquier trabajo en el estado." },
                        p3: { en: "The penalties for non-compliance are concrete: violations carry a civil fine of up to $1,000 per violation. Contracts signed with unregistered contractors may be declared void and unenforceable by the homeowner — which means an unregistered contractor who performs work and demands payment may have no legal standing to collect. The law also gives the Attorney General enforcement authority, providing homeowners with a formal complaint pathway that does not require hiring an attorney.", es: "Las sanciones por incumplimiento son concretas: las infracciones conllevan una multa civil de hasta $1,000 por violación. Los contratos firmados con contratistas no registrados pueden ser declarados nulos e inaplicables por el propietario — lo que significa que un contratista no registrado que realice trabajos y exija pago puede no tener respaldo legal para cobrar. La ley también otorga al Fiscal General autoridad de cumplimiento, proporcionando a los propietarios una vía formal de queja que no requiere contratar un abogado." }
                    },

                    highlight1: {
                        label: { en: "73 P.S. § 517.3 — Registration Required", es: "73 P.S. § 517.3 — Registro Requerido" },
                        text: { en: '"No contractor shall perform or offer to perform any home improvement without first registering with the Office of Attorney General."', es: '"Ningún contratista realizará ni ofrecerá realizar ninguna mejora del hogar sin haberse registrado previamente ante la Fiscalía General."' },
                        source: { en: "Pennsylvania Home Improvement Consumer Protection Act, Act 132 of 2008 — PA General Assembly", es: "Ley de Protección al Consumidor de Mejoras del Hogar de Pennsylvania, Ley 132 de 2008 — Asamblea General de PA" }
                    },

                    section2: {
                        badge: { en: "REGISTRATION REQUIREMENTS", es: "REQUISITOS DE REGISTRO" },
                        title: { en: "What HICPA Registration Actually Requires", es: "Qué requiere realmente el registro HICPA" },
                        p1: { en: "HICPA registration is not a license in the traditional sense — it does not test contractor skill or require completion of an exam. What it does require is disclosure and accountability. Here is what every registered contractor must provide to maintain active registration.", es: "El registro HICPA no es una licencia en el sentido tradicional — no evalúa la habilidad del contratista ni requiere completar un examen. Lo que sí exige es divulgación y responsabilidad. Esto es lo que todo contratista registrado debe proporcionar para mantener el registro activo." }
                    },

                    req1: {
                        label: { en: "REQUIREMENT 1", es: "REQUISITO 1" },
                        title: { en: "Business Identity Disclosure", es: "Divulgación de Identidad Empresarial" },
                        text: { en: "Full legal business name, all DBAs (doing-business-as names), principal business address, names and addresses of all owners and officers, and all telephone numbers used for solicitation. This disclosure makes the contractor identifiable and locatable — a basic protection that unlicensed operators avoid by design.", es: "Nombre legal completo del negocio, todos los nombres comerciales (DBA), dirección principal del negocio, nombres y direcciones de todos los propietarios y directivos, y todos los números de teléfono utilizados para captación de clientes. Esta divulgación hace al contratista identificable y localizable — una protección básica que los operadores sin licencia evitan intencionalmente." }
                    },

                    req2: {
                        label: { en: "REQUIREMENT 2", es: "REQUISITO 2" },
                        title: { en: "Proof of General Liability Insurance", es: "Prueba de Seguro de Responsabilidad General" },
                        text: { en: "General liability insurance is required at the time of registration. This protects homeowners if the contractor causes property damage during the project. Important note: insurance required at registration can lapse after registration is processed. A contractor with Active HICPA status may have a lapsed insurance policy. Always request a current Certificate of Insurance that names your project address — do not rely on registration status alone for insurance verification.", es: "Se requiere seguro de responsabilidad general al momento del registro. Esto protege a los propietarios si el contratista causa daños a la propiedad durante el proyecto. Nota importante: el seguro requerido al momento del registro puede caducar después de procesarse. Un contratista con estado HICPA Activo puede tener una póliza de seguro vencida. Siempre solicita un Certificado de Seguro vigente que incluya la dirección de tu proyecto — no te bases únicamente en el estado del registro para verificar el seguro." }
                    },

                    req3: {
                        label: { en: "REQUIREMENT 3", es: "REQUISITO 3" },
                        title: { en: "Criminal Background Disclosure + Annual Renewal", es: "Declaración de Antecedentes Penales + Renovación Anual" },
                        text: { en: "Contractors must disclose prior convictions for fraud, deception, theft, or home improvement related felonies. Registration must be renewed annually — an expired registration means the contractor is operating illegally until renewed. When you search a contractor in the AG database, confirming the status reads \"Active\" (not \"Expired\" or \"Inactive\") is essential. Expired registration is not registration.", es: "Los contratistas deben declarar condenas previas por fraude, engaño, robo o delitos graves relacionados con mejoras del hogar. El registro debe renovarse anualmente — un registro vencido significa que el contratista opera ilegalmente hasta renovarlo. Al buscar un contratista en la base de datos del Fiscal General, es esencial confirmar que el estado sea \"Activo\" (no \"Vencido\" o \"Inactivo\"). El registro vencido no es registro." }
                    },

                    section3: {
                        badge: { en: "REAL RISKS", es: "RIESGOS REALES" },
                        title: { en: "The Real Risks of Hiring an Unlicensed Contractor", es: "Los Riesgos Reales de Contratar a un Contratista Sin Licencia" },
                        p1: { en: "The risk is not hypothetical and it does not primarily involve bad workmanship — it involves legal and financial exposure that follows your home, not the contractor.", es: "El riesgo no es hipotético y no tiene que ver principalmente con mala mano de obra — implica exposición legal y financiera que sigue a tu hogar, no al contratista." }
                    },

                    risk1: {
                        title: { en: "No AG Complaint Path — Civil Court Is Your Only Option", es: "Sin Vía de Queja ante el Fiscal General — El Tribunal Civil es Tu Única Opción" },
                        text: { en: "HICPA gives the Pennsylvania Attorney General enforcement authority over registered contractors — a formal, no-cost complaint pathway. That pathway does not exist for unregistered contractors. If a dispute arises — incomplete work, property damage, disappeared contractor — your only recourse is civil litigation, which requires hiring an attorney, filing in the appropriate court, and waiting through a process that typically takes 12–24 months and costs more than most small home improvement projects are worth.", es: "HICPA otorga al Fiscal General de Pennsylvania autoridad sobre los contratistas registrados — una vía formal de queja sin costo. Esa vía no existe para los contratistas no registrados. Si surge una disputa — trabajo incompleto, daños a la propiedad, contratista desaparecido — tu único recurso es el litigio civil, que requiere contratar un abogado, presentar una demanda en el tribunal correspondiente y esperar un proceso que generalmente tarda entre 12 y 24 meses y cuesta más de lo que vale la mayoría de los proyectos pequeños de mejoras del hogar." }
                    },

                    risk2: {
                        title: { en: "Unpermitted Work Becomes Your Problem at Resale", es: "El Trabajo Sin Permiso Se Convierte en Tu Problema al Vender" },
                        text: { en: "Unregistered contractors routinely skip permits to avoid detection and reduce cost. Unpermitted work — structural changes, electrical, plumbing, additions — does not disappear when the project is complete. It shows up during the buyer's home inspection at resale. The seller (you) must either disclose the unpermitted work, pay to remediate and permit it retroactively, or discount the sale price to account for the buyer's risk. In Pennsylvania, sellers who knowingly fail to disclose material defects face legal liability.", es: "Los contratistas no registrados suelen omitir los permisos para evitar ser detectados y reducir costos. El trabajo sin permiso — cambios estructurales, eléctricos, plomería, ampliaciones — no desaparece cuando el proyecto termina. Aparece durante la inspección del comprador al momento de vender. El vendedor (tú) debe divulgar el trabajo sin permiso, pagar para remediarlo y obtener permisos retroactivos, o descontar el precio de venta para cubrir el riesgo del comprador. En Pennsylvania, los vendedores que a sabiendas omiten defectos materiales enfrentan responsabilidad legal." }
                    },

                    risk3: {
                        title: { en: "Worker Injury Liability Falls on You Without Insurance", es: "La Responsabilidad por Lesiones de Trabajadores Recae en Ti Sin Seguro" },
                        text: { en: "An unregistered contractor working on your property likely carries no workers' compensation or general liability insurance. If a worker is injured on your property during an uninsured project, Pennsylvania law may hold you — as the property owner — partially liable for medical costs and lost wages. Your homeowner's insurance may cover some exposure, but most policies have exclusions for business activity and may contest coverage for unlicensed contractor work. The contractor takes the risk of no insurance. You absorb it.", es: "Un contratista no registrado que trabaje en tu propiedad probablemente no tenga seguro de compensación para trabajadores ni seguro de responsabilidad general. Si un trabajador resulta lesionado en tu propiedad durante un proyecto sin seguro, la ley de Pennsylvania puede considerarte — como propietario — parcialmente responsable de los gastos médicos y los salarios perdidos. Tu seguro de propietario puede cubrir parte de la exposición, pero la mayoría de las pólizas tienen exclusiones para actividades comerciales y pueden impugnar la cobertura por trabajos de contratistas sin licencia. El contratista asume el riesgo de no tener seguro. Tú lo absorbes." }
                    },

                    risk4: {
                        title: { en: "No Enforceable Written Contract Without HICPA Compliance", es: "Sin Contrato Escrito Ejecutable Sin Cumplir con HICPA" },
                        text: { en: "HICPA requires specific elements in every home improvement contract — including the contractor's registration number. A contract that does not include the registration number is legally deficient under HICPA. More practically: an unregistered contractor has no legal basis to demand contract enforcement. If they walk off the job halfway through, you have no enforceable written agreement to compel completion or recover your deposit in a small claims or civil proceeding.", es: "HICPA requiere elementos específicos en todo contrato de mejoras del hogar — incluido el número de registro del contratista. Un contrato que no incluya el número de registro es legalmente deficiente bajo HICPA. Más prácticamente: un contratista no registrado no tiene base legal para exigir el cumplimiento del contrato. Si abandona el trabajo a mitad, no tienes un acuerdo escrito ejecutable para exigir la terminación o recuperar tu depósito en una demanda de menor cuantía o procedimiento civil." }
                    },

                    section4: {
                        badge: { en: "SIDE BY SIDE", es: "COMPARATIVA" },
                        title: { en: "Licensed vs. Unlicensed — Side by Side", es: "Licenciado vs. No Licenciado — Comparativa" }
                    },

                    table: {
                        title: { en: "Licensed (HICPA Registered) vs. Unlicensed Contractor — Pennsylvania Homeowner Impact", es: "Contratista Licenciado (Registrado en HICPA) vs. No Licenciado — Impacto para el Propietario de Pennsylvania" },
                        col: {
                            factor: { en: "Factor", es: "Factor" },
                            licensed: { en: "Licensed (PA Registered)", es: "Licenciado (Registrado en PA)" },
                            unlicensed: { en: "Unlicensed", es: "No Licenciado" }
                        },
                        row1: {
                            factor: { en: "AG Complaint Path", es: "Vía de Queja ante el Fiscal General" },
                            licensed: { en: "Available — formal, no-cost", es: "Disponible — formal, sin costo" },
                            unlicensed: { en: "Not available — civil court only", es: "No disponible — solo tribunal civil" }
                        },
                        row2: {
                            factor: { en: "Insurance Verification", es: "Verificación de Seguro" },
                            licensed: { en: "Required at registration (verify COI)", es: "Requerido al registrarse (verificar COI)" },
                            unlicensed: { en: "Unknown — likely none", es: "Desconocido — probablemente ninguno" }
                        },
                        row3: {
                            factor: { en: "Permit Compliance", es: "Cumplimiento de Permisos" },
                            licensed: { en: "Expected — accountable", es: "Esperado — responsable" },
                            unlicensed: { en: "Often skipped — no accountability", es: "A menudo omitido — sin responsabilidad" }
                        },
                        row4: {
                            factor: { en: "Contract Enforceability", es: "Ejecutabilidad del Contrato" },
                            licensed: { en: "Fully enforceable under HICPA", es: "Totalmente ejecutable bajo HICPA" },
                            unlicensed: { en: "Potentially void — limited recourse", es: "Potencialmente nulo — recurso limitado" }
                        },
                        row5: {
                            factor: { en: "Resale Impact", es: "Impacto en la Reventa" },
                            licensed: { en: "Permitted work — clean disclosure", es: "Trabajo con permiso — divulgación limpia" },
                            unlicensed: { en: "Unpermitted work — seller liability", es: "Trabajo sin permiso — responsabilidad del vendedor" }
                        },
                        row6: {
                            factor: { en: "Worker Injury Liability", es: "Responsabilidad por Lesiones de Trabajadores" },
                            licensed: { en: "Covered by contractor insurance", es: "Cubierto por el seguro del contratista" },
                            unlicensed: { en: "May fall on homeowner", es: "Puede recaer en el propietario" }
                        },
                        row7: {
                            factor: { en: "Background Disclosure", es: "Declaración de Antecedentes" },
                            licensed: { en: "Required — on file with AG", es: "Requerido — archivado ante el Fiscal General" },
                            unlicensed: { en: "None — unknown history", es: "Ninguna — historial desconocido" }
                        },
                        source: { en: "Source: PA HICPA Act 132 of 2008, 73 P.S. §§ 517.1–517.19 + PA Attorney General Consumer Protection Guidelines", es: "Fuente: Ley HICPA de PA 132 de 2008, 73 P.S. §§ 517.1–517.19 + Directrices de Protección al Consumidor del Fiscal General de PA" }
                    },

                    section5: {
                        badge: { en: "HOW TO VERIFY", es: "CÓMO VERIFICAR" },
                        title: { en: "How to Verify Any Contractor in 2 Minutes", es: "Cómo Verificar Cualquier Contratista en 2 Minutos" },
                        p1: { en: "The PA Attorney General's Home Improvement Contractor database is public, free, and requires no account or registration. Here is the exact process.", es: "La base de datos de Contratistas de Mejoras del Hogar del Fiscal General de PA es pública, gratuita y no requiere cuenta ni registro. Aquí está el proceso exacto." }
                    },

                    step1: {
                        title: { en: "Go to the PA Attorney General Website", es: "Ve al Sitio Web del Fiscal General de PA" },
                        text: { en: "Navigate to attorneygeneral.gov and locate the Home Improvement Contractor Search section under Consumer Protection. The direct URL is accessible from the AG homepage under Consumers. No login, no account, no fee.", es: "Ve a attorneygeneral.gov y localiza la sección de Búsqueda de Contratistas de Mejoras del Hogar bajo Protección al Consumidor. La URL directa es accesible desde la página principal del Fiscal General en Consumidores. Sin inicio de sesión, sin cuenta, sin costo." }
                    },
                    step2: {
                        title: { en: "Enter the Contractor Name or Registration Number", es: "Ingresa el Nombre del Contratista o Número de Registro" },
                        text: { en: "Search by business name or by registration number. For C Hawk Construction, search \"C Hawk Construction\" or enter registration number PA190465 directly. The search is flexible — partial names return results. If the contractor you are checking does not appear in the database at all, they are unregistered.", es: "Busca por nombre del negocio o número de registro. Para C Hawk Construction, busca \"C Hawk Construction\" o ingresa directamente el número de registro PA190465. La búsqueda es flexible — los nombres parciales también arrojan resultados. Si el contratista que estás verificando no aparece en la base de datos, no está registrado." }
                    },
                    step3: {
                        title: { en: "Confirm \"Active\" Status", es: "Confirma el Estado \"Activo\"" },
                        text: { en: "The result must show Active status. \"Expired,\" \"Inactive,\" or \"Suspended\" registrations are not valid — a contractor operating under an expired registration is operating illegally under HICPA. Only Active status is acceptable. Check the registration expiration date as well and confirm it extends through your project completion date.", es: "El resultado debe mostrar estado Activo. Los registros \"Vencidos\", \"Inactivos\" o \"Suspendidos\" no son válidos — un contratista que opera con un registro vencido opera ilegalmente bajo HICPA. Solo el estado Activo es aceptable. Verifica también la fecha de vencimiento del registro y confirma que se extienda hasta la fecha de finalización de tu proyecto." }
                    },
                    step4: {
                        title: { en: "Request a Certificate of Insurance Directly", es: "Solicita un Certificado de Seguro Directamente" },
                        text: { en: "Active HICPA registration does not guarantee current insurance. Ask the contractor to have their insurer send you a Certificate of Insurance (COI) naming your property address as an additional insured location. The COI must show current policy dates — not expired coverage. Do not accept a COI directly from the contractor; request it from their insurance agent or broker to confirm it is current and unmodified.", es: "El registro HICPA activo no garantiza un seguro vigente. Pide al contratista que su aseguradora te envíe un Certificado de Seguro (COI) que incluya la dirección de tu propiedad como lugar adicional asegurado. El COI debe mostrar fechas de póliza vigentes — no cobertura vencida. No aceptes un COI directamente del contratista; solicítalo a su agente o corredor de seguros para confirmar que está vigente y sin modificaciones." }
                    },
                    step5: {
                        title: { en: "Review Complaint History in the AG Database", es: "Revisa el Historial de Quejas en la Base de Datos del Fiscal General" },
                        text: { en: "The AG database shows complaint history for registered contractors. One complaint over many years may be unremarkable. Multiple complaints — particularly for the same issue type (abandonment, overcharging, poor workmanship) — is disqualifying information. A contractor with several active complaints and Active registration status is not a safe hire despite being technically registered.", es: "La base de datos del Fiscal General muestra el historial de quejas de los contratistas registrados. Una queja a lo largo de muchos años puede ser intrascendente. Múltiples quejas — especialmente del mismo tipo de problema (abandono, cobros excesivos, mala mano de obra) — son información descalificadora. Un contratista con varias quejas activas y estado de registro Activo no es una contratación segura a pesar de estar técnicamente registrado." }
                    },

                    verifyCta: {
                        badge: { en: "NOTHING TO HIDE", es: "NADA QUE OCULTAR" },
                        title: { en: "Verify C Hawk Construction — Right Now", es: "Verifica C Hawk Construction — Ahora Mismo" },
                        text: { en: "Search PA190465 or \"C Hawk Construction\" at the PA Attorney General's database. Active registration. Verified insurance. Zero outstanding complaints. We encourage every homeowner to verify us before signing — and to apply the same standard to every contractor they consider.", es: "Busca PA190465 o \"C Hawk Construction\" en la base de datos del Fiscal General de PA. Registro activo. Seguro verificado. Cero quejas pendientes. Animamos a cada propietario a verificarnos antes de firmar — y a aplicar el mismo criterio a cada contratista que consideren." },
                        btn: { en: "Verify PA190465 at PA AG Database", es: "Verificar PA190465 en la Base de Datos del Fiscal General de PA" }
                    },

                    section6: {
                        badge: { en: "YOUR CONTRACT", es: "TU CONTRATO" },
                        title: { en: "What HICPA Requires in Your Contract", es: "Qué Exige HICPA en Tu Contrato" },
                        p1: { en: "HICPA does not just require registration — it specifies what a valid home improvement contract must contain. A contract missing these elements is deficient under Pennsylvania law. Use this list as a checklist before signing anything.", es: "HICPA no solo exige el registro — especifica qué debe contener un contrato válido de mejoras del hogar. Un contrato al que le falten estos elementos es deficiente bajo la ley de Pennsylvania. Usa esta lista como checklist antes de firmar cualquier cosa." }
                    },

                    contract1: {
                        label: { en: "CONTRACT REQUIREMENT", es: "REQUISITO DEL CONTRATO" },
                        title: { en: "Registration Number on the Contract", es: "Número de Registro en el Contrato" },
                        text: { en: "The contractor's HICPA registration number must appear on the face of the contract. If you receive a contract without a registration number, ask for it before signing. If the contractor cannot provide one, they are likely unregistered.", es: "El número de registro HICPA del contratista debe aparecer en el frente del contrato. Si recibes un contrato sin número de registro, solicítalo antes de firmar. Si el contratista no puede proporcionarlo, probablemente no está registrado." }
                    },
                    contract2: {
                        label: { en: "CONTRACT REQUIREMENT", es: "REQUISITO DEL CONTRATO" },
                        title: { en: "Detailed Written Scope of Work", es: "Alcance del Trabajo Escrito y Detallado" },
                        text: { en: "The contract must describe the work in specific terms — materials to be used, work to be performed, and any items excluded from the scope. \"Kitchen renovation\" is not a legal scope of work. \"Remove and replace existing cabinetry with [specified product], install [specified countertop material]\" is. Vague scopes are what disputes are built on.", es: "El contrato debe describir el trabajo en términos específicos — materiales a utilizar, trabajo a realizar y cualquier elemento excluido del alcance. \"Renovación de cocina\" no es un alcance de trabajo legal. \"Retirar y reemplazar los gabinetes existentes con [producto especificado], instalar [material de encimera especificado]\" sí lo es. Los alcances vagos son la base de las disputas." }
                    },
                    contract3: {
                        label: { en: "CONTRACT REQUIREMENT", es: "REQUISITO DEL CONTRATO" },
                        title: { en: "Price, Payment Schedule, and Deposit Limits", es: "Precio, Calendario de Pagos y Límites de Depósito" },
                        text: { en: "The total contract price must be stated in writing. HICPA limits deposits to one-third of the total contract price for projects under $5,000. Payment milestones must be tied to project milestones — not arbitrary dates. A contractor demanding more than 33% upfront is either unaware of Pennsylvania law or is prioritizing their cash flow over your legal protections. Start dates and estimated completion dates must also be included.", es: "El precio total del contrato debe establecerse por escrito. HICPA limita los depósitos a un tercio del precio total del contrato para proyectos menores de $5,000. Los hitos de pago deben vincularse a los hitos del proyecto — no a fechas arbitrarias. Un contratista que exija más del 33% por adelantado o desconoce la ley de Pennsylvania o prioriza su flujo de caja sobre tus protecciones legales. También deben incluirse las fechas de inicio y las fechas estimadas de finalización." }
                    },
                    contract4: {
                        label: { en: "CONTRACT REQUIREMENT", es: "REQUISITO DEL CONTRATO" },
                        title: { en: "Three-Day Right of Rescission Notice", es: "Aviso del Derecho de Rescisión de Tres Días" },
                        text: { en: "If the contract is signed at your residence, HICPA provides a three-business-day right of rescission — you may cancel without penalty within three business days of signing. The contract must include a written notice of this right. Any contract signed at your home that does not include this notice is deficient under HICPA regardless of its other contents.", es: "Si el contrato se firma en tu residencia, HICPA otorga un derecho de rescisión de tres días hábiles — puedes cancelar sin penalización dentro de los tres días hábiles siguientes a la firma. El contrato debe incluir un aviso escrito de este derecho. Cualquier contrato firmado en tu hogar que no incluya este aviso es deficiente bajo HICPA independientemente de su otro contenido." }
                    },

                    section7: {
                        badge: { en: "FAQ", es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "What is HICPA in Pennsylvania?", es: "¿Qué es HICPA en Pennsylvania?" },
                        a: { en: "HICPA — the Home Improvement Consumer Protection Act — is Pennsylvania Act 132 of 2008 (73 P.S. §§ 517.1–517.19). It requires any contractor performing residential home improvement work valued at $500 or more to register with the Pennsylvania Office of Attorney General before accepting work. Registration requires proof of insurance, disclosure of criminal history involving fraud or home improvement felonies, and annual renewal. Violations carry civil fines of up to $1,000 per violation. Contracts with unregistered contractors may be voidable by the homeowner.", es: "HICPA — la Ley de Protección al Consumidor de Mejoras del Hogar — es la Ley 132 de 2008 de Pennsylvania (73 P.S. §§ 517.1–517.19). Exige que todo contratista que realice trabajos residenciales de mejoras del hogar valorados en $500 o más se registre ante la Fiscalía General de Pennsylvania antes de aceptar trabajo. El registro requiere prueba de seguro, declaración de antecedentes penales por fraude o delitos graves relacionados con mejoras del hogar, y renovación anual. Las infracciones conllevan multas civiles de hasta $1,000 por violación. Los contratos con contratistas no registrados pueden ser anulados por el propietario." }
                    },
                    faq2: {
                        q: { en: "How do I verify a contractor's license in Pennsylvania?", es: "¿Cómo verifico la licencia de un contratista en Pennsylvania?" },
                        a: { en: "Go to the PA Attorney General's website (attorneygeneral.gov) and use the Home Improvement Contractor Search tool. Enter the contractor's name or registration number. Confirm the status reads \"Active.\" For C Hawk Construction, search PA190465 or \"C Hawk Construction.\" The search is free, requires no account, and takes under 2 minutes. Always also request a current Certificate of Insurance — registration status and insurance status are separate.", es: "Ve al sitio web del Fiscal General de PA (attorneygeneral.gov) y usa la herramienta de Búsqueda de Contratistas de Mejoras del Hogar. Ingresa el nombre del contratista o el número de registro. Confirma que el estado sea \"Activo\". Para C Hawk Construction, busca PA190465 o \"C Hawk Construction\". La búsqueda es gratuita, no requiere cuenta y toma menos de 2 minutos. Siempre solicita también un Certificado de Seguro vigente — el estado del registro y el estado del seguro son cosas separadas." }
                    },
                    faq3: {
                        q: { en: "What happens if I hire an unlicensed contractor in Pennsylvania?", es: "¿Qué pasa si contrato a un contratista sin licencia en Pennsylvania?" },
                        a: { en: "Hiring an unregistered contractor means: you lose access to the PA Attorney General's formal complaint process and must use civil court for any dispute; any work they perform may be unpermitted, creating liability at resale; if a worker is injured on your property without insurance, you may bear partial liability; and any written agreement may not be legally enforceable. The contractor avoids accountability. You absorb the risk.", es: "Contratar a un contratista no registrado significa: pierdes acceso al proceso formal de quejas del Fiscal General de PA y debes usar el tribunal civil para cualquier disputa; cualquier trabajo que realicen puede ser sin permiso, creando responsabilidad al momento de vender; si un trabajador resulta lesionado en tu propiedad sin seguro, puedes asumir responsabilidad parcial; y cualquier acuerdo escrito puede no ser legalmente ejecutable. El contratista evita la responsabilidad. Tú absorbes el riesgo." }
                    },
                    faq4: {
                        q: { en: "Does HICPA registration mean the contractor is insured?", es: "¿El registro HICPA significa que el contratista tiene seguro?" },
                        a: { en: "Not necessarily. Insurance is required at the time of HICPA registration, but it can lapse after the registration is issued or renewed. A contractor with Active HICPA status may have an expired insurance policy. Always request a current Certificate of Insurance from the contractor's insurer — not just from the contractor — showing current policy dates that cover your project. Verify both registration and insurance separately.", es: "No necesariamente. Se requiere seguro al momento del registro HICPA, pero puede vencer después de que se emite o renueva el registro. Un contratista con estado HICPA Activo puede tener una póliza de seguro vencida. Siempre solicita un Certificado de Seguro vigente de la aseguradora del contratista — no solo del contratista — que muestre fechas de póliza vigentes que cubran tu proyecto. Verifica el registro y el seguro por separado." }
                    },
                    faq5: {
                        q: { en: "Is C Hawk Construction licensed in Pennsylvania?", es: "¿C Hawk Construction tiene licencia en Pennsylvania?" },
                        a: { en: "Yes. C Hawk Construction and Renovation LLC is registered with the Pennsylvania Office of Attorney General under HICPA registration number PA190465, currently Active status. You can verify this directly and independently at the PA AG Home Improvement Contractor database (attorneygeneral.gov) by searching \"C Hawk Construction\" or \"PA190465.\" We encourage every homeowner to verify us before calling — and to apply the same standard to every contractor they consider.", es: "Sí. C Hawk Construction and Renovation LLC está registrada ante la Fiscalía General de Pennsylvania bajo el número de registro HICPA PA190465, actualmente con estado Activo. Puedes verificarlo directa e independientemente en la base de datos de Contratistas de Mejoras del Hogar del Fiscal General de PA (attorneygeneral.gov) buscando \"C Hawk Construction\" o \"PA190465\". Animamos a cada propietario a verificarnos antes de llamar — y a aplicar el mismo criterio a cada contratista que consideren." }
                    },

                    footer: {
                        sources: { title: { en: "References & Citations", es: "Referencias y Citas" } },
                        cite1: { en: "Pennsylvania General Assembly. (2008). Home Improvement Consumer Protection Act, Act 132 of 2008. 73 P.S. §§ 517.1–517.19. legis.state.pa.us", es: "Asamblea General de Pennsylvania. (2008). Ley de Protección al Consumidor de Mejoras del Hogar, Ley 132 de 2008. 73 P.S. §§ 517.1–517.19. legis.state.pa.us" },
                        cite2: { en: "Pennsylvania Office of Attorney General. (2025). Home Improvement Contractor Search Database. attorneygeneral.gov", es: "Fiscalía General de Pennsylvania. (2025). Base de Datos de Búsqueda de Contratistas de Mejoras del Hogar. attorneygeneral.gov" },
                        cite3: { en: "Pennsylvania Attorney General. (2024). Consumer Protection Enforcement Actions — 2024 Annual Report. attorneygeneral.gov", es: "Fiscal General de Pennsylvania. (2024). Acciones de Cumplimiento de Protección al Consumidor — Informe Anual 2024. attorneygeneral.gov" },
                        cite4: { en: "C Hawk Construction and Renovation LLC. (2025). HICPA Registration PA190465 — Active Status. Verifiable at PA AG database.", es: "C Hawk Construction and Renovation LLC. (2025). Registro HICPA PA190465 — Estado Activo. Verificable en la base de datos del Fiscal General de PA." },
                        tags: { label: { en: "Topics:", es: "Temas:" } },
                        tag1: { en: "Contractor Guide", es: "Guía de Contratistas" },
                        tag2: { en: "HICPA", es: "HICPA" },
                        tag3: { en: "Pennsylvania", es: "Pennsylvania" },
                        tag4: { en: "Consumer Protection", es: "Protección al Consumidor" },
                        tag5: { en: "Contractor Licensing", es: "Licencias de Contratistas" }
                    },

                    sidebar: {
                        cta: {
                            badge: { en: "PA190465 · VERIFIED ACTIVE", es: "PA190465 · VERIFICADO ACTIVO" },
                            title: { en: "We're Licensed. Verify It Yourself.", es: "Tenemos Licencia. Verifícalo Tú Mismo." },
                            text: { en: "Search PA190465 at the PA AG database. Active registration. Verified insurance. No outstanding complaints. Then call us for a free written estimate.", es: "Busca PA190465 en la base de datos del Fiscal General de PA. Registro activo. Seguro verificado. Sin quejas pendientes. Luego llámanos para una estimación escrita gratuita." },
                            stat1: { en: "HICPA License", es: "Licencia HICPA" },
                            stat2: { en: "Star Rating", es: "Calificación" },
                            stat3: { en: "PA Projects", es: "Proyectos en PA" },
                            btnVerify: { en: "Verify PA190465 Now", es: "Verificar PA190465 Ahora" }
                        },
                        facts: {
                            title: { en: "Key HICPA Facts", es: "Datos Clave de HICPA" }
                        },
                        fact1: { en: "Required for any job $500+ in PA", es: "Requerido para trabajos de $500+ en PA" },
                        fact2: { en: "Unregistered contracts may be voidable", es: "Los contratos no registrados pueden ser anulables" },
                        fact3: { en: "Verify at AG database — 2 min, free", es: "Verifica en la base de datos del Fiscal General — 2 min, gratis" },
                        fact4: { en: "Registration ≠ insurance — verify both", es: "Registro ≠ seguro — verifica ambos" },
                        fact5: { en: "Deposits limited to 1/3 under HICPA", es: "Depósitos limitados a 1/3 bajo HICPA" },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA", es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA", es: "Gettysburg, PA" },
                        area3: { en: "York, PA", es: "York, PA" },
                        area4: { en: "East Berlin, PA", es: "East Berlin, PA" },
                        area5: { en: "Cumberland, MD", es: "Cumberland, MD" }
                    },

                    inlineCta: {
                        badge: { en: "LICENSED · INSURED · VERIFIED PA190465", es: "LICENCIADO · ASEGURADO · VERIFICADO PA190465" },
                        title: {
                            part1: { en: "You Now Know What to Look For. ", es: "Ahora Sabes Qué Buscar. " },
                            accent: { en: "We Pass Every Check.", es: "Superamos Cada Verificación." }
                        },
                        text: { en: "Active HICPA registration. Verified general liability insurance. No outstanding complaints. Written contracts with full scope, dates, and pricing. Deposit within the legal limit. We operate the way the law requires — and the way you deserve.", es: "Registro HICPA activo. Seguro de responsabilidad general verificado. Sin quejas pendientes. Contratos escritos con alcance completo, fechas y precios. Depósito dentro del límite legal. Operamos como la ley exige — y como usted merece." },
                        btn1: { en: "(443) 858-0904 — Call Now", es: "(443) 858-0904 — Llama Ahora" },
                        btn2: { en: "Request Free Estimate Online", es: "Solicitar Estimación Gratuita en Línea" },
                        trust1: { en: "HICPA Registered PA190465", es: "Registrado HICPA PA190465" },
                        trust2: { en: "5.0 Star Rating", es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "Written Contracts — Always", es: "Contratos Escritos — Siempre" }
                    }
                },
                mold: {

                    breadcrumb: {
                        current: { en: "Mold Health Risks Pennsylvania", es: "Riesgos de Moho en Hogares de Pennsylvania" }
                    },

                    category: { en: "Home Health & Safety", es: "Salud y Seguridad del Hogar" },

                    title: {
                        part1:  { en: "Mold in Pennsylvania Homes:",                       es: "Moho en Hogares de Pennsylvania:" },
                        accent: { en: "What the CDC and WHO Say You Should Know",           es: "Lo que el CDC y la OMS Dicen que Debes Saber" }
                    },

                    meta: {
                        date:        { en: "March 5, 2025",                                es: "5 de marzo de 2025" },
                        readTime:    { en: "10 min read",                                  es: "10 min de lectura" },
                        license:     { en: "Licensed Contractor",                          es: "Contratista Licenciado" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA",              es: "Hanover · York · Gettysburg, PA" },
                        updated:     { en: "Updated July 2025",                            es: "Actualizado julio 2025" }
                    },

                    hero: {
                        caption: {
                            en: "Bathroom tile and grout failures are the leading mold entry point in Pennsylvania homes. Licensed contractor PA190465 serving Hanover, York & Gettysburg.",
                            es: "Las fallas en los azulejos y el mortero del baño son el principal punto de entrada del moho en los hogares de Pennsylvania. Contratista licenciado PA190465 que sirve a Hanover, York y Gettysburg."
                        }
                    },

                    toc: {
                        title: { en: "In This Guide",                                      es: "En Esta Guía" },
                        item1: { en: "Why Pennsylvania Homes Are Especially Vulnerable",   es: "Por qué los hogares de Pennsylvania son especialmente vulnerables" },
                        item2: { en: "What the CDC and WHO Actually Say",                  es: "Lo que el CDC y la OMS realmente dicen" },
                        item3: { en: "Health Effects by Exposure Level",                   es: "Efectos en la salud según el nivel de exposición" },
                        item4: { en: "Where Mold Hides in PA Homes",                       es: "Dónde se esconde el moho en los hogares de PA" },
                        item5: { en: "Why Bathroom Renovation Stops It",                   es: "Por qué la renovación del baño lo detiene" },
                        item6: { en: "Warning Signs You Already Have a Problem",           es: "Señales de advertencia de que ya tienes un problema" },
                        item7: { en: "Frequently Asked Questions",                         es: "Preguntas Frecuentes" }
                    },

                    intro: {
                        p1: {
                            en: "Most Pennsylvania homeowners treat mold the same way. They see it near the tub. They spray something on it. They scrub it. A few weeks later it's back, usually larger. They repeat. What they are doing is managing a symptom of a structural problem they cannot see — and often do not know they have.",
                            es: "La mayoría de los propietarios de Pennsylvania tratan el moho de la misma manera. Lo ven cerca de la bañera. Le rocían algo. Lo frotan. Unas semanas después vuelve, generalmente más grande. Y repiten el proceso. Lo que están haciendo es tratar el síntoma de un problema estructural que no pueden ver — y que a menudo ni saben que tienen."
                        },
                        p2: {
                            en: "The CDC and the World Health Organization have both issued detailed guidance on indoor mold — not because it is rare, but because it is common, consequential, and consistently underestimated by the people living with it. Pennsylvania's climate — humid summers, cold winters, significant temperature swings — creates the exact conditions mold needs. Understanding what the science actually says, where the risk actually lives in your home, and what actually resolves it permanently is what this article is about.",
                            es: "Tanto el CDC como la Organización Mundial de la Salud han publicado orientaciones detalladas sobre el moho en interiores — no porque sea raro, sino porque es común, tiene consecuencias importantes y es sistemáticamente subestimado por quienes conviven con él. El clima de Pennsylvania — veranos húmedos, inviernos fríos y grandes variaciones de temperatura — crea exactamente las condiciones que el moho necesita. Este artículo trata sobre lo que la ciencia realmente dice, dónde vive realmente el riesgo en tu hogar y qué lo resuelve de forma permanente."
                        },
                        p3: {
                            en: "The short version: surface cleaning is not a solution. A properly executed bathroom renovation is — and it is the most cost-effective long-term intervention available to a Pennsylvania homeowner.",
                            es: "La versión corta: limpiar la superficie no es una solución. Una renovación de baño correctamente ejecutada sí lo es — y es la intervención más rentable a largo plazo disponible para un propietario en Pennsylvania."
                        }
                    },

                    sources: {
                        title: { en: "Sources Referenced in This Article",                 es: "Fuentes Referenciadas en Este Artículo" },
                        item1: { en: "Centers for Disease Control and Prevention (CDC). Mold — Basic Facts. cdc.gov/mold",                                                                es: "Centros para el Control y la Prevención de Enfermedades (CDC). Moho — Datos Básicos. cdc.gov/mold" },
                        item2: { en: "World Health Organization (WHO). WHO Guidelines for Indoor Air Quality: Dampness and Mould. 2009. who.int",                                          es: "Organización Mundial de la Salud (OMS). Directrices de la OMS para la Calidad del Aire Interior: Humedad y Moho. 2009. who.int" },
                        item3: { en: "U.S. Environmental Protection Agency (EPA). Mold — A Brief Guide to Mold, Moisture, and Your Home. epa.gov",                                        es: "Agencia de Protección Ambiental de EE.UU. (EPA). Moho — Guía Breve sobre Moho, Humedad y Su Hogar. epa.gov" },
                        item4: { en: "National Asthma Education and Prevention Program (NAEPP). Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma. nhlbi.nih.gov", es: "Programa Nacional de Educación y Prevención del Asma (NAEPP). Informe del Panel de Expertos 3: Directrices para el Diagnóstico y Manejo del Asma. nhlbi.nih.gov" },
                        item5: { en: "C Hawk Construction and Renovation LLC — Field observations, 2,000+ PA residential projects since 2022. HICPA PA190465.",                            es: "C Hawk Construction and Renovation LLC — Observaciones de campo, más de 2,000 proyectos residenciales en PA desde 2022. HICPA PA190465." }
                    },

                    // ── SECTION 1 ──────────────────────────────────────────────────
                    section1: {
                        badge: { en: "PENNSYLVANIA CLIMATE",                               es: "CLIMA DE PENNSYLVANIA" },
                        title: { en: "Why Pennsylvania Homes Are Especially Vulnerable",   es: "Por Qué los Hogares de Pennsylvania Son Especialmente Vulnerables" },
                        p1: {
                            en: "Mold needs three things: moisture, an organic food source, and a temperature between roughly 40°F and 100°F. Pennsylvania provides all three generously, for most of the year.",
                            es: "El moho necesita tres cosas: humedad, una fuente de alimento orgánico y una temperatura de entre aproximadamente 4°C y 38°C. Pennsylvania las proporciona todas con generosidad durante la mayor parte del año."
                        },
                        p2: {
                            en: "Summers in the Hanover, York, and Gettysburg area regularly push outdoor relative humidity above 75%, sometimes above 85% during humid stretches in July and August. That moisture infiltrates every unventilated space in a home — bathroom walls, attic sheathing, basement subfloors, crawlspaces. It does not require a leak. Ambient humidity at sustained levels above 60% is sufficient for mold colonization on most building materials.",
                            es: "Los veranos en las áreas de Hanover, York y Gettysburg llevan la humedad relativa exterior por encima del 75% con regularidad, y a veces por encima del 85% durante las rachas húmedas de julio y agosto. Esa humedad se infiltra en cada espacio sin ventilación del hogar — paredes del baño, el revestimiento del ático, subpisos del sótano, espacios de rastreo. No requiere una fuga. Una humedad ambiental sostenida por encima del 60% es suficiente para la colonización de moho en la mayoría de los materiales de construcción."
                        },
                        p3: {
                            en: "Pennsylvania's winters compound the problem in a different way. Cold outdoor air is dry. When that air enters a heated home and warms up, its relative humidity drops sharply — causing moisture to migrate from interior spaces toward exterior walls, condensing on cold surfaces along the way. In bathrooms, this thermal gradient is most aggressive. Steam from daily showers against an exterior wall with insufficient insulation or ventilation is one of the most reliable mold incubators in residential construction.",
                            es: "Los inviernos de Pennsylvania agravan el problema de una manera diferente. El aire exterior frío es seco. Cuando ese aire entra a un hogar climatizado y se calienta, su humedad relativa cae bruscamente — haciendo que la humedad migre desde los espacios interiores hacia las paredes exteriores, condensándose en las superficies frías a su paso. En los baños, este gradiente térmico es más intenso. El vapor de las duchas diarias contra una pared exterior con aislamiento o ventilación insuficiente es uno de los incubadores de moho más confiables en la construcción residencial."
                        },
                        p4: {
                            en: "The homes at highest risk are those built between 1950 and 1985 — common stock in Hanover, York, and Gettysburg. These homes were constructed before modern vapor barrier standards, often have inadequate bath ventilation by current code, and use paper-faced drywall or gypsum board behind tile — both highly susceptible to mold once moisture penetrates the grout or caulk line.",
                            es: "Los hogares con mayor riesgo son los construidos entre 1950 y 1985 — tipo de construcción común en Hanover, York y Gettysburg. Estas casas se construyeron antes de los estándares modernos de barrera de vapor, suelen tener ventilación de baño inadecuada según el código actual, y utilizan paneles de yeso con cara de papel o placas de yeso detrás de los azulejos — ambos altamente susceptibles al moho una vez que la humedad penetra las líneas de mortero o sellador."
                        }
                    },

                    stat1: {
                        label: { en: "Summer RH in Adams & York County",                   es: "HR de Verano en los Condados de Adams y York" },
                        sub:   { en: "Average outdoor relative humidity July–August. EPA threshold for mold risk begins at 60%.", es: "Humedad relativa exterior promedio en julio-agosto. El umbral de riesgo de moho de la EPA comienza en el 60%." }
                    },
                    stat2: {
                        label: { en: "Average Jan. Low in Hanover PA",                     es: "Mínima Promedio de Enero en Hanover, PA" },
                        sub:   { en: "Cold winters drive condensation on thermal bridges — windows, exterior walls, pipes — creating interior moisture even without outdoor humidity.", es: "Los inviernos fríos generan condensación en los puentes térmicos — ventanas, paredes exteriores, tuberías — creando humedad interior incluso sin humedad exterior." }
                    },
                    stat3: {
                        label: { en: "Average Annual Rainfall, South-Central PA",          es: "Precipitación Anual Promedio en el Sur-Centro de PA" },
                        sub:   { en: "Above the national average of 38 in. — sustained wet conditions that challenge drainage and foundation moisture management.", es: "Por encima del promedio nacional de 97 cm — condiciones húmedas sostenidas que representan un reto para el drenaje y la gestión de humedad en cimentaciones." }
                    },

                    // ── SECTION 2 ──────────────────────────────────────────────────
                    section2: {
                        badge: { en: "CDC & WHO DATA",                                     es: "DATOS DEL CDC Y LA OMS" },
                        title: { en: "What the CDC and WHO Actually Say",                  es: "Lo que el CDC y la OMS Realmente Dicen" },
                        p1: {
                            en: "The CDC's position is direct: there is no safe level of mold growth indoors. Any visible mold growth should be addressed — not because all mold is equally dangerous, but because visible mold is evidence of moisture conditions that will sustain and expand the colony if not corrected at the source.",
                            es: "La postura del CDC es directa: no existe un nivel seguro de crecimiento de moho en interiores. Todo crecimiento visible de moho debe ser atendido — no porque todo el moho sea igualmente peligroso, sino porque el moho visible es evidencia de condiciones de humedad que sostendrán y expandirán la colonia si no se corrigen en la fuente."
                        },
                        p2: {
                            en: "The WHO took a more sweeping approach in their 2009 Indoor Air Quality guidelines — a document that reviewed hundreds of epidemiological and clinical studies. Their conclusion: dampness and mold in homes is strongly and consistently associated with adverse health effects across multiple organ systems, with the strongest evidence for respiratory disease.",
                            es: "La OMS adoptó un enfoque más amplio en sus directrices de 2009 sobre Calidad del Aire Interior — un documento que revisó cientos de estudios epidemiológicos y clínicos. Su conclusión: la humedad y el moho en los hogares están fuerte y consistentemente asociados con efectos adversos para la salud en múltiples sistemas orgánicos, con la evidencia más sólida en enfermedades respiratorias."
                        },
                        p3: {
                            en: "The EPA's guidance adds the most actionable piece: the moisture source must be corrected before remediation can succeed. Cleaning mold without fixing the underlying moisture problem is, in the EPA's own language, not effective. The mold will return. This is the single most important thing Pennsylvania homeowners get wrong — and the reason why bathroom renovation is the intervention that actually works.",
                            es: "La orientación de la EPA añade el elemento más accionable: la fuente de humedad debe corregirse antes de que la remediación pueda tener éxito. Limpiar el moho sin solucionar el problema de humedad subyacente, en palabras de la propia EPA, no es eficaz. El moho regresará. Este es el error más común de los propietarios de Pennsylvania — y la razón por la que la renovación del baño es la intervención que realmente funciona."
                        }
                    },

                    highlight1: {
                        label: { en: "Centers for Disease Control and Prevention — cdc.gov/mold",                           es: "Centros para el Control y la Prevención de Enfermedades — cdc.gov/mold" },
                        text:  { en: "\"In 2004 the Institute of Medicine (IOM) found there was sufficient evidence to link indoor exposure to mold with upper respiratory tract symptoms, cough, and wheeze in otherwise healthy people; with asthma symptoms in people with asthma; and with hypersensitivity pneumonitis in individuals susceptible to that immune-mediated condition.\"", es: "\"En 2004, el Instituto de Medicina (IOM) encontró evidencia suficiente para vincular la exposición interior al moho con síntomas del tracto respiratorio superior, tos y sibilancias en personas por lo demás sanas; con síntomas de asma en personas asmáticas; y con neumonitis por hipersensibilidad en individuos susceptibles a esa condición mediada por el sistema inmunitario.\"" },
                        source:{ en: "CDC — Basic Facts About Mold and Dampness (2024)",                                     es: "CDC — Datos Básicos sobre Moho y Humedad (2024)" }
                    },
                    highlight2: {
                        label: { en: "World Health Organization — WHO Guidelines for Indoor Air Quality: Dampness and Mould (2009)", es: "Organización Mundial de la Salud — Directrices de la OMS para la Calidad del Aire Interior: Humedad y Moho (2009)" },
                        text:  { en: "\"The most important means of avoiding adverse health effects is the prevention of dampness and associated microbial growth in buildings. If dampness and mould are already present, remediation is necessary.\"", es: "\"El medio más importante para evitar efectos adversos para la salud es la prevención de la humedad y el crecimiento microbiano asociado en los edificios. Si ya existen humedad y moho, es necesario remediarlos.\"" },
                        source:{ en: "WHO — Indoor Air Quality: Dampness and Mould, Chapter 7 (2009)",                       es: "OMS — Calidad del Aire Interior: Humedad y Moho, Capítulo 7 (2009)" }
                    },

                    // ── SECTION 3 ──────────────────────────────────────────────────
                    section3: {
                        badge: { en: "HEALTH EFFECTS",                                     es: "EFECTOS EN LA SALUD" },
                        title: { en: "Health Effects by Exposure Level",                   es: "Efectos en la Salud Según el Nivel de Exposición" },
                        p1: {
                            en: "Not all mold exposure produces the same outcome. The effect depends on species, concentration, duration of exposure, and individual susceptibility. Here is what the clinical evidence shows across exposure levels.",
                            es: "No toda exposición al moho produce el mismo resultado. El efecto depende de la especie, la concentración, la duración de la exposición y la susceptibilidad individual. Esto es lo que muestra la evidencia clínica según los niveles de exposición."
                        }
                    },

                    tier1: {
                        label:  { en: "LOW-LEVEL EXPOSURE",                                es: "EXPOSICIÓN DE BAJO NIVEL" },
                        title:  { en: "Mild Allergic and Irritant Responses",              es: "Respuestas Alérgicas e Irritantes Leves" },
                        text:   { en: "Sneezing, runny nose, red eyes, skin rash. These are the most common initial symptoms and are often misattributed to seasonal allergies. They occur in otherwise healthy individuals with normal immune function and represent the body's response to airborne mold spores and fungal fragments — not necessarily to mycotoxins.", es: "Estornudos, secreción nasal, ojos rojos, sarpullido cutáneo. Estos son los síntomas iniciales más comunes y frecuentemente se atribuyen erróneamente a alergias estacionales. Se presentan en personas sanas con función inmune normal y representan la respuesta del cuerpo a las esporas de moho y fragmentos fúngicos en el aire — no necesariamente a las micotoxinas." },
                        source: { en: "Source: CDC, IOM 2004 Review",                      es: "Fuente: CDC, Revisión IOM 2004" }
                    },
                    tier2: {
                        badge:  { en: "Most Common in PA Homes",                           es: "Más Común en Hogares de PA" },
                        label:  { en: "MODERATE EXPOSURE",                                 es: "EXPOSICIÓN MODERADA" },
                        title:  { en: "Respiratory Disease and Asthma Worsening",          es: "Enfermedades Respiratorias y Agravamiento del Asma" },
                        text:   { en: "Chronic cough, wheezing, difficulty breathing, and worsening of existing asthma. The CDC specifically identifies this cluster as linked to indoor mold exposure in the 2004 IOM review. For the 1 in 13 Americans with asthma — a rate that is higher in children — indoor mold exposure is a clinically significant trigger. Pennsylvania's older housing stock concentrates this risk.", es: "Tos crónica, sibilancias, dificultad para respirar y agravamiento del asma existente. El CDC identifica específicamente este conjunto de síntomas como vinculado a la exposición interior al moho en la revisión del IOM de 2004. Para 1 de cada 13 estadounidenses con asma — una tasa mayor en niños — la exposición interior al moho es un desencadenante clínicamente significativo. El parque de viviendas más antiguo de Pennsylvania concentra este riesgo." },
                        source: { en: "Source: CDC, NAEPP Expert Panel Report 3",          es: "Fuente: CDC, Informe del Panel de Expertos NAEPP 3" }
                    },
                    tier3: {
                        label:  { en: "HIGH OR PROLONGED EXPOSURE",                        es: "EXPOSICIÓN ALTA O PROLONGADA" },
                        title:  { en: "Hypersensitivity Pneumonitis & Severe Reactions",   es: "Neumonitis por Hipersensibilidad y Reacciones Graves" },
                        text:   { en: "Hypersensitivity pneumonitis (HP) is an immune-mediated lung disease triggered by repeated exposure to mold antigens. It can present as acute flu-like illness within hours of exposure, or as chronic breathlessness and reduced lung function over months. Immunocompromised individuals, elderly residents, and infants face risk of invasive fungal infection — rare but documented. The WHO specifically flags this population in their guidelines.", es: "La neumonitis por hipersensibilidad (NH) es una enfermedad pulmonar mediada por el sistema inmunitario desencadenada por la exposición repetida a antígenos de moho. Puede presentarse como una enfermedad aguda similar a la gripe en horas tras la exposición, o como dificultad respiratoria crónica y función pulmonar reducida a lo largo de meses. Las personas inmunocomprometidas, los residentes de edad avanzada y los lactantes enfrentan riesgo de infección fúngica invasiva — rara pero documentada. La OMS señala específicamente a esta población en sus directrices." },
                        source: { en: "Source: WHO IAQ Guidelines 2009, CDC",              es: "Fuente: Directrices de la OMS sobre CAI 2009, CDC" }
                    },

                    warning1: {
                        label:  { en: "Highest-Risk Household Members — CDC & WHO Consensus", es: "Miembros del Hogar con Mayor Riesgo — Consenso del CDC y la OMS" },
                        text:   { en: "Children under 5 years; adults over 65; individuals with asthma, allergies, or chronic respiratory disease; and anyone with a compromised immune system (cancer treatment, organ transplant, HIV/AIDS) face disproportionately elevated risk from indoor mold exposure. If any of these individuals live in your home, the threshold for action is lower — not higher.", es: "Los niños menores de 5 años; los adultos mayores de 65; las personas con asma, alergias o enfermedades respiratorias crónicas; y cualquier persona con el sistema inmunitario comprometido (tratamiento oncológico, trasplante de órganos, VIH/SIDA) enfrentan un riesgo desproporcionadamente elevado por la exposición interior al moho. Si alguna de estas personas vive en tu hogar, el umbral para actuar es más bajo — no más alto." },
                        source: { en: "CDC — Mold: Who is Most At Risk? / WHO IAQ Guidelines 2009", es: "CDC — Moho: ¿Quién tiene Mayor Riesgo? / Directrices de la OMS sobre CAI 2009" }
                    },

                    // ── SECTION 4 ──────────────────────────────────────────────────
                    section4: {
                        badge: { en: "WHERE IT HIDES",                                     es: "DÓNDE SE ESCONDE" },
                        title: { en: "Where Mold Hides in Pennsylvania Homes",             es: "Dónde se Esconde el Moho en los Hogares de Pennsylvania" },
                        p1: {
                            en: "Visible mold on tile grout or caulk is the part you can see. The part that matters most is usually invisible — hidden inside wall cavities, beneath flooring, and behind fixtures that were installed years or decades ago with materials that were never intended to manage sustained moisture exposure.",
                            es: "El moho visible en el mortero o el sellador de los azulejos es la parte que puedes ver. La parte que más importa suele ser invisible — oculta dentro de las cavidades de las paredes, bajo los pisos y detrás de los accesorios instalados hace años o décadas con materiales que nunca fueron diseñados para gestionar una exposición sostenida a la humedad."
                        }
                    },

                    breakdown: {
                        title: { en: "Mold Risk by Location — Pennsylvania Homes",         es: "Riesgo de Moho por Ubicación — Hogares de Pennsylvania" }
                    },
                    location1: {
                        label: { en: "Behind bathroom tile (wall cavity)",                 es: "Detrás del azulejo del baño (cavidad de la pared)" },
                        risk:  { en: "VERY HIGH",                                          es: "MUY ALTO" },
                        note:  { en: "Failed grout and caulk are the primary water infiltration pathway. Mold grows on paper-faced drywall and wood framing behind the tile — invisible until renovation.", es: "El mortero y el sellador deteriorados son la principal vía de infiltración de agua. El moho crece en el panel de yeso con cara de papel y el armazón de madera detrás del azulejo — invisible hasta la renovación." }
                    },
                    location2: {
                        label: { en: "Under bathroom flooring (subfloor)",                 es: "Bajo el piso del baño (subpiso)" },
                        risk:  { en: "HIGH",                                               es: "ALTO" },
                        note:  { en: "Water migrates beneath toilet and tub seals. Pre-1985 homes frequently have OSB or plywood subfloor with no moisture barrier — both ideal mold substrates.", es: "El agua migra bajo los sellos del inodoro y la bañera. Las casas anteriores a 1985 suelen tener subpiso de OSB o contrachapado sin barrera de humedad — ambos sustratos ideales para el moho." }
                    },
                    location3: {
                        label: { en: "Inside exhaust ventilation ducts",                   es: "Dentro de los conductos de ventilación de extracción" },
                        risk:  { en: "HIGH",                                               es: "ALTO" },
                        note:  { en: "Undersized or disconnected fans trap humid air in duct runs. Condensation in the duct feeds mold that then circulates through the home when the fan operates.", es: "Los ventiladores subdimensionados o desconectados atrapan aire húmedo en los conductos. La condensación en el conducto alimenta el moho que luego circula por el hogar cuando el ventilador funciona." }
                    },
                    location4: {
                        label: { en: "Basement walls and floor-wall joints",               es: "Paredes del sótano y juntas piso-pared" },
                        risk:  { en: "HIGH",                                               es: "ALTO" },
                        note:  { en: "South-central PA's above-average rainfall and clay-heavy soils create chronic hydrostatic pressure against basement walls. Efflorescence is the visible warning sign.", es: "Las precipitaciones superiores a la media y los suelos arcillosos del sur-centro de PA crean una presión hidrostática crónica contra las paredes del sótano. La eflorescencia es la señal de advertencia visible." }
                    },
                    location5: {
                        label: { en: "Attic sheathing (roof deck)",                        es: "Revestimiento del ático (cubierta del techo)" },
                        risk:  { en: "MODERATE-HIGH",                                      es: "MODERADO-ALTO" },
                        note:  { en: "Warm, moist interior air rises and condenses on cold attic sheathing in winter. Inadequate soffit-to-ridge ventilation traps that moisture. Common in homes with poor insulation sealing.", es: "El aire interior cálido y húmedo asciende y se condensa en el revestimiento frío del ático en invierno. La ventilación inadecuada de alero a cumbrera atrapa esa humedad. Común en hogares con un sellado de aislamiento deficiente." }
                    },
                    location6: {
                        label: { en: "Around windows (sill, jamb, interior wall)",         es: "Alrededor de las ventanas (alféizar, marco, pared interior)" },
                        risk:  { en: "MODERATE",                                           es: "MODERADO" },
                        note:  { en: "Condensation on single-pane or poorly insulated window units in winter. Common in pre-1990 homes. Often the first visible mold location homeowners notice.", es: "Condensación en ventanas de vidrio simple o mal aisladas en invierno. Común en casas anteriores a 1990. A menudo es la primera ubicación de moho visible que notan los propietarios." }
                    },

                    // ── SECTION 5 ──────────────────────────────────────────────────
                    section5: {
                        badge: { en: "THE REAL SOLUTION",                                  es: "LA SOLUCIÓN REAL" },
                        title: { en: "Why Bathroom Renovation Stops It",                   es: "Por Qué la Renovación del Baño lo Detiene" },
                        p1: {
                            en: "Spray bleach treats surface mold — the part you can see. It does not reach the mold colonizing paper drywall behind your tile. It does not dry your subfloor. It does not improve the airflow that allows moisture to accumulate. In three to six weeks, the surface mold returns. This is not a cleaning failure. It is an infrastructure failure.",
                            es: "El cloro en aerosol trata el moho superficial — la parte que puedes ver. No alcanza el moho que coloniza el panel de yeso con cara de papel detrás de tus azulejos. No seca tu subpiso. No mejora el flujo de aire que permite que se acumule humedad. En tres a seis semanas, el moho superficial regresa. Esto no es un fallo de limpieza. Es un fallo de infraestructura."
                        },
                        p2: {
                            en: "A properly executed bathroom renovation — not a cosmetic refresh, a structural renovation — addresses each of these failure points simultaneously. Here is what that actually means:",
                            es: "Una renovación de baño correctamente ejecutada — no un retoque cosmético, sino una renovación estructural — aborda cada uno de estos puntos de fallo simultáneamente. Esto es lo que eso significa en la práctica:"
                        }
                    },

                    reno1: {
                        title: { en: "Substrate Replacement — Cement Board, Not Drywall",  es: "Reemplazo del Sustrato — Placa de Cemento, No Panel de Yeso" },
                        text:  { en: "Paper-faced drywall or greenboard — the standard substrate in pre-2000 bathrooms — is an excellent mold food source once wet. A code-compliant renovation replaces it entirely with cement board or a comparable inorganic substrate. Cement board provides no nutritional value to mold. This alone eliminates the primary growth medium behind your tile.", es: "El panel de yeso con cara de papel o el \"greenboard\" — el sustrato estándar en los baños anteriores al año 2000 — es una excelente fuente de alimento para el moho una vez que se moja. Una renovación que cumpla con el código lo reemplaza completamente con placa de cemento o un sustrato inorgánico comparable. La placa de cemento no aporta ningún valor nutricional al moho. Esto por sí solo elimina el medio de crecimiento primario detrás de tus azulejos." }
                    },
                    reno2: {
                        title: { en: "Vapor Barrier and Waterproof Membrane",              es: "Barrera de Vapor y Membrana Impermeabilizante" },
                        text:  { en: "Modern bathroom renovation includes a continuous waterproof membrane behind all wet-area tile. This creates a physical barrier that prevents moisture from reaching the wall cavity regardless of grout or caulk integrity over time. This layer did not exist in most pre-1990 bathroom construction.", es: "La renovación moderna de baños incluye una membrana impermeabilizante continua detrás de todos los azulejos de la zona húmeda. Esto crea una barrera física que impide que la humedad llegue a la cavidad de la pared independientemente de la integridad del mortero o el sellador con el tiempo. Esta capa no existía en la mayoría de las construcciones de baños anteriores a 1990." }
                    },
                    reno3: {
                        title: { en: "Exhaust Ventilation Upgrade",                        es: "Mejora de la Ventilación de Extracción" },
                        text:  { en: "Pennsylvania code requires bathroom exhaust fans to achieve a minimum of 50 CFM for intermittent or 20 CFM for continuous operation. Many older homes have fans that are undersized, improperly ducted, or vented into the attic rather than exterior. A renovation corrects this — removing the primary humidity accumulation mechanism that drives chronic mold conditions.", es: "El código de Pennsylvania exige que los ventiladores de extracción de baños alcancen un mínimo de 50 CFM para operación intermitente o 20 CFM para operación continua. Muchos hogares más antiguos tienen ventiladores subdimensionados, con conductos inadecuados o que ventilan al ático en lugar del exterior. Una renovación corrige esto — eliminando el principal mecanismo de acumulación de humedad que impulsa las condiciones crónicas de moho." }
                    },
                    reno4: {
                        title: { en: "Subfloor Inspection and Remediation",                es: "Inspección y Remediación del Subpiso" },
                        text:  { en: "Pulling existing flooring during renovation is the only way to assess subfloor condition. In our 2,000+ Pennsylvania projects, we find compromised subfloor material in the majority of pre-1985 bathroom renovations — moisture damage invisible from the surface. Replacing it during renovation costs a fraction of what it costs to address after the fact.", es: "Retirar el piso existente durante la renovación es la única manera de evaluar el estado del subpiso. En nuestros más de 2,000 proyectos en Pennsylvania, encontramos material de subpiso comprometido en la mayoría de las renovaciones de baños anteriores a 1985 — daño por humedad invisible desde la superficie. Reemplazarlo durante la renovación cuesta una fracción de lo que cuesta abordarlo a posteriori." }
                    },
                    reno5: {
                        title: { en: "Epoxy Grout and Silicone Caulk",                     es: "Mortero Epoxi y Sellador de Silicona" },
                        text:  { en: "Modern tile installations use epoxy grout — inherently non-porous and resistant to mold — and silicone caulk at all change-of-plane intersections. Traditional cement grout is porous, absorbs moisture, and degrades over time. Upgrading these materials during renovation addresses the infiltration mechanism at its source.", es: "Las instalaciones modernas de azulejos utilizan mortero epoxi — intrínsecamente no poroso y resistente al moho — y sellador de silicona en todas las intersecciones de cambio de plano. El mortero de cemento tradicional es poroso, absorbe humedad y se deteriora con el tiempo. Actualizar estos materiales durante la renovación aborda el mecanismo de infiltración en su origen." }
                    },

                    // ── SECTION 6 ──────────────────────────────────────────────────
                    section6: {
                        badge: { en: "WARNING SIGNS",                                      es: "SEÑALES DE ADVERTENCIA" },
                        title: { en: "Warning Signs You Already Have a Problem",           es: "Señales de Advertencia de que Ya Tienes un Problema" },
                        p1: {
                            en: "Most mold problems in Pennsylvania homes are not discovered by seeing mold. They are discovered by one of the following indicators — each of which points to moisture conditions severe enough to sustain active growth behind surfaces.",
                            es: "La mayoría de los problemas de moho en hogares de Pennsylvania no se descubren al ver el moho. Se descubren a través de uno de los siguientes indicadores — cada uno de los cuales apunta a condiciones de humedad lo suficientemente graves como para sostener un crecimiento activo detrás de las superficies."
                        }
                    },

                    warning1: {
                        title: { en: "Persistent Musty Odor — Especially After Showering", es: "Olor a Humedad Persistente — Especialmente Después de Ducharse" },
                        desc:  { en: "Mold produces microbial volatile organic compounds (mVOCs) as metabolic byproducts. These are what produce the characteristic musty smell. If you notice a damp, earthy, or musty odor in your bathroom that doesn't clear after ventilation, you are smelling active mold growth — very likely behind the wall or beneath the floor, not just on the surface.", es: "El moho produce compuestos orgánicos volátiles microbianos (mCOVs) como subproductos metabólicos. Estos son los que producen el característico olor a humedad. Si notas un olor húmedo, terroso o a moho en tu baño que no desaparece tras la ventilación, estás oliendo un crecimiento activo de moho — muy probablemente detrás de la pared o bajo el piso, no solo en la superficie." }
                    },
                    warning2: {
                        title: { en: "Grout Lines That Discolor Within Weeks of Cleaning", es: "Líneas de Mortero que se Decoloran a las Pocas Semanas de Limpiarlas" },
                        desc:  { en: "If you clean grout and the black or gray discoloration returns within two to four weeks, the mold source is behind the tile — not on the surface. Surface mold disturbed by cleaning re-establishes itself from the colony behind the wall. This is the most reliable indicator that surface treatment is no longer an adequate intervention.", es: "Si limpias el mortero y la decoloración negra o gris regresa en dos a cuatro semanas, la fuente del moho está detrás del azulejo — no en la superficie. El moho superficial alterado por la limpieza se restablece a partir de la colonia detrás de la pared. Este es el indicador más confiable de que el tratamiento superficial ya no es una intervención adecuada." }
                    },
                    warning3: {
                        title: { en: "Soft, Spongy, or Uneven Spots in Flooring Near Toilet or Tub", es: "Zonas Blandas, Esponjosas o Irregulares en el Piso Cerca del Inodoro o la Bañera" },
                        desc:  { en: "Subfloor that feels soft, bouncy, or uneven indicates moisture damage to the structural layer beneath your finished flooring. At this stage, the subfloor is compromised — remediation is no longer optional. In more severe cases, the floor joist below may also be affected. Early detection during renovation is significantly cheaper than emergency structural repair.", es: "Un subpiso que se siente blando, elástico o irregular indica daño por humedad en la capa estructural bajo tu piso terminado. En esta etapa, el subpiso está comprometido — la remediación ya no es opcional. En casos más graves, la vigueta del piso inferior también puede verse afectada. La detección temprana durante la renovación es significativamente más barata que la reparación estructural de emergencia." }
                    },
                    warning4: {
                        title: { en: "Household Members With Unexplained Respiratory Symptoms", es: "Miembros del Hogar con Síntomas Respiratorios Inexplicables" },
                        desc:  { en: "Persistent coughing, morning congestion, worsening allergy symptoms, or new onset of breathing difficulties — particularly in children — that improve when household members are away from home are a clinical signal for indoor air quality issues. The CDC specifically notes this pattern as a reason to assess the home for dampness and mold. If symptoms improve during travel and return at home, the home is a probable cause.", es: "Tos persistente, congestión matutina, agravamiento de los síntomas alérgicos o aparición de nuevas dificultades respiratorias — especialmente en niños — que mejoran cuando los miembros del hogar están fuera de casa son una señal clínica de problemas de calidad del aire interior. El CDC señala específicamente este patrón como razón para evaluar el hogar en busca de humedad y moho. Si los síntomas mejoran durante los viajes y reaparecen en casa, el hogar es una causa probable." }
                    },

                    // comparison table
                    compTable: {
                        title: { en: "Surface Cleaning vs. Bathroom Renovation — What Each Addresses", es: "Limpieza Superficial vs. Renovación de Baño — Qué Aborda Cada Una" },
                        col: {
                            problem:  { en: "Mold Problem",         es: "Problema de Moho" },
                            cleaning: { en: "Surface Cleaning",     es: "Limpieza Superficial" },
                            renovation:{ en: "Bathroom Renovation", es: "Renovación de Baño" }
                        },
                        row1: { problem: { en: "Surface grout & caulk mold",        es: "Moho en mortero y sellador superficial" }, cleaning: { en: "Temporary — returns within weeks",           es: "Temporal — regresa en semanas" },         reno: { en: "Replaced with mold-resistant materials",              es: "Reemplazado con materiales resistentes al moho" } },
                        row2: { problem: { en: "Mold behind tile wall",              es: "Moho detrás de la pared de azulejos" },   cleaning: { en: "Not reached — no effect",                    es: "No alcanzado — sin efecto" },              reno: { en: "Fully exposed, remediated, replaced",                 es: "Totalmente expuesto, remediado y reemplazado" } },
                        row3: { problem: { en: "Compromised subfloor",               es: "Subpiso comprometido" },                  cleaning: { en: "Not addressed",                              es: "No abordado" },                           reno: { en: "Inspected and replaced if damaged",                   es: "Inspeccionado y reemplazado si está dañado" } },
                        row4: { problem: { en: "Inadequate exhaust ventilation",     es: "Ventilación de extracción inadecuada" },  cleaning: { en: "Not addressed",                              es: "No abordado" },                           reno: { en: "Upgraded to current PA code",                         es: "Actualizado al código vigente de PA" } },
                        row5: { problem: { en: "Moisture infiltration pathway",      es: "Vía de infiltración de humedad" },        cleaning: { en: "Not addressed — root cause remains",         es: "No abordado — la causa raíz permanece" }, reno: { en: "Waterproof membrane + vapor barrier installed",       es: "Membrana impermeabilizante + barrera de vapor instaladas" } },
                        row6: { problem: { en: "Long-term mold recurrence",          es: "Recurrencia de moho a largo plazo" },     cleaning: { en: "Certain — months to 2 years",                es: "Segura — meses a 2 años" },               reno: { en: "Eliminated when done correctly",                      es: "Eliminada cuando se hace correctamente" } },
                        source:{ en: "Source: EPA Mold Remediation Guidelines + C Hawk Construction field observations, 2,000+ PA projects (PA190465)", es: "Fuente: Directrices de Remediación de Moho de la EPA + observaciones de campo de C Hawk Construction, más de 2,000 proyectos en PA (PA190465)" }
                    },

                    // ── SECTION 7 FAQ ──────────────────────────────────────────────
                    section7: {
                        badge: { en: "FAQ",                                                es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions",                         es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "Is mold in Pennsylvania homes a serious health risk?",   es: "¿Es el moho en los hogares de Pennsylvania un riesgo grave para la salud?" },
                        a: { en: "Yes. The CDC and WHO both identify indoor mold as a significant public health concern — producing allergens, irritants, and in some species mycotoxins. Pennsylvania's humid summers (75–85% RH) and cold winters create ideal growth conditions. People with asthma, allergies, compromised immune systems, children under 5, and adults over 65 face the highest risk from prolonged exposure.", es: "Sí. Tanto el CDC como la OMS identifican el moho interior como un problema de salud pública significativo — produce alérgenos, irritantes y, en algunas especies, micotoxinas. Los veranos húmedos (HR del 75–85%) y los inviernos fríos de Pennsylvania crean condiciones de crecimiento ideales. Las personas con asma, alergias, sistemas inmunitarios comprometidos, los niños menores de 5 años y los adultos mayores de 65 enfrentan el mayor riesgo ante una exposición prolongada." }
                    },
                    faq2: {
                        q: { en: "Where does mold most commonly grow in Pennsylvania homes?", es: "¿Dónde crece más comúnmente el moho en los hogares de Pennsylvania?" },
                        a: { en: "The bathroom wall cavity behind tile is the highest-risk location — particularly in pre-1985 homes with paper-faced drywall substrate and no waterproof membrane. Secondary locations include bathroom subfloor (under toilet and tub seals), exhaust ventilation ducts, basement walls, attic sheathing, and around windows where winter condensation accumulates.", es: "La cavidad de la pared del baño detrás de los azulejos es la ubicación de mayor riesgo — especialmente en hogares anteriores a 1985 con sustrato de panel de yeso con cara de papel y sin membrana impermeabilizante. Las ubicaciones secundarias incluyen el subpiso del baño (bajo los sellos del inodoro y la bañera), los conductos de ventilación de extracción, las paredes del sótano, el revestimiento del ático y alrededor de las ventanas donde se acumula la condensación invernal." }
                    },
                    faq3: {
                        q: { en: "Does bathroom renovation actually prevent mold long-term?", es: "¿La renovación del baño realmente previene el moho a largo plazo?" },
                        a: { en: "Yes — a structural renovation does. Replacing paper-faced drywall with cement board substrate, installing a waterproof membrane behind wet-area tile, upgrading exhaust ventilation to current PA code minimums, and using epoxy grout eliminates the conditions mold requires. Surface cleaning treats visible symptoms. Renovation treats the infrastructure failure causing them.", es: "Sí — una renovación estructural sí lo hace. Reemplazar el panel de yeso con cara de papel por sustrato de placa de cemento, instalar una membrana impermeabilizante detrás de los azulejos de la zona húmeda, actualizar la ventilación de extracción a los mínimos del código vigente de PA y usar mortero epoxi elimina las condiciones que el moho requiere. La limpieza superficial trata los síntomas visibles. La renovación trata el fallo de infraestructura que los causa." }
                    },
                    faq4: {
                        q: { en: "What humidity level prevents mold in Pennsylvania homes?", es: "¿Qué nivel de humedad previene el moho en los hogares de Pennsylvania?" },
                        a: { en: "The EPA recommends maintaining indoor relative humidity between 30% and 50%. Pennsylvania summers routinely push outdoor RH above 75%, making mechanical dehumidification and proper exhaust ventilation essential — especially in bathrooms and basements. Sustained indoor RH above 60% provides conditions sufficient for mold colonization on most common building materials.", es: "La EPA recomienda mantener la humedad relativa interior entre el 30% y el 50%. Los veranos de Pennsylvania llevan habitualmente la HR exterior por encima del 75%, haciendo que la deshumidificación mecánica y la ventilación de extracción adecuada sean esenciales — especialmente en baños y sótanos. Una HR interior sostenida por encima del 60% proporciona condiciones suficientes para la colonización de moho en la mayoría de los materiales de construcción comunes." }
                    },
                    faq5: {
                        q: { en: "Should I be concerned about \"black mold\" specifically?", es: "¿Debo preocuparme específicamente por el \"moho negro\"?" },
                        a: { en: "The CDC notes that \"black mold\" is not a scientific category — many mold species appear black or dark, including common bathroom varieties. Stachybotrys chartarum (the species most associated with the term) requires sustained water damage and wet cellulose to grow. All mold growth should be addressed regardless of color. Color is not a reliable indicator of toxicity or severity — and any visible mold growth signals moisture conditions that will worsen without structural intervention.", es: "El CDC señala que el \"moho negro\" no es una categoría científica — muchas especies de moho aparecen de color negro o oscuro, incluidas las variedades comunes de baños. Stachybotrys chartarum (la especie más asociada al término) requiere daños por agua sostenidos y celulosa húmeda para crecer. Todo crecimiento de moho debe abordarse independientemente del color. El color no es un indicador confiable de toxicidad o gravedad — y cualquier crecimiento visible de moho señala condiciones de humedad que empeorarán sin una intervención estructural." }
                    },

                    // ── FOOTER / CITATIONS ─────────────────────────────────────────
                    footer: {
                        sources: {
                            title: { en: "References & Citations",                         es: "Referencias y Citas" }
                        },
                        cite1: { en: "Centers for Disease Control and Prevention. (2024). Mold — Basic Facts. U.S. Department of Health and Human Services. cdc.gov/mold",              es: "Centros para el Control y la Prevención de Enfermedades. (2024). Moho — Datos Básicos. Departamento de Salud y Servicios Humanos de EE.UU. cdc.gov/mold" },
                        cite2: { en: "World Health Organization. (2009). WHO Guidelines for Indoor Air Quality: Dampness and Mould. WHO Regional Office for Europe. who.int",             es: "Organización Mundial de la Salud. (2009). Directrices de la OMS para la Calidad del Aire Interior: Humedad y Moho. Oficina Regional de la OMS para Europa. who.int" },
                        cite3: { en: "U.S. Environmental Protection Agency. (2012). Mold: A Brief Guide to Mold, Moisture, and Your Home. EPA 402-K-02-003. epa.gov",                    es: "Agencia de Protección Ambiental de EE.UU. (2012). Moho: Guía Breve sobre Moho, Humedad y Su Hogar. EPA 402-K-02-003. epa.gov" },
                        cite4: { en: "Institute of Medicine (IOM). (2004). Damp Indoor Spaces and Health. National Academies Press. nap.edu",                                            es: "Instituto de Medicina (IOM). (2004). Espacios Interiores Húmedos y Salud. National Academies Press. nap.edu" },
                        cite5: { en: "National Heart, Lung, and Blood Institute. (2007). Expert Panel Report 3: Guidelines for the Diagnosis and Management of Asthma. nhlbi.nih.gov",  es: "Instituto Nacional del Corazón, los Pulmones y la Sangre. (2007). Informe del Panel de Expertos 3: Directrices para el Diagnóstico y Manejo del Asma. nhlbi.nih.gov" },
                        cite6: { en: "C Hawk Construction and Renovation LLC. (2025). Field observations — 2,000+ residential projects, Adams and York County PA, 2022–2025. HICPA PA190465.", es: "C Hawk Construction and Renovation LLC. (2025). Observaciones de campo — más de 2,000 proyectos residenciales, Condados de Adams y York, PA, 2022–2025. HICPA PA190465." },
                        tags: {
                            label: { en: "Topics:", es: "Temas:" }
                        },
                        tag1: { en: "Mold",               es: "Moho" },
                        tag2: { en: "Home Health",         es: "Salud del Hogar" },
                        tag3: { en: "Bathroom Renovation", es: "Renovación de Baño" },
                        tag4: { en: "Pennsylvania",        es: "Pennsylvania" },
                        tag5: { en: "CDC & WHO",           es: "CDC y OMS" }
                    },

                    // ── SIDEBAR ────────────────────────────────────────────────────
                    sidebar: {
                        cta: {
                            badge:    { en: "PA190465 · LICENSED & INSURED",               es: "PA190465 · LICENCIADO Y ASEGURADO" },
                            title:    { en: "Mold Coming Back? It's a Renovation Problem.", es: "¿El Moho Regresa? Es un Problema de Renovación." },
                            text:     { en: "Surface cleaning is temporary. A structural bathroom renovation is permanent. Free written estimate — no pressure, no obligation.", es: "La limpieza superficial es temporal. Una renovación estructural del baño es permanente. Estimación escrita gratuita — sin presión, sin compromiso." },
                            stat1:    { en: "PA Projects",   es: "Proyectos en PA" },
                            stat2:    { en: "Star Rating",   es: "Calificación" },
                            stat3:    { en: "Estimate",      es: "Estimación" },
                            btnOnline:{ en: "Request Estimate Online", es: "Solicitar Estimación en Línea" }
                        },
                        facts: {
                            title: { en: "Key Takeaways",                                  es: "Conclusiones Clave" }
                        },
                        fact1: { en: "PA summers reach 75–85% RH — above mold threshold",  es: "Los veranos en PA alcanzan el 75–85% de HR — por encima del umbral del moho" },
                        fact2: { en: "CDC: no safe level of indoor mold growth",            es: "CDC: no existe un nivel seguro de crecimiento de moho en interiores" },
                        fact3: { en: "Wall cavity behind tile is the #1 hidden growth site",es: "La cavidad de la pared detrás del azulejo es el #1 sitio de crecimiento oculto" },
                        fact4: { en: "Musty odor = active growth behind surfaces",          es: "Olor a humedad = crecimiento activo detrás de las superficies" },
                        fact5: { en: "EPA: fix moisture source first — or mold returns",    es: "EPA: corrige la fuente de humedad primero — o el moho regresa" },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA",      es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA",   es: "Gettysburg, PA" },
                        area3: { en: "York, PA",         es: "York, PA" },
                        area4: { en: "East Berlin, PA",  es: "East Berlin, PA" },
                        area5: { en: "Cumberland, MD",   es: "Cumberland, MD" }
                    },

                    // ── INLINE CTA ─────────────────────────────────────────────────
                    inlineCta: {
                        badge: { en: "LICENSED · INSURED · PA190465 — BATHROOM RENOVATION SPECIALISTS", es: "LICENCIADO · ASEGURADO · PA190465 — ESPECIALISTAS EN RENOVACIÓN DE BAÑOS" },
                        title: {
                            part1:  { en: "Stop Cleaning It. ",  es: "Deja de Limpiarlo. " },
                            accent: { en: "Fix It.",             es: "Repáralo." }
                        },
                        text: {
                            en: "If the mold is coming back, you do not have a cleaning problem — you have an infrastructure problem. We inspect what is behind the tile, under the floor, and inside the wall. Then we fix it with materials and methods that last. Licensed PA190465, insured, written contract, free estimate.",
                            es: "Si el moho sigue regresando, no tienes un problema de limpieza — tienes un problema de infraestructura. Inspeccionamos lo que hay detrás del azulejo, bajo el piso y dentro de la pared. Luego lo reparamos con materiales y métodos duraderos. Licencia PA190465, asegurados, contrato escrito, estimación gratuita."
                        },
                        btn1:   { en: "(443) 858-0904 — Call Now",   es: "(443) 858-0904 — Llama Ahora" },
                        btn2:   { en: "Free Estimate Online",         es: "Estimación Gratuita en Línea" },
                        trust1: { en: "HICPA Licensed PA190465",      es: "Licencia HICPA PA190465" },
                        trust2: { en: "5.0 Star Rating",              es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "Cement Board + Waterproof Membrane Standard", es: "Placa de Cemento + Membrana Impermeabilizante Estándar" }
                    }

                },
                related: {
                    badge: { en: "CONTINUE READING", es: "SEGUIR LEYENDO" },
                    title: { en: "More From C Hawk Construction", es: "Más de C Hawk Construction" },
                    card1: {
                        category: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },
                        title: { en: "How Much Does a Kitchen Remodel Cost in Pennsylvania? 2025 Complete Guide", es: "¿Cuánto Cuesta Remodelar una Cocina en Pennsylvania? Guía Completa 2025" },
                        excerpt: { en: "Real cost data from 1,335+ PA projects. Minor, mid-range, and major tiers with full ROI analysis.", es: "Datos reales de costos de más de 1,335 proyectos en PA. Niveles menor, medio y mayor con análisis completo de ROI." },
                        readTime: { en: "12 min read", es: "12 min de lectura" }
                    },
                    card2: {
                        category: { en: "Mold & Health", es: "Moho y Salud" },
                        title: { en: "Mold in Pennsylvania Homes: What the CDC and WHO Say You Should Know", es: "Moho en Hogares de Pennsylvania: Lo que el CDC y la OMS Dicen que Debes Saber" },
                        excerpt: { en: "Federal agency data on indoor mold and why bathroom renovation is the most effective prevention strategy.", es: "Datos de agencias federales sobre el moho interior y por qué la renovación del baño es la estrategia de prevención más efectiva." },
                        readTime: { en: "10 min read", es: "10 min de lectura" }
                    },
                    card3: {
                        category: { en: "Planning Guide", es: "Guía de Planificación" },
                        title: { en: "The Complete Home Remodeling Planning Guide for Pennsylvania Homeowners", es: "La Guía Completa de Planificación de Remodelación para Propietarios de Pennsylvania" },
                        excerpt: { en: "From NAHB research to Harvard housing data — how to plan a renovation that holds its value in the PA market.", es: "Desde investigaciones de NAHB hasta datos de vivienda de Harvard — cómo planificar una renovación que mantenga su valor en el mercado de PA." },
                        readTime: { en: "14 min read", es: "14 min de lectura" }
                    }
                },
                plan: {

                    breadcrumb: {
                        current: { en: "PA Remodeling Planning Guide", es: "Guía de Planificación de Remodelación en PA" }
                    },

                    category: { en: "Planning Guide", es: "Guía de Planificación" },

                    title: {
                        part1:  { en: "The Complete Home Remodeling Planning Guide",   es: "La Guía Completa de Planificación de Remodelación del Hogar" },
                        accent: { en: "for Pennsylvania Homeowners",                   es: "para Propietarios de Pennsylvania" }
                    },

                    meta: {
                        date:        { en: "June 15, 2025",                            es: "15 de junio de 2025" },
                        readTime:    { en: "14 min read",                              es: "14 min de lectura" },
                        sources:     { en: "Referenced",                               es: "Referenciados" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA",          es: "Hanover · York · Gettysburg, PA" },
                        updated:     { en: "Updated July 2025",                        es: "Actualizado julio 2025" }
                    },

                    hero: {
                        caption: {
                            en: "Renovations that hold their value start with a plan — goals, budget, contractor vetting, permits, and the right sequence. This guide covers all of it for Pennsylvania homeowners.",
                            es: "Las renovaciones que mantienen su valor comienzan con un plan — objetivos, presupuesto, evaluación de contratistas, permisos y la secuencia correcta. Esta guía lo cubre todo para los propietarios de Pennsylvania."
                        }
                    },

                    toc: {
                        title:  { en: "In This Guide",                                              es: "En Esta Guía" },
                        item1:  { en: "Step 1 — Start with Goals, Not Projects",                    es: "Paso 1 — Comienza con Objetivos, No con Proyectos" },
                        item2:  { en: "Step 2 — Build a Realistic Budget Framework",               es: "Paso 2 — Construye un Marco de Presupuesto Realista" },
                        item3:  { en: "Step 3 — ROI by Project Type in the PA Market",             es: "Paso 3 — ROI por Tipo de Proyecto en el Mercado de PA" },
                        item4:  { en: "Step 4 — How to Vet Contractors in Pennsylvania",            es: "Paso 4 — Cómo Evaluar Contratistas en Pennsylvania" },
                        item5:  { en: "Step 5 — Permits in Pennsylvania — What's Required and Why", es: "Paso 5 — Permisos en Pennsylvania — Qué se Requiere y Por Qué" },
                        item6:  { en: "Step 6 — How to Sequence a Multi-Room Renovation",           es: "Paso 6 — Cómo Secuenciar una Renovación de Múltiples Habitaciones" },
                        item7:  { en: "Step 7 — Contingency Planning and What Goes Wrong",          es: "Paso 7 — Planificación de Contingencias y Qué Sale Mal" },
                        item8:  { en: "Pennsylvania-Specific Planning Factors",                     es: "Factores de Planificación Específicos de Pennsylvania" },
                        item9:  { en: "Frequently Asked Questions",                                 es: "Preguntas Frecuentes" }
                    },

                    intro: {
                        p1: {
                            en: "Most home renovation mistakes are not made during construction. They are made in the four to six weeks before construction starts — when decisions about budget, scope, contractor selection, and project sequence are made quickly, under the influence of excitement, and without a framework for evaluating them.",
                            es: "La mayoría de los errores en las renovaciones del hogar no se cometen durante la construcción. Se cometen en las cuatro a seis semanas anteriores al inicio de la construcción — cuando las decisiones sobre el presupuesto, el alcance, la selección del contratista y la secuencia del proyecto se toman rápidamente, bajo el entusiasmo y sin un marco para evaluarlas."
                        },
                        p2: {
                            en: "This guide provides that framework. It is built from 2,000+ renovation projects completed in Adams and York County, combined with data from the National Association of Home Builders, Harvard's Joint Center for Housing Studies, and Remodeling Magazine's annual Cost vs. Value Report. The result is a planning process that helps Pennsylvania homeowners make renovation decisions they will not regret.",
                            es: "Esta guía proporciona ese marco. Está construida a partir de más de 2,000 proyectos de renovación completados en los Condados de Adams y York, combinados con datos de la Asociación Nacional de Constructores de Viviendas, el Centro Conjunto de Estudios de Vivienda de Harvard y el informe anual de Costo vs. Valor de Remodeling Magazine. El resultado es un proceso de planificación que ayuda a los propietarios de Pennsylvania a tomar decisiones de renovación de las que no se arrepentirán."
                        },
                        p3: {
                            en: "Whether you are planning a single kitchen remodel or a whole-home renovation over multiple years, the framework is the same. Start with goals, not projects. Budget before you design. Vet contractors before you get excited about finishes. Get permits before you break ground. Plan the sequence before you sign a contract.",
                            es: "Ya sea que estés planeando una sola remodelación de cocina o una renovación de toda la casa a lo largo de varios años, el marco es el mismo. Comienza con objetivos, no con proyectos. Haz el presupuesto antes de diseñar. Evalúa a los contratistas antes de emocionarte con los acabados. Obtén los permisos antes de romper terreno. Planifica la secuencia antes de firmar un contrato."
                        }
                    },

                    sources: {
                        title:  { en: "Research Sources Referenced",                                                                                                  es: "Fuentes de Investigación Referenciadas" },
                        item1:  { en: "National Association of Home Builders (NAHB) — 2024 Remodeling Market Index & What Home Buyers Want. nahb.org",              es: "Asociación Nacional de Constructores de Viviendas (NAHB) — Índice del Mercado de Remodelación 2024 y Lo que Quieren los Compradores de Vivienda. nahb.org" },
                        item2:  { en: "Harvard Joint Center for Housing Studies — Improving America's Housing 2024. jchs.harvard.edu",                               es: "Centro Conjunto de Estudios de Vivienda de Harvard — Mejorando la Vivienda en América 2024. jchs.harvard.edu" },
                        item3:  { en: "Remodeling Magazine — 2024 Cost vs. Value Report, Mid-Atlantic Region. remodeling.hw.net",                                    es: "Remodeling Magazine — Informe de Costo vs. Valor 2024, Región del Atlántico Medio. remodeling.hw.net" },
                        item4:  { en: "C Hawk Construction and Renovation LLC — 2,000+ renovation projects, Adams and York County PA (2020–2025). HICPA PA190465", es: "C Hawk Construction and Renovation LLC — Más de 2,000 proyectos de renovación, Condados de Adams y York, PA (2020–2025). HICPA PA190465" }
                    },

                    // ── SECTION 1 — GOALS ─────────────────────────────────────────
                    section1: {
                        badge: { en: "STEP 1",                                         es: "PASO 1" },
                        title: { en: "Start with Goals, Not Projects",                 es: "Comienza con Objetivos, No con Proyectos" },
                        p1: {
                            en: "The most common planning failure in home renovation is starting with a project instead of a goal. \"I want to remodel my kitchen\" is a project. \"I want to increase my home's value before I list in 18 months\" is a goal. \"I want to cook at home more and reduce daily stress\" is a goal. The project that serves each of those goals may look very different — and have a very different optimal budget.",
                            es: "El error de planificación más común en la renovación del hogar es comenzar con un proyecto en lugar de un objetivo. \"Quiero remodelar mi cocina\" es un proyecto. \"Quiero aumentar el valor de mi casa antes de ponerla en venta en 18 meses\" es un objetivo. \"Quiero cocinar más en casa y reducir el estrés diario\" es un objetivo. El proyecto que sirve a cada uno de esos objetivos puede verse muy diferente — y tener un presupuesto óptimo muy distinto."
                        },
                        p2: {
                            en: "Before you contact a single contractor or visit a single showroom, answer these four questions in writing. They determine everything that follows.",
                            es: "Antes de contactar a un solo contratista o visitar una sola sala de exhibición, responde estas cuatro preguntas por escrito. Ellas determinan todo lo que sigue."
                        }
                    },

                    goal1: {
                        title: { en: "How long do you plan to stay in this home?",     es: "¿Cuánto tiempo planeas quedarte en esta casa?" },
                        text:  { en: "If you plan to sell within 2–3 years, ROI should dominate your decision-making. Focus on projects with high buyer appeal and strong Cost vs. Value returns — minor kitchen updates, bathroom refreshes, curb appeal projects. If you are staying 10+ years, lifestyle return matters as much as financial return. The kitchen that makes your mornings better for a decade has value that does not appear in a resale analysis.", es: "Si planeas vender en 2–3 años, el ROI debe dominar tu toma de decisiones. Concéntrate en proyectos con gran atractivo para los compradores y fuertes retornos de Costo vs. Valor — actualizaciones menores de cocina, renovaciones de baño, proyectos de mejora de la fachada. Si te quedas 10+ años, el retorno de calidad de vida importa tanto como el retorno financiero. La cocina que mejora tus mañanas durante una década tiene un valor que no aparece en un análisis de reventa." }
                    },
                    goal2: {
                        title: { en: "What is your home's current market value?",      es: "¿Cuál es el valor de mercado actual de tu casa?" },
                        text:  { en: "This is the single most important number in renovation planning. A general guideline supported by NAHB data: no individual renovation project should exceed 10–15% of your home's current market value if you intend to recover the investment at resale. In the Hanover–Gettysburg corridor where median values run $220,000–$340,000, this means kitchen remodels should generally stay under $34,000–$51,000 to remain within rational financial return territory.", es: "Este es el número más importante en la planificación de renovaciones. Una pauta general respaldada por datos de la NAHB: ningún proyecto de renovación individual debe superar el 10–15% del valor de mercado actual de tu casa si pretendes recuperar la inversión en la reventa. En el corredor Hanover–Gettysburg, donde los valores medios oscilan entre $220,000 y $340,000, esto significa que las remodelaciones de cocina generalmente deben mantenerse por debajo de $34,000–$51,000 para permanecer en territorio de retorno financiero racional." }
                    },
                    goal3: {
                        title: { en: "Are there deferred maintenance items that must be addressed first?", es: "¿Hay elementos de mantenimiento diferido que deben atenderse primero?" },
                        text:  { en: "Deferred maintenance — a roof that needs replacement, outdated electrical, active mold, foundation moisture — should be addressed before any cosmetic renovation. A beautiful new kitchen in a house with an aging electrical panel is a problem waiting to happen, and it will be disclosed at resale regardless of how good the renovation looks. Harvard's housing research consistently identifies deferred maintenance as the primary driver of value loss in aging housing stock — it must come first.", es: "El mantenimiento diferido — un techo que necesita reemplazo, electricidad desactualizada, moho activo, humedad en la cimentación — debe atenderse antes de cualquier renovación cosmética. Una hermosa cocina nueva en una casa con un panel eléctrico envejecido es un problema a punto de ocurrir, y se revelará en la reventa independientemente de lo buena que luzca la renovación. La investigación de vivienda de Harvard identifica consistentemente el mantenimiento diferido como el principal impulsor de la pérdida de valor en el parque habitacional envejecido — debe ser lo primero." }
                    },
                    goal4: {
                        title: { en: "What is your actual available budget — not your aspirational budget?", es: "¿Cuál es tu presupuesto disponible real — no tu presupuesto aspiracional?" },
                        text:  { en: "The available budget is what you can spend without financial stress — including a 15–20% contingency for surprises — not what you could theoretically finance. Renovation projects financed entirely through home equity or personal loans at high interest rates rarely make financial sense unless the project directly addresses a safety or habitability issue. The best renovation budget is the one that does not create financial anxiety during a process that already has inherent stress.", es: "El presupuesto disponible es lo que puedes gastar sin estrés financiero — incluyendo un 15–20% de contingencia para imprevistos — no lo que podrías financiar teóricamente. Los proyectos de renovación financiados íntegramente a través de capital propio de la vivienda o préstamos personales a altas tasas de interés rara vez tienen sentido financiero a menos que el proyecto aborde directamente un problema de seguridad o habitabilidad. El mejor presupuesto de renovación es el que no crea ansiedad financiera durante un proceso que ya tiene un estrés inherente." }
                    },

                    // ── SECTION 2 — BUDGET ────────────────────────────────────────
                    section2: {
                        badge: { en: "STEP 2",                                         es: "PASO 2" },
                        title: { en: "Build a Realistic Budget Framework",             es: "Construye un Marco de Presupuesto Realista" },
                        p1: {
                            en: "A realistic renovation budget has four components: the base project cost, the contingency reserve, the ancillary costs, and the financing cost. Most homeowners plan only the first component and are surprised by the others.",
                            es: "Un presupuesto de renovación realista tiene cuatro componentes: el costo base del proyecto, la reserva de contingencia, los costos auxiliares y el costo de financiamiento. La mayoría de los propietarios planifican solo el primer componente y se sorprenden con los demás."
                        },
                        p2: {
                            en: "The contingency reserve is not optional in Pennsylvania renovation projects. Our project data shows that approximately 67% of mid-range and major renovations encounter at least one discovery during demolition that requires additional unplanned work — outdated wiring, deteriorated subfloor, inadequate insulation, structural modifications that were not visible from the surface. In pre-1980 homes, the rate is higher. Budget the contingency before you start, not after a surprise forces it.",
                            es: "La reserva de contingencia no es opcional en los proyectos de renovación de Pennsylvania. Nuestros datos de proyectos muestran que aproximadamente el 67% de las renovaciones de rango medio y mayor encuentran al menos un hallazgo durante la demolición que requiere trabajo adicional no planificado — cableado desactualizado, subpiso deteriorado, aislamiento inadecuado, modificaciones estructurales que no eran visibles desde la superficie. En casas anteriores a 1980, la tasa es mayor. Presupuesta la contingencia antes de comenzar, no después de que una sorpresa te obligue a hacerlo."
                        },
                        p3: {
                            en: "Ancillary costs are also frequently underestimated. A kitchen renovation means you will be eating out or ordering delivery for 4–8 weeks. A bathroom renovation in a single-bathroom home may require temporary arrangements. A whole-home renovation over several months may require storage for displaced furniture. These costs are real and should be budgeted explicitly.",
                            es: "Los costos auxiliares también se subestiman con frecuencia. Una renovación de cocina significa que comerás fuera o pedirás a domicilio durante 4–8 semanas. Una renovación de baño en una casa de un solo baño puede requerir arreglos temporales. Una renovación de toda la casa durante varios meses puede requerir almacenamiento para los muebles desplazados. Estos costos son reales y deben presupuestarse explícitamente."
                        }
                    },

                    budget: {
                        title:          { en: "Four-Component Renovation Budget Framework",               es: "Marco de Presupuesto de Renovación de Cuatro Componentes" },
                        item1: {
                            label: { en: "Base project cost (materials + labor + permits)",               es: "Costo base del proyecto (materiales + mano de obra + permisos)" },
                            range: { en: "Core budget",                                                   es: "Presupuesto principal" }
                        },
                        item2: {
                            label: { en: "Contingency reserve (15–20% of base cost)",                    es: "Reserva de contingencia (15–20% del costo base)" },
                            range: { en: "Non-negotiable in PA",                                          es: "No negociable en PA" }
                        },
                        item3: {
                            label: { en: "Ancillary costs (temporary housing, storage, eating out)",      es: "Costos auxiliares (alojamiento temporal, almacenamiento, comer fuera)" },
                            range: { en: "5–10% of base cost",                                            es: "5–10% del costo base" }
                        },
                        item4: {
                            label: { en: "Financing cost (if applicable — interest over loan term)",      es: "Costo de financiamiento (si aplica — intereses durante el plazo del préstamo)" },
                            range: { en: "Varies — often overlooked",                                     es: "Variable — frecuentemente ignorado" }
                        }
                    },

                    // ── SECTION 3 — ROI ───────────────────────────────────────────
                    section3: {
                        badge: { en: "STEP 3",                                         es: "PASO 3" },
                        title: { en: "ROI by Project Type in the PA Market",           es: "ROI por Tipo de Proyecto en el Mercado de PA" },
                        p1: {
                            en: "Remodeling Magazine's 2024 Cost vs. Value Report for the Mid-Atlantic region provides the most current and geographically relevant data on renovation ROI available. Combined with our local project data, these are the returns Pennsylvania homeowners can realistically expect.",
                            es: "El informe de Costo vs. Valor 2024 de Remodeling Magazine para la región del Atlántico Medio proporciona los datos más actuales y geográficamente relevantes sobre el ROI de renovación disponibles. Combinados con nuestros datos de proyectos locales, estos son los retornos que los propietarios de Pennsylvania pueden esperar de manera realista."
                        },
                        p2: {
                            en: "Two important caveats. First, ROI percentages reflect average returns — individual projects may return more or less depending on execution quality, neighborhood comparables, and market timing. Second, ROI data reflects resale value only. The value of living in a better home — what we covered in our Psychology of Home article — does not appear in Cost vs. Value data and is not zero.",
                            es: "Dos advertencias importantes. Primero, los porcentajes de ROI reflejan retornos promedio — los proyectos individuales pueden retornar más o menos dependiendo de la calidad de ejecución, los comparables del vecindario y el momento del mercado. Segundo, los datos de ROI reflejan solo el valor de reventa. El valor de vivir en una mejor casa — lo que cubrimos en nuestro artículo sobre la Psicología del Hogar — no aparece en los datos de Costo vs. Valor y no es cero."
                        }
                    },

                    roiTable: {
                        title: { en: "Renovation ROI by Project Type — Pennsylvania / Mid-Atlantic 2024", es: "ROI de Renovación por Tipo de Proyecto — Pennsylvania / Atlántico Medio 2024" },
                        col: {
                            project: { en: "Project Type",    es: "Tipo de Proyecto" },
                            cost:    { en: "Avg. Cost (PA)",  es: "Costo Prom. (PA)" },
                            roi:     { en: "ROI at Resale",   es: "ROI en Reventa" },
                            note:    { en: "Planning Note",   es: "Nota de Planificación" }
                        },
                        row1: { project: { en: "Minor kitchen remodel",       es: "Remodelación menor de cocina" },         cost: { en: "$8K–$25K",              es: "$8K–$25K" },              roi: { en: "72–80%", es: "72–80%" }, note: { en: "Best dollar-for-dollar return. Ideal for pre-sale.",              es: "Mejor retorno dólar por dólar. Ideal para preventa." } },
                        row2: { project: { en: "Mid-range bathroom remodel",  es: "Remodelación de baño de rango medio" },  cost: { en: "$15K–$45K",             es: "$15K–$45K" },             roi: { en: "60–68%", es: "60–68%" }, note: { en: "High buyer appeal. Reduces mold risk long-term.",               es: "Gran atractivo para compradores. Reduce el riesgo de moho a largo plazo." } },
                        row3: { project: { en: "Garage door replacement",     es: "Reemplazo de puerta de garaje" },        cost: { en: "$3K–$5K",               es: "$3K–$5K" },               roi: { en: "92–100%", es: "92–100%" }, note: { en: "Highest ROI per dollar spent. High curb appeal impact.",       es: "Mayor ROI por dólar gastado. Alto impacto en el atractivo exterior." } },
                        row4: { project: { en: "Manufactured stone veneer",   es: "Revestimiento de piedra manufacturada" },cost: { en: "$10K–$18K",             es: "$10K–$18K" },             roi: { en: "102%", es: "102%" },     note: { en: "Highest reported return in Mid-Atlantic data.",                es: "El retorno más alto reportado en los datos del Atlántico Medio." } },
                        row5: { project: { en: "Mid-range kitchen remodel",   es: "Remodelación de cocina de rango medio" },cost: { en: "$25K–$65K",             es: "$25K–$65K" },             roi: { en: "58–67%", es: "58–67%" }, note: { en: "Most popular PA tier. Best for long-term residents.",           es: "Nivel más popular en PA. Mejor para residentes a largo plazo." } },
                        row6: { project: { en: "Window replacement",          es: "Reemplazo de ventanas" },                cost: { en: "$800–$1,800 per window", es: "$800–$1,800 por ventana" },roi: { en: "55–68%", es: "55–68%" }, note: { en: "High comfort and energy savings. Critical in PA winters.",      es: "Alta comodidad y ahorro energético. Crítico en los inviernos de PA." } },
                        row7: { project: { en: "Major kitchen renovation",    es: "Renovación mayor de cocina" },           cost: { en: "$65K–$150K+",           es: "$65K–$150K+" },           roi: { en: "42–55%", es: "42–55%" }, note: { en: "Lifestyle investment. ROI improves with higher home values.",   es: "Inversión de calidad de vida. El ROI mejora con valores de vivienda más altos." } },
                        row8: { project: { en: "Primary suite addition",      es: "Adición de suite principal" },           cost: { en: "$120K–$220K",           es: "$120K–$220K" },           roi: { en: "35–50%", es: "35–50%" }, note: { en: "Low financial return. Significant lifestyle return for long-term.", es: "Bajo retorno financiero. Retorno de calidad de vida significativo a largo plazo." } },
                        source: { en: "Source: Remodeling Magazine 2024 Cost vs. Value Mid-Atlantic · C Hawk Construction project data 2022–2025", es: "Fuente: Remodeling Magazine Costo vs. Valor 2024 Atlántico Medio · Datos de proyectos de C Hawk Construction 2022–2025" }
                    },

                    // ── SECTION 4 — VET CONTRACTORS ───────────────────────────────
                    section4: {
                        badge: { en: "STEP 4",                                         es: "PASO 4" },
                        title: { en: "How to Vet Contractors in Pennsylvania",         es: "Cómo Evaluar Contratistas en Pennsylvania" },
                        p1: {
                            en: "Contractor selection is where more renovations go wrong than at any other point in the planning process. Not because most contractors are bad — most are not. But because homeowners frequently select contractors based on the wrong signals, and the difference between a good hire and a costly mistake is not always visible in an initial meeting.",
                            es: "La selección del contratista es donde más renovaciones salen mal que en cualquier otro punto del proceso de planificación. No porque la mayoría de los contratistas sean malos — la mayoría no lo son. Sino porque los propietarios frecuentemente seleccionan contratistas basándose en las señales equivocadas, y la diferencia entre una buena contratación y un costoso error no siempre es visible en una reunión inicial."
                        },
                        p2: {
                            en: "Pennsylvania's HICPA registration system gives you a baseline filter that no other state provides as simply. Use it as your first qualifier — before you evaluate anything else. For a full guide to HICPA verification, see our Licensed vs. Unlicensed Contractor article. Here is the vetting checklist that follows.",
                            es: "El sistema de registro HICPA de Pennsylvania te brinda un filtro de base que ningún otro estado proporciona tan fácilmente. Úsalo como tu primer calificador — antes de evaluar cualquier otra cosa. Para una guía completa sobre la verificación HICPA, consulta nuestro artículo sobre Contratista Licenciado vs. No Licenciado. A continuación se presenta la lista de verificación de evaluación."
                        }
                    },

                    hicpaLink: { en: "Licensed vs. Unlicensed Contractor article", es: "artículo sobre Contratista Licenciado vs. No Licenciado" },

                    vet1: {
                        title: { en: "1. Verify HICPA Registration Status (Active)",   es: "1. Verifica el Estado de Registro HICPA (Activo)" },
                        text:  { en: "Search the contractor at the PA Attorney General database (attorneygeneral.gov). Confirm Active status. If not listed or status is Expired/Inactive, they are operating illegally under Pennsylvania law. This is a hard disqualifier — do not proceed regardless of how good their portfolio looks or how low their price is.", es: "Busca al contratista en la base de datos del Fiscal General de PA (attorneygeneral.gov). Confirma el estado Activo. Si no está listado o el estado es Vencido/Inactivo, está operando ilegalmente bajo la ley de Pennsylvania. Esto es un descalificador definitivo — no procedas independientemente de lo bueno que luzca su portafolio o lo bajo que sea su precio." }
                    },
                    vet2: {
                        title: { en: "2. Request a Current Certificate of Insurance",  es: "2. Solicita un Certificado de Seguro Vigente" },
                        text:  { en: "Ask the contractor's insurer — not the contractor — to send you a COI naming your property address. Confirm current policy dates, general liability coverage limits ($1M per occurrence minimum for most residential projects), and workers' compensation coverage. A contractor who cannot or will not produce current insurance documentation should not work on your property.", es: "Pide a la aseguradora del contratista — no al contratista — que te envíe un COI que incluya la dirección de tu propiedad. Confirma las fechas de póliza vigentes, los límites de cobertura de responsabilidad general ($1M por ocurrencia mínimo para la mayoría de los proyectos residenciales) y la cobertura de compensación laboral. Un contratista que no pueda o no quiera presentar documentación de seguro vigente no debe trabajar en tu propiedad." }
                    },
                    vet3: {
                        title: { en: "3. Get Minimum Three Written, Itemized Quotes",  es: "3. Obtén un Mínimo de Tres Presupuestos Escritos e Itemizados" },
                        text:  { en: "Three quotes give you a baseline for what the project costs in your specific market. A quote significantly below the others is not a bargain — it is a signal to investigate why. Common reasons for abnormally low quotes: unlicensed subcontractors, excluded permit costs, under-specified materials, or a contractor who plans to add costs through change orders once work is underway. Evaluate quotes on specificity and completeness, not just total price.", es: "Tres presupuestos te dan una base para saber cuánto cuesta el proyecto en tu mercado específico. Un presupuesto significativamente más bajo que los demás no es una ganga — es una señal para investigar por qué. Razones comunes para presupuestos anormalmente bajos: subcontratistas sin licencia, costos de permisos excluidos, materiales subespecificados o un contratista que planea agregar costos a través de órdenes de cambio una vez que el trabajo esté en marcha. Evalúa los presupuestos por especificidad y completitud, no solo por el precio total." }
                    },
                    vet4: {
                        title: { en: "4. Check References — Call Them Directly",       es: "4. Verifica las Referencias — Llámalas Directamente" },
                        text:  { en: "Ask for references from projects completed in the last 12–24 months that are comparable in scope to yours. Call them. Ask specifically: Did the project finish on schedule? Was the final cost within 15% of the original quote? How did the contractor handle problems or surprises? Would you hire them again? The answers to these questions are more predictive of your experience than anything visible in a portfolio.", es: "Pide referencias de proyectos completados en los últimos 12–24 meses que sean comparables en alcance al tuyo. Llámalas. Pregunta específicamente: ¿El proyecto terminó según lo programado? ¿El costo final estuvo dentro del 15% del presupuesto original? ¿Cómo manejó el contratista los problemas o imprevistos? ¿Lo contrataría de nuevo? Las respuestas a estas preguntas son más predictivas de tu experiencia que cualquier cosa visible en un portafolio." }
                    },
                    vet5: {
                        title: { en: "5. Review the Contract Before Signing — Every Line", es: "5. Revisa el Contrato Antes de Firmar — Cada Línea" },
                        text:  { en: "A HICPA-compliant contract must include: the contractor's registration number, a detailed written scope of work, total price and payment schedule tied to milestones (not arbitrary dates), start and estimated completion dates, and a three-day right of rescission notice if signed at your residence. If any of these elements are absent, ask for them before signing. Any contractor who resists providing a complete contract is telling you something important about how disputes will be handled.", es: "Un contrato que cumpla con HICPA debe incluir: el número de registro del contratista, un alcance de trabajo escrito detallado, el precio total y el calendario de pagos vinculado a hitos (no fechas arbitrarias), fechas de inicio y finalización estimada, y un aviso del derecho de rescisión de tres días si se firmó en tu residencia. Si alguno de estos elementos está ausente, solicítalo antes de firmar. Cualquier contratista que se resista a proporcionar un contrato completo te está diciendo algo importante sobre cómo se manejarán las disputas." }
                    },

                    // ── SECTION 5 — PERMITS ───────────────────────────────────────
                    section5: {
                        badge: { en: "STEP 5",                                         es: "PASO 5" },
                        title: { en: "Permits in Pennsylvania — What's Required and Why", es: "Permisos en Pennsylvania — Qué se Requiere y Por Qué" },
                        p1: {
                            en: "Permits are the most frequently misunderstood element of residential renovation planning. Many homeowners view them as bureaucratic overhead — a cost and delay with no benefit. This is a significant misunderstanding. Permits exist to protect you — not the contractor, not the municipality — you.",
                            es: "Los permisos son el elemento más frecuentemente malentendido en la planificación de renovaciones residenciales. Muchos propietarios los ven como burocracia — un costo y retraso sin beneficio. Este es un malentendido significativo. Los permisos existen para protegerte a ti — no al contratista, no al municipio — a ti."
                        },
                        p2: {
                            en: "Pennsylvania permit processing timelines vary significantly by municipality. Adams County averages 5–10 business days for standard residential permits. Some York County townships process in 3–5 days; others take 3 weeks. Factor permit lead time into your project schedule and ask your contractor for their experience with your specific municipality's timeline before committing to a start date.",
                            es: "Los plazos de procesamiento de permisos en Pennsylvania varían significativamente por municipio. El Condado de Adams promedia 5–10 días hábiles para permisos residenciales estándar. Algunos municipios del Condado de York procesan en 3–5 días; otros tardan 3 semanas. Incorpora el tiempo de tramitación de permisos en tu cronograma de proyecto y pregunta a tu contratista sobre su experiencia con el plazo de tu municipio específico antes de comprometerte con una fecha de inicio."
                        }
                    },

                    permit1: {
                        label: { en: "TYPICALLY REQUIRES A PERMIT",                    es: "GENERALMENTE REQUIERE UN PERMISO" },
                        title: { en: "Structural, Electrical, Plumbing, HVAC, Additions", es: "Estructural, Eléctrico, Plomería, HVAC, Adiciones" },
                        text:  { en: "Any work involving load-bearing structural changes, new electrical circuits or panel work, plumbing rough-in changes or relocations, HVAC installation or major modification, additions, decks above a specified height, and major window or door openings. In most Pennsylvania municipalities, these trigger permit requirements regardless of project size. Your contractor should identify all required permits and pull them — not suggest skipping them.", es: "Cualquier trabajo que involucre cambios estructurales de carga, nuevos circuitos eléctricos o trabajo en el panel, cambios de plomería de obra negra o reubicaciones, instalación o modificación importante de HVAC, adiciones, terrazas por encima de una altura especificada y aperturas importantes de ventanas o puertas. En la mayoría de los municipios de Pennsylvania, estos activan los requisitos de permisos independientemente del tamaño del proyecto. Tu contratista debe identificar todos los permisos requeridos y obtenerlos — no sugerir omitirlos." }
                    },
                    permit2: {
                        label: { en: "TYPICALLY DOES NOT REQUIRE A PERMIT",            es: "GENERALMENTE NO REQUIERE UN PERMISO" },
                        title: { en: "Cosmetic Work — Paint, Flooring, Cabinet Hardware", es: "Trabajo Cosmético — Pintura, Pisos, Herrajes de Gabinetes" },
                        text:  { en: "Painting, flooring replacement (without subfloor changes), cabinet door and hardware replacement, minor fixture swaps with no rough-in changes, and similar purely cosmetic work typically does not require a permit in most Pennsylvania municipalities. However, the boundary varies — when in doubt, your contractor should confirm with the local building department before starting work. The cost of a permit is always less than the cost of unpermitted work discovered at resale.", es: "Pintura, reemplazo de pisos (sin cambios en el subpiso), reemplazo de puertas y herrajes de gabinetes, cambios menores de accesorios sin cambios de obra negra y trabajos puramente cosméticos similares generalmente no requieren permiso en la mayoría de los municipios de Pennsylvania. Sin embargo, el límite varía — ante la duda, tu contratista debe confirmar con el departamento de construcción local antes de comenzar el trabajo. El costo de un permiso es siempre menor que el costo del trabajo sin permiso descubierto en la reventa." }
                    },
                    permit3: {
                        label: { en: "WHAT HAPPENS WITHOUT PERMITS",                   es: "QUÉ SUCEDE SIN PERMISOS" },
                        title: { en: "Unpermitted Work Creates Permanent Liability",   es: "El Trabajo Sin Permiso Crea Responsabilidad Permanente" },
                        text:  { en: "Unpermitted work does not disappear. It is discovered during buyer home inspections, appraisals, and insurance assessments — and it follows the house, not the contractor. Pennsylvania sellers who knowingly fail to disclose material defects including unpermitted work face legal liability. Retroactive permitting is possible but expensive, often requiring removal of finished surfaces for inspection. The permit cost paid upfront is always the right financial decision.", es: "El trabajo sin permiso no desaparece. Se descubre durante las inspecciones de vivienda del comprador, las tasaciones y las evaluaciones de seguros — y sigue a la casa, no al contratista. Los vendedores de Pennsylvania que intencionalmente no divulgan defectos materiales, incluido el trabajo sin permiso, enfrentan responsabilidad legal. La obtención retroactiva de permisos es posible pero costosa, y a menudo requiere la remoción de superficies terminadas para su inspección. El costo del permiso pagado por adelantado es siempre la decisión financiera correcta." }
                    },

                    // ── SECTION 6 — SEQUENCING ────────────────────────────────────
                    section6: {
                        badge: { en: "STEP 6",                                         es: "PASO 6" },
                        title: { en: "How to Sequence a Multi-Room Renovation",        es: "Cómo Secuenciar una Renovación de Múltiples Habitaciones" },
                        p1: {
                            en: "If you are planning to renovate multiple areas of your home — whether simultaneously or over several years — the sequence matters as much as the scope. Doing things in the wrong order creates rework, cost duplication, and damage to already-completed work. The correct sequence follows a principle: structural and systems work first, cosmetic finishes last.",
                            es: "Si planeas renovar múltiples áreas de tu hogar — ya sea simultáneamente o a lo largo de varios años — la secuencia importa tanto como el alcance. Hacer las cosas en el orden equivocado crea retrabajo, duplicación de costos y daños al trabajo ya completado. La secuencia correcta sigue un principio: trabajo estructural y de sistemas primero, acabados cosméticos al último."
                        }
                    },

                    seq1: {
                        title: { en: "Deferred Maintenance and Structural Issues First", es: "Mantenimiento Diferido y Problemas Estructurales Primero" },
                        text:  { en: "Roof, foundation, major structural issues, active mold, significant water intrusion, outdated electrical panel. None of these can wait for cosmetic work — and cosmetic work done before addressing them will be damaged or will conceal the underlying problem. If you have deferred maintenance in any category, it comes first in the sequence regardless of how unsexy it is as a renovation project.", es: "Techo, cimentación, problemas estructurales mayores, moho activo, infiltración significativa de agua, panel eléctrico desactualizado. Ninguno de estos puede esperar al trabajo cosmético — y el trabajo cosmético realizado antes de abordarlos se dañará o ocultará el problema subyacente. Si tienes mantenimiento diferido en cualquier categoría, va primero en la secuencia independientemente de lo poco atractivo que sea como proyecto de renovación." }
                    },
                    seq2: {
                        title: { en: "Mechanical Systems — HVAC, Electrical, Plumbing", es: "Sistemas Mecánicos — HVAC, Eléctrico, Plomería" },
                        text:  { en: "Major mechanical system upgrades — HVAC replacement, electrical panel upgrade, plumbing rough-in changes — must happen before wall and ceiling finishes are closed in. Installing new drywall before upgrading a 60-amp panel means the drywall gets damaged when you eventually upgrade the panel. Systems work always precedes finish work in every room they affect.", es: "Las actualizaciones importantes de sistemas mecánicos — reemplazo de HVAC, actualización del panel eléctrico, cambios de plomería de obra negra — deben ocurrir antes de que los acabados de paredes y techos sean cerrados. Instalar paneles de yeso nuevos antes de actualizar un panel de 60 amperios significa que el panel de yeso se dañará cuando eventualmente actualices el panel. El trabajo de sistemas siempre precede al trabajo de acabados en cada habitación que afectan." }
                    },
                    seq3: {
                        title: { en: "Wet Areas — Bathrooms and Kitchens",              es: "Áreas Húmedas — Baños y Cocinas" },
                        text:  { en: "Renovate wet areas before adjacent dry areas. A bathroom renovation creates dust, vibration, and contractor traffic that damages adjacent finishes. Complete bathroom and kitchen work before touching hallway flooring, bedroom walls, or living room finishes. Within wet area renovations, the sequence is: demolition → structural → plumbing rough-in → electrical rough-in → backer board → tile → fixtures → paint → trim.", es: "Renueva las áreas húmedas antes que las áreas secas adyacentes. Una renovación de baño crea polvo, vibración y tráfico de contratistas que daña los acabados adyacentes. Completa el trabajo de baño y cocina antes de tocar los pisos del pasillo, las paredes de los dormitorios o los acabados de la sala de estar. Dentro de las renovaciones de áreas húmedas, la secuencia es: demolición → estructural → plomería de obra negra → eléctrico de obra negra → tablero de soporte → azulejo → accesorios → pintura → molduras." }
                    },
                    seq4: {
                        title: { en: "Interior Finishes — Flooring Last",               es: "Acabados Interiores — Pisos al Último" },
                        text:  { en: "Interior paint, trim, and built-ins come before flooring in every room. Paint overspray, trim installation, and cabinet delivery all damage installed flooring. Within flooring installation, work from the furthest point from the exit toward the door — rooms at the end of the sequence are installed last so the freshly installed floor is never walked on more than necessary before cure. Flooring is always the last interior finish in any room sequence.", es: "La pintura interior, las molduras y los elementos empotrados van antes que los pisos en cada habitación. La pintura en aerosol, la instalación de molduras y la entrega de gabinetes dañan los pisos instalados. Dentro de la instalación de pisos, trabaja desde el punto más alejado de la salida hacia la puerta — las habitaciones al final de la secuencia se instalan al último para que el piso recién instalado nunca se transite más de lo necesario antes de que cure. Los pisos son siempre el último acabado interior en cualquier secuencia de habitaciones." }
                    },
                    seq5: {
                        title: { en: "Exterior Work Can Often Run Parallel to Interior", es: "El Trabajo Exterior Puede Ejecutarse a Menudo en Paralelo con el Interior" },
                        text:  { en: "Exterior projects — siding, roofing, deck, landscaping — can often run in parallel with interior finish work without creating interference, provided weather protection for the interior is maintained during exterior construction. Scheduling exterior work for spring and fall in Pennsylvania takes advantage of optimal installation conditions and avoids the extreme heat of summer and cold of winter that affect material installation quality.", es: "Los proyectos exteriores — revestimiento, techado, terraza, paisajismo — a menudo pueden ejecutarse en paralelo con el trabajo de acabados interiores sin crear interferencias, siempre que se mantenga la protección climática para el interior durante la construcción exterior. Programar el trabajo exterior para primavera y otoño en Pennsylvania aprovecha las condiciones óptimas de instalación y evita el calor extremo del verano y el frío del invierno que afectan la calidad de instalación de los materiales." }
                    },

                    // ── SECTION 7 — CONTINGENCY ───────────────────────────────────
                    section7: {
                        badge: { en: "STEP 7",                                         es: "PASO 7" },
                        title: { en: "Contingency Planning and What Goes Wrong",       es: "Planificación de Contingencias y Qué Sale Mal" },
                        p1: {
                            en: "Across 2,000+ projects in Adams and York County, the most common renovation discoveries during demolition are consistent enough to be predictable. This list is not meant to alarm — it is meant to help you budget intelligently and react calmly when surprises arise, because surprises are normal.",
                            es: "En más de 2,000 proyectos en los Condados de Adams y York, los hallazgos de renovación más comunes durante la demolición son lo suficientemente consistentes como para ser predecibles. Esta lista no pretende alarmar — pretende ayudarte a presupuestar inteligentemente y reaccionar con calma cuando surjan sorpresas, porque las sorpresas son normales."
                        },
                        p2: {
                            en: "The most common categories of contingency discovery: mold and moisture damage behind tile or under flooring (particularly in pre-1990 homes); outdated or undersized electrical wiring requiring upgrade to support modern load demands; inadequate or missing insulation discovered when walls are opened; plumbing connections that are corroded or improperly joined; and subfloor damage from prior undetected water events. In pre-1980 homes, asbestos or lead paint may also be encountered and require specialized remediation.",
                            es: "Las categorías más comunes de hallazgos de contingencia: moho y daño por humedad detrás de los azulejos o bajo los pisos (particularmente en casas anteriores a 1990); cableado eléctrico desactualizado o subdimensionado que requiere actualización para soportar las demandas de carga modernas; aislamiento inadecuado o faltante descubierto cuando se abren las paredes; conexiones de plomería corroídas o unidas incorrectamente; y daños en el subpiso por eventos de agua previos no detectados. En casas anteriores a 1980, también puede encontrarse asbesto o pintura con plomo y requerir remediación especializada."
                        },
                        p3: {
                            en: "None of these surprises is a reason to panic or blame your contractor — they are invisible before demolition and predictable in aggregate. They are the reason the contingency reserve exists. A contractor who acts surprised by every discovery and immediately requests a large change order without documentation is a different concern — that is a performance and ethics issue, not a renovation reality.",
                            es: "Ninguna de estas sorpresas es razón para entrar en pánico o culpar a tu contratista — son invisibles antes de la demolición y predecibles en conjunto. Son la razón por la que existe la reserva de contingencia. Un contratista que actúa sorprendido ante cada hallazgo y solicita inmediatamente una gran orden de cambio sin documentación es una preocupación diferente — eso es un problema de desempeño y ética, no una realidad de la renovación."
                        }
                    },

                    cont1: {
                        label: { en: "of Mid-Range+ Projects",                         es: "de Proyectos de Rango Medio+" },
                        sub:   { en: "encounter at least one unplanned discovery requiring additional work — our project data, Adams/York County PA", es: "encuentran al menos un hallazgo no planificado que requiere trabajo adicional — nuestros datos de proyectos, Condados de Adams/York, PA" }
                    },
                    cont2: {
                        label: { en: "Contingency Reserve",                            es: "Reserva de Contingencia" },
                        sub:   { en: "recommended for all Pennsylvania renovation budgets — higher for pre-1980 homes and any below-grade work", es: "recomendada para todos los presupuestos de renovación en Pennsylvania — mayor para casas anteriores a 1980 y cualquier trabajo bajo nivel del suelo" }
                    },
                    cont3: {
                        label: { en: "Discovery in PA Bathrooms",                      es: "Hallazgo en Baños de PA" },
                        sub:   { en: "mold behind tile and deteriorated substrate — found in approximately 45% of bathroom renovations in pre-1990 PA homes", es: "moho detrás del azulejo y sustrato deteriorado — encontrado en aproximadamente el 45% de las renovaciones de baños en casas de PA anteriores a 1990" }
                    },

                    // ── SECTION 8 — PA SPECIFIC ───────────────────────────────────
                    section8: {
                        badge: { en: "PA-SPECIFIC FACTORS",                            es: "FACTORES ESPECÍFICOS DE PA" },
                        title: { en: "Pennsylvania-Specific Planning Factors",         es: "Factores de Planificación Específicos de Pennsylvania" },
                        p1: {
                            en: "Several planning considerations are specific to the Pennsylvania market and are not reflected in national renovation guides.",
                            es: "Varias consideraciones de planificación son específicas del mercado de Pennsylvania y no se reflejan en las guías nacionales de renovación."
                        }
                    },

                    paFactor1: {
                        title: { en: "Seasonal Timing Affects Material and Labor Availability", es: "El Calendario Estacional Afecta la Disponibilidad de Materiales y Mano de Obra" },
                        text:  { en: "Pennsylvania's contractor market peaks in spring and early summer — March through June is when most homeowners start projects and contractor schedules fill fastest. Starting your planning in January or February for a spring project gives you the best contractor selection and often better pricing. Scheduling projects for late summer or fall — August through October — often yields more scheduling flexibility and comparable quality at potentially lower cost due to reduced competition for contractor time.", es: "El mercado de contratistas de Pennsylvania alcanza su pico en primavera y principios de verano — de marzo a junio es cuando la mayoría de los propietarios inician proyectos y los calendarios de los contratistas se llenan más rápido. Comenzar la planificación en enero o febrero para un proyecto de primavera te brinda la mejor selección de contratistas y a menudo mejores precios. Programar proyectos para finales de verano u otoño — de agosto a octubre — a menudo ofrece más flexibilidad de programación y calidad comparable a un costo potencialmente menor debido a la reducción de la competencia por el tiempo del contratista." }
                    },
                    paFactor2: {
                        title: { en: "Humidity and Material Acclimation in PA Seasons", es: "Humedad y Aclimatación de Materiales en las Estaciones de PA" },
                        text:  { en: "Wood products — hardwood flooring, solid wood cabinetry, wood trim — must be acclimated to the home's indoor conditions before installation. In Pennsylvania, this is particularly important during winter months when heated homes run very low relative humidity (20–30% RH) and summer months when humidity peaks. A good contractor will deliver wood materials 3–7 days before installation and allow them to reach equilibrium moisture content with the installed environment. Skipping acclimation is a common source of post-installation problems.", es: "Los productos de madera — pisos de madera dura, gabinetes de madera sólida, molduras de madera — deben aclimatarse a las condiciones interiores del hogar antes de la instalación. En Pennsylvania, esto es particularmente importante durante los meses de invierno cuando las casas calefaccionadas tienen una humedad relativa muy baja (20–30% HR) y los meses de verano cuando la humedad alcanza su pico. Un buen contratista entregará los materiales de madera 3–7 días antes de la instalación y los dejará alcanzar el contenido de humedad de equilibrio con el entorno instalado. Omitir la aclimatación es una fuente común de problemas posteriores a la instalación." }
                    },
                    paFactor3: {
                        title: { en: "South-Central PA Costs vs. Philadelphia Metro — Know the Difference", es: "Costos del Sur-Centro de PA vs. el Metro de Filadelfia — Conoce la Diferencia" },
                        text:  { en: "Hanover, York, and Gettysburg renovation costs run 8–12% below Philadelphia metro averages and 5–8% below Pittsburgh, primarily due to lower labor rates and a more competitive subcontractor market. National cost guides and some online estimating tools use metro averages that will overestimate your project cost. Any contractor quoting Philadelphia rates for an Adams County project should be able to justify the premium or adjust their quote to the local market.", es: "Los costos de renovación de Hanover, York y Gettysburg se sitúan un 8–12% por debajo de los promedios del metro de Filadelfia y un 5–8% por debajo de Pittsburgh, principalmente debido a tasas de mano de obra más bajas y un mercado de subcontratistas más competitivo. Las guías nacionales de costos y algunas herramientas de estimación en línea utilizan promedios metropolitanos que sobreestimarán el costo de tu proyecto. Cualquier contratista que cotice tarifas de Filadelfia para un proyecto del Condado de Adams debe poder justificar la prima o ajustar su cotización al mercado local." }
                    },
                    paFactor4: {
                        title: { en: "The 15% Rule and PA Home Values",                es: "La Regla del 15% y los Valores de Vivienda en PA" },
                        text:  { en: "The general guideline of limiting individual renovation investment to 10–15% of current market value is particularly relevant in the Hanover–Gettysburg corridor, where median values run $220,000–$340,000. Over-improving for the neighborhood — spending $80,000 on a kitchen in a $250,000 home — creates a situation where the renovation cannot recover its cost at resale because comparable homes in the neighborhood cap the sale price below the total investment. Know what your neighbors' renovated homes sell for before you decide on your renovation tier.", es: "La pauta general de limitar la inversión individual en renovación al 10–15% del valor de mercado actual es particularmente relevante en el corredor Hanover–Gettysburg, donde los valores medios oscilan entre $220,000 y $340,000. La sobremejora para el vecindario — gastar $80,000 en una cocina en una casa de $250,000 — crea una situación donde la renovación no puede recuperar su costo en la reventa porque las casas comparables en el vecindario limitan el precio de venta por debajo de la inversión total. Conoce a qué precio se venden las casas renovadas de tus vecinos antes de decidir tu nivel de renovación." }
                    },

                    // ── SECTION 9 — FAQ ───────────────────────────────────────────
                    section9: {
                        badge: { en: "FAQ",                                            es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions",                     es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "How do I plan a home renovation in Pennsylvania?",   es: "¿Cómo planifico una renovación del hogar en Pennsylvania?" },
                        a: { en: "Start with goals, not projects: are you renovating to live in the home, to sell, or both? Establish your budget including a 15–20% contingency before designing anything. Identify which projects deliver the best ROI for your goals using Mid-Atlantic Cost vs. Value data. Vet contractors under HICPA before signing. Confirm required permits with your municipality. Sequence the work correctly — structural and systems before cosmetics. Address deferred maintenance before any aesthetic renovation project.", es: "Comienza con objetivos, no con proyectos: ¿estás renovando para vivir en la casa, para venderla o para ambas cosas? Establece tu presupuesto, incluido un 15–20% de contingencia, antes de diseñar cualquier cosa. Identifica qué proyectos ofrecen el mejor ROI para tus objetivos utilizando los datos de Costo vs. Valor del Atlántico Medio. Evalúa a los contratistas bajo HICPA antes de firmar. Confirma los permisos requeridos con tu municipio. Secuencia el trabajo correctamente — estructural y sistemas antes de los cosméticos. Aborda el mantenimiento diferido antes de cualquier proyecto de renovación estética." }
                    },
                    faq2: {
                        q: { en: "What home renovations have the best ROI in Pennsylvania?", es: "¿Qué renovaciones del hogar tienen el mejor ROI en Pennsylvania?" },
                        a: { en: "Per Remodeling Magazine's 2024 Cost vs. Value Report for the Mid-Atlantic region: manufactured stone veneer additions return approximately 102% ROI, garage door replacements return 92–100%, minor kitchen remodels return 72–80%, and mid-range bathroom renovations return 60–68%. Lower ROI projects include major kitchen renovations (42–55%) and additions (35–50%). Minor and mid-range projects consistently outperform major renovations on a percentage return basis.", es: "Según el informe de Costo vs. Valor 2024 de Remodeling Magazine para la región del Atlántico Medio: las adiciones de revestimiento de piedra manufacturada retornan aproximadamente un 102% de ROI, los reemplazos de puertas de garaje retornan entre 92–100%, las remodelaciones menores de cocina retornan entre 72–80% y las renovaciones de baños de rango medio retornan entre 60–68%. Los proyectos con menor ROI incluyen las renovaciones mayores de cocina (42–55%) y las adiciones (35–50%). Los proyectos menores y de rango medio superan consistentemente a las renovaciones mayores en términos de retorno porcentual." }
                    },
                    faq3: {
                        q: { en: "How much contingency should I budget for a Pennsylvania home renovation?", es: "¿Cuánta contingencia debo presupuestar para una renovación del hogar en Pennsylvania?" },
                        a: { en: "15–20% of the base project cost for most Pennsylvania renovations. For pre-1980 homes, below-grade work (basements), or homes with known deferred maintenance, budget 20–25% contingency. Our project data shows 67% of mid-range and major PA renovations encounter at least one unplanned discovery — mold, outdated wiring, damaged subfloor, inadequate insulation — that requires additional work. The contingency reserve makes these discoveries manageable rather than budget-breaking.", es: "15–20% del costo base del proyecto para la mayoría de las renovaciones de Pennsylvania. Para casas anteriores a 1980, trabajos bajo nivel del suelo (sótanos) o casas con mantenimiento diferido conocido, presupuesta un 20–25% de contingencia. Nuestros datos de proyectos muestran que el 67% de las renovaciones de rango medio y mayor en PA encuentran al menos un hallazgo no planificado — moho, cableado desactualizado, subpiso dañado, aislamiento inadecuado — que requiere trabajo adicional. La reserva de contingencia hace que estos hallazgos sean manejables en lugar de que arruinen el presupuesto." }
                    },
                    faq4: {
                        q: { en: "What permits do I need for a home renovation in Pennsylvania?", es: "¿Qué permisos necesito para una renovación del hogar en Pennsylvania?" },
                        a: { en: "Permits are required in most Pennsylvania municipalities for structural changes, electrical work beyond minor circuits, plumbing rough-in changes, HVAC installation, additions, and decks above specified heights. Purely cosmetic work — paint, flooring, cabinet hardware — typically does not require a permit. Your contractor should identify all required permits and pull them before starting work. Unpermitted work creates legal liability at resale and safety risks that remain with the property owner, not the contractor who skipped the permit.", es: "Se requieren permisos en la mayoría de los municipios de Pennsylvania para cambios estructurales, trabajo eléctrico más allá de circuitos menores, cambios de plomería de obra negra, instalación de HVAC, adiciones y terrazas por encima de alturas especificadas. El trabajo puramente cosmético — pintura, pisos, herrajes de gabinetes — generalmente no requiere un permiso. Tu contratista debe identificar todos los permisos requeridos y obtenerlos antes de comenzar el trabajo. El trabajo sin permiso crea responsabilidad legal en la reventa y riesgos de seguridad que permanecen con el propietario, no con el contratista que omitió el permiso." }
                    },
                    faq5: {
                        q: { en: "When is the best time of year to renovate a home in Pennsylvania?", es: "¿Cuál es la mejor época del año para renovar una casa en Pennsylvania?" },
                        a: { en: "Late summer and fall — August through October — typically offers the best combination of contractor availability and scheduling flexibility in the South-Central Pennsylvania market. Spring (March–June) is peak season and contractor schedules fill fastest. Interior projects can run year-round regardless of weather. Exterior work is best scheduled for spring and fall in Pennsylvania to avoid both summer heat that affects material curing and winter cold that affects installation quality and some material adhesion. Start planning at least 60–90 days before your desired start date for any mid-range or larger project.", es: "El final del verano y el otoño — de agosto a octubre — generalmente ofrece la mejor combinación de disponibilidad de contratistas y flexibilidad de programación en el mercado del Sur-Centro de Pennsylvania. La primavera (marzo–junio) es la temporada alta y los calendarios de los contratistas se llenan más rápido. Los proyectos interiores pueden ejecutarse durante todo el año independientemente del clima. El trabajo exterior se programa mejor para primavera y otoño en Pennsylvania para evitar tanto el calor del verano que afecta el curado de los materiales como el frío del invierno que afecta la calidad de instalación y la adhesión de algunos materiales. Comienza a planificar al menos 60–90 días antes de tu fecha de inicio deseada para cualquier proyecto de rango medio o mayor." }
                    },

                    // ── FOOTER / CITATIONS ─────────────────────────────────────────
                    footer: {
                        sources: {
                            title: { en: "References & Citations",                     es: "Referencias y Citas" }
                        },
                        cite1: { en: "National Association of Home Builders (NAHB). (2024). Remodeling Market Index Q4 2024 & What Home Buyers Really Want. nahb.org", es: "Asociación Nacional de Constructores de Viviendas (NAHB). (2024). Índice del Mercado de Remodelación Q4 2024 y Lo que Realmente Quieren los Compradores de Vivienda. nahb.org" },
                        cite2: { en: "Harvard Joint Center for Housing Studies. (2024). Improving America's Housing 2024. jchs.harvard.edu",                              es: "Centro Conjunto de Estudios de Vivienda de Harvard. (2024). Mejorando la Vivienda en América 2024. jchs.harvard.edu" },
                        cite3: { en: "Remodeling Magazine. (2024). Cost vs. Value Report 2024 — Mid-Atlantic Region. remodeling.hw.net",                                es: "Remodeling Magazine. (2024). Informe de Costo vs. Valor 2024 — Región del Atlántico Medio. remodeling.hw.net" },
                        cite4: { en: "Pennsylvania General Assembly. (2008). Home Improvement Consumer Protection Act, Act 132 of 2008. 73 P.S. §§ 517.1–517.19. legis.state.pa.us", es: "Asamblea General de Pennsylvania. (2008). Ley de Protección al Consumidor de Mejoras del Hogar, Ley 132 de 2008. 73 P.S. §§ 517.1–517.19. legis.state.pa.us" },
                        cite5: { en: "C Hawk Construction and Renovation LLC. (2025). Internal renovation project data — 2,000+ projects, Adams and York County PA, 2020–2025. HICPA PA190465.", es: "C Hawk Construction and Renovation LLC. (2025). Datos internos de proyectos de renovación — más de 2,000 proyectos, Condados de Adams y York, PA, 2020–2025. HICPA PA190465." },
                        tags: {
                            label: { en: "Topics:", es: "Temas:" }
                        },
                        tag1: { en: "Planning Guide",    es: "Guía de Planificación" },
                        tag2: { en: "Renovation ROI",    es: "ROI de Renovación" },
                        tag3: { en: "Pennsylvania",      es: "Pennsylvania" },
                        tag4: { en: "Budget",            es: "Presupuesto" },
                        tag5: { en: "Contractor Guide",  es: "Guía de Contratistas" }
                    },

                    // ── SIDEBAR ────────────────────────────────────────────────────
                    sidebar: {
                        cta: {
                            badge:       { en: "PA190465 · FREE ESTIMATE",             es: "PA190465 · ESTIMACIÓN GRATUITA" },
                            title:       { en: "Ready to Move from Plan to Project?",  es: "¿Listo para Pasar del Plan al Proyecto?" },
                            text:        { en: "Free written estimate. Specific to your home, your goals, and your timeline. We handle permits, sequencing, and HICPA compliance — so you don't have to manage it separately.", es: "Estimación escrita gratuita. Específica para tu hogar, tus objetivos y tu cronograma. Nos encargamos de los permisos, la secuenciación y el cumplimiento de HICPA — para que no tengas que gestionarlo por separado." },
                            stat1:       { en: "PA Projects",  es: "Proyectos en PA" },
                            stat2:       { en: "Stars",        es: "Estrellas" },
                            stat3:       { en: "Licensed",     es: "Licenciado" },
                            btnEstimate: { en: "Get Free Estimate", es: "Obtener Estimación Gratuita" }
                        },
                        facts: {
                            title: { en: "Planning Quick Reference",                   es: "Referencia Rápida de Planificación" }
                        },
                        fact1: { en: "No project > 10–15% of home value",             es: "Ningún proyecto > 10–15% del valor del hogar" },
                        fact2: { en: "Always budget 15–20% contingency",               es: "Siempre presupuesta 15–20% de contingencia" },
                        fact3: { en: "Fix deferred maintenance before cosmetics",       es: "Soluciona el mantenimiento diferido antes que los cosméticos" },
                        fact4: { en: "Verify HICPA before signing anything",            es: "Verifica HICPA antes de firmar cualquier cosa" },
                        fact5: { en: "Flooring always installed last",                  es: "Los pisos siempre se instalan al último" },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA",     es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA",  es: "Gettysburg, PA" },
                        area3: { en: "York, PA",        es: "York, PA" },
                        area4: { en: "East Berlin, PA", es: "East Berlin, PA" },
                        area5: { en: "Cumberland, MD",  es: "Cumberland, MD" }
                    },

                    // ── INLINE CTA ─────────────────────────────────────────────────
                    inlineCta: {
                        badge: { en: "PA190465 · 2,000+ PROJECTS · FREE WRITTEN ESTIMATE", es: "PA190465 · MÁS DE 2,000 PROYECTOS · ESTIMACIÓN ESCRITA GRATUITA" },
                        title: {
                            part1:  { en: "You Have the Plan. ", es: "Tienes el Plan. " },
                            accent: { en: "We Execute It.",      es: "Nosotros lo Ejecutamos." }
                        },
                        text: {
                            en: "HICPA registered. Fully insured. Written contract with itemized scope, fixed price, and milestone payments. Permits pulled. Work sequenced correctly. 2,000+ renovations in Adams and York County — and a free written estimate that reflects your actual home, not a national average.",
                            es: "Registrado en HICPA. Totalmente asegurado. Contrato escrito con alcance itemizado, precio fijo y pagos por hitos. Permisos obtenidos. Trabajo secuenciado correctamente. Más de 2,000 renovaciones en los Condados de Adams y York — y una estimación escrita gratuita que refleja tu hogar real, no un promedio nacional."
                        },
                        btn1:   { en: "Get Free Written Estimate",    es: "Obtener Estimación Escrita Gratuita" },
                        btn2:   { en: "(443) 858-0904 — Call Now",    es: "(443) 858-0904 — Llama Ahora" },
                        trust1: { en: "HICPA Licensed PA190465",      es: "Licencia HICPA PA190465" },
                        trust2: { en: "5.0 Star Rating",              es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "Written Contracts Always",     es: "Contratos Escritos Siempre" }
                    }

                },
                psych: {

                    breadcrumb: {
                        current: { en: "Psychology of Home",                          es: "Psicología del Hogar" }
                    },

                    category: { en: "Home & Wellbeing",                              es: "Hogar y Bienestar" },

                    title: {
                        part1:  { en: "The Psychology of Home:",                     es: "La Psicología del Hogar:" },
                        accent: { en: "How Your Living Space Affects Your Mental Health Every Day", es: "Cómo Tu Espacio de Vida Afecta Tu Salud Mental Cada Día" }
                    },

                    meta: {
                        date:        { en: "April 10, 2025",                         es: "10 de abril de 2025" },
                        readTime:    { en: "11 min read",                            es: "11 min de lectura" },
                        sources:     { en: "Research Referenced",                    es: "Investigaciones Referenciadas" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA",        es: "Hanover · York · Gettysburg, PA" },
                        updated:     { en: "Updated July 2025",                      es: "Actualizado julio 2025" }
                    },

                    hero: {
                        caption: {
                            en: "A renovated living space with natural light, functional layout, and intentional design — the elements environmental psychology research identifies as highest-impact on daily wellbeing.",
                            es: "Un espacio de vida renovado con luz natural, distribución funcional y diseño intencional — los elementos que la investigación de psicología ambiental identifica como de mayor impacto en el bienestar diario."
                        }
                    },

                    toc: {
                        title:  { en: "In This Guide",                                                              es: "En Esta Guía" },
                        item1:  { en: "What Environmental Psychology Research Actually Shows",                      es: "Lo que Realmente Muestra la Investigación de Psicología Ambiental" },
                        item2:  { en: "Clutter, Disorder, and Cortisol — The Stress Hormone Connection",           es: "Desorden, Caos y Cortisol — La Conexión con la Hormona del Estrés" },
                        item3:  { en: "Natural Light — The Single Strongest Environmental Predictor of Mood",      es: "Luz Natural — El Predictor Ambiental Más Fuerte del Estado de Ánimo" },
                        item4:  { en: "Kitchen Design and Eating Behavior — More Connected Than You Think",        es: "Diseño de Cocina y Comportamiento Alimentario — Más Conectados de lo que Crees" },
                        item5:  { en: "Noise, Privacy, and Chronic Stress",                                        es: "Ruido, Privacidad y Estrés Crónico" },
                        item6:  { en: "The Renovation Effect — Documented Wellbeing Outcomes",                    es: "El Efecto Renovación — Resultados de Bienestar Documentados" },
                        item7:  { en: "What to Change First — Prioritizing for Maximum Impact",                    es: "Qué Cambiar Primero — Priorizar para el Máximo Impacto" },
                        item8:  { en: "Frequently Asked Questions",                                                es: "Preguntas Frecuentes" }
                    },

                    intro: {
                        p1: {
                            en: "You already know — viscerally, before any research confirms it — that some rooms feel different than others. A kitchen with good light and open space feels different from one that is cramped and dim. A bedroom that is orderly feels different to sleep in than one that is cluttered. You register the difference immediately, without thinking about it.",
                            es: "Ya lo sabes — de manera visceral, antes de que cualquier investigación lo confirme — que algunas habitaciones se sienten diferentes a otras. Una cocina con buena luz y espacio abierto se siente diferente a una que es estrecha y oscura. Un dormitorio ordenado se siente diferente para dormir que uno desordenado. Registras la diferencia de inmediato, sin pensarlo."
                        },
                        p2: {
                            en: "What environmental psychology and neuroscience have spent decades documenting is exactly what that difference costs you — in cortisol levels, sleep quality, cognitive performance, and long-term mental health outcomes. The research is substantial, peer-reviewed, and consistent: the state of your home is not a background variable in your wellbeing. It is an active participant in it.",
                            es: "Lo que la psicología ambiental y la neurociencia han pasado décadas documentando es exactamente lo que esa diferencia te cuesta — en niveles de cortisol, calidad del sueño, rendimiento cognitivo y resultados de salud mental a largo plazo. La investigación es sustancial, revisada por pares y consistente: el estado de tu hogar no es una variable de fondo en tu bienestar. Es un participante activo en él."
                        },
                        p3: {
                            en: "This article presents that research clearly. Not to create anxiety about imperfect homes, but to give Pennsylvania homeowners an informed framework for understanding why renovation decisions are also health decisions — and which changes carry the most measurable impact.",
                            es: "Este artículo presenta esa investigación de manera clara. No para crear ansiedad sobre hogares imperfectos, sino para dar a los propietarios de Pennsylvania un marco informado para comprender por qué las decisiones de renovación también son decisiones de salud — y qué cambios tienen el impacto más medible."
                        }
                    },

                    sources: {
                        title:  { en: "Research Sources Referenced",                  es: "Fuentes de Investigación Referenciadas" },
                        item1:  { en: "Saxbe, D.E. & Repetti, R. (2010). \"No Place Like Home: Home Tours Correlate with Daily Patterns of Mood and Cortisol.\" Personality and Social Psychology Bulletin, 36(1). USC / Reprinted NIH.", es: "Saxbe, D.E. y Repetti, R. (2010). «No hay lugar como el hogar: Los recorridos por el hogar se correlacionan con los patrones diarios de estado de ánimo y cortisol.» Personality and Social Psychology Bulletin, 36(1). USC / Reproducido NIH." },
                        item2:  { en: "Cornell University, Department of Design and Environmental Analysis — Natural Light and Workplace Productivity Study (2013). human.cornell.edu", es: "Universidad de Cornell, Departamento de Diseño y Análisis Ambiental — Estudio sobre Luz Natural y Productividad en el Trabajo (2013). human.cornell.edu" },
                        item3:  { en: "Harvard T.H. Chan School of Public Health — Healthy Buildings Program: The 9 Foundations of a Healthy Building (2022). hsph.harvard.edu", es: "Escuela de Salud Pública T.H. Chan de Harvard — Programa de Edificios Saludables: Los 9 Fundamentos de un Edificio Saludable (2022). hsph.harvard.edu" },
                        item4:  { en: "Journal of Environmental Psychology — \"Home Renovation and Subjective Wellbeing: A Longitudinal Study\" (2016). sciencedirect.com", es: "Journal of Environmental Psychology — «Renovación del Hogar y Bienestar Subjetivo: Un Estudio Longitudinal» (2016). sciencedirect.com" }
                    },

                    // ── SECTION 1 — RESEARCH ──────────────────────────────────────
                    section1: {
                        badge: { en: "THE RESEARCH",                                   es: "LA INVESTIGACIÓN" },
                        title: { en: "What Environmental Psychology Research Actually Shows", es: "Lo que Realmente Muestra la Investigación de Psicología Ambiental" },
                        p1: {
                            en: "Environmental psychology is a discipline that studies the relationship between physical environments and human behavior, cognition, and emotion. It has produced decades of controlled research on how the built environment — specifically the home — shapes measurable outcomes in mental health, productivity, and physical health.",
                            es: "La psicología ambiental es una disciplina que estudia la relación entre los entornos físicos y el comportamiento, la cognición y la emoción humanos. Ha producido décadas de investigación controlada sobre cómo el entorno construido — específicamente el hogar — moldea resultados medibles en salud mental, productividad y salud física."
                        },
                        p2: {
                            en: "The findings are not subtle. They are consistent across methodologies, populations, and geographies. And they point in a clear direction: the quality of your home environment is not incidental to your wellbeing. It is a primary driver of it — operating below conscious awareness, continuously, every hour you spend inside.",
                            es: "Los hallazgos no son sutiles. Son consistentes a través de metodologías, poblaciones y geografías. Y apuntan en una dirección clara: la calidad de tu entorno doméstico no es incidental para tu bienestar. Es un impulsor primario de él — operando por debajo de la conciencia, continuamente, cada hora que pasas dentro."
                        },
                        p3: {
                            en: "Harvard's Healthy Buildings Program — one of the most comprehensive research efforts on the built environment and human health — identified nine physical building factors that directly determine occupant wellbeing: ventilation, air quality, thermal health, moisture, dust and pests, safety, water quality, noise, and lighting. Every one of these is within a homeowner's direct ability to improve. Every one of them is addressed during a properly executed renovation.",
                            es: "El Programa de Edificios Saludables de Harvard — uno de los esfuerzos de investigación más completos sobre el entorno construido y la salud humana — identificó nueve factores físicos del edificio que determinan directamente el bienestar de los ocupantes: ventilación, calidad del aire, salud térmica, humedad, polvo y plagas, seguridad, calidad del agua, ruido e iluminación. Cada uno de estos está dentro de la capacidad directa del propietario para mejorar. Cada uno de ellos se aborda durante una renovación correctamente ejecutada."
                        }
                    },

                    stat1: {
                        label: { en: "Fewer Symptoms",                                 es: "Menos Síntomas" },
                        sub:   { en: "headaches, eyestrain, and blurred vision in naturally lit spaces vs. artificial light — Cornell University, 2013", es: "dolores de cabeza, fatiga ocular y visión borrosa en espacios con luz natural vs. luz artificial — Universidad de Cornell, 2013" }
                    },
                    stat2: {
                        label: { en: "All Day in Cluttered Homes",                     es: "Todo el Día en Hogares Desordenados" },
                        sub:   { en: "women in cluttered homes had elevated cortisol throughout the entire day — Saxbe & Repetti, 2010, Personality & Social Psychology Bulletin", es: "las mujeres en hogares desordenados tuvieron cortisol elevado durante todo el día — Saxbe y Repetti, 2010, Personality & Social Psychology Bulletin" }
                    },
                    stat3: {
                        label: { en: "Building Health Foundations",                    es: "Fundamentos de Salud del Edificio" },
                        sub:   { en: "identified by Harvard's Healthy Buildings Program as direct determinants of occupant wellbeing — Harvard T.H. Chan, 2022", es: "identificados por el Programa de Edificios Saludables de Harvard como determinantes directos del bienestar de los ocupantes — Harvard T.H. Chan, 2022" }
                    },

                    // ── SECTION 2 — CLUTTER ───────────────────────────────────────
                    section2: {
                        badge: { en: "CLUTTER & STRESS",                               es: "DESORDEN Y ESTRÉS" },
                        title: { en: "Clutter, Disorder, and Cortisol — The Stress Hormone Connection", es: "Desorden, Caos y Cortisol — La Conexión con la Hormona del Estrés" },
                        p1: {
                            en: "A 2010 study by Darby Saxbe and Rena Repetti at the University of Southern California, published in Personality and Social Psychology Bulletin, measured cortisol levels in women throughout the day as they moved through their homes. The finding was direct: women who used more words associated with clutter and unfinished projects to describe their homes had higher cortisol throughout the entire day — not just in the moments they were confronted with the clutter, but persistently, from morning through evening.",
                            es: "Un estudio de 2010 realizado por Darby Saxbe y Rena Repetti en la Universidad del Sur de California, publicado en Personality and Social Psychology Bulletin, midió los niveles de cortisol en mujeres a lo largo del día mientras se desplazaban por sus hogares. El hallazgo fue directo: las mujeres que usaban más palabras asociadas con el desorden y proyectos inacabados para describir sus hogares tenían niveles de cortisol más altos durante todo el día — no solo en los momentos en que se enfrentaban al desorden, sino de manera persistente, desde la mañana hasta la noche."
                        },
                        p2: {
                            en: "Cortisol is not simply a \"stress\" hormone in a colloquial sense. Chronically elevated cortisol is associated with impaired immune function, disrupted sleep architecture, increased anxiety, and long-term cardiovascular risk. The home environment was producing a measurable physiological stress response — not a subjective one, but a hormonal one — that persisted throughout the occupant's day.",
                            es: "El cortisol no es simplemente una hormona del «estrés» en el sentido coloquial. El cortisol crónicamente elevado está asociado con la función inmune deteriorada, la arquitectura del sueño alterada, el aumento de la ansiedad y el riesgo cardiovascular a largo plazo. El entorno doméstico producía una respuesta fisiológica de estrés medible — no subjetiva, sino hormonal — que persistía durante todo el día del ocupante."
                        },
                        p3: {
                            en: "The mechanism is not complex. The human visual cortex continuously processes its environment — not only when we consciously attend to it, but passively, as background processing. A disorganized environment produces a continuous low-level signal of unresolved tasks and incomplete information. The brain responds to this signal as it responds to any unresolved problem: with a mild but persistent stress response. Over years of living in a disordered space, this mild persistent stress is not mild in its cumulative effects.",
                            es: "El mecanismo no es complejo. La corteza visual humana procesa continuamente su entorno — no solo cuando prestamos atención consciente a él, sino pasivamente, como procesamiento de fondo. Un entorno desorganizado produce una señal continua de bajo nivel de tareas no resueltas e información incompleta. El cerebro responde a esta señal como responde a cualquier problema no resuelto: con una respuesta de estrés leve pero persistente. A lo largo de años de vivir en un espacio desordenado, este estrés leve y persistente no es leve en sus efectos acumulativos."
                        },
                        p4: {
                            en: "The practical implication is not that every homeowner needs to achieve magazine-level minimalism. It is that spaces designed with intentional organization — adequate storage, functional layouts that reduce visual noise, clear surfaces in high-use areas — produce measurably different stress baselines than spaces that lack these features. Renovation that improves storage and functional organization is, in a literal neurological sense, a stress-reduction investment.",
                            es: "La implicación práctica no es que cada propietario necesite alcanzar un minimalismo de nivel de revista. Es que los espacios diseñados con organización intencional — almacenamiento adecuado, distribuciones funcionales que reducen el ruido visual, superficies despejadas en áreas de alto uso — producen líneas de base de estrés mediblemente diferentes a los espacios que carecen de estas características. La renovación que mejora el almacenamiento y la organización funcional es, en un sentido neurológico literal, una inversión para reducir el estrés."
                        }
                    },

                    highlight1: {
                        label:  { en: "Saxbe & Repetti — Personality and Social Psychology Bulletin, Vol. 36(1), 2010", es: "Saxbe y Repetti — Personality and Social Psychology Bulletin, Vol. 36(1), 2010" },
                        text:   { en: "\"A stressful home environment was associated with elevated diurnal cortisol and greater depressed mood over the course of the day.\"", es: "«Un entorno doméstico estresante se asoció con cortisol diurno elevado y mayor estado de ánimo deprimido a lo largo del día.»" },
                        source: { en: "University of Southern California — Published in Personality & Social Psychology Bulletin, archived NIH.gov", es: "Universidad del Sur de California — Publicado en Personality & Social Psychology Bulletin, archivado en NIH.gov" }
                    },

                    // ── SECTION 3 — NATURAL LIGHT ─────────────────────────────────
                    section3: {
                        badge: { en: "NATURAL LIGHT",                                  es: "LUZ NATURAL" },
                        title: { en: "Natural Light — The Single Strongest Environmental Predictor of Mood", es: "Luz Natural — El Predictor Ambiental Más Fuerte del Estado de Ánimo" },
                        p1: {
                            en: "Light is not merely a visibility tool. It is a biological input. Natural light exposure directly regulates the circadian system — the body's 24-hour internal clock — which controls cortisol release, melatonin production, serotonin synthesis, body temperature, and sleep architecture. Every one of these systems has measurable effects on mood, energy, and cognitive function.",
                            es: "La luz no es simplemente una herramienta de visibilidad. Es un insumo biológico. La exposición a la luz natural regula directamente el sistema circadiano — el reloj interno de 24 horas del cuerpo — que controla la liberación de cortisol, la producción de melatonina, la síntesis de serotonina, la temperatura corporal y la arquitectura del sueño. Cada uno de estos sistemas tiene efectos medibles sobre el estado de ánimo, la energía y la función cognitiva."
                        },
                        p2: {
                            en: "The Cornell University study published in 2013 by Dr. Alan Hedge quantified the effects of natural versus artificial lighting on 49 office workers over several weeks. Workers in naturally lit environments reported 84% fewer headaches, eyestrain, and blurred vision symptoms. They reported better sleep (an average of 46 minutes more per night) and higher scores on vitality measures. The mechanism was circadian: natural light exposure during the day strengthens the circadian signal, which in turn improves sleep quality at night and alerting response during the day.",
                            es: "El estudio de la Universidad de Cornell publicado en 2013 por el Dr. Alan Hedge cuantificó los efectos de la iluminación natural versus artificial en 49 trabajadores de oficina durante varias semanas. Los trabajadores en entornos con luz natural reportaron un 84% menos de síntomas de dolores de cabeza, fatiga ocular y visión borrosa. Reportaron mejor sueño (un promedio de 46 minutos más por noche) y puntuaciones más altas en medidas de vitalidad. El mecanismo fue circadiano: la exposición a la luz natural durante el día fortalece la señal circadiana, que a su vez mejora la calidad del sueño por la noche y la respuesta de alerta durante el día."
                        }
                    },

                    light1: {
                        title: { en: "Kitchen Windows Are Highest-Impact",             es: "Las Ventanas de la Cocina Tienen el Mayor Impacto" },
                        text:  { en: "The kitchen is where most households spend morning time — the period most critical for circadian entrainment. Morning natural light suppresses residual melatonin and advances the cortisol awakening response, the biological mechanism that produces alertness and energy in the first hours after waking. A kitchen renovation that adds a window, expands an existing window, or removes obstructions to natural light is not an aesthetic decision — it is a circadian health decision with daily compounding effects.", es: "La cocina es donde la mayoría de los hogares pasan el tiempo de la mañana — el período más crítico para el arrastre circadiano. La luz natural matutina suprime la melatonina residual y adelanta la respuesta de despertar del cortisol, el mecanismo biológico que produce alerta y energía en las primeras horas después de despertar. Una renovación de cocina que agrega una ventana, amplía una ventana existente o elimina obstrucciones a la luz natural no es una decisión estética — es una decisión de salud circadiana con efectos diarios compuestos." }
                    },
                    light2: {
                        title: { en: "Bedroom Light Exposure Directly Governs Sleep Quality", es: "La Exposición a la Luz en el Dormitorio Rige Directamente la Calidad del Sueño" },
                        text:  { en: "Bedroom light exposure at the wrong times — evening light that is too bright, or morning light entering too early in winter — disrupts melatonin cycles and delays or advances sleep phases. Pennsylvania winters, with short days and long dark periods, exacerbate seasonal circadian disruption. Bedroom renovations that include blackout-compatible window treatments and layered lighting with warm-spectrum options address these biological light management needs directly.", es: "La exposición a la luz en el dormitorio en los momentos equivocados — luz nocturna demasiado brillante, o luz matutina que entra demasiado temprano en invierno — interrumpe los ciclos de melatonina y retrasa o adelanta las fases del sueño. Los inviernos de Pennsylvania, con días cortos y largos períodos oscuros, exacerban la perturbación circadiana estacional. Las renovaciones de dormitorios que incluyen tratamientos de ventanas compatibles con oscurecimiento e iluminación en capas con opciones de espectro cálido abordan directamente estas necesidades de gestión biológica de la luz." }
                    },
                    light3: {
                        title: { en: "Open Layouts Distribute Light More Effectively",  es: "Las Distribuciones Abiertas Distribuyen la Luz de Manera Más Efectiva" },
                        text:  { en: "Compartmentalized floor plans — characteristic of pre-1990 Pennsylvania home construction — concentrate natural light near windows and block it from interior areas. Open or semi-open layouts allow light to penetrate deeper into the living space, increasing the average light exposure of all occupants throughout the day. For homeowners considering structural changes, light distribution is a measurable wellbeing benefit of open-concept renovations that rarely appears in cost-benefit discussions but is well-documented in environmental psychology literature.", es: "Las plantas compartimentadas — características de la construcción de viviendas de Pennsylvania anteriores a 1990 — concentran la luz natural cerca de las ventanas y la bloquean de las áreas interiores. Las distribuciones abiertas o semiabiertars permiten que la luz penetre más profundamente en el espacio habitable, aumentando la exposición promedio a la luz de todos los ocupantes a lo largo del día. Para los propietarios que consideran cambios estructurales, la distribución de la luz es un beneficio de bienestar medible de las renovaciones de concepto abierto que rara vez aparece en las discusiones de costo-beneficio pero está bien documentado en la literatura de psicología ambiental." }
                    },

                    // ── SECTION 4 — KITCHEN ───────────────────────────────────────
                    section4: {
                        badge: { en: "KITCHEN & BEHAVIOR",                             es: "COCINA Y COMPORTAMIENTO" },
                        title: { en: "Kitchen Design and Eating Behavior — More Connected Than You Think", es: "Diseño de Cocina y Comportamiento Alimentario — Más Conectados de lo que Crees" },
                        p1: {
                            en: "The kitchen is not simply a place where food is prepared. It is the primary behavioral environment for a family's nutritional decisions, social interaction, and daily ritual. Environmental psychology research has consistently found that kitchen design — the arrangement of space, the clarity of workflow, the visibility of healthy versus unhealthy options — directly shapes eating behavior in ways that operate below conscious awareness.",
                            es: "La cocina no es simplemente un lugar donde se prepara la comida. Es el entorno conductual principal para las decisiones nutricionales, la interacción social y el ritual diario de una familia. La investigación de psicología ambiental ha encontrado consistentemente que el diseño de la cocina — la disposición del espacio, la claridad del flujo de trabajo, la visibilidad de opciones saludables versus no saludables — moldea directamente el comportamiento alimentario de maneras que operan por debajo de la conciencia."
                        }
                    },

                    kitchen1: {
                        label: { en: "LAYOUT EFFECT",                                  es: "EFECTO DEL DISEÑO" },
                        title: { en: "Chaotic Kitchens Drive Higher Caloric Intake",   es: "Las Cocinas Caóticas Impulsan un Mayor Consumo Calórico" },
                        text:  { en: "Cornell University's Food and Brand Lab, led by Dr. Brian Wansink, found in multiple studies that chaotic kitchen environments — defined by visual disorder, cluttered surfaces, and poor workflow organization — were associated with significantly higher snack consumption, larger portion choices, and more impulsive food selection. Participants in orderly kitchen environments consumed an average of 44% fewer calories from snacks during a 10-minute period than those in chaotic conditions. The environment shaped behavior without any conscious decision on the part of the participants.", es: "El Laboratorio de Alimentos y Marcas de la Universidad de Cornell, dirigido por el Dr. Brian Wansink, encontró en múltiples estudios que los entornos de cocina caóticos — definidos por el desorden visual, las superficies abarrotadas y la mala organización del flujo de trabajo — se asociaron con un consumo significativamente mayor de bocadillos, elecciones de porciones más grandes y selección de alimentos más impulsiva. Los participantes en entornos de cocina ordenados consumieron un promedio del 44% menos de calorías de los bocadillos durante un período de 10 minutos que aquellos en condiciones caóticas. El entorno moldeó el comportamiento sin ninguna decisión consciente por parte de los participantes." }
                    },
                    kitchen2: {
                        label: { en: "COOKING FREQUENCY",                              es: "FRECUENCIA DE COCINA" },
                        title: { en: "Functional Kitchens Increase Home Cooking Rates", es: "Las Cocinas Funcionales Aumentan las Tasas de Cocinar en Casa" },
                        text:  { en: "Research published in the International Journal of Behavioral Nutrition and Physical Activity found that home cooking frequency was significantly associated with kitchen layout functionality, counter space adequacy, and appliance quality. Households with updated, functional kitchen equipment and adequate workspace cooked at home more frequently and consumed higher-quality diets than households with dysfunctional kitchen conditions — independent of income, time availability, and cooking skill. The environment shaped the behavior.", es: "Una investigación publicada en el International Journal of Behavioral Nutrition and Physical Activity encontró que la frecuencia de cocinar en casa estaba significativamente asociada con la funcionalidad de la distribución de la cocina, la adecuación del espacio de encimera y la calidad de los electrodomésticos. Los hogares con equipos de cocina actualizados y funcionales y espacio de trabajo adecuado cocinaban en casa con más frecuencia y consumían dietas de mayor calidad que los hogares con condiciones de cocina disfuncionales — independientemente de los ingresos, la disponibilidad de tiempo y las habilidades culinarias. El entorno moldeó el comportamiento." }
                    },
                    kitchen3: {
                        label: { en: "SOCIAL CONNECTION",                              es: "CONEXIÓN SOCIAL" },
                        title: { en: "Kitchen Layout Shapes Family Social Interaction", es: "El Diseño de la Cocina Moldea la Interacción Social Familiar" },
                        text:  { en: "Kitchen configurations that isolate the cook from the rest of the family — fully enclosed layouts without sightlines to living areas — are associated with lower reported family social connection and higher reported parental stress during meal preparation. Open or peninsula-style kitchen layouts that allow visual and verbal connection between the kitchen work area and adjacent living space produce measurable increases in perceived family cohesion and lower meal preparation stress in longitudinal studies.", es: "Las configuraciones de cocina que aíslan al cocinero del resto de la familia — distribuciones completamente cerradas sin líneas de visión hacia las áreas de estar — se asocian con una menor conexión social familiar reportada y un mayor estrés parental reportado durante la preparación de las comidas. Las distribuciones de cocina abiertas o de estilo península que permiten la conexión visual y verbal entre el área de trabajo de la cocina y el espacio de estar adyacente producen aumentos medibles en la cohesión familiar percibida y un menor estrés en la preparación de comidas en estudios longitudinales." }
                    },

                    // ── SECTION 5 — NOISE ─────────────────────────────────────────
                    section5: {
                        badge: { en: "NOISE & STRESS",                                 es: "RUIDO Y ESTRÉS" },
                        title: { en: "Noise, Privacy, and Chronic Stress",             es: "Ruido, Privacidad y Estrés Crónico" },
                        p1: {
                            en: "Noise is one of the most underestimated sources of chronic residential stress. Unlike visible disorder — which at least gives occupants the theoretical option of addressing it — residential noise is typically outside direct control. Research on the physiological effects of chronic noise exposure is consistent and sobering.",
                            es: "El ruido es una de las fuentes más subestimadas del estrés residencial crónico. A diferencia del desorden visible — que al menos da a los ocupantes la opción teórica de abordarlo — el ruido residencial generalmente está fuera del control directo. La investigación sobre los efectos fisiológicos de la exposición crónica al ruido es consistente y sobria."
                        }
                    },

                    noise1: {
                        title: { en: "Chronic Noise Elevates Cortisol Independently of Perceived Stress", es: "El Ruido Crónico Eleva el Cortisol Independientemente del Estrés Percibido" },
                        text:  { en: "Multiple NIH-cited studies have found that chronic residential noise exposure elevates cortisol and other stress hormones even in participants who report they have \"gotten used to\" the noise and no longer consciously notice it. Habituation is perceptual — the nervous system does not habituate to noise in the same way conscious awareness does. Chronic noise at 40–55 decibels (typical of traffic, HVAC systems, or thin-walled adjacent rooms) produces measurable physiological stress responses even in the absence of reported subjective distress.", es: "Múltiples estudios citados por los NIH han encontrado que la exposición crónica al ruido residencial eleva el cortisol y otras hormonas del estrés incluso en participantes que reportan haberse «acostumbrado» al ruido y ya no lo notan conscientemente. La habituación es perceptual — el sistema nervioso no se habitúa al ruido de la misma manera que la conciencia consciente. El ruido crónico a 40–55 decibelios (típico del tráfico, sistemas de HVAC o habitaciones adyacentes con paredes delgadas) produce respuestas fisiológicas de estrés medibles incluso en ausencia de malestar subjetivo reportado." }
                    },
                    noise2: {
                        title: { en: "Sleep Quality Is Disrupted by Noise Below Waking Threshold", es: "La Calidad del Sueño se Altera por el Ruido por Debajo del Umbral de Despertar" },
                        text:  { en: "The World Health Organization's Night Noise Guidelines recommend less than 30 decibels inside sleeping rooms for undisturbed sleep. Research shows that noise levels above 40 decibels — well below the threshold that wakes most people — measurably disrupt sleep architecture, reducing deep sleep and REM cycles without the sleeper being aware they have been disturbed. The result is cumulative sleep debt that presents as fatigue, mood dysregulation, and cognitive impairment. Bedroom insulation, window replacement with double-pane or acoustic glazing, and HVAC noise reduction are renovation investments with direct sleep quality returns.", es: "Las Directrices de Ruido Nocturno de la Organización Mundial de la Salud recomiendan menos de 30 decibelios dentro de las habitaciones de dormir para un sueño sin perturbaciones. La investigación muestra que los niveles de ruido por encima de 40 decibelios — muy por debajo del umbral que despierta a la mayoría de las personas — alteran mediblemente la arquitectura del sueño, reduciendo el sueño profundo y los ciclos REM sin que el durmiente sepa que ha sido perturbado. El resultado es una deuda acumulada de sueño que se presenta como fatiga, desregulación del estado de ánimo y deterioro cognitivo. El aislamiento del dormitorio, el reemplazo de ventanas con vidrio doble o acústico y la reducción del ruido del HVAC son inversiones de renovación con retornos directos en la calidad del sueño." }
                    },
                    noise3: {
                        title: { en: "Lack of Private Space Elevates Household Conflict and Stress", es: "La Falta de Espacio Privado Eleva el Conflicto y el Estrés en el Hogar" },
                        text:  { en: "Environmental psychology research consistently identifies the availability of private, quiet space as a significant predictor of household wellbeing — particularly in homes where remote work, schooling, or multigenerational living has increased occupancy density. Homes that lack sound differentiation between rooms — where conversation, television, and kitchen noise blend throughout the space — create conditions of involuntary auditory exposure that impair concentration, reduce perceived privacy, and elevate interpersonal tension. Renovation that addresses room acoustics and space allocation is not a luxury; it is an environmental health investment.", es: "La investigación de psicología ambiental identifica consistentemente la disponibilidad de espacio privado y tranquilo como un predictor significativo del bienestar del hogar — particularmente en hogares donde el trabajo remoto, la escolarización o la vida multigeneracional ha aumentado la densidad de ocupación. Los hogares que carecen de diferenciación de sonido entre habitaciones — donde la conversación, la televisión y el ruido de la cocina se mezclan en todo el espacio — crean condiciones de exposición auditiva involuntaria que deterioran la concentración, reducen la privacidad percibida y elevan la tensión interpersonal. La renovación que aborda la acústica de las habitaciones y la asignación de espacio no es un lujo; es una inversión en salud ambiental." }
                    },

                    // ── SECTION 6 — RENOVATION EFFECT ────────────────────────────
                    section6: {
                        badge: { en: "RENOVATION EFFECT",                              es: "EFECTO RENOVACIÓN" },
                        title: { en: "The Renovation Effect — Documented Wellbeing Outcomes", es: "El Efecto Renovación — Resultados de Bienestar Documentados" },
                        p1: {
                            en: "The research on home renovation and wellbeing has moved beyond anecdotal to longitudinal. A 2016 study in the Journal of Environmental Psychology tracked participants before and after home renovation projects and measured perceived stress, mood, life satisfaction, and sense of control. The findings were clear and consistent across renovation types.",
                            es: "La investigación sobre renovación del hogar y bienestar ha pasado de anecdótica a longitudinal. Un estudio de 2016 en el Journal of Environmental Psychology rastreó a los participantes antes y después de proyectos de renovación del hogar y midió el estrés percibido, el estado de ánimo, la satisfacción con la vida y el sentido de control. Los hallazgos fueron claros y consistentes en todos los tipos de renovación."
                        },
                        p2: {
                            en: "The research finding that was most consistent across renovation types: the wellbeing benefit was greatest when the renovation addressed a functional deficiency — something that was actively producing stress or inconvenience — rather than an aesthetic preference. Fixing what was broken produced larger wellbeing gains than upgrading what was merely outdated.",
                            es: "El hallazgo de la investigación que fue más consistente en todos los tipos de renovación: el beneficio de bienestar fue mayor cuando la renovación abordó una deficiencia funcional — algo que estaba produciendo activamente estrés o inconveniencia — en lugar de una preferencia estética. Arreglar lo que estaba roto produjo mayores ganancias de bienestar que actualizar lo que simplemente estaba desactualizado."
                        }
                    },

                    renoTable: {
                        title: { en: "Renovation Type vs. Documented Wellbeing Effect — Research Summary", es: "Tipo de Renovación vs. Efecto de Bienestar Documentado — Resumen de Investigación" },
                        col: {
                            type:      { en: "Renovation Type",      es: "Tipo de Renovación" },
                            mechanism: { en: "Primary Mechanism",    es: "Mecanismo Principal" },
                            effect:    { en: "Documented Effect",    es: "Efecto Documentado" }
                        },
                        row1: { type: { en: "Kitchen renovation",        es: "Renovación de cocina" },        mechanism: { en: "Reduced visual disorder, improved functionality",         es: "Reducción del desorden visual, mejora de la funcionalidad" },       effect: { en: "Lower perceived stress, improved family cohesion",               es: "Menor estrés percibido, mejor cohesión familiar" } },
                        row2: { type: { en: "Bathroom renovation",       es: "Renovación de baño" },           mechanism: { en: "Improved air quality, reduced mold exposure",               es: "Mejora de la calidad del aire, reducción de la exposición al moho" }, effect: { en: "Reduced respiratory symptoms, improved morning routine wellbeing", es: "Reducción de síntomas respiratorios, mejor bienestar en la rutina matutina" } },
                        row3: { type: { en: "Window replacement",        es: "Reemplazo de ventanas" },        mechanism: { en: "Natural light, noise reduction, thermal comfort",            es: "Luz natural, reducción de ruido, confort térmico" },                 effect: { en: "Better sleep, reduced fatigue, lower stress",                    es: "Mejor sueño, reducción de la fatiga, menor estrés" } },
                        row4: { type: { en: "Storage / organization",    es: "Almacenamiento / organización" },mechanism: { en: "Visual order, reduced environmental stressors",              es: "Orden visual, reducción de factores de estrés ambiental" },           effect: { en: "Lower cortisol, improved sense of control",                      es: "Menor cortisol, mayor sentido de control" } },
                        row5: { type: { en: "Open layout conversion",    es: "Conversión a planta abierta" },  mechanism: { en: "Light distribution, social connection",                      es: "Distribución de la luz, conexión social" },                          effect: { en: "Improved family social interaction, higher life satisfaction",   es: "Mejor interacción social familiar, mayor satisfacción con la vida" } },
                        row6: { type: { en: "HVAC / ventilation upgrade",es: "Actualización de HVAC / ventilación" }, mechanism: { en: "Air quality, thermal comfort, noise reduction",       es: "Calidad del aire, confort térmico, reducción de ruido" },             effect: { en: "Cognitive performance, sleep quality, reduced sick days",        es: "Rendimiento cognitivo, calidad del sueño, reducción de días de enfermedad" } },
                        source: { en: "Sources: Journal of Environmental Psychology (2016), Harvard Healthy Buildings Program (2022), Saxbe & Repetti PSPB (2010), Cornell University Design Study (2013)", es: "Fuentes: Journal of Environmental Psychology (2016), Programa de Edificios Saludables de Harvard (2022), Saxbe y Repetti PSPB (2010), Estudio de Diseño de la Universidad de Cornell (2013)" }
                    },

                    // ── SECTION 7 — PRIORITY ──────────────────────────────────────
                    section7: {
                        badge: { en: "PRIORITY ORDER",                                 es: "ORDEN DE PRIORIDAD" },
                        title: { en: "What to Change First — Prioritizing for Maximum Wellbeing Impact", es: "Qué Cambiar Primero — Priorizar para el Máximo Impacto en el Bienestar" },
                        p1: {
                            en: "Not every home needs every change. The research framework above suggests a priority order based on documented impact magnitude and the specific conditions present in most Pennsylvania homes.",
                            es: "No todos los hogares necesitan todos los cambios. El marco de investigación anterior sugiere un orden de prioridad basado en la magnitud del impacto documentado y las condiciones específicas presentes en la mayoría de los hogares de Pennsylvania."
                        }
                    },

                    priority1: {
                        title: { en: "Fix Any Active Moisture or Mold Problem",        es: "Soluciona Cualquier Problema Activo de Humedad o Moho" },
                        text:  { en: "Per the WHO and CDC research, dampness and mold produce some of the largest measurable health impacts of any residential environmental condition. Before investing in aesthetic or organizational improvements, address any active moisture source. A bathroom with mold growth or inadequate ventilation is producing continuous respiratory and stress effects that will persist regardless of what else is improved.", es: "Según la investigación de la OMS y el CDC, la humedad y el moho producen algunos de los mayores impactos medibles en la salud de cualquier condición ambiental residencial. Antes de invertir en mejoras estéticas u organizativas, aborda cualquier fuente de humedad activa. Un baño con crecimiento de moho o ventilación inadecuada está produciendo efectos respiratorios y de estrés continuos que persistirán independientemente de lo que más se mejore." }
                    },
                    priority2: {
                        title: { en: "Address Sleep Environment Quality",              es: "Aborda la Calidad del Entorno de Sueño" },
                        text:  { en: "Sleep quality is the single largest determinant of next-day mood, cognitive performance, and stress resilience. The bedroom environment — its noise levels, light control, thermal consistency, and air quality — directly governs sleep architecture. Bedroom renovations that address window noise, light management, and temperature control have compounding daily returns that outpace the ROI of any other residential investment in direct quality-of-life terms.", es: "La calidad del sueño es el único determinante más grande del estado de ánimo del día siguiente, el rendimiento cognitivo y la resiliencia al estrés. El entorno del dormitorio — sus niveles de ruido, control de la luz, consistencia térmica y calidad del aire — rige directamente la arquitectura del sueño. Las renovaciones de dormitorios que abordan el ruido de las ventanas, la gestión de la luz y el control de la temperatura tienen retornos diarios compuestos que superan el ROI de cualquier otra inversión residencial en términos directos de calidad de vida." }
                    },
                    priority3: {
                        title: { en: "Improve Kitchen Functionality and Natural Light", es: "Mejora la Funcionalidad de la Cocina y la Luz Natural" },
                        text:  { en: "The kitchen is where most households spend their highest-stress daily time — morning routines, meal preparation, family coordination. A functional, well-lit kitchen reduces the daily friction that accumulates into chronic stress. The behavioral research on eating habits and family interaction makes kitchen improvement a high-priority wellbeing investment with returns across health, social, and psychological dimensions simultaneously.", es: "La cocina es donde la mayoría de los hogares pasan su tiempo diario de mayor estrés — rutinas matutinas, preparación de comidas, coordinación familiar. Una cocina funcional y bien iluminada reduce la fricción diaria que se acumula en estrés crónico. La investigación conductual sobre hábitos alimentarios e interacción familiar hace que la mejora de la cocina sea una inversión de bienestar de alta prioridad con retornos en dimensiones de salud, social y psicológica simultáneamente." }
                    },
                    priority4: {
                        title: { en: "Create Adequate Private Space",                   es: "Crea Espacio Privado Adecuado" },
                        text:  { en: "Especially relevant for Pennsylvania households with remote workers, school-age children doing remote learning, or multigenerational occupancy. The availability of acoustic separation — a room or area where a person can be undisturbed by household noise — is a strong predictor of reported wellbeing in residential psychology studies. Space planning, soundproofing improvements, and layout modifications that create defined private zones address this need directly.", es: "Especialmente relevante para hogares de Pennsylvania con trabajadores remotos, niños en edad escolar que realizan aprendizaje remoto u ocupación multigeneracional. La disponibilidad de separación acústica — una habitación o área donde una persona puede estar sin ser molestada por el ruido del hogar — es un fuerte predictor del bienestar reportado en estudios de psicología residencial. La planificación del espacio, las mejoras de insonorización y las modificaciones de la distribución que crean zonas privadas definidas abordan directamente esta necesidad." }
                    },

                    // ── SECTION 8 — FAQ ───────────────────────────────────────────
                    section8: {
                        badge: { en: "FAQ",                                            es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions",                     es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "Does the state of my home actually affect my mental health?", es: "¿El estado de mi hogar realmente afecta mi salud mental?" },
                        a: { en: "Yes — documented in peer-reviewed research. A 2010 study in Personality and Social Psychology Bulletin found women who described their homes as cluttered had elevated cortisol throughout the entire day. The NIH has published multiple studies linking chronic household disorder to elevated anxiety, impaired sleep, and reduced cognitive performance. The home environment is not a passive backdrop to your wellbeing — it actively shapes your physiological stress response continuously.", es: "Sí — documentado en investigaciones revisadas por pares. Un estudio de 2010 en Personality and Social Psychology Bulletin encontró que las mujeres que describían sus hogares como desordenados tenían cortisol elevado durante todo el día. Los NIH han publicado múltiples estudios que vinculan el desorden crónico del hogar con mayor ansiedad, deterioro del sueño y reducción del rendimiento cognitivo. El entorno doméstico no es un telón de fondo pasivo para tu bienestar — moldea activamente tu respuesta fisiológica al estrés de forma continua." }
                    },
                    faq2: {
                        q: { en: "How does natural light in my home affect my mood?",  es: "¿Cómo afecta la luz natural en mi hogar a mi estado de ánimo?" },
                        a: { en: "Natural light directly regulates circadian rhythm, serotonin production, melatonin cycles, and cortisol release — all of which affect mood, sleep quality, and energy levels. A Cornell University study found workers in naturally lit spaces reported 84% fewer headaches and eyestrain symptoms, slept an average of 46 minutes more per night, and scored higher on vitality measures. These mechanisms operate in your home the same way they do in any built environment. Morning light in the kitchen is one of the highest-impact changes for daily wellbeing.", es: "La luz natural regula directamente el ritmo circadiano, la producción de serotonina, los ciclos de melatonina y la liberación de cortisol — todos los cuales afectan el estado de ánimo, la calidad del sueño y los niveles de energía. Un estudio de la Universidad de Cornell encontró que los trabajadores en espacios con luz natural reportaron un 84% menos de dolores de cabeza y síntomas de fatiga ocular, durmieron un promedio de 46 minutos más por noche y obtuvieron puntuaciones más altas en medidas de vitalidad. Estos mecanismos operan en tu hogar de la misma manera que en cualquier entorno construido. La luz matutina en la cocina es uno de los cambios de mayor impacto para el bienestar diario." }
                    },
                    faq3: {
                        q: { en: "Can renovating my home improve my mental health?",   es: "¿Renovar mi hogar puede mejorar mi salud mental?" },
                        a: { en: "Yes. A 2016 longitudinal study in the Journal of Environmental Psychology tracked participants before and after home renovation and found significant improvements in mood, perceived stress, and life satisfaction — strongest for kitchen and bathroom renovations. The effect was greatest when renovation addressed a functional deficiency rather than an aesthetic preference. Fixing what is actively causing stress produces larger wellbeing gains than aesthetic upgrades alone.", es: "Sí. Un estudio longitudinal de 2016 en el Journal of Environmental Psychology rastreó a los participantes antes y después de la renovación del hogar y encontró mejoras significativas en el estado de ánimo, el estrés percibido y la satisfacción con la vida — más fuertes para las renovaciones de cocina y baño. El efecto fue mayor cuando la renovación abordó una deficiencia funcional en lugar de una preferencia estética. Arreglar lo que está causando estrés activamente produce mayores ganancias de bienestar que las actualizaciones estéticas por sí solas." }
                    },
                    faq4: {
                        q: { en: "What home features have the biggest impact on wellbeing?", es: "¿Qué características del hogar tienen el mayor impacto en el bienestar?" },
                        a: { en: "Per the research, the features with the strongest documented impact on wellbeing are: natural light levels (strongest single predictor of mood and sleep quality), noise control (chronic noise elevates cortisol even below conscious awareness), functional kitchen design (linked to healthier eating and lower stress), and perceived order and organization (cluttered environments impair attention and elevate cortisol all day). Indoor air quality and thermal consistency are also strongly documented. Harvard's Healthy Buildings Program identifies 9 specific factors — all within homeowner control through renovation.", es: "Según la investigación, las características con el impacto documentado más fuerte en el bienestar son: los niveles de luz natural (el predictor único más fuerte del estado de ánimo y la calidad del sueño), el control del ruido (el ruido crónico eleva el cortisol incluso por debajo de la conciencia), el diseño funcional de la cocina (vinculado a una alimentación más saludable y menor estrés) y el orden y organización percibidos (los entornos desordenados deterioran la atención y elevan el cortisol todo el día). La calidad del aire interior y la consistencia térmica también están fuertemente documentadas. El Programa de Edificios Saludables de Harvard identifica 9 factores específicos — todos dentro del control del propietario a través de la renovación." }
                    },

                    // ── FOOTER / CITATIONS ─────────────────────────────────────────
                    footer: {
                        sources: {
                            title: { en: "References & Citations",                     es: "Referencias y Citas" }
                        },
                        cite1: { en: "Saxbe, D.E. & Repetti, R. (2010). \"No Place Like Home: Home Tours Correlate with Daily Patterns of Mood and Cortisol.\" Personality and Social Psychology Bulletin, 36(1), 71–81. doi:10.1177/0146167209352864", es: "Saxbe, D.E. y Repetti, R. (2010). «No hay lugar como el hogar: Los recorridos por el hogar se correlacionan con los patrones diarios de estado de ánimo y cortisol.» Personality and Social Psychology Bulletin, 36(1), 71–81. doi:10.1177/0146167209352864" },
                        cite2: { en: "Hedge, A. (2013). Natural Light and Productivity in the Workplace. Cornell University, Department of Design and Environmental Analysis. human.cornell.edu", es: "Hedge, A. (2013). Luz Natural y Productividad en el Lugar de Trabajo. Universidad de Cornell, Departamento de Diseño y Análisis Ambiental. human.cornell.edu" },
                        cite3: { en: "Allen, J.G. & Macomber, J.D. (2022). The 9 Foundations of a Healthy Building. Harvard T.H. Chan School of Public Health, Healthy Buildings Program. hsph.harvard.edu", es: "Allen, J.G. y Macomber, J.D. (2022). Los 9 Fundamentos de un Edificio Saludable. Escuela de Salud Pública T.H. Chan de Harvard, Programa de Edificios Saludables. hsph.harvard.edu" },
                        cite4: { en: "Wansink, B. et al. (2016). \"Kitchen Counter Chaos: How the Kitchen Environment Influences Food Choices.\" Environment and Behavior, Cornell Food and Brand Lab. doi:10.1177/0013916516663531", es: "Wansink, B. et al. (2016). «Caos en la encimera: Cómo el entorno de la cocina influye en las elecciones de alimentos.» Environment and Behavior, Laboratorio de Alimentos y Marcas de Cornell. doi:10.1177/0013916516663531" },
                        cite5: { en: "Steptoe, A. et al. (2016). \"Home Renovation and Subjective Wellbeing: A Longitudinal Study.\" Journal of Environmental Psychology, 46, 42–51. sciencedirect.com", es: "Steptoe, A. et al. (2016). «Renovación del Hogar y Bienestar Subjetivo: Un Estudio Longitudinal.» Journal of Environmental Psychology, 46, 42–51. sciencedirect.com" },
                        cite6: { en: "World Health Organization (WHO). (2009). Night Noise Guidelines for Europe. WHO Regional Office for Europe, Copenhagen.", es: "Organización Mundial de la Salud (OMS). (2009). Directrices de Ruido Nocturno para Europa. Oficina Regional de la OMS para Europa, Copenhague." },
                        tags: {
                            label: { en: "Topics:", es: "Temas:" }
                        },
                        tag1: { en: "Home Wellbeing",        es: "Bienestar del Hogar" },
                        tag2: { en: "Mental Health",         es: "Salud Mental" },
                        tag3: { en: "Kitchen Remodeling",    es: "Remodelación de Cocina" },
                        tag4: { en: "Bathroom Renovation",   es: "Renovación de Baño" },
                        tag5: { en: "Pennsylvania",          es: "Pennsylvania" }
                    },

                    // ── SIDEBAR ────────────────────────────────────────────────────
                    sidebar: {
                        cta: {
                            badge:       { en: "PA190465 · FREE ESTIMATE",             es: "PA190465 · ESTIMACIÓN GRATUITA" },
                            title:       { en: "Your Home Should Work For You.",       es: "Tu Hogar Debería Trabajar Para Ti." },
                            text:        { en: "We renovate kitchens and bathrooms with functional design — not just aesthetics. Better light, better organization, better ventilation. Measurable differences in your daily life.", es: "Renovamos cocinas y baños con diseño funcional — no solo estética. Mejor luz, mejor organización, mejor ventilación. Diferencias medibles en tu vida diaria." },
                            stat1:       { en: "Licensed",    es: "Licenciado" },
                            stat2:       { en: "Stars",       es: "Estrellas" },
                            stat3:       { en: "PA Projects", es: "Proyectos en PA" },
                            btnEstimate: { en: "Get Free Estimate", es: "Obtener Estimación Gratuita" }
                        },
                        facts: {
                            title: { en: "Key Research Findings",                      es: "Hallazgos Clave de la Investigación" }
                        },
                        fact1: { en: "Cluttered homes elevate cortisol all day — Saxbe & Repetti",       es: "Los hogares desordenados elevan el cortisol todo el día — Saxbe y Repetti" },
                        fact2: { en: "Natural light = 46 min more sleep/night — Cornell 2013",           es: "Luz natural = 46 min más de sueño/noche — Cornell 2013" },
                        fact3: { en: "Chaotic kitchens increase caloric intake 44% — Cornell",           es: "Las cocinas caóticas aumentan la ingesta calórica un 44% — Cornell" },
                        fact4: { en: "Noise below waking threshold disrupts deep sleep — WHO",           es: "El ruido por debajo del umbral de despertar altera el sueño profundo — OMS" },
                        fact5: { en: "Renovation reduces perceived stress — Journal of Env. Psych.",    es: "La renovación reduce el estrés percibido — Journal of Env. Psych." },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA",     es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA",  es: "Gettysburg, PA" },
                        area3: { en: "York, PA",        es: "York, PA" },
                        area4: { en: "East Berlin, PA", es: "East Berlin, PA" },
                        area5: { en: "Cumberland, MD",  es: "Cumberland, MD" }
                    },

                    // ── INLINE CTA ─────────────────────────────────────────────────
                    inlineCta: {
                        badge: { en: "PA190465 · FUNCTIONAL DESIGN · FREE ESTIMATE",  es: "PA190465 · DISEÑO FUNCIONAL · ESTIMACIÓN GRATUITA" },
                        title: {
                            part1:  { en: "Your Home Is Affecting You Right Now. ", es: "Tu Hogar Te Está Afectando Ahora Mismo. " },
                            accent: { en: "We Can Change That.",                    es: "Podemos Cambiarlo." }
                        },
                        text: {
                            en: "Better light. Better organization. Better ventilation. A kitchen that functions the way your mornings need it to. A bathroom that doesn't produce mold or stress. These aren't luxuries — they are documented health investments. We build them every day in Hanover, York, and Gettysburg.",
                            es: "Mejor luz. Mejor organización. Mejor ventilación. Una cocina que funciona como tus mañanas la necesitan. Un baño que no produce moho ni estrés. Estos no son lujos — son inversiones de salud documentadas. Los construimos todos los días en Hanover, York y Gettysburg."
                        },
                        btn1:   { en: "Get Free Written Estimate",    es: "Obtener Estimación Escrita Gratuita" },
                        btn2:   { en: "(443) 858-0904 — Call Now",    es: "(443) 858-0904 — Llama Ahora" },
                        trust1: { en: "HICPA Licensed PA190465",      es: "Licencia HICPA PA190465" },
                        trust2: { en: "5.0 Star Rating",              es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "Written Contracts Always",     es: "Contratos Escritos Siempre" }
                    }

                },
                // ── BLOG ARTICLE — KITCHEN COST ───────────────────────────────────────────
                kitchenCost: {

                    breadcrumb: {
                        current: { en: "Kitchen Remodel Cost PA", es: "Costo de Remodelación de Cocina en PA" }
                    },

                    category: { en: "Kitchen Remodeling", es: "Remodelación de Cocina" },

                    title: {
                        part1:  { en: "How Much Does a Kitchen Remodel Cost in", es: "¿Cuánto Cuesta Remodelar una Cocina en" },
                        accent: { en: " Pennsylvania?",                          es: " Pennsylvania?" },
                        part2:  { en: "2025 Complete Guide",                     es: "Guía Completa 2025" }
                    },

                    meta: {
                        date:        { en: "January 15, 2025",                   es: "15 de enero de 2025" },
                        readTime:    { en: "12 min read",                        es: "12 min de lectura" },
                        license:     { en: "Licensed Contractor",                es: "Contratista Licenciado" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA",    es: "Hanover · York · Gettysburg, PA" },
                        updated:     { en: "Updated June 2025",                  es: "Actualizado junio 2025" }
                    },

                    hero: {
                        caption: {
                            en: "Mid-range kitchen remodel completed by C Hawk Construction in Hanover, PA. License PA190465. 2025.",
                            es: "Remodelación de cocina de rango medio completada por C Hawk Construction en Hanover, PA. Licencia PA190465. 2025."
                        }
                    },

                    // Table of contents
                    toc: {
                        title:  { en: "In This Guide",                                                       es: "En Esta Guía" },
                        item1:  { en: "Pennsylvania Kitchen Remodel Cost Overview",                          es: "Resumen de Costos de Remodelación de Cocina en Pennsylvania" },
                        item2:  { en: "The 3 Cost Tiers Explained",                                          es: "Los 3 Niveles de Costo Explicados" },
                        item3:  { en: "Where Your Money Actually Goes",                                      es: "En Qué se Gasta Realmente Tu Dinero" },
                        item4:  { en: "Factors Specific to Hanover, York & Gettysburg",                     es: "Factores Específicos de Hanover, York y Gettysburg" },
                        item5:  { en: "Return on Investment in Pennsylvania",                                es: "Retorno de Inversión en Pennsylvania" },
                        item6:  { en: "Red Flags That Inflate Your Budget",                                  es: "Señales de Alerta que Inflan Tu Presupuesto" },
                        item7:  { en: "Frequently Asked Questions",                                          es: "Preguntas Frecuentes" }
                    },

                    // Intro
                    intro: {
                        p1: {
                            en: "The question arrives early. Before you pick a single cabinet or tile sample, before you call a contractor, before you do anything — you need a number. A real one. Not a TV renovation show number. Not a national average that has nothing to do with what a skilled crew costs in Adams County.",
                            es: "La pregunta llega pronto. Antes de elegir un solo gabinete o una muestra de azulejo, antes de llamar a un contratista, antes de hacer cualquier cosa — necesitas un número. Uno real. No el número de un programa de renovación de televisión. No un promedio nacional que no tiene nada que ver con lo que cuesta una cuadrilla cualificada en el Condado de Adams."
                        },
                        p2: {
                            en: "We have completed over 1,335 projects in Hanover alone. We know what kitchens cost in this market in 2025. This guide is built on that direct experience, cross-referenced with data from Remodeling Magazine's 2025 Cost vs. Value Report, the National Kitchen & Bath Association (NKBA), and Angi's national pricing database. Every number here is grounded in something.",
                            es: "Hemos completado más de 1,335 proyectos solo en Hanover. Sabemos lo que cuestan las cocinas en este mercado en 2025. Esta guía se basa en esa experiencia directa, contrastada con datos del Informe Costo vs. Valor 2025 de Remodeling Magazine, la Asociación Nacional de Cocina y Baño (NKBA) y la base de datos de precios nacional de Angi. Cada número aquí tiene una base sólida."
                        },
                        p3: {
                            en: "Read it before you talk to anyone.",
                            es: "Léela antes de hablar con nadie."
                        }
                    },

                    // Sources
                    sources: {
                        title:  { en: "Data Sources Used in This Article",                                                         es: "Fuentes de Datos Utilizadas en Este Artículo" },
                        item1:  { en: "Remodeling Magazine — 2025 Cost vs. Value Report (Mid-Atlantic Region)",                    es: "Remodeling Magazine — Informe Costo vs. Valor 2025 (Región del Atlántico Medio)" },
                        item2:  { en: "National Kitchen & Bath Association (NKBA) — 2025 Design Trends & Cost Survey",            es: "Asociación Nacional de Cocina y Baño (NKBA) — Encuesta de Tendencias de Diseño y Costos 2025" },
                        item3:  { en: "Angi — Kitchen Remodel Cost Data 2025 (Pennsylvania, Maryland)",                            es: "Angi — Datos de Costo de Remodelación de Cocina 2025 (Pennsylvania, Maryland)" },
                        item4:  { en: "C Hawk Construction — 1,335+ completed projects in Hanover PA (2021–2025)",                es: "C Hawk Construction — Más de 1,335 proyectos completados en Hanover PA (2021–2025)" }
                    },

                    // Section 1 — Cost overview
                    section1: {
                        badge: { en: "COST OVERVIEW",                                es: "RESUMEN DE COSTOS" },
                        title: { en: "Pennsylvania Kitchen Remodel Cost Overview",   es: "Resumen de Costos de Remodelación de Cocina en Pennsylvania" },
                        p1: {
                            en: "Pennsylvania sits roughly 8–12% below national averages for residential remodeling, according to Remodeling Magazine's 2025 regional data. That sounds like good news. And it is — but only if you know how to read the local market correctly.",
                            es: "Pennsylvania se sitúa aproximadamente un 8–12% por debajo de los promedios nacionales para remodelación residencial, según los datos regionales 2025 de Remodeling Magazine. Eso suena como una buena noticia. Y lo es — pero solo si sabes cómo leer el mercado local correctamente."
                        },
                        p2: {
                            en: "The honest range for a kitchen remodel in Hanover, York, and Gettysburg in 2025 is $15,000 to $80,000+. That gap is enormous, and intentional. It spans three very different projects with three very different outcomes.",
                            es: "El rango honesto para una remodelación de cocina en Hanover, York y Gettysburg en 2025 es de $15,000 a $80,000+. Esa brecha es enorme, e intencional. Abarca tres proyectos muy diferentes con tres resultados muy diferentes."
                        },
                        p3: {
                            en: "Notice something? The highest ROI belongs to the most modest project. This is the central paradox of kitchen remodeling, and it's one of the most important things to understand before you open your wallet.",
                            es: "¿Notas algo? El ROI más alto pertenece al proyecto más modesto. Esta es la paradoja central de la remodelación de cocinas, y es una de las cosas más importantes que debes entender antes de abrir tu cartera."
                        }
                    },

                    // Cost overview table
                    costTable: {
                        title: { en: "Kitchen Remodel Cost by Tier — Pennsylvania 2025",  es: "Costo de Remodelación de Cocina por Nivel — Pennsylvania 2025" },
                        col: {
                            tier:  { en: "Tier",            es: "Nivel" },
                            range: { en: "Cost Range (PA)", es: "Rango de Costo (PA)" },
                            scope: { en: "What's Included", es: "Qué Incluye" },
                            roi:   { en: "Avg. ROI at Resale", es: "ROI Prom. en Reventa" }
                        },
                        tier1: {
                            name:  { en: "Minor Refresh",    es: "Renovación Menor" },
                            range: { en: "$15,000 – $25,000", es: "$15,000 – $25,000" },
                            scope: { en: "Cabinet refacing, new countertops, appliance upgrades, flooring, paint",  es: "Revestimiento de gabinetes, nuevas encimeras, mejora de electrodomésticos, pisos, pintura" },
                            roi:   { en: "~81%",             es: "~81%" }
                        },
                        tier2: {
                            name:  { en: "Mid-Range Remodel", es: "Remodelación de Rango Medio" },
                            range: { en: "$25,000 – $50,000", es: "$25,000 – $50,000" },
                            scope: { en: "Semi-custom cabinets, stone countertops, new layout, all appliances, lighting, tile backsplash",  es: "Gabinetes semi-personalizados, encimeras de piedra, nueva distribución, todos los electrodomésticos, iluminación, salpicadero de azulejos" },
                            roi:   { en: "~65–72%",           es: "~65–72%" }
                        },
                        tier3: {
                            name:  { en: "Major Renovation",  es: "Renovación Mayor" },
                            range: { en: "$50,000 – $80,000+", es: "$50,000 – $80,000+" },
                            scope: { en: "Custom cabinets, luxury countertops, structural changes, premium appliances, full electrical/plumbing upgrade",  es: "Gabinetes personalizados, encimeras de lujo, cambios estructurales, electrodomésticos premium, actualización completa de electricidad/plomería" },
                            roi:   { en: "~53–62%",            es: "~53–62%" }
                        },
                        source: {
                            en: "Source: Remodeling Magazine Cost vs. Value 2025 (Mid-Atlantic) + NKBA 2025 Survey + C Hawk Construction project data",
                            es: "Fuente: Remodeling Magazine Costo vs. Valor 2025 (Atlántico Medio) + Encuesta NKBA 2025 + Datos de proyectos de C Hawk Construction"
                        }
                    },

                    // Section 2 — Tiers
                    section2: {
                        badge: { en: "THE 3 TIERS",                              es: "LOS 3 NIVELES" },
                        title: { en: "The 3 Cost Tiers, Explained Honestly",     es: "Los 3 Niveles de Costo, Explicados con Honestidad" }
                    },

                    // Tier cards
                    tier1: {
                        label:   { en: "TIER 1",              es: "NIVEL 1" },
                        title:   { en: "Minor Refresh",       es: "Renovación Menor" },
                        price:   { en: "$15,000 – $25,000",   es: "$15,000 – $25,000" },
                        desc: {
                            en: "This is not a compromise. It is a strategy. You keep the existing layout — the bones of the kitchen don't move. Plumbing stays where it is. Walls stay where they are. But everything the eye touches gets replaced or refinished. New cabinet doors and hardware. New countertops (laminate to mid-grade quartz). New flooring. New appliances. Fresh paint. The result looks completely different.",
                            es: "Esto no es una concesión. Es una estrategia. Conservas la distribución existente — la estructura de la cocina no se mueve. La plomería permanece donde está. Las paredes permanecen donde están. Pero todo lo que la vista toca se reemplaza o reacaba. Nuevas puertas de gabinetes y herrajes. Nuevas encimeras (de laminado a cuarzo de gama media). Nuevos pisos. Nuevos electrodomésticos. Pintura fresca. El resultado luce completamente diferente."
                        },
                        desc2: {
                            en: "Why does this tier return the highest ROI? Because the expensive part of any remodel is moving things. The moment a plumber or electrician starts rerouting lines, costs spike fast. A minor refresh sidesteps all of that.",
                            es: "¿Por qué este nivel tiene el ROI más alto? Porque la parte costosa de cualquier remodelación es mover cosas. En el momento en que un plomero o electricista comienza a redirigir líneas, los costos se disparan rápidamente. Una renovación menor evita todo eso."
                        },
                        include1: { en: "Cabinet refacing or door replacement",             es: "Revestimiento de gabinetes o reemplazo de puertas" },
                        include2: { en: "Laminate or entry-level quartz countertops",       es: "Encimeras de laminado o cuarzo de nivel básico" },
                        include3: { en: "LVP or ceramic tile flooring",                     es: "Piso de LVP o cerámica" },
                        include4: { en: "Standard stainless steel appliances",              es: "Electrodomésticos estándar de acero inoxidable" },
                        include5: { en: "Tile backsplash, new sink and faucet, paint",      es: "Salpicadero de azulejos, nuevo fregadero y grifo, pintura" }
                    },
                    tier2: {
                        popular: { en: "Most Popular",        es: "Más Popular" },
                        label:   { en: "TIER 2",              es: "NIVEL 2" },
                        title:   { en: "Mid-Range Remodel",   es: "Remodelación de Rango Medio" },
                        price:   { en: "$25,000 – $50,000",   es: "$25,000 – $50,000" },
                        desc: {
                            en: "This is where most families in the Hanover and York market land. New semi-custom cabinets. Quartz or granite countertops. A layout that may shift slightly — perhaps an island added, a wall opened. Higher-end appliances. Under-cabinet lighting. Custom tile work.",
                            es: "Aquí es donde aterriza la mayoría de las familias en el mercado de Hanover y York. Nuevos gabinetes semi-personalizados. Encimeras de cuarzo o granito. Una distribución que puede cambiar ligeramente — quizás se agrega una isla, se abre una pared. Electrodomésticos de gama superior. Iluminación bajo los gabinetes. Trabajo de azulejos personalizado."
                        },
                        desc2: {
                            en: "The NKBA reports that the average U.S. kitchen remodel in 2025 sits at $41,000. In Pennsylvania, that drops to approximately $36,000–$38,000 for comparable scope. You get real transformation here. New layout possibilities. A kitchen that feels designed, not just refreshed.",
                            es: "La NKBA reporta que la remodelación promedio de cocina en EE.UU. en 2025 es de $41,000. En Pennsylvania, eso baja a aproximadamente $36,000–$38,000 para un alcance comparable. Aquí obtienes una transformación real. Nuevas posibilidades de distribución. Una cocina que se siente diseñada, no solo renovada."
                        },
                        include1: { en: "Semi-custom wood cabinets (soft-close, dovetail joints)",  es: "Gabinetes de madera semi-personalizados (cierre suave, uniones de cola de milano)" },
                        include2: { en: "Mid-grade quartz or granite countertops",                  es: "Encimeras de cuarzo o granito de gama media" },
                        include3: { en: "Hardwood or premium LVP flooring",                         es: "Piso de madera dura o LVP premium" },
                        include4: { en: "Mid-to-high grade appliance package",                      es: "Paquete de electrodomésticos de gama media-alta" },
                        include5: { en: "Recessed lighting, under-cabinet LED, plumbing upgrades",  es: "Iluminación empotrada, LED bajo gabinetes, mejoras de plomería" }
                    },
                    tier3: {
                        label:   { en: "TIER 3",              es: "NIVEL 3" },
                        title:   { en: "Major Renovation",    es: "Renovación Mayor" },
                        price:   { en: "$50,000 – $80,000+",  es: "$50,000 – $80,000+" },
                        desc: {
                            en: "Everything gets replaced. Custom-built cabinetry. Premium stone countertops (quartzite, Calacatta marble). Structural changes — walls removed, kitchen expanded into adjacent space. Commercial-grade or luxury brand appliances. The full electrical panel gets reviewed. New HVAC routing. This is a whole-room construction project, not a renovation.",
                            es: "Todo se reemplaza. Gabinetes construidos a medida. Encimeras de piedra premium (cuarcita, mármol Calacatta). Cambios estructurales — paredes eliminadas, cocina expandida al espacio adyacente. Electrodomésticos de grado comercial o marca de lujo. El panel eléctrico completo se revisa. Nueva distribución de HVAC. Este es un proyecto de construcción de toda la habitación, no una renovación."
                        },
                        desc2: {
                            en: "The ROI is lower here. Not because the work is bad — but because luxury finishes do not translate dollar-for-dollar in the Hanover, York, or Gettysburg resale market. You are doing this for yourself. Which is a completely valid reason. But go in with clear eyes.",
                            es: "El ROI es más bajo aquí. No porque el trabajo sea malo — sino porque los acabados de lujo no se traducen dólar por dólar en el mercado de reventa de Hanover, York o Gettysburg. Lo estás haciendo por ti mismo. Lo cual es una razón completamente válida. Pero hazlo con los ojos abiertos."
                        },
                        include1: { en: "Fully custom cabinetry (built on-site or custom-order)",               es: "Gabinetes completamente personalizados (construidos en sitio o por pedido)" },
                        include2: { en: "Luxury stone countertops, waterfall edges",                             es: "Encimeras de piedra de lujo, bordes en cascada" },
                        include3: { en: "Structural modifications, wall removal, kitchen expansion",             es: "Modificaciones estructurales, eliminación de paredes, expansión de la cocina" },
                        include4: { en: "Sub-Zero, Wolf, Bosch, or Thermador appliances",                       es: "Electrodomésticos Sub-Zero, Wolf, Bosch o Thermador" },
                        include5: { en: "Full electrical, plumbing, and HVAC overhaul with permits",            es: "Renovación completa de electricidad, plomería y HVAC con permisos" }
                    },

                    // Section 3 — Cost breakdown
                    section3: {
                        badge: { en: "COST BREAKDOWN",                   es: "DESGLOSE DE COSTOS" },
                        title: { en: "Where Your Money Actually Goes",   es: "En Qué se Gasta Realmente Tu Dinero" },
                        p1: {
                            en: "Most homeowners are surprised by the distribution. They expect to pay for materials and assume labor is a small line item. It isn't. In Pennsylvania in 2025, skilled trade labor runs $55–$95 per hour depending on the trade. It is the second-largest cost in almost every project, and the first in many.",
                            es: "La mayoría de los propietarios se sorprenden con la distribución. Esperan pagar por materiales y asumen que la mano de obra es una partida pequeña. No lo es. En Pennsylvania en 2025, la mano de obra especializada cuesta $55–$95 por hora según el oficio. Es el segundo costo más grande en casi todos los proyectos, y el primero en muchos."
                        }
                    },

                    // Breakdown bars
                    breakdown: {
                        cabinets:    { en: "Cabinets",                                    es: "Gabinetes" },
                        "cabinets.pct":  { en: "25–40%",                                  es: "25–40%" },
                        "cabinets.note": { en: "The single largest line item. Stock = $3K–$8K. Semi-custom = $8K–$20K. Full custom = $20K+.", es: "La partida individual más grande. De serie = $3K–$8K. Semi-personalizado = $8K–$20K. Totalmente personalizado = $20K+." },

                        labor:       { en: "Labor",                                       es: "Mano de Obra" },
                        "labor.pct":     { en: "25–35%",                                  es: "25–35%" },
                        "labor.note":    { en: "Carpenter, plumber, electrician, tile setter. PA rates: $55–$95/hour per trade. Do not cut here.", es: "Carpintero, plomero, electricista, colocador de azulejos. Tarifas en PA: $55–$95/hora por oficio. No escatimes aquí." },

                        appliances:  { en: "Appliances",                                  es: "Electrodomésticos" },
                        "appliances.pct":  { en: "15–20%",                                es: "15–20%" },
                        "appliances.note": { en: "Full package (refrigerator, range, dishwasher, microwave): $3,500–$18,000+ depending on brand.", es: "Paquete completo (refrigerador, cocina, lavavajillas, microondas): $3,500–$18,000+ según la marca." },

                        countertops: { en: "Countertops",                                 es: "Encimeras" },
                        "countertops.pct":  { en: "10–15%",                               es: "10–15%" },
                        "countertops.note": { en: "Laminate: $800–$2K. Quartz: $3K–$7K. Granite: $3K–$8K. Marble/quartzite: $6K–$15K+.", es: "Laminado: $800–$2K. Cuarzo: $3K–$7K. Granito: $3K–$8K. Mármol/cuarcita: $6K–$15K+." },

                        flooring:    { en: "Flooring",                                    es: "Pisos" },
                        "flooring.pct":  { en: "5–10%",                                   es: "5–10%" },
                        "flooring.note": { en: "LVP: $2.50–$6/sq ft installed. Ceramic tile: $5–$12/sq ft. Hardwood: $8–$16/sq ft installed.", es: "LVP: $2.50–$6/pie² instalado. Cerámica: $5–$12/pie². Madera dura: $8–$16/pie² instalado." },

                        other:       { en: "Electrical, Plumbing, Lighting, Permits",    es: "Electricidad, Plomería, Iluminación, Permisos" },
                        "other.pct":     { en: "5–15%",                                   es: "5–15%" },
                        "other.note":    { en: "Permits: $300–$1,500 depending on municipality. Electrical panel upgrade: $1,500–$4,000. Always required by law for structural changes.", es: "Permisos: $300–$1,500 según el municipio. Actualización del panel eléctrico: $1,500–$4,000. Siempre requerido por ley para cambios estructurales." }
                    },

                    // Section 4 — Local factors
                    section4: {
                        badge: { en: "LOCAL MARKET",                                                  es: "MERCADO LOCAL" },
                        title: { en: "Factors Specific to Hanover, York & Gettysburg",               es: "Factores Específicos de Hanover, York y Gettysburg" },
                        p1: {
                            en: "National averages are a starting point, not a destination. The Hanover–York–Gettysburg corridor has specific characteristics that affect your kitchen remodel budget in ways a generic estimate won't capture.",
                            es: "Los promedios nacionales son un punto de partida, no un destino. El corredor Hanover–York–Gettysburg tiene características específicas que afectan tu presupuesto de remodelación de cocina de maneras que una estimación genérica no captará."
                        }
                    },

                    // Local factor cards
                    factor1: {
                        title: { en: "Older Housing Stock",  es: "Parque de Viviendas Antiguas" },
                        text: {
                            en: "A significant portion of Adams County homes were built before 1980. That matters. Pre-1980 kitchens frequently require updated electrical wiring (from knob-and-tube or aluminum), lead paint abatement if any drywall is disturbed, and plumbing upgrades from galvanized steel. Budget an additional $3,000–$8,000 as a contingency if your home was built before 1980.",
                            es: "Una parte significativa de las casas del Condado de Adams fueron construidas antes de 1980. Eso importa. Las cocinas anteriores a 1980 frecuentemente requieren actualización del cableado eléctrico (de knob-and-tube o aluminio), eliminación de pintura con plomo si se altera algún panel de yeso, y mejoras de plomería de acero galvanizado. Presupuesta $3,000–$8,000 adicionales como contingencia si tu casa fue construida antes de 1980."
                        }
                    },
                    factor2: {
                        title: { en: "Subcontractor Availability",  es: "Disponibilidad de Subcontratistas" },
                        text: {
                            en: "The Adams County and York County skilled trades market is tight. Demand has outpaced supply since 2021. Electricians and plumbers are booking 4–8 weeks out. This does not necessarily increase your final cost, but it absolutely affects your timeline. Verify that your contractor has established subcontractor relationships before you sign anything.",
                            es: "El mercado de oficios especializados del Condado de Adams y el Condado de York es muy ajustado. La demanda ha superado a la oferta desde 2021. Los electricistas y plomeros tienen agenda para 4–8 semanas. Esto no necesariamente aumenta tu costo final, pero definitivamente afecta tu cronograma. Verifica que tu contratista tenga relaciones establecidas con subcontratistas antes de firmar cualquier cosa."
                        }
                    },
                    factor3: {
                        title: { en: "Permit Requirements by Municipality",  es: "Requisitos de Permisos por Municipio" },
                        text: {
                            en: "Permit requirements and fees vary between Hanover Borough, Penn Township, Oxford Township, and Straban Township. Gettysburg Borough has its own permitting office and inspection schedule, which can add 1–2 weeks to project start times compared to rural townships. Always verify permit requirements with your contractor before finalizing your timeline.",
                            es: "Los requisitos y tarifas de permisos varían entre el Municipio de Hanover, el Township de Penn, el Township de Oxford y el Township de Straban. El Municipio de Gettysburg tiene su propia oficina de permisos y calendario de inspecciones, lo que puede agregar 1–2 semanas a los tiempos de inicio del proyecto en comparación con los townships rurales. Siempre verifica los requisitos de permisos con tu contratista antes de finalizar tu cronograma."
                        }
                    },
                    factor4: {
                        title: { en: "Resale Market Ceiling",  es: "Techo del Mercado de Reventa" },
                        text: {
                            en: "The Hanover, Gettysburg, and York PA markets have a median home value range that places a practical ceiling on remodeling investment. Over-improving your kitchen relative to the neighborhood can reduce your ROI dramatically. The general rule: your kitchen renovation should not exceed 15% of your home's current market value. On a $250,000 home, that means keeping your kitchen budget at or below $37,500 for maximum return.",
                            es: "Los mercados de Hanover, Gettysburg y York PA tienen un rango de valor mediano de vivienda que establece un techo práctico para la inversión en remodelación. Sobre-mejorar tu cocina en relación con el vecindario puede reducir dramáticamente tu ROI. La regla general: tu renovación de cocina no debe superar el 15% del valor de mercado actual de tu vivienda. En una casa de $250,000, eso significa mantener tu presupuesto de cocina en $37,500 o menos para el máximo retorno."
                        }
                    },

                    // Section 5 — ROI
                    section5: {
                        badge: { en: "RETURN ON INVESTMENT",            es: "RETORNO DE INVERSIÓN" },
                        title: { en: "Return on Investment in Pennsylvania",  es: "Retorno de Inversión en Pennsylvania" },
                        p1: {
                            en: "Remodeling Magazine's 2025 Cost vs. Value Report — the most comprehensive national dataset of its kind — gives us clean ROI numbers for the Mid-Atlantic region. Pennsylvania falls within this region.",
                            es: "El Informe Costo vs. Valor 2025 de Remodeling Magazine — el conjunto de datos nacionales más completo de su tipo — nos da números claros de ROI para la región del Atlántico Medio. Pennsylvania cae dentro de esta región."
                        },
                        p2: {
                            en: "A mid-range kitchen remodel returns approximately 65–72% at resale in this region. A minor kitchen refresh returns up to 81%. A major kitchen renovation returns 53–62%. These numbers are averages across many markets. In the specific Hanover–York–Adams County corridor, the mid-range figure may be slightly lower due to the market ceiling discussed above.",
                            es: "Una remodelación de cocina de rango medio retorna aproximadamente un 65–72% en la reventa en esta región. Una renovación menor de cocina retorna hasta un 81%. Una renovación mayor de cocina retorna un 53–62%. Estos números son promedios de muchos mercados. En el corredor específico Hanover–York–Condado de Adams, la cifra de rango medio puede ser ligeramente inferior debido al techo de mercado discutido anteriormente."
                        },
                        source: {
                            en: "Source: Remodeling Magazine Cost vs. Value 2025 — Mid-Atlantic Region",
                            es: "Fuente: Remodeling Magazine Costo vs. Valor 2025 — Región del Atlántico Medio"
                        },
                        p3: {
                            en: "Important context: ROI calculations assume a licensed, properly permitted renovation. Work done without permits — or by unlicensed contractors — cannot be disclosed positively at resale and can require costly remediation before a sale can close.",
                            es: "Contexto importante: los cálculos de ROI asumen una renovación licenciada y correctamente permitida. El trabajo realizado sin permisos — o por contratistas sin licencia — no puede divulgarse positivamente en la reventa y puede requerir una costosa remediación antes de que pueda cerrarse una venta."
                        }
                    },

                    // ROI stats
                    roi: {
                        minor:        { en: "Minor Refresh",      es: "Renovación Menor" },
                        "minor.sub":  { en: "Avg. resale return", es: "Retorno prom. en reventa" },
                        mid:          { en: "Mid-Range Remodel",  es: "Remodelación de Rango Medio" },
                        "mid.sub":    { en: "Avg. resale return", es: "Retorno prom. en reventa" },
                        major:        { en: "Major Renovation",   es: "Renovación Mayor" },
                        "major.sub":  { en: "Avg. resale return", es: "Retorno prom. en reventa" }
                    },

                    // Section 6 — Red flags
                    section6: {
                        badge: { en: "RED FLAGS",                                es: "SEÑALES DE ALERTA" },
                        title: { en: "Red Flags That Inflate Your Budget",       es: "Señales de Alerta que Inflan Tu Presupuesto" },
                        p1: {
                            en: "Budget overruns don't happen randomly. They follow patterns. After 1,335+ projects in this market, we know exactly where money leaks.",
                            es: "Las desviaciones del presupuesto no ocurren al azar. Siguen patrones. Después de más de 1,335 proyectos en este mercado, sabemos exactamente dónde se escapa el dinero."
                        }
                    },

                    redflag1: {
                        title: { en: "Scope Creep Without Budget Revision",  es: "Expansión del Alcance Sin Revisión del Presupuesto" },
                        text: {
                            en: "\"While we're at it, let's also...\" is the most expensive phrase in residential remodeling. Every addition that happens mid-project costs significantly more than if it had been planned from the start. Your final scope should be locked before demolition begins. Changes after that point carry a premium.",
                            es: "\"Ya que estamos, también hagamos...\" es la frase más costosa en la remodelación residencial. Cada adición que ocurre a mitad del proyecto cuesta significativamente más que si se hubiera planificado desde el principio. Tu alcance final debe estar bloqueado antes de que comience la demolición. Los cambios después de ese punto llevan un recargo."
                        }
                    },
                    redflag2: {
                        title: { en: "No Contingency Budget",  es: "Sin Presupuesto de Contingencia" },
                        text: {
                            en: "In pre-1980 homes especially — and Hanover has many — walls open to surprises. Old plumbing. Outdated wiring. Structural surprises behind drywall. A 10–15% contingency is not pessimism, it is professionalism. If you don't use it, you're happy. If you do, you're prepared.",
                            es: "En casas anteriores a 1980 especialmente — y Hanover tiene muchas — las paredes abren a sorpresas. Plomería vieja. Cableado desactualizado. Sorpresas estructurales detrás del panel de yeso. Una contingencia del 10–15% no es pesimismo, es profesionalismo. Si no la usas, estás contento. Si la usas, estás preparado."
                        }
                    },
                    redflag3: {
                        title: { en: "Unlicensed Contractors Offering Suspiciously Low Bids",  es: "Contratistas Sin Licencia que Ofrecen Ofertas Sospechosamente Bajas" },
                        text: {
                            en: "Pennsylvania's Home Improvement Consumer Protection Act (HICPA) requires all contractors doing home improvement work over $500 to be registered with the Pennsylvania Attorney General's office. An unlicensed contractor's low bid today becomes your problem tomorrow — unpermitted work, failed inspections, liability exposure, and potentially a deal-killer when you sell. Always verify PA license numbers at the Attorney General's contractor database.",
                            es: "La Ley de Protección al Consumidor de Mejoras del Hogar de Pennsylvania (HICPA) requiere que todos los contratistas que realicen trabajos de mejoras del hogar por más de $500 estén registrados ante la Fiscalía General de Pennsylvania. La oferta baja de un contratista sin licencia hoy se convierte en tu problema mañana — trabajo sin permiso, inspecciones fallidas, exposición a responsabilidad y potencialmente un obstáculo para la venta. Siempre verifica los números de licencia de PA en la base de datos de contratistas del Fiscal General."
                        }
                    },
                    redflag4: {
                        title: { en: "Cabinet Lead Times Not Factored Into Schedule",  es: "Tiempos de Entrega de Gabinetes No Incluidos en el Cronograma" },
                        text: {
                            en: "Custom and semi-custom cabinet orders run 8–14 weeks in 2025. If your contractor doesn't account for this in the project schedule from day one, your project will stall mid-demo with a gutted kitchen and no cabinets arriving. Ask specifically: \"When will cabinets be ordered, and what is the confirmed lead time?\"",
                            es: "Los pedidos de gabinetes personalizados y semi-personalizados toman 8–14 semanas en 2025. Si tu contratista no tiene esto en cuenta en el cronograma del proyecto desde el primer día, tu proyecto se detendrá a mitad de la demolición con una cocina vacía y sin gabinetes llegando. Pregunta específicamente: «¿Cuándo se pedirán los gabinetes y cuál es el tiempo de entrega confirmado?»"
                        }
                    },

                    // Section 7 — FAQ
                    section7: {
                        badge: { en: "FAQ",                           es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions",    es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "How much does a kitchen remodel cost in Pennsylvania in 2025?",  es: "¿Cuánto cuesta una remodelación de cocina en Pennsylvania en 2025?" },
                        a: {
                            en: "In Pennsylvania, a minor kitchen remodel costs $15,000–$25,000, a mid-range remodel $25,000–$50,000, and a major renovation $50,000–$80,000+. Pennsylvania sits 8–12% below national averages according to Remodeling Magazine's 2025 Cost vs. Value Report for the Mid-Atlantic region.",
                            es: "En Pennsylvania, una remodelación menor de cocina cuesta $15,000–$25,000, una remodelación de rango medio $25,000–$50,000, y una renovación mayor $50,000–$80,000+. Pennsylvania se sitúa un 8–12% por debajo de los promedios nacionales según el Informe Costo vs. Valor 2025 de Remodeling Magazine para la región del Atlántico Medio."
                        }
                    },
                    faq2: {
                        q: { en: "What is the biggest cost in a kitchen remodel?",  es: "¿Cuál es el mayor costo en una remodelación de cocina?" },
                        a: {
                            en: "Cabinets are consistently the largest single line item, representing 25–40% of total budget according to the NKBA. Labor is the second largest at 25–35%. Together, cabinets and labor typically account for more than half of every kitchen remodel budget.",
                            es: "Los gabinetes son consistentemente la partida individual más grande, representando el 25–40% del presupuesto total según la NKBA. La mano de obra es la segunda más grande con un 25–35%. Juntos, los gabinetes y la mano de obra típicamente representan más de la mitad de cada presupuesto de remodelación de cocina."
                        }
                    },
                    faq3: {
                        q: { en: "Does a kitchen remodel add value to a home in Pennsylvania?",  es: "¿Una remodelación de cocina agrega valor a una casa en Pennsylvania?" },
                        a: {
                            en: "Yes. A mid-range kitchen remodel in the Mid-Atlantic region returns approximately 65–72% of investment at resale per Remodeling Magazine's 2025 data. A minor kitchen refresh returns up to 81%. Staying within 15% of your home's current market value maximizes your return in the Hanover–York–Adams County market.",
                            es: "Sí. Una remodelación de cocina de rango medio en la región del Atlántico Medio retorna aproximadamente el 65–72% de la inversión en la reventa según los datos de Remodeling Magazine 2025. Una renovación menor de cocina retorna hasta un 81%. Mantenerse dentro del 15% del valor de mercado actual de tu vivienda maximiza tu retorno en el mercado Hanover–York–Condado de Adams."
                        }
                    },
                    faq4: {
                        q: { en: "How long does a kitchen remodel take in Hanover or York PA?",  es: "¿Cuánto tiempo toma una remodelación de cocina en Hanover o York PA?" },
                        a: {
                            en: "A minor refresh takes 2–3 weeks. A mid-range remodel takes 4–6 weeks. A major renovation runs 6–10 weeks. Custom cabinet lead times (8–14 weeks in 2025) are frequently the critical path item — ensure your contractor orders them before demolition begins.",
                            es: "Una renovación menor toma 2–3 semanas. Una remodelación de rango medio toma 4–6 semanas. Una renovación mayor tarda 6–10 semanas. Los tiempos de entrega de gabinetes personalizados (8–14 semanas en 2025) son frecuentemente el elemento crítico — asegúrate de que tu contratista los pida antes de comenzar la demolición."
                        }
                    },
                    faq5: {
                        q: { en: "Do I need a permit for a kitchen remodel in Pennsylvania?",  es: "¿Necesito un permiso para una remodelación de cocina en Pennsylvania?" },
                        a: {
                            en: "Pennsylvania requires permits for any work involving electrical upgrades, plumbing modifications, structural changes, or new HVAC routing. Cosmetic updates — painting, replacing cabinet doors, new fixtures — generally do not. Unpermitted work creates liability at resale and may require costly remediation. Always pull permits. Always.",
                            es: "Pennsylvania requiere permisos para cualquier trabajo que involucre mejoras eléctricas, modificaciones de plomería, cambios estructurales o nueva distribución de HVAC. Las actualizaciones cosméticas — pintura, reemplazo de puertas de gabinetes, nuevos accesorios — generalmente no los requieren. El trabajo sin permiso crea responsabilidad en la reventa y puede requerir una costosa remediación. Siempre obtén permisos. Siempre."
                        }
                    },

                    // Article footer
                    footer: {
                        sources: {
                            title: { en: "References & Citations",  es: "Referencias y Citas" }
                        },
                        cite1: {
                            en: "Remodeling Magazine. (2025). Cost vs. Value Report — Mid-Atlantic Region. Hanley Wood Media. Retrieved from remodeling.hw.net",
                            es: "Remodeling Magazine. (2025). Informe Costo vs. Valor — Región del Atlántico Medio. Hanley Wood Media. Obtenido de remodeling.hw.net"
                        },
                        cite2: {
                            en: "National Kitchen & Bath Association (NKBA). (2025). 2025 Kitchen & Bath Design Trends and Market Research. nkba.org",
                            es: "Asociación Nacional de Cocina y Baño (NKBA). (2025). Tendencias de Diseño y Estudio de Mercado de Cocina y Baño 2025. nkba.org"
                        },
                        cite3: {
                            en: "Angi. (2025). How Much Does a Kitchen Remodel Cost? Angi Research & Insights. angi.com",
                            es: "Angi. (2025). ¿Cuánto Cuesta una Remodelación de Cocina? Investigación e Información de Angi. angi.com"
                        },
                        cite4: {
                            en: "Pennsylvania Office of Attorney General. (2024). Home Improvement Consumer Protection Act (HICPA) — Licensed Contractor Database. attorneygeneral.gov",
                            es: "Fiscalía General de Pennsylvania. (2024). Ley de Protección al Consumidor de Mejoras del Hogar (HICPA) — Base de Datos de Contratistas Licenciados. attorneygeneral.gov"
                        },
                        tags: {
                            label: { en: "Topics:", es: "Temas:" }
                        },
                        tag1: { en: "Kitchen Remodeling",    es: "Remodelación de Cocina" },
                        tag2: { en: "Cost & Budgeting",      es: "Costo y Presupuesto" },
                        tag3: { en: "Pennsylvania",          es: "Pennsylvania" },
                        tag4: { en: "Hanover PA",            es: "Hanover PA" },
                        tag5: { en: "Return on Investment",  es: "Retorno de Inversión" }
                    },

                    // Sidebar
                    sidebar: {
                        cta: {
                            badge:        { en: "PA190465 · LICENSED & INSURED",                                                  es: "PA190465 · LICENCIADO Y ASEGURADO" },
                            title:        { en: "Get a Real Number for Your Kitchen",                                              es: "Obtén un Número Real para Tu Cocina" },
                            text:         { en: "Not a national average. Not a ballpark. A real written estimate for your specific kitchen in Hanover, York, or Gettysburg, PA.", es: "No un promedio nacional. No una estimación aproximada. Una estimación escrita real para tu cocina específica en Hanover, York o Gettysburg, PA." },
                            stat1:        { en: "Hanover Projects", es: "Proyectos en Hanover" },
                            stat2:        { en: "Star Rating",      es: "Calificación" },
                            stat3:        { en: "Estimate",         es: "Estimación" },
                            btnSecondary: { en: "Request Free Consultation", es: "Solicitar Consulta Gratuita" }
                        },
                        facts: {
                            title: { en: "Key Takeaways",  es: "Conclusiones Clave" }
                        },
                        fact1: { en: "PA costs run 8–12% below national averages",      es: "Los costos en PA son un 8–12% por debajo del promedio nacional" },
                        fact2: { en: "Cabinets = 25–40% of total budget",               es: "Gabinetes = 25–40% del presupuesto total" },
                        fact3: { en: "Minor refresh = highest ROI (~81%)",              es: "Renovación menor = ROI más alto (~81%)" },
                        fact4: { en: "Add 10–15% contingency for pre-1980 homes",       es: "Agrega 10–15% de contingencia para casas anteriores a 1980" },
                        fact5: { en: "Always verify PA contractor license (HICPA)",     es: "Siempre verifica la licencia de contratista de PA (HICPA)" },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA",     es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA",  es: "Gettysburg, PA" },
                        area3: { en: "York, PA",        es: "York, PA" },
                        area4: { en: "Fairfield, PA",   es: "Fairfield, PA" },
                        area5: { en: "Cumberland, MD",  es: "Cumberland, MD" }
                    },

                    // Inline CTA
                    inlineCta: {
                        badge: { en: "FREE CONSULTATION · NO OBLIGATION",  es: "CONSULTA GRATUITA · SIN COMPROMISO" },
                        title: {
                            part1:  { en: "Ready to Know What Your Kitchen ", es: "¿Listo para Saber lo que Tu Cocina " },
                            accent: { en: "Actually Costs?",                  es: "Realmente Cuesta?" }
                        },
                        text: {
                            en: "Stop estimating. We will visit your home, walk the space, and give you a real written number — broken down by materials, labor, and timeline. No pressure. No obligation. Just accurate information to make a confident decision.",
                            es: "Deja de estimar. Visitaremos tu hogar, recorreremos el espacio y te daremos un número real por escrito — desglosado por materiales, mano de obra y cronograma. Sin presión. Sin compromiso. Solo información precisa para tomar una decisión con confianza."
                        },
                        btn1:   { en: "(443) 858-0904 — Call Now",       es: "(443) 858-0904 — Llama Ahora" },
                        btn2:   { en: "Request Free Estimate Online",     es: "Solicitar Estimación Gratuita en Línea" },
                        trust1: { en: "Licensed PA190465",                es: "Licencia PA190465" },
                        trust2: { en: "5.0 Star Rating",                  es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "2,000+ Projects Since 2021",       es: "Más de 2,000 Proyectos desde 2021" }
                    }

                }, // end blog.kitchenCost

                },
                flooring: {

                    breadcrumb: {
                        current: { en: "Best Flooring Pennsylvania",                  es: "Mejores Pisos para Pennsylvania" }
                    },

                    category: { en: "Flooring & Materials",                          es: "Pisos y Materiales" },

                    title: {
                        part1:  { en: "Best Flooring for Pennsylvania Homes:",        es: "Los Mejores Pisos para Hogares de Pennsylvania:" },
                        accent: { en: "Cold Climate, High Humidity, and Real Durability", es: "Clima Frío, Alta Humedad y Durabilidad Real" }
                    },

                    meta: {
                        date:        { en: "May 20, 2025",                            es: "20 de mayo de 2025" },
                        readTime:    { en: "13 min read",                             es: "13 min de lectura" },
                        projects:    { en: "PA Projects",                             es: "Proyectos en PA" },
                        serviceArea: { en: "Hanover · York · Gettysburg, PA",         es: "Hanover · York · Gettysburg, PA" },
                        updated:     { en: "Updated July 2025",                       es: "Actualizado julio 2025" }
                    },

                    hero: {
                        caption: {
                            en: "Luxury vinyl plank installation in a Hanover, PA home — one of 2,000+ flooring projects completed by C Hawk Construction in Adams and York County. LVP is the most frequently recommended option for PA's climate and lifestyle demands.",
                            es: "Instalación de piso de vinilo de lujo en una casa en Hanover, PA — uno de los más de 2,000 proyectos de pisos completados por C Hawk Construction en los Condados de Adams y York. El LVP es la opción más frecuentemente recomendada para el clima y las exigencias de vida en PA."
                        }
                    },

                    toc: {
                        title:  { en: "In This Guide",                                                                    es: "En Esta Guía" },
                        item1:  { en: "Pennsylvania's Climate Challenge for Flooring",                                    es: "El Desafío Climático de Pennsylvania para los Pisos" },
                        item2:  { en: "Luxury Vinyl Plank (LVP) — The Versatile Pennsylvania Standard",                  es: "Vinilo de Lujo (LVP) — El Estándar Versátil de Pennsylvania" },
                        item3:  { en: "Engineered Hardwood — Real Wood Without the Climate Risk",                        es: "Madera Ingeniería — Madera Real Sin el Riesgo Climático" },
                        item4:  { en: "Solid Hardwood — Beautiful, Demanding, and Conditional",                          es: "Madera Sólida — Hermosa, Exigente y Condicional" },
                        item5:  { en: "Porcelain Tile — The Cold-Floor Problem and How to Solve It",                     es: "Cerámica Porcelánica — El Problema del Piso Frío y Cómo Resolverlo" },
                        item6:  { en: "Carpet — Warmth, Acoustics, and Where It Still Makes Sense",                      es: "Alfombra — Calidez, Acústica y Dónde Sigue Teniendo Sentido" },
                        item7:  { en: "Full Comparison — All Flooring Types by Room and Climate Factor",                  es: "Comparativa Completa — Todos los Tipos de Piso por Habitación y Factor Climático" },
                        item8:  { en: "Room-by-Room Recommendations for Pennsylvania Homes",                              es: "Recomendaciones por Habitación para Hogares de Pennsylvania" },
                        item9:  { en: "Frequently Asked Questions",                                                       es: "Preguntas Frecuentes" }
                    },

                    intro: {
                        p1: {
                            en: "Flooring is the largest surface area in every room of your home — and in Pennsylvania, it takes more punishment than flooring in most other states. Temperatures that drop below freezing in January, humidity that climbs above 70% in July, salt and sand tracked in from winter roads, freeze-thaw cycles that test every joint and seam. The flooring that looks good in a showroom in Dallas is not necessarily the flooring that holds up in Hanover.",
                            es: "Los pisos son la mayor superficie en cada habitación de tu hogar — y en Pennsylvania, reciben más castigo que los pisos en la mayoría de los otros estados. Temperaturas que caen bajo cero en enero, humedad que sube por encima del 70% en julio, sal y arena que se rastrean desde las carreteras en invierno, ciclos de congelación-descongelación que prueban cada junta y costura. El piso que luce bien en un showroom en Dallas no es necesariamente el piso que aguanta en Hanover."
                        },
                        p2: {
                            en: "This guide is built from 2,000+ flooring projects completed by C Hawk Construction in Adams and York County, combined with manufacturer performance specifications and local installer data. It covers what each flooring type actually does in Pennsylvania's specific climate — not what the national marketing claims.",
                            es: "Esta guía está construida a partir de más de 2,000 proyectos de pisos completados por C Hawk Construction en los Condados de Adams y York, combinados con especificaciones de rendimiento de los fabricantes y datos de instaladores locales. Cubre lo que cada tipo de piso realmente hace en el clima específico de Pennsylvania — no lo que dice el marketing nacional."
                        },
                        p3: {
                            en: "You will find honest assessments of every major flooring category, cost per square foot in the Hanover–York–Gettysburg market, and specific room-by-room recommendations based on performance data. The goal is to help you make a 15–25 year decision with confidence.",
                            es: "Encontrarás evaluaciones honestas de cada categoría principal de pisos, costo por pie cuadrado en el mercado Hanover–York–Gettysburg, y recomendaciones específicas por habitación basadas en datos de rendimiento. El objetivo es ayudarte a tomar una decisión de 15–25 años con confianza."
                        }
                    },

                    sources: {
                        title:  { en: "Data Sources for This Guide",                  es: "Fuentes de Datos para Esta Guía" },
                        item1:  { en: "C Hawk Construction — 2,000+ flooring projects, Adams and York County PA (2020–2025), HICPA PA190465", es: "C Hawk Construction — Más de 2,000 proyectos de pisos, Condados de Adams y York, PA (2020–2025), HICPA PA190465" },
                        item2:  { en: "National Wood Flooring Association (NWFA) — Humidity and Wood Flooring Installation Guidelines (2024)", es: "Asociación Nacional de Pisos de Madera (NWFA) — Directrices de Instalación de Pisos de Madera y Humedad (2024)" },
                        item3:  { en: "Remodeling Magazine — 2024 Cost vs. Value Report, Mid-Atlantic Region",             es: "Remodeling Magazine — Informe de Costo vs. Valor 2024, Región del Atlántico Medio" },
                        item4:  { en: "Pennsylvania State Climatological Office — Temperature and Humidity Data, Adams and York County (2024)", es: "Oficina Climatológica del Estado de Pennsylvania — Datos de Temperatura y Humedad, Condados de Adams y York (2024)" }
                    },

                    // ── SECTION 1 — PA CLIMATE CHALLENGE ──────────────────────────
                    section1: {
                        badge: { en: "THE PA CHALLENGE",                              es: "EL DESAFÍO DE PA" },
                        title: { en: "Pennsylvania's Climate Challenge for Flooring", es: "El Desafío Climático de Pennsylvania para los Pisos" },
                        p1: {
                            en: "Pennsylvania sits in a climate zone that tests flooring more aggressively than most of the United States. Understanding the specific stressors helps you evaluate which products are genuinely suited to your home versus which ones are engineered for milder conditions.",
                            es: "Pennsylvania se encuentra en una zona climática que pone a prueba los pisos más agresivamente que la mayoría de los Estados Unidos. Comprender los factores de estrés específicos te ayuda a evaluar qué productos son genuinamente adecuados para tu hogar versus cuáles están diseñados para condiciones más suaves."
                        }
                    },

                    climate1: {
                        title: { en: "Humidity Swings of 40–55 Percentage Points Seasonally", es: "Variaciones de Humedad de 40–55 Puntos Porcentuales de Forma Estacional" },
                        text:  { en: "Indoor relative humidity in Pennsylvania homes averages 20–35% in winter (heated, dry air) and 55–75% in summer without dehumidification. This seasonal swing of 40–55 percentage points is one of the most demanding moisture environments for flooring in the continental US. Wood flooring — both solid and engineered — expands and contracts with humidity changes. Products rated for moderate climates are frequently specified incorrectly for Pennsylvania conditions.", es: "La humedad relativa interior en los hogares de Pennsylvania promedia entre 20–35% en invierno (aire calentado y seco) y 55–75% en verano sin deshumidificación. Esta variación estacional de 40–55 puntos porcentuales es uno de los entornos de humedad más exigentes para los pisos en los EE.UU. continental. Los pisos de madera — tanto sólidos como de ingeniería — se expanden y contraen con los cambios de humedad. Los productos clasificados para climas moderados se especifican frecuentemente de manera incorrecta para las condiciones de Pennsylvania." }
                    },
                    climate2: {
                        title: { en: "Freeze-Thaw Cycles and Entryway Stress",        es: "Ciclos de Congelación-Descongelación y Estrés en las Entradas" },
                        text:  { en: "Pennsylvania winters subject entryways, mudrooms, and first-floor areas near exterior doors to a continuous cycle of cold, moisture, road salt, and grit tracked in from outside. This combination is particularly destructive to finishes and joints. Entryway flooring in Pennsylvania fails faster than in any other area of the home — the material choice at entry points is disproportionately important.", es: "Los inviernos de Pennsylvania someten a las entradas, cuartos de barro y áreas del primer piso cerca de las puertas exteriores a un ciclo continuo de frío, humedad, sal de carretera y arena arrastrada desde el exterior. Esta combinación es particularmente destructiva para los acabados y las juntas. El piso de entrada en Pennsylvania falla más rápido que en cualquier otra área del hogar — la elección del material en los puntos de entrada es desproporcionadamente importante." }
                    },
                    climate3: {
                        title: { en: "Older Homes — Subfloor Conditions Matter",       es: "Casas Antiguas — Las Condiciones del Subpiso Importan" },
                        text:  { en: "A significant portion of Adams and York County housing stock was built in the 1950s–1980s with subfloor conditions — levelness, moisture barriers, concrete slab construction — that affect flooring performance. Some flooring types require subfloor remediation before installation. Skipping subfloor assessment is one of the most common causes of premature flooring failure in Pennsylvania remodels.", es: "Una parte significativa del parque habitacional de los Condados de Adams y York fue construida en las décadas de 1950 a 1980 con condiciones de subpiso — nivelación, barreras de humedad, construcción de losa de concreto — que afectan el rendimiento de los pisos. Algunos tipos de pisos requieren remediación del subpiso antes de la instalación. Omitir la evaluación del subpiso es una de las causas más comunes de falla prematura de pisos en las remodelaciones de Pennsylvania." }
                    },
                    climate4: {
                        title: { en: "Below-Grade Spaces — Basements and Slab-on-Grade", es: "Espacios Bajo Nivel del Suelo — Sótanos y Losa Sobre Terreno" },
                        text:  { en: "Pennsylvania homes commonly have basements and below-grade living areas where moisture from soil infiltration produces consistently elevated humidity and occasional water intrusion. Most solid hardwood manufacturers void warranties when installed below grade. LVP and porcelain tile are the only categories with full performance ratings for below-grade installation in Pennsylvania conditions.", es: "Los hogares de Pennsylvania comúnmente tienen sótanos y áreas de vida bajo nivel del suelo donde la humedad de la infiltración del suelo produce una humedad consistentemente elevada y ocasionales intrusiones de agua. La mayoría de los fabricantes de madera sólida anulan las garantías cuando se instala bajo nivel del suelo. El LVP y la cerámica porcelánica son las únicas categorías con clasificaciones de rendimiento completo para instalación bajo nivel del suelo en las condiciones de Pennsylvania." }
                    },

                    // ── SECTION 2 — LVP ───────────────────────────────────────────
                    section2: {
                        badge:      { en: "LVP — MOST POPULAR IN PA",                  es: "LVP — EL MÁS POPULAR EN PA" },
                        title:      { en: "Luxury Vinyl Plank (LVP)",                  es: "Vinilo de Lujo en Tablón (LVP)" },
                        titleAccent:{ en: " — The Versatile Pennsylvania Standard",    es: " — El Estándar Versátil de Pennsylvania" },
                        p1: {
                            en: "LVP has become the dominant flooring choice in Pennsylvania renovation projects — not because of marketing, but because it genuinely addresses the conditions Pennsylvania homes present better than any other flooring category across the widest range of rooms and budgets. Of the 2,000+ flooring projects C Hawk has completed in Adams and York County, approximately 58% used LVP as the primary flooring material.",
                            es: "El LVP se ha convertido en la elección de piso dominante en los proyectos de renovación de Pennsylvania — no por el marketing, sino porque genuinamente aborda las condiciones que presentan los hogares de Pennsylvania mejor que cualquier otra categoría de pisos en la mayor variedad de habitaciones y presupuestos. De los más de 2,000 proyectos de pisos que C Hawk ha completado en los Condados de Adams y York, aproximadamente el 58% utilizó LVP como material de piso principal."
                        }
                    },

                    lvp1: {
                        label: { en: "WHY LVP WORKS IN PA",                            es: "POR QUÉ EL LVP FUNCIONA EN PA" },
                        title: { en: "100% Waterproof and Dimensionally Stable",       es: "100% Impermeable y Dimensionalmente Estable" },
                        text:  { en: "LVP is not water-resistant — it is waterproof. Flooding, pet accidents, bathroom humidity, basement moisture, and tracked-in winter slush do not affect its core material. Unlike wood products that expand and contract with humidity cycles, LVP's PVC core is dimensionally stable through Pennsylvania's 40–55 point seasonal humidity swings. Properly installed with appropriate expansion gaps, LVP does not cup, gap, warp, or buckle through temperature and humidity changes.", es: "El LVP no es resistente al agua — es impermeable. Las inundaciones, los accidentes de mascotas, la humedad del baño, la humedad del sótano y el aguanieve invernal arrastrado no afectan su material central. A diferencia de los productos de madera que se expanden y contraen con los ciclos de humedad, el núcleo de PVC del LVP es dimensionalmente estable a través de las variaciones estacionales de humedad de 40–55 puntos de Pennsylvania. Instalado correctamente con holguras de expansión apropiadas, el LVP no se arquea, abre huecos, deforma ni pandea con los cambios de temperatura y humedad." },
                        cost:  { en: "Cost Installed: $4–$9/sq ft · Most projects $5–$7/sq ft", es: "Costo Instalado: $4–$9/pie² · La mayoría de proyectos $5–$7/pie²" }
                    },
                    lvp2: {
                        label: { en: "LVP LIMITATIONS",                                es: "LIMITACIONES DEL LVP" },
                        title: { en: "Cannot Be Refinished — Wear Layer Determines Lifespan", es: "No se Puede Reacabar — La Capa de Desgaste Determina la Vida Útil" },
                        text:  { en: "LVP cannot be sanded and refinished. When the wear layer is depleted, the floor must be replaced. Wear layer thickness — measured in mils — determines durability: 6 mil is residential entry-level (10–15 year lifespan in normal use), 12 mil is residential premium (20–25 years), 20 mil is commercial-grade and appropriate for high-traffic PA homes with pets, children, and mudroom traffic. Do not specify 6 mil LVP for Pennsylvania entryways or kitchens with heavy traffic.", es: "El LVP no puede lijarse y reacabarse. Cuando la capa de desgaste se agota, el piso debe reemplazarse. El grosor de la capa de desgaste — medido en milésimas de pulgada — determina la durabilidad: 6 mil es nivel de entrada residencial (vida útil de 10–15 años en uso normal), 12 mil es premium residencial (20–25 años), 20 mil es grado comercial y apropiado para hogares de PA con mucho tráfico, mascotas, niños y tráfico de cuarto de entrada. No especifiques LVP de 6 mil para entradas de Pennsylvania o cocinas con tráfico intenso." },
                        cost:  { en: "Recommended: 12 mil minimum · 20 mil for high-traffic areas", es: "Recomendado: 12 mil mínimo · 20 mil para áreas de alto tráfico" }
                    },
                    lvp3: {
                        label: { en: "BEST ROOMS FOR LVP",                             es: "MEJORES HABITACIONES PARA LVP" },
                        title: { en: "Whole-Home Capable — Excellent in Problem Areas", es: "Apto para Todo el Hogar — Excelente en Áreas Problemáticas" },
                        text:  { en: "LVP performs well in every area of a Pennsylvania home: basements (where wood products often fail), bathrooms, kitchens, entryways, living rooms, and bedrooms. It is the only flooring category that is genuinely appropriate for all of these rooms without material-specific caveats. For whole-home flooring projects seeking visual consistency across wet and dry zones, LVP is the only product that delivers this without substituting a different material for wet areas.", es: "El LVP funciona bien en cada área de un hogar de Pennsylvania: sótanos (donde los productos de madera a menudo fallan), baños, cocinas, entradas, salas de estar y dormitorios. Es la única categoría de piso genuinamente apropiada para todas estas habitaciones sin advertencias específicas del material. Para proyectos de pisos en todo el hogar que buscan consistencia visual entre zonas húmedas y secas, el LVP es el único producto que lo logra sin sustituir un material diferente para áreas húmedas." },
                        cost:  { en: "All areas including basements · Best choice below grade", es: "Todas las áreas incluyendo sótanos · Mejor opción bajo nivel del suelo" }
                    },

                    // ── SECTION 3 — ENGINEERED HARDWOOD ───────────────────────────
                    section3: {
                        badge:      { en: "ENGINEERED HARDWOOD",                       es: "MADERA DE INGENIERÍA" },
                        title:      { en: "Engineered Hardwood",                       es: "Madera de Ingeniería" },
                        titleAccent:{ en: " — Real Wood Without the Climate Risk",     es: " — Madera Real Sin el Riesgo Climático" },
                        p1: {
                            en: "Engineered hardwood is the correct wood flooring choice for most Pennsylvania applications. Its cross-ply plywood core — typically 5–7 plies oriented in alternating grain directions — resists the expansion and contraction that solid hardwood undergoes through humidity cycles. The result is a wood floor that looks and feels like solid hardwood but performs significantly better in Pennsylvania's seasonal humidity environment.",
                            es: "La madera de ingeniería es la elección correcta de piso de madera para la mayoría de las aplicaciones en Pennsylvania. Su núcleo de madera contrachapada de capas cruzadas — típicamente 5–7 capas orientadas en direcciones de grano alternadas — resiste la expansión y contracción que experimenta la madera sólida a través de los ciclos de humedad. El resultado es un piso de madera que luce y se siente como madera sólida pero se desempeña significativamente mejor en el entorno de humedad estacional de Pennsylvania."
                        },
                        p2: {
                            en: "The real wood veneer layer on engineered hardwood — typically 2–6mm thick depending on quality — can be sanded and refinished 1–3 times over the floor's life, unlike LVP. This gives engineered hardwood a potential 30–50 year lifespan in a Pennsylvania home if maintained properly, compared to 20–25 years for premium LVP.",
                            es: "La capa de chapa de madera real en la madera de ingeniería — típicamente de 2–6mm de grosor según la calidad — puede lijarse y reacabarse 1–3 veces a lo largo de la vida del piso, a diferencia del LVP. Esto le da a la madera de ingeniería una vida útil potencial de 30–50 años en un hogar de Pennsylvania si se mantiene correctamente, en comparación con los 20–25 años del LVP premium."
                        },
                        p3: {
                            en: "The critical specification for Pennsylvania: veneer thickness determines whether the floor can be refinished and how many times. Budget-tier engineered hardwood with a 2mm veneer can only be lightly buffed — it cannot survive a full sand and refinish. For a Pennsylvania home where you intend to keep the floor for decades, specify 4mm veneer minimum. The price difference between 2mm and 4mm veneer products is typically $1.50–$2.50 per square foot — well worth the additional lifespan.",
                            es: "La especificación crítica para Pennsylvania: el grosor de la chapa determina si el piso se puede reacabar y cuántas veces. La madera de ingeniería de nivel económico con una chapa de 2mm solo puede pulirse ligeramente — no puede sobrevivir a un lijado y reacabado completo. Para un hogar de Pennsylvania donde planeas mantener el piso durante décadas, especifica un mínimo de 4mm de chapa. La diferencia de precio entre productos de chapa de 2mm y 4mm es típicamente de $1.50–$2.50 por pie cuadrado — bien vale la vida útil adicional."
                        }
                    },

                    engHW: {
                        breakdown: {
                            title: { en: "Engineered Hardwood — Cost and Performance Factors PA", es: "Madera de Ingeniería — Costo y Factores de Rendimiento en PA" }
                        },
                        item1: {
                            label: { en: "Budget tier (3mm veneer, 5-ply core)",           es: "Nivel económico (chapa 3mm, núcleo 5 capas)" },
                            range: { en: "$8–$11/sq ft installed",                         es: "$8–$11/pie² instalado" }
                        },
                        item2: {
                            label: { en: "Mid-grade (4–5mm veneer, 7-ply core)",           es: "Grado medio (chapa 4–5mm, núcleo 7 capas)" },
                            range: { en: "$11–$15/sq ft installed",                        es: "$11–$15/pie² instalado" }
                        },
                        item3: {
                            label: { en: "Premium (6mm veneer, 9-ply core, wide plank)",   es: "Premium (chapa 6mm, núcleo 9 capas, tablón ancho)" },
                            range: { en: "$15–$22/sq ft installed",                        es: "$15–$22/pie² instalado" }
                        },
                        item4: {
                            label: { en: "Recommended veneer thickness for PA (refinishable)", es: "Grosor de chapa recomendado para PA (reacabable)" },
                            range: { en: "4mm minimum",                                    es: "4mm mínimo" }
                        }
                    },

                    // ── SECTION 4 — SOLID HARDWOOD ────────────────────────────────
                    section4: {
                        badge:      { en: "SOLID HARDWOOD",                            es: "MADERA SÓLIDA" },
                        title:      { en: "Solid Hardwood",                            es: "Madera Sólida" },
                        titleAccent:{ en: " — Beautiful, Demanding, and Conditional",  es: " — Hermosa, Exigente y Condicional" },
                        p1: {
                            en: "Solid hardwood is the prestige flooring choice — and the most demanding one for Pennsylvania conditions. When installed correctly in the right rooms with proper humidity management, solid hardwood is the most beautiful, most durable, and most refinishable floor available. When installed incorrectly or in the wrong environment, it is the most expensive flooring failure.",
                            es: "La madera sólida es la elección de piso de prestigio — y la más exigente para las condiciones de Pennsylvania. Cuando se instala correctamente en las habitaciones adecuadas con una gestión apropiada de la humedad, la madera sólida es el piso más hermoso, más duradero y más reacabable disponible. Cuando se instala incorrectamente o en el entorno equivocado, es el fallo de piso más costoso."
                        },
                        p2: {
                            en: "Pennsylvania homes without whole-house humidification routinely see winter relative humidity drop to 20–30% in heated spaces. This is below the NWFA minimum for solid hardwood installation without risk. The result is seasonal gapping — visible gaps between planks that open in winter and close in summer. In severe cases, cupping and crowning occur, requiring sanding and refinishing or replacement.",
                            es: "Los hogares de Pennsylvania sin humidificación para toda la casa ven rutinariamente cómo la humedad relativa invernal cae al 20–30% en los espacios calefaccionados. Esto está por debajo del mínimo de la NWFA para la instalación de madera sólida sin riesgo. El resultado son huecos estacionales — aberturas visibles entre los tablones que se abren en invierno y se cierran en verano. En casos graves, ocurren el ahuecado y el coronado, que requieren lijado y reacabado o reemplazo."
                        },
                        p3: {
                            en: "Solid hardwood is viable in Pennsylvania — with conditions. The home must have whole-house or room-level humidity control capable of maintaining 35–55% RH year-round. The floor cannot be installed below grade or in bathrooms. And the wood species must be appropriate for the humidity range: white oak, maple, and hickory handle humidity movement better than softer or more porous species. Cost installed: $10–$22 per square foot, plus potential humidification system if not present.",
                            es: "La madera sólida es viable en Pennsylvania — con condiciones. El hogar debe tener control de humedad para toda la casa o a nivel de habitación capaz de mantener 35–55% HR durante todo el año. El piso no puede instalarse bajo nivel del suelo o en baños. Y la especie de madera debe ser apropiada para el rango de humedad: el roble blanco, el arce y el nogal americano manejan el movimiento por humedad mejor que las especies más blandas o más porosas. Costo instalado: $10–$22 por pie cuadrado, más un posible sistema de humidificación si no está presente."
                        }
                    },

                    solidHW: {
                        highlight: {
                            label:  { en: "NWFA Installation Guidelines — Humidity Requirements for Solid Hardwood", es: "Directrices de Instalación de la NWFA — Requisitos de Humedad para Madera Sólida" },
                            text:   { en: "Solid hardwood should only be installed where relative humidity can be maintained between 35–55% year-round. Installation in environments with humidity below 30% or above 60% risks seasonal gapping, cupping, or structural deformation.", es: "La madera sólida solo debe instalarse donde la humedad relativa pueda mantenerse entre 35–55% durante todo el año. La instalación en entornos con humedad inferior al 30% o superior al 60% arriesga huecos estacionales, ahuecado o deformación estructural." },
                            source: { en: "National Wood Flooring Association (NWFA) — Installation Guidelines 2024. nwfa.org", es: "Asociación Nacional de Pisos de Madera (NWFA) — Directrices de Instalación 2024. nwfa.org" }
                        }
                    },

                    // ── SECTION 5 — PORCELAIN TILE ────────────────────────────────
                    section5: {
                        badge:      { en: "PORCELAIN TILE",                            es: "CERÁMICA PORCELÁNICA" },
                        title:      { en: "Porcelain Tile",                            es: "Cerámica Porcelánica" },
                        titleAccent:{ en: " — The Cold-Floor Problem and How to Solve It", es: " — El Problema del Piso Frío y Cómo Resolverlo" },
                        p1: {
                            en: "Porcelain tile is the best performing flooring material in wet areas — period. It is completely waterproof, impervious to Pennsylvania's humidity swings, resistant to freeze-thaw stress when properly installed, and has an indefinite lifespan if grout and tile integrity are maintained. For kitchens, bathrooms, entryways, and laundry rooms, it is the highest-performance choice available.",
                            es: "La cerámica porcelánica es el material de piso de mejor rendimiento en áreas húmedas — sin duda. Es completamente impermeable, inmune a las variaciones de humedad de Pennsylvania, resistente al estrés de congelación-descongelación cuando se instala correctamente, y tiene una vida útil indefinida si se mantiene la integridad del mortero y la cerámica. Para cocinas, baños, entradas y lavaderos, es la opción de mayor rendimiento disponible."
                        },
                        p2: {
                            en: "The legitimate objection to tile is thermal — it is cold underfoot in Pennsylvania winters. This is a real comfort issue that affects daily quality of life from November through March. The solution is radiant heat underlayment: electric mat systems installed beneath tile that cost $8–$15 per square foot installed and eliminate the cold-floor problem entirely. For bathrooms and kitchens, radiant heat beneath tile is one of the most consistently praised upgrades in our project survey data.",
                            es: "La objeción legítima a la cerámica es térmica — está fría bajo los pies en los inviernos de Pennsylvania. Este es un problema de confort real que afecta la calidad de vida diaria de noviembre a marzo. La solución es el calefactor radiante bajo el piso: sistemas de alfombrilla eléctrica instalados bajo la cerámica que cuestan $8–$15 por pie cuadrado instalado y eliminan completamente el problema del piso frío. Para baños y cocinas, el calor radiante bajo la cerámica es una de las mejoras más consistentemente elogiadas en nuestros datos de encuestas de proyectos."
                        },
                        p3: {
                            en: "One critical specification: tile installed in entryways and exterior-adjacent areas of Pennsylvania homes must have a DCOF (Dynamic Coefficient of Friction) rating of 0.42 or higher for wet slip resistance. Polished tile is a slip hazard in Pennsylvania entryways during winter — specify matte or textured surface finishes for all areas where tracked-in water and snow are anticipated.",
                            es: "Una especificación crítica: la cerámica instalada en entradas y áreas adyacentes al exterior de hogares de Pennsylvania debe tener una clasificación DCOF (Coeficiente Dinámico de Fricción) de 0.42 o superior para resistencia al deslizamiento en mojado. La cerámica pulida es un peligro de deslizamiento en las entradas de Pennsylvania durante el invierno — especifica acabados de superficie mate o texturizados para todas las áreas donde se anticipa agua y nieve arrastrada."
                        }
                    },

                    tile: {
                        breakdown: {
                            title: { en: "Porcelain Tile — Cost Installed PA (2025)", es: "Cerámica Porcelánica — Costo Instalado en PA (2025)" }
                        },
                        item1: {
                            label: { en: "Standard porcelain tile, basic pattern",         es: "Cerámica porcelánica estándar, patrón básico" },
                            range: { en: "$8–$12/sq ft installed",                         es: "$8–$12/pie² instalado" }
                        },
                        item2: {
                            label: { en: "Large format tile (24\"x24\" and above)",        es: "Cerámica de gran formato (60x60 cm y superior)" },
                            range: { en: "$12–$18/sq ft installed",                        es: "$12–$18/pie² instalado" }
                        },
                        item3: {
                            label: { en: "Radiant heat mat addition (electric, per zone)", es: "Adición de alfombrilla de calor radiante (eléctrica, por zona)" },
                            range: { en: "+$8–$15/sq ft",                                  es: "+$8–$15/pie²" }
                        },
                        item4: {
                            label: { en: "Epoxy grout upgrade (vs standard cement grout)", es: "Mejora a mortero epoxi (vs mortero de cemento estándar)" },
                            range: { en: "+$1.50–$3/sq ft",                                es: "+$1.50–$3/pie²" }
                        }
                    },

                    // ── SECTION 6 — CARPET ────────────────────────────────────────
                    section6: {
                        badge:      { en: "CARPET",                                    es: "ALFOMBRA" },
                        title:      { en: "Carpet",                                    es: "Alfombra" },
                        titleAccent:{ en: " — Warmth, Acoustics, and Where It Still Makes Sense", es: " — Calidez, Acústica y Dónde Sigue Teniendo Sentido" },
                        p1: {
                            en: "Carpet has declined in popularity in Pennsylvania renovation projects — primarily because of moisture vulnerability and the challenge of managing allergens in a climate that drives people indoors for months. However, it retains genuine advantages in specific applications: bedrooms, stairs, and home offices where acoustic softness, thermal comfort underfoot, and fall safety are priorities.",
                            es: "La alfombra ha disminuido en popularidad en los proyectos de renovación de Pennsylvania — principalmente por la vulnerabilidad a la humedad y el desafío de gestionar alérgenos en un clima que mantiene a las personas en interiores durante meses. Sin embargo, conserva ventajas genuinas en aplicaciones específicas: dormitorios, escaleras y oficinas en casa donde la suavidad acústica, el confort térmico bajo los pies y la seguridad contra caídas son prioridades."
                        }
                    },

                    carpet1: {
                        title: { en: "Where Carpet Still Works Well in PA Homes",      es: "Dónde la Alfombra Sigue Funcionando Bien en Hogares de PA" },
                        text:  { en: "Bedrooms are the strongest case for carpet in Pennsylvania homes. The thermal comfort benefit — barefoot contact with a warm, soft surface — is most valuable where occupants are barefoot most often. Carpet also significantly reduces noise transmission between floors, which matters in two-story PA homes during winter months when all activity moves indoors. Stairs benefit from carpet's slip resistance and noise reduction. Home offices where acoustic dampening improves concentration are another appropriate application.", es: "Los dormitorios son el caso más sólido para la alfombra en los hogares de Pennsylvania. El beneficio de confort térmico — el contacto de los pies descalzos con una superficie cálida y suave — es más valioso donde los ocupantes están descalzos con más frecuencia. La alfombra también reduce significativamente la transmisión de ruido entre pisos, lo que importa en los hogares de PA de dos pisos durante los meses de invierno cuando toda la actividad se traslada a interiores. Las escaleras se benefician de la resistencia al deslizamiento y la reducción de ruido de la alfombra. Las oficinas en casa donde la amortiguación acústica mejora la concentración son otra aplicación apropiada." }
                    },
                    carpet2: {
                        title: { en: "Where Carpet Fails in Pennsylvania",             es: "Dónde Falla la Alfombra en Pennsylvania" },
                        text:  { en: "Carpet in basements, kitchens, entryways, and bathrooms is a consistent maintenance problem in Pennsylvania's climate. High summer humidity drives moisture into carpet fibers and padding, creating ideal mold conditions. Road salt and wet winter footwear damage carpet pile and backing faster than in other climates. Basements with carpet are a frequent mold discovery during renovation projects — the moisture that accumulates in below-grade carpet is often not visible until the flooring is removed. Carpet below grade in Pennsylvania is not recommended.", es: "La alfombra en sótanos, cocinas, entradas y baños es un problema de mantenimiento constante en el clima de Pennsylvania. La alta humedad del verano impulsa la humedad hacia las fibras y el relleno de la alfombra, creando condiciones ideales para el moho. La sal de carretera y el calzado mojado invernal dañan la pila y el respaldo de la alfombra más rápido que en otros climas. Los sótanos con alfombra son un hallazgo frecuente de moho durante los proyectos de renovación — la humedad que se acumula en la alfombra bajo nivel del suelo a menudo no es visible hasta que se retira el piso. La alfombra bajo nivel del suelo en Pennsylvania no se recomienda." }
                    },

                    // ── SECTION 7 — COMPARISON TABLE ──────────────────────────────
                    section7: {
                        badge: { en: "FULL COMPARISON",                                es: "COMPARATIVA COMPLETA" },
                        title: { en: "Full Comparison — All Flooring Types by Climate Factor and Cost", es: "Comparativa Completa — Todos los Tipos de Piso por Factor Climático y Costo" }
                    },

                    table: {
                        title: { en: "Pennsylvania Flooring Comparison — Performance, Cost & Climate Suitability 2025", es: "Comparativa de Pisos de Pennsylvania — Rendimiento, Costo y Idoneidad Climática 2025" },
                        col: {
                            type:     { en: "Flooring Type",       es: "Tipo de Piso" },
                            cost:     { en: "Cost Installed (PA)", es: "Costo Instalado (PA)" },
                            humidity: { en: "Humidity Tolerance",  es: "Tolerancia a la Humedad" },
                            basement: { en: "Below Grade",         es: "Bajo Nivel del Suelo" },
                            lifespan: { en: "Lifespan",            es: "Vida Útil" }
                        },
                        row1: { type: { en: "LVP (12 mil+)",          es: "LVP (12 mil+)" },          cost: { en: "$4–$9/sq ft",    es: "$4–$9/pie²" },    humidity: { en: "Excellent — 100% waterproof",                es: "Excelente — 100% impermeable" },                    basement: { en: "Yes",                    es: "Sí" },              lifespan: { en: "20–25 yrs (no refinish)",             es: "20–25 años (sin reacabado)" } },
                        row2: { type: { en: "Engineered Hardwood",    es: "Madera de Ingeniería" },   cost: { en: "$8–$22/sq ft",   es: "$8–$22/pie²" },   humidity: { en: "Good — stable through PA swings",            es: "Buena — estable ante variaciones de PA" },          basement: { en: "Limited — with vapor barrier", es: "Limitado — con barrera de vapor" }, lifespan: { en: "30–50 yrs (refinishable)",            es: "30–50 años (reacabable)" } },
                        row3: { type: { en: "Solid Hardwood",         es: "Madera Sólida" },          cost: { en: "$10–$22/sq ft",  es: "$10–$22/pie²" },  humidity: { en: "Challenging — requires humidity control",    es: "Desafiante — requiere control de humedad" },        basement: { en: "No",                    es: "No" },              lifespan: { en: "50–100 yrs (repeatedly refinishable)", es: "50–100 años (reacabable múltiples veces)" } },
                        row4: { type: { en: "Porcelain Tile",         es: "Cerámica Porcelánica" },   cost: { en: "$8–$18/sq ft",   es: "$8–$18/pie²" },   humidity: { en: "Excellent — impervious to moisture",         es: "Excelente — impermeable a la humedad" },            basement: { en: "Yes",                    es: "Sí" },              lifespan: { en: "50+ yrs (with grout maintenance)",    es: "50+ años (con mantenimiento del mortero)" } },
                        row5: { type: { en: "Carpet",                 es: "Alfombra" },               cost: { en: "$3–$8/sq ft",    es: "$3–$8/pie²" },    humidity: { en: "Poor — absorbs moisture, mold risk",         es: "Deficiente — absorbe humedad, riesgo de moho" },    basement: { en: "Not recommended PA",    es: "No recomendado en PA" }, lifespan: { en: "8–15 yrs",                         es: "8–15 años" } },
                        source: { en: "Source: C Hawk Construction project data 2020–2025 · NWFA Installation Guidelines 2024 · Remodeling Magazine Cost vs. Value Mid-Atlantic 2024", es: "Fuente: Datos de proyectos de C Hawk Construction 2020–2025 · Directrices de Instalación de la NWFA 2024 · Remodeling Magazine Costo vs. Valor Atlántico Medio 2024" }
                    },

                    // ── SECTION 8 — ROOM BY ROOM ──────────────────────────────────
                    section8: {
                        badge: { en: "ROOM BY ROOM",                                   es: "HABITACIÓN POR HABITACIÓN" },
                        title: { en: "Room-by-Room Recommendations for Pennsylvania Homes", es: "Recomendaciones por Habitación para Hogares de Pennsylvania" },
                        p1: {
                            en: "These recommendations are based on performance data from our project history in Hanover, York, and Gettysburg — not manufacturer specifications for ideal conditions.",
                            es: "Estas recomendaciones se basan en datos de rendimiento de nuestro historial de proyectos en Hanover, York y Gettysburg — no en especificaciones de fabricantes para condiciones ideales."
                        }
                    },

                    room1: {
                        title: { en: "Kitchen: Porcelain Tile or LVP (20 mil)",        es: "Cocina: Cerámica Porcelánica o LVP (20 mil)" },
                        text:  { en: "Porcelain tile is the premium choice for Pennsylvania kitchens — fully waterproof, grease-resistant, and indefinitely durable. Specify matte or textured finish for slip resistance when wet. Add radiant heat for thermal comfort November–March. LVP at 20 mil wear layer is an excellent alternative at lower cost — particularly when kitchen and living room share an open floor plan and visual continuity with adjacent wood-look areas is desired.", es: "La cerámica porcelánica es la elección premium para las cocinas de Pennsylvania — completamente impermeable, resistente a la grasa e indefinidamente durable. Especifica acabado mate o texturizado para resistencia al deslizamiento cuando esté mojada. Agrega calor radiante para confort térmico de noviembre a marzo. El LVP con capa de desgaste de 20 mil es una excelente alternativa a menor costo — particularmente cuando la cocina y la sala comparten una planta abierta y se desea continuidad visual con áreas adyacentes de apariencia de madera." }
                    },
                    room2: {
                        title: { en: "Bathroom: Porcelain Tile (with Radiant Heat)",   es: "Baño: Cerámica Porcelánica (con Calor Radiante)" },
                        text:  { en: "Porcelain tile with epoxy grout is the unambiguous recommendation for Pennsylvania bathrooms. The moisture environment, humidity cycling, and cleaning chemistry that bathrooms experience eliminate wood products and LVP as viable primary choices. Radiant heat beneath bathroom tile eliminates the cold-floor problem and is the single most popular upgrade we install in bathroom renovations. Specify slip-resistant tile throughout — DCOF 0.42 minimum.", es: "La cerámica porcelánica con mortero epoxi es la recomendación inequívoca para los baños de Pennsylvania. El entorno de humedad, el ciclo de humedad y la química de limpieza que experimentan los baños eliminan los productos de madera y el LVP como opciones primarias viables. El calor radiante bajo la cerámica del baño elimina el problema del piso frío y es la mejora individual más popular que instalamos en las renovaciones de baños. Especifica cerámica antideslizante en todos lados — DCOF 0.42 mínimo." }
                    },
                    room3: {
                        title: { en: "Living Room / Dining Room: Engineered Hardwood or LVP", es: "Sala de Estar / Comedor: Madera de Ingeniería o LVP" },
                        text:  { en: "For above-grade living and dining areas in Pennsylvania homes, engineered hardwood and LVP both perform well. The decision comes down to budget and longevity goals. Engineered hardwood at 4mm+ veneer thickness provides a genuine wood appearance, refinishability, and 30–50 year lifespan at higher upfront cost. Premium LVP at 12 mil+ provides excellent durability, waterproofing, and visual appeal at significantly lower cost with a 20–25 year expected lifespan.", es: "Para las áreas de estar y comedor sobre nivel del suelo en los hogares de Pennsylvania, tanto la madera de ingeniería como el LVP tienen buen rendimiento. La decisión se reduce al presupuesto y los objetivos de longevidad. La madera de ingeniería con un grosor de chapa de 4mm+ proporciona una apariencia genuina de madera, reacababilidad y una vida útil de 30–50 años con mayor costo inicial. El LVP premium de 12 mil+ proporciona excelente durabilidad, impermeabilización y atractivo visual a un costo significativamente menor con una vida útil esperada de 20–25 años." }
                    },
                    room4: {
                        title: { en: "Bedroom: Carpet or Engineered Hardwood + Area Rug", es: "Dormitorio: Alfombra o Madera de Ingeniería + Tapete" },
                        text:  { en: "Bedroom flooring in Pennsylvania benefits from thermal comfort and acoustic softness. Carpet with good-quality pad remains the warmest, quietest, most comfortable choice for bedrooms and is appropriate in climate-controlled rooms with no moisture risk. For homeowners who prefer hard surface, engineered hardwood with a large area rug achieves similar thermal and acoustic qualities with greater durability and easier maintenance. LVP in bedrooms is durable but cooler underfoot than either alternative.", es: "El piso de los dormitorios en Pennsylvania se beneficia del confort térmico y la suavidad acústica. La alfombra con un relleno de buena calidad sigue siendo la opción más cálida, silenciosa y cómoda para los dormitorios y es apropiada en habitaciones climatizadas sin riesgo de humedad. Para los propietarios que prefieren superficie dura, la madera de ingeniería con un tapete grande logra cualidades térmicas y acústicas similares con mayor durabilidad y mantenimiento más fácil. El LVP en dormitorios es duradero pero más fresco bajo los pies que cualquiera de las dos alternativas." }
                    },
                    room5: {
                        title: { en: "Entryway / Mudroom: Porcelain Tile (matte, high DCOF)", es: "Entrada / Cuarto de Barro: Cerámica Porcelánica (mate, alto DCOF)" },
                        text:  { en: "Entryways in Pennsylvania take more abuse per square foot than any other area of the home. Road salt, wet footwear, mud, snow, and tracked-in grit create conditions that deteriorate most flooring rapidly. Porcelain tile at matte or textured finish with a DCOF of 0.55 or higher is the appropriate specification. It handles moisture, resists salt damage, and can be cleaned without damage. All other flooring types underperform in Pennsylvania entryway conditions over time.", es: "Las entradas en Pennsylvania reciben más maltrato por pie cuadrado que cualquier otra área del hogar. La sal de carretera, el calzado mojado, el barro, la nieve y la arena arrastrada crean condiciones que deterioran la mayoría de los pisos rápidamente. La cerámica porcelánica con acabado mate o texturizado con un DCOF de 0.55 o superior es la especificación apropiada. Maneja la humedad, resiste el daño de la sal y puede limpiarse sin daño. Todos los demás tipos de pisos tienen un rendimiento inferior en las condiciones de entrada de Pennsylvania con el tiempo." }
                    },
                    room6: {
                        title: { en: "Basement: LVP Only — Wood Products Not Recommended", es: "Sótano: Solo LVP — Productos de Madera No Recomendados" },
                        text:  { en: "Pennsylvania basements are below-grade environments with consistently elevated humidity, potential for moisture intrusion events, and temperature swings that exceed the tolerance of wood flooring products. LVP is the correct choice for finished Pennsylvania basements — it handles moisture, installs over concrete without concerns, and provides comfortable, attractive flooring at $4–$9 per square foot installed. Porcelain tile is also appropriate but colder and harder underfoot. Wood products and carpet in Pennsylvania basements are maintenance and mold problems waiting to happen.", es: "Los sótanos de Pennsylvania son entornos bajo nivel del suelo con humedad consistentemente elevada, potencial de intrusiones de agua y variaciones de temperatura que superan la tolerancia de los productos de piso de madera. El LVP es la elección correcta para los sótanos terminados de Pennsylvania — maneja la humedad, se instala sobre concreto sin problemas y proporciona un piso cómodo y atractivo a $4–$9 por pie cuadrado instalado. La cerámica porcelánica también es apropiada pero más fría y dura bajo los pies. Los productos de madera y la alfombra en los sótanos de Pennsylvania son problemas de mantenimiento y moho esperando ocurrir." }
                    },

                    // ── SECTION 9 — FAQ ───────────────────────────────────────────
                    section9: {
                        badge: { en: "FAQ",                                            es: "PREGUNTAS FRECUENTES" },
                        title: { en: "Frequently Asked Questions",                     es: "Preguntas Frecuentes" }
                    },

                    faq1: {
                        q: { en: "What is the best flooring for Pennsylvania homes?",  es: "¿Cuál es el mejor piso para los hogares de Pennsylvania?" },
                        a: { en: "LVP (luxury vinyl plank) at 12 mil wear layer minimum is the most versatile choice for Pennsylvania's climate — 100% waterproof, dimensionally stable through humidity swings, appropriate for all areas including basements, and priced at $4–$9 per square foot installed. For kitchens, bathrooms, and entryways, porcelain tile is the highest-performance choice. For living rooms where real wood appearance and refinishability are priorities, engineered hardwood at 4mm+ veneer thickness outperforms solid hardwood in Pennsylvania's humidity environment.", es: "El LVP (vinilo de lujo en tablón) con una capa de desgaste mínima de 12 mil es la opción más versátil para el clima de Pennsylvania — 100% impermeable, dimensionalmente estable ante las variaciones de humedad, apropiado para todas las áreas incluyendo sótanos y con un precio de $4–$9 por pie cuadrado instalado. Para cocinas, baños y entradas, la cerámica porcelánica es la opción de mayor rendimiento. Para salas de estar donde la apariencia de madera real y la reacababilidad son prioridades, la madera de ingeniería con un grosor de chapa de 4mm+ supera a la madera sólida en el entorno de humedad de Pennsylvania." }
                    },
                    faq2: {
                        q: { en: "Does hardwood flooring hold up in Pennsylvania winters?", es: "¿El piso de madera aguanta los inviernos de Pennsylvania?" },
                        a: { en: "Solid hardwood requires humidity control between 35–55% RH year-round per NWFA guidelines. Pennsylvania homes without whole-house humidification routinely see 20–30% RH in winter, causing seasonal gapping in solid hardwood. Engineered hardwood handles Pennsylvania's climate significantly better due to its cross-ply core construction. If you want genuine wood flooring in Pennsylvania, engineered hardwood with 4mm+ veneer is the practical choice. Solid hardwood is viable only with whole-house humidity control — and never below grade.", es: "La madera sólida requiere control de humedad entre 35–55% HR durante todo el año según las directrices de la NWFA. Los hogares de Pennsylvania sin humidificación para toda la casa ven rutinariamente una HR de 20–30% en invierno, causando huecos estacionales en la madera sólida. La madera de ingeniería maneja el clima de Pennsylvania significativamente mejor debido a su construcción de núcleo de capas cruzadas. Si deseas piso de madera genuino en Pennsylvania, la madera de ingeniería con chapa de 4mm+ es la opción práctica. La madera sólida solo es viable con control de humedad para toda la casa — y nunca bajo nivel del suelo." }
                    },
                    faq3: {
                        q: { en: "How much does flooring installation cost in Pennsylvania in 2025?", es: "¿Cuánto cuesta la instalación de pisos en Pennsylvania en 2025?" },
                        a: { en: "In the Hanover, York, and Gettysburg market in 2025: LVP installs at $4–$9 per square foot (most projects $5–$7); engineered hardwood at $8–$22 per square foot; solid hardwood at $10–$22 per square foot; porcelain tile at $8–$18 per square foot; carpet at $3–$8 per square foot. These include material and installation labor. South-Central Pennsylvania pricing typically runs 8–12% below Philadelphia metro rates. Subfloor remediation, if needed, adds $1.50–$4 per square foot.", es: "En el mercado de Hanover, York y Gettysburg en 2025: el LVP se instala a $4–$9 por pie cuadrado (la mayoría de los proyectos $5–$7); la madera de ingeniería a $8–$22 por pie cuadrado; la madera sólida a $10–$22 por pie cuadrado; la cerámica porcelánica a $8–$18 por pie cuadrado; la alfombra a $3–$8 por pie cuadrado. Estos incluyen materiales y mano de obra de instalación. Los precios del Sur-Centro de Pennsylvania suelen ser un 8–12% inferiores a los del metro de Filadelfia. La remediación del subpiso, si es necesaria, agrega $1.50–$4 por pie cuadrado." }
                    },
                    faq4: {
                        q: { en: "Is LVP good for Pennsylvania basements?",            es: "¿Es el LVP bueno para los sótanos de Pennsylvania?" },
                        a: { en: "Yes — LVP is the recommended flooring for Pennsylvania basements. It installs directly over concrete, handles below-grade humidity and occasional moisture events without damage, and is 100% waterproof. At 12 mil wear layer minimum, it provides 20–25 years of service in typical basement conditions. Solid hardwood and carpet are not appropriate for Pennsylvania basements. Engineered hardwood can be used below grade with a proper vapor barrier but is more expensive and offers less moisture protection than LVP.", es: "Sí — el LVP es el piso recomendado para los sótanos de Pennsylvania. Se instala directamente sobre el concreto, maneja la humedad bajo nivel del suelo y los eventos ocasionales de humedad sin daño, y es 100% impermeable. Con una capa de desgaste mínima de 12 mil, proporciona 20–25 años de servicio en condiciones típicas de sótano. La madera sólida y la alfombra no son apropiadas para los sótanos de Pennsylvania. La madera de ingeniería se puede usar bajo nivel del suelo con una barrera de vapor adecuada, pero es más costosa y ofrece menos protección contra la humedad que el LVP." }
                    },
                    faq5: {
                        q: { en: "How do I solve the cold tile floor problem in Pennsylvania winters?", es: "¿Cómo resuelvo el problema del piso de cerámica frío en los inviernos de Pennsylvania?" },
                        a: { en: "Electric radiant heat mats installed beneath tile are the most effective solution — they cost $8–$15 per square foot installed on top of tile cost and are controlled by a programmable thermostat. The mats warm the tile to a specified temperature on a schedule, so the bathroom or kitchen floor is warm before you step onto it in the morning. This is one of the most consistently praised upgrades in our bathroom renovation projects. For existing tile, area rugs provide a lower-cost partial solution but do not address the underlying thermal issue the way radiant heat does.", es: "Las alfombrillas de calor radiante eléctrico instaladas bajo la cerámica son la solución más efectiva — cuestan $8–$15 por pie cuadrado instalado sobre el costo de la cerámica y se controlan mediante un termostato programable. Las alfombrillas calientan la cerámica a una temperatura especificada según un horario, por lo que el piso del baño o la cocina está caliente antes de pisarlo por la mañana. Esta es una de las mejoras más consistentemente elogiadas en nuestros proyectos de renovación de baños. Para la cerámica existente, los tapetes de área proporcionan una solución parcial de menor costo pero no abordan el problema térmico subyacente de la misma manera que el calor radiante." }
                    },

                    // ── FOOTER / CITATIONS ─────────────────────────────────────────
                    footer: {
                        sources: {
                            title: { en: "References & Citations",                     es: "Referencias y Citas" }
                        },
                        cite1: { en: "National Wood Flooring Association (NWFA). (2024). Hardwood Flooring Installation Guidelines — Humidity and Moisture. nwfa.org", es: "Asociación Nacional de Pisos de Madera (NWFA). (2024). Directrices de Instalación de Pisos de Madera Dura — Humedad y Humedad. nwfa.org" },
                        cite2: { en: "Remodeling Magazine. (2024). Cost vs. Value Report 2024 — Mid-Atlantic Region. remodeling.hw.net", es: "Remodeling Magazine. (2024). Informe de Costo vs. Valor 2024 — Región del Atlántico Medio. remodeling.hw.net" },
                        cite3: { en: "Pennsylvania State Climatological Office. (2024). Climate Summary — Adams and York County. climate.psu.edu", es: "Oficina Climatológica del Estado de Pennsylvania. (2024). Resumen Climático — Condados de Adams y York. climate.psu.edu" },
                        cite4: { en: "C Hawk Construction and Renovation LLC. (2025). Internal flooring project data — 2,000+ projects, Adams and York County PA, 2020–2025. HICPA PA190465.", es: "C Hawk Construction and Renovation LLC. (2025). Datos internos de proyectos de pisos — más de 2,000 proyectos, Condados de Adams y York, PA, 2020–2025. HICPA PA190465." },
                        tags: {
                            label: { en: "Topics:", es: "Temas:" }
                        },
                        tag1: { en: "Flooring",     es: "Pisos" },
                        tag2: { en: "LVP",          es: "LVP" },
                        tag3: { en: "Hardwood",     es: "Madera" },
                        tag4: { en: "Pennsylvania", es: "Pennsylvania" },
                        tag5: { en: "Cost Guide",   es: "Guía de Costos" }
                    },

                    // ── SIDEBAR ────────────────────────────────────────────────────
                    sidebar: {
                        cta: {
                            badge:       { en: "PA190465 · 2,000+ FLOORS INSTALLED",   es: "PA190465 · MÁS DE 2,000 PISOS INSTALADOS" },
                            title:       { en: "Right Flooring for Your Rooms.",        es: "El Piso Correcto para Tus Habitaciones." },
                            text:        { en: "We assess subfloor conditions, humidity, traffic patterns, and your budget — then recommend what actually performs in Pennsylvania. Free written estimate. No guessing.", es: "Evaluamos las condiciones del subpiso, la humedad, los patrones de tráfico y tu presupuesto — luego recomendamos lo que realmente funciona en Pennsylvania. Estimación escrita gratuita. Sin conjeturas." },
                            stat1:       { en: "Floors Installed", es: "Pisos Instalados" },
                            stat2:       { en: "Stars",            es: "Estrellas" },
                            stat3:       { en: "Estimate",         es: "Estimación" },
                            btnEstimate: { en: "Get Free Estimate", es: "Obtener Estimación Gratuita" }
                        },
                        facts: {
                            title: { en: "PA Flooring Quick Facts",                    es: "Datos Rápidos sobre Pisos en PA" }
                        },
                        fact1: { en: "PA humidity swings 40–55 points seasonally",    es: "La humedad en PA varía 40–55 puntos estacionalmente" },
                        fact2: { en: "LVP 12 mil+ is recommended minimum in PA",      es: "LVP 12 mil+ es el mínimo recomendado en PA" },
                        fact3: { en: "Solid hardwood needs humidity control 35–55% RH", es: "La madera sólida necesita control de humedad 35–55% HR" },
                        fact4: { en: "Basements: LVP only — no wood, no carpet",      es: "Sótanos: solo LVP — sin madera, sin alfombra" },
                        fact5: { en: "Radiant heat solves cold tile — $8–$15/sq ft",  es: "El calor radiante resuelve la cerámica fría — $8–$15/pie²" },
                        areas: {
                            title: { en: "We Serve", es: "Atendemos" }
                        },
                        area1: { en: "Hanover, PA",     es: "Hanover, PA" },
                        area2: { en: "Gettysburg, PA",  es: "Gettysburg, PA" },
                        area3: { en: "York, PA",        es: "York, PA" },
                        area4: { en: "East Berlin, PA", es: "East Berlin, PA" },
                        area5: { en: "Cumberland, MD",  es: "Cumberland, MD" }
                    },

                    // ── INLINE CTA ─────────────────────────────────────────────────
                    inlineCta: {
                        badge: { en: "PA190465 · 2,000+ FLOORS · FREE ESTIMATE",      es: "PA190465 · MÁS DE 2,000 PISOS · ESTIMACIÓN GRATUITA" },
                        title: {
                            part1:  { en: "Pennsylvania Floors Need Pennsylvania Knowledge. ", es: "Los Pisos de Pennsylvania Necesitan Conocimiento de Pennsylvania. " },
                            accent: { en: "We Have Both.",                              es: "Nosotros Tenemos Ambos." }
                        },
                        text: {
                            en: "2,000+ flooring projects in Adams and York County. We know what survives the winters, what fails in the basements, and what your subfloor needs before installation. Get a free written estimate that accounts for your actual conditions — not a number guessed from a national price list.",
                            es: "Más de 2,000 proyectos de pisos en los Condados de Adams y York. Sabemos qué sobrevive los inviernos, qué falla en los sótanos y qué necesita tu subpiso antes de la instalación. Obtén una estimación escrita gratuita que tenga en cuenta tus condiciones reales — no un número adivinado de una lista de precios nacional."
                        },
                        btn1:   { en: "Get Free Written Estimate",    es: "Obtener Estimación Escrita Gratuita" },
                        btn2:   { en: "(443) 858-0904 — Call Now",    es: "(443) 858-0904 — Llama Ahora" },
                        trust1: { en: "HICPA Licensed PA190465",      es: "Licencia HICPA PA190465" },
                        trust2: { en: "5.0 Star Rating",              es: "Calificación 5.0 Estrellas" },
                        trust3: { en: "Written Contracts Always",     es: "Contratos Escritos Siempre" }
                    }

                },

            remodeling: {

                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",         es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Complete Home",                                         es: "Transformación" },
                    titleAccent: { en: "Transformation.",                                       es: "Completa del Hogar." },
                    description: { en: "From kitchen to bathroom, full gut renovations to structural rebuilds — C Hawk handles every phase of your project. One licensed team, zero surprises.", es: "De cocina a baño, demoliciones completas hasta reconstrucciones estructurales — C Hawk maneja cada fase de tu proyecto. Un equipo licenciado, cero sorpresas." },
                    ctaPrimary:  { en: "Get Free Estimate",                                     es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                     es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                            es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                        es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                        es: "Estimaciones Gratis" }
                },

                gallery: {
                    badge:    { en: "REAL RESULTS",                                             es: "RESULTADOS REALES" },
                    title:    { en: "Before &",                                                 es: "Antes y" },
                    titleAccent: { en: "After",                                                 es: "Después" },
                    subtitle: { en: "Every photo is a real C Hawk project — no stock images, no filters.", es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:   { en: "Before",                                                   es: "Antes" },
                    after:    { en: "After",                                                    es: "Después" },
                    caption1: { en: "Kitchen renovation — Hanover, PA",                        es: "Renovación de cocina — Hanover, PA" },
                    caption2: { en: "Bathroom renovation — York, PA",                          es: "Renovación de baño — York, PA" }
                },

                included: {
                    badge:    { en: "FULL SERVICE SCOPE",                                       es: "ALCANCE DE SERVICIO COMPLETO" },
                    title:    { en: "Everything Your Project",                                  es: "Todo lo que tu Proyecto" },
                    titleAccent: { en: "Needs",                                                 es: "Necesita" },
                    subtitle: { en: "One team handles every phase — from demolition to final finish. No subcontractor surprises.", es: "Un equipo maneja cada fase — desde la demolición hasta el acabado final. Sin sorpresas de subcontratistas." },

                    c1Title:  { en: "Kitchen Remodeling",                                      es: "Remodelación de Cocina" },
                    c1Desc:   { en: "Complete kitchen transformations — cabinets, countertops, layout changes, backsplash, flooring, and full fixture installation.", es: "Transformaciones completas de cocina — gabinetes, encimeras, cambios de distribución, salpicadero, pisos e instalación completa de accesorios." },
                    c1s1:     { en: "Cabinet installation & refinishing",                      es: "Instalación y reacabado de gabinetes" },
                    c1s2:     { en: "Countertop replacement",                                   es: "Reemplazo de encimeras" },
                    c1s3:     { en: "Kitchen flooring",                                         es: "Pisos de cocina" },
                    c1s4:     { en: "Rough electric & plumbing",                               es: "Electricidad y plomería de obra negra" },

                    c2Title:  { en: "Bathroom Renovation",                                     es: "Renovación de Baño" },
                    c2Desc:   { en: "Full bathroom gut-outs to luxury upgrades. Tile, fixtures, vanities, toilets, showers, and waterproofing done right.", es: "Demoliciones completas de baño hasta mejoras de lujo. Azulejos, accesorios, tocadores, sanitarios, duchas e impermeabilización bien hechos." },
                    c2s1:     { en: "Vanity & toilet installation",                            es: "Instalación de tocador y sanitario" },
                    c2s2:     { en: "Tile & waterproofing",                                    es: "Azulejos e impermeabilización" },
                    c2s3:     { en: "Shower & tub replacement",                                es: "Reemplazo de ducha y bañera" },
                    c2s4:     { en: "Full fixture upgrades",                                   es: "Actualización completa de accesorios" },

                    c3Title:  { en: "Demolition & Structural",                                 es: "Demolición y Trabajo Estructural" },
                    c3Desc:   { en: "Safe, controlled demolition and structural work — wall removal, framing, roofing, window installation, and handrails.", es: "Demolición segura y controlada y trabajo estructural — retiro de paredes, estructura, techado, instalación de ventanas y pasamanos." },
                    c3s1:     { en: "Controlled demolition",                                   es: "Demolición controlada" },
                    c3s2:     { en: "Roofing work",                                            es: "Trabajo de techado" },
                    c3s3:     { en: "Window installation",                                     es: "Instalación de ventanas" },
                    c3s4:     { en: "Handrail installation",                                   es: "Instalación de pasamanos" },

                    c4Title:  { en: "Rough Systems",                                           es: "Sistemas de Obra Negra" },
                    c4Desc:   { en: "Rough electric and plumbing work to support your remodel. We coordinate every phase so systems are ready before finish work begins.", es: "Trabajo eléctrico y de plomería de obra negra para apoyar tu remodelación. Coordinamos cada fase para que los sistemas estén listos antes de comenzar los acabados." },
                    c4s1:     { en: "Rough electrical",                                        es: "Electricidad de obra negra" },
                    c4s2:     { en: "Rough plumbing",                                          es: "Plomería de obra negra" },
                    c4s3:     { en: "Phase coordination",                                      es: "Coordinación de fases" },
                    c4s4:     { en: "Pre-finish inspection",                                   es: "Inspección pre-acabado" },

                    ctaText:  { en: "Not sure what your project needs? Call us — we'll walk through it with you for free.", es: "¿No sabes qué necesita tu proyecto? Llámanos — lo analizamos contigo sin costo." },
                    ctaBtn:   { en: "(443) 858-0904 — Free Consultation",                     es: "(443) 858-0904 — Consulta Gratis" }
                },

                process: {
                    badge:       { en: "HOW IT WORKS",                                         es: "CÓMO FUNCIONA" },
                    title:       { en: "Simple Process.",                                       es: "Proceso Simple." },
                    titleAccent: { en: "Zero Guesswork.",                                      es: "Cero Incertidumbre." },

                    s1Title: { en: "Free Consultation",                                        es: "Consulta Gratis" },
                    s1Desc:  { en: "We visit your home, listen to your vision, assess the scope, and give you an honest, detailed estimate. No pressure, no obligation.", es: "Visitamos tu hogar, escuchamos tu visión, evaluamos el alcance y te damos una estimación honesta y detallada. Sin presión, sin compromiso." },

                    s2Title: { en: "Clear Proposal",                                           es: "Propuesta Clara" },
                    s2Desc:  { en: "You receive a written proposal with itemized scope, timeline, and fixed price. Everything is documented before any work begins.", es: "Recibes una propuesta escrita con alcance detallado, cronograma y precio fijo. Todo está documentado antes de que comience cualquier trabajo." },

                    s3Title: { en: "Expert Execution",                                         es: "Ejecución Experta" },
                    s3Desc:  { en: "Cesar and the C Hawk team execute every phase on time. You stay informed throughout — progress updates, no disappearing acts.", es: "Cesar y el equipo de C Hawk ejecutan cada fase a tiempo. Te mantenemos informado — actualizaciones de progreso, sin desapariciones." },

                    s4Title: { en: "Final Walkthrough",                                        es: "Inspección Final" },
                    s4Desc:  { en: "We walk through every detail together before you sign off. If anything isn't right, we fix it. Your satisfaction closes the project.", es: "Recorremos cada detalle juntos antes de que des tu aprobación. Si algo no está bien, lo corregimos. Tu satisfacción cierra el proyecto." }
                },

                stats: {
                    s1: { en: "Projects Completed",   es: "Proyectos Completados" },
                    s2: { en: "Average Rating",       es: "Calificación Promedio" },
                    s3: { en: "Active License",       es: "Licencia Activa" },
                    s4: { en: "Estimate Response",    es: "Respuesta de Estimación" }
                },

                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",                                       es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",                                      es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",                                         es: "los Propietarios" },

                    t1Text:     { en: "\"C Hawk completely transformed our kitchen. Cesar and his team were professional from day one — on time, on budget, and the quality is incredible. I recommend them to everyone.\"", es: "\"C Hawk transformó completamente nuestra cocina. Cesar y su equipo fueron profesionales desde el primer día — a tiempo, dentro del presupuesto y la calidad es increíble. Los recomiendo a todos.\"" },
                    t1Location: { en: "Hanover, PA",                                           es: "Hanover, PA" },

                    t2Text:     { en: "\"Our bathroom renovation was flawless. Mauricio kept us updated every step and the project finished exactly when promised. The tile work alone is worth five stars.\"", es: "\"La renovación de nuestro baño fue impecable. Mauricio nos mantuvo informados en cada paso y el proyecto terminó exactamente cuando prometieron. El trabajo de azulejos solo vale cinco estrellas.\"" },
                    t2Location: { en: "York, PA",                                              es: "York, PA" },

                    t3Text:     { en: "\"We had our entire first floor remodeled. C Hawk handled demolition, framing, drywall, flooring, and painting. It felt like we had a brand new house. Worth every penny.\"", es: "\"Remodelamos todo el primer piso. C Hawk manejó la demolición, la estructura, el panel de yeso, los pisos y la pintura. Sentimos que teníamos una casa nueva. Valió cada centavo.\"" },
                    t3Location: { en: "Gettysburg, PA",                                        es: "Gettysburg, PA" }
                },

                areas: {
                    badge: { en: "WHERE WE WORK",                                              es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD",                                            es: "Sirviendo PA y MD" }
                },

                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                        es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready to Transform",                                   es: "¿Listo para Transformar" },
                    titleAccent: { en: "Your Home?",                                           es: "Tu Hogar?" },
                    text:        { en: "Call us today or schedule a free consultation online. We'll visit your home, assess your project, and give you an honest estimate — all at no cost.", es: "Llámanos hoy o agenda una consulta gratuita en línea. Visitaremos tu hogar, evaluaremos tu proyecto y te daremos una estimación honesta — todo sin costo." },
                    primaryBtn:  { en: "Schedule Free Consultation",                           es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                    es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                        es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                        es: "Estimación Gratis" }
                }

            },
            carpentry: {

                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",         es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Built Right.",                                          es: "Construido Bien." },
                    titleAccent: { en: "Built to Last.",                                        es: "Construido para Durar." },
                    description: { en: "From structural framing that holds the home together to finish carpentry that defines how it looks — C Hawk delivers craftsmanship that stands up to Pennsylvania's demands.", es: "Desde la estructura que sostiene el hogar hasta la carpintería de acabado que define su apariencia — C Hawk entrega artesanía que resiste las exigencias de Pennsylvania." },
                    ctaPrimary:  { en: "Get Free Estimate",                                     es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                     es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                            es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                        es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                        es: "Estimaciones Gratis" }
                },

                gallery: {
                    badge:       { en: "REAL RESULTS",                                          es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                              es: "Antes y" },
                    titleAccent: { en: "After",                                                 es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.", es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                es: "Antes" },
                    after:       { en: "After",                                                 es: "Después" },
                    caption1:    { en: "Structural framing — Hanover, PA",                      es: "Estructura de madera — Hanover, PA" },
                    caption2:    { en: "Custom woodwork — York, PA",                            es: "Carpintería personalizada — York, PA" }
                },

                included: {
                    badge:       { en: "WHAT WE BUILD",                                         es: "LO QUE CONSTRUIMOS" },
                    title:       { en: "Every Type of",                                         es: "Todo Tipo de" },
                    titleAccent: { en: "Wood Work",                                             es: "Trabajo en Madera" },
                    subtitle:    { en: "From the bones of a structure to the detail that defines a room — one licensed team handles it all.", es: "Desde la estructura de una construcción hasta el detalle que define una habitación — un equipo licenciado lo maneja todo." },

                    c1Title: { en: "Structural Framing",                                        es: "Estructura de Madera" },
                    c1Desc:  { en: "The structural backbone of every renovation or new construction. Walls, floors, ceilings, and roof framing built to code and built to last in Pennsylvania conditions.", es: "La columna vertebral estructural de toda renovación o nueva construcción. Paredes, pisos, techos y estructura de cubierta construidos según código y para durar en las condiciones de Pennsylvania." },
                    c1s1:    { en: "Wall framing & load-bearing work",                          es: "Estructura de paredes y trabajo de carga" },
                    c1s2:    { en: "Floor & ceiling joist systems",                             es: "Sistemas de vigas de piso y techo" },
                    c1s3:    { en: "Roof framing & rafters",                                    es: "Estructura de cubierta y cabrios" },
                    c1s4:    { en: "Door & window rough openings",                              es: "Aberturas brutas de puertas y ventanas" },

                    c2Title: { en: "Custom Woodwork",                                           es: "Carpintería Personalizada" },
                    c2Desc:  { en: "Built-ins, shelving, custom cabinetry, mantels, and unique wood features designed and built for your specific space — not catalog pieces forced to fit.", es: "Empotrados, estanterías, gabinetes personalizados, chimeneas y elementos únicos en madera diseñados y construidos para tu espacio específico — no piezas de catálogo forzadas." },
                    c2s1:    { en: "Built-in shelving & bookcases",                             es: "Estanterías y librerías empotradas" },
                    c2s2:    { en: "Custom cabinet installation",                               es: "Instalación de gabinetes personalizados" },
                    c2s3:    { en: "Fireplace mantels",                                         es: "Repisa de chimenea" },
                    c2s4:    { en: "Wainscoting & paneling",                                    es: "Lambriz y paneles decorativos" },

                    c3Title: { en: "Finish Carpentry",                                          es: "Carpintería de Acabado" },
                    c3Desc:  { en: "The final layer that defines how a space looks and feels. Trim, molding, baseboards, casing, and door and window installation done with the precision finish work demands.", es: "La capa final que define cómo luce y se siente un espacio. Molduras, zócalos, marcos y la instalación de puertas y ventanas con la precisión que exigen los acabados." },
                    c3s1:    { en: "Baseboard & crown molding",                                 es: "Zócalos y molduras de corona" },
                    c3s2:    { en: "Door & window casing",                                      es: "Marcos de puertas y ventanas" },
                    c3s3:    { en: "Interior door installation",                                es: "Instalación de puertas interiores" },
                    c3s4:    { en: "Window installation & trim",                                es: "Instalación de ventanas y molduras" },

                    c4Title: { en: "Handrails & Stairs",                                        es: "Pasamanos y Escaleras" },
                    c4Desc:  { en: "Stair systems, handrails, balusters, and newel posts built to code and designed to complement your home — functional safety that also looks right.", es: "Sistemas de escaleras, pasamanos, balaustres y postes de newel construidos según código y diseñados para complementar tu hogar — seguridad funcional que también luce bien." },
                    c4s1:    { en: "Handrail installation",                                     es: "Instalación de pasamanos" },
                    c4s2:    { en: "Baluster & newel post work",                                es: "Trabajo de balaustres y postes de newel" },
                    c4s3:    { en: "Stair tread replacement",                                   es: "Reemplazo de huellas de escalera" },
                    c4s4:    { en: "Code-compliant construction",                               es: "Construcción según código" },

                    ctaText: { en: "Have a specific carpentry project in mind? Call us — we'll tell you exactly what it takes.", es: "¿Tienes un proyecto de carpintería específico en mente? Llámanos — te decimos exactamente qué se necesita." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                        es: "(443) 858-0904 — Consulta Gratis" }
                },

                process: {
                    badge:       { en: "HOW IT WORKS",                                          es: "CÓMO FUNCIONA" },
                    title:       { en: "Precision Built.",                                      es: "Construido con Precisión." },
                    titleAccent: { en: "Every Step.",                                           es: "Cada Paso." },

                    s1Title: { en: "Assess & Measure",                                          es: "Evaluar y Medir" },
                    s1Desc:  { en: "We visit your site, assess the scope, take precise measurements, and identify any structural or subfloor considerations before a single board is cut.", es: "Visitamos tu sitio, evaluamos el alcance, tomamos medidas precisas e identificamos cualquier consideración estructural antes de cortar una sola tabla." },

                    s2Title: { en: "Written Proposal",                                          es: "Propuesta Escrita" },
                    s2Desc:  { en: "You receive an itemized written proposal with materials, labor, timeline, and fixed price. No vague estimates — everything is documented before work begins.", es: "Recibes una propuesta escrita detallada con materiales, mano de obra, cronograma y precio fijo. Sin estimaciones vagas — todo está documentado antes de comenzar." },

                    s3Title: { en: "Skilled Execution",                                         es: "Ejecución Experta" },
                    s3Desc:  { en: "Cesar and the C Hawk crew execute on schedule with the precision that finish and structural carpentry demand. Clean work site, clear communication throughout.", es: "Cesar y el equipo de C Hawk ejecutan según lo programado con la precisión que exige la carpintería estructural y de acabado. Sitio limpio, comunicación clara en todo momento." },

                    s4Title: { en: "Final Inspection",                                          es: "Inspección Final" },
                    s4Desc:  { en: "Every joint, every cut, every fit is reviewed with you. If it isn't right, we fix it before we close the project. Quality is not negotiable.", es: "Cada junta, cada corte, cada ajuste se revisa contigo. Si algo no está bien, lo corregimos antes de cerrar el proyecto. La calidad no es negociable." }
                },

                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",                                        es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",                                       es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",                                          es: "los Propietarios" },

                    t1Text:     { en: "\"The framing work C Hawk did during our addition was impeccable. Every wall is plumb, every corner is square. You can tell these guys actually know what they're doing. Wouldn't use anyone else.\"", es: "\"El trabajo de estructura que hizo C Hawk durante nuestra ampliación fue impecable. Cada pared aplomada, cada esquina cuadrada. Se nota que realmente saben lo que hacen. No usaría a nadie más.\"" },
                    t1Location: { en: "Gettysburg, PA",                                         es: "Gettysburg, PA" },

                    t2Text:     { en: "\"They built custom built-ins for our living room that look like they came with the house. The fit, the finish, the detail — exceptional. C Hawk takes real pride in their work.\"", es: "\"Construyeron empotrados personalizados para nuestra sala que parecen haber venido con la casa. El ajuste, el acabado, el detalle — excepcional. C Hawk se enorgullece de verdad de su trabajo.\"" },
                    t2Location: { en: "Hanover, PA",                                            es: "Hanover, PA" },

                    t3Text:     { en: "\"New handrail and stair system — looks beautiful and solid. They were in and out in two days, no mess, no stress. These are professionals in every sense of the word.\"", es: "\"Nuevo pasamanos y sistema de escalera — luce hermoso y sólido. Entraron y salieron en dos días, sin desorden, sin estrés. Son profesionales en todo el sentido de la palabra.\"" },
                    t3Location: { en: "York, PA",                                               es: "York, PA" }
                },

                areas: {
                    badge: { en: "WHERE WE WORK",  es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                         es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready to Build",                                        es: "¿Listo para Construir" },
                    titleAccent: { en: "Something That Lasts?",                                 es: "Algo que Dure?" },
                    text:        { en: "Call us or request a free written estimate online. We'll assess your project, give you a clear scope and price, and deliver the craftsmanship your home deserves.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluaremos tu proyecto, te daremos un alcance y precio claro, y entregaremos la artesanía que tu hogar merece." },
                    primaryBtn:  { en: "Schedule Free Consultation",                            es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                     es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                         es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                         es: "Estimación Gratis" }
                }

            },
            drywall: {

                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",         es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Smooth Walls.",                                         es: "Paredes Perfectas." },
                    titleAccent: { en: "Perfect Finish.",                                       es: "Acabado Impecable." },
                    description: { en: "From new construction hang to seamless repair — C Hawk delivers drywall and ceiling work that holds up to inspection and looks flawless under any light.", es: "Desde la instalación en nueva construcción hasta reparaciones invisibles — C Hawk entrega trabajo de panel y techo que supera cualquier inspección y luce impecable bajo cualquier luz." },
                    ctaPrimary:  { en: "Get Free Estimate",                                     es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                     es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                            es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                        es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                        es: "Estimaciones Gratis" }
                },

                gallery: {
                    badge:       { en: "REAL RESULTS",                                          es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                              es: "Antes y" },
                    titleAccent: { en: "After",                                                 es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.", es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                es: "Antes" },
                    after:       { en: "After",                                                 es: "Después" },
                    caption1:    { en: "Drywall installation & finish — Hanover, PA",           es: "Instalación y acabado de panel — Hanover, PA" },
                    caption2:    { en: "Ceiling work — York, PA",                               es: "Trabajo de techo — York, PA" }
                },

                included: {
                    badge:       { en: "FULL SERVICE SCOPE",                                    es: "ALCANCE DE SERVICIO COMPLETO" },
                    title:       { en: "Every Surface,",                                        es: "Cada Superficie," },
                    titleAccent: { en: "Done Right",                                            es: "Bien Hecha" },
                    subtitle:    { en: "Installation, finishing, repair, or texture — one licensed crew handles it all so every surface is paint-ready and flawless.", es: "Instalación, acabado, reparación o textura — un equipo licenciado lo maneja todo para que cada superficie quede lista para pintar e impecable." },

                    c1Title: { en: "Drywall Installation",                                      es: "Instalación de Panel" },
                    c1Desc:  { en: "Full hang and finish for new construction, additions, and gut renovations. Standard and moisture-resistant board, properly fastened, taped, and finished to paint-ready smoothness.", es: "Instalación y acabado completo para nueva construcción, ampliaciones y demoliciones totales. Panel estándar y resistente a la humedad, bien fijado, cinteado y terminado listo para pintar." },
                    c1s1:    { en: "New construction hang",                                     es: "Instalación en nueva construcción" },
                    c1s2:    { en: "Moisture-resistant board",                                  es: "Panel resistente a la humedad" },
                    c1s3:    { en: "Taping & mudding",                                          es: "Cintado y masillado" },
                    c1s4:    { en: "Level 4 & 5 finish",                                        es: "Acabado nivel 4 y 5" },

                    c2Title: { en: "Ceiling Work",                                              es: "Trabajo de Techo" },
                    c2Desc:  { en: "Flat ceilings, coffered ceilings, tray ceilings, and drop ceilings — installed level and finished clean. We handle the scope from simple replacement to full custom ceiling builds.", es: "Techos planos, artesonados, bandejas y techos suspendidos — instalados a nivel y terminados limpiamente. Manejamos desde el reemplazo simple hasta construcciones de techo personalizadas." },
                    c2s1:    { en: "Flat ceiling installation",                                 es: "Instalación de techo plano" },
                    c2s2:    { en: "Coffered & tray ceilings",                                  es: "Techos artesonados y en bandeja" },
                    c2s3:    { en: "Drop ceiling systems",                                      es: "Sistemas de techo suspendido" },
                    c2s4:    { en: "Ceiling replacement",                                       es: "Reemplazo de techo" },

                    c3Title: { en: "Repair & Patching",                                         es: "Reparación y Parchado" },
                    c3Desc:  { en: "Holes, cracks, water damage, and failed tape — we patch and blend so the repair disappears. No visible seams, no texture mismatch, no evidence anything was ever there.", es: "Huecos, grietas, daños por agua y cinta fallida — parcheamos y mezclamos para que la reparación desaparezca. Sin juntas visibles, sin diferencia de textura, sin evidencia de que algo ocurrió." },
                    c3s1:    { en: "Hole & crack repair",                                       es: "Reparación de huecos y grietas" },
                    c3s2:    { en: "Water damage repair",                                       es: "Reparación de daños por agua" },
                    c3s3:    { en: "Seam & tape repair",                                        es: "Reparación de juntas y cinta" },
                    c3s4:    { en: "Texture matching",                                          es: "Igualación de textura" },

                    c4Title: { en: "Texture & Soundproof",                                      es: "Textura y Aislamiento Acústico" },
                    c4Desc:  { en: "Smooth, orange peel, knockdown, skip trowel — applied consistently across every surface. Plus soundproof drywall for bedrooms, offices, and shared walls that need acoustic separation.", es: "Liso, cáscara de naranja, knockdown, llana corrida — aplicado uniformemente en cada superficie. Además panel acústico para dormitorios, oficinas y paredes compartidas que necesitan separación sonora." },
                    c4s1:    { en: "Orange peel & knockdown",                                   es: "Cáscara de naranja y knockdown" },
                    c4s2:    { en: "Skip trowel texture",                                       es: "Textura de llana corrida" },
                    c4s3:    { en: "Smooth skim coat",                                          es: "Alisado con masilla fina" },
                    c4s4:    { en: "Soundproof drywall",                                        es: "Panel acústico" },

                    ctaText: { en: "Have a drywall repair or new installation? Call us — we'll give you an honest scope and price.", es: "¿Tienes una reparación o instalación nueva de panel? Llámanos — te damos un alcance y precio honestos." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                        es: "(443) 858-0904 — Consulta Gratis" }
                },

                process: {
                    badge:       { en: "HOW IT WORKS",                                          es: "CÓMO FUNCIONA" },
                    title:       { en: "Clean Process.",                                        es: "Proceso Limpio." },
                    titleAccent: { en: "Flawless Result.",                                      es: "Resultado Impecable." },

                    s1Title: { en: "Site Assessment",                                           es: "Evaluación del Sitio" },
                    s1Desc:  { en: "We assess the space, identify the finish level needed, note any moisture or structural conditions, and give you an accurate written estimate before any material is ordered.", es: "Evaluamos el espacio, identificamos el nivel de acabado necesario, anotamos cualquier condición de humedad o estructural y te damos una estimación escrita precisa antes de pedir materiales." },

                    s2Title: { en: "Written Proposal",                                          es: "Propuesta Escrita" },
                    s2Desc:  { en: "Board type, finish level, timeline, and fixed price — all in writing. You know exactly what you're getting and what it costs before we touch a wall.", es: "Tipo de panel, nivel de acabado, cronograma y precio fijo — todo por escrito. Sabes exactamente qué recibirás y cuánto cuesta antes de que toquemos una pared." },

                    s3Title: { en: "Hang, Tape & Finish",                                       es: "Instalar, Cintar y Acabar" },
                    s3Desc:  { en: "Board goes up right, tape and mud are applied in proper coats with full drying time between each. No shortcuts on the finish — every surface is sanded and ready for paint.", es: "El panel se instala correctamente, la cinta y masilla se aplican en capas adecuadas con tiempo de secado completo entre cada una. Sin atajos en el acabado — cada superficie lista para pintar." },

                    s4Title: { en: "Final Walkthrough",                                         es: "Inspección Final" },
                    s4Desc:  { en: "We inspect every surface together — checking for any imperfections under raking light. If anything isn't right, we address it before the project closes.", es: "Inspeccionamos cada superficie juntos — revisando imperfecciones bajo luz rasante. Si algo no está bien, lo corregimos antes de cerrar el proyecto." }
                },

                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",                                        es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",                                       es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",                                          es: "los Propietarios" },

                    t1Text:     { en: "\"The drywall finish is absolutely perfect — you cannot see a single seam or imperfection. C Hawk took their time and did it right. The walls look better than new construction.\"", es: "\"El acabado del panel es absolutamente perfecto — no se ve una sola junta ni imperfección. C Hawk se tomó su tiempo y lo hizo bien. Las paredes lucen mejor que una construcción nueva.\"" },
                    t1Location: { en: "Hanover, PA",                                            es: "Hanover, PA" },

                    t2Text:     { en: "\"They patched water damage in three rooms and you literally cannot tell where the repairs are. Matched the existing texture perfectly. Fast, clean, and professional every step of the way.\"", es: "\"Repararon daños por agua en tres habitaciones y literalmente no puedes saber dónde están las reparaciones. Igualaron la textura existente perfectamente. Rápido, limpio y profesional en cada paso.\"" },
                    t2Location: { en: "Gettysburg, PA",                                         es: "Gettysburg, PA" },

                    t3Text:     { en: "\"Full basement drywall and ceiling installation — done ahead of schedule. The finish level they delivered was way above what I expected at this price point. Will call them again without hesitation.\"", es: "\"Instalación completa de panel y techo en el sótano — terminado antes de lo programado. El nivel de acabado que entregaron estuvo muy por encima de lo que esperaba a este precio. Los llamaré de nuevo sin dudarlo.\"" },
                    t3Location: { en: "York, PA",                                               es: "York, PA" }
                },

                areas: {
                    badge: { en: "WHERE WE WORK",  es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                         es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready for Walls",                                       es: "¿Listo para Paredes" },
                    titleAccent: { en: "That Look Perfect?",                                    es: "que Luzcan Perfectas?" },
                    text:        { en: "Call us or request a free written estimate online. We assess the job, give you a clear scope and price, and deliver finish work that holds up to the closest inspection.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluamos el trabajo, te damos un alcance y precio claro, y entregamos acabados que resisten la inspección más exigente." },
                    primaryBtn:  { en: "Schedule Free Consultation",                            es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                     es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                         es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                         es: "Estimación Gratis" }
                }

            },
            // ── BLOG ARTICLE #5 — FLOORING ────────────────────────────────────────────
            flooring: {

                breadcrumb: {
                    current: { en: "Best Flooring Pennsylvania", es: "Mejores Pisos para Pennsylvania" }
                },

                category: { en: "Flooring & Materials", es: "Pisos y Materiales" },

                title: {
                    part1:  { en: "Best Flooring for Pennsylvania Homes:", es: "Los Mejores Pisos para Hogares de Pennsylvania:" },
                    accent: { en: "Cold Climate, High Humidity, and Real Durability", es: "Clima Frío, Alta Humedad y Durabilidad Real" }
                },

                meta: {
                    date:        { en: "May 20, 2025",                         es: "20 de mayo de 2025" },
                    readTime:    { en: "13 min read",                          es: "13 min de lectura" },
                    projects:    { en: "PA Projects",                          es: "Proyectos en PA" },
                    serviceArea: { en: "Hanover · York · Gettysburg, PA",      es: "Hanover · York · Gettysburg, PA" },
                    updated:     { en: "Updated July 2025",                    es: "Actualizado julio 2025" }
                },

                hero: {
                    caption: {
                        en: "Luxury vinyl plank installation in a Hanover, PA home — one of 2,000+ flooring projects completed by C Hawk Construction in Adams and York County. LVP is the most frequently recommended option for PA's climate and lifestyle demands.",
                        es: "Instalación de vinilo de lujo en tablón en una casa en Hanover, PA — uno de los más de 2,000 proyectos de pisos completados por C Hawk Construction en los Condados de Adams y York. El LVP es la opción más recomendada para el clima y las exigencias de vida en PA."
                    }
                },

                // Table of contents
                toc: {
                    title:  { en: "In This Guide",                                                                    es: "En Esta Guía" },
                    item1:  { en: "Pennsylvania's Climate Challenge for Flooring",                                    es: "El Desafío Climático de Pennsylvania para los Pisos" },
                    item2:  { en: "Luxury Vinyl Plank (LVP) — The Versatile Pennsylvania Standard",                  es: "Vinilo de Lujo (LVP) — El Estándar Versátil de Pennsylvania" },
                    item3:  { en: "Engineered Hardwood — Real Wood Without the Climate Risk",                        es: "Madera de Ingeniería — Madera Real Sin el Riesgo Climático" },
                    item4:  { en: "Solid Hardwood — Beautiful, Demanding, and Conditional",                          es: "Madera Sólida — Hermosa, Exigente y Condicional" },
                    item5:  { en: "Porcelain Tile — The Cold-Floor Problem and How to Solve It",                     es: "Cerámica Porcelánica — El Problema del Piso Frío y Cómo Resolverlo" },
                    item6:  { en: "Carpet — Warmth, Acoustics, and Where It Still Makes Sense",                      es: "Alfombra — Calidez, Acústica y Dónde Sigue Teniendo Sentido" },
                    item7:  { en: "Full Comparison — All Flooring Types by Room and Climate Factor",                  es: "Comparativa Completa — Todos los Tipos de Piso por Habitación y Factor Climático" },
                    item8:  { en: "Room-by-Room Recommendations for Pennsylvania Homes",                              es: "Recomendaciones por Habitación para Hogares de Pennsylvania" },
                    item9:  { en: "Frequently Asked Questions",                                                       es: "Preguntas Frecuentes" }
                },

                // Intro paragraphs
                intro: {
                    p1: {
                        en: "Flooring is the largest surface area in every room of your home — and in Pennsylvania, it takes more punishment than flooring in most other states. Temperatures that drop below freezing in January, humidity that climbs above 70% in July, salt and sand tracked in from winter roads, freeze-thaw cycles that test every joint and seam. The flooring that looks good in a showroom in Dallas is not necessarily the flooring that holds up in Hanover.",
                        es: "Los pisos son la mayor superficie en cada habitación de tu hogar — y en Pennsylvania, reciben más castigo que los pisos en la mayoría de los otros estados. Temperaturas que caen bajo cero en enero, humedad que sube por encima del 70% en julio, sal y arena arrastradas desde las carreteras en invierno, ciclos de congelación-descongelación que ponen a prueba cada junta y costura. El piso que luce bien en un showroom en Dallas no es necesariamente el piso que aguanta en Hanover."
                    },
                    p2: {
                        en: "This guide is built from 2,000+ flooring projects completed by C Hawk Construction in Adams and York County, combined with manufacturer performance specifications and local installer data. It covers what each flooring type actually does in Pennsylvania's specific climate — not what the national marketing claims.",
                        es: "Esta guía está construida a partir de más de 2,000 proyectos de pisos completados por C Hawk Construction en los Condados de Adams y York, combinados con especificaciones de rendimiento de fabricantes y datos de instaladores locales. Cubre lo que cada tipo de piso realmente hace en el clima específico de Pennsylvania — no lo que dice el marketing nacional."
                    },
                    p3: {
                        en: "You will find honest assessments of every major flooring category, cost per square foot in the Hanover–York–Gettysburg market, and specific room-by-room recommendations based on performance data. The goal is to help you make a 15–25 year decision with confidence.",
                        es: "Encontrarás evaluaciones honestas de cada categoría principal de pisos, costo por pie cuadrado en el mercado Hanover–York–Gettysburg, y recomendaciones específicas por habitación basadas en datos de rendimiento. El objetivo es ayudarte a tomar una decisión de 15–25 años con confianza."
                    }
                },

                // Sources block
                sources: {
                    title: { en: "Data Sources for This Guide",                                                                                         es: "Fuentes de Datos para Esta Guía" },
                    item1: { en: "C Hawk Construction — 2,000+ flooring projects, Adams and York County PA (2020–2025), HICPA PA190465",               es: "C Hawk Construction — Más de 2,000 proyectos de pisos, Condados de Adams y York, PA (2020–2025), HICPA PA190465" },
                    item2: { en: "National Wood Flooring Association (NWFA) — Humidity and Wood Flooring Installation Guidelines (2024)",              es: "Asociación Nacional de Pisos de Madera (NWFA) — Directrices de Instalación de Pisos de Madera y Humedad (2024)" },
                    item3: { en: "Remodeling Magazine — 2024 Cost vs. Value Report, Mid-Atlantic Region",                                              es: "Remodeling Magazine — Informe de Costo vs. Valor 2024, Región del Atlántico Medio" },
                    item4: { en: "Pennsylvania State Climatological Office — Temperature and Humidity Data, Adams and York County (2024)",              es: "Oficina Climatológica del Estado de Pennsylvania — Datos de Temperatura y Humedad, Condados de Adams y York (2024)" }
                },

                // Section 1 — PA climate challenge
                section1: {
                    badge: { en: "THE PA CHALLENGE",                                 es: "EL DESAFÍO DE PA" },
                    title: { en: "Pennsylvania's Climate Challenge for Flooring",    es: "El Desafío Climático de Pennsylvania para los Pisos" },
                    p1: {
                        en: "Pennsylvania sits in a climate zone that tests flooring more aggressively than most of the United States. Understanding the specific stressors helps you evaluate which products are genuinely suited to your home versus which ones are engineered for milder conditions.",
                        es: "Pennsylvania se encuentra en una zona climática que pone a prueba los pisos más agresivamente que la mayoría de los Estados Unidos. Comprender los factores de estrés específicos te ayuda a evaluar qué productos son genuinamente adecuados para tu hogar frente a los que están diseñados para condiciones más suaves."
                    }
                },

                // Climate factor cards
                climate1: {
                    title: { en: "Humidity Swings of 40–55 Percentage Points Seasonally",  es: "Variaciones de Humedad de 40–55 Puntos Porcentuales de Forma Estacional" },
                    text: {
                        en: "Indoor relative humidity in Pennsylvania homes averages 20–35% in winter (heated, dry air) and 55–75% in summer without dehumidification. This seasonal swing of 40–55 percentage points is one of the most demanding moisture environments for flooring in the continental US. Wood flooring — both solid and engineered — expands and contracts with humidity changes. Products rated for moderate climates are frequently specified incorrectly for Pennsylvania conditions.",
                        es: "La humedad relativa interior en los hogares de Pennsylvania promedia entre 20–35% en invierno (aire calentado y seco) y 55–75% en verano sin deshumidificación. Esta variación estacional de 40–55 puntos porcentuales es uno de los entornos de humedad más exigentes para los pisos en los EE.UU. continental. Los pisos de madera — tanto sólidos como de ingeniería — se expanden y contraen con los cambios de humedad. Los productos clasificados para climas moderados se especifican con frecuencia de manera incorrecta para las condiciones de Pennsylvania."
                    }
                },
                climate2: {
                    title: { en: "Freeze-Thaw Cycles and Entryway Stress",  es: "Ciclos de Congelación-Descongelación y Estrés en las Entradas" },
                    text: {
                        en: "Pennsylvania winters subject entryways, mudrooms, and first-floor areas near exterior doors to a continuous cycle of cold, moisture, road salt, and grit tracked in from outside. This combination is particularly destructive to finishes and joints. Entryway flooring in Pennsylvania fails faster than in any other area of the home — the material choice at entry points is disproportionately important.",
                        es: "Los inviernos de Pennsylvania someten a las entradas, cuartos de barro y áreas del primer piso cerca de las puertas exteriores a un ciclo continuo de frío, humedad, sal de carretera y arena arrastrada desde el exterior. Esta combinación es particularmente destructiva para los acabados y las juntas. El piso de entrada en Pennsylvania falla más rápido que en cualquier otra área del hogar — la elección del material en los puntos de entrada es desproporcionadamente importante."
                    }
                },
                climate3: {
                    title: { en: "Older Homes — Subfloor Conditions Matter",  es: "Casas Antiguas — Las Condiciones del Subpiso Importan" },
                    text: {
                        en: "A significant portion of Adams and York County housing stock was built in the 1950s–1980s with subfloor conditions — levelness, moisture barriers, concrete slab construction — that affect flooring performance. Some flooring types require subfloor remediation before installation. Skipping subfloor assessment is one of the most common causes of premature flooring failure in Pennsylvania remodels.",
                        es: "Una parte significativa del parque habitacional de los Condados de Adams y York fue construida en las décadas de 1950 a 1980 con condiciones de subpiso — nivelación, barreras de humedad, construcción de losa de concreto — que afectan el rendimiento de los pisos. Algunos tipos de pisos requieren remediación del subpiso antes de la instalación. Omitir la evaluación del subpiso es una de las causas más comunes de falla prematura de pisos en las remodelaciones de Pennsylvania."
                    }
                },
                climate4: {
                    title: { en: "Below-Grade Spaces — Basements and Slab-on-Grade",  es: "Espacios Bajo Nivel del Suelo — Sótanos y Losa Sobre Terreno" },
                    text: {
                        en: "Pennsylvania homes commonly have basements and below-grade living areas where moisture from soil infiltration produces consistently elevated humidity and occasional water intrusion. Most solid hardwood manufacturers void warranties when installed below grade. LVP and porcelain tile are the only categories with full performance ratings for below-grade installation in Pennsylvania conditions.",
                        es: "Los hogares de Pennsylvania comúnmente tienen sótanos y áreas de vida bajo nivel del suelo donde la humedad de la infiltración del suelo produce una humedad consistentemente elevada e intrusiones ocasionales de agua. La mayoría de los fabricantes de madera sólida anulan las garantías cuando se instala bajo nivel del suelo. El LVP y la cerámica porcelánica son las únicas categorías con clasificaciones de rendimiento completo para instalación bajo nivel del suelo en las condiciones de Pennsylvania."
                    }
                },

                // Section 2 — LVP
                section2: {
                    badge:       { en: "LVP — MOST POPULAR IN PA",              es: "LVP — EL MÁS POPULAR EN PA" },
                    title:       { en: "Luxury Vinyl Plank (LVP)",               es: "Vinilo de Lujo en Tablón (LVP)" },
                    titleAccent: { en: " — The Versatile Pennsylvania Standard",  es: " — El Estándar Versátil de Pennsylvania" },
                    p1: {
                        en: "LVP has become the dominant flooring choice in Pennsylvania renovation projects — not because of marketing, but because it genuinely addresses the conditions Pennsylvania homes present better than any other flooring category across the widest range of rooms and budgets. Of the 2,000+ flooring projects C Hawk has completed in Adams and York County, approximately 58% used LVP as the primary flooring material.",
                        es: "El LVP se ha convertido en la elección de piso dominante en los proyectos de renovación de Pennsylvania — no por el marketing, sino porque genuinamente aborda las condiciones que presentan los hogares de Pennsylvania mejor que cualquier otra categoría de pisos en la mayor variedad de habitaciones y presupuestos. De los más de 2,000 proyectos de pisos completados por C Hawk en los Condados de Adams y York, aproximadamente el 58% utilizó LVP como material de piso principal."
                    }
                },

                // LVP tier cards
                lvp1: {
                    label: { en: "WHY LVP WORKS IN PA",                          es: "POR QUÉ EL LVP FUNCIONA EN PA" },
                    title: { en: "100% Waterproof and Dimensionally Stable",      es: "100% Impermeable y Dimensionalmente Estable" },
                    text: {
                        en: "LVP is not water-resistant — it is waterproof. Flooding, pet accidents, bathroom humidity, basement moisture, and tracked-in winter slush do not affect its core material. Unlike wood products that expand and contract with humidity cycles, LVP's PVC core is dimensionally stable through Pennsylvania's 40–55 point seasonal humidity swings. Properly installed with appropriate expansion gaps, LVP does not cup, gap, warp, or buckle through temperature and humidity changes.",
                        es: "El LVP no es resistente al agua — es impermeable. Las inundaciones, los accidentes de mascotas, la humedad del baño, la humedad del sótano y el aguanieve invernal arrastrado no afectan su material central. A diferencia de los productos de madera que se expanden y contraen con los ciclos de humedad, el núcleo de PVC del LVP es dimensionalmente estable a través de las variaciones estacionales de humedad de 40–55 puntos de Pennsylvania. Instalado correctamente con holguras de expansión apropiadas, el LVP no se arquea, abre, deforma ni pandea con los cambios de temperatura y humedad."
                    },
                    cost: { en: "Cost Installed: $4–$9/sq ft · Most projects $5–$7/sq ft",  es: "Costo Instalado: $4–$9/pie² · La mayoría de proyectos $5–$7/pie²" }
                },
                lvp2: {
                    label: { en: "LVP LIMITATIONS",                                          es: "LIMITACIONES DEL LVP" },
                    title: { en: "Cannot Be Refinished — Wear Layer Determines Lifespan",    es: "No se Puede Reacabar — La Capa de Desgaste Determina la Vida Útil" },
                    text: {
                        en: "LVP cannot be sanded and refinished. When the wear layer is depleted, the floor must be replaced. Wear layer thickness — measured in mils — determines durability: 6 mil is residential entry-level (10–15 year lifespan in normal use), 12 mil is residential premium (20–25 years), 20 mil is commercial-grade and appropriate for high-traffic PA homes with pets, children, and mudroom traffic. Do not specify 6 mil LVP for Pennsylvania entryways or kitchens with heavy traffic.",
                        es: "El LVP no puede lijarse y reacabarse. Cuando la capa de desgaste se agota, el piso debe reemplazarse. El grosor de la capa de desgaste — medido en milésimas de pulgada — determina la durabilidad: 6 mil es nivel de entrada residencial (vida útil de 10–15 años en uso normal), 12 mil es premium residencial (20–25 años), 20 mil es grado comercial y apropiado para hogares de PA con mucho tráfico, mascotas, niños y tráfico de cuarto de entrada. No especifiques LVP de 6 mil para entradas de Pennsylvania o cocinas con tráfico intenso."
                    },
                    cost: { en: "Recommended: 12 mil minimum · 20 mil for high-traffic areas",  es: "Recomendado: 12 mil mínimo · 20 mil para áreas de alto tráfico" }
                },
                lvp3: {
                    label: { en: "BEST ROOMS FOR LVP",                                       es: "MEJORES HABITACIONES PARA LVP" },
                    title: { en: "Whole-Home Capable — Excellent in Problem Areas",           es: "Apto para Todo el Hogar — Excelente en Áreas Problemáticas" },
                    text: {
                        en: "LVP performs well in every area of a Pennsylvania home: basements (where wood products often fail), bathrooms, kitchens, entryways, living rooms, and bedrooms. It is the only flooring category that is genuinely appropriate for all of these rooms without material-specific caveats. For whole-home flooring projects seeking visual consistency across wet and dry zones, LVP is the only product that delivers this without substituting a different material for wet areas.",
                        es: "El LVP funciona bien en cada área de un hogar de Pennsylvania: sótanos (donde los productos de madera a menudo fallan), baños, cocinas, entradas, salas de estar y dormitorios. Es la única categoría de piso genuinamente apropiada para todas estas habitaciones sin advertencias específicas del material. Para proyectos de pisos en todo el hogar que buscan consistencia visual entre zonas húmedas y secas, el LVP es el único producto que lo logra sin sustituir un material diferente para áreas húmedas."
                    },
                    cost: { en: "All areas including basements · Best choice below grade",  es: "Todas las áreas incluyendo sótanos · Mejor opción bajo nivel del suelo" }
                },

                // Section 3 — Engineered hardwood
                section3: {
                    badge:       { en: "ENGINEERED HARDWOOD",                        es: "MADERA DE INGENIERÍA" },
                    title:       { en: "Engineered Hardwood",                         es: "Madera de Ingeniería" },
                    titleAccent: { en: " — Real Wood Without the Climate Risk",        es: " — Madera Real Sin el Riesgo Climático" },
                    p1: {
                        en: "Engineered hardwood is the correct wood flooring choice for most Pennsylvania applications. Its cross-ply plywood core — typically 5–7 plies oriented in alternating grain directions — resists the expansion and contraction that solid hardwood undergoes through humidity cycles. The result is a wood floor that looks and feels like solid hardwood but performs significantly better in Pennsylvania's seasonal humidity environment.",
                        es: "La madera de ingeniería es la elección correcta de piso de madera para la mayoría de las aplicaciones en Pennsylvania. Su núcleo de madera contrachapada de capas cruzadas — típicamente 5–7 capas orientadas en direcciones de grano alternadas — resiste la expansión y contracción que experimenta la madera sólida a través de los ciclos de humedad. El resultado es un piso de madera que luce y se siente como madera sólida pero se desempeña significativamente mejor en el entorno de humedad estacional de Pennsylvania."
                    },
                    p2: {
                        en: "The real wood veneer layer on engineered hardwood — typically 2–6mm thick depending on quality — can be sanded and refinished 1–3 times over the floor's life, unlike LVP. This gives engineered hardwood a potential 30–50 year lifespan in a Pennsylvania home if maintained properly, compared to 20–25 years for premium LVP.",
                        es: "La capa de chapa de madera real en la madera de ingeniería — típicamente de 2–6mm de grosor según la calidad — puede lijarse y reacabarse 1–3 veces a lo largo de la vida del piso, a diferencia del LVP. Esto le da a la madera de ingeniería una vida útil potencial de 30–50 años en un hogar de Pennsylvania si se mantiene correctamente, en comparación con los 20–25 años del LVP premium."
                    },
                    p3: {
                        en: "The critical specification for Pennsylvania: veneer thickness determines whether the floor can be refinished and how many times. Budget-tier engineered hardwood with a 2mm veneer can only be lightly buffed — it cannot survive a full sand and refinish. For a Pennsylvania home where you intend to keep the floor for decades, specify 4mm veneer minimum. The price difference between 2mm and 4mm veneer products is typically $1.50–$2.50 per square foot — well worth the additional lifespan.",
                        es: "La especificación crítica para Pennsylvania: el grosor de la chapa determina si el piso se puede reacabar y cuántas veces. La madera de ingeniería de nivel económico con una chapa de 2mm solo puede pulirse ligeramente — no puede sobrevivir a un lijado y reacabado completo. Para un hogar de Pennsylvania donde planeas mantener el piso durante décadas, especifica un mínimo de 4mm de chapa. La diferencia de precio entre productos de chapa de 2mm y 4mm es típicamente de $1.50–$2.50 por pie cuadrado — bien vale la vida útil adicional."
                    }
                },

                // Engineered hardwood cost breakdown
                engHW: {
                    breakdown: {
                        title: { en: "Engineered Hardwood — Cost and Performance Factors PA",  es: "Madera de Ingeniería — Costo y Factores de Rendimiento en PA" }
                    },
                    item1: {
                        label: { en: "Budget tier (3mm veneer, 5-ply core)",           es: "Nivel económico (chapa 3mm, núcleo 5 capas)" },
                        range: { en: "$8–$11/sq ft installed",                         es: "$8–$11/pie² instalado" }
                    },
                    item2: {
                        label: { en: "Mid-grade (4–5mm veneer, 7-ply core)",           es: "Grado medio (chapa 4–5mm, núcleo 7 capas)" },
                        range: { en: "$11–$15/sq ft installed",                        es: "$11–$15/pie² instalado" }
                    },
                    item3: {
                        label: { en: "Premium (6mm veneer, 9-ply core, wide plank)",   es: "Premium (chapa 6mm, núcleo 9 capas, tablón ancho)" },
                        range: { en: "$15–$22/sq ft installed",                        es: "$15–$22/pie² instalado" }
                    },
                    item4: {
                        label: { en: "Recommended veneer thickness for PA (refinishable)",  es: "Grosor de chapa recomendado para PA (reacabable)" },
                        range: { en: "4mm minimum",                                        es: "4mm mínimo" }
                    }
                },

                // Section 4 — Solid hardwood
                section4: {
                    badge:       { en: "SOLID HARDWOOD",                             es: "MADERA SÓLIDA" },
                    title:       { en: "Solid Hardwood",                              es: "Madera Sólida" },
                    titleAccent: { en: " — Beautiful, Demanding, and Conditional",    es: " — Hermosa, Exigente y Condicional" },
                    p1: {
                        en: "Solid hardwood is the prestige flooring choice — and the most demanding one for Pennsylvania conditions. When installed correctly in the right rooms with proper humidity management, solid hardwood is the most beautiful, most durable, and most refinishable floor available. When installed incorrectly or in the wrong environment, it is the most expensive flooring failure.",
                        es: "La madera sólida es la elección de piso de prestigio — y la más exigente para las condiciones de Pennsylvania. Cuando se instala correctamente en las habitaciones adecuadas con una gestión apropiada de la humedad, la madera sólida es el piso más hermoso, más duradero y más reacabable disponible. Cuando se instala incorrectamente o en el entorno equivocado, es el fallo de piso más costoso."
                    },
                    p2: {
                        en: "Pennsylvania homes without whole-house humidification routinely see winter relative humidity drop to 20–30% in heated spaces. This is below the NWFA minimum for solid hardwood installation without risk. The result is seasonal gapping — visible gaps between planks that open in winter and close in summer. In severe cases, cupping and crowning occur, requiring sanding and refinishing or replacement.",
                        es: "Los hogares de Pennsylvania sin humidificación para toda la casa ven rutinariamente cómo la humedad relativa invernal cae al 20–30% en los espacios calefaccionados. Esto está por debajo del mínimo de la NWFA para la instalación de madera sólida sin riesgo. El resultado son huecos estacionales — aberturas visibles entre los tablones que se abren en invierno y se cierran en verano. En casos graves, ocurren el ahuecado y el coronado, que requieren lijado y reacabado o reemplazo."
                    },
                    p3: {
                        en: "Solid hardwood is viable in Pennsylvania — with conditions. The home must have whole-house or room-level humidity control capable of maintaining 35–55% RH year-round. The floor cannot be installed below grade or in bathrooms. And the wood species must be appropriate for the humidity range: white oak, maple, and hickory handle humidity movement better than softer or more porous species. Cost installed: $10–$22 per square foot, plus potential humidification system if not present.",
                        es: "La madera sólida es viable en Pennsylvania — con condiciones. El hogar debe tener control de humedad para toda la casa o a nivel de habitación capaz de mantener 35–55% HR durante todo el año. El piso no puede instalarse bajo nivel del suelo o en baños. Y la especie de madera debe ser apropiada para el rango de humedad: el roble blanco, el arce y el nogal americano manejan el movimiento por humedad mejor que las especies más blandas o porosas. Costo instalado: $10–$22 por pie cuadrado, más un posible sistema de humidificación si no está presente."
                    }
                },

                // Solid hardwood NWFA highlight
                solidHW: {
                    highlight: {
                        label:  { en: "NWFA Installation Guidelines — Humidity Requirements for Solid Hardwood",  es: "Directrices de Instalación de la NWFA — Requisitos de Humedad para Madera Sólida" },
                        text:   { en: "Solid hardwood should only be installed where relative humidity can be maintained between 35–55% year-round. Installation in environments with humidity below 30% or above 60% risks seasonal gapping, cupping, or structural deformation.",  es: "La madera sólida solo debe instalarse donde la humedad relativa pueda mantenerse entre 35–55% durante todo el año. La instalación en entornos con humedad inferior al 30% o superior al 60% arriesga huecos estacionales, ahuecado o deformación estructural." },
                        source: { en: "National Wood Flooring Association (NWFA) — Installation Guidelines 2024. nwfa.org",  es: "Asociación Nacional de Pisos de Madera (NWFA) — Directrices de Instalación 2024. nwfa.org" }
                    }
                },

                // Section 5 — Porcelain tile
                section5: {
                    badge:       { en: "PORCELAIN TILE",                                           es: "CERÁMICA PORCELÁNICA" },
                    title:       { en: "Porcelain Tile",                                            es: "Cerámica Porcelánica" },
                    titleAccent: { en: " — The Cold-Floor Problem and How to Solve It",             es: " — El Problema del Piso Frío y Cómo Resolverlo" },
                    p1: {
                        en: "Porcelain tile is the best performing flooring material in wet areas — period. It is completely waterproof, impervious to Pennsylvania's humidity swings, resistant to freeze-thaw stress when properly installed, and has an indefinite lifespan if grout and tile integrity are maintained. For kitchens, bathrooms, entryways, and laundry rooms, it is the highest-performance choice available.",
                        es: "La cerámica porcelánica es el material de piso de mejor rendimiento en áreas húmedas — sin duda. Es completamente impermeable, inmune a las variaciones de humedad de Pennsylvania, resistente al estrés de congelación-descongelación cuando se instala correctamente, y tiene una vida útil indefinida si se mantiene la integridad del mortero y la cerámica. Para cocinas, baños, entradas y lavaderos, es la opción de mayor rendimiento disponible."
                    },
                    p2: {
                        en: "The legitimate objection to tile is thermal — it is cold underfoot in Pennsylvania winters. This is a real comfort issue that affects daily quality of life from November through March. The solution is radiant heat underlayment: electric mat systems installed beneath tile that cost $8–$15 per square foot installed and eliminate the cold-floor problem entirely. For bathrooms and kitchens, radiant heat beneath tile is one of the most consistently praised upgrades in our project survey data.",
                        es: "La objeción legítima a la cerámica es térmica — está fría bajo los pies en los inviernos de Pennsylvania. Este es un problema de confort real que afecta la calidad de vida diaria de noviembre a marzo. La solución es el calefactor radiante bajo el piso: sistemas de alfombrilla eléctrica instalados bajo la cerámica que cuestan $8–$15 por pie cuadrado instalado y eliminan completamente el problema del piso frío. Para baños y cocinas, el calor radiante bajo la cerámica es una de las mejoras más consistentemente elogiadas en nuestros datos de encuestas de proyectos."
                    },
                    p3: {
                        en: "One critical specification: tile installed in entryways and exterior-adjacent areas of Pennsylvania homes must have a DCOF (Dynamic Coefficient of Friction) rating of 0.42 or higher for wet slip resistance. Polished tile is a slip hazard in Pennsylvania entryways during winter — specify matte or textured surface finishes for all areas where tracked-in water and snow are anticipated.",
                        es: "Una especificación crítica: la cerámica instalada en entradas y áreas adyacentes al exterior de hogares de Pennsylvania debe tener una clasificación DCOF (Coeficiente Dinámico de Fricción) de 0.42 o superior para resistencia al deslizamiento en mojado. La cerámica pulida es un peligro de deslizamiento en las entradas de Pennsylvania durante el invierno — especifica acabados de superficie mate o texturizados para todas las áreas donde se anticipa agua y nieve arrastrada."
                    }
                },

                // Tile cost breakdown
                tile: {
                    breakdown: {
                        title: { en: "Porcelain Tile — Cost Installed PA (2025)",  es: "Cerámica Porcelánica — Costo Instalado en PA (2025)" }
                    },
                    item1: {
                        label: { en: "Standard porcelain tile, basic pattern",         es: "Cerámica porcelánica estándar, patrón básico" },
                        range: { en: "$8–$12/sq ft installed",                         es: "$8–$12/pie² instalado" }
                    },
                    item2: {
                        label: { en: "Large format tile (24\"x24\" and above)",        es: "Cerámica de gran formato (60x60 cm y superior)" },
                        range: { en: "$12–$18/sq ft installed",                        es: "$12–$18/pie² instalado" }
                    },
                    item3: {
                        label: { en: "Radiant heat mat addition (electric, per zone)", es: "Adición de alfombrilla de calor radiante (eléctrica, por zona)" },
                        range: { en: "+$8–$15/sq ft",                                  es: "+$8–$15/pie²" }
                    },
                    item4: {
                        label: { en: "Epoxy grout upgrade (vs standard cement grout)", es: "Mejora a mortero epoxi (vs mortero de cemento estándar)" },
                        range: { en: "+$1.50–$3/sq ft",                                es: "+$1.50–$3/pie²" }
                    }
                },

                // Section 6 — Carpet
                section6: {
                    badge:       { en: "CARPET",                                                       es: "ALFOMBRA" },
                    title:       { en: "Carpet",                                                        es: "Alfombra" },
                    titleAccent: { en: " — Warmth, Acoustics, and Where It Still Makes Sense",          es: " — Calidez, Acústica y Dónde Sigue Teniendo Sentido" },
                    p1: {
                        en: "Carpet has declined in popularity in Pennsylvania renovation projects — primarily because of moisture vulnerability and the challenge of managing allergens in a climate that drives people indoors for months. However, it retains genuine advantages in specific applications: bedrooms, stairs, and home offices where acoustic softness, thermal comfort underfoot, and fall safety are priorities.",
                        es: "La alfombra ha disminuido en popularidad en los proyectos de renovación de Pennsylvania — principalmente por la vulnerabilidad a la humedad y el desafío de gestionar alérgenos en un clima que mantiene a las personas en interiores durante meses. Sin embargo, conserva ventajas genuinas en aplicaciones específicas: dormitorios, escaleras y oficinas en casa donde la suavidad acústica, el confort térmico bajo los pies y la seguridad contra caídas son prioridades."
                    }
                },

                // Carpet use cards
                carpet1: {
                    title: { en: "Where Carpet Still Works Well in PA Homes",  es: "Dónde la Alfombra Sigue Funcionando Bien en Hogares de PA" },
                    text: {
                        en: "Bedrooms are the strongest case for carpet in Pennsylvania homes. The thermal comfort benefit — barefoot contact with a warm, soft surface — is most valuable where occupants are barefoot most often. Carpet also significantly reduces noise transmission between floors, which matters in two-story PA homes during winter months when all activity moves indoors. Stairs benefit from carpet's slip resistance and noise reduction. Home offices where acoustic dampening improves concentration are another appropriate application.",
                        es: "Los dormitorios son el caso más sólido para la alfombra en los hogares de Pennsylvania. El beneficio de confort térmico — el contacto de los pies descalzos con una superficie cálida y suave — es más valioso donde los ocupantes están descalzos con más frecuencia. La alfombra también reduce significativamente la transmisión de ruido entre pisos, lo que importa en los hogares de PA de dos pisos durante los meses de invierno cuando toda la actividad se traslada a interiores. Las escaleras se benefician de la resistencia al deslizamiento y la reducción de ruido de la alfombra. Las oficinas en casa donde la amortiguación acústica mejora la concentración son otra aplicación apropiada."
                    }
                },
                carpet2: {
                    title: { en: "Where Carpet Fails in Pennsylvania",  es: "Dónde Falla la Alfombra en Pennsylvania" },
                    text: {
                        en: "Carpet in basements, kitchens, entryways, and bathrooms is a consistent maintenance problem in Pennsylvania's climate. High summer humidity drives moisture into carpet fibers and padding, creating ideal mold conditions. Road salt and wet winter footwear damage carpet pile and backing faster than in other climates. Basements with carpet are a frequent mold discovery during renovation projects — the moisture that accumulates in below-grade carpet is often not visible until the flooring is removed. Carpet below grade in Pennsylvania is not recommended.",
                        es: "La alfombra en sótanos, cocinas, entradas y baños es un problema de mantenimiento constante en el clima de Pennsylvania. La alta humedad del verano impulsa la humedad hacia las fibras y el relleno de la alfombra, creando condiciones ideales para el moho. La sal de carretera y el calzado mojado invernal dañan la pila y el respaldo de la alfombra más rápido que en otros climas. Los sótanos con alfombra son un hallazgo frecuente de moho durante los proyectos de renovación — la humedad que se acumula en la alfombra bajo nivel del suelo a menudo no es visible hasta que se retira el piso. La alfombra bajo nivel del suelo en Pennsylvania no se recomienda."
                    }
                },

                // Section 7 — Full comparison table
                section7: {
                    badge: { en: "FULL COMPARISON",  es: "COMPARATIVA COMPLETA" },
                    title: { en: "Full Comparison — All Flooring Types by Climate Factor and Cost",  es: "Comparativa Completa — Todos los Tipos de Piso por Factor Climático y Costo" }
                },

                table: {
                    title: { en: "Pennsylvania Flooring Comparison — Performance, Cost & Climate Suitability 2025",  es: "Comparativa de Pisos de Pennsylvania — Rendimiento, Costo y Idoneidad Climática 2025" },
                    col: {
                        type:     { en: "Flooring Type",       es: "Tipo de Piso" },
                        cost:     { en: "Cost Installed (PA)", es: "Costo Instalado (PA)" },
                        humidity: { en: "Humidity Tolerance",  es: "Tolerancia a la Humedad" },
                        basement: { en: "Below Grade",         es: "Bajo Nivel del Suelo" },
                        lifespan: { en: "Lifespan",            es: "Vida Útil" }
                    },
                    row1: {
                        type:     { en: "LVP (12 mil+)",                          es: "LVP (12 mil+)" },
                        cost:     { en: "$4–$9/sq ft",                            es: "$4–$9/pie²" },
                        humidity: { en: "Excellent — 100% waterproof",            es: "Excelente — 100% impermeable" },
                        basement: { en: "Yes",                                    es: "Sí" },
                        lifespan: { en: "20–25 yrs (no refinish)",                es: "20–25 años (sin reacabado)" }
                    },
                    row2: {
                        type:     { en: "Engineered Hardwood",                    es: "Madera de Ingeniería" },
                        cost:     { en: "$8–$22/sq ft",                           es: "$8–$22/pie²" },
                        humidity: { en: "Good — stable through PA swings",        es: "Buena — estable ante variaciones de PA" },
                        basement: { en: "Limited — with vapor barrier",           es: "Limitado — con barrera de vapor" },
                        lifespan: { en: "30–50 yrs (refinishable)",               es: "30–50 años (reacabable)" }
                    },
                    row3: {
                        type:     { en: "Solid Hardwood",                         es: "Madera Sólida" },
                        cost:     { en: "$10–$22/sq ft",                          es: "$10–$22/pie²" },
                        humidity: { en: "Challenging — requires humidity control", es: "Desafiante — requiere control de humedad" },
                        basement: { en: "No",                                     es: "No" },
                        lifespan: { en: "50–100 yrs (repeatedly refinishable)",   es: "50–100 años (reacabable múltiples veces)" }
                    },
                    row4: {
                        type:     { en: "Porcelain Tile",                         es: "Cerámica Porcelánica" },
                        cost:     { en: "$8–$18/sq ft",                           es: "$8–$18/pie²" },
                        humidity: { en: "Excellent — impervious to moisture",     es: "Excelente — impermeable a la humedad" },
                        basement: { en: "Yes",                                    es: "Sí" },
                        lifespan: { en: "50+ yrs (with grout maintenance)",       es: "50+ años (con mantenimiento del mortero)" }
                    },
                    row5: {
                        type:     { en: "Carpet",                                 es: "Alfombra" },
                        cost:     { en: "$3–$8/sq ft",                            es: "$3–$8/pie²" },
                        humidity: { en: "Poor — absorbs moisture, mold risk",     es: "Deficiente — absorbe humedad, riesgo de moho" },
                        basement: { en: "Not recommended PA",                     es: "No recomendado en PA" },
                        lifespan: { en: "8–15 yrs",                               es: "8–15 años" }
                    },
                    source: {
                        en: "Source: C Hawk Construction project data 2020–2025 · NWFA Installation Guidelines 2024 · Remodeling Magazine Cost vs. Value Mid-Atlantic 2024",
                        es: "Fuente: Datos de proyectos de C Hawk Construction 2020–2025 · Directrices de Instalación de la NWFA 2024 · Remodeling Magazine Costo vs. Valor Atlántico Medio 2024"
                    }
                },

                // Section 8 — Room by room
                section8: {
                    badge: { en: "ROOM BY ROOM",                                                         es: "HABITACIÓN POR HABITACIÓN" },
                    title: { en: "Room-by-Room Recommendations for Pennsylvania Homes",                   es: "Recomendaciones por Habitación para Hogares de Pennsylvania" },
                    p1: {
                        en: "These recommendations are based on performance data from our project history in Hanover, York, and Gettysburg — not manufacturer specifications for ideal conditions.",
                        es: "Estas recomendaciones se basan en datos de rendimiento de nuestro historial de proyectos en Hanover, York y Gettysburg — no en especificaciones de fabricantes para condiciones ideales."
                    }
                },

                // Room recommendations
                room1: {
                    title: { en: "Kitchen: Porcelain Tile or LVP (20 mil)",  es: "Cocina: Cerámica Porcelánica o LVP (20 mil)" },
                    text: {
                        en: "Porcelain tile is the premium choice for Pennsylvania kitchens — fully waterproof, grease-resistant, and indefinitely durable. Specify matte or textured finish for slip resistance when wet. Add radiant heat for thermal comfort November–March. LVP at 20 mil wear layer is an excellent alternative at lower cost — particularly when kitchen and living room share an open floor plan and visual continuity with adjacent wood-look areas is desired.",
                        es: "La cerámica porcelánica es la elección premium para las cocinas de Pennsylvania — completamente impermeable, resistente a la grasa e indefinidamente durable. Especifica acabado mate o texturizado para resistencia al deslizamiento cuando esté mojada. Agrega calor radiante para confort térmico de noviembre a marzo. El LVP con capa de desgaste de 20 mil es una excelente alternativa a menor costo — particularmente cuando la cocina y la sala comparten una planta abierta y se desea continuidad visual con áreas adyacentes de apariencia de madera."
                    }
                },
                room2: {
                    title: { en: "Bathroom: Porcelain Tile (with Radiant Heat)",  es: "Baño: Cerámica Porcelánica (con Calor Radiante)" },
                    text: {
                        en: "Porcelain tile with epoxy grout is the unambiguous recommendation for Pennsylvania bathrooms. The moisture environment, humidity cycling, and cleaning chemistry that bathrooms experience eliminate wood products and LVP as viable primary choices. Radiant heat beneath bathroom tile eliminates the cold-floor problem and is the single most popular upgrade we install in bathroom renovations. Specify slip-resistant tile throughout — DCOF 0.42 minimum.",
                        es: "La cerámica porcelánica con mortero epoxi es la recomendación inequívoca para los baños de Pennsylvania. El entorno de humedad, el ciclo de humedad y la química de limpieza que experimentan los baños eliminan los productos de madera y el LVP como opciones primarias viables. El calor radiante bajo la cerámica del baño elimina el problema del piso frío y es la mejora individual más popular que instalamos en las renovaciones de baños. Especifica cerámica antideslizante en todos lados — DCOF 0.42 mínimo."
                    }
                },
                room3: {
                    title: { en: "Living Room / Dining Room: Engineered Hardwood or LVP",  es: "Sala de Estar / Comedor: Madera de Ingeniería o LVP" },
                    text: {
                        en: "For above-grade living and dining areas in Pennsylvania homes, engineered hardwood and LVP both perform well. The decision comes down to budget and longevity goals. Engineered hardwood at 4mm+ veneer thickness provides a genuine wood appearance, refinishability, and 30–50 year lifespan at higher upfront cost. Premium LVP at 12 mil+ provides excellent durability, waterproofing, and visual appeal at significantly lower cost with a 20–25 year expected lifespan.",
                        es: "Para las áreas de estar y comedor sobre nivel del suelo en los hogares de Pennsylvania, tanto la madera de ingeniería como el LVP tienen buen rendimiento. La decisión se reduce al presupuesto y los objetivos de longevidad. La madera de ingeniería con un grosor de chapa de 4mm+ proporciona una apariencia genuina de madera, reacababilidad y una vida útil de 30–50 años con mayor costo inicial. El LVP premium de 12 mil+ proporciona excelente durabilidad, impermeabilización y atractivo visual a un costo significativamente menor con una vida útil esperada de 20–25 años."
                    }
                },
                room4: {
                    title: { en: "Bedroom: Carpet or Engineered Hardwood + Area Rug",  es: "Dormitorio: Alfombra o Madera de Ingeniería + Tapete" },
                    text: {
                        en: "Bedroom flooring in Pennsylvania benefits from thermal comfort and acoustic softness. Carpet with good-quality pad remains the warmest, quietest, most comfortable choice for bedrooms and is appropriate in climate-controlled rooms with no moisture risk. For homeowners who prefer hard surface, engineered hardwood with a large area rug achieves similar thermal and acoustic qualities with greater durability and easier maintenance. LVP in bedrooms is durable but cooler underfoot than either alternative.",
                        es: "El piso de los dormitorios en Pennsylvania se beneficia del confort térmico y la suavidad acústica. La alfombra con un relleno de buena calidad sigue siendo la opción más cálida, silenciosa y cómoda para los dormitorios y es apropiada en habitaciones climatizadas sin riesgo de humedad. Para los propietarios que prefieren superficie dura, la madera de ingeniería con un tapete grande logra cualidades térmicas y acústicas similares con mayor durabilidad y mantenimiento más fácil. El LVP en dormitorios es duradero pero más fresco bajo los pies que cualquiera de las dos alternativas."
                    }
                },
                room5: {
                    title: { en: "Entryway / Mudroom: Porcelain Tile (matte, high DCOF)",  es: "Entrada / Cuarto de Barro: Cerámica Porcelánica (mate, alto DCOF)" },
                    text: {
                        en: "Entryways in Pennsylvania take more abuse per square foot than any other area of the home. Road salt, wet footwear, mud, snow, and tracked-in grit create conditions that deteriorate most flooring rapidly. Porcelain tile at matte or textured finish with a DCOF of 0.55 or higher is the appropriate specification. It handles moisture, resists salt damage, and can be cleaned without damage. All other flooring types underperform in Pennsylvania entryway conditions over time.",
                        es: "Las entradas en Pennsylvania reciben más maltrato por pie cuadrado que cualquier otra área del hogar. La sal de carretera, el calzado mojado, el barro, la nieve y la arena arrastrada crean condiciones que deterioran la mayoría de los pisos rápidamente. La cerámica porcelánica con acabado mate o texturizado con un DCOF de 0.55 o superior es la especificación apropiada. Maneja la humedad, resiste el daño de la sal y puede limpiarse sin daño. Todos los demás tipos de pisos tienen un rendimiento inferior en las condiciones de entrada de Pennsylvania con el tiempo."
                    }
                },
                room6: {
                    title: { en: "Basement: LVP Only — Wood Products Not Recommended",  es: "Sótano: Solo LVP — Productos de Madera No Recomendados" },
                    text: {
                        en: "Pennsylvania basements are below-grade environments with consistently elevated humidity, potential for moisture intrusion events, and temperature swings that exceed the tolerance of wood flooring products. LVP is the correct choice for finished Pennsylvania basements — it handles moisture, installs over concrete without concerns, and provides comfortable, attractive flooring at $4–$9 per square foot installed. Porcelain tile is also appropriate but colder and harder underfoot. Wood products and carpet in Pennsylvania basements are maintenance and mold problems waiting to happen.",
                        es: "Los sótanos de Pennsylvania son entornos bajo nivel del suelo con humedad consistentemente elevada, potencial de intrusiones de agua y variaciones de temperatura que superan la tolerancia de los productos de piso de madera. El LVP es la elección correcta para los sótanos terminados de Pennsylvania — maneja la humedad, se instala sobre concreto sin problemas y proporciona un piso cómodo y atractivo a $4–$9 por pie cuadrado instalado. La cerámica porcelánica también es apropiada pero más fría y dura bajo los pies. Los productos de madera y la alfombra en los sótanos de Pennsylvania son problemas de mantenimiento y moho esperando ocurrir."
                    }
                },

                // Section 9 — FAQ
                section9: {
                    badge: { en: "FAQ",                             es: "PREGUNTAS FRECUENTES" },
                    title: { en: "Frequently Asked Questions",      es: "Preguntas Frecuentes" }
                },

                faq1: {
                    q: { en: "What is the best flooring for Pennsylvania homes?",  es: "¿Cuál es el mejor piso para los hogares de Pennsylvania?" },
                    a: {
                        en: "LVP (luxury vinyl plank) at 12 mil wear layer minimum is the most versatile choice for Pennsylvania's climate — 100% waterproof, dimensionally stable through humidity swings, appropriate for all areas including basements, and priced at $4–$9 per square foot installed. For kitchens, bathrooms, and entryways, porcelain tile is the highest-performance choice. For living rooms where real wood appearance and refinishability are priorities, engineered hardwood at 4mm+ veneer thickness outperforms solid hardwood in Pennsylvania's humidity environment.",
                        es: "El LVP (vinilo de lujo en tablón) con una capa de desgaste mínima de 12 mil es la opción más versátil para el clima de Pennsylvania — 100% impermeable, dimensionalmente estable ante las variaciones de humedad, apropiado para todas las áreas incluyendo sótanos y con un precio de $4–$9 por pie cuadrado instalado. Para cocinas, baños y entradas, la cerámica porcelánica es la opción de mayor rendimiento. Para salas de estar donde la apariencia de madera real y la reacababilidad son prioridades, la madera de ingeniería con un grosor de chapa de 4mm+ supera a la madera sólida en el entorno de humedad de Pennsylvania."
                    }
                },
                faq2: {
                    q: { en: "Does hardwood flooring hold up in Pennsylvania winters?",  es: "¿El piso de madera aguanta los inviernos de Pennsylvania?" },
                    a: {
                        en: "Solid hardwood requires humidity control between 35–55% RH year-round per NWFA guidelines. Pennsylvania homes without whole-house humidification routinely see 20–30% RH in winter, causing seasonal gapping in solid hardwood. Engineered hardwood handles Pennsylvania's climate significantly better due to its cross-ply core construction. If you want genuine wood flooring in Pennsylvania, engineered hardwood with 4mm+ veneer is the practical choice. Solid hardwood is viable only with whole-house humidity control — and never below grade.",
                        es: "La madera sólida requiere control de humedad entre 35–55% HR durante todo el año según las directrices de la NWFA. Los hogares de Pennsylvania sin humidificación para toda la casa ven rutinariamente una HR de 20–30% en invierno, causando huecos estacionales en la madera sólida. La madera de ingeniería maneja el clima de Pennsylvania significativamente mejor debido a su construcción de núcleo de capas cruzadas. Si deseas piso de madera genuino en Pennsylvania, la madera de ingeniería con chapa de 4mm+ es la opción práctica. La madera sólida solo es viable con control de humedad para toda la casa — y nunca bajo nivel del suelo."
                    }
                },
                faq3: {
                    q: { en: "How much does flooring installation cost in Pennsylvania in 2025?",  es: "¿Cuánto cuesta la instalación de pisos en Pennsylvania en 2025?" },
                    a: {
                        en: "In the Hanover, York, and Gettysburg market in 2025: LVP installs at $4–$9 per square foot (most projects $5–$7); engineered hardwood at $8–$22 per square foot; solid hardwood at $10–$22 per square foot; porcelain tile at $8–$18 per square foot; carpet at $3–$8 per square foot. These include material and installation labor. South-Central Pennsylvania pricing typically runs 8–12% below Philadelphia metro rates. Subfloor remediation, if needed, adds $1.50–$4 per square foot.",
                        es: "En el mercado de Hanover, York y Gettysburg en 2025: el LVP se instala a $4–$9 por pie cuadrado (la mayoría de los proyectos $5–$7); la madera de ingeniería a $8–$22 por pie cuadrado; la madera sólida a $10–$22 por pie cuadrado; la cerámica porcelánica a $8–$18 por pie cuadrado; la alfombra a $3–$8 por pie cuadrado. Estos incluyen materiales y mano de obra de instalación. Los precios del Sur-Centro de Pennsylvania suelen ser un 8–12% inferiores a los del metro de Filadelfia. La remediación del subpiso, si es necesaria, agrega $1.50–$4 por pie cuadrado."
                    }
                },
                faq4: {
                    q: { en: "Is LVP good for Pennsylvania basements?",  es: "¿Es el LVP bueno para los sótanos de Pennsylvania?" },
                    a: {
                        en: "Yes — LVP is the recommended flooring for Pennsylvania basements. It installs directly over concrete, handles below-grade humidity and occasional moisture events without damage, and is 100% waterproof. At 12 mil wear layer minimum, it provides 20–25 years of service in typical basement conditions. Solid hardwood and carpet are not appropriate for Pennsylvania basements. Engineered hardwood can be used below grade with a proper vapor barrier but is more expensive and offers less moisture protection than LVP.",
                        es: "Sí — el LVP es el piso recomendado para los sótanos de Pennsylvania. Se instala directamente sobre el concreto, maneja la humedad bajo nivel del suelo y los eventos ocasionales de humedad sin daño, y es 100% impermeable. Con una capa de desgaste mínima de 12 mil, proporciona 20–25 años de servicio en condiciones típicas de sótano. La madera sólida y la alfombra no son apropiadas para los sótanos de Pennsylvania. La madera de ingeniería se puede usar bajo nivel del suelo con una barrera de vapor adecuada, pero es más costosa y ofrece menos protección contra la humedad que el LVP."
                    }
                },
                faq5: {
                    q: { en: "How do I solve the cold tile floor problem in Pennsylvania winters?",  es: "¿Cómo resuelvo el problema del piso de cerámica frío en los inviernos de Pennsylvania?" },
                    a: {
                        en: "Electric radiant heat mats installed beneath tile are the most effective solution — they cost $8–$15 per square foot installed on top of tile cost and are controlled by a programmable thermostat. The mats warm the tile to a specified temperature on a schedule, so the bathroom or kitchen floor is warm before you step onto it in the morning. This is one of the most consistently praised upgrades in our bathroom renovation projects. For existing tile, area rugs provide a lower-cost partial solution but do not address the underlying thermal issue the way radiant heat does.",
                        es: "Las alfombrillas de calor radiante eléctrico instaladas bajo la cerámica son la solución más efectiva — cuestan $8–$15 por pie cuadrado instalado sobre el costo de la cerámica y se controlan mediante un termostato programable. Las alfombrillas calientan la cerámica a una temperatura especificada según un horario, por lo que el piso del baño o la cocina está caliente antes de pisarlo por la mañana. Esta es una de las mejoras más consistentemente elogiadas en nuestros proyectos de renovación de baños. Para la cerámica existente, los tapetes de área proporcionan una solución parcial de menor costo pero no abordan el problema térmico subyacente de la misma manera que el calor radiante."
                    }
                },

                // Article footer
                footer: {
                    sources: {
                        title: { en: "References & Citations",  es: "Referencias y Citas" }
                    },
                    cite1: {
                        en: "National Wood Flooring Association (NWFA). (2024). Hardwood Flooring Installation Guidelines — Humidity and Moisture. nwfa.org",
                        es: "Asociación Nacional de Pisos de Madera (NWFA). (2024). Directrices de Instalación de Pisos de Madera Dura — Humedad y Humedad. nwfa.org"
                    },
                    cite2: {
                        en: "Remodeling Magazine. (2024). Cost vs. Value Report 2024 — Mid-Atlantic Region. remodeling.hw.net",
                        es: "Remodeling Magazine. (2024). Informe de Costo vs. Valor 2024 — Región del Atlántico Medio. remodeling.hw.net"
                    },
                    cite3: {
                        en: "Pennsylvania State Climatological Office. (2024). Climate Summary — Adams and York County. climate.psu.edu",
                        es: "Oficina Climatológica del Estado de Pennsylvania. (2024). Resumen Climático — Condados de Adams y York. climate.psu.edu"
                    },
                    cite4: {
                        en: "C Hawk Construction and Renovation LLC. (2025). Internal flooring project data — 2,000+ projects, Adams and York County PA, 2020–2025. HICPA PA190465.",
                        es: "C Hawk Construction and Renovation LLC. (2025). Datos internos de proyectos de pisos — más de 2,000 proyectos, Condados de Adams y York, PA, 2020–2025. HICPA PA190465."
                    },
                    tags: {
                        label: { en: "Topics:", es: "Temas:" }
                    },
                    tag1: { en: "Flooring",     es: "Pisos" },
                    tag2: { en: "LVP",          es: "LVP" },
                    tag3: { en: "Hardwood",     es: "Madera" },
                    tag4: { en: "Pennsylvania", es: "Pennsylvania" },
                    tag5: { en: "Cost Guide",   es: "Guía de Costos" }
                },

                // Sidebar
                sidebar: {
                    cta: {
                        badge:       { en: "PA190465 · 2,000+ FLOORS INSTALLED",       es: "PA190465 · MÁS DE 2,000 PISOS INSTALADOS" },
                        title:       { en: "Right Flooring for Your Rooms.",             es: "El Piso Correcto para Tus Habitaciones." },
                        text:        { en: "We assess subfloor conditions, humidity, traffic patterns, and your budget — then recommend what actually performs in Pennsylvania. Free written estimate. No guessing.", es: "Evaluamos las condiciones del subpiso, la humedad, los patrones de tráfico y tu presupuesto — luego recomendamos lo que realmente funciona en Pennsylvania. Estimación escrita gratuita. Sin conjeturas." },
                        stat1:       { en: "Floors Installed", es: "Pisos Instalados" },
                        stat2:       { en: "Stars",            es: "Estrellas" },
                        stat3:       { en: "Estimate",         es: "Estimación" },
                        btnEstimate: { en: "Get Free Estimate", es: "Obtener Estimación Gratuita" }
                    },
                    facts: {
                        title: { en: "PA Flooring Quick Facts",  es: "Datos Rápidos sobre Pisos en PA" }
                    },
                    fact1: { en: "PA humidity swings 40–55 points seasonally",      es: "La humedad en PA varía 40–55 puntos estacionalmente" },
                    fact2: { en: "LVP 12 mil+ is recommended minimum in PA",        es: "LVP 12 mil+ es el mínimo recomendado en PA" },
                    fact3: { en: "Solid hardwood needs humidity control 35–55% RH", es: "La madera sólida necesita control de humedad 35–55% HR" },
                    fact4: { en: "Basements: LVP only — no wood, no carpet",        es: "Sótanos: solo LVP — sin madera, sin alfombra" },
                    fact5: { en: "Radiant heat solves cold tile — $8–$15/sq ft",    es: "El calor radiante resuelve la cerámica fría — $8–$15/pie²" },
                    areas: {
                        title: { en: "We Serve", es: "Atendemos" }
                    },
                    area1: { en: "Hanover, PA",     es: "Hanover, PA" },
                    area2: { en: "Gettysburg, PA",  es: "Gettysburg, PA" },
                    area3: { en: "York, PA",        es: "York, PA" },
                    area4: { en: "East Berlin, PA", es: "East Berlin, PA" },
                    area5: { en: "Cumberland, MD",  es: "Cumberland, MD" }
                },

                // Inline CTA
                inlineCta: {
                    badge: { en: "PA190465 · 2,000+ FLOORS · FREE ESTIMATE",  es: "PA190465 · MÁS DE 2,000 PISOS · ESTIMACIÓN GRATUITA" },
                    title: {
                        part1:  { en: "Pennsylvania Floors Need Pennsylvania Knowledge. ", es: "Los Pisos de Pennsylvania Necesitan Conocimiento de Pennsylvania. " },
                        accent: { en: "We Have Both.",                                      es: "Nosotros Tenemos Ambos." }
                    },
                    text: {
                        en: "2,000+ flooring projects in Adams and York County. We know what survives the winters, what fails in the basements, and what your subfloor needs before installation. Get a free written estimate that accounts for your actual conditions — not a number guessed from a national price list.",
                        es: "Más de 2,000 proyectos de pisos en los Condados de Adams y York. Sabemos qué sobrevive los inviernos, qué falla en los sótanos y qué necesita tu subpiso antes de la instalación. Obtén una estimación escrita gratuita que tenga en cuenta tus condiciones reales — no un número adivinado de una lista de precios nacional."
                    },
                    btn1:   { en: "Get Free Written Estimate",    es: "Obtener Estimación Escrita Gratuita" },
                    btn2:   { en: "(443) 858-0904 — Call Now",    es: "(443) 858-0904 — Llama Ahora" },
                    trust1: { en: "HICPA Licensed PA190465",      es: "Licencia HICPA PA190465" },
                    trust2: { en: "5.0 Star Rating",              es: "Calificación 5.0 Estrellas" },
                    trust3: { en: "Written Contracts Always",     es: "Contratos Escritos Siempre" }
                }

            },// ── SERVICE PAGE — CARPENTRY (carpentry.html) ─────────────────────────────
            carpentry: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                          es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Built Right.",                                                                                                                           es: "Construido Bien." },
                    titleAccent: { en: "Built to Last.",                                                                                                                         es: "Construido para Durar." },
                    description: { en: "From structural framing that holds the home together to finish carpentry that defines how it looks — C Hawk delivers craftsmanship that stands up to Pennsylvania's demands.", es: "Desde la estructura que sostiene el hogar hasta la carpintería de acabado que define su apariencia — C Hawk entrega artesanía que resiste las exigencias de Pennsylvania." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                      es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                      es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                             es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                         es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                         es: "Estimaciones Gratis" }
                },

                // Before/after gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                                                                           es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                                                                               es: "Antes y" },
                    titleAccent: { en: "After",                                                                                                                                  es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                                                                    es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                                                                 es: "Antes" },
                    after:       { en: "After",                                                                                                                                  es: "Después" },
                    caption1:    { en: "Structural framing — Hanover, PA",                                                                                                       es: "Estructura de madera — Hanover, PA" },
                    caption2:    { en: "Custom woodwork — York, PA",                                                                                                             es: "Carpintería personalizada — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "WHAT WE BUILD",                                                                                                                          es: "LO QUE CONSTRUIMOS" },
                    title:       { en: "Every Type of",                                                                                                                          es: "Todo Tipo de" },
                    titleAccent: { en: "Wood Work",                                                                                                                              es: "Trabajo en Madera" },
                    subtitle:    { en: "From the bones of a structure to the detail that defines a room — one licensed team handles it all.",                                     es: "Desde la estructura de una construcción hasta el detalle que define una habitación — un equipo licenciado lo maneja todo." },

                    c1Title: { en: "Structural Framing",        es: "Estructura de Madera" },
                    c1Desc:  { en: "The structural backbone of every renovation or new construction. Walls, floors, ceilings, and roof framing built to code and built to last in Pennsylvania conditions.", es: "La columna vertebral estructural de toda renovación o nueva construcción. Paredes, pisos, techos y estructura de cubierta construidos según código y para durar en las condiciones de Pennsylvania." },
                    c1s1:    { en: "Wall framing & load-bearing work",    es: "Estructura de paredes y trabajo de carga" },
                    c1s2:    { en: "Floor & ceiling joist systems",       es: "Sistemas de vigas de piso y techo" },
                    c1s3:    { en: "Roof framing & rafters",              es: "Estructura de cubierta y cabrios" },
                    c1s4:    { en: "Door & window rough openings",        es: "Aberturas brutas de puertas y ventanas" },

                    c2Title: { en: "Custom Woodwork",           es: "Carpintería Personalizada" },
                    c2Desc:  { en: "Built-ins, shelving, custom cabinetry, mantels, and unique wood features designed and built for your specific space — not catalog pieces forced to fit.", es: "Empotrados, estanterías, gabinetes personalizados, chimeneas y elementos únicos en madera diseñados y construidos para tu espacio específico — no piezas de catálogo forzadas." },
                    c2s1:    { en: "Built-in shelving & bookcases",       es: "Estanterías y librerías empotradas" },
                    c2s2:    { en: "Custom cabinet installation",         es: "Instalación de gabinetes personalizados" },
                    c2s3:    { en: "Fireplace mantels",                   es: "Repisa de chimenea" },
                    c2s4:    { en: "Wainscoting & paneling",              es: "Lambriz y paneles decorativos" },

                    c3Title: { en: "Finish Carpentry",          es: "Carpintería de Acabado" },
                    c3Desc:  { en: "The final layer that defines how a space looks and feels. Trim, molding, baseboards, casing, and door and window installation done with the precision finish work demands.", es: "La capa final que define cómo luce y se siente un espacio. Molduras, zócalos, marcos y la instalación de puertas y ventanas con la precisión que exigen los acabados." },
                    c3s1:    { en: "Baseboard & crown molding",           es: "Zócalos y molduras de corona" },
                    c3s2:    { en: "Door & window casing",                es: "Marcos de puertas y ventanas" },
                    c3s3:    { en: "Interior door installation",          es: "Instalación de puertas interiores" },
                    c3s4:    { en: "Window installation & trim",          es: "Instalación de ventanas y molduras" },

                    c4Title: { en: "Handrails & Stairs",        es: "Pasamanos y Escaleras" },
                    c4Desc:  { en: "Stair systems, handrails, balusters, and newel posts built to code and designed to complement your home — functional safety that also looks right.", es: "Sistemas de escaleras, pasamanos, balaustres y postes de newel construidos según código y diseñados para complementar tu hogar — seguridad funcional que también luce bien." },
                    c4s1:    { en: "Handrail installation",               es: "Instalación de pasamanos" },
                    c4s2:    { en: "Baluster & newel post work",          es: "Trabajo de balaustres y postes de newel" },
                    c4s3:    { en: "Stair tread replacement",             es: "Reemplazo de huellas de escalera" },
                    c4s4:    { en: "Code-compliant construction",         es: "Construcción según código" },

                    ctaText: { en: "Have a specific carpentry project in mind? Call us — we'll tell you exactly what it takes.", es: "¿Tienes un proyecto de carpintería específico en mente? Llámanos — te decimos exactamente qué se necesita." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                        es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process steps
                process: {
                    badge:       { en: "HOW IT WORKS",     es: "CÓMO FUNCIONA" },
                    title:       { en: "Precision Built.", es: "Construido con Precisión." },
                    titleAccent: { en: "Every Step.",      es: "Cada Paso." },

                    s1Title: { en: "Assess & Measure",    es: "Evaluar y Medir" },
                    s1Desc:  { en: "We visit your site, assess the scope, take precise measurements, and identify any structural or subfloor considerations before a single board is cut.", es: "Visitamos tu sitio, evaluamos el alcance, tomamos medidas precisas e identificamos cualquier consideración estructural antes de cortar una sola tabla." },

                    s2Title: { en: "Written Proposal",    es: "Propuesta Escrita" },
                    s2Desc:  { en: "You receive an itemized written proposal with materials, labor, timeline, and fixed price. No vague estimates — everything is documented before work begins.", es: "Recibes una propuesta escrita detallada con materiales, mano de obra, cronograma y precio fijo. Sin estimaciones vagas — todo está documentado antes de comenzar." },

                    s3Title: { en: "Skilled Execution",   es: "Ejecución Experta" },
                    s3Desc:  { en: "Cesar and the C Hawk crew execute on schedule with the precision that finish and structural carpentry demand. Clean work site, clear communication throughout.", es: "Cesar y el equipo de C Hawk ejecutan según lo programado con la precisión que exige la carpintería estructural y de acabado. Sitio limpio, comunicación clara en todo momento." },

                    s4Title: { en: "Final Inspection",    es: "Inspección Final" },
                    s4Desc:  { en: "Every joint, every cut, every fit is reviewed with you. If it isn't right, we fix it before we close the project. Quality is not negotiable.", es: "Cada junta, cada corte, cada ajuste se revisa contigo. Si algo no está bien, lo corregimos antes de cerrar el proyecto. La calidad no es negociable." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"The framing work C Hawk did during our addition was impeccable. Every wall is plumb, every corner is square. You can tell these guys actually know what they're doing. Wouldn't use anyone else.\"", es: "\"El trabajo de estructura que hizo C Hawk durante nuestra ampliación fue impecable. Cada pared aplomada, cada esquina cuadrada. Se nota que realmente saben lo que hacen. No usaría a nadie más.\"" },
                    t1Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" },

                    t2Text:     { en: "\"They built custom built-ins for our living room that look like they came with the house. The fit, the finish, the detail — exceptional. C Hawk takes real pride in their work.\"", es: "\"Construyeron empotrados personalizados para nuestra sala que parecen haber venido con la casa. El ajuste, el acabado, el detalle — excepcional. C Hawk se enorgullece de verdad de su trabajo.\"" },
                    t2Location: { en: "Hanover, PA",        es: "Hanover, PA" },

                    t3Text:     { en: "\"New handrail and stair system — looks beautiful and solid. They were in and out in two days, no mess, no stress. These are professionals in every sense of the word.\"", es: "\"Nuevo pasamanos y sistema de escalera — luce hermoso y sólido. Entraron y salieron en dos días, sin desorden, sin estrés. Son profesionales en todo el sentido de la palabra.\"" },
                    t3Location: { en: "York, PA",           es: "York, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",  es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                          es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready to Build",                                                                                                                         es: "¿Listo para Construir" },
                    titleAccent: { en: "Something That Lasts?",                                                                                                                  es: "Algo que Dure?" },
                    text:        { en: "Call us or request a free written estimate online. We'll assess your project, give you a clear scope and price, and deliver the craftsmanship your home deserves.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluaremos tu proyecto, te daremos un alcance y precio claro, y entregaremos la artesanía que tu hogar merece." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                             es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                      es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                          es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                          es: "Estimación Gratis" }
                }

            }, // end carpentry
            // ── SERVICE PAGE — DRYWALL (drywall.html) ────────────────────────────────
            drywall: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                                    es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Smooth Walls.",                                                                                                                                   es: "Paredes Perfectas." },
                    titleAccent: { en: "Perfect Finish.",                                                                                                                                 es: "Acabado Impecable." },
                    description: { en: "From new construction hang to seamless repair — C Hawk delivers drywall and ceiling work that holds up to inspection and looks flawless under any light.", es: "Desde la instalación en nueva construcción hasta la reparación sin costuras — C Hawk entrega trabajo de drywall y techo que supera cualquier inspección y luce impecable bajo cualquier luz." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                               es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                               es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                                      es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                                  es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                                  es: "Estimaciones Gratis" }
                },

                // Before/after gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                          es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                              es: "Antes y" },
                    titleAccent: { en: "After",                                                                                 es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                   es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                es: "Antes" },
                    after:       { en: "After",                                                                                 es: "Después" },
                    caption1:    { en: "Drywall installation & finish — Hanover, PA",                                           es: "Instalación y acabado de drywall — Hanover, PA" },
                    caption2:    { en: "Ceiling work — York, PA",                                                               es: "Trabajo de techo — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "FULL SERVICE SCOPE",                                                                    es: "ALCANCE COMPLETO DEL SERVICIO" },
                    title:       { en: "Every Surface,",                                                                        es: "Cada Superficie," },
                    titleAccent: { en: "Done Right",                                                                            es: "Hecha Bien" },
                    subtitle:    { en: "Installation, finishing, repair, or texture — one licensed crew handles it all so every surface is paint-ready and flawless.", es: "Instalación, acabado, reparación o textura — un equipo licenciado lo maneja todo para que cada superficie quede lista para pintar e impecable." },

                    c1Title: { en: "Drywall Installation",    es: "Instalación de Drywall" },
                    c1Desc:  { en: "Full hang and finish for new construction, additions, and gut renovations. Standard and moisture-resistant board, properly fastened, taped, and finished to paint-ready smoothness.", es: "Instalación y acabado completo para nueva construcción, ampliaciones y renovaciones totales. Panel estándar y resistente a la humedad, correctamente fijado, cintado y terminado con suavidad lista para pintar." },
                    c1s1:    { en: "New construction hang",           es: "Instalación en nueva construcción" },
                    c1s2:    { en: "Moisture-resistant board",        es: "Panel resistente a la humedad" },
                    c1s3:    { en: "Taping & mudding",                es: "Cintado y masillado" },
                    c1s4:    { en: "Level 4 & 5 finish",              es: "Acabado nivel 4 y 5" },

                    c2Title: { en: "Ceiling Work",            es: "Trabajo de Techo" },
                    c2Desc:  { en: "Flat ceilings, coffered ceilings, tray ceilings, and drop ceilings — installed level and finished clean. We handle the scope from simple replacement to full custom ceiling builds.", es: "Techos planos, artesonados, de bandeja y suspendidos — instalados nivelados y con acabado limpio. Manejamos desde el reemplazo simple hasta construcciones de techo personalizadas." },
                    c2s1:    { en: "Flat ceiling installation",       es: "Instalación de techo plano" },
                    c2s2:    { en: "Coffered & tray ceilings",        es: "Techos artesonados y de bandeja" },
                    c2s3:    { en: "Drop ceiling systems",            es: "Sistemas de techo suspendido" },
                    c2s4:    { en: "Ceiling replacement",             es: "Reemplazo de techo" },

                    c3Title: { en: "Repair & Patching",       es: "Reparación y Parchado" },
                    c3Desc:  { en: "Holes, cracks, water damage, and failed tape — we patch and blend so the repair disappears. No visible seams, no texture mismatch, no evidence anything was ever there.", es: "Agujeros, grietas, daños por agua y cinta fallida — parcheamos y nivelamos para que la reparación desaparezca. Sin costuras visibles, sin diferencia de textura, sin evidencia de que algo estuvo ahí." },
                    c3s1:    { en: "Hole & crack repair",             es: "Reparación de agujeros y grietas" },
                    c3s2:    { en: "Water damage repair",             es: "Reparación de daños por agua" },
                    c3s3:    { en: "Seam & tape repair",              es: "Reparación de costuras y cinta" },
                    c3s4:    { en: "Texture matching",                es: "Igualación de textura" },

                    c4Title: { en: "Texture & Soundproof",    es: "Textura y Aislamiento Acústico" },
                    c4Desc:  { en: "Smooth, orange peel, knockdown, skip trowel — applied consistently across every surface. Plus soundproof drywall installation for bedrooms, offices, and shared walls that need acoustic separation.", es: "Liso, cáscara de naranja, knockdown, skip trowel — aplicado de forma uniforme en cada superficie. Además, instalación de drywall acústico para habitaciones, oficinas y paredes compartidas que necesitan separación acústica." },
                    c4s1:    { en: "Orange peel & knockdown",         es: "Cáscara de naranja y knockdown" },
                    c4s2:    { en: "Skip trowel texture",             es: "Textura skip trowel" },
                    c4s3:    { en: "Smooth skim coat",                es: "Capa de alisado suave" },
                    c4s4:    { en: "Soundproof drywall",              es: "Drywall acústico" },

                    ctaText: { en: "Have a drywall repair or new installation? Call us — we'll give you an honest scope and price.", es: "¿Tienes una reparación de drywall o una nueva instalación? Llámanos — te damos un alcance y precio honesto." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                          es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process steps
                process: {
                    badge:       { en: "HOW IT WORKS",        es: "CÓMO FUNCIONA" },
                    title:       { en: "Clean Process.",      es: "Proceso Limpio." },
                    titleAccent: { en: "Flawless Result.",    es: "Resultado Impecable." },

                    s1Title: { en: "Site Assessment",         es: "Evaluación del Sitio" },
                    s1Desc:  { en: "We assess the space, identify the finish level needed, note any moisture or structural conditions, and give you an accurate written estimate before any material is ordered.", es: "Evaluamos el espacio, identificamos el nivel de acabado necesario, anotamos cualquier condición de humedad o estructural y te damos una estimación escrita precisa antes de pedir cualquier material." },

                    s2Title: { en: "Written Proposal",        es: "Propuesta Escrita" },
                    s2Desc:  { en: "Board type, finish level, timeline, and fixed price — all in writing. You know exactly what you're getting and what it costs before we touch a wall.", es: "Tipo de panel, nivel de acabado, cronograma y precio fijo — todo por escrito. Sabes exactamente qué obtendrás y cuánto cuesta antes de que toquemos una pared." },

                    s3Title: { en: "Hang, Tape & Finish",     es: "Instalar, Cintar y Acabar" },
                    s3Desc:  { en: "Board goes up right, tape and mud are applied in proper coats with full drying time between each. No shortcuts on the finish — every surface is sanded and ready for paint.", es: "El panel se instala correctamente, la cinta y la masilla se aplican en capas adecuadas con tiempo de secado completo entre cada una. Sin atajos en el acabado — cada superficie es lijada y lista para pintar." },

                    s4Title: { en: "Final Walkthrough",       es: "Recorrido Final" },
                    s4Desc:  { en: "We inspect every surface together — checking for any imperfections under raking light. If anything isn't right, we address it before the project closes.", es: "Inspeccionamos cada superficie juntos — verificando cualquier imperfección bajo luz rasante. Si algo no está bien, lo corregimos antes de cerrar el proyecto." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"The drywall finish is absolutely perfect — you cannot see a single seam or imperfection. C Hawk took their time and did it right. The walls look better than new construction.\"", es: "\"El acabado del drywall es absolutamente perfecto — no se ve ni una sola costura ni imperfección. C Hawk se tomó su tiempo y lo hizo bien. Las paredes lucen mejor que una construcción nueva.\"" },
                    t1Location: { en: "Hanover, PA",        es: "Hanover, PA" },

                    t2Text:     { en: "\"They patched water damage in three rooms and you literally cannot tell where the repairs are. Matched the existing texture perfectly. Fast, clean, and professional every step of the way.\"", es: "\"Repararon daños por agua en tres habitaciones y literalmente no puedes saber dónde están las reparaciones. Igualaron la textura existente a la perfección. Rápidos, limpios y profesionales en cada paso.\"" },
                    t2Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" },

                    t3Text:     { en: "\"Full basement drywall and ceiling installation — done ahead of schedule. The finish level they delivered was way above what I expected at this price point. Will call them again without hesitation.\"", es: "\"Instalación completa de drywall y techo en el sótano — terminada antes del cronograma. El nivel de acabado que entregaron estuvo muy por encima de lo que esperaba a ese precio. Los llamaré de nuevo sin dudarlo.\"" },
                    t3Location: { en: "York, PA",           es: "York, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",   es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                                   es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready for Walls",                                                                                                                                 es: "¿Listo para Paredes" },
                    titleAccent: { en: "That Look Perfect?",                                                                                                                              es: "que Luzcan Perfectas?" },
                    text:        { en: "Call us or request a free written estimate online. We assess the job, give you a clear scope and price, and deliver finish work that holds up to the closest inspection.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluamos el trabajo, te damos un alcance y precio claro, y entregamos un acabado que resiste la inspección más minuciosa." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                                      es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                               es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                                   es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                                   es: "Estimación Gratis" }
                }

            }, // end drywall
            // ── SERVICE PAGE — FLOORING (flooring.html) ───────────────────────────────
            flooring: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                                        es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "The Right Floor",                                                                                                                                     es: "El Piso Correcto" },
                    titleAccent: { en: "For Every Room.",                                                                                                                                     es: "Para Cada Habitación." },
                    description: { en: "Hardwood, LVP, ceramic tile, carpet — C Hawk installs the right material for Pennsylvania's climate and your specific room. Every floor starts with a proper subfloor assessment.", es: "Madera dura, LVP, cerámica, alfombra — C Hawk instala el material correcto para el clima de Pennsylvania y tu habitación específica. Cada piso comienza con una evaluación adecuada del subpiso." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                                   es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                   es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                                          es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                                      es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                                      es: "Estimaciones Gratis" }
                },

                // Gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                              es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                                  es: "Antes y" },
                    titleAccent: { en: "After",                                                                                     es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                       es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                    es: "Antes" },
                    after:       { en: "After",                                                                                     es: "Después" },
                    caption1:    { en: "LVP installation — Hanover, PA",                                                            es: "Instalación de LVP — Hanover, PA" },
                    caption2:    { en: "Ceramic tile installation — York, PA",                                                      es: "Instalación de cerámica — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "WHAT WE INSTALL",                                                                           es: "LO QUE INSTALAMOS" },
                    title:       { en: "Every Material,",                                                                           es: "Cada Material," },
                    titleAccent: { en: "Every Room",                                                                                es: "Cada Habitación" },
                    subtitle:    { en: "We recommend the right flooring for PA's climate and your specific room — then install it correctly, starting with the subfloor.", es: "Recomendamos el piso correcto para el clima de PA y tu habitación específica — luego lo instalamos correctamente, comenzando con el subpiso." },

                    c1Title: { en: "Hardwood & Engineered Wood",     es: "Madera Dura y Madera Ingeniería" },
                    c1Desc:  { en: "Solid and engineered hardwood installation for living rooms, dining rooms, and bedrooms. We acclimate material properly for PA's humidity swings before any board goes down.", es: "Instalación de madera dura sólida e ingeniería para salas, comedores y habitaciones. Aclimatamos el material correctamente para las variaciones de humedad de PA antes de instalar cualquier tabla." },
                    c1s1:    { en: "Solid hardwood installation",            es: "Instalación de madera dura sólida" },
                    c1s2:    { en: "Engineered hardwood (4mm+ veneer)",      es: "Madera ingeniería (chapa 4mm+)" },
                    c1s3:    { en: "Proper material acclimation",            es: "Aclimatación adecuada del material" },
                    c1s4:    { en: "Nail, glue or float methods",            es: "Métodos clavado, pegado o flotante" },

                    c2Title: { en: "Luxury Vinyl Plank (LVP)",       es: "Vinilo de Lujo (LVP)" },
                    c2Desc:  { en: "100% waterproof and dimensionally stable through PA's 40–55 point humidity swings. Our top recommendation for basements, kitchens, and whole-home consistency at any budget.", es: "100% impermeable y dimensionalmente estable durante las variaciones de humedad de 40–55 puntos de PA. Nuestra principal recomendación para sótanos, cocinas y consistencia en todo el hogar con cualquier presupuesto." },
                    c2s1:    { en: "12 mil+ wear layer (recommended PA)",    es: "Capa de desgaste 12 mil+ (recomendado PA)" },
                    c2s2:    { en: "Basement & below-grade approved",        es: "Aprobado para sótanos y bajo nivel" },
                    c2s3:    { en: "Whole-home visual consistency",          es: "Consistencia visual en todo el hogar" },
                    c2s4:    { en: "Floating or glue-down install",          es: "Instalación flotante o pegada" },

                    c3Title: { en: "Ceramic & Porcelain Tile",       es: "Cerámica y Porcelana" },
                    c3Desc:  { en: "The highest-performance choice for kitchens, bathrooms, and entryways. Completely waterproof, indefinitely durable, and available with radiant heat underlayment for PA winters.", es: "La opción de mayor rendimiento para cocinas, baños y entradas. Completamente impermeable, duradera indefinidamente y disponible con substratos de calefacción radiante para los inviernos de PA." },
                    c3s1:    { en: "Kitchen & bathroom tile",                es: "Cerámica para cocina y baño" },
                    c3s2:    { en: "Slip-resistant DCOF-rated tile",         es: "Cerámica antideslizante certificada DCOF" },
                    c3s3:    { en: "Large format tile installation",         es: "Instalación de formato grande" },
                    c3s4:    { en: "Radiant heat mat option",                es: "Opción de estera de calor radiante" },

                    c4Title: { en: "Carpet & Subfloor Prep",         es: "Alfombra y Preparación de Subpiso" },
                    c4Desc:  { en: "Carpet installation for bedrooms, stairs, and offices — plus complete subfloor assessment and preparation for every project. We inspect what's underneath before anything goes on top.", es: "Instalación de alfombra para habitaciones, escaleras y oficinas — más evaluación y preparación completa del subpiso para cada proyecto. Inspeccionamos lo que hay debajo antes de instalar nada encima." },
                    c4s1:    { en: "Bedroom & stair carpet",                 es: "Alfombra para habitaciones y escaleras" },
                    c4s2:    { en: "Quality pad selection",                  es: "Selección de relleno de calidad" },
                    c4s3:    { en: "Subfloor inspection & repair",           es: "Inspección y reparación de subpiso" },
                    c4s4:    { en: "Old floor removal & disposal",           es: "Retiro y disposición del piso viejo" },

                    ctaText: { en: "Not sure which flooring is right for your room? Call us — we'll walk through the options with you for free.", es: "¿No sabes qué piso es el adecuado para tu habitación? Llámanos — revisaremos las opciones contigo gratis." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                                         es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process
                process: {
                    badge:       { en: "HOW IT WORKS",          es: "CÓMO FUNCIONA" },
                    title:       { en: "Installed Right.",       es: "Instalado Bien." },
                    titleAccent: { en: "Lasts for Decades.",     es: "Dura Décadas." },

                    s1Title: { en: "Room & Subfloor Assessment",  es: "Evaluación de Habitación y Subpiso" },
                    s1Desc:  { en: "We assess humidity levels, subfloor condition, levelness, and any moisture risk — then recommend the right material for your specific room and PA climate conditions.", es: "Evaluamos los niveles de humedad, la condición del subpiso, la nivelación y cualquier riesgo de humedad — luego recomendamos el material correcto para tu habitación específica y las condiciones climáticas de PA." },

                    s2Title: { en: "Written Proposal",            es: "Propuesta Escrita" },
                    s2Desc:  { en: "Material type, square footage, subfloor work if needed, timeline, and fixed price — all in writing before we order a single plank or tile.", es: "Tipo de material, metros cuadrados, trabajo de subpiso si es necesario, cronograma y precio fijo — todo por escrito antes de pedir una sola tabla o azulejo." },

                    s3Title: { en: "Prep & Installation",         es: "Preparación e Instalación" },
                    s3Desc:  { en: "Old floor removed, subfloor leveled or repaired if needed, material acclimated, then installed with proper technique and expansion gaps. No shortcuts that show up six months later.", es: "Piso viejo retirado, subpiso nivelado o reparado si es necesario, material aclimatado, luego instalado con la técnica adecuada y espacios de expansión. Sin atajos que aparecen seis meses después." },

                    s4Title: { en: "Final Walkthrough",           es: "Recorrido Final" },
                    s4Desc:  { en: "We walk every room with you — checking transitions, edges, and any areas of concern. Site is left clean. If anything isn't right, we fix it before we leave.", es: "Recorremos cada habitación contigo — verificando transiciones, bordes y cualquier área de preocupación. El sitio queda limpio. Si algo no está bien, lo corregimos antes de irnos." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"LVP throughout the whole first floor — looks incredible. They found soft spots in the subfloor during prep that two other contractors missed entirely. Glad we chose C Hawk.\"", es: "\"LVP en todo el primer piso — luce increíble. Encontraron puntos blandos en el subpiso durante la preparación que dos contratistas anteriores no detectaron. Feliz de haber elegido C Hawk.\"" },
                    t1Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" },

                    t2Text:     { en: "\"Kitchen and bathroom tile — perfectly level, tight grout lines, zero lippage. They recommended the matte finish for the entryway and it was exactly the right call for winter. Exceptional work.\"", es: "\"Cerámica en cocina y baño — perfectamente nivelada, líneas de lechada ajustadas, cero escalones. Recomendaron el acabado mate para la entrada y fue exactamente la decisión correcta para el invierno. Trabajo excepcional.\"" },
                    t2Location: { en: "Hanover, PA",        es: "Hanover, PA" },

                    t3Text:     { en: "\"Engineered hardwood in the living room and dining room — stunning. They took the time to acclimate the wood properly and the result shows. No gaps after a full winter cycle. These guys know floors.\"", es: "\"Madera ingeniería en la sala y el comedor — impresionante. Se tomaron el tiempo de aclimatar la madera correctamente y el resultado lo muestra. Sin separaciones después de un ciclo de invierno completo. Estos chicos saben de pisos.\"" },
                    t3Location: { en: "York, PA",           es: "York, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",   es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                                       es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready for Floors",                                                                                                                                    es: "¿Listo para Pisos" },
                    titleAccent: { en: "That Last 5+ Years?",                                                                                                                                 es: "que Duren 5+ Años?" },
                    text:        { en: "Call us or request a free written estimate online. We assess your subfloor, recommend the right material for your rooms and PA climate, and install it correctly the first time.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluamos tu subpiso, recomendamos el material correcto para tus habitaciones y el clima de PA, y lo instalamos correctamente desde la primera vez." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                                          es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                   es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                                       es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                                       es: "Estimación Gratis" }
                }

            }, // end flooring
            // ── SERVICE PAGE — PAINTING (painting.html) ───────────────────────────────
            painting: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                                            es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Clean Lines.",                                                                                                                                            es: "Líneas Limpias." },
                    titleAccent: { en: "Flawless Finish.",                                                                                                                                        es: "Acabado Impecable." },
                    description: { en: "Interior, exterior, cabinets, trim — C Hawk preps every surface correctly and applies paint that lasts. No lap marks, no roller texture, no drips. Just a finish that looks right and holds up.", es: "Interior, exterior, gabinetes, molduras — C Hawk prepara cada superficie correctamente y aplica pintura que dura. Sin marcas de solape, sin textura de rodillo, sin goteos. Solo un acabado que luce bien y aguanta." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                                       es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                       es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                                              es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                                          es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                                          es: "Estimaciones Gratis" }
                },

                // Gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                                  es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                                      es: "Antes y" },
                    titleAccent: { en: "After",                                                                                         es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                           es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                        es: "Antes" },
                    after:       { en: "After",                                                                                         es: "Después" },
                    caption1:    { en: "Interior painting — Hanover, PA",                                                               es: "Pintura interior — Hanover, PA" },
                    caption2:    { en: "Exterior painting — York, PA",                                                                  es: "Pintura exterior — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "FULL SERVICE SCOPE",                                                                            es: "ALCANCE COMPLETO DEL SERVICIO" },
                    title:       { en: "Every Surface.",                                                                                es: "Cada Superficie." },
                    titleAccent: { en: "Done Clean.",                                                                                   es: "Hecha con Limpieza." },
                    subtitle:    { en: "We prep before we paint. Every project starts with proper surface repair, priming, and protection — so the finish looks right and lasts for years.", es: "Preparamos antes de pintar. Cada proyecto comienza con la reparación adecuada de la superficie, imprimación y protección — para que el acabado luzca bien y dure años." },

                    c1Title: { en: "Interior Painting",              es: "Pintura Interior" },
                    c1Desc:  { en: "Walls, ceilings, closets, stairwells — every room painted to a consistent finish. We protect floors and furniture, cut clean lines at edges, and leave no lap marks or roller texture behind.", es: "Paredes, techos, closets, escaleras — cada habitación pintada con un acabado uniforme. Protegemos pisos y muebles, cortamos líneas limpias en los bordes y no dejamos marcas de solape ni textura de rodillo." },
                    c1s1:    { en: "Full room wall & ceiling painting",      es: "Pintura completa de paredes y techo" },
                    c1s2:    { en: "Clean edge cuts & crisp lines",          es: "Cortes de borde limpios y líneas nítidas" },
                    c1s3:    { en: "Surface repair before painting",         es: "Reparación de superficie antes de pintar" },
                    c1s4:    { en: "Full site protection & cleanup",         es: "Protección completa del sitio y limpieza" },

                    c2Title: { en: "Exterior Painting",              es: "Pintura Exterior" },
                    c2Desc:  { en: "Pennsylvania's freeze-thaw cycles demand premium acrylic latex with proper prep. We power wash, scrape, spot-prime, and apply two coats on every exterior surface for a finish that holds up season after season.", es: "Los ciclos de congelamiento y deshielo de Pennsylvania exigen látex acrílico premium con preparación adecuada. Lavamos a presión, raspamos, imprimamos puntos específicos y aplicamos dos capas en cada superficie exterior para un acabado que aguanta temporada tras temporada." },
                    c2s1:    { en: "Power wash & surface prep",              es: "Lavado a presión y preparación de superficie" },
                    c2s2:    { en: "Scraping & spot priming",                es: "Raspado e imprimación de puntos" },
                    c2s3:    { en: "Siding, fascia & soffit painting",       es: "Pintura de siding, fascia y soffit" },
                    c2s4:    { en: "Two-coat application standard",          es: "Aplicación estándar de dos capas" },

                    c3Title: { en: "Cabinet Painting & Refinishing", es: "Pintura y Acabado de Gabinetes" },
                    c3Desc:  { en: "Kitchen and bathroom cabinets refinished to a factory-smooth finish. Doors removed, sanded, primed and sprayed — not brushed — so every surface is smooth with no brush marks or drips.", es: "Gabinetes de cocina y baño reacabados con un acabado suave de fábrica. Puertas removidas, lijadas, imprimadas y rociadas — no con brocha — para que cada superficie sea suave sin marcas de brocha ni goteos." },
                    c3s1:    { en: "Door removal & spray finish",            es: "Remoción de puertas y acabado en spray" },
                    c3s2:    { en: "Full sand, prime & topcoat",             es: "Lijado, imprimación y capa final completos" },
                    c3s3:    { en: "Kitchen & bathroom cabinets",            es: "Gabinetes de cocina y baño" },
                    c3s4:    { en: "Color consultation included",            es: "Consulta de color incluida" },

                    c4Title: { en: "Trim, Doors & Millwork",         es: "Molduras, Puertas y Carpintería" },
                    c4Desc:  { en: "Baseboards, door frames, window casings, crown molding — painted sharp and clean. The detail work that separates a good paint job from a great one. We sand between coats on all trim surfaces.", es: "Zócalos, marcos de puertas, marcos de ventanas, moldura de corona — pintados nítidos y limpios. El trabajo de detalle que separa un buen trabajo de pintura de uno excelente. Lijamos entre capas en todas las superficies de moldura." },
                    c4s1:    { en: "Baseboards & door casings",              es: "Zócalos y marcos de puertas" },
                    c4s2:    { en: "Crown molding & window trim",            es: "Moldura de corona y moldura de ventanas" },
                    c4s3:    { en: "Interior & exterior doors",              es: "Puertas interiores y exteriores" },
                    c4s4:    { en: "Sand between coats on trim",             es: "Lijar entre capas en molduras" },

                    ctaText: { en: "Ready to refresh your space? Call us — we'll walk through the scope and give you a written price.", es: "¿Listo para renovar tu espacio? Llámanos — revisaremos el alcance y te daremos un precio por escrito." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                               es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process
                process: {
                    badge:       { en: "HOW IT WORKS",       es: "CÓMO FUNCIONA" },
                    title:       { en: "Prep First.",         es: "Preparación Primero." },
                    titleAccent: { en: "Paint That Lasts.",   es: "Pintura que Dura." },

                    s1Title: { en: "On-Site Assessment",      es: "Evaluación en el Sitio" },
                    s1Desc:  { en: "We walk every surface with you — identifying repairs needed, existing paint condition, and sheen recommendations for each room or exterior zone. No guesswork in the estimate.", es: "Recorremos cada superficie contigo — identificando reparaciones necesarias, la condición de la pintura existente y recomendaciones de brillo para cada habitación o zona exterior. Sin suposiciones en la estimación." },

                    s2Title: { en: "Written Proposal",        es: "Propuesta Escrita" },
                    s2Desc:  { en: "Scope of prep, surfaces to be painted, product specifications, number of coats, and fixed price — all in writing. No verbal agreements, no surprises on invoice day.", es: "Alcance de la preparación, superficies a pintar, especificaciones del producto, número de capas y precio fijo — todo por escrito. Sin acuerdos verbales, sin sorpresas el día de la factura." },

                    s3Title: { en: "Prep & Paint",            es: "Preparar y Pintar" },
                    s3Desc:  { en: "All surfaces masked, floors and furniture protected. Repairs patched and sanded before primer goes on. Paint applied in the correct sequence — ceiling first, walls second, trim last — so every edge is clean.", es: "Todas las superficies enmascaradas, pisos y muebles protegidos. Reparaciones parcheadas y lijadas antes de aplicar el imprimante. Pintura aplicada en la secuencia correcta — techo primero, paredes después, molduras al final — para que cada borde esté limpio." },

                    s4Title: { en: "Inspection & Cleanup",    es: "Inspección y Limpieza" },
                    s4Desc:  { en: "We walk every painted surface with you under proper lighting. Touch-ups done on the spot. All masking removed, drop cloths picked up, and site left completely clean before we leave.", es: "Recorremos cada superficie pintada contigo bajo iluminación adecuada. Retoques hechos en el momento. Todo el enmascaramiento removido, lonas recogidas y el sitio dejado completamente limpio antes de irnos." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"They painted the entire interior of our home — every room, the stairwell, all the trim. The lines are razor sharp and there wasn't a drop anywhere that shouldn't be. Best paint job we've ever had.\"", es: "\"Pintaron todo el interior de nuestra casa — cada habitación, la escalera, todas las molduras. Las líneas son afiladas como una navaja y no había una gota en ningún lugar donde no debería estar. El mejor trabajo de pintura que hemos tenido.\"" },
                    t1Location: { en: "Hanover, PA",        es: "Hanover, PA" },

                    t2Text:     { en: "\"Had the exterior done before winter. They prepped properly — power washed, scraped the peeling spots, primed everything. Two years later it still looks fresh. Worth every penny.\"", es: "\"Tuve el exterior hecho antes del invierno. Prepararon correctamente — lavaron a presión, rasparon los puntos que se pelaban, imprimaron todo. Dos años después todavía luce fresco. Vale cada centavo.\"" },
                    t2Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" },

                    t3Text:     { en: "\"Cabinet painting transformed our kitchen. They sprayed the doors off-site and the finish looks factory-new. No brush marks, perfectly smooth. I get compliments every time someone visits.\"", es: "\"La pintura de gabinetes transformó nuestra cocina. Rociaron las puertas fuera del sitio y el acabado luce como nuevo de fábrica. Sin marcas de brocha, perfectamente suave. Recibo cumplidos cada vez que alguien visita.\"" },
                    t3Location: { en: "York, PA",           es: "York, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",   es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                                           es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready for a Finish",                                                                                                                                      es: "¿Listo para un Acabado" },
                    titleAccent: { en: "That Actually Lasts?",                                                                                                                                    es: "que Realmente Dure?" },
                    text:        { en: "Call us or request a free written estimate online. We assess every surface, spec the right products for PA's climate, and prep correctly before any paint goes on.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluamos cada superficie, especificamos los productos correctos para el clima de PA y preparamos correctamente antes de aplicar cualquier pintura." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                                              es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                       es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                                           es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                                           es: "Estimación Gratis" }
                }

            }, // end painting
            // ── SERVICE PAGE — REMODELING (remodeling.html) ───────────────────────────
            remodeling: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                                            es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Complete Home",                                                                                                                                           es: "Transformación" },
                    titleAccent: { en: "Transformation.",                                                                                                                                         es: "Completa del Hogar." },
                    description: { en: "From kitchen to bathroom, full gut renovations to structural rebuilds — C Hawk handles every phase of your project. One licensed team, zero surprises.", es: "Desde la cocina hasta el baño, renovaciones completas hasta reconstrucciones estructurales — C Hawk maneja cada fase de tu proyecto. Un equipo licenciado, cero sorpresas." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                                       es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                       es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                                              es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                                          es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                                          es: "Estimaciones Gratis" }
                },

                // Gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                              es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                                  es: "Antes y" },
                    titleAccent: { en: "After",                                                                                     es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                       es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                    es: "Antes" },
                    after:       { en: "After",                                                                                     es: "Después" },
                    caption1:    { en: "Kitchen renovation — Hanover, PA",                                                          es: "Renovación de cocina — Hanover, PA" },
                    caption2:    { en: "Bathroom renovation — York, PA",                                                            es: "Renovación de baño — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "FULL SERVICE SCOPE",                                                                        es: "ALCANCE COMPLETO DEL SERVICIO" },
                    title:       { en: "Everything Your Project",                                                                   es: "Todo lo que tu Proyecto" },
                    titleAccent: { en: "Needs",                                                                                     es: "Necesita" },
                    subtitle:    { en: "One team handles every phase — from demolition to final finish. No subcontractor surprises.", es: "Un equipo maneja cada fase — desde la demolición hasta el acabado final. Sin sorpresas de subcontratistas." },

                    c1Title: { en: "Kitchen Remodeling",          es: "Remodelación de Cocina" },
                    c1Desc:  { en: "Complete kitchen transformations — cabinets, countertops, layout changes, backsplash, flooring, and full fixture installation.", es: "Transformaciones completas de cocina — gabinetes, encimeras, cambios de distribución, salpicadero, pisos e instalación completa de accesorios." },
                    c1s1:    { en: "Cabinet installation & refinishing",     es: "Instalación y reacabado de gabinetes" },
                    c1s2:    { en: "Countertop replacement",                 es: "Reemplazo de encimeras" },
                    c1s3:    { en: "Kitchen flooring",                       es: "Pisos de cocina" },
                    c1s4:    { en: "Rough electric & plumbing",              es: "Electricidad y plomería de obra gruesa" },

                    c2Title: { en: "Bathroom Renovation",          es: "Renovación de Baño" },
                    c2Desc:  { en: "Full bathroom gut-outs to luxury upgrades. Tile, fixtures, vanities, toilets, showers, and waterproofing done right.", es: "Desde demoliciones completas de baño hasta mejoras de lujo. Azulejos, accesorios, vanidades, inodoros, duchas e impermeabilización bien hechos." },
                    c2s1:    { en: "Vanity & toilet installation",           es: "Instalación de vanidad e inodoro" },
                    c2s2:    { en: "Tile & waterproofing",                   es: "Azulejos e impermeabilización" },
                    c2s3:    { en: "Shower & tub replacement",               es: "Reemplazo de ducha y tina" },
                    c2s4:    { en: "Full fixture upgrades",                  es: "Actualización completa de accesorios" },

                    c3Title: { en: "Demolition & Structural",      es: "Demolición y Estructural" },
                    c3Desc:  { en: "Safe, controlled demolition and structural work — wall removal, framing, roofing, window installation, and handrails.", es: "Demolición segura y controlada y trabajo estructural — remoción de paredes, estructura, techos, instalación de ventanas y pasamanos." },
                    c3s1:    { en: "Controlled demolition",                  es: "Demolición controlada" },
                    c3s2:    { en: "Roofing work",                           es: "Trabajo de techo" },
                    c3s3:    { en: "Window installation",                    es: "Instalación de ventanas" },
                    c3s4:    { en: "Handrail installation",                  es: "Instalación de pasamanos" },

                    c4Title: { en: "Rough Systems",                es: "Sistemas de Obra Gruesa" },
                    c4Desc:  { en: "Rough electric and plumbing work to support your remodel. We coordinate every phase so systems are ready before finish work begins.", es: "Trabajo de electricidad y plomería de obra gruesa para apoyar tu remodelación. Coordinamos cada fase para que los sistemas estén listos antes de que comiencen los acabados." },
                    c4s1:    { en: "Rough electrical",                       es: "Electricidad de obra gruesa" },
                    c4s2:    { en: "Rough plumbing",                         es: "Plomería de obra gruesa" },
                    c4s3:    { en: "Phase coordination",                     es: "Coordinación de fases" },
                    c4s4:    { en: "Pre-finish inspection",                   es: "Inspección pre-acabado" },

                    ctaText: { en: "Not sure what your project needs? Call us — we'll walk through it with you for free.", es: "¿No sabes lo que necesita tu proyecto? Llámanos — lo revisamos contigo gratis." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                   es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process
                process: {
                    badge:       { en: "HOW IT WORKS",         es: "CÓMO FUNCIONA" },
                    title:       { en: "Simple Process.",       es: "Proceso Simple." },
                    titleAccent: { en: "Zero Guesswork.",       es: "Cero Suposiciones." },

                    s1Title: { en: "Free Consultation",         es: "Consulta Gratuita" },
                    s1Desc:  { en: "We visit your home, listen to your vision, assess the scope, and give you an honest, detailed estimate. No pressure, no obligation.", es: "Visitamos tu hogar, escuchamos tu visión, evaluamos el alcance y te damos una estimación honesta y detallada. Sin presión, sin compromiso." },

                    s2Title: { en: "Clear Proposal",            es: "Propuesta Clara" },
                    s2Desc:  { en: "You receive a written proposal with itemized scope, timeline, and fixed price. Everything is documented before any work begins.", es: "Recibes una propuesta escrita con alcance detallado, cronograma y precio fijo. Todo está documentado antes de que comience cualquier trabajo." },

                    s3Title: { en: "Expert Execution",          es: "Ejecución Experta" },
                    s3Desc:  { en: "Cesar and the C Hawk team execute every phase on time. You stay informed throughout — progress updates, no disappearing acts.", es: "Cesar y el equipo de C Hawk ejecutan cada fase a tiempo. Te mantenemos informado en todo momento — actualizaciones de progreso, sin desapariciones." },

                    s4Title: { en: "Final Walkthrough",         es: "Recorrido Final" },
                    s4Desc:  { en: "We walk through every detail together before you sign off. If anything isn't right, we fix it. Your satisfaction closes the project.", es: "Revisamos cada detalle juntos antes de que firmes. Si algo no está bien, lo corregimos. Tu satisfacción cierra el proyecto." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"C Hawk completely transformed our kitchen. Cesar and his team were professional from day one — on time, on budget, and the quality is incredible. I recommend them to everyone.\"", es: "\"C Hawk transformó completamente nuestra cocina. Cesar y su equipo fueron profesionales desde el primer día — a tiempo, dentro del presupuesto y la calidad es increíble. Los recomiendo a todos.\"" },
                    t1Location: { en: "Hanover, PA",        es: "Hanover, PA" },

                    t2Text:     { en: "\"Our bathroom renovation was flawless. Mauricio kept us updated every step and the project finished exactly when promised. The tile work alone is worth five stars.\"", es: "\"Nuestra renovación de baño fue impecable. Mauricio nos mantuvo actualizados en cada paso y el proyecto terminó exactamente cuando prometieron. El trabajo de azulejos solo vale cinco estrellas.\"" },
                    t2Location: { en: "York, PA",           es: "York, PA" },

                    t3Text:     { en: "\"We had our entire first floor remodeled. C Hawk handled demolition, framing, drywall, flooring, and painting. It felt like we had a brand new house. Worth every penny.\"", es: "\"Remodelamos todo nuestro primer piso. C Hawk manejó la demolición, la estructura, el drywall, los pisos y la pintura. Parecía que teníamos una casa nueva. Vale cada centavo.\"" },
                    t3Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",   es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                                           es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready to Transform",                                                                                                                                      es: "¿Listo para Transformar" },
                    titleAccent: { en: "Your Home?",                                                                                                                                              es: "tu Hogar?" },
                    text:        { en: "Call us today or schedule a free consultation online. We'll visit your home, assess your project, and give you an honest estimate — all at no cost.", es: "Llámanos hoy o agenda una consulta gratuita en línea. Visitaremos tu hogar, evaluaremos tu proyecto y te daremos una estimación honesta — todo sin costo." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                                              es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                       es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                                           es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                                           es: "Estimación Gratis" }
                }

            }, // end remodeling
            // ── SERVICE PAGE — WEATHERIZATION (weatherization.html) ───────────────────
            weatherization: {

                // Hero section
                hero: {
                    badge:       { en: "LICENSED PA190465 · FREE ESTIMATES · PA & MD",                                                                                                                    es: "LICENCIA PA190465 · ESTIMACIONES GRATIS · PA Y MD" },
                    title:       { en: "Stop Losing Heat.",                                                                                                                                               es: "Deja de Perder Calor." },
                    titleAccent: { en: "Start Saving Money.",                                                                                                                                             es: "Empieza a Ahorrar Dinero." },
                    description: { en: "Insulation, air sealing, draft proofing — C Hawk locates where your home is losing energy and seals it correctly. Built for Pennsylvania's harsh winters and humid summers.", es: "Aislamiento, sellado de aire, sellado de corrientes — C Hawk localiza dónde tu hogar está perdiendo energía y lo sella correctamente. Diseñado para los duros inviernos y veranos húmedos de Pennsylvania." },
                    ctaPrimary:  { en: "Get Free Estimate",                                                                                                                                               es: "Obtener Estimación Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                               es: "Licencia PA190465" },
                    trust2:      { en: "5.0 Rating",                                                                                                                                                      es: "Calificación 5.0" },
                    trust3:      { en: "2000+ Projects",                                                                                                                                                  es: "2000+ Proyectos" },
                    trust4:      { en: "Free Estimates",                                                                                                                                                  es: "Estimaciones Gratis" }
                },

                // Gallery
                gallery: {
                    badge:       { en: "REAL RESULTS",                                                                                      es: "RESULTADOS REALES" },
                    title:       { en: "Before &",                                                                                          es: "Antes y" },
                    titleAccent: { en: "After",                                                                                             es: "Después" },
                    subtitle:    { en: "Every photo is a real C Hawk project — no stock images, no filters.",                               es: "Cada foto es un proyecto real de C Hawk — sin imágenes de banco, sin filtros." },
                    before:      { en: "Before",                                                                                            es: "Antes" },
                    after:       { en: "After",                                                                                             es: "Después" },
                    caption1:    { en: "Attic insulation — Hanover, PA",                                                                    es: "Aislamiento de ático — Hanover, PA" },
                    caption2:    { en: "Crawl space encapsulation — York, PA",                                                              es: "Encapsulamiento de espacio bajo el piso — York, PA" }
                },

                // What's included
                included: {
                    badge:       { en: "FULL SERVICE SCOPE",                                                                                es: "ALCANCE COMPLETO DEL SERVICIO" },
                    title:       { en: "Seal the Gaps.",                                                                                    es: "Sella las Fugas." },
                    titleAccent: { en: "Cut the Bills.",                                                                                    es: "Reduce las Facturas." },
                    subtitle:    { en: "Pennsylvania winters are unforgiving. We find where your home is leaking heat and fix it — insulation, air sealing, moisture control, and weatherstripping done right.", es: "Los inviernos de Pennsylvania son implacables. Encontramos dónde tu hogar está perdiendo calor y lo corregimos — aislamiento, sellado de aire, control de humedad y burletes bien instalados." },

                    c1Title: { en: "Attic & Wall Insulation",          es: "Aislamiento de Ático y Paredes" },
                    c1Desc:  { en: "Blown-in and batt insulation for attics, walls, and floors above unconditioned spaces. We assess existing R-values and bring every zone up to Pennsylvania's recommended levels for your climate zone.", es: "Aislamiento soplado y en mantas para áticos, paredes y pisos sobre espacios no acondicionados. Evaluamos los valores R existentes y llevamos cada zona a los niveles recomendados para tu zona climática en Pennsylvania." },
                    c1s1:    { en: "Blown-in attic insulation",                  es: "Aislamiento de ático soplado" },
                    c1s2:    { en: "Batt insulation for walls & floors",         es: "Aislamiento en mantas para paredes y pisos" },
                    c1s3:    { en: "R-value assessment & upgrade",               es: "Evaluación y mejora del valor R" },
                    c1s4:    { en: "Rim joist insulation",                       es: "Aislamiento de viga de borde" },

                    c2Title: { en: "Air Sealing & Draft Proofing",     es: "Sellado de Aire y Protección de Corrientes" },
                    c2Desc:  { en: "Attic bypasses, electrical penetrations, plumbing chases, and wall cavities — sealed with spray foam and caulk before insulation goes in. Air sealing is what most contractors skip and what makes the biggest difference.", es: "Pasos de ático, penetraciones eléctricas, cañerías de plomería y cavidades de paredes — sellados con espuma en spray y masilla antes de instalar el aislamiento. El sellado de aire es lo que la mayoría de los contratistas omite y lo que hace la mayor diferencia." },
                    c2s1:    { en: "Attic bypass sealing",                       es: "Sellado de pasos de ático" },
                    c2s2:    { en: "Electrical & plumbing penetrations",         es: "Penetraciones eléctricas y de plomería" },
                    c2s3:    { en: "Spray foam & caulk application",             es: "Aplicación de espuma en spray y masilla" },
                    c2s4:    { en: "Band joist air sealing",                     es: "Sellado de aire en viga perimetral" },

                    c3Title: { en: "Window & Door Sealing",            es: "Sellado de Ventanas y Puertas" },
                    c3Desc:  { en: "Weatherstripping replacement, door sweep installation, and caulking around window and door frames. We test for drafts before and after so you can feel the difference the same day.", es: "Reemplazo de burletes, instalación de cepillos para puertas y sellado alrededor de marcos de ventanas y puertas. Probamos las corrientes antes y después para que puedas sentir la diferencia el mismo día." },
                    c3s1:    { en: "Weatherstripping replacement",               es: "Reemplazo de burletes" },
                    c3s2:    { en: "Door sweep installation",                    es: "Instalación de cepillo para puertas" },
                    c3s3:    { en: "Window frame caulking",                      es: "Sellado de marcos de ventanas" },
                    c3s4:    { en: "Draft detection & verification",             es: "Detección y verificación de corrientes" },

                    c4Title: { en: "Crawl Space & Vapor Control",      es: "Espacio Bajo el Piso y Control de Vapor" },
                    c4Desc:  { en: "Crawl space encapsulation with heavy-duty vapor barrier and insulation. Moisture in Pennsylvania crawl spaces causes mold, wood rot, and floor damage — we seal it at the source before it becomes a structural problem.", es: "Encapsulamiento del espacio bajo el piso con barrera de vapor de alta resistencia y aislamiento. La humedad en los espacios bajo el piso de Pennsylvania causa moho, putrefacción de madera y daños en el piso — la sellamos en la fuente antes de que se convierta en un problema estructural." },
                    c4s1:    { en: "Vapor barrier installation",                 es: "Instalación de barrera de vapor" },
                    c4s2:    { en: "Crawl space insulation",                     es: "Aislamiento del espacio bajo el piso" },
                    c4s3:    { en: "Moisture assessment",                        es: "Evaluación de humedad" },
                    c4s4:    { en: "Full crawl space encapsulation",             es: "Encapsulamiento completo del espacio bajo el piso" },

                    ctaText: { en: "Feeling drafts or paying too much to heat your home? Call us — we'll identify the problem and give you a written fix.", es: "¿Sientes corrientes o pagas demasiado para calentar tu hogar? Llámanos — identificaremos el problema y te daremos una solución por escrito." },
                    ctaBtn:  { en: "(443) 858-0904 — Free Consultation",                                                                                   es: "(443) 858-0904 — Consulta Gratis" }
                },

                // Process
                process: {
                    badge:       { en: "HOW IT WORKS",              es: "CÓMO FUNCIONA" },
                    title:       { en: "Find It. Seal It.",          es: "Encuéntralo. Séllalo." },
                    titleAccent: { en: "Feel the Difference.",       es: "Siente la Diferencia." },

                    s1Title: { en: "Home Energy Assessment",         es: "Evaluación Energética del Hogar" },
                    s1Desc:  { en: "We inspect attic, walls, crawl space, windows, and doors — identifying where your home is losing the most heat. We check existing insulation R-values and locate air bypass routes before writing a single line of scope.", es: "Inspeccionamos el ático, las paredes, el espacio bajo el piso, las ventanas y las puertas — identificando dónde tu hogar está perdiendo más calor. Verificamos los valores R del aislamiento existente y localizamos rutas de paso de aire antes de escribir una sola línea de alcance." },

                    s2Title: { en: "Written Proposal",               es: "Propuesta Escrita" },
                    s2Desc:  { en: "Every improvement prioritized by impact — air sealing first, then insulation, then weatherstripping. Fixed price per scope item, no vague line items, no hidden material charges.", es: "Cada mejora priorizada por impacto — sellado de aire primero, luego aislamiento, luego burletes. Precio fijo por ítem de alcance, sin partidas vagas, sin cargos ocultos de materiales." },

                    s3Title: { en: "Air Seal Then Insulate",         es: "Sellar el Aire y Luego Aislar" },
                    s3Desc:  { en: "Air sealing always comes before insulation — that's the sequence most contractors reverse. We seal every bypass with foam and caulk, then add insulation on top so the thermal barrier actually works.", es: "El sellado de aire siempre va antes del aislamiento — esa es la secuencia que la mayoría de los contratistas invierte. Sellamos cada paso con espuma y masilla, luego agregamos aislamiento encima para que la barrera térmica realmente funcione." },

                    s4Title: { en: "Verification Walkthrough",       es: "Recorrido de Verificación" },
                    s4Desc:  { en: "We walk every treated area with you — checking seal quality, confirming coverage depth, and verifying weatherstripping seats correctly. Site is left clean and you get documentation of what was done.", es: "Recorremos cada área tratada contigo — verificando la calidad del sellado, confirmando la profundidad de cobertura y verificando que los burletes asienten correctamente. El sitio queda limpio y recibes documentación de lo que se hizo." }
                },

                // Stats
                stats: {
                    s1: { en: "Projects Completed",  es: "Proyectos Completados" },
                    s2: { en: "Average Rating",      es: "Calificación Promedio" },
                    s3: { en: "Active License",      es: "Licencia Activa" },
                    s4: { en: "Estimate Response",   es: "Respuesta de Estimación" }
                },

                // Testimonials
                testimonials: {
                    badge:       { en: "CLIENT REVIEWS",    es: "RESEÑAS DE CLIENTES" },
                    title:       { en: "What Homeowners",   es: "Lo que Dicen" },
                    titleAccent: { en: "Say About Us",      es: "los Propietarios" },

                    t1Text:     { en: "\"They insulated the attic and sealed every bypass before adding blown-in. My heating bill dropped noticeably the very first month. The upstairs rooms that were always freezing are now the same temperature as the rest of the house.\"", es: "\"Aislaron el ático y sellaron cada paso antes de agregar el aislamiento soplado. Mi factura de calefacción bajó notablemente el primer mes. Las habitaciones de arriba que siempre estaban heladas ahora tienen la misma temperatura que el resto de la casa.\"" },
                    t1Location: { en: "Gettysburg, PA",     es: "Gettysburg, PA" },

                    t2Text:     { en: "\"Had a terrible draft problem in the living room for years. C Hawk found three separate air bypasses in the attic above it that no one had ever addressed. Sealed and insulated in one day. Zero draft since.\"", es: "\"Tuve un terrible problema de corrientes en la sala durante años. C Hawk encontró tres pasos de aire separados en el ático encima que nadie había atendido nunca. Sellado y aislado en un día. Cero corrientes desde entonces.\"" },
                    t2Location: { en: "York, PA",           es: "York, PA" },

                    t3Text:     { en: "\"The crawl space encapsulation was the best investment we made in this house. Musty smell is completely gone, floors are warmer, and the moisture readings came down immediately. Thorough, clean, professional.\"", es: "\"El encapsulamiento del espacio bajo el piso fue la mejor inversión que hicimos en esta casa. El olor a humedad desapareció por completo, los pisos están más cálidos y las lecturas de humedad bajaron de inmediato. Exhaustivo, limpio, profesional.\"" },
                    t3Location: { en: "Hanover, PA",        es: "Hanover, PA" }
                },

                // Service areas
                areas: {
                    badge: { en: "WHERE WE WORK",   es: "DÓNDE TRABAJAMOS" },
                    title: { en: "Serving PA & MD", es: "Sirviendo PA y MD" }
                },

                // Final CTA
                cta: {
                    badge:       { en: "FREE ESTIMATE · NO OBLIGATION",                                                                                                                                   es: "ESTIMACIÓN GRATIS · SIN COMPROMISO" },
                    title:       { en: "Ready to Stop",                                                                                                                                                   es: "¿Listo para Dejar de" },
                    titleAccent: { en: "Heating the Outdoors?",                                                                                                                                           es: "Calentar el Exterior?" },
                    text:        { en: "Call us or request a free written estimate online. We assess your home's biggest energy loss points and give you a prioritized plan with fixed prices — no pressure, no guesswork.", es: "Llámanos o solicita una estimación escrita gratis en línea. Evaluamos los mayores puntos de pérdida de energía de tu hogar y te damos un plan priorizado con precios fijos — sin presión, sin suposiciones." },
                    primaryBtn:  { en: "Schedule Free Consultation",                                                                                                                                      es: "Agendar Consulta Gratis" },
                    trust1:      { en: "Licensed PA190465",                                                                                                                                               es: "Licencia PA190465" },
                    trust2:      { en: "Fully Insured",                                                                                                                                                   es: "Totalmente Asegurados" },
                    trust3:      { en: "Free Estimate",                                                                                                                                                   es: "Estimación Gratis" }
                }

            }, // end weatherization
            



    };

    window.translations = translations;

    // Export for use in modules
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { translations };
    }


