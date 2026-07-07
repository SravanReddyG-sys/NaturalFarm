import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule,RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], 
})
export class Login {
  loginForm: FormGroup;
  animationState = 'in';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      window.alert("Login Successful");
      console.log('Login submitted:', this.loginForm.value);
      this.router.navigate(['/home']);
    }
  }
}
