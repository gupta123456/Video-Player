import { Component, OnInit } from '@angular/core';
import { faFlag, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt, faCompress } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {

  VideoName: string = 'Money Heist'
  views: string = '782,380';
  date: string = '23 Feb 2021';
  faFlag = faFlag;
  faShareAlt = faShareAlt;
  faCompress = faCompress;
  faPlay = faPlayCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
