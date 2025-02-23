import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../types/types';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="products-container">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (remove)="onRemoveProduct($event)"
        (liked)="onLikeProduct($event)"
      ></app-product-item>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  
  onRemoveProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
  
  onLikeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}
