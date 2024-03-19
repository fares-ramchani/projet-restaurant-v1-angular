import { Component, OnInit } from '@angular/core';
import { commande } from 'src/app/model/commande.model';
import { CounterCartService } from 'src/app/services/counter-cart.service';
import { SharedPopupServiceService } from 'src/app/services/shared-popup-service.service';
import { SharedcartServiceService } from 'src/app/services/sharedcart-service.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  inputData: any;
  inputData1: any;
  actios: string = '';
  Quantity: number = 1
  montantTotal: number = 0;
  montantDessert = 0
  action1: boolean = false;
  error = false
  countersause = 0;
  countersize = 0;
  montantTotalInisial = 0
  montantSupplements = 0
  cart: Array<any> = []
  commande: any = { produit: null, size: "", Sauce: [], Crudites: [], Supplements: [], Dessert: [], SpecialInstructions: "", Quantity: 1, montantTotal: 0 }
  sauces: Array<any> = [
    { name: "Sans sauce", cheked: false },
    { name: "Ketchup", cheked: false },
    { name: "Mayonnaise", cheked: false },
    { name: "Andalouse", cheked: false },
    { name: "Burger", cheked: false },
    { name: "Blanche", cheked: false },
    { name: "Poivre", cheked: false },
    { name: "Samouraï", cheked: false },
    { name: "Hannibal", cheked: false },
    { name: "Algérienne", cheked: false },
    { name: "Curry", cheked: false },
    { name: "Bresilienne", cheked: false },
    { name: "Americaine", cheked: false },
    { name: "Barbecue", cheked: false },
    { name: "Harissa", cheked: false },
  ]
  Crudites: Array<any> = [
    { name: "Sans salade", cheked: false },
    { name: "Sans tomate", cheked: false },
    { name: "Sans oignons", cheked: false },
    { name: "Sans crudités", cheked: false },

  ]
  Supplements: Array<any> = [
    { name: "Cheddar", montant: "+1.00", cheked: false },
    { name: "Raclette", montant: "+1.00", cheked: false },
    { name: "Boursin", montant: "+1.00", cheked: false },
    { name: "Oeuf", montant: "+1.00", cheked: false },
    { name: "Galette de pomme de terre", montant: "+1.00", cheked: false },
    { name: "Legumes grillés", montant: "+1.00", cheked: false },
    { name: "Feta", montant: "+1.00", cheked: false },
    { name: "Sauce fromagere", montant: "+1.00", cheked: false },

  ]
  Dessert: Array<any> = [
    { name: "Tiramisu speculoos", montant: "+2.50", cheked: false },
    { name: "Tiramisu nutella", montant: "+2.50", cheked: false },
    { name: "Tiramisu daim", montant: "+2.50", cheked: false },
    { name: "Tiramisu Oreo", montant: "+2.50", cheked: false },
    { name: "Tarte au daim", montant: "+2.50", cheked: false },

  ]

  constructor(private sharedPopupService: SharedPopupServiceService, private SharedcartServiceService: SharedcartServiceService,
    private CounterCartService: CounterCartService) { }

  ngOnInit(): void {
    this.inputData = this.sharedPopupService.getsharedata();
    this.commande.produit = this.inputData

    this.montantTotal = this.sharedPopupService.getsharedata().montant;


  }

  closepopup() {
    this.sharedPopupService.setshowpopup();
  }

  selectSeul() {
    this.actios = 'seul';
    this.commande.size = this.actios;
    if (this.actios == 'seul' && this.action1 == true) {
      this.montantTotal = this.montantTotal - 2.50
    }
    this.countersize = 1
    this.action1 = false
  }

  selectEnMenu() {
    this.actios = 'menu';
    this.commande.size = this.actios;
    if (this.actios == 'menu') {
      this.montantTotal = this.montantTotal + 2.50
    }
    this.action1 = true
    this.countersize = 1
  }
  selectsauce(sauce: any) {
    sauce.cheked = !sauce.cheked;
    if (sauce.cheked) {
      this.countersause++
      this.commande.Sauce.push(sauce.name);
    } else {
      this.countersause--
    }
  }
  selecCrudites(Crudite: any) {
    Crudite.cheked = !Crudite.cheked;
    if (Crudite.cheked) {
      this.commande.Crudites.push(Crudite.name);
    }
  }
  selecSupplements(Supplement: any) {
    Supplement.cheked = !Supplement.cheked;
    if (Supplement.cheked == true) {
      this.montantSupplements = this.montantSupplements + (this.Quantity * 1.00)
      this.commande.Supplements.push(Supplement.name);
    } else {
      this.montantSupplements = this.montantSupplements -(this.Quantity * 1.00)
    }
  }
  selecDessert(Dessert: any) {
    Dessert.cheked = !Dessert.cheked;
    if (Dessert.cheked == true) {
      this.montantDessert = this.montantDessert + (this.Quantity * 2.50)
      this.commande.Dessert.push(Dessert.name);
    } else {
      this.montantDessert = this.montantDessert -(this.Quantity * 2.50)
    }
  }
  plusQuantiter(inputData:any) {
    this.montantSupplements=0
    this.montantDessert=0
    if (this.Quantity == 1) {
      this.montantTotalInisial =inputData.montant
    }
    this.Quantity++
    for (let dessert of this.Dessert) {
      if (dessert.cheked == true) {
        this.montantDessert =this.montantDessert+this.Quantity * 2.50
      }
    }
    for (let supplement of this.Supplements) {
      if (supplement.cheked == true) {
        this.montantSupplements =this.montantSupplements+ this.Quantity * 1.00
      }
    }
    this.montantTotal = this.montantTotalInisial * this.Quantity
    this.commande.Quantity = this.Quantity
    this.commande.montantTotal = this.montantTotal+this.montantSupplements+this.montantDessert

  }
  moinQuantiter(inputData:any) {
    if (this.Quantity == 1) {
      this.montantTotalInisial = inputData.montant
    }
    if (this.Quantity > 1) {
      this.Quantity--
      this.montantDessert=0
      for (let dessert of this.Dessert) {
        if (dessert.cheked == true) {
          this.montantDessert =  this.montantDessert +this.Quantity * 2.50
        }
      }
      this.montantSupplements=0
      for (let supplement of this.Supplements) {
        if (supplement.cheked == true) {
          this.montantSupplements =this.montantSupplements+this.Quantity * 1.00
        }
      }
      this.montantTotal = this.montantTotalInisial * this.Quantity
      this.commande.Quantity = this.Quantity
      this.commande.montantTotal = this.montantTotal+this.montantSupplements+this.montantDessert
    }

  }
  addcart(erro: string) {
    if (erro == "") {
      let newCartItem: any = this.commande;
      this.commande.montantTotal =  this.montantTotal+this.montantSupplements+this.montantDessert

      this.SharedcartServiceService.setsharedata2(newCartItem)
      this.CounterCartService.increment();
      this.closepopup()
      alert("Produit ajouté au panier avec succès");
    }





    // this.commande.montantTotal=this.montantTotal
    // this.CounterCartService.increment()
    // this.SharedcartServiceService.setSharedData(this.commande);
    // this.sharedPopupService.setshowpopup();
    // localStorage.setItem("command",JSON.stringify(this.commande))
    // console.log(this.commande);

  }
  errerMessage(): string {
    if (this.countersize < 1) {
      this.error = true
      return "La taille nécessite au moins un élément à être sélectionné."
    }
    if (this.countersause < 1) {
      this.error = true
      return " La Sauce nécessite au moins un élément à être sélectionné."
    }
    return ""


  }
}
