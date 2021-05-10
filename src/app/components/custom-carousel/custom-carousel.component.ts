import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {
  config: SwiperConfigInterface = {
    loop: true,
    slidesPerView: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
