import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, of, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const promiseString$ = from(this.promiseString());
    const observableString$ = from(this.observableString());
    const arrayString$ = from(this.arrayString());
    const generatorString$ = from(this.generatorString());

    promiseString$.subscribe(console.log);
    arrayString$.subscribe(console.log);
    observableString$.subscribe(console.log);
    generatorString$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private async promiseString(): Promise<string> {
    return 'Promise Event';
  }

  private observableString(): Observable<string> {
    return of('Observable Event');
  }

  private arrayString(): Array<string> {
    return ['Array', 'of', 'string'];
  }

  private *generatorString(): Generator<string> {
    return 'Generator Event';
  }
}
