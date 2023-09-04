import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements AfterViewInit{
  
    constructor(private elementRef: ElementRef) {}
  
    ngAfterViewInit(): void {
    const sliderElement = $('.hero-image-slide');
    const sliderElement1 = $('.hero-info');

    sliderElement.slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinity: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow : '#prev-img',
      nextArrow: '#next-img',
    });

    // sliderElement1.slick({
    //   infinity: true,
    //   spidesToShow: 3,
    //   adaptiveHeight: true,
    //   speed: 300,
    //   prevArrow : '.hero-news-left-btn',
    //   nextArrow: '.hero-news-right-btn',
    // });

    }

  photo: Array<any> = [
    {Image: "../../assets/mountain.jpg"},
    {Image: "../../assets/mountain2.jpg"},
    {Image: "../../assets/mountain3.jpg"},
  ]

}
