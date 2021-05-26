import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, timer, Observable, range, Subscription, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor() {}

  ngOnInit(): void {
    const obs1$ = this.fromFetch(`${this.baseURL}/todos/1`);
    const obs2$ = this.fromFetch(`${this.baseURL}/todos/2`);

    this.subscription = concat(obs1$, obs2$).subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  fromFetch<T>(url: string): Observable<T> {
    return timer(2000).pipe(
      switchMap(() => from(fetch(url).then((r) => r.json())))
    );
  }
}
