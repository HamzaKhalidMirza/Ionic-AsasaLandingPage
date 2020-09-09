import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTestimonialPage } from './add-testimonial.page';

const routes: Routes = [
  {
    path: '',
    component: AddTestimonialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTestimonialPageRoutingModule {}
