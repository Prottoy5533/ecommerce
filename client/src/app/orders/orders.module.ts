import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailedComponent } from '../order-detailed/order-detailed.component';
import { OrdersComponent } from './orders.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailedComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
