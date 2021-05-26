import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const firstTimer = timer(0, 1000);
    const secondTimer = timer(500, 1000);
    const combinedTimers = combineLatest([firstTimer, secondTimer]);

    this.subscription = combinedTimers.subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
