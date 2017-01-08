import { Component } from '@angular/core';

class Experience {
  startDate: string;
  endDate: string;
  company: string;
  companyUrl: string;
  jobTitle: string;
  description: string;
  keywords: string[];
}

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../app.component.css']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      startDate: "2016",
      endDate: "...",
      company: "Xperthis",
      companyUrl: "http://www.xperthis.be",
      jobTitle:"Software Architect",
      description: "Gestion d’une équipe de développement pour la finalisation du Serveur de Résultats. "
      + "Intégration d’une architecture REST, et de Spring Security. " +
      " Mise en place d’une procédure de tests et qualité.",
      keywords: ["REST", "Spring Security", "Postman", "Hibernate", "Spring MVC", "Maven", "JUnit", "JMeter"]
    },
    {
      startDate: "2016",
      endDate: "...",
      company: "Xperthis",
      companyUrl: "http://www.xperthis.be",
      jobTitle:"Software Architect",
      description: "",
      keywords: []
    }
  ];
}
