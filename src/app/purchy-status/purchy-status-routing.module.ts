import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchyStatusPage } from './purchy-status.page';

const routes: Routes = [
  {
    path: '',
    component: PurchyStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchyStatusPageRoutingModule {}
