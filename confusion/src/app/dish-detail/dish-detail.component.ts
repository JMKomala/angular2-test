import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/classes/dish';
import { DishService } from '../services/dish.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {
  dish: Dish; // @Input() dish:Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.dishService.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);

    this.route.params
      .switchMap((params: Params) => this.dishService.getDish(+params['id']))
      .subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id)
      });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId)
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length]

  }

  //allows us to go back to previous item in the browser
  goBack(): void {
    this.location.back();
  }
}
