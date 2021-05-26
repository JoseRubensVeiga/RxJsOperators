import { Component, OnDestroy, OnInit } from '@angular/core';
import { bindNodeCallback, Subscription } from 'rxjs';

type NodeCallbackType = (errorCb: Error | null, value?: string) => void;

@Component({
  selector: 'app-bind-node-callback',
  templateUrl: './bind-node-callback.component.html',
  styleUrls: ['./bind-node-callback.component.scss'],
})
export class BindNodeCallbackComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const fn = bindNodeCallback(this.fakeFnWithCallback);

    this.subscription = fn().subscribe(
      (value) => {
        console.log('Sucesso!', value);
      },
      (error) => {
        console.error('Erro!', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private fakeFnWithCallback(callback: NodeCallbackType): any {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber <= 5) {
      return callback(new Error('Custom error'));
    }

    return callback(null, 'Ocorreu tudo certo!');
  }
}
