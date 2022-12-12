import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YardStatusPage } from './yard-status.page';

const routes: Routes = [
  {
    path: '',
    component: YardStatusPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YardStatusPageRoutingModule {}
