import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-adminsettings',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './adminsettings.component.html',
  styleUrl: './adminsettings.component.css'
})
export class AdminsettingsComponent {

}
