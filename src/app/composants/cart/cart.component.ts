import { Component } from '@angular/core';
import { commande } from 'src/app/model/commande.model';
import { CounterCartService } from 'src/app/services/counter-cart.service';
import { SharedcartServiceService } from 'src/app/services/sharedcart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  inputData: Array<any> = [];
  cart: any
  montantTotal: number = 0;
  constructor(private sharedcartService: SharedcartServiceService, private CounterCartService: CounterCartService) { }
  ngOnInit(): void {
    this.sharedcartService.sharedData1$.subscribe((inputData) => {
      this.inputData = inputData

      
    });
    this.inputData = JSON.parse(localStorage.getItem('cart') || '[]');
    this.montantTotal = this.calculateMontant()
  }
  plusQuantiter(commande: any) {
    let montantInisial = commande.montantTotal / commande.Quantity;
    commande.Quantity++
    commande.montantTotal = montantInisial * commande.Quantity;
    this.montantTotal = this.calculateMontant()
  }
  moinQuantiter(commande: any) {
    if (commande.Quantity > 1) {
      let montantInisial = commande.montantTotal / commande.Quantity;
      commande.Quantity--
      commande.montantTotal = montantInisial * commande.Quantity;
      this.montantTotal = this.calculateMontant()

    }

  }
  closepopup() {
    this.sharedcartService.showwcart()
  }
  calculateMontant(): number {
    let somme = 0
    for (let i of this.inputData) {
      somme += i.montantTotal
    }
    return somme
  }
  DeleteCart(id: string) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let i = 0
    while (i < this.cart.length) {
      if (this.cart[i].produit.name == id) {
        this.montantTotal = this.montantTotal - this.cart[i].montantTotal
        this.cart.splice(i, 1)

        break
      }
      i++
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  
    this.CounterCartService.Disincriment()
    this.inputData = JSON.parse(localStorage.getItem('cart') || '[]');
    this.montantTotal = this.calculateMontant()
  }
}
