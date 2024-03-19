import { Component } from '@angular/core';
import { CounterCartService } from 'src/app/services/counter-cart.service';
import { SharedcartServiceService } from 'src/app/services/sharedcart-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  collapsed=false;
  showpopub:any
  count: any;
  constructor( public sharedcartService: SharedcartServiceService ,private CounterCartService:CounterCartService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedcartService.showcart1$.subscribe((showpopub)=>{
      this.showpopub=showpopub
    });
    this.CounterCartService.count$.subscribe((count) => {
      this.count = count;
    });
 }
  togglecollase():void{
    this.collapsed = !this.collapsed;
  }
  closeSidenav():void{
    this.collapsed =false;
  }
  opencart(){
    this.sharedcartService.showwcart()
    this.showpopub=this.sharedcartService.showcart
  }

}
