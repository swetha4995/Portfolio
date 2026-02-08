
export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}
