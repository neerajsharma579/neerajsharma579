import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondPage } from './bond.page';

const routes: Routes = [
  {
    path: '',
    component: BondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BondPageRoutingModule {}
