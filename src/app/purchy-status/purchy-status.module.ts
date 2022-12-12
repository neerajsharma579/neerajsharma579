import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PurchyStatusPageRoutingModule } from './purchy-status-routing.module';

import { PurchyStatusPage } from './purchy-status.page';
import { GroupByPipe } from '../group-by.pipe';
// import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  declarations: [GroupByPipe, PurchyStatusPage /*, GrowerLblInfoComponent*/],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchyStatusPageRoutingModule,
  ],
})
export class PurchyStatusPageModule {}
