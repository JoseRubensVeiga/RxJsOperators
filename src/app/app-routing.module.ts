import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindCallbackComponent } from './pages/bind-callback';
import { BindNodeCallbackComponent } from './pages/bind-node-callback';

const routes: Routes = [
  { path: 'bind-callback', component: BindCallbackComponent },
  { path: 'bind-node-callback', component: BindNodeCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
