import { LandingComponent } from './public/landing/landing.component';
import { SecretEmployeeComponent } from './secure/secret-employee/secret-employee.component';
import { PublicComponent } from './public/public.component';
import { DetailedDataComponent } from './detailed-data/detailed-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './public/user/user.component';
import { AddressComponent } from './public/address/address.component';
import { EmployeeComponent } from './public/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'addresses',
        component: AddressComponent,
      },
      {
        path: 'employees',
        component: EmployeeComponent,
      },
    ],
  },
  {
    path: 'details',
    component: DetailedDataComponent,
  },
  {
    path: 'secret',
    component: SecretEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
