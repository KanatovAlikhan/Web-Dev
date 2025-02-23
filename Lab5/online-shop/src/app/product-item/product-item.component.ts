import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../types/types';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <button class="delete-btn" (click)="onRemove()">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="image-gallery">
        <img [src]="currentImage" alt="{{ product.name }}">
        <button class="gallery-nav prev" (click)="prevImage()" *ngIf="product.images.length > 1">←</button>
        <button class="gallery-nav next" (click)="nextImage()" *ngIf="product.images.length > 1">→</button>
      </div>
      
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        
        <div class="rating">
          <span class="stars">{{ '★'.repeat(product.rating) }}</span>
          <span>{{ product.rating }}/5</span>
        </div>
        
        <div class="price">{{ product.price | currency:'KZT':'symbol-narrow':'1.0-0' }}</div>
        
        <div class="actions">
          <button class="like-btn" (click)="onLike()" [class.liked]="product.likes > 0">
            <i class="fas fa-heart"></i>
            <span class="like-count">{{ product.likes }}</span>
          </button>
        </div>
        
        <div class="share-buttons">
          <a [href]="getWhatsappShareLink()" target="_blank" class="share-btn whatsapp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a [href]="getTelegramShareLink()" target="_blank" class="share-btn telegram">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a [href]="product.kaspiLink" target="_blank" class="share-btn kaspi">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() liked = new EventEmitter<number>();
  
  currentImageIndex = 0;
  
  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }
  
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }
  
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }
  
  onLike() {
    this.liked.emit(this.product.id);
  }
  
  onRemove() {
    this.remove.emit(this.product.id);
  }
  
  getWhatsappShareLink(): string {
    const text = `Посмотри этот товар: ${this.product.name} - ${this.product.kaspiLink}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }
  
  getTelegramShareLink(): string {
    const text = `Посмотри этот товар: ${this.product.name} - ${this.product.kaspiLink}`;
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiLink)}&text=${encodeURIComponent(text)}`;
  }
}
