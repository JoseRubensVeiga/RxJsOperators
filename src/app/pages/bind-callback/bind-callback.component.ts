import { Component, OnInit } from '@angular/core';
import { bindCallback, Subscription } from 'rxjs';

@Component({
  selector: 'app-bind-callback',
  templateUrl: './bind-callback.component.html',
  styleUrls: ['./bind-callback.component.scss'],
})
export class BindCallbackComponent implements OnInit {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const fn = bindCallback(this.fakeFnWithCallback);

    fn('bindCallback :)').subscribe((value) => {
      console.log(value);
    });
  }

  private fakeFnWithCallback<T>(value: T, cb: (param: T) => any): any {
    return cb(value);
  }
}
