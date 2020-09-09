import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTestimonialPageRoutingModule } from './add-testimonial-routing.module';

import { AddTestimonialPage } from './add-testimonial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddTestimonialPageRoutingModule
  ],
  declarations: [AddTestimonialPage]
})
export class AddTestimonialPageModule {}
