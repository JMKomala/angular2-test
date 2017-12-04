import { Injectable } from '@angular/core';
//import the class type
import { Leader } from '../shared/classes/leader';
//import the data const, later this would be retrieved by our service
import { LEADERS } from '../shared/leaders';

@Injectable()

export class LeaderService {

  constructor() { }
  //create methods below
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: number): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0]
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0]
  }


}

