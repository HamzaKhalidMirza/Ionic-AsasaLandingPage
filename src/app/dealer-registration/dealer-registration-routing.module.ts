import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerRegistrationPage } from './dealer-registration.page';

const routes: Routes = [
  {
    path: '',
    component: DealerRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerRegistrationPageRoutingModule {}
