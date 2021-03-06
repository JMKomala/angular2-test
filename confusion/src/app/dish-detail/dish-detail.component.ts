import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Dish } from '../shared/classes/dish';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})



export class DishDetailComponent implements OnInit {
  @Input() dish = Dish;

  constructor() { }
  ngOnInit() {
  }

}
