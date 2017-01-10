import { Component } from '@angular/core';

class Category {
  name: string;
  skills: Skill[];
  tools: string[]
}

class Skill {
  name: string;
  percentage: number;
}

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../app.component.css']
})
export class SkillComponent {

  categories: Category[] = [
    {
      name: "Frontend",
      tools: ["Yeoman", "NPM"],
      skills: [
        {
          name: "Javascript", percentage: 75
        },
        {
          name: "JQuery", percentage: 70
        },
        {
          name: "HTML/CSS", percentage: 80
        },
        {
          name: "Angular", percentage: 65
        },
        {
          name: "Material Design", percentage: 80
        },
        {
          name: "Bootstrap", percentage: 80
        }]
    },
    {
      name: "Backend",
      tools: ["ANT", "Maven"],
      skills: [
        {
          name: "Java/J2EE/EJB3", percentage: 90
        },
        {
          name: "Jboss (Wildfly)", percentage: 75
        },
        {
          name: "Spring", percentage: 70
        },
        {
          name: "Hibernate", percentage: 50
        },
        {
          name: "REST/SOAP", percentage: 80
        }
      ]
    },
    {
      name: "Base de données",
      tools: [],
      skills: [
        {
          name: "PostgreSQL", percentage: 80
        },
        {
          name: "SQLServer", percentage: 70
        },
        {
          name: "MongoDB", percentage: 50
        }
      ]
    },
    {
      name: "Version Control Systems",
      tools: ["CVS", "SVN"],
      skills: [
        {
          name: "GIT", percentage: 85
        }
      ]
    },
    {
      name: "Developpement et Outils",
      tools: ["IntelliJ", "Eclipse", "VmWare", "VirtualBox", "Ubuntu"],
      skills: []
    },
  ];
}
