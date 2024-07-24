import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service"; 
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => { 

  // TestBed.inject() instead of TestBed.get()

  let calculator: CalculatorService,
    loggerSpy: any; 

  beforeEach(()=>{
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue:loggerSpy}
      ]
    });
    calculator = TestBed.inject(CalculatorService);
  });
  
  it('should add two numbers', () => {
    console.log("add test");
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subract two numbers', () => {
    console.log("subtract test");
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, "unexpected subraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});