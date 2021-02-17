import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'delivery', component: DeliveryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
