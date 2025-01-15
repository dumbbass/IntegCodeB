import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-adminappointments',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './adminappointments.component.html',
  styleUrl: './adminappointments.component.css'
})
export class AdminappointmentsComponent {

  // Method to handle scheduling a new appointment
  scheduleNewAppointment(event: Event) {
    event.preventDefault();
    console.log('Schedule new appointment action triggered');
    // Implement logic to schedule a new appointment
  }

  // Additional methods to manage appointments can be added here
}
