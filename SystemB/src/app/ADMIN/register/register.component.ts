import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isTermsAccepted: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}



  // Method to handle form submission
  onSubmit() {
    
    // Password match check
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Email validation check (contains '@gmail.com')
    if (!this.email.includes('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    // Password length check (at least 6 characters)
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // API URL for the registration endpoint
    const apiUrl = 'http://localhost/API/carexusapi/backend/systemb.php?action=register';
    
    // Data to be sent to the backend
    const registerData = {
      email: this.email,
      password: this.password,
    };

    // Send a POST request to the backend
    this.http.post(apiUrl, registerData).pipe(
      catchError(error => {
        console.error('Registration failed:', error);
        alert('There was an error registering. Please try again.');
        return of(null);  // Return an observable with a null value in case of an error
      })
    ).subscribe(response => {
      if (response) {
        console.log('Registration successful:', response);
        // Redirect to login or dashboard after successful registration
        this.router.navigate(['/login']);
      }
    });
  }

  // Navigate to the Login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
