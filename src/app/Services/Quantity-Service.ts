import { Injectable } from '@angular/core';

@Injectable()
export class QuantityService {
  // declaring the QUntitylist array
  QuantityList: number[]= [];
  // initializing the quantitylist 
  constructor() {
      for (let i = 9; i >= 0; i-- ) {
        this.QuantityList.unshift(i);
      }
  }
  // getQuantity method to return the quantitylist
  getQuantity(): number[] {
    return this.QuantityList;
  }
}
