import { Component, OnInit } from '@angular/core';
import { Hobby } from '../services/data.model';

import { CVDataService } from '../services/cvdata.service';

@Component({
  selector: 'cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css', '../../app.component.css'],
  providers: [CVDataService]
})
export class HobbyComponent implements OnInit {

  hobbies: Hobby[];

  constructor(private dataService: CVDataService) { }

  ngOnInit() {
    this.dataService.getHobbies().then(hobbies => this.hobbies = hobbies);
  }
}
