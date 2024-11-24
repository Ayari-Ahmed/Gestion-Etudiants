import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    { name: 'Ayari Ahmed', role: 'CEO & Founder', img: 'assets/images/img.png' },
  ];

  coreValues = [
    { title: 'Innovation', description: 'Pushing boundaries to bring fresh ideas to life.' },
    { title: 'Integrity', description: 'Acting with honesty and transparency in all that we do.' },
    { title: 'Collaboration', description: 'Working together to achieve great things.' }
  ];
}
