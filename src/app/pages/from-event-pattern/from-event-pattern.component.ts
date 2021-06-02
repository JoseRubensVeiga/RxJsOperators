import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEventPattern, Subscription } from 'rxjs';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-from-event-pattern',
  templateUrl: './from-event-pattern.component.html',
  styleUrls: ['./from-event-pattern.component.scss'],
})
export class FromEventPatternComponent implements AfterViewInit, OnDestroy {
  @ViewChild('myButton') myButton?: ElementRef;
  subscription1?: Subscription;
  subscription2?: Subscription;

  constructor() {}

  ngAfterViewInit(): void {
    const event$ = fromEventPattern(
      this.addClickHandler.bind(this),
      this.removeClickHandler.bind(this)
    );

    this.subscription1 = event$.subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('Completed! =)'),
    });

    this.subscription2 = event$.subscribe({
      next: console.log,
      error: console.error,
      complete: () => console.log('Completed! =)'),
    });
  }

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }

  private addClickHandler(handler: NodeEventHandler) {
    console.log('attaching');
    this.myButton?.nativeElement.addEventListener('click', handler);
  }

  private removeClickHandler(handler: NodeEventHandler) {
    console.log('removing');
    this.myButton?.nativeElement.removeEventListener('click', handler);
  }
}
