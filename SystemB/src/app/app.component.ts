import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { RegisterComponent } from './register/register.component';  // Adjust the path as needed
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminpatientsComponent } from './adminpatients/adminpatients.component';
import { AdminappointmentsComponent } from './adminappointments/adminappointments.component';
import { AdminreportsComponent } from './adminreports/adminreports.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    AdminloginComponent,
    UserloginComponent,
    AdmindashboardComponent,
    AdminpatientsComponent, 
    AdminappointmentsComponent,
    AdminreportsComponent,
    AdminsettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SystemB';

  ngOnInit(): void {
    initFlowbite(); // Initialize Flowbite components
  }
}
