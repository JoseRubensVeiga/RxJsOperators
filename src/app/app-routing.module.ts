import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindCallbackComponent } from './pages/bind-callback';

const routes: Routes = [
  { path: 'bind-callback', component: BindCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
