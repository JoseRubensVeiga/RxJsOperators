import { Component, OnDestroy, OnInit } from '@angular/core';
import { generate, Subscription } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    const generated$ = generate(
      1,
      (x) => x <= 10,
      (x) => x + 1
    );

    this.subscription = generated$.subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('Completed! =)'),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
