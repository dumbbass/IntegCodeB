import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/API/carexusapi/backend/systemb.php?action=login';
  private tokenKey = 'auth_token'; // You can store the token in localStorage or sessionStorage

  constructor(private http: HttpClient, private router: Router) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(this.apiUrl, loginData);
  }

  // Store token when logged in
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Logout method
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/adminlogin']);
  }
}
