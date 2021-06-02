import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindCallbackComponent } from './bind-callback';
import { BindNodeCallbackComponent } from './bind-node-callback';
import { CombineLatestComponent } from './combine-latest';
import { ConcatComponent } from './concat';
import { DeferComponent } from './defer';
import { ForkJoinComponent } from './fork-join';
import { FromComponent } from './from';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BindCallbackComponent,
    BindNodeCallbackComponent,
    CombineLatestComponent,
    ConcatComponent,
    DeferComponent,
    ForkJoinComponent,
    FromComponent,
  ],
})
export class PagesModule {}
