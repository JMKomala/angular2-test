## FORM BUILDER WITH VALIDATORS
* import Validators from @angular/forms
* add Validators.required to formbuilder form properties
* Form control properties
  * feedbackForm.value | .status | .pristing/.dirty | .untouched /.touched 
  * e.g feedbackFOrm.get('firstName').status, feedbackForm.get('telnum').hasError('required') etc...


1. import Validators dependency into the component
```
import {Validators} from '@angular/form';
```
2. in the createForm formbuilder function add validators.
```
this.feedbackForm = this.fb.group({
  firstName: ['',Validators.required],
  lastName: ['',Validators. required]
})