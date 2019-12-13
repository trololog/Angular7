import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

//xdescribe to disable my test suite
//fdescribe to focus on this particular test suite
describe('CalculatorService', () => {
    let calculatorService: CalculatorService;
    let loggerService: any;

    beforeEach(() => {
        console.log("Calling beforeEach");
        loggerService = jasmine.createSpyObj('LoggerService', ["log"]);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerService } //the actual spy object created by jazmin
            ]
        });

        calculatorService = TestBed.get(CalculatorService);
    });

    //test suite
    //specification 1
    //fit to focus on the particular test
    it('should add two numbers', () => {
        //spyOn(loggerService, 'log');
        const result = calculatorService.add(2,2);

        expect(result).toBe(4);
        expect(loggerService.log).toHaveBeenCalledTimes(1);
    });

    //specification 2
    //xit to disable the specific test
    it('should substract two numbers', () => {
        const result = calculatorService.subtract(2,2);

        expect(result).toBe(0);
    });
});