import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketItem } from '../models/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-basket-summery',
  templateUrl: './basket-summery.component.html',
  styleUrls: ['./basket-summery.component.scss'],
})
export class BasketSummeryComponent {
  @Output() addItem = new EventEmitter<BasketItem>();
  @Output() removeItem = new EventEmitter<{ id: number, quantity: number }>();
  @Input() isBasket = true;

  constructor(public basketService:BasketService){}

  addBasketItem(item: BasketItem) {
    this.addItem.emit(item);

  }

  removeBasketItem(id: number, quantity: number) {
    this.removeItem.emit({ id, quantity });

  }
}
