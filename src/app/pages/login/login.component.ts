import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,ButtonModule,InputTextModule,DividerModule,FloatLabelModule,PasswordModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  imagePath = 'assets/logo.png';
  loginForm = new FormGroup({
    email: new FormControl('',{ validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { validators: [Validators.required,Validators.minLength(6)] }),
  })

  onSubmit():void {
    console.log(this.loginForm.value)
  }
}
