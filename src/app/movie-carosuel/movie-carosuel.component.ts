import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movie-carosuel',
  templateUrl: './movie-carosuel.component.html',
  styleUrls: ['./movie-carosuel.component.scss']
})
export class MovieCarosuelComponent implements OnInit {

  @Input() sectionhead: string;
  @Input() videoList: [];
  customOptions: any = {
    rewind: false,
    nav: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText: ["<button type='button' role='presentation' class='owl-next'><span aria-label='Next'><img src='assets/images/arrow-left-solid.svg'></span></button>", "<button type='button' role='presentation' class='owl-next'><span aria-label='Next'>›</span></button>"],
    responsive: {
      0: {
      },
      300: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1100: {
        items: 3,
      },
      1366: {
        items: 4
      }
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
