export class Education {
  startDate: string;
  endDate: string;
  school: string;
  schoolUrl: string;
  cursus: string;
  projects: Project[];
}

export class Project {
  type: string;
  title: string;
  url: string;
}

export class Experience {
  startDate: string;
  endDate: string;
  company: string;
  companyUrl: string;
  jobTitle: string;
  description: string;
  keywords: string[];
}

export class Hobby {
  name: string;
  icon: string;
}

export class SocialLink {
  name: string;
  url: string;
  icon: string;
}

export class Language {
  name: string;
  percentage: number;
  comment: string;
}

export class Profile {
  firstname: string;
  lastname: string;
  title: string;
  birthdate: string;
  address: string;
  mail: string;
  descriptionLines: string[];
}

export class Category {
  name: string;
  skills: Skill[];
  tools: string[];
}

export class Skill {
  name: string;
  percentage: number;
}
