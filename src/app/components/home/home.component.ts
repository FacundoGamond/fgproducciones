import { Component, OnInit } from '@angular/core'; 
import ScrollOut from "scroll-out";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    ScrollOut({
      targets: 'span,h2'
    })
  }

}
