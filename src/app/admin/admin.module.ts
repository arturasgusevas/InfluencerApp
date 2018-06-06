import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CampaignComponent } from './campaign/campaign.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatCardModule
  ],
  declarations: [AdminComponent, InfluencerListComponent, BrandListComponent, CampaignComponent, RegistrationComponent, NavComponent]
})
export class AdminModule { }
