import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { YardStatusPageRoutingModule } from './yard-status-routing.module';
import { YardStatusPage } from './yard-status.page';
//import { SharedModule } from '../shared/shared.module';
import { GrowerInfoComponent } from '../components/grower-info/grower-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YardStatusPageRoutingModule,
    //SharedModule,
  ],
  declarations: [YardStatusPage, GrowerInfoComponent],
})
export class YardStatusPageModule {}
