//describe
//it -individual test
//expect - used to define expexted outcome


import { Mathservices } from "./maths.component"

describe("Mathservices",()=>{
//check the exstence is  created
//check add 2 number


let service:Mathservices;
beforeEach(() => {
     service = new Mathservices();
})

it("should see the service INstance",()=>{
    expect(service).toBeTruthy();  
})

it("Should add two number",()=>{


const result = service.add(10,30);
    expect(result).toEqual(40);
})
it("Should subtract two number",()=>{

    
    const result = service.subtract(30,30);
    expect(result).toEqual(0);
})
it("Should Multiply two number",()=>{

   
    const result = service.multiply(10,30);
    expect(result).toEqual(300);
})
it("Should Division two number",()=>{

 
    const result = service.divide(200,10);
    expect(result).toEqual(20 );
})
// it("Should Division is Zero Throw the Error",()=>{

//     const service = new Mathservices();
//     expect(()=> service.divide(200,0)).toThrowError("cannot Divide by Zero");

// })
})