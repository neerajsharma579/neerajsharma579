// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// // import { GrowerInfoComponent } from '../components/grower-info/grower-info.component';
// // import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

// @NgModule({
//   // declarations: [GrowerInfoComponent, GrowerLblInfoComponent],
//   imports: [CommonModule],
//   // exports: [GrowerInfoComponent, GrowerLblInfoComponent],
// })

// export class SharedModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowerInfoComponent } from '../components/grower-info/grower-info.component';
//import { GrowerLblInfoComponent } from '../components/grower-lbl-info/grower-lbl-info.component';

@NgModule({
  declarations: [GrowerInfoComponent /*, GrowerLblInfoComponent*/],
  imports: [CommonModule],
  exports: [GrowerInfoComponent /*, GrowerLblInfoComponent*/],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
