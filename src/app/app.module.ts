import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";
import "hammerjs";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillComponent } from "./components/skills/skills.component";
import { HobbyComponent } from "./components/hobbies/hobbies.component";

import { JoinPipe } from "./components/pipes/join.pipe";
import { OrderByNamePipe } from "./components/pipes/orderbyname.pipe";
import { OrderByMastery } from "./components/pipes/orderbymastery.pipe";

@NgModule({
  declarations: [
    AppComponent,
    JoinPipe,
    OrderByNamePipe,
    OrderByMastery,
    ProfileComponent,
    NavbarComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    HobbyComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, MaterialModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
