import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSocketComponent } from './home-socket/home-socket.component';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch : 'full'},
  {path : 'home', component : HomeSocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
