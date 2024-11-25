import {TestBed} from "@suites/unit";
import {TestService} from "./test.service";
import {TestSociableService} from "./test-sociable.service";
import {TestDependService} from "./test-depend.service";

describe('Test', () => {
  it('should expose sociable service', async () => {
    const { unit, unitRef } = await TestBed.sociable(TestService).expose(TestSociableService).compile();
    const testDependService = unitRef.get(TestDependService);

    unit.test();
    expect(testDependService.call).toHaveBeenCalledWith(true);
  });
  it('should work manual exposing', () => {
    const testDependService = new TestDependService();
    const testDependServiceCall = jest.spyOn(testDependService, 'call');
    const unit = new TestService(testDependService, new TestSociableService());

    unit.test();
    expect(testDependServiceCall).toHaveBeenCalledWith(true);
  });
})
