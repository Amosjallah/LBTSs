import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ChatWidget from './components/ChatWidget';
import { SERVICES, FLEET, COMPANY_INFO, TESTIMONIALS } from './constants';
import { 
  CheckCircle, Phone, ArrowRight, Shield, Clock, Award, Users, MapPin, 
  Star, Calendar, CreditCard, Wrench, HelpCircle, Briefcase, ThumbsUp, ChevronLeft, ChevronRight
} from 'lucide-react';

// --- Page Components ---

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      // Staff Busing: Modern Bus/Van
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1920",
      title: "Reliable Staff Busing Solutions",
      subtitle: "Ensure your team arrives on time, every time, with our dedicated corporate transport services."
    },
    {
      id: 2,
      // Self-Drive: Updated to working image
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920",
      title: "Premium Self-Drive Rentals",
      subtitle: "Experience the ultimate freedom and privacy with our fleet of well-maintained vehicles."
    },
    {
      id: 3,
      // Chauffeur: Luxury Black Car
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1920",
      title: "Executive Chauffeur Services",
      subtitle: "Relax and enjoy the ride while our professional, licensed drivers navigate the roads for you."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Section - Slider */}
      <section className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-lad-blue opacity-60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2"
        >
          <ChevronLeft size={32} className="md:w-12 md:h-12" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2"
        >
          <ChevronRight size={32} className="md:w-12 md:h-12" />
        </button>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
          <div className="transition-all duration-700 transform translate-y-0">
             <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
               {slides[currentSlide].title.split(" ").slice(0, -1).join(" ")} <br/>
               <span className="italic font-light text-blue-200">{slides[currentSlide].title.split(" ").pop()}</span>
             </h1>
             <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md min-h-[3.5rem] md:min-h-[3.5rem] px-2">
               {slides[currentSlide].subtitle}
             </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/booking" className="bg-white text-lad-blue hover:bg-gray-100 px-8 py-3 md:px-10 md:py-4 rounded-sm font-bold text-xs md:text-sm uppercase tracking-widest transition-all shadow-lg border border-white">
              Book a Ride
            </Link>
            <Link to="/services" className="bg-transparent border border-white text-white hover:bg-white hover:text-lad-blue px-8 py-3 md:px-10 md:py-4 rounded-sm font-bold text-xs md:text-sm uppercase tracking-widest transition-all backdrop-blur-sm">
              Explore Services
            </Link>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-lad-blue font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Welcome to LAD Brothers</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 md:mb-8 leading-tight">Your Trusted Partner in<br/>Professional Transport</h2>
            <div className="w-24 h-1 bg-lad-blue mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light font-serif italic">
              "Based in Ashaley Botwe, Accra, we are a fully registered transport company dedicated to providing 
              first-class, roadworthy vehicles and professional drivers."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-white p-6 md:p-10 border border-gray-200 hover:border-lad-blue transition-colors text-center group">
              <div className="flex justify-center mb-6">
                <Shield className="text-lad-blue group-hover:scale-110 transition-transform duration-500" size={56} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Safety First</h3>
              <p className="text-gray-600 leading-relaxed font-light">Comprehensively insured cars and rigorously trained drivers ensure your peace of mind on every journey.</p>
            </div>
            <div className="bg-white p-6 md:p-10 border border-gray-200 hover:border-lad-blue transition-colors text-center group">
              <div className="flex justify-center mb-6">
                <Clock className="text-lad-blue group-hover:scale-110 transition-transform duration-500" size={56} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Timely Service</h3>
              <p className="text-gray-600 leading-relaxed font-light">We respect your schedule. Punctuality is the core of our business operations and our promise to you.</p>
            </div>
            <div className="bg-white p-6 md:p-10 border border-gray-200 hover:border-lad-blue transition-colors text-center group">
              <div className="flex justify-center mb-6">
                <Award className="text-lad-blue group-hover:scale-110 transition-transform duration-500" size={56} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Professionalism</h3>
              <p className="text-gray-600 leading-relaxed font-light">Multilingual drivers with 10+ years of experience delivering excellent, discreet customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-lad-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-lad-dark opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-blue-800/50">
              <div className="p-2 md:p-4">
                <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">10+</div>
                <div className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-blue-200">Years Experience</div>
              </div>
              <div className="p-2 md:p-4">
                <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">50+</div>
                <div className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-blue-200">Premium Vehicles</div>
              </div>
              <div className="p-2 md:p-4">
                <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">1k+</div>
                <div className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-blue-200">Happy Clients</div>
              </div>
              <div className="p-2 md:p-4">
                <div className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">24/7</div>
                <div className="text-[0.6rem] md:text-xs uppercase tracking-[0.2em] text-blue-200">Dedicated Support</div>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 border-b border-gray-200 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Key Services</h2>
              <p className="text-gray-600 font-light text-base md:text-lg">Tailored transport solutions designed for individuals and corporations.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-lad-blue font-bold uppercase tracking-widest text-xs hover:text-lad-dark mt-6 md:mt-0 transition-colors">
              View All Services <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-lad-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-serif font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed border-t border-gray-100 pt-3">{service.description}</p>
                  <Link to="/services" className="text-lad-blue text-xs font-bold uppercase tracking-widest hover:text-lad-dark">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-lad-blue font-bold uppercase tracking-widest text-xs">
              View All Services <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Client Testimonials</h2>
             <div className="w-16 h-1 bg-lad-blue mx-auto mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {TESTIMONIALS.map((testimonial) => (
               <div key={testimonial.id} className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm relative mt-8">
                 <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-lad-blue text-white p-3 rounded-full shadow-lg">
                   <Star size={20} fill="white" />
                 </div>
                 <p className="text-gray-600 italic mb-8 pt-6 font-serif text-base md:text-lg leading-relaxed text-center">"{testimonial.content}"</p>
                 <div className="text-center border-t border-gray-100 pt-6">
                   <h4 className="font-bold text-gray-900 font-serif uppercase tracking-wide text-sm">{testimonial.name}</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-lad-dark text-white py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-light text-base md:text-lg">
            Whether it's a corporate event, a school trip, or an airport transfer, 
            LAD Brothers has the fleet and experience to serve you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
             <Link to="/booking" className="bg-lad-blue hover:bg-white hover:text-lad-blue text-white px-8 py-3 md:px-10 md:py-4 rounded-sm font-bold text-xs md:text-sm uppercase tracking-widest transition-colors shadow-lg">
               Request a Quote
             </Link>
             <a href={`tel:${COMPANY_INFO.phone}`} className="border border-gray-600 hover:border-white hover:text-white text-gray-300 px-8 py-3 md:px-10 md:py-4 rounded-sm font-bold text-xs md:text-sm uppercase tracking-widest transition-colors flex items-center justify-center">
               <Phone size={18} className="mr-3" /> Call {COMPANY_INFO.phone}
             </a>
          </div>
        </div>
      </section>
    </>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-12 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600 font-light text-base md:text-lg max-w-2xl mx-auto">Combining traditional values with modern efficiency to provide transportation excellence.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <span className="text-lad-blue font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 md:mb-8">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-base md:text-lg">
              {COMPANY_INFO.intro}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light text-base md:text-lg">
              Located in Ashaley Botwe, Accra, we serve the entire Greater Accra Region and beyond. 
              Our commitment to excellence is driven by our passion for safety and customer satisfaction.
              We are open to partnerships with other transport and rental companies to expand our reach and service quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
              <div className="bg-white p-6 border-l-2 border-lad-blue shadow-sm">
                <h3 className="font-serif font-bold text-gray-900 mb-3 text-lg">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{COMPANY_INFO.mission}</p>
              </div>
              <div className="bg-white p-6 border-l-2 border-gray-300 shadow-sm">
                <h3 className="font-serif font-bold text-gray-900 mb-3 text-lg">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{COMPANY_INFO.vision}</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-lad-blue z-0 rounded-sm"></div>
            <img 
              // Fleet Image
              src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800" 
              alt="LAD Brothers Fleet" 
              className="relative z-10 w-full rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 md:mt-24">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8 md:mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-8 md:p-10 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow rounded-sm">
               <div className="inline-flex p-4 rounded-full bg-blue-50 text-lad-blue mb-6">
                 <ThumbsUp className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif font-bold mb-3">Customer Satisfaction</h3>
               <p className="text-gray-600 font-light leading-relaxed">We go the extra mile to ensure every client is happy with our service, treating every trip as a priority.</p>
            </div>
            <div className="text-center p-8 md:p-10 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow rounded-sm">
               <div className="inline-flex p-4 rounded-full bg-blue-50 text-lad-blue mb-6">
                 <Shield className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif font-bold mb-3">Uncompromised Safety</h3>
               <p className="text-gray-600 font-light leading-relaxed">Your safety is our top priority. We adhere to strict safety protocols and maintenance schedules.</p>
            </div>
            <div className="text-center p-8 md:p-10 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow rounded-sm">
               <div className="inline-flex p-4 rounded-full bg-blue-50 text-lad-blue mb-6">
                 <Briefcase className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-serif font-bold mb-3">Integrity</h3>
               <p className="text-gray-600 font-light leading-relaxed">We operate with transparency, honesty, and professional ethics in all our business dealings.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-24">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose LAD Brothers?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-8 border border-gray-100">
              <Users size={40} className="mx-auto mb-6 text-lad-blue" strokeWidth={1} />
              <h3 className="font-serif font-bold text-lg mb-2">Expert Drivers</h3>
              <p className="text-sm text-gray-600 font-light">10+ years experience, licensed, and multilingual professionals.</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <Shield size={40} className="mx-auto mb-6 text-lad-blue" strokeWidth={1} />
              <h3 className="font-serif font-bold text-lg mb-2">Fully Insured</h3>
              <p className="text-sm text-gray-600 font-light">Comprehensive insurance coverage for all vehicles and passengers.</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <Clock size={40} className="mx-auto mb-6 text-lad-blue" strokeWidth={1} />
              <h3 className="font-serif font-bold text-lg mb-2">24/7 Reliability</h3>
              <p className="text-sm text-gray-600 font-light">We operate daily, including weekends, ensuring you're never stranded.</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <Award size={40} className="mx-auto mb-6 text-lad-blue" strokeWidth={1} />
              <h3 className="font-serif font-bold text-lg mb-2">Quality Fleet</h3>
              <p className="text-sm text-gray-600 font-light">New and roadworthy vehicles ranging from saloons to luxury buses.</p>
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mt-12 md:mt-24 bg-lad-dark text-white rounded-sm p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield size={300} />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Our Commitment to Safety</h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 font-light">
              We understand that safety is the most critical aspect of transportation. That's why all our vehicles undergo 
              regular maintenance checks, and our drivers participate in periodic defensive driving courses. 
              We are fully insured and compliant with all Ghanaian transport regulations.
            </p>
            <Link to="/contact" className="inline-block bg-white text-lad-dark font-bold text-xs md:text-sm uppercase tracking-widest px-8 py-3 md:px-10 md:py-4 rounded-sm hover:bg-gray-100 transition-colors">
              Contact Us for Corporate Safety Policies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-lad-blue py-12 md:py-20 text-white text-center relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-light">
            Comprehensive transport solutions tailored for Ghana's unique environment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-24">
          {SERVICES.map((service) => {
             const Icon = service.icon;
             return (
              <div key={service.id} className="bg-white rounded-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition-shadow group">
                <div className="lg:w-2/5 h-64 lg:h-auto relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-6 md:p-8 lg:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gray-50 rounded-sm mr-4 text-lad-blue border border-gray-100">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed font-light">
                    {service.detailedDescription}
                  </p>
                  <Link 
                    to={`/booking?service=${service.title}`}
                    className="inline-block border border-lad-blue text-lad-blue px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-lad-blue hover:text-white transition-colors self-start"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
             );
          })}
        </div>

        {/* Corporate Partnership Section */}
        <div className="bg-gray-50 rounded-sm border border-gray-200 p-8 md:p-16 mb-12 md:mb-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
             <div className="md:w-1/2">
                <span className="text-lad-blue font-bold text-xs uppercase tracking-[0.2em] mb-4 block">For Business</span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Corporate Partnerships</h2>
                <p className="text-gray-600 mb-8 leading-relaxed font-light text-base md:text-lg">
                  LAD Brothers Transport Services partners with companies to provide reliable staff busing and executive chauffeur services. 
                  Reduce your administrative burden and ensure your employees arrive fresh and on time. We offer flexible invoicing 
                  and dedicated account management for our corporate clients.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-gray-700 font-light">
                    <CheckCircle className="text-lad-blue mr-4" size={20} /> Monthly billing options
                  </li>
                  <li className="flex items-center text-gray-700 font-light">
                    <CheckCircle className="text-lad-blue mr-4" size={20} /> Dedicated fleet management
                  </li>
                  <li className="flex items-center text-gray-700 font-light">
                    <CheckCircle className="text-lad-blue mr-4" size={20} /> Priority booking
                  </li>
                </ul>
                <Link to="/contact" className="inline-block bg-lad-dark text-white px-10 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Inquire for Business
                </Link>
             </div>
             <div className="md:w-1/2 relative w-full">
               <div className="absolute top-4 left-4 w-full h-full border-2 border-gray-200 z-0"></div>
               <img 
                 // Executive Car/Fleet
                 src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800" 
                 alt="Corporate Fleet" 
                 className="rounded-sm shadow-lg w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700" 
               />
             </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-lg mb-3 flex items-center text-gray-900"><HelpCircle className="mr-3 text-lad-blue shrink-0" size={20} /> Is fuel included in the rental?</h3>
              <p className="text-gray-600 font-light">For daily rentals, cars are provided with a full tank and must be returned full. For chauffeur services, fuel policies vary by agreement.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-lg mb-3 flex items-center text-gray-900"><HelpCircle className="mr-3 text-lad-blue shrink-0" size={20} /> Do you travel outside Accra?</h3>
              <p className="text-gray-600 font-light">Yes, our services cover all regions in Ghana. Long-distance trips may attract different rates.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-lg mb-3 flex items-center text-gray-900"><HelpCircle className="mr-3 text-lad-blue shrink-0" size={20} /> What happens if the car breaks down?</h3>
              <p className="text-gray-600 font-light">In the unlikely event of a breakdown, we provide an immediate replacement vehicle to ensure your journey continues smoothly.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-lg mb-3 flex items-center text-gray-900"><HelpCircle className="mr-3 text-lad-blue shrink-0" size={20} /> How do I pay?</h3>
              <p className="text-gray-600 font-light">We accept Mobile Money, Bank Transfers, and Cash payments. Corporate clients can set up account billing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FleetPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="py-12 md:py-20 text-center max-w-4xl mx-auto px-4 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Premium Fleet</h1>
        <p className="text-gray-600 text-base md:text-lg font-light italic">
          "Just name the car, we got you covered."
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-24">
          {FLEET.map((item) => (
            <div key={item.id} className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={item.category} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900">{item.category}</h3>
                  <span className="text-xs font-bold text-lad-blue uppercase tracking-widest">{item.capacity}</span>
                </div>
                <p className="text-gray-600 mb-6 font-light">{item.description}</p>
                
                <div className="mb-8 pt-4 border-t border-gray-100">
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-bold">Key Features</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 font-light">
                        <CheckCircle size={14} className="text-lad-blue mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to="/booking" className="block w-full text-center border border-lad-blue text-lad-blue font-bold text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-lad-blue hover:text-white transition-colors">
                  Check Availability
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Section */}
        <div className="bg-lad-dark rounded-sm overflow-hidden text-white relative">
          <div className="absolute inset-0 bg-lad-blue opacity-20"></div>
          <div className="flex flex-col lg:flex-row relative z-10">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center mb-8">
                 <Wrench className="mr-5 text-gray-300" size={32} />
                 <h2 className="text-3xl font-serif font-bold">Maintenance Standards</h2>
              </div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 font-light">
                We believe that a reliable service starts with a reliable machine. Every vehicle in our fleet 
                undergoes a comprehensive multi-point inspection before and after every rental. 
              </p>
              <ul className="space-y-4">
                 <li className="flex items-center text-gray-300 font-light"><CheckCircle className="mr-4 text-white shrink-0" size={18}/> Engine & Transmission Health Checks</li>
                 <li className="flex items-center text-gray-300 font-light"><CheckCircle className="mr-4 text-white shrink-0" size={18}/> Tire Pressure & Tread Depth Inspection</li>
                 <li className="flex items-center text-gray-300 font-light"><CheckCircle className="mr-4 text-white shrink-0" size={18}/> Interior Deep Cleaning & Sanitization</li>
                 <li className="flex items-center text-gray-300 font-light"><CheckCircle className="mr-4 text-white shrink-0" size={18}/> AC & Cooling System Performance Tests</li>
              </ul>
            </div>
            <div className="lg:w-1/2 min-h-[300px] md:min-h-[400px] relative">
               <img 
                 // Maintenance / Car detail
                 src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800" 
                 alt="Car Maintenance Detail" 
                 className="absolute inset-0 w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-gray-600 font-light text-base md:text-lg">Have questions? We're here to help you move.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 rounded-sm overflow-hidden mb-12 md:mb-20 border border-gray-100 shadow-xl">
          {/* Contact Info */}
          <div className="bg-lad-blue p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-lad-dark opacity-30"></div>
             <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              <p className="text-blue-100 mb-12 font-light text-base md:text-lg">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="mt-1 mr-5 text-blue-300 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Phone</h3>
                    <p className="font-light text-base md:text-lg break-all">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-5 text-blue-300 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Location</h3>
                    <p className="font-light text-base md:text-lg">{COMPANY_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mt-1 mr-5 text-blue-300 shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">Working Hours</h3>
                    <p className="font-light text-base md:text-lg">Mon - Sun: Open for Business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10 hidden md:block">
               <div className="bg-white/10 backdrop-blur-sm h-48 rounded-sm flex items-center justify-center text-white border border-white/20">
                  <span className="flex items-center font-light"><MapPin className="mr-3"/> Google Map: Ashaley Botwe, Accra</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12 bg-white">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-lad-blue text-white font-bold text-xs uppercase tracking-widest py-4 rounded-sm hover:bg-lad-dark transition-colors shadow-lg mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-gray-600 font-light">
             We are always happy to welcome you to our office in Ashaley Botwe. 
             Come inspect our fleet, meet the team, and discuss your transport needs in person. 
             We recommend calling ahead to ensure a manager is available to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

const BookingPage: React.FC = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const initialService = queryParams.get('service') || '';

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm shadow-xl overflow-hidden mb-12 md:mb-16 border border-gray-200">
          <div className="bg-lad-blue py-8 md:py-10 px-6 md:px-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-lad-dark opacity-20"></div>
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">Book Your Ride</h1>
              <p className="text-blue-100 mt-2 font-light">Complete the form below to request a quote or reservation.</p>
            </div>
          </div>
          
          <div className="p-6 md:p-14">
            <form className="space-y-6 md:space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">Trip Details</h3>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Type</label>
                  <select 
                    defaultValue={initialService}
                    className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue bg-white"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pickup Date</label>
                    <input type="date" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Pickup Time</label>
                    <input type="time" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Vehicle Preference (Optional)</label>
                   <select className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue bg-white">
                     <option value="">Any Vehicle</option>
                     {FLEET.map(f => <option key={f.id} value={f.category}>{f.category} ({f.capacity})</option>)}
                   </select>
                </div>
              </div>

              <div className="space-y-6 pt-4 md:pt-8">
                <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3">Your Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Additional Instructions</label>
                  <textarea rows={3} className="w-full border-gray-300 rounded-sm shadow-sm border p-4 focus:ring-lad-blue focus:border-lad-blue" placeholder="Flight Number, specific pickup location..."></textarea>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full bg-lad-blue text-white font-bold text-sm uppercase tracking-widest py-5 rounded-sm hover:bg-lad-dark transition-all shadow-lg">
                  Submit Request
                </button>
                <p className="text-xs text-center text-gray-500 mt-6 font-light">
                  Submitting this form does not guarantee a booking. Our team will contact you shortly to confirm availability and pricing.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Payment & Process Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-200">
             <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-sm text-lad-blue mr-4 border border-gray-100"><Calendar size={24}/></div>
                <h3 className="font-serif font-bold text-lg text-gray-900">Booking Process</h3>
             </div>
             <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm font-light pl-2">
               <li>Submit the request form above.</li>
               <li>Receive a call/email with availability & quote.</li>
               <li>Confirm details and make a deposit.</li>
               <li>Receive driver details before pickup.</li>
             </ol>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-gray-200">
             <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-sm text-lad-blue mr-4 border border-gray-100"><CreditCard size={24}/></div>
                <h3 className="font-serif font-bold text-lg text-gray-900">Payment Methods</h3>
             </div>
             <p className="text-sm text-gray-600 mb-4 font-light">We offer flexible payment options for your convenience:</p>
             <ul className="space-y-3 text-gray-600 text-sm font-light">
               <li className="flex items-center"><CheckCircle size={14} className="text-lad-blue mr-3 shrink-0"/> Mobile Money (MTN/Telecel)</li>
               <li className="flex items-center"><CheckCircle size={14} className="text-lad-blue mr-3 shrink-0"/> Bank Transfer</li>
               <li className="flex items-center"><CheckCircle size={14} className="text-lad-blue mr-3 shrink-0"/> Cash (at office or pickup)</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
};

export default App;