## Reactive Programming, Observables

#### The Observer Pattern
    - Gang of four

OBservables - 
The observer pattern revolves around observables. So you have observables, whose behavior can be observed by observers. So that's why this is called the observer pattern. You declare certain objects as observable or subjects and these observables will be observed by observers.

2. OBservers register themselves to watch changes in the observable, so when a change occurs the observer notifies all subscribers and they can then take action


WHy Observables
1. Based around of streams. " a stream of values"
2. You can unsubscribe to an observable
3. Lazy or cold(dormant?) until some observer does a .subscribe()
4. Canceling and retrial straightforward. For example with a promise, once you start waiting for a promise, you cannot cancel, you're waiting. The promise will eventually resolve or fail and then you have to react no matter what even if you're no longer interested. 

### Reactive Programming
* Based on Observer Pattern
* We are interested in the data flow through the application
* Propagation fo change through your application
* BUilt around streams
* Functional + Reactive Programming

### RxJS
* A Js implementation of the Reactive programming
* a library for composing asynchrounous and event-based programs by using observable sequences

Specifics:
1. one core type >> the Observable
2. Satellite types ( Observer, Schedulers, Subjects)
3. operators inspired by Array#extras(map, filter, reduce, every, etc)
4. allows handling asynchrounous events as collections

Observables
1. the observable will perdiodically emit values in sequence. 
2. there is also a possibility of an error eing emitted then you would handle the error (continue , stop , etc...)
3. The seqyence of values can be viewed as an array of values
4. for each value you could use a different operator and emit a massaged data for each value
5. Some observables in Angular
    * Forms -- specifically reactive forms, forms become observables in angular
    * HTTP
    * AsyncPipe
    * Change detection

 The params observable is tied to the route parameters. And so any changes to the parameters, in the URL that you encounter will be emitted as an observable. Now, so when you get the observable, so as you can see, you can get access to this observable by saying this route params in your code. So the params itself is an observable here. Now, to this params observable, you can apply an operator like an operator here called switchmap. We'll see the use of this in the excercise. The switchmap operator takes the params observable. And then transforms the params observable into another observable which is a dish. It takes the params value, and then extracts the ID value from the params, which gives you access to the route parameter, the id, or the parameter that you have specified, and then uses that to go and fetch the dish. So every time the parameter changes, it will result in a fetching of a new dish. And so every time the parameter changes, which is equivalent to emitting a new value by their params observable. That gets transformed into fetching of the new dish for which that is the corresponding ID. So the dish will then become another observable. Now, when this dish observable becomes available, you can subscribe to this dish observable here, and obtain the dish value. And when you obtain the dish value, then you can take the dish value, and then it create your dish variable within your dish detail component to that dish value

 ## COnverting our Services to use Observables
 * To get a feel for observables, we will first config our service to use observables but still return a promise to the original caller in the component.

1. Update services to export observables
2. Components will then subscribe to thes observables to obtain the data required for rendering views

1. First import the observable from rxjs
import {Observable} from 'rxjs/Observable';

2. Then import the necessary operators. WIth rexjs the entire library is not imported, each needed operator needs to be brought in individually.

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/of';

note: The limitation of Promises only emit one item, but Observables work with streams, so if you use the toPromise operator with your observable you are limited to emitting only one value.



 getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      //the settimout takes a callback
      setTimeout(() => resolve(DISHES), 2000)
    });
  }

* Note here our method still returns a promise 

getDishes(): Promise<Dish[]> {
    return Observable.of(DISHES).delay(2000).toPromise();
};

note:using .of method allows only one emit

However, we want our method to return Observables instead of promises, so our component can subscribe to it. 
We assign variable type Observable, which means no longer need the .toPromise operator

3. Remove the import of the rxjs promise operator from the file

4. Update the componenet to handle observables instead of promises. Update method type to be an Observable

getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

NOTE: HTTP Support in angular is based around observables this willcome into play later.

5. Now our caller in the component can subscribe to the observable returned from the service.

 this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);


+params['id'] the plus here convertst the string value into an integer value
