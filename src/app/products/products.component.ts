import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="outer">
      <h2>Products</h2>
      <table class="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td>{{ product.Name }}</td>
            <td>{{ product.Price }}</td>
            <td>{{ product.Brand }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: `
  .outer {
    margin: 50px auto;
    max-width: 1000px;
    text-align: center;
  }
  .product-table {
    width: 100%;
    border-collapse: collapse;
  }

  .product-table th {
    background-color: #f0f0f0;
    padding: 10px;
    text-align: left;
  }

  .product-table td {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }`
})
export class ProductsComponent implements OnInit {

  products: any[] = []

  ngOnInit(): void {
    this.fetchAndDisplayProducts();
  }

  fetchAndDisplayProducts(): void {
    fetch('http://127.0.0.1:8000/api/products')
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: any) => {
        this.products = JSON.parse(data);
        console.log('products: ', this.products)
      })
      .catch((error: Error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
}
