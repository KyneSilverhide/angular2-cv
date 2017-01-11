import { Component } from '@angular/core';

class SocialLink {
  name: string;
  url: string;
  icon: string;
}

class Language {
  name: string;
  percentage: number;
  comment: string;
}

class Profile {
  firstname: string;
  lastname: string;
  title: string;
  birthdate: string;
  address: string;
  mail: string;
  descriptionLines: string[];
}

@Component({
  selector: 'cv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../app.component.css']
})
export class ProfileComponent {

  profile: Profile = {
    firstname: "Aurélien",
    lastname: "Lansmanne",
    title: "Software Architect",
    birthdate: "25/03/1987",
    address: "Quaregnon (Mons)",
    mail: "aurelien.lansmanne@gmail.com",
    descriptionLines: [
      "Je suis passionné par l’informatique et les nouvelles technologies depuis mon enfance.",
      "\n",
      `Mes langages de prédilection sont le JAVA et le Javascript, mais diverses expériences personnelles m’ont conduit
      à m’aventurer du côté du web responsive et des architectures micro-services.
      J’ai pu m’essayer à d’autres paradigmes de base de données, et au développement fullstack.`,
      "\n",
      `J’ai l’esprit d’équipe, je suis rigoureux et toujours prêt à aider et à apprendre.
      J’ai eu l’occasion d’endosser plusieurs rôles, du développement à la gestion de projet,
      afin de toujours mener à bien les tâches qui m’étaient confiées.`,
      "\n",
      "Je dispose d’une bonne expérience du monde médical, et de la gestion d’une équipe de développement."
    ]
  }

  socialLinks: SocialLink[] = [
    { name: "Github", url: "https://github.com/kynesilverhide/", icon: "fa-github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lansmannea", icon: "fa-linkedin" },
    { name: "Google+", url: "https://plus.google.com/110217888418543668828", icon: "fa-google-plus" }
  ];

  languages: Language[] = [
    { name: "Français", percentage: 100, comment: "Langue maternelle" },
    { name: "Anglais", percentage: 75, comment: "Niveau avancé" },
    { name: "Néerlandais", percentage: 20, comment: "Notions scolaires" }
  ];
}
