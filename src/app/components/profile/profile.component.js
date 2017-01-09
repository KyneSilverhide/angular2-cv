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
var SocialLink = (function () {
    function SocialLink() {
    }
    return SocialLink;
}());
var Skill = (function () {
    function Skill() {
    }
    return Skill;
}());
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.socialLinks = [
            {
                name: "Github",
                url: "https://github.com/kynesilverhide/",
                icon: "fa-github"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/lansmannea",
                icon: "fa-linkedin"
            },
            {
                name: "Google+",
                url: "https://plus.google.com/110217888418543668828",
                icon: "fa-google-plus"
            }
        ];
        this.skills = [
            {
                name: "Français",
                percentage: 100,
                comment: "Langue maternelle"
            },
            {
                name: "Anglais",
                percentage: 75,
                comment: "Niveau avancé"
            },
            {
                name: "Néerlandais",
                percentage: 20,
                comment: "Notions scolaires"
            }
        ];
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'cv-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css', '../../app.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
