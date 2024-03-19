import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedPopupServiceService {
  showpopup=false
  sharedData : any;

  constructor() { }
  setshowpopup() {
    this.showpopup=!this.showpopup;
}
  setSharedData(data:any) {
    this.sharedData = data;
}
getsharedata():any{
  return  this.sharedData;
}
}
