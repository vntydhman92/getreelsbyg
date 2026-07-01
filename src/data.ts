import {
  Camera,
  Clapperboard,
  Film,
  Instagram,
  Mail,
  MapPin,
  MonitorPlay,
  Phone,
  Scissors,
  Smartphone,
  Star,
  Users,
  Video,
  Wand2
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: 'GetReelsByG',
  tagline: 'Wedding Stories. Cinematic Frames. Photography | Wedding Films | Content Creation. Creating magic for your big day ✨',
  founder: 'GAUTAM',
  type: 'Graphic Designer & Freelance Videographer',
  location: 'Jagadhri, India',
  phone: '+91 9996170559',
  email: 'gdhiman027@gmail.com',
  instagram: '@getreelsbyg',
  experience: '4+ Years',
  projectsCompleted: '389+',
  happyClients: '180+'
};

export const SERVICES = [
  {
    title: 'Instagram Reel Creation',
    icon: Smartphone,
    features: [
      'Cinematic Editing',
      'Trend-Based Reels',
      'Color Grading',
      'Motion Graphics',
      'Sound Design'
    ],
    price: 'Starting from ₹2,500',
    description: 'Engaging, trendy, and cinematic reels tailored for Instagram growth.'
  },
  {
    title: 'Wedding Reel Package',
    icon: Video,
    features: [
      'Pre-Wedding Highlights',
      'Wedding Day Reels',
      'Couple Story Videos',
      'Drone Shots',
      'Social Media Teasers'
    ],
    price: 'Starting from ₹15,000',
    description: 'Capture the magical moments of your special day with our cinematic touch.'
  },
  {
    title: 'Brand Promotional Videos',
    icon: Clapperboard,
    features: [
      'Product Shoots',
      'Store Walkthroughs',
      'Customer Testimonials',
      'Ad Creatives',
      'Corporate Videos'
    ],
    price: 'Starting from ₹8,000',
    description: 'High-quality promotional videos to elevate your brand identity.'
  },
  {
    title: 'Event Coverage',
    icon: Users,
    features: [
      'Birthday Parties',
      'College Events',
      'Corporate Events',
      'Fashion Shows',
      'Launch Events'
    ],
    price: 'Starting from ₹10,000',
    description: 'Comprehensive coverage of your important events and celebrations.'
  }
];

import bridalImg from './assets/images/portfolio_bridal_1782585878755.jpg';
import cafeImg from './assets/images/portfolio_cafe_1782585898865.jpg';
import weddingImg from './assets/images/portfolio_wedding_1782585914933.jpg';
import gymImg from './assets/images/portfolio_gym_1782585929262.jpg';

export const PORTFOLIO = [
  {
    title: 'Luxe Bridal Studio',
    category: 'Bridal Fashion',
    deliverables: [
      '5 Instagram Reels',
      'Product Showcase Video',
      'Behind-the-Scenes Content'
    ],
    result: ['120K+ Views', '3X Increase in Engagement'],
    image: bridalImg,
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' // Example video URL
  },
  {
    title: 'Café Aroma',
    category: 'Restaurant Marketing',
    deliverables: [
      'Food Reels',
      'Customer Experience Videos',
      'Instagram Stories'
    ],
    result: ['85K+ Reel Views', 'Increased Weekend Footfall'],
    image: cafeImg
  },
  {
    title: 'Royal Wedding Highlights',
    category: 'Wedding Videography',
    deliverables: [
      '60-Second Highlight Reel',
      'Cinematic Couple Film',
      'Social Media Teaser'
    ],
    result: ['200K+ Organic Views'],
    image: weddingImg
  },
  {
    title: 'FitNation Gym',
    category: 'Fitness Content',
    deliverables: [
      'Transformation Reels',
      'Workout Videos',
      'Promotional Campaign'
    ],
    result: ['500+ New Followers'],
    image: gymImg
  }
];

export const SKILLS = [
  { name: 'Adobe Premiere Pro', level: 95 },
  { name: 'After Effects', level: 85 },
  { name: 'DaVinci Resolve', level: 90 },
  { name: 'Color Grading', level: 92 },
  { name: 'Reel Editing', level: 98 },
  { name: 'Drone Videography', level: 80 },
  { name: 'Storytelling', level: 95 }
];

export const EQUIPMENT = {
  cameras: ['Sony A7 IV', 'Sony ZV-E10', 'DJI Pocket 3'],
  lenses: ['Sony 24-70mm f/2.8', 'Sigma 16mm f/1.4', 'Sony 50mm f/1.8'],
  drone: ['DJI Mini 4 Pro'],
  audio: ['Rode Wireless GO II', 'DJI Mic 2']
};

export const TESTIMONIALS = [
  {
    name: 'Priya Kapoor',
    text: "Absolutely loved the reel created for our wedding. The editing was cinematic and emotional."
  },
  {
    name: 'Rahul Mehta',
    text: "Our gym's Instagram engagement doubled after working with GetReelsByG."
  },
  {
    name: 'Simran Kaur',
    text: "Professional, creative, and always delivers on time."
  }
];

export const STATS = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '180+' },
  { label: 'Total Video Views', value: '15M+' },
  { label: 'Years Experience', value: '4+' },
  { label: 'Reels Created', value: '500+' }
];

export const PRICING = [
  {
    name: 'Starter Package',
    price: '₹2,500',
    features: [
      '1 Reel',
      'Basic Editing',
      'Music Sync',
      'Delivery in 3 Days'
    ]
  },
  {
    name: 'Growth Package',
    price: '₹8,000',
    features: [
      '5 Reels',
      'Advanced Editing',
      'Motion Graphics',
      'Color Grading'
    ],
    popular: true
  },
  {
    name: 'Premium Package',
    price: '₹15,000',
    features: [
      '10 Reels',
      'Cinematic Editing',
      'Drone Shots',
      'Priority Delivery'
    ]
  }
];

export const FAQS = [
  {
    question: 'How long does it take to deliver a reel?',
    answer: 'Usually 2–5 business days depending on project complexity.'
  },
  {
    question: 'Do you travel for shoots?',
    answer: 'Yes, available across Punjab, Haryana, Himachal Pradesh, and Delhi NCR.'
  },
  {
    question: 'Can you edit footage provided by clients?',
    answer: 'Yes, both shooting and editing services are available.'
  },
  {
    question: 'Do you create content for businesses?',
    answer: 'Yes, I create social media content for brands, restaurants, gyms, salons, and startups.'
  }
];
