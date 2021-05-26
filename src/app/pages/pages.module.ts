import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindCallbackComponent } from './bind-callback';
import { BindNodeCallbackComponent } from './bind-node-callback';
import { CombineLatestComponent } from './combine-latest';
import { ConcatComponent } from './concat';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BindCallbackComponent,
    BindNodeCallbackComponent,
    CombineLatestComponent,
    ConcatComponent,
  ],
})
export class PagesModule {}
