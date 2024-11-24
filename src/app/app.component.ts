import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-routing';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const nav = document.querySelector('.classic-nav') as HTMLElement;
    if (window.scrollY > 50) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }
}
