import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movie-carosuel',
  templateUrl: './movie-carosuel.component.html',
  styleUrls: ['./movie-carosuel.component.scss']
})
export class MovieCarosuelComponent implements OnInit {

  videoList = [];
  @Input() sectionhead: string;
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
    this.videoList = [
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": 'assets/images/frozen.jpeg',
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": 'assets/images/joker.jpg',
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": 'assets/images/jumangy.jpg',
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
      {
        "title": "Dark",
        "url": "https://reelvillevideos.s3.us-west-1.amazonaws.com/reelvillevideos30+Minutes+of+DOMINOES+FALLING%21+-+Most+Satisfying+ASMR+Compilation+%281%29.mp4",
        "image": 'assets/images/star-wars.jpeg',
        "views": 1.5 + "M",
        "date": "12 Jan 2021"
      },
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": 'assets/images/frozen.jpeg',
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": 'assets/images/joker.jpg',
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": 'assets/images/jumangy.jpg',
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
    ]
  }

}
