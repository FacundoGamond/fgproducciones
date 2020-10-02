import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuToggle: boolean
  constructor() {
    this.menuToggle = true;
  }

  ngOnInit(): void {
  }

  scrollTo(component) {
    $('html, body').animate({
      scrollTop: $(component).offset().top
    }, 1000);
    this.toggleMenu();
  }

  toggleMenu() {
    console.log("click")
    if (this.menuToggle == false) {
      $("#menu-responsive").animate({
        height: '0px'
      }, 300)
      this.menuToggle = true;
    } else {
      $("#menu-responsive").animate({
        height: '355px'
      }, 300)
      this.menuToggle = false;
    }

  }

}
