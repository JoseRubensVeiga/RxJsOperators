import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindCallbackComponent } from './pages/bind-callback';
import { BindNodeCallbackComponent } from './pages/bind-node-callback';
import { CombineLatestComponent } from './pages/combine-latest';
import { ConcatComponent } from './pages/concat';

const routes: Routes = [
  { path: 'bind-callback', component: BindCallbackComponent },
  { path: 'bind-node-callback', component: BindNodeCallbackComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'concat', component: ConcatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
