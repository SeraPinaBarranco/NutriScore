import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imagen: string;
  constructor() {
    this.imagen = '../../../assets/img/images.jpeg';
  }

  ngOnInit(): void {
  }

}
