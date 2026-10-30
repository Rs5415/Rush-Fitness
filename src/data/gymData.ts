/**
 * DEMO VERSION — CONTENT SUBJECT TO CLIENT APPROVAL
 * 
 * Central business information for RUSH Fitness — Unisex Gym & Fitness Centre
 * Romi Complex, Bompas Town, Deoghar, Jharkhand 814114, India
 */

export interface GymBusinessInfo {
  name: string;
  hindiTagline: string;
  tagline: string;
  businessType: string;
  complex: string;
  area: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  hoursDisplay: string;
  hoursDays: string;
  morningBatch: string;
  eveningBatch: string;
  hoursNotice: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedQuery: string;
}

export const initialGymInfo: GymBusinessInfo = {
  name: "RUSH Fitness",
  hindiTagline: "मेहनत आपकी, माहौल हमारा",
  tagline: "Unisex Gym — Deoghar, Jharkhand",
  businessType: "Unisex Gym / Fitness Centre",
  complex: "Romi Complex",
  area: "Bompas Town",
  landmark: "Central Bompas Town, Deoghar",
  city: "Deoghar",
  state: "Jharkhand",
  pincode: "814114",
  country: "India",
  fullAddress: "Romi Complex, Bompas Town, Deoghar, Jharkhand 814114, India",
  phoneDisplay: "+91 62061 95550",
  phoneRaw: "+916206195550",
  whatsappNumber: "916206195550",
  hoursDisplay: "5:00 AM – 11:00 PM",
  hoursDays: "Monday – Saturday",
  morningBatch: "Morning Batch: 5:00 AM – 11:00 AM",
  eveningBatch: "Evening Batch: 4:00 PM – 11:00 PM",
  hoursNotice: "Currently listed hours — verify before launch",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Romi+Complex,+Bompas+Town,+Deoghar,+Jharkhand+814114",
  googleMapsEmbedQuery: "Romi Complex, Bompas Town, Deoghar, Jharkhand 814114",
};

export interface ServiceItem {
  id: string;
  title: string;
  hindiSub: string;
  shortDesc: string;
  iconName: string;
  tag: string;
}

export const gymServices: ServiceItem[] = [
  {
    id: "strength-training",
    title: "Strength & Muscle Building",
    hindiSub: "स्ट्रेंथ और मसल ट्रेनिंग",
    shortDesc: "Progressive resistance routines and compound movements designed to build raw power, lean muscle mass, and physical stamina.",
    iconName: "Dumbbell",
    tag: "Core Strength",
  },
  {
    id: "weight-training",
    title: "Weight Training",
    hindiSub: "वेट ट्रेनिंग",
    shortDesc: "Complete free-weight and plate-loaded setups including Olympic bars, heavy dumbbells, and multi-angle benches.",
    iconName: "Flame",
    tag: "Iron Zone",
  },
  {
    id: "cardio",
    title: "Cardio & Fat Loss",
    hindiSub: "कार्डियो और वजन घटाएं",
    shortDesc: "Treadmills, cross-trainers, and spin cycles engineered for cardiovascular endurance, stamina, and efficient calorie burn.",
    iconName: "HeartPulse",
    tag: "Conditioning",
  },
  {
    id: "functional-training",
    title: "Functional & Core Training",
    hindiSub: "फंक्शनल फिटनेस",
    shortDesc: "Agility drills, kettlebell complexes, battle ropes, and core conditioning routines for real-world athletic mobility.",
    iconName: "Zap",
    tag: "Mobility",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    hindiSub: "पर्सनल ट्रेनिंग",
    shortDesc: "Dedicated one-on-one supervision tailored to your body type, fitness level, and timeline for focused transformation.",
    iconName: "UserCheck",
    tag: "1-on-1 Coaching",
  },
  {
    id: "fitness-guidance",
    title: "Floor Guidance & Form Correction",
    hindiSub: "वर्कआउट गाइडेंस",
    shortDesc: "Hands-on instruction on proper exercise form, safe machine adjustments, and warm-up routines so you never feel lost.",
    iconName: "Compass",
    tag: "Floor Assistance",
  },
  {
    id: "general-fitness",
    title: "General Fitness & Health",
    hindiSub: "जनरल फिटनेस",
    shortDesc: "Active lifestyle routines for working professionals, college students, and homemakers looking to stay fit and energetic.",
    iconName: "Activity",
    tag: "Daily Wellness",
  },
];

export interface IndianAmenity {
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
}

export const indianAmenities: IndianAmenity[] = [
  {
    title: "100% Power Backup",
    hindiTitle: "पावर बैकअप सुविधा",
    description: "Inverter and generator backup ensuring your workout is never interrupted by power cuts.",
    iconName: "Zap",
  },
  {
    title: "Chilled RO Water",
    hindiTitle: "ठंडा RO पेयजल",
    description: "Hygienic RO-filtered cold drinking water available on the gym floor at all times.",
    iconName: "Droplets",
  },
  {
    title: "Parking at Romi Complex",
    hindiTitle: "पार्किंग सुविधा",
    description: "Convenient parking space for bikes, scooters, and cars right at the complex.",
    iconName: "Car",
  },
  {
    title: "High-Bass Sound System",
    hindiTitle: "वर्कआउट म्यूजिक",
    description: "Energetic workout beats to keep your motivation high through every set and repetition.",
    iconName: "Speaker",
  },
  {
    title: "Lockers & Changing Area",
    hindiTitle: "लॉकर और चेंजिंग रूम",
    description: "Clean washrooms and secure storage cubbies for your gym bag, shoes, and personal belongings.",
    iconName: "Lock",
  },
  {
    title: "UPI & Cash Friendly",
    hindiTitle: "UPI पेमेंट सुविधा",
    description: "Quick payment via PhonePe, Google Pay, Paytm, BHIM UPI, Cards, or Cash at the desk.",
    iconName: "QrCode",
  },
];

export interface FacilityItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  badge: string;
  image: string;
}

export const gymFacilities: FacilityItem[] = [
  {
    id: "training-area",
    title: "Main Training Floor",
    hindiTitle: "मुख्य वर्कआउट एरिया",
    description: "Spacious, well-ventilated workout floor with high ceilings, non-slip rubber flooring, and ample room between workout stations.",
    badge: "Main Floor",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "strength-equipment",
    title: "Strength & Machine Section",
    hindiTitle: "मशीन सेक्शन",
    description: "Heavy-duty pin-loaded and plate-loaded machines: Lat pull-downs, chest press, seated row, leg press, and cable crossovers.",
    badge: "Machines",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cardio-area",
    title: "Cardio Conditioning Bay",
    hindiTitle: "कार्डियो स्टेशन",
    description: "Motorized commercial treadmills, cross-trainers, and spin bikes positioned for steady air circulation.",
    badge: "Cardio Suite",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "free-weights",
    title: "Heavy Free Weights & Barbells",
    hindiTitle: "डंबल और बारबेल ज़ोन",
    description: "Complete dumbbell rack ranging from beginner weights to heavy pairs, Olympic lifting barbells, and squat safety racks.",
    badge: "Iron Zone",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "functional-training-area",
    title: "Functional & Cross-Training Area",
    hindiTitle: "फंक्शनल ट्रेनिंग",
    description: "Open floor section with kettlebells, battle ropes, slam balls, resistance loops, and plyometric boxes for high-intensity training.",
    badge: "Athletics",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "changing-facilities",
    title: "Changing & Member Amenities",
    hindiTitle: "लॉकर और चेंजिंग रूम",
    description: "Clean member changing cubbies, personal bag lockers, hygienic washroom amenities, and chilled RO drinking water.",
    badge: "Amenities",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  },
];

export interface GalleryItem {
  id: string;
  category: "Gym" | "Equipment" | "Training" | "Workout Environment";
  title: string;
  caption: string;
  url: string;
}

export const gymGallery: GalleryItem[] = [
  {
    id: "g1",
    category: "Gym",
    title: "Spacious Training Bay",
    caption: "Well-ventilated floor with heavy-duty rubber flooring and high ceiling",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g2",
    category: "Equipment",
    title: "Heavy Dumbbell Section",
    caption: "Pairs ranging from 2.5 kg up to heavy lifting dumbbells",
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g3",
    category: "Training",
    title: "Powerlifting & Barbell Platform",
    caption: "Olympic barbells, bumper plates, and safety squat cages",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g4",
    category: "Equipment",
    title: "Cable Crossover & Multi-Station",
    caption: "Dual pulley machine for chest flyes, tricep pushdowns, and lat raises",
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g5",
    category: "Workout Environment",
    title: "High-Energy Athletic Ambience",
    caption: "Disciplined and motivating workout atmosphere in Bompas Town",
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g6",
    category: "Workout Environment",
    title: "Cardio Treadmill Section",
    caption: "Commercial treadmills with incline controls and heart rate sensors",
    url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface FaqItem {
  question: string;
  hindiQ: string;
  answer: string;
}

export const gymFaqs: FaqItem[] = [
  {
    question: "What are your gym timings?",
    hindiQ: "जिम का समय (Timings) क्या है?",
    answer: "RUSH Fitness is open Monday through Saturday from 5:00 AM to 11:00 PM. We offer flexible Morning Batches (5:00 AM – 11:00 AM) and Evening Batches (4:00 PM – 11:00 PM), suitable for college students, office workers, and businessmen. Please verify holiday and Sunday schedules with the desk.",
  },
  {
    question: "Where is RUSH Fitness located?",
    hindiQ: "RUSH Fitness देवघर में कहाँ स्थित है?",
    answer: "We are located at Romi Complex, Bompas Town, Deoghar, Jharkhand 814114. The complex is centrally located in Bompas Town with convenient access and parking facilities for bikes and cars.",
  },
  {
    question: "Is RUSH Fitness a unisex gym?",
    hindiQ: "क्या यह एक यूनिसेक्स (Unisex) जिम है?",
    answer: "Yes, RUSH Fitness is a 100% unisex fitness centre. We provide a disciplined, respectful, and safe workout environment welcoming both female and male members with dedicated floor guidance.",
  },
  {
    question: "How can I enquire about membership?",
    hindiQ: "मेंबरशिप और फीस के बारे में कैसे जानकारी लें?",
    answer: "You can submit an online enquiry using the form on this website, message us directly on WhatsApp, or call +91 62061 95550. Our team will share current membership packages, student discounts, and admission details.",
  },
  {
    question: "Do you provide personal training?",
    hindiQ: "क्या पर्सनल ट्रेनिंग (Personal Trainer) की सुविधा है?",
    answer: "Yes, personal training and tailored fitness guidance are available for members seeking dedicated 1-on-1 coaching, form supervision, and accelerated transformation goals. You can enquire directly at our front desk.",
  },
  {
    question: "How can I contact the gym?",
    hindiQ: "जिम से संपर्क कैसे करें?",
    answer: "You can call us directly on +91 62061 95550, send a message on WhatsApp for instant replies, or visit us in person at Romi Complex, Bompas Town during gym working hours.",
  },
];

export interface MembershipPlanTier {
  id: string;
  name: string;
  hindiName: string;
  duration: string;
  description: string;
  popular?: boolean;
  highlights: string[];
}

export const membershipTiers: MembershipPlanTier[] = [
  {
    id: "monthly",
    name: "Monthly Membership",
    hindiName: "मासिक प्लान",
    duration: "1 Month",
    description: "Great for beginners trying out the gym routine or those needing short-term flexibility.",
    highlights: ["Full gym floor access", "Cardio & strength equipment", "General workout orientation", "Locker & water access"],
  },
  {
    id: "quarterly",
    name: "Quarterly Membership",
    hindiName: "3 महीने का प्लान",
    duration: "3 Months",
    popular: true,
    description: "Our most popular choice to build consistent workout discipline and see real physical changes.",
    highlights: ["Complete facility access", "Cardio, free weights & machines", "Regular form guidance", "Best starter value"],
  },
  {
    id: "half-yearly",
    name: "Half-Yearly Membership",
    hindiName: "6 महीने का प्लान",
    duration: "6 Months",
    description: "Committed transformation period for serious muscle gain, weight reduction, and conditioning.",
    highlights: ["Full floor & cardio access", "Morning & evening batch flexibility", "Goal progress tracking", "Extended savings"],
  },
  {
    id: "annual",
    name: "Annual Membership",
    hindiName: "वार्षिक (1 साल) प्लान",
    duration: "12 Months",
    description: "Best long-term rate value for fitness lovers committed to a permanent active lifestyle.",
    highlights: ["Highest yearly savings", "Unlimited year-round access", "Priority trainer advice", "Lockers & changing facility"],
  },
];

export const clientLaunchChecklist = [
  { item: "Official Gym Logo / Brand Assets", status: "Official logo integrated & rendered across site", needsOwner: false },
  { item: "Actual Photographs of Romi Complex Gym", status: "High-res demo photos loaded", needsOwner: true },
  { item: "Final Confirmed Services List", status: "7 core categories ready", needsOwner: true },
  { item: "Equipment Inventory & Indian Amenities", status: "Power backup, RO water, lockers mapped", needsOwner: true },
  { item: "Official Membership Fee Structure & Offers", status: "Shown as 'Available on Enquiry'", needsOwner: true },
  { item: "Trainer Profiles & Certifications", status: "No fake trainers invented", needsOwner: true },
  { item: "Operating Hours (5:00 AM – 11:00 PM)", status: "Morning & Evening batches defined", needsOwner: true },
  { item: "Phone Number (+91 62061 95550)", status: "Active & tested in dial links", needsOwner: false },
  { item: "WhatsApp Integration", status: "Direct Indian chat flow linked", needsOwner: false },
  { item: "Google Maps Pin Location", status: "Mapped to Romi Complex, Bompas Town", needsOwner: true },
  { item: "Google Business / Customer Reviews", status: "Clean placeholder awaiting approval", needsOwner: true },
  { item: "Local SEO & Structured Data", status: "ExerciseGym JSON-LD with Deoghar coordinates", needsOwner: false },
];
