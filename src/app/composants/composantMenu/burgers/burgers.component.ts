import { Component, OnInit } from '@angular/core';
import { burger } from 'src/app/model/burger.model';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/hum3.png",name:"humberger1",description:"description textuelle de le produit",montant:7.99,favorier:false},
    {Image:"../assets/images/burger1.png",name:"CRISPY CHICKEN",description:"Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw",montant:8.95,favorier:false},
    {Image:"../assets/images/burger2.png",name:"ULTIMATE BACON",description:"House beef patty, cheddar cheese, bacon, onion, mustard",montant:9.99,favorier:false},
    {Image:"../assets/images/burger3.png",name:"SMOKEY HOUSE",description:"Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles",montant:7.99,favorier:false},
    {Image:"../assets/images/burger4.png",name:"TURKEY BURGER",description:"Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",montant:8.35,favorier:false},
    {Image:"../assets/images/burger5.png",name:"BLACK SHEEP",description:"American cheese, tomato relish, avocado, lettuce, red onion",montant:7.99,favorier:false},
    {Image:"../assets/images/burger6.png",name:"DOUBLE BURGER",description:"2 beef patties, cheddar cheese, mustard, pickles, tomatoes textuelle de le produit",montant:9.65,favorier:false},
    {Image:"../assets/images/burger8.png",name:"CLASSIC BURGER",description:"Beef, cheddar cheese, ketchup, mustard, pickles, onion",montant:6.89,favorier:false},
    {Image:"../assets/images/burger7.png",name:"VEGAN BURGER",description:"Mushroom patty, vegan cheese, lettuce, tomatoes, avocado",montant:7.85,favorier:false},
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
