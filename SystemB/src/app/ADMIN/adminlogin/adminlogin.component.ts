import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service'; // Import AuthService
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // Add necessary imports for the component
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  // Method to navigate to Register page
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Method to handle form submission and login
  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response['status']) {
          // If login is successful, store the token and navigate
          this.authService.setToken(response['token']); // Assuming the token is returned from the server
          this.router.navigate(['/admindashboard']);
        } else {
          // Handle login failure (e.g., show error message)
          alert(response['message']);
        }
      },
      error => {
        alert('Error: ' + error.message);
      }
    );
  }
}
