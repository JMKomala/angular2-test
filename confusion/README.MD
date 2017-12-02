#SETUP
## Generate new project 
### using Angular cli
* version check
```
ng --version
ng -v
```

```
ng new projectName --style=scss
```
1. Run npm install
2. test app
    ```
    ng serve --open
    ```
3. Install additional dependencies
```
npm install @angular/material@2.0.0-beta.12 --save
npm install @angular/cdk@2.0.0-beta.12 --save
npm install --save @angular/animations 
npm install --save hammerjs 
npm install --save @angular/flex-layout@latest 
```


4. ENTRY POINT FOR THE APP
    * src/app.component.ts is the entry point file 

    5. Create a new module.ts file to import material components
    Prior to Angular Material 2 Beta 3, there was a global MaterialModule that could be imported in the app module to make the components available. The downside to that is that tree-shaking is not efficient enough to remove all the unused code.

MaterialModule has therefore been deprecated in favor of defining a project-specific custom material module where you import and export only the needed components. Here’s what our module can look like:

