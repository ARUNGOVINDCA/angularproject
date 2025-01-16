import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedServices : SharedService) { }

  multiply(a:number,b:number) {
    this.sharedServices.mySharedFunction();
    return a* b;
  }

  add(a:number,b:number) {
    this.sharedServices.mySharedFunction();
    return a+b;
  }
}
