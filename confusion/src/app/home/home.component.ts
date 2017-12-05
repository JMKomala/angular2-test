import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/classes/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/classes/promotion';
import { PromotionService } from '../services/promotion.service'
import { Leader } from '../shared/classes/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService
  ) { }

  ngOnInit() {
    // this.dish = this.dishService.getFeaturedDish()
    this.dishService.getFeaturedDish()
      .then(response => this.dish = response)
      .catch(error => { console.log(error) });

    // this.promotion = this.promotionService.getFeaturedPromotion();
    this.promotionService.getFeaturedPromotion()
      .then(response => this.promotion = response)
      .catch(error => console.log(error))

    // this.leader = this.leaderService.getFeaturedLeader();
    this.leaderService.getFeaturedLeader()
      .then(response => this.leader = response)
      .catch(error => console.log(error));

  }

}
