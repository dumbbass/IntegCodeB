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

  // Method to handle exporting data
  exportData(type: string) {
    console.log(`Exporting ${type} data`);
    // Implement logic to export data as CSV or PDF
  }
}
