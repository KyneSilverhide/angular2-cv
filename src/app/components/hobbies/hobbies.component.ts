import { Component } from '@angular/core';

export class Hobby {
  name: string;
  icon: string;
}

@Component({
  selector: 'cv-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css', '../../app.component.css']
})
export class HobbyComponent {

  hobbies: Hobby[] = [
    { name: "After Effects", icon: "fa-file-video-o" },
    { name: "Photoshop", icon: "fa-picture-o" },
    { name: "Jeux vidéos", icon: "fa-gamepad" },
    { name: "Musique", icon: "fa-headphones" },
    { name: "Films", icon: "fa-film" },
    { name: "Sci-Fi", icon: "fa-book" }
  ];
}
