## ANGULAR ROUTE PARAMETERS
* PARAMETERS
  * HANDLING URL PARAMETERS
    * Specify a token in path.. path/:id
    * Passing the parameter
  * HANDLING QUERY PARAMETERS


## PARAMETERS 

### Handling URL parameter
1. When creating a path specify a token
```
{ path: 'dishdetail/:id', component: DishDetailComponent },
```
2. Pass argument to parameter in a link
```
<a *ngFor = "let dish of dishes" [routerLink] = "['/dishdetil',dish.id]">
```
3. Url Parameters can also be used within a method using router.navigate
```
this.router.navigate(['/dishdetail',dish.id]);
```

4. ActivatedRoute service from @angular/router library
  * provides useful info about routes
  - url: An Observable of the route path. as array strings
  - params: An Observable that contains the required and optional parameter specific to the route
  - queryParams: An Observable that contains the query parameters available to all routes

5. 
