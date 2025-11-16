import { LucideIcon } from 'lucide-react';

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
  color: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

