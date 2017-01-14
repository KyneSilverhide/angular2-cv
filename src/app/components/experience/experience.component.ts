import { Component, OnInit } from '@angular/core';
import { Experience } from '../services/data.model';
import { CVDataService } from '../services/cvdata.service';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../app.component.css'],
  providers: [CVDataService]
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[];

  constructor(private dataService: CVDataService) { }

  ngOnInit() {
    this.dataService.getExperiences().then(experiences => this.experiences = experiences);
  }
}
