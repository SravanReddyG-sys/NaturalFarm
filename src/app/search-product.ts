import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchProduct {
   private products: Product[] = [
    { name: 'Organic Milk', description: 'Pure&Fresh Buffallo Milk from Healthy Environment Grown', price: 75.00 },
    { name: 'Organic Chicken', description: 'Free Range Chicken! Healthy,Antibiotic, Free Grazed Poultry', price: 750.00 },
    { name: 'Meat', description: 'Naturally raised Goat Meat!', price: 1200.00 },
    { name: 'Honey', description: 'Raw Natural forest Honey', price: 350.00 },
    { name: 'Ghee', description: 'A2 Desi Cow Cultured Ghee!', price: 3500.00 },
    { name: 'Turmeric', description: 'Unprocessed Natural Turmeric!', price: 250.00 },
    {name:'Red Chilli Powder',description:'Natural Guntur Special Mirchi Powder',price:300.00},
    {name:'cashews',description:'Premium, Hand Grounded Cashwes',price:450.00},
    {name:'Chia Seeds',description:'Premium Quality Chia Seeds!',price:150.00},
    {name:'Brown Sugar',description:'Better to switch to Brown, Not White always healthy',price:120.00},
    {name:'Cardamum',description:'Kerala Imported Quality',price:1570.00},
    {name:'Meat',description:'Premium cuts, naturally raised',price:1200.00},
    {name:'Saffron',description:'Authentic Kashmiri Saffron',price:576.00},
    {name:'Almonds',description:'Premium Quality Almonds',price:1570.00},
    {name:'Groundnut Oil',description:'Bull driven Groundnut oil',price:750.00},
    {name:'Organic Eggs',description:'Fresh eggs, from happy hens!',price:120.00}

  ];

  searchProduct(productName: string): Observable<Product | null> {
    const product = this.products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    return of(product || null);
  }

  constructor() { }
}
