import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  // Method to handle adding a patient
  addPatient() {
    console.log('Add Patient action triggered');
    // Implement logic to add a patient
  }

  // Method to handle scheduling an appointment
  scheduleAppointment() {
    console.log('Schedule Appointment action triggered');
    // Implement logic to schedule an appointment
  }
}
