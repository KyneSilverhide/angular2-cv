
import { Component, OnInit } from '@angular/core';
import { Category } from '../services/data.model';
import { CVDataService } from '../services/cvdata.service';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../app.component.css'],
  providers: [CVDataService]
})
export class SkillComponent implements OnInit {

  categories: Category[];

  constructor(private dataService: CVDataService) { }

  ngOnInit() {
    this.dataService.getSkillCategories().then(categories => this.categories = categories);
  }
}
