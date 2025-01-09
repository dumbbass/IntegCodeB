import { Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminpatientsComponent } from './adminpatients/adminpatients.component';
import { AdminappointmentsComponent } from './adminappointments/adminappointments.component';
import { AdminreportsComponent } from './adminreports/adminreports.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';

export const routes: Routes = [
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'admindashboard', component: AdmindashboardComponent },
    { path: 'adminpatients', component: AdminpatientsComponent },
    { path: 'adminappointments', component: AdminappointmentsComponent },
    { path: 'adminreports', component: AdminreportsComponent },
    { path: 'adminsettings', component: AdminsettingsComponent },
    { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
    { path: '**', redirectTo: '/adminlogin', pathMatch: 'full' },
];
