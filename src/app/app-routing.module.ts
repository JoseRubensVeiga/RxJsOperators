import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindCallbackComponent } from './pages/bind-callback';
import { BindNodeCallbackComponent } from './pages/bind-node-callback';
import { CombineLatestComponent } from './pages/combine-latest';
import { ConcatComponent } from './pages/concat';
import { DeferComponent } from './pages/defer';
import { ForkJoinComponent } from './pages/fork-join';
import { FromComponent } from './pages/from';
import { FromEventComponent } from './pages/from-event';

const routes: Routes = [
  { path: 'bind-callback', component: BindCallbackComponent },
  { path: 'bind-node-callback', component: BindNodeCallbackComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'fork-join', component: ForkJoinComponent },
  { path: 'from', component: FromComponent },
  { path: 'from-event', component: FromEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
