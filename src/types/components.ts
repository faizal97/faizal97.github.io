export interface NavigationProps {
  className?: string;
}

export interface HeroProps {
  name: string;
  title: string;
  description: string;
  profileImage: {
    src: string;
    alt: string;
  };
}

export interface SkillCardProps {
  name: string;
  level: number;
  icon?: string;
  category: string;
}

export interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  location?: string;
}

export interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
}
