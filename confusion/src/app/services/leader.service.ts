import { Injectable } from '@angular/core';
//import the class type
import { Leader } from '../shared/classes/leader';
//import the data const, later this would be retrieved by our service
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()

export class LeaderService {

  constructor() { }
  //create methods below
  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000)
  };

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000)
  };

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000)
  };


}

