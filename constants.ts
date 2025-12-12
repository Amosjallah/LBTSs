import { Car, Plane, Users, Key, UserCheck, CalendarClock, GraduationCap, MapPin } from 'lucide-react';
import { ServiceItem, FleetItem, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "LAD Brothers Transport Services",
  phone: "0244591777",
  location: "Ashaley Botwe, Accra – Greater Accra Region",
  email: "info@ladbrotherstransport.com", // Placeholder
  tagline: "First-Class Reliability, Safety, and Comfort.",
  intro: "LAD Brothers Transport Services is a fully registered transportation and car rental company based in Accra, Ghana. We provide reliable, safe, and timely transport services for individuals, companies, institutions, and organizations.",
  mission: "To provide safe, reliable, and affordable transport solutions across Ghana.",
  vision: "To be the leading transport service provider in West Africa, known for excellence and customer satisfaction."
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'daily-hire',
    title: 'Daily Car Hire',
    description: 'Hire any car from our fleet for a full day of unrestricted movement.',
    icon: Car,
    // Sedan on road
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Experience the freedom of movement with our Daily Car Hire service. Whether you need a saloon car for city runs or a robust 4x4 for rougher terrains, we offer flexible daily rates competitive in the Ghana market.'
  },
  {
    id: 'airport-transfer',
    title: 'Airport Pickup & Drop-off',
    description: 'Fast, timely, and professional airport transfers to and from Kotoka International Airport.',
    icon: Plane,
    // Luxury black car
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Never miss a flight or wait endlessly upon arrival. Our professional drivers track your flight schedule to ensure timely pickup and drop-off at Kotoka International Airport (ACC).'
  },
  {
    id: 'staff-busing',
    title: 'Staff Busing',
    description: 'Efficient transport for workers or clients from various locations to work.',
    icon: Users,
    // Bus/Van
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Enhance employee punctuality and morale with our corporate staff busing services. We manage routes and schedules to ensure your team arrives safely and on time, every time.'
  },
  {
    id: 'self-drive',
    title: 'Self-Drive Rentals',
    description: 'Select cars rented without a driver for full privacy and flexibility.',
    icon: Key,
    // Modern sedan/SUV exterior
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'For those who prefer to be behind the wheel, our Self-Drive option offers fully insured, roadworthy vehicles for your personal or business use with complete privacy.'
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur Drive',
    description: 'Well-trained licensed drivers for all destinations nationwide.',
    icon: UserCheck,
    // Chauffeur driven car exterior
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Sit back and relax while our experienced drivers (10+ years experience) navigate Ghana’s roads. Ideal for executives, expatriates, and special occasions.'
  },
  {
    id: 'lease',
    title: 'Short & Long-Term Lease',
    description: 'Custom contract packages for 6 months or more.',
    icon: CalendarClock,
    // Fleet of cars
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'We offer tailored leasing solutions for individuals and corporations looking for long-term mobility without the hassle of vehicle ownership and maintenance.'
  },
  {
    id: 'school-transport',
    title: 'School Transport Services',
    description: 'Safe pickup and drop-off for children or school contracts.',
    icon: GraduationCap,
    // School Bus/Van
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Safety is our priority. Our school transport service ensures children are picked up and dropped off safely, giving parents peace of mind.'
  },
  {
    id: 'tourism',
    title: 'Tourism Transport',
    description: 'Organized tours for individuals, companies, schools, and NGOs.',
    icon: MapPin,
    // Safari/Tour Vehicle
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    detailedDescription: 'Explore the beauty of Ghana with our tourism packages. From Kakum National Park to Mole National Park, our rugged 4x4s and comfortable buses are ready for the journey.'
  }
];

export const FLEET: FleetItem[] = [
  {
    id: 'saloon',
    category: 'Saloon Cars',
    description: 'Fuel-efficient and comfortable sedans perfect for city errands and business meetings.',
    capacity: '4 Passengers',
    features: ['Air Conditioned', 'Comfortable Seating', 'Fuel Efficient'],
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4x4',
    category: '4x4 Vehicles',
    description: 'Robust SUVs designed for comfort and handling Ghana’s varied terrains.',
    capacity: '5-7 Passengers',
    features: ['High Ground Clearance', '4WD', 'Luxury Interiors'],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'buses',
    category: 'Buses & Coaches',
    description: 'Wide range of buses for staff busing, school transport, and large group tours.',
    capacity: '12 - 60 Seaters',
    features: ['Spacious', 'Luggage Compartments', 'PA Systems available'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'trucks',
    category: 'Trucks',
    description: 'Reliable trucks for logistics and moving goods.',
    capacity: 'Varies',
    features: ['Heavy Duty', 'Secure Storage'],
    // Updated Truck Image - White box truck
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Kwame Asante",
    role: "Corporate Client",
    content: "LAD Brothers handled our staff busing impeccably. The drivers are professional and always on time."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Tourist",
    content: "Rented a 4x4 for a trip to the Volta Region. The car was in perfect condition and the service was excellent."
  },
  {
    id: 3,
    name: "Emmanuel Ofori",
    role: "Event Planner",
    content: "Their fleet options are amazing. We got everything from saloon cars to a 60-seater bus for our event."
  }
];