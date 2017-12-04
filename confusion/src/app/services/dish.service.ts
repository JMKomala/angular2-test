import { Injectable } from '@angular/core';
import { Dish } from '../shared/classes/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  //identify the dish with an id parameter given type number
  //use es6 filter to filter the array DISHES for matches of our criteria of the id. to only return the first one
  // use [0] after filter.
  //So, the filtering of an array will help me to select out only those elements from the array that match a particular criteria that will be specified inside the filter here. 
  //And then among them I will return only the first one. 
  //Now, it so happens that, when I specify an id, it'll select only one item but then that'll become an array. 
  //So from that array I need to extract out that one element in that array. 
  //So that's why I'm using written braces zero there, so that will help me identify.
  
  //So what I'm specifying here is filter the dishes array and extract out only those items from the array for which the dish.id matches the id that has been supplied as the parameter to the dish. 
  //So this way, you'll extract out that specific dish from this array and then return that dish from this getDish method.  and then selecting the first element of the filter returned array
  
  getDish(id: number): Dish {
    return DISHES.filter((dish) => (
      dish.id === id)
    )[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
