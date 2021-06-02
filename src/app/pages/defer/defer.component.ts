import { Component, OnDestroy, OnInit } from '@angular/core';
import { defer, fromEvent, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss'],
})
export class DeferComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  /**
   * Esse método tem o mesmo efeito da função defer
   * retorna um novo observable sempre que executado
   */
  get clicksOrInterval(): Observable<Event | number> {
    return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  }

  constructor() {}

  ngOnInit(): void {
    const clicksOrInterval = defer(() =>
      Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000)
    );
    clicksOrInterval.subscribe((x) => console.log('1', x));
    clicksOrInterval.subscribe((x) => console.log('2', x));
    clicksOrInterval.subscribe((x) => console.log('3', x));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
