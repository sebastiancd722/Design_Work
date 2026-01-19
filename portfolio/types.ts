
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Design';
  bullets?: string[];
  contributions?: string[];
  notes?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type VisualShowcaseVariant = 
  | 'arcLeague' 
  | 'apexLegend' 
  | 'premiumGolf' 
  | 'prismatic' 
  | 'battleRap' 
  | 'futuristic' 
  | 'fashion' 
  | 'music' 
  | 'cyber' 
  | 'sciFiScout' 
  | 'unitedMono' 
  | 'street';

export interface VisualShowcaseConcept {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  highlights: string[];
  tools: string[];
  variant?: VisualShowcaseVariant;
}
