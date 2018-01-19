import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  color:string;
  d:any;
  ctime: CurrTime;
  x:number = 1;

  // function refreshData()
  // {
  //     x = 1;  // x = seconds
  //  	var d = new Date()
  //  	var h = d.getHours();
  //  	var m = d.getMinutes();
  //  	var s = d.getSeconds();
  //
  //  	if (h<=9) {h = '0'+h};
  //  	if (m<=9) {m = '0'+m};
  // 	if (s<=9) {s = '0'+s};
  //
  //  	var	color = '#'+h+m+s;
  //
  //     $("div.background").css("background-color", color );
  //     $("p#hex").text(color);
  //
  //     setTimeout(refreshData, x*1000);
  // }
  //
  // refreshData(); // execute function


  callFuntionAtIntervals() {
    console.log("inside interval function");
    console.log(this.d);
    this.d = new Date();
    this.ctime.h = this.d.getHours();
    this.ctime.m = this.d.getMinutes();
    this.ctime.s = this.d.getSeconds();

    if (this.ctime.h<="9") {this.ctime.h = '0'+this.ctime.h};
    if (this.ctime.m<="9") {this.ctime.m = '0'+this.ctime.m};
    if (this.ctime.s<="9") {this.ctime.s = '0'+this.ctime.s};

    this.color = '#'+this.ctime.h+this.ctime.m+this.ctime.s;

  }

  constructor() {
    this.color = "";
    this.ctime = {
        h:"",
        m:"",
        s:""
    }
  }

  ngOnInit() {
    this.startTimerFunction();
  }

  startTimerFunction() {
    this.interval = setInterval(() => {
      this.callFuntionAtIntervals();
    }, this.x*1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}

interface CurrTime {
  h:string;
  m:string;
  s:string;
}
