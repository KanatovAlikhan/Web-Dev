import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product, Category } from '../types/types';
import { PRODUCTS, CATEGORIES } from '../data/mock-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="categories">
      <button
        (click)="selectCategory(null)"
        [class.active]="!selectedCategory"
      >
        Все категории
      </button>
      <button
        *ngFor="let category of categories"
        (click)="selectCategory(category)"
        [class.active]="selectedCategory?.id === category.id"
      >
        {{ category.name }}
      </button>
    </div>
    
    <app-product-list
      [products]="filteredProducts"
    ></app-product-list>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = CATEGORIES;
  products = PRODUCTS;
  selectedCategory: Category | null = null;
  
  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.categoryId === this.selectedCategory!.id);
  }
  
  selectCategory(category: Category | null) {
    this.selectedCategory = category;
  }
}