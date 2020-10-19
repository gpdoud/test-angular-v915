import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { identifierModuleUrl } from '@angular/compiler';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it("should have name of 'TestService'", () => {
    expect(service.name).toBe("TestService");
  });

  it("should return 'about'", () => {
    expect(service.about()).toBe("about");
  });

  it('should be created', () => {
    (done: DoneFn) => {
      service.aboutAsync().subscribe((res) => {
        expect(res).toBe("About TestService");
      });
      done();
    }
  });

  it("should be 'aboutChild'", () => {
    (done: DoneFn) => {
      service.aboutChild().subscribe((res)=> {
        expect(res).toBe("aboutChild");
      })
    }
  })

});
