import { Skill } from "../components/services/data.model";
import { Category } from "../components/services/data.model";

export const SKILL_CATEGORIES: Category[] = [
  {
    name: "Frontend",
    tools: ["Yeoman", "NPM", "Meteor"],
    skills: [
      { name: "HTML/CSS", percentage: 80 },
      { name: "Material Design", percentage: 80 },
      { name: "Bootstrap", percentage: 80 },
      { name: "Javascript", percentage: 75 },
      { name: "Angular 6 / Typescript", percentage: 75 },
      { name: "JQuery", percentage: 70 }
    ]
  },
  {
    name: "Backend",
    tools: ["ANT", "Maven"],
    skills: [
      { name: "Java/J2EE/EJB3", percentage: 90 },
      { name: "REST/SOAP", percentage: 80 },
      { name: "Wildfly (Jboss)", percentage: 75 },
      { name: "Spring", percentage: 70 },
      { name: "Hibernate", percentage: 50 },
      { name: "Caché (Intersystems)", percentage: 50 }
    ]
  },
  {
    name: "Base de données",
    tools: [],
    skills: [
      { name: "PostgreSQL", percentage: 80 },
      { name: "SQLServer", percentage: 70 },
      { name: "MongoDB", percentage: 50 },
      { name: "Caché", percentage: 40 }
    ]
  },
  {
    name: "Version Control Systems",
    tools: ["CVS", "SVN"],
    skills: [{ name: "GIT", percentage: 85 }]
  },
  {
    name: "Developpement et Outils",
    tools: [
      "IntelliJ",
      "Eclipse",
      "VmWare",
      "VirtualBox",
      "Ubuntu",
      "Visual Studio Code"
    ],
    skills: []
  }
];
