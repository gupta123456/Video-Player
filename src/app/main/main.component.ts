import { Component, OnInit } from '@angular/core';
declare var Plyr;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  url: any;
  player: any;
  videoList: any;
  VideoList: any;
  interval;
  listVideo;
  customOptions: any = {
    rewind: false,
    nav: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText:["<button type='button' role='presentation' class='owl-next'><span aria-label='Next'><img src='assets/images/arrow-left-solid.svg'></span></button>", "<button type='button' role='presentation' class='owl-next'><span aria-label='Next'>›</span></button>"],
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

  customOptions1: any = {
    rewind: false,
    nav: true,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navText:["<button type='button' role='presentation' class='owl-next'><span aria-label='Next'><img src='assets/images/arrow-left-solid.svg'></span></button>", "<button type='button' role='presentation' class='owl-next'><span aria-label='Next'>›</span></button>"],
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
  constructor() {
  }

  ngOnInit(): void {
    this.url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
    this.videoList = [
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
      {
        "title": "Dark",
        "url": "https://reelvillevideos.s3.us-west-1.amazonaws.com/reelvillevideos30+Minutes+of+DOMINOES+FALLING%21+-+Most+Satisfying+ASMR+Compilation+%281%29.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.5 + "M",
        "date": "12 Jan 2021"
      },
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
    ]

    this.VideoList = [
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
      {
        "title": "Dark",
        "url": "https://reelvillevideos.s3.us-west-1.amazonaws.com/reelvillevideos30+Minutes+of+DOMINOES+FALLING%21+-+Most+Satisfying+ASMR+Compilation+%281%29.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.5 + "M",
        "date": "12 Jan 2021"
      },
      {
        "title": "Money Heist",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": "909,279",
        "date": "23 Feb 2021"
      },
      {
        "title": "Narcos",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.20 + "M",
        "date": "21 Feb 2021"
      },
      {
        "title": "Breaking bad",
        "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "image": "../../assets/images/music.jpg",
        "views": 1.94 + "B",
        "date": "23 Mar 2021"
      },
    ]
    const controls = `
    <div class="plyr__controls">
    <div class="top-control">
        <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
        <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
        <div class="plyr__progress">
            <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
            <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
            <span role="tooltip" class="plyr__tooltip">00:00</span>
        </div>
    </div>
    <div class="bottom-control">
        <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
            <svg class="icon--pressed" role="presentation">
                <use xlink:href="#plyr-pause"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation">
                <use xlink:href="#plyr-play"></use>
            </svg>
            <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
        </button>
        <button type="button" class="plyr__control" data-plyr="fast-forward">
            <svg role="presentation">
                <use xlink:href="#plyr-fast-forward"></use>
            </svg>
            <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
        </button>


        <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
            <svg class="icon--pressed" role="presentation">
                <use xlink:href="#plyr-muted"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation">
                <use xlink:href="#plyr-volume"></use>
            </svg>
            <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
        </button>
        <div class="plyr__volume">
            <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off"
                aria-label="Volume">
        </div>

        <button type="button" class="plyr__control" data-plyr="fullscreen">
            <fa-icon _ngcontent-byp-c24="" class="ng-fa-icon icon--not-pressed" ng-reflect-icon="[object Object]"><svg
                    role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand"
                    class="svg-inline--fa fa-expand fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z">
                    </path>
                </svg></fa-icon>
            <fa-icon _ngcontent-ird-c23="" class="ng-fa-icon icon--pressed" ng-reflect-icon="[object Object]"><svg
                    role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compress"
                    class="svg-inline--fa fa-compress fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                        d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z">
                    </path>
                </svg></fa-icon>
            <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
            <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
        </button>
    </div>
</div>
<div tabindex="0"
    class="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr--is-touch plyr--paused">
</div>
<button type="button" class="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play">
    <svg aria-hidden="true" focusable="false">
        <use href="#plyr-play"></use>
    </svg>
</button>
`;
    this.player = new Plyr('#plyrID', { controls });

  }

  passURL(url) {
    this.url = url;
    window.scroll(0, 0);
    this.player.play();
  }

  play(i, listType) {
    this.listVideo = document.querySelector("." + listType + i);
    this.listVideo.play();
    this.listVideo.volume = 0;
    this.listVideo.currentTime = 10;
    this.interval = setInterval(() => {
      console.log("setTimeOut");
      this.listVideo.currentTime = 10;
    }, 5000)

  }

  stop(i, listType) {
    clearInterval(this.interval);
    this.listVideo = document.querySelector("." + listType + i);
    this.listVideo.pause();
    this.listVideo.currentTime = 0;
    this.listVideo.volume = 0;
  }

}
