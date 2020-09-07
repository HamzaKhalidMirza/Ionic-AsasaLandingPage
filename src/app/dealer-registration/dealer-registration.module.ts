import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerRegistrationPageRoutingModule } from './dealer-registration-routing.module';

import { DealerRegistrationPage } from './dealer-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealerRegistrationPageRoutingModule
  ],
  declarations: [DealerRegistrationPage]
})
export class DealerRegistrationPageModule {}
