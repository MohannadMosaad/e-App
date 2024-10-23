import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-component',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  constructor(private router: Router) { }

  navigateToContact() {
    this.router.navigate(['/layout/contact']);
  }
}

