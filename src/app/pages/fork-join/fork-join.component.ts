import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss'],
})
export class ForkJoinComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  subject1$ = new Subject();
  subject2$ = new Subject();
  subject3$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    const forked = forkJoin({
      sub1: this.subject1$,
      sub2: this.subject2$,
      sub3: this.subject3$,
    });

    this.subscription = forked.subscribe((value) => {
      console.log(value);
    });

    this.subject1$.next('Subject 1 =)');
    this.subject2$.next('Subject 2 =)');
    this.subject3$.next('Subject 3 =)');
    this.subject3$.next('Subject 3.1 =)');

    this.subject1$.complete();
    this.subject2$.complete();
    this.subject3$.complete();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
