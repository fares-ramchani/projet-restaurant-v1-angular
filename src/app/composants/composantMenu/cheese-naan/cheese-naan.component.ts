import { Component } from '@angular/core';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';

@Component({
  selector: 'app-cheese-naan',
  templateUrl: './cheese-naan.component.html',
  styleUrls: ['./cheese-naan.component.css']
})
export class CheeseNaanComponent {

  showpopub=false
  constructor( public sharedPopupService: SharedPopupServiceService) {}
  ngOnInit(): void {
    this.showpopub=this.sharedPopupService.showpopup
 }
  burgerselect: any;
  burgers :Array<any>=[
    {Image:"../assets/images/naan10.png",name:"NAAN KEBAB",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:3.85,favorier:false},
    {Image:"../assets/images/naan11.png",name:"NAAN POULET CURRY ",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:3.69,favorier:false},
    {Image:"../assets/images/naan13.png",name:"NAAN POULET TANDOOR",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:5.25,favorier:false},
    {Image:"../assets/images/naan14.png",name:"NAAN VIANDE HACHEE",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:4.99,favorier:false},
    {Image:"../assets/images/naan15.png",name:"NAAN TENDERS",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:6.35,favorier:false},
    {Image:"../assets/images/naan16.png",name:"NAAN CORDON BLEU",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:3.99,favorier:false},
    {Image:"../assets/images/naan17.png",name:"NAAN MERGUEZ",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:4.99,favorier:false},
    {Image:"../assets/images/naan18.png",name:"NAAN KEFTA",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:6.35,favorier:false},
    {Image:"../assets/images/naan19.png",name:"NAAN VEGE",description:"pain naan fourré au fromage et cuit au four garnie avec salade,..",montant:3.99,favorier:false},
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


