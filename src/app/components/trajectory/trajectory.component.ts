import { Component, OnInit } from '@angular/core';
import ScrollOut from "scroll-out";

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss']
})
export class TrajectoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ScrollOut({
      targets: 'p, h2, #line, #cards, #slider, #cards-responsive'
    });

    (<any>$('.bxslider')).bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager: false,
      slideWidth: 600
    });
  }


}
