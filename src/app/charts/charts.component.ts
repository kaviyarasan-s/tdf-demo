import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  view: any[] = [500,500];

  data: any[] = [
  {"name":"US","value":100},
  {"name":"IND","value":500},
  {"name":"GOA","value":500}
  ];

  colorScheme = {
    domain: ['#0000A0', '#347C2C','#FBB117']
  };

  legendTitle: any ="Sample legendTitle"
  constructor() { }

  ngOnInit(): void {
  }

}
