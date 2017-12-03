import { Component, OnInit } from '@angular/core';
// import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { Dish } from '../shared/classes/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
  selectedDish = Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelect = (dish) => {
    console.log(dish);
    this.selectedDish = dish;
  }

}
