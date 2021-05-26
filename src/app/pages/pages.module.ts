import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindCallbackComponent } from './bind-callback';
import { BindNodeCallbackComponent } from './bind-node-callback';

@NgModule({
  imports: [CommonModule],
  declarations: [BindCallbackComponent, BindNodeCallbackComponent],
})
export class PagesModule {}
