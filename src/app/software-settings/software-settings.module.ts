import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SoftwareSettingsPageRoutingModule } from './software-settings-routing.module';
import { SoftwareSettingsPage } from './software-settings.page';
import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftwareSettingsPageRoutingModule,
  ],
  declarations: [SoftwareSettingsPage, GrowerLblInfoComponent],
})
export class SoftwareSettingsPageModule {}
