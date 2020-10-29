import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  SHOWHOME: boolean = true;
  SHOWABOUT: boolean = false;
  SHOWTABLE: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  about(){
    this.SHOWHOME = false;
    this.SHOWABOUT = true;
    this.SHOWTABLE= false;
  }
  home(){
    this.SHOWHOME = true;
    this.SHOWABOUT = false;
    this.SHOWTABLE= false;
  }
  table(){
    this.SHOWHOME = false;
    this.SHOWABOUT = false;
    this.SHOWTABLE= true;
  }
  
}
