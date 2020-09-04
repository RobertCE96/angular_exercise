import { Component } from '@angular/core';
import { Observable, pipe,  } from 'rxjs';
import { AppService } from './app.service';
import { Person } from './models';
import { toArray, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interview';
  people$: Observable<Person[]>;
  filteredPeople: Person[];

  //Please get people list and filter them by age.
  //Get only people which have at lest 25 years and no more than 50
  //Also they name should start with Mr. or Ms. depending on they sex.
  //they should be sorted by age ascending.

  constructor(private service: AppService) {
    this.people$ = this.service.people$;
    this.getPeople();
  }

  getPeople(){
    this.people$
    .pipe(map(data => data.filter(x => x.age > 25 && x.age < 50)))
    .subscribe(data => 
      this.filteredPeople = data.sort((a, b) => a.age - b.age));
  }
}
