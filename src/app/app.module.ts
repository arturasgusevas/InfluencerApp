import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Parse from 'parse';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { BrandComponent } from './brand/brand.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InfluencerModalComponent } from './home/modals/influencer-modal/influencer-modal.component';
import { BrandModalComponent } from './home/modals/brand-modal/brand-modal.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { NgForm } from '@angular/forms';

import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfluencerComponent,
    BrandComponent,
    ContactsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    InfluencerModalComponent,
    BrandModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [AuthService, AuthGuard],
  entryComponents: [InfluencerModalComponent, BrandModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    Parse.initialize("InfluencerApp");
    Parse.serverURL = 'http://localhost:1337/parse';
    let currentUser = Parse.User.current();
    console.log(currentUser);
  }
}
