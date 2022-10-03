export interface Company {
  name: string;
  link: string;
  description: string;
  role: string;
  startDt: string;
  endDt: string;
  projects: {
    name: string;
    skills: string[];
    period: string;
    description: string;
    tasks: string[];
  }[];
}

export interface Education {
  name: string;
  description: string;
  link: string;
  tasks: string[];
}

export interface MyData {
  name: string;
  git: string;
  email: string;
  about: string;
  phone: string;
  companies: Company[];
  educations: Education[];
}
