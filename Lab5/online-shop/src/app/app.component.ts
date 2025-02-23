import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <div class="app-container">
      <header>
        <h1>WebStore</h1>
      </header>
      
      <main>
        <app-products></app-products>
      </main>

      <footer>
        <p>&copy; 2024 WebStore. Все права защищены</p>
        <div class="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kaspi Shop';
}