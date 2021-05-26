import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animation-frames',
  templateUrl: './animation-frames.component.html',
  styleUrls: ['./animation-frames.component.scss'],
})
export class AnimationFramesComponent implements OnInit {
  subscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.setAnimationFrame();
  }

  private setAnimationFrame(): void {
    this.subscription = new Subscription();
  }
}
