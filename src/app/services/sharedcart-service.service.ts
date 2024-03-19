import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const STORAGE_KEY = 'show';
@Injectable({
  providedIn: 'root'
})
export class SharedcartServiceService {

  showcart=false
  sharedData : Array<any> = [];
  private countSubject = new BehaviorSubject<boolean>(false);
  private arrayDataSubject = new BehaviorSubject<Array<any>>([]);
  showcart1$ = this.countSubject.asObservable();
  sharedData1$=this.arrayDataSubject.asObservable()

  constructor() { }
  showwcart() {
    const currentcart = this.countSubject.value;
    const newcart = !currentcart;
    this.countSubject.next(newcart);
  }
  setshowcart() {
    this.showcart=!this.showcart;
}

setsharedata2(data:any){
  const currentcart = JSON.parse(localStorage.getItem('cart') || '[]');
  currentcart.push(data);
  localStorage.setItem('cart', JSON.stringify(currentcart));
  const newcart = currentcart;
  this.arrayDataSubject.next(newcart);
}
  setSharedData(data:any) {
    this.sharedData.push(data) ;
}
getsharedata():any{
  return  this.sharedData;
}

}
