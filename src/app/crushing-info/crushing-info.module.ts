import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrushingInfoPageRoutingModule } from './crushing-info-routing.module';

import { CrushingInfoPage } from './crushing-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrushingInfoPageRoutingModule
  ],
  declarations: [CrushingInfoPage]
})
export class CrushingInfoPageModule {}
