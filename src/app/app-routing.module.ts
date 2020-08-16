import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './Dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
