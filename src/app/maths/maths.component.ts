import { throwError } from "rxjs";

export class  Mathservices{
    add (a:number,b:number) : number{
        return a+b;

    }
    subtract(a:number,b:number): number{
        return a-b;
    
    }
    multiply (a:number,b:number) : number{
        return a*b;
    }
    divide(a: number,b:number) : number{
      
        return a/b;
    }
}