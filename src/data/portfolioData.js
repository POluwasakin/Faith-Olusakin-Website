import { 
  ShoppingCart, 
  Globe, 
  Smartphone, 
  Zap, 
  Palette, 
  RefreshCw, 
  FileText, 
  Code,
  Heart,
  Target,
  Search,
  Layout,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Truck
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";


export const siteConfig = {
  name: "Faith Olusakin",
  title: "Faith Olusakin | Elite Shopify Expert & Frontend Developer",
  description: "Elite Shopify Expert & Frontend Developer helping brands grow with conversion-focused stores. Founder of Dola's Collection.",
  deploymentUrl: null, 
  phone: "0707 512 5812",
  email: "ifedolapoolusakin@gmail.com",
  location: "Lagos, Nigeria",
  profileImg: "/faith-profile.jpg",
};

export const themeColors = {
  vintage: {
    bg: "#fdfcf8",
    bgMuted: "#f5ece1",
    text: "#2a2b2e",
    primary: "#cc8b86", // Muted Rose
    secondary: "#b4a07b", // Muted Gold
    accent: "#8a9a5b", // Sage
    palette: ["#cc8b86", "#b4a07b", "#8a9a5b", "#d1cfc7", "#2a2b2e"]
  }
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "dola", label: "Dola's Collection" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faith-olusakin-1b9654225",
    Icon: Linkedin,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01f04ccc60e6bc595f",
    Icon: FaUpwork, // We'll handle custom icons in the component or keep Lucide for now if user didn't provide SVG
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourbabygirlfaith?igsh=MWY2eTdzdWFrNHpmMw==",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B924RnuDv/?mibextid=wwXIfr",
    Icon: Facebook,
  },
  {
    label: "Twitter",
    href: "https://x.com/ifedolapoolusa1",
    Icon: Zap, // Using Zap for now as a placeholder or maybe add Twitter icon if available
  },
];

export const dolaLinks = {
  instagram: "https://www.instagram.com/dolafashioncollections",
  tiktok: "https://www.tiktok.com/@dolafashioncollections",
  jumia: "https://www.jumia.com.ng/dola-fashion-collections/",
  facebook: "https://www.facebook.com/share/1CUkcAm36U/?mibextid=wwXIfr"
};

export const skills = [
  { label: "Shopify", Icon: ShoppingCart },
  { label: "React/Next.js", Icon: Code },
  { label: "Frontend", Icon: Layout },
  { label: "Liquid", Icon: Zap },
  { label: "PageFly", Icon: Palette },
  { label: "CRO/UX", Icon: Target },
  { label: "SEO", Icon: Search },
  { label: "Marketing", Icon: FileText },
];

export const softSkills = [
  {
    title: "Conversion Focused",
    description: "Every pixel serves a purpose: turning your store visitors into loyal, paying customers.",
    Icon: Target,
    color: "pink",
  },
  {
    title: "Detail Driven",
    description: "I obsess over the small things—site speed, spacing, and accessibility—to create a premium feel.",
    Icon: Heart,
    color: "rose",
  },
  {
    title: "Brand Growth",
    description: "Founder of Dola's Collection, I understand the merchant side of business growth.",
    Icon: Zap,
    color: "amber",
  },
];

export const allProjects = [
  { title: "Roros", url: "https://roros.co.ke/", tags: ["Shopify", "E-commerce"], Icon: ShoppingCart },
  { title: "Modern Mensch", url: "https://www.modern-mensch.com/", tags: ["Shopify", "Premium"], Icon: ShoppingCart },
  { title: "Que Sera Estate", url: "https://queseraestate.com/", tags: ["Real Estate", "Luxury"], Icon: Globe },
  { title: "Best Dam Electricians", url: "https://bestdamelectricians.com/", tags: ["Service", "Business"], Icon: Globe },
  { title: "Okihasi", url: "https://okihasi.com/", tags: ["Lifestyle", "Branding"], Icon: ShoppingCart },
  { title: "Change Products LLC", url: "https://changeproductsllc.com/", tags: ["Manufacturing", "DTC"], Icon: ShoppingCart },
  { title: "OHM Med Spa", url: "https://ohmmedspa.com/", tags: ["Wellness", "Booking"], Icon: Globe },
  { title: "Faith2Print", url: "https://faith2print.com.au/", tags: ["Printing", "Australia"], Icon: Globe },
  { title: "Dop3 Fashion", url: "https://dop3fashion.com/", tags: ["Fashion", "Apparel"], Icon: ShoppingCart },
  { title: "Unmsqd Skincare", url: "https://unmsqdskincare.com/", tags: ["Beauty", "DTC"], Icon: ShoppingCart },
  { title: "Biorevola", url: "https://biorevola.com/", tags: ["Skincare", "Health"], Icon: ShoppingCart },
  { title: "Healing Tree", url: "https://www.healingtreenhic.com/", tags: ["Medical", "Wellness"], Icon: Globe },
  { title: "Balloon Studio", url: "https://theballoonstudio.org/", tags: ["Event", "Design"], Icon: Palette },
  { title: "Fait Par Foutch", url: "https://faitparfoutch.com/", tags: ["Luxury", "Fashion"], Icon: ShoppingCart },
  { title: "Buy Plotter Supplies", url: "https://buyplottersupplies.com/", tags: ["Industrial", "Shopify"], Icon: ShoppingCart },
  { title: "Airofit", url: "https://airofit.com/", tags: ["Tech", "Health"], Icon: Zap },
  { title: "Goshen Garden", url: "https://www.goshengarden.com/", tags: ["Lifestyle", "Garden"], Icon: Globe },
  { title: "Amamius", url: "https://amamius.com/", tags: ["E-commerce", "Global"], Icon: ShoppingCart },
  { title: "Ruens", url: "https://ruens.co/", tags: ["Fashion", "Boutique"], Icon: ShoppingCart },
  { title: "The Perfume Loft", url: "https://theperfumeloft.com", tags: ["Fragrance", "Luxury"], Icon: ShoppingCart },
  { title: "The Scent Lounge", url: "https://thescentloungestudio.com", tags: ["Experience", "Scent"], Icon: Globe },
  { title: "Saint Aya", url: "https://www.saintaya.com", tags: ["Bespoke", "Branding"], Icon: ShoppingCart },
];
