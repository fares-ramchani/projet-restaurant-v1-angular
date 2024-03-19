import { Component } from '@angular/core';
import * as AOS from 'aos'
import { SharedcartServiceService } from 'src/app/services/sharedcart-service.service';

@Component({
  selector: 'app-accuil',
  templateUrl: './accuil.component.html',
  styleUrls: ['./accuil.component.css']
})
export class AccuilComponent {
  showpopub=false
  constructor( public sharedcartService: SharedcartServiceService) {}
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
    this.showpopub=this.sharedcartService.showcart
  }

 


}
