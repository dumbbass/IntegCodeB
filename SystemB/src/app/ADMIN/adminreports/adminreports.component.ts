import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-adminreports',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './adminreports.component.html',
  styleUrl: './adminreports.component.css'
})
export class AdminreportsComponent {

  // Summary data properties
  totalPatients: number = 500; // Example value
  appointmentsThisWeek: number = 30; // Example value
  appointmentsThisMonth: number = 120; // Example value
  totalAppointments: number = 120; // Example value
  missedAppointments: number = 10; // Example value

  // Method to handle exporting data
  exportData(type: string) {
    console.log(`Exporting ${type} data`);
    // Implement logic to export data as CSV or PDF
  }
}
