import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Feedback, ContactType } from '../shared/classes/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      telNum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contactType: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstName: '',
      lastName: '',
      telNum: '',
      email: '',
      agree: false,
      contactType: 'None',
      message: ''
    });

  }
}
