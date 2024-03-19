import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-avisclient',
  templateUrl: './avisclient.component.html',
  styleUrls: ['./avisclient.component.css']
})
export class AvisclientComponent {
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
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
        
      }
    },
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause:false

  }

}
