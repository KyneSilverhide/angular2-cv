"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Experience = (function () {
    function Experience() {
    }
    return Experience;
}());
var ExperienceComponent = (function () {
    function ExperienceComponent() {
        this.experiences = [
            {
                startDate: "2016",
                endDate: "...",
                company: "Xperthis",
                companyUrl: "http://www.xperthis.be",
                jobTitle: "Software Architect",
                description: "Gestion d’une équipe de développement pour la finalisation du Serveur de Résultats. "
                    + "Intégration d’une architecture REST, et de Spring Security. " +
                    " Mise en place d’une procédure de tests et qualité.",
                keywords: ["REST", "Spring Security", "Postman", "Hibernate", "Spring MVC", "Maven", "JUnit", "JMeter"]
            },
            {
                startDate: "2010",
                endDate: "2015",
                company: "Xperthis",
                companyUrl: "http://www.xperthis.be",
                jobTitle: "Software Engineer",
                description: "Développement d’un Serveur de Résultats et des interconnexions avec les autres produits de la gamme."
                    + "Compatibilité multi-base de données. Intégration des hubs Réseau de Santé Wallon, Abrumet et COZO. "
                    + " Mise en place d’une technologie permettant l’échange de données codifées entres plusieurs hôpitaux utilisant le produit.",
                keywords: ["SOAP", "Axis", "Jboss", "Ant", "EJB3", "JSP", "DHTMLX", "CVS", "GIT", "Prototype", "PostgreSQL", "SQLServer"]
            },
            {
                startDate: "Septembre 2010",
                endDate: "Novembre 2010",
                company: "Polymedis (Xperthis)",
                companyUrl: "http://www.xperthis.be",
                jobTitle: "Stage de fin d'étude",
                description: "Développement d’un prototype de Serveur de Résultats",
                keywords: []
            },
            {
                startDate: "Juillet 2007 et Août 2008",
                endDate: "",
                company: "Manufacture du Verre/Vidrala",
                companyUrl: "http://www.vidrala.com/en/",
                jobTitle: "Job étudiant",
                description: "Emballeur à froid",
                keywords: []
            }
        ];
    }
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    core_1.Component({
        selector: 'cv-experience',
        templateUrl: './experience.component.html',
        styleUrls: ['./experience.component.css', '../../app.component.css']
    }),
    __metadata("design:paramtypes", [])
], ExperienceComponent);
exports.ExperienceComponent = ExperienceComponent;
