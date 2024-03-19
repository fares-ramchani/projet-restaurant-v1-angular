import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { CarouselComponent } from './composants/carousel/carousel.component';
import { AccuilComponent } from './pages/accuil/accuil.component';
import { DescriptionComponent } from './composants/composantAccuil/description/description.component';
import { DescriptionPizzaComponent } from './composants/composantAccuil/description-pizza/description-pizza.component';
import { DescriptionTravailleComponent } from './composants/composantAccuil/description-travaille/description-travaille.component';
import { BarDescriptionComponent } from './composants/composantAccuil/bar-description/bar-description.component';
import { CarouselmenuhumbergerComponent } from './composants/composantAccuil/carouselmenuhumberger/carouselmenuhumberger.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AvisclientComponent } from './composants/composantAccuil/avisclient/avisclient.component';
import { CarouselmenutacosComponent } from './composants/composantAccuil/carouselmenutacos/carouselmenutacos.component';
import { BienvenuedescriptionComponent } from './composants/composantAccuil/bienvenuedescription/bienvenuedescription.component';
import { LocalisationmapComponent } from './composants/composantAccuil/localisationmap/localisationmap.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HeaderdescriptionaccuilComponent } from './composants/composantAccuil/headerdescriptionaccuil/headerdescriptionaccuil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ComposantMenuComponent } from './composants/composant-menu/composant-menu.component';
import { NavMenuComponent } from './composants/composantMenu/nav-menu/nav-menu.component';
import { BurgersComponent } from './composants/composantMenu/burgers/burgers.component';
import { TacosComponent } from './composants/composantMenu/tacos/tacos.component';
import { CheeseNaanComponent } from './composants/composantMenu/cheese-naan/cheese-naan.component';
import { BowlsSaladesComponent } from './composants/composantMenu/bowls-salades/bowls-salades.component';
import { KapsaloonComponent } from './composants/composantMenu/kapsaloon/kapsaloon.component';
import { TexMexComponent } from './composants/composantMenu/tex-mex/tex-mex.component';
import { MenusEnfantComponent } from './composants/composantMenu/menus-enfant/menus-enfant.component';
import { DessertsComponent } from './composants/composantMenu/desserts/desserts.component';
import { PopUpComponent } from './composants/pop-up/pop-up.component';
import { CartComponent } from './composants/cart/cart.component';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    AccuilComponent,
    DescriptionComponent,
    DescriptionPizzaComponent,
    DescriptionTravailleComponent,
    BarDescriptionComponent,
    CarouselmenuhumbergerComponent,
    AvisclientComponent,
    CarouselmenutacosComponent,
    BienvenuedescriptionComponent,
    LocalisationmapComponent,
    FooterComponent,
    HeaderdescriptionaccuilComponent,
    MenuComponent,
    ComposantMenuComponent,
    NavMenuComponent,
    BurgersComponent,
    TacosComponent,
    CheeseNaanComponent,
    BowlsSaladesComponent,
    KapsaloonComponent,
    TexMexComponent,
    MenusEnfantComponent,
    DessertsComponent,
    PopUpComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CommonModule
   
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
