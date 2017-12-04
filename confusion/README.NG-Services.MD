## Creating Services
* create service with angular cli
* import dependencies
* create and export methods
* config app.module.ts for service
* import service to components
  * add service constructor
  * use service in component

1. ng generate service services/serviceName
  * This will create two new files in the services folder named serviceName.service.ts and serviceName.service.spec.ts.
2. Bring in any needed dependencies. for this project we will bring int dish class and DISHES constant
```
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
```

3. Create methods that the service will give access to. Here we will create a method that will return the DISHES constant.

```
export class DishService {...
  getDishes(): Dish[]{
    return DISHES;
  }
..
}
```
4. inject the service in app.module.ts providers[]
```
providers: [DishService],
'''
```
5. Now bring in the service to the component
```
import {DishService} from '../services/dish'
```
6. Then inject the service in the component constructor to make it available to the component
```
constructor(private dishService:DishService) { }
```
7. fetch information on init
```
ngOnInit() { 
    this.dishes = this.dishService.getDishes();
  }
```

## NOTE: DONT FORGET TO ADD SERVICES TO YOUR APP.MOdule.ts