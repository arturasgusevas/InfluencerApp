import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandListComponent } from './brand-list/brand-list.component';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { CampaignComponent } from './campaign/campaign.component';
import { NavComponent } from './nav/nav.component';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from './../home/home.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'campaigns', component: CampaignComponent },
      { path: 'influencer-list', component: InfluencerListComponent },
      { path: 'brand-list', component: BrandListComponent },
      { path: 'logout', component: HomeComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
