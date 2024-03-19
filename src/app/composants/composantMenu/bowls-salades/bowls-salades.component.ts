import { Component } from '@angular/core';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-bowls-salades',
  templateUrl: './bowls-salades.component.html',
  styleUrls: ['./bowls-salades.component.css']
})
export class BowlsSaladesComponent {

  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/salad1.png",name:"GREEK SALAD",description:"Tomatoes, cucumbers, olives, feta cheese, red onion, olive oil",montant:7.99,favorier:false},
    {Image:"../assets/images/salad2.png",name:"CHICKEN SALAD",description:"Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber",montant:9.35,favorier:false},
    {Image:"../assets/images/salad3.png",name:"SPINACH SALAD",description:"Halloumi cheese, spinach, oranges, mint leaves, olive oil",montant:8.75,favorier:false},
    {Image:"../assets/images/salad4.png",name:"SEAFOOD SALAD",description:"Shrimps, scallions, mayonnaise, lemon,chili sauce, salt",montant:8.35,favorier:false},
    {Image:"../assets/images/salad2.png",name:"CHICKEN SALAD",description:"Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber",montant:9.35,favorier:false},
    {Image:"../assets/images/salad3.png",name:"SPINACH SALAD",description:"Halloumi cheese, spinach, oranges, mint leaves, olive oil",montant:8.75,favorier:false},
    {Image:"../assets/images/salad4.png",name:"SEAFOOD SALAD",description:"Shrimps, scallions, mayonnaise, lemon,chili sauce, salt",montant:8.35,favorier:false},
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


