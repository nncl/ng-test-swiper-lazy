import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './custom-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [ CustomCarouselComponent ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [ CustomCarouselComponent ]
})
export class CustomCarouselModule {
}
