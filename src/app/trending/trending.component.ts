import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.less']
})
export class TrendingComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
  const sliderElement = $('.trending-details');
  const hnOneElement = $('.hn-details-one');
  const hnTwoElement = $('.hn-details-two');

    sliderElement.slick({
        // autoplay: false,
        // autoplaySpeed: 3000,
        // dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        prevArrow : '.trending-slides-l',
        nextArrow: '.trending-slides-r',
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              vertical: true,
              verticalSwiping: true,
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
          //     infinite: true,
          //     dots: false
          //   }
          // }
        ]  
    });

    hnOneElement.slick({
      infinity: true,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true,
      prevArrow : '.hn-slids-l',
      nextArrow: '.hn-slids-r',
      vertical: true,  // Enable vertical sliding
      verticalSwiping: true,  // Enable vertical swiping
    });

    hnTwoElement.slick({
      Infinity: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      prevArrow : '.hn-s-l',
      nextArrow: '.hn-s-r',
      vertical: true,
      verticalSwiping: true,
      responsive: [
        {
          breakpoint: 1350,
           settings: {
            slidesToShow: 2,
            adaptiveHeight: true,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            adaptiveHeight: true,
            infinite: true,
            dots: false,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            adaptiveHeight: true,
            infinite: true,
            dots: false,
            vertical: true,
            verticalSwiping: true,
          }
        },
      ]
    });
  }

  trending:Array<any> = [
    {
      imgUrl: "../../assets/Image.png",
      title: "Dolore magna aliqua",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "2m ago"
    },
    {
      imgUrl: "../../assets/annie-spratt-216507-unsplash.png",
      title: "Morbi eleifend a libero",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "1h ago"
    },
    {
      imgUrl: "../../assets/carlos-hevia-628890-unsplash.png",
      title: "Morbi eleifend a libero",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "3h ago"
    },
    {
      imgUrl: "../../assets/Image.png",
      title: "Dolore magna aliqua",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "2m ago"
    },
    {
      imgUrl: "../../assets/annie-spratt-216507-unsplash.png",
      title: "Morbi eleifend a libero",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "1h ago"
    },
    {
      imgUrl: "../../assets/carlos-hevia-628890-unsplash.png",
      title: "Morbi eleifend a libero",
      desc: "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "3h ago"
    },
    
  ]

  hn_one: Array<any> = [
    {
      imgUrl: "../../assets/Image 12.png",
     name: "CITY",
     title: "Large article title",
     desc: "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
     time: "2m ago"
    },
    {imgUrl: "../../assets/Image 125.png",
     name: "TRAVEL",
     title: "Large article title",
     desc: "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
     time: "10m ago"
    },
    {imgUrl: "../../assets/Image 12.png",
     name: "CITY",
     title: "Large article title",
     desc: "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
     time: "1h ago"
    },
    {imgUrl: "../../assets/Image 125.png",
     name: "TRAVEL",
     title: "Large article title",
     desc: "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.",
     time: "2h ago"
    },
  ]

  hn_two: Array<any> = [
    {imgUrl: "../../assets/161975_1024x768.png",
     title: "Small title",
     time: "3h ago",
     news: "Worldnews"
    },
    {imgUrl: "../../assets/roberto-nickson-g-744100-unsplash.png",
     title: "Small title",
     time: "2h ago",
     news: "Days"
    },
    {imgUrl: "../../assets/tom-mussak-108425-unsplash.png",
     title: "Small title",
     time: "1h ago",
     news: "Monica"
    },
    {imgUrl: "../../assets/161975_1024x768.png",
     title: "Small title",
     time: "3h ago",
     news: "Worldnews"
    },
    {imgUrl: "../../assets/roberto-nickson-g-744100-unsplash.png",
     title: "Small title",
     time: "2h ago",
     news: "Days"
    },
    {imgUrl: "../../assets/tom-mussak-108425-unsplash.png",
     title: "Small title",
     time: "1h ago",
     news: "Monica"
    },
  ]

  l_more: Array<any> =[
    {imgUrl: "../../assets/pexels-simon-sikorski-1131573.png",
     title: "Malory Place",
     desc: "Nulla pellentesque laoreet ultrices. Phasellus nec lectus mi. Praesent volutpa."
    },
    {imgUrl: "../../assets/pexels-pixabay-147411.png",
     title: "Cottage With a View",
     desc: "Ut id ipsum eget leo vestibulum egestas. Etiam porta, nisi ac rhoncus facilisis."
    },
    {imgUrl: "../../assets/pexels-ben-mack-6775268.png",
     title: "Blue Mountain Top",
     desc: "Vestibulum justo orci, consectetur id arcu id, porttitor maximus nulla. Praesent faucibus commodo mattis."
    },
  ]
}
