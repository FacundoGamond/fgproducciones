import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})

export class VisionComponent implements OnInit {
  public imgSlider:any;
  constructor() { 
    this.imgSlider=['','','','','','','','','']
  }

  ngOnInit(): void {

    (<any>$('.bxslider')).bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager: false,
      slideWidth: 400
    });
  }

}
