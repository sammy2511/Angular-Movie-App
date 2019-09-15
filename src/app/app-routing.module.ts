import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path:'movie/:id', component:MoviedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
