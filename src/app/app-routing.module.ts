import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    canActivateChild: [],
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    // loadChildren: () =>
    //   import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    canActivateChild: [],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
