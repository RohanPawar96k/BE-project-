import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  imageUrl: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Set the image URL
    this.imageUrl = 'assets/target.png';
  }
}
