import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { MyCompaniesComponent } from './my-companies/my-companies.component';
import { AddPricingRulesComponent } from './add-pricing-rules/add-pricing-rules.component';
import { MyPricingRulesComponent } from './my-pricing-rules/my-pricing-rules.component';


const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  },
  {
    path: 'main-dashboard',
    component: MainDashboardComponent,
    children: [
      {
        path: '',
        component: HomeDashboardComponent
      },
      {
        path: 'home-dashboard',
        component: HomeDashboardComponent
      },
      {
        path: 'update-user',
        component: UpdateUserComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      },
      {
        path: 'add-item',
        component: AddItemComponent
      },
      {
        path: 'my-items',
        component: MyItemsComponent
      },
      {
        path: 'add-company',
        component: AddCompanyComponent
      },
      {
        path: 'my-companies',
        component: MyCompaniesComponent
      },
      {
        path: 'add-pricing',
        component: AddPricingRulesComponent
      },
      {
        path: 'company-offers',
        component: MyPricingRulesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
