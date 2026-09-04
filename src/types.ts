export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'IT Infrastructure' | 'Enterprise Solutions';
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featuredImage: string;
  liveUrl?: string;
  status: string;
  client: string;
  location: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  oneTimeAed: number;
  monthlyAed: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
  deliveryTime: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  iconName: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}
