import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-adminpatients',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './adminpatients.component.html',
  styleUrl: './adminpatients.component.css'
})
export class AdminpatientsComponent {

}
