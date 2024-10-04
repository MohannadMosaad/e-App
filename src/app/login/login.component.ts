import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports: [CommonModule, FormsModule] 
})

export class LoginComponent {
addProduct(_t5: NgForm) {
throw new Error('Method not implemented.');
}
  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('  You have been logged in successfully !');
    } else {
      console.log('  Please check that the data is entered correctly.    .');
    }
  }
  onSubmit() {  
    console.log('Form submitted');  
  }  
}