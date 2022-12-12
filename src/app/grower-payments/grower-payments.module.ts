import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GrowerPaymentPageRoutingModule } from './grower-payments-routing.module';
import { GrowerPaymentPage } from './grower-payments.page';
import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowerPaymentPageRoutingModule,
  ],
  declarations: [GrowerPaymentPage, GrowerLblInfoComponent],
})
export class GrowerPaymentPageModule {}
