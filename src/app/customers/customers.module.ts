import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomCarouselModule } from '../components/custom-carousel/custom-carousel.module';


@NgModule({
  declarations: [
    CustomersComponent
  ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        CustomCarouselModule
    ]
})
export class CustomersModule { }
