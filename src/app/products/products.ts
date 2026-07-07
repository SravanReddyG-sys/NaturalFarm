import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchProduct,Product } from '../search-product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  addToCart(): void {
    window.alert("🚚 Added to the cart successfully.🛒" );
    this.cartservice.addToCart(1);
  }
  searchTerm: string = '';
  product: Product | null = null;
  isSearchActive: boolean = false;

  constructor(private productSearchService: SearchProduct,private cartservice:CartService) {}

  searchProduct(): void {
    if (this.searchTerm.trim()) {
      this.productSearchService.searchProduct(this.searchTerm)
        .subscribe(product => {
          this.product = product;
          this.isSearchActive = true;
        });
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.product = null;
    this.isSearchActive = false;
  }
  onAddToCart(): void {
    this.cartservice.addToCart(1);
  }
  
}