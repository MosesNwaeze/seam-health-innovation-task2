import { Component, OnInit } from '@angular/core';
import {  } from "./api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task2';

  constructor() { }

  ngOnInit(): void {
     console.log("")
  }



}
