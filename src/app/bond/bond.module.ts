import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BondPageRoutingModule } from './bond-routing.module';
import { BondPage } from './bond.page';
import { GrowerInfoComponent } from '../components/grower-info/grower-info.component';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BondPageRoutingModule],
  declarations: [BondPage, GrowerInfoComponent],
})
export class BondPageModule {}
