import { Injectable } from '@angular/core';

import { Experience } from './data.model';
import { SocialLink } from './data.model';
import { Language } from './data.model';
import { Hobby } from './data.model';
import { Education } from './data.model';
import { Skill } from './data.model';
import { Category } from './data.model';
import { Profile } from './data.model';

import { EXPERIENCES } from '../../data/data.experience';
import { EDUCATIONS } from '../../data/data.education';
import { HOBBIES } from '../../data/data.hobbies';
import { PROFILE } from '../../data/data.profile';
import { LANGUAGES } from '../../data/data.profile';
import { SOCIAL_LINKS } from '../../data/data.profile';
import { SKILL_CATEGORIES } from '../../data/data.skills';

@Injectable()
export class CVDataService {
  getExperiences(): Promise<Experience[]> {
    return Promise.resolve(EXPERIENCES);
  }
  getEducations(): Promise<Education[]> {
    return Promise.resolve(EDUCATIONS);
  }
  getHobbies(): Promise<Hobby[]> {
    return Promise.resolve(HOBBIES);
  }
  getProfile(): Promise<Profile> {
    return Promise.resolve(PROFILE);
  }
  getLanguages(): Promise<Language[]> {
    return Promise.resolve(LANGUAGES);
  }
  getSocialLinks(): Promise<SocialLink[]> {
    return Promise.resolve(SOCIAL_LINKS);
  }
  getSkillCategories(): Promise<Category[]> {
    return Promise.resolve(SKILL_CATEGORIES);
  }
}
