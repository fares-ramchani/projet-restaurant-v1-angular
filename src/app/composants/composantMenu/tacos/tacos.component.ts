import { Component } from '@angular/core';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent {

  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/tacos11.png",name:"TACOS VIANDE hachée",description:"viande hachée,laitue,tomate,frites",montant:3.85,favorier:false},
    {Image:"../assets/images/tacos12.png",name:"TACOS POULET",description:"poulet mariné,laitue,tomate,frites ",montant:3.69,favorier:false},
    {Image:"../assets/images/tacos13.png",name:"TACOS MIXTE",description:"viande hachée,nuggets,laitue,tomate,frites",montant:5.25,favorier:false},
    {Image:"../assets/images/tacos14.png",name:"TACOS NUGGETS",description:"nuggets,laitue,tomate,frites",montant:4.99,favorier:false},
    {Image:"../assets/images/tacos15.png",name:"TACOS MEXICAN",description:"poulet mariné,poivron rouge et vert,laitue,frites",montant:6.35,favorier:false},
    {Image:"../assets/images/tacos16.png",name:"TACOS CORDON BLEU",description:"cordon bleu,laitue,tomate,frites",montant:3.99,favorier:false},
  ]
  coeur: boolean = false;
  coeur1: boolean = false;
  coeur2: boolean = false;
  coeur3: boolean = false;
  coeur4: boolean = false;
  favorier(burgers:any) {
    burgers.favorier= !burgers.favorier
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


