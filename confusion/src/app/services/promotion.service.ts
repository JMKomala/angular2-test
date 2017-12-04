import { Injectable } from '@angular/core';
//import the promotino class
import { Promotion } from '../shared/classes/promotion';
//import const data from PROMOTIONs
import { PROMOTIONS } from '../shared/promotions';


@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}