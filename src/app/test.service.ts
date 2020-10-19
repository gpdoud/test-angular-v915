import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TestChildService } from './test-child.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  name = "TestService";
  about(): string {
    return "about";
  }
  aboutAsync(): Observable<string> {
    return of("about");
  } 
  aboutChild(): Observable<string> {
    return this.childSvc.about();
  }

  constructor(private childSvc: TestChildService) { }
}
