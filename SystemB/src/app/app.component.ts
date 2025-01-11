import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet] // Include RouterOutlet here
})
export class AppComponent implements OnInit {
  title = 'SystemB';

  ngOnInit(): void {
    initFlowbite(); // Initialize Flowbite if used
  }
}
