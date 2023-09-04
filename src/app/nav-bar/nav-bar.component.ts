import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  popMenu:boolean = false;

  navOpen(){
    this.popMenu =! this.popMenu;
  }

  popupTopTitle: Array<any> = [
    {title: "Sports", l1: "Volleyball", l2: "Basketball", l3: "Tennis", l4: "Swimming"},
    {title: "Leisure", l1: "Forrest Track", l2: "Tai Chi", l3: "Shopping", l4: "Picnic"},
    {title: "Extreme", l1: "Rock Climbing", l2: "Parachuting", l3: "Bungee Jumping", l4: "Skydiving"},
    {title: "Kids", l1: "Horse Riding", l2: "Bird Watching", l3: "Arts & Craft", l4: "Tag"},
    {title: "Elderly", l1: "Walk For A Cause", l2: "Senior Fitness", l3: "TenArts Workshopnis", l4: "Disco"},
  ]

  menu:boolean = true;
  menuClose:boolean = false;
  istoggled:boolean = true;

  menuOpen(){
    this.menu =! this.menu;
    this.menuClose =! this.menuClose;
    this.istoggled =!this.istoggled;
  }

}
