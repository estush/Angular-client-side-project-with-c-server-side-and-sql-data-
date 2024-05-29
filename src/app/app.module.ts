import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { OurTripComponent } from './comps/our-trip/our-trip.component';
import { MyPlaceComponent } from './comps/my-place/my-place.component';
import { RegisterComponent } from './comps/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripDdetailsComponent } from './comps/trip-ddetails/trip-ddetails.component';
import { AdminComponent } from './comps/admin/admin.component';
import { OurUsersComponent } from './comps/our-users/our-users.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OurTripComponent,
    MyPlaceComponent,
    RegisterComponent,
    NavbarComponent,
    TripDdetailsComponent,
    AdminComponent,
    OurUsersComponent,
    UpdateTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
