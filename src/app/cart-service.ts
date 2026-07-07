import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  addToCart(quantity: number = 1): void {
    this.cartCount.next(this.cartCount.value + quantity);
  }

  resetCart(): void {
    this.cartCount.next(0);
  }
}
