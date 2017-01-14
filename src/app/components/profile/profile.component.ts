import { Component, OnInit } from '@angular/core';
import { Profile } from '../services/data.model';
import { SocialLink } from '../services/data.model';
import { Language } from '../services/data.model';
import { CVDataService } from '../services/cvdata.service';

@Component({
  selector: 'cv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../app.component.css'],
  providers: [CVDataService]
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  socialLinks: SocialLink[];
  languages: Language[];

  constructor(private dataService: CVDataService) { }

  ngOnInit() {
    this.dataService.getProfile().then(profile => this.profile = profile);
    this.dataService.getSocialLinks().then(socialLinks => this.socialLinks = socialLinks);
    this.dataService.getLanguages().then(languages => this.languages = languages);
  }
}
