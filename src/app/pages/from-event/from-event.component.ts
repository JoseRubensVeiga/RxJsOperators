import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton') myButton?: ElementRef;
  subscription?: Subscription;

  constructor() {}

  ngAfterViewInit(): void {
    const element = this.myButton?.nativeElement as HTMLElement;

    const clickEvent = fromEvent(element, 'click').pipe(take(2));

    this.subscription = clickEvent.subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('Completed! :)'),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
