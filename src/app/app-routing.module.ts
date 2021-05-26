import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationFramesComponent } from './pages/animation-frames';

const routes: Routes = [
  { path: 'animation-frames', component: AnimationFramesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
