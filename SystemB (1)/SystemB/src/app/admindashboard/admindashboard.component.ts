import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  imports: [RouterModule],
})
export class AdmindashboardComponent implements OnInit {
  activeUsers = 1200; // Sample data
  newPatients = 80; // Sample data
  completedAppointments = 400; // Sample data (moved to the chart section)

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderPatientGrowthChart();
    this.renderAppointmentTrendsChart();
    this.renderCompletedAppointmentsChart(); // New chart for completed appointments
  }

  renderPatientGrowthChart(): void {
    const ctx = document.getElementById('patientGrowthChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug','Sep', 'Oct', 'Nov','Dec'],
        datasets: [
          {
            label: 'Patients',
            data: [20,40,60,80,100,120,140,160,180,200,220,240], // Example data
            borderColor: '#6A42C2',
            backgroundColor: 'rgba(106, 66, 194, 0.2)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  renderAppointmentTrendsChart(): void {
    const ctx = document.getElementById('appointmentTrendsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug','Sep', 'Oct', 'Nov','Dec'],
        datasets: [
          {
            label: 'Appointments',
            data: [20,20,60,50,100,140,150,100,180,200,150,240], // Example data
            backgroundColor: '#6A42C2',
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  renderCompletedAppointmentsChart(): void {
    const ctx = document.getElementById('completedAppointmentsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line', // Line chart for trend
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug','Sep', 'Oct', 'Nov','Dec'],
        datasets: [
          {
            label: 'Completed Appointments',
            data: [20,20,60,50,100,140,150,100,180,200,150,240], // Example data
            borderColor: '#6A42C2',
            backgroundColor: 'rgba(106, 66, 194, 0.2)',
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}
