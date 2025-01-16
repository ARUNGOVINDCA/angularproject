import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";


describe("CalcService", () => {

let Shared: SharedService;
let calc: CalcService;

beforeEach(() => {

  console.log('BeforeEach is called');
  TestBed.configureTestingModule({
    providers:[CalcService,SharedService]
  });
  Shared = TestBed.inject(SharedService);
  calc = TestBed.inject(CalcService);

});

  it('should multiply two number', () => {
const shared = new SharedService();    
const calc = new CalcService(shared);
const result = calc.multiply(5,3);
expect(result).toBe(15);

  });

  it('should Add two number', () => {
    const shared = new SharedService();    
    const calc = new CalcService(shared);
    const result = calc.add(5,3);
    expect(result).toBe(8);
    
      });

    // it('should call MySharedFunction', () => {
    //   const shared = new SharedService();
    //   spyOn(shared,'mySharedFunction');
    //   const calc = new CalcService(shared);
    //   const result = calc.multiply(5,3);
    //   expect(shared.mySharedFunction).toHaveBeenCalled();
    // });
});