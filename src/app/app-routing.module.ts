import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { AccuilComponent } from './pages/accuil/accuil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BurgersComponent } from './composants/composantMenu/burgers/burgers.component';
import { BowlsSaladesComponent } from './composants/composantMenu/bowls-salades/bowls-salades.component';
import { CheeseNaanComponent } from './composants/composantMenu/cheese-naan/cheese-naan.component';
import { DessertsComponent } from './composants/composantMenu/desserts/desserts.component';
import { KapsaloonComponent } from './composants/composantMenu/kapsaloon/kapsaloon.component';
import { MenusEnfantComponent } from './composants/composantMenu/menus-enfant/menus-enfant.component';
import { TacosComponent } from './composants/composantMenu/tacos/tacos.component';
import { TexMexComponent } from './composants/composantMenu/tex-mex/tex-mex.component';
import { CartComponent } from './composants/cart/cart.component';

const routes: Routes = [
  {path :"NavBar" , component: NavBarComponent},
  {path :"" , component: AccuilComponent},
  {path :"Cart" , component: CartComponent},
  {path :"Menu" , component: MenuComponent,children:[
    {path :"Burgers" , component: BurgersComponent},
    {path :"BowlsSalades" , component: BowlsSaladesComponent},
    {path :"CheeseNaan" , component: CheeseNaanComponent},
    {path :"Desserts" , component: DessertsComponent},
    {path :"Kapsaloon" , component: KapsaloonComponent},
    {path :"MenusEnfant" , component: MenusEnfantComponent},
    {path :"Tacos" , component: TacosComponent},
    {path :"TexMex" , component: TexMexComponent},
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
