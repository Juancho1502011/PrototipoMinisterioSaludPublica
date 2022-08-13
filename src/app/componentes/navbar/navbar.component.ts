import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private location: Location) { }

  url?:string = this.location.path();

  ngOnInit(): void {
    console.log(this.location.path());
    this.location.onUrlChange((val) => {
      console.log(val);
      this.url = val;
    }
    );
  }

  


}
