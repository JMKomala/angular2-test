import { Component, OnInit } from '@angular/core';
// import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { Dish } from '../shared/classes/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();

  }
  onSelect = (dish) => {
    this.selectedDish = dish;
  }
}
