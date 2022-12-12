import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrushingInfoPage } from './crushing-info.page';

const routes: Routes = [
  {
    path: '',
    component: CrushingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrushingInfoPageRoutingModule {}
