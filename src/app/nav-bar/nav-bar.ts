import { Component } from '@angular/core';
import { CartService } from '../cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  cartCount = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
  ResetCart():void{
    this.cartService.resetCart();
  }
}
