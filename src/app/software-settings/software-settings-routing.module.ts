import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareSettingsPage } from './software-settings.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareSettingsPageRoutingModule {}
