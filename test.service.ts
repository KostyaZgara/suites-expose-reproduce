import {Injectable} from "@nestjs/common";
import {TestDependService} from "./test-depend.service";
import {TestSociableService} from "./test-sociable.service";

@Injectable()
export class TestService {
  constructor(
    private readonly testDependService: TestDependService,
    private readonly testSociableService: TestSociableService,
  ) {}

  public test(): void {
    this.testDependService.call(this.testSociableService.return());
  }
}
