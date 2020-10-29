import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alert: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  login ()
  {
      this.alert = true;

  }  
 close() {
  this.alert = false;
 }
}
