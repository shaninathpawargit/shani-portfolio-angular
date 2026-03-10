export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  available: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  client: string;
  current: boolean;
  highlights: string[];
  tech: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  detail: string;
}

export interface Project {
  client: string;
  period: string;
  name: string;
  desc: string;
  stack: string[];
  featured: boolean;
}

export interface Award {
  icon: string;
  name: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
  bars: number;
}

export interface Interest {
  icon: string;
  label: string;
}

export type TimelineTab = 'experience' | 'education';

export interface PortfolioState {
  personal: PersonalInfo;
  stats: Stat[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  awards: Award[];
  languages: Language[];
  interests: Interest[];
  activeTimelineTab: TimelineTab;
  navScrolled: boolean;
  mobileMenuOpen: boolean;
}
