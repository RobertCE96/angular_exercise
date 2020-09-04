import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './models';
import { HttpClient } from '@angular/common/http';
import { People } from './data.json';

@Injectable()
export class AppService {
  people$: Observable<Person[]>;
  _people$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  constructor(private http: HttpClient) {
    this.getPeople();
    this.people$ = this._people$.asObservable();
  }

  getPeople() {
    //Get People list as observable. Please use BehaviorSubject for that.
      this._people$.next(People);
  }
}
