import { Component } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-bienvenuedescription',
  templateUrl: './bienvenuedescription.component.html',
  styleUrls: ['./bienvenuedescription.component.css']
})
export class BienvenuedescriptionComponent {
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }
}
