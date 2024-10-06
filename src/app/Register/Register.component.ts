import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'], 
  standalone:true,
  imports:[CommonModule, FormsModule]
})
export class RegisterComponent implements OnInit {
  password!: string;
  passwordConfirmation!: string;
  passwordConfirmationValidation: boolean= true
  constructor() { }
  addProduct(_t5: NgForm) {
    throw new Error('Method not implemented.');
    }
      onLogin(form: NgForm) {
        if (form.valid) {
          if(this.password === this.passwordConfirmation) {
            console.log('  You have been logged in successfully !');
            this.passwordConfirmationValidation = true
          } else {
            this.passwordConfirmationValidation = false
            console.log('  password done not match.    .');
          }
        } else {
          console.log('  Please check that the data is entered correctly.    .');
        }
      }
      onSubmit() {  
        console.log('Form submitted');  
      }  
      onpasswordConfirmation(passwordConfirmation:string) {
        console.log(passwordConfirmation)
      }

  ngOnInit() {
  }

}
