## REACTIVE DRIVEN FORMS
* Now in the reactive approach, we create a tree of angular form control objects, within the component class. Now in the template driven forms that you have seen earlier, we design the forms using the HTML template approach, so all the form controls we're put into that form in the HTML template and we're primarily manage data and they we're tied into their component object through the NG model directly

* we will create that form structure in our component and then tie the form structure into firm controls in our template, so we'll bind the form tree that we create within our component class to the native form elements within our template file there. So, in this approach the component class has immediate access to both the data model as well as the form control structure and so we can then take the data model and push it in to the form control structure and correspondingly take the information out of the form control structure and then map it in to the data model. So the data model coming in from the back end can be mapped in to form control structure which is reflected in to the view through that template and the bridge between them is done within the component class by creating the form structure inside the component class

* the fact that we create the forms in code means that testing and evaluation of forms becomes a lot more easier.reactive approach lends itself much better for unit testing and also for form validation as we'll see a little bit later in the exercise

#FORM GROUP
  * a group of FormControl, so when you want to organize FormControls together as a group and then track information about those group as a whole, then the FormGroup enables you to agglomerate a group of FormControls together. 




# FORMBUILDER CLASS
  * FormBuilder class allows us to create the forms  within our TypeScript code and then be able to tie them up with that template controls there. 
```
import { FormBuilder } from '@angular/forms'
```
Example:
```
this.feedbackForm = this.fb.group({
  firstName:'',
  lastName:'',
  telNum:'',
  email: '',
  agree:false,
  contactType:'None',
  message:''
})
```

  #POPULATING A FORMMODEL FROM DATA MODEL
* TWO WAYS
  1.  setValue() method, which enables us to assign every form control to a particular value from the data model.
  2. patchValue(), which enables you to update only some controls within your form model. once you get the data model from the back end, from the data model, you can patch in the values into your form model or map the values from your data model into your form model, very often, we will create the data model, which reasonably closely mirrors the structure of the form. 


  