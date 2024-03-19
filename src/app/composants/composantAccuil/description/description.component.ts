import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as AOS from 'aos'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  constructor(private r:Router){}
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
navigation(){
  this.r.navigateByUrl('Menu/Burgers')
}
}
