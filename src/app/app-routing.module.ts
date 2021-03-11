import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { HomeComponent } from './home/home.component';
import { ReviewleaveComponent } from './reviewleave/reviewleave.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'apply-for-leave',component:ApplyleaveComponent},
  {path:'review-leave', component:ReviewleaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
