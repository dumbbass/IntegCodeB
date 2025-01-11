import { Routes } from '@angular/router';
import { RegisterComponent } from './ADMIN/register/register.component';
import { AdminloginComponent } from './ADMIN/adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdmindashboardComponent } from './ADMIN/admindashboard/admindashboard.component';
import { AdminpatientsComponent } from './ADMIN/adminpatients/adminpatients.component';
import { AdminappointmentsComponent } from './ADMIN/adminappointments/adminappointments.component';
import { AdminreportsComponent } from './ADMIN/adminreports/adminreports.component';
import { AdminsettingsComponent } from './ADMIN/adminsettings/adminsettings.component';
import { AuthGuard } from './auth.guard'; // Import AuthGuard
import { SidenavComponent } from './ADMIN/sidenav/sidenav.component';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'adminlogin', component: AdminloginComponent},
    {path: 'userlogin', component: UserloginComponent},
    {path: 'admindashboard', component: AdmindashboardComponent},
    {path: 'adminpatients', component: AdminpatientsComponent},
    {path: 'adminappointments', component: AdminappointmentsComponent},
    {path: 'adminreports', component: AdminreportsComponent},
    {path: 'adminsettings', component: AdminsettingsComponent},
    {path: 'sidenavComponent ', component: SidenavComponent},
    
    

    { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
    { path: '**', redirectTo: '/adminlogin', pathMatch: 'full'}, // Placeholder route
];
