import { Component } from '@angular/core';

class SocialLink {
  name: string;
  url: string;
  icon:string;
}

class Language {
  name: string;
  percentage: number;
  comment: string;
}

@Component({
  selector: 'cv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../app.component.css']
})
export class ProfileComponent {

  socialLinks: SocialLink[] = [
    {
      name: "Github",
      url: "https://github.com/kynesilverhide/",
      icon:"fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lansmannea",
      icon:"fa-linkedin"
    },
    {
      name: "Google+",
      url: "https://plus.google.com/110217888418543668828",
      icon:"fa-google-plus"
    }
  ];

  languages: Language[] = [
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
