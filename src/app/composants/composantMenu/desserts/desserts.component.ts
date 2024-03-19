import { Component } from '@angular/core';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/desser1.png",name:"STRAWBERRY CAKEN",description:"Strawberry, soft cheese, icing sugar, butter softened",montant:8.55,favorier:false},
    {Image:"../assets/images/desser2.png",name:"BELGIAN WAFFLE",description:"Berries, Greek yogurt, ice cream, chocolate sauce, peanut butter",montant:8.35,favorier:false},
    {Image:"../assets/images/desser3.png",name:"CHEESECAKE",description:"Strawberry, double cream, icing sugar, soft cheese, biscuits",montant:7.99,favorier:false},
    {Image:"../assets/images/desser4.png",name:"CHOCOLATE CAKE",description:"Milk chocolate, icing sugar, cocoa powder, milk, vanilla extract",montant:7.45,favorier:false},
    {Image:"../assets/images/desser4.png",name:"CHOCOLATE CAKE",description:"Milk chocolate, icing sugar, cocoa powder, milk, vanilla extract",montant:7.45,favorier:false},
    {Image:"../assets/images/desser3.png",name:"CHEESECAKE",description:"Strawberry, double cream, icing sugar, soft cheese, biscuits",montant:7.99,favorier:false},
  ]

  favorier(burgers:any) {
    burgers.favorier= !burgers.favorier
  }

  
  openpopup(){
    this.sharedPopupService.setshowpopup()
    this.showpopub=this.sharedPopupService.showpopup
    this.sharedPopupService.setSharedData(this.burgerselect)
  }
  
  selectburger(burger:any){
this.burgerselect=burger;
  }
}

