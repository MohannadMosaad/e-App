import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainLayout',
  standalone:true,
  templateUrl: './mainLayout.component.html',
  styleUrls: ['./mainLayout.component.css'],
  imports:[HeaderComponent, FooterComponent, RouterOutlet]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
