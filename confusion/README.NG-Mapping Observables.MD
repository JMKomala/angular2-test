## Mapping Observables to Another Observable
 So notice how I'm taking one observable, the params observable, and then I'm mapping the params observable into another observable which is basically going and fetching the dish value from my dish service. And then making that available as an observer. And then I am subscribing to that observable here, and then thereby I'm getting the dish value here. And then I'm mapping the dish value or rather making their dish variable equal to the dish value here. Notice how by using the observables you are now able to take one observable then map it into one observable, why is this interesting? 


If now if i have a way of modifying that route parameter, then I will be able to switch between different dishes and see the different dishes. 