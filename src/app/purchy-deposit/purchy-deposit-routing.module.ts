import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchyDepositPage } from './purchy-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: PurchyDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchyDepositPageRoutingModule {}
