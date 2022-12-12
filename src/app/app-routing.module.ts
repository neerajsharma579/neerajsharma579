import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './auth/authGaurd';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    canActivate: [AuthGaurd],
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./survey/survey.module').then((m) => m.SurveyPageModule),
    canActivate: [AuthGaurd],
  },
  {
    path: 'bond',
    loadChildren: () =>
      import('./bond/bond.module').then((m) => m.BondPageModule),
    canActivate: [AuthGaurd],
  },
  {
    path: 'yard-status',
    loadChildren: () =>
      import('./yard-status/yard-status.module').then(
        (m) => m.YardStatusPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'crushing-info',
    loadChildren: () =>
      import('./crushing-info/crushing-info.module').then(
        (m) => m.CrushingInfoPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'purchy-status',
    loadChildren: () =>
      import('./purchy-status/purchy-status.module').then(
        (m) => m.PurchyStatusPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'purchy-deposit',
    loadChildren: () =>
      import('./purchy-deposit/purchy-deposit.module').then(
        (m) => m.PurchyDepositPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'grower-payment',
    loadChildren: () =>
      import('./grower-payments/grower-payments.module').then(
        (m) => m.GrowerPaymentPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'software-settings',
    loadChildren: () =>
      import('./software-settings/software-settings.module').then(
        (m) => m.SoftwareSettingsPageModule
      ),
    canActivate: [AuthGaurd],
  },
  {
    path: 'changepassword',
    loadChildren: () =>
      import('./changepassword/changepassword.module').then(
        (m) => m.ChangepasswordPageModule
      ),
    canActivate: [AuthGaurd],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
