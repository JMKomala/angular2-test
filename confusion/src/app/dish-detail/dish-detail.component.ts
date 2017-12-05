import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/classes/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {
  dish: Dish; // @Input() dish:Dish;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    // this.dish = this.dishService.getDish(id);
    this.dishService.getDish(id)
    .then(response=>{this.dish=response})
    .catch(error=>{console.log(error)});
    
  }

  //allows us to go back to previous item in the browser
  goBack(): void {
    this.location.back();
  }
}
