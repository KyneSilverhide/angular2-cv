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
var Education = (function () {
    function Education() {
    }
    return Education;
}());
var Project = (function () {
    function Project() {
    }
    return Project;
}());
var EducationComponent = (function () {
    function EducationComponent() {
        this.educations = [
            {
                startDate: "2005",
                endDate: "2010",
                school: "Université de Mons (UMONS)",
                schoolUrl: "http://www.umons.ac.be",
                cursus: "Master en Sciences Informatiques",
                projects: [{
                        type: "Mémoire",
                        title: "Software Architecture, Evolution, and the COSA Metamodel",
                        url: ""
                    }, {
                        type: "Projet",
                        title: "Plateforme de gestion des stages” (PHP)",
                        url: ""
                    }]
            },
            {
                startDate: "1999",
                endDate: "2005",
                school: "Athénée Provincial de La Louvière (APLL)",
                schoolUrl: "http://www.ecoles.cfwb.be/aplalouviere/",
                cursus: "Sciences - Mathématiques",
                projects: []
            },
        ];
    }
    return EducationComponent;
}());
EducationComponent = __decorate([
    core_1.Component({
        selector: 'cv-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.css', '../../app.component.css']
    }),
    __metadata("design:paramtypes", [])
], EducationComponent);
exports.EducationComponent = EducationComponent;
