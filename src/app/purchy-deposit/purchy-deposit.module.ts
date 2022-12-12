import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PurchyDepositPageRoutingModule } from './purchy-deposit-routing.module';

import { PurchyDepositPage } from './purchy-deposit.page';
import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchyDepositPageRoutingModule,
  ],
  declarations: [PurchyDepositPage, GrowerLblInfoComponent],
})
export class PurchyDepositPageModule {}
