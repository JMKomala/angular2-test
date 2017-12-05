import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/classes/leader';
import {LeaderService} from '../services/leader.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
leaders:Leader[]

  constructor(private leaderService : LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
    .then(response => {this.leaders= response})
    .catch(error => {console.log(error)});
  }

}
