import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-description-travaille',
  templateUrl: './description-travaille.component.html',
  styleUrls: ['./description-travaille.component.css']
})
export class DescriptionTravailleComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
