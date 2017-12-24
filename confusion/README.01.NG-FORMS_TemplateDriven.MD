## TEMPLATE DRIVEN FORMS
1. To use the Template-driven forms, import the Angular Forms module into app.module.ts
```
import:import { FormsModule } from '@angular/forms'; 
```

2. To make this component be opened from another component, you need to declare this as an EntryComponent in the AppModule, by adding the following to the NgModule decorator:

```
@NgModule({
. . .

  entryComponents: [
        LoginComponent
  ],
. . .
  
})
```


1. The flex-spacer class defines an automatic spacing between two elements within our layout