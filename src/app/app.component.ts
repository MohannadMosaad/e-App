import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './Register/Register.component';
import { MainLayoutComponent } from "./mainLayout/mainLayout.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, FooterComponent, HeaderComponent, CartComponent, LoginComponent, RegisterComponent, MainLayoutComponent,RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
