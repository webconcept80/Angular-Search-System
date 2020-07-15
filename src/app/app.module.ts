import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailedDataComponent } from './detailed-data/detailed-data.component';
import { UserComponent } from './public/user/user.component';
import { AddressComponent } from './public/address/address.component';
import { EmployeeComponent } from './public/employee/employee.component';
import { PublicComponent } from './public/public.component';
import { SecretEmployeeComponent } from './secure/secret-employee/secret-employee.component';
import { LandingComponent } from './public/landing/landing.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    EmployeeComponent,
    DetailedDataComponent,
    PublicComponent,
    SecretEmployeeComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
