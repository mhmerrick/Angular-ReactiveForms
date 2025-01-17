import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customers/customer.component';
//import { DashboardComponent } from './dashboard.component';
//import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/customer', pathMatch: 'full'},
    { path: 'customer', component:CustomerComponent }
  /*{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }