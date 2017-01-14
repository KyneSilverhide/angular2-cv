import { Component, OnInit } from '@angular/core';
import { Education } from '../services/data.model';
import { CVDataService } from '../services/cvdata.service';

@Component({
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../app.component.css'],
  providers: [CVDataService]
})
export class EducationComponent implements OnInit {

  educations: Education[];

  constructor(private dataService: CVDataService) { }

  ngOnInit() {
    this.dataService.getEducations().then(educations => this.educations = educations);
  }
}
