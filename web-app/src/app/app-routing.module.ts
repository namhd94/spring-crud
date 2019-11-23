import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/rest/dashboard', pathMatch: 'full' },
  { path: 'rest/dashboard', component: DashboardComponent },
  { path: 'rest/user', component: UserComponent },
  { path: 'rest/user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
