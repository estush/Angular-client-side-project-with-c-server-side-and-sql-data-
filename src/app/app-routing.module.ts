import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { LoginComponent } from './comps/login/login.component';
import { MyPlaceComponent } from './comps/my-place/my-place.component';
import { OurTripComponent } from './comps/our-trip/our-trip.component';
import { RegisterComponent } from './comps/register/register.component';
import { TripDdetailsComponent } from './comps/trip-ddetails/trip-ddetails.component';
import { AdminComponent } from './comps/admin/admin.component';
import { OurUsersComponent } from './comps/our-users/our-users.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';

const routes: Routes = [
  // מערך זה מכיל אובייקטים  
  // במבנה הבא:
 
  {path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'my place', component: MyPlaceComponent},
  { path: 'our trips', component: OurTripComponent},
  { path: 'our users', component: OurUsersComponent},
  { path: 'trip details/:tripId', component: TripDdetailsComponent},
  { path: 'update trip/:tripId', component: UpdateTripComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'Admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
