import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos'
declare var $: any;


@Component({
  selector: 'app-carouselmenuhumberger',
  templateUrl: './carouselmenuhumberger.component.html',
  styleUrls: ['./carouselmenuhumberger.component.css']
})
export class CarouselmenuhumbergerComponent {
  coeur: boolean = false;
  coeur1: boolean = false;
  coeur2: boolean = false;
  coeur3: boolean = false;
  coeur4: boolean = false;
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
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




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,

      },
      431: {
        items: 2,
      },
      740: {
        items: 1,
      },
      940: {
        items: 2,

      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false
  }
}