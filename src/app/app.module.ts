import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';



import { MatFormFieldModule, MatInputModule } from '@angular/material';

import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserService } from './user.service';
import { UsersListComponent } from './users-list/users-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminService } from './admin.service';
import { AddItemComponent } from './add-item/add-item.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { AddPricingRulesComponent } from './add-pricing-rules/add-pricing-rules.component';
import { MyPricingRulesComponent } from './my-pricing-rules/my-pricing-rules.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainDashboardComponent,
    HomeDashboardComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    UpdateUserComponent,
    UsersListComponent,
    UserHomeComponent,
    AddItemComponent,
    MyItemsComponent,
    AddCompanyComponent,
    MyCompaniesComponent,
    AddPricingRulesComponent,
    MyPricingRulesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    AppRoutingModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
