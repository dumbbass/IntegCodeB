import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],  // ✅ Add CommonModule here
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  sidebarOpen: boolean = false;

  constructor(@Inject(Router) private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/adminlogin']);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  // Navigate to the selected page
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeSidebar();  // Close sidebar on click
  }
}
