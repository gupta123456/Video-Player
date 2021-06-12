import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public player;
  constructor() { }

  ngOnInit(): void {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
  }

}
