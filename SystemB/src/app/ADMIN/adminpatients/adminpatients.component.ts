import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminpatients',
  standalone: true,
  imports: [SidenavComponent, FormsModule, CommonModule],
  templateUrl: './adminpatients.component.html',
  styleUrl: './adminpatients.component.css'
})
export class AdminpatientsComponent {
  searchName: string = '';
  filterGender: string = '';
  filterMonth: string = '';
  filterYear: string = '';
  years: number[] = [];

  patients = [
    { name: 'Ar-jay Stephenbel P. San Jose', dob: '2004-06-07', gender: 'Male', condition: 'Condition A', lastVisit: '2024-12-09' },
    { name: 'Keanu Nedruda', dob: '2000-01-01', gender: 'Male', condition: 'Condition B', lastVisit: '2024-12-09' },
    { name: 'Jeffrey Olaes', dob: '2001-03-03', gender: 'Male', condition: 'Condition C', lastVisit: '2024-12-09' },
    { name: 'Charles Singuancia', dob: '2000-01-22', gender: 'Male', condition: 'Condition D', lastVisit: '2024-12-09' },
    { name: 'Jhon Lloyd Terqueza', dob: '2002-10-09', gender: 'Male', condition: 'Condition E', lastVisit: '2024-12-09' }
  ];

  constructor() {
    this.initializeYears();
  }

  initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year);
    }
  }

  filteredPatients() {
    return this.patients.filter(patient => {
      const matchesName = patient.name.toLowerCase().includes(this.searchName.toLowerCase());
      const matchesGender = this.filterGender ? patient.gender === this.filterGender : true;
      const matchesMonth = this.filterMonth ? patient.dob.slice(5, 7) === this.filterMonth : true;
      const matchesYear = this.filterYear ? patient.dob.slice(0, 4) === this.filterYear : true;

      return matchesName && matchesGender && matchesMonth && matchesYear;
    });
  }
}
