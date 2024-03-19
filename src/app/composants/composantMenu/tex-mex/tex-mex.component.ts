import { Component } from '@angular/core';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-tex-mex',
  templateUrl: './tex-mex.component.html',
  styleUrls: ['./tex-mex.component.css']
})
export class TexMexComponent {

  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/tex-mex1.png",name:"ONION RINGS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:3.85},
    {Image:"../assets/images/tex-mex2.png",name:"FRENCH FRIES",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:3.69},
    {Image:"../assets/images/tex-mex3.png",name:"MOZZARELLA STICKS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:5.25},
    {Image:"../assets/images/tex-mex4.png",name:"CHICKEN NUGGETS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:4.99},
    {Image:"../assets/images/tex-mex5.png",name:"CHICKEN NUGGETS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:6.35},
    {Image:"../assets/images/tex-mex6.png",name:"CHICKEN FINGERS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:3.99},
    {Image:"../assets/images/tex-mex7.png",name:"GRILLED CHICKEN",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:5.05},
    {Image:"../assets/images/tex-mex9.png",name:"BUFFALO WINGS",description:"Integer ultrice an aligula lectus purus magna and tempor",montant:4.89},
  ]
  coeur: boolean = false;
  coeur1: boolean = false;
  coeur2: boolean = false;
  coeur3: boolean = false;
  coeur4: boolean = false;
  favorier() {
    this.coeur = !this.coeur
  }
  favorier1() {
    this.coeur1 = !this.coeur1
  }
  favorier2() {
    this.coeur2 = !this.coeur2
  }
  favorier3() {
    this.coeur3 = !this.coeur3
  }
  favorier4() {
    this.coeur4 = !this.coeur4
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

