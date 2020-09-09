import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.page.html',
  styleUrls: ['./add-testimonial.page.scss'],
})
export class AddTestimonialPage implements OnInit {

  addTestimonialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addTestimonialForm = this.formBuilder.group({
      reason: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  get Reason() {
    return this.addTestimonialForm.get("reason");
  }
  get Message() {
    return this.addTestimonialForm.get("message");
  }

  addProperty() {
    console.log(this.addTestimonialForm);
    if(this.addTestimonialForm.invalid) {
      return;
    }
    console.log(this.addTestimonialForm.value);
  }

}
