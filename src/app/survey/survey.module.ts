import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SurveyPageRoutingModule } from './survey-routing.module';
import { SurveyPage } from './survey.page';
//import { SharedModule } from '../shared/shared.module';
import { GrowerInfoComponent } from '../components/grower-info/grower-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPageRoutingModule,
    //SharedModule,
  ],
  declarations: [SurveyPage, GrowerInfoComponent],
})
export class SurveyPageModule {}
