import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Login form data
  loginData = {
    email: '',
    password: ''
  };

  // Register form data
  registerData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
    this.successMessage = '';
  }

  onLogin() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'لطفاً تمام فیلدها را پر کنید';
      this.isLoading = false;
      return;
    }

    console.log('Attempting login with:', this.loginData);

    this.http.post('http://localhost:3000/auth/login', this.loginData)
      .subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
          this.successMessage = 'ورود با موفقیت انجام شد!';
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token);
          this.isLoading = false;
          // You can redirect user here
        },
        error: (error) => {
          console.log('Login error:', error);
          this.errorMessage = error.error?.message || 'خطا در ورود به سیستم';
          this.isLoading = false;
        }
      });
  }

  onRegister() {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    if (!this.registerData.fullName || !this.registerData.email || 
        !this.registerData.password || !this.registerData.confirmPassword) {
      this.errorMessage = 'لطفاً تمام فیلدها را پر کنید';
      this.isLoading = false;
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'رمز عبور و تکرار آن یکسان نیستند';
      this.isLoading = false;
      return;
    }

    const registerPayload = {
      fullName: this.registerData.fullName,
      email: this.registerData.email,
      password: this.registerData.password
    };

    this.http.post('http://localhost:3000/auth/register', registerPayload)
      .subscribe({
        next: (response) => {
          this.successMessage = 'ثبت نام با موفقیت انجام شد! لطفاً وارد شوید.';
          console.log('Registration successful:', response);
          this.isLoading = false;
          // Clear form
          this.registerData = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
          };
          // Switch to login mode after 2 seconds
          setTimeout(() => {
            this.isLoginMode = true;
            this.successMessage = '';
          }, 2000);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'خطا در ثبت نام';
          this.isLoading = false;
        }
      });
  }
}
