import { Injectable } from '@angular/core';
//import the class type
import { Leader } from '../shared/classes/leader';
//import the data const, later this would be retrieved by our service
import { LEADERS } from '../shared/leaders';
import { setTimeout } from 'timers';

@Injectable()

export class LeaderService {

  constructor() { }
  //create methods below
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => setTimeout(() => resolve(LEADERS), 2000)
    )
  };

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve => setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000)
    )
  };

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000)
    )
  };


}

