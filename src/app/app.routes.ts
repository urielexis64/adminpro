import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages/pages.routes';
import { AuthRoutingModule } from './auth/auth.routes';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// path: '/dashboard' PagesRouting
// path: '/auth' AuthRouting

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
