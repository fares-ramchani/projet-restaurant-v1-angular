import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos'

@Component({
  selector: 'app-description-pizza',
  templateUrl: './description-pizza.component.html',
  styleUrls: ['./description-pizza.component.css']
})
export class DescriptionPizzaComponent {
  constructor(private r:Router){}
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
  navigation(){
    this.r.navigateByUrl('Menu/Tacos')
  }
}
