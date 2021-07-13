import { Component, Input, OnInit } from '@angular/core';
import { controls } from './controls';
declare var Plyr;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  url;
  player;
  interval;
  listVideo;
  videoList = [];
  constructor() {
  }

  ngOnInit(): void {
    this.url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
    this.player = new Plyr('#plyrID', { controls });
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

  passURL(url) {
    this.url = url;
    window.scroll(0, 0);
    this.player.play();
  }

  videoController(isHovering, video) {
    if (isHovering) {
      video.muted = true;
      video.play();
    }
    else {
      video.pause();
    }
  }

}
