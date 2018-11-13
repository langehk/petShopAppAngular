import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
title = 'welcome to the petshop 2018!!';
  constructor() { }

  ngOnInit() {
  }

}
