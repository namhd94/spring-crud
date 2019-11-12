import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/rest/dashboard', pathMatch: 'full' },
  { path: 'rest/dashboard', component: DashboardComponent },
  {path: 'rest/user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
