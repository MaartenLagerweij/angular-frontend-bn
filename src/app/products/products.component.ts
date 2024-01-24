import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

      <h2>Add product:</h2>
      <form (submit)="addProduct()">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" [(ngModel)]="newProduct.Name" name="name" required>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" [(ngModel)]="newProduct.Price" name="price" required>
        </div>
        <div class="form-group">
          <label for="brand">Brand:</label>
          <input type="text" id="brand" [(ngModel)]="newProduct.Brand" name="brand" required>
        </div>
        <button type="submit">Add</button>
      </form>
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
  }
  .form-group {
    margin-bottom: 10px;
    display: inline-block;
    margin-right: 10px;
  }
  
  label {
    display: block;
  }

  .form-group input {
    margin: 5px 25px;
    max-width: 180px;
  }
  
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 5px;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  `
})
export class ProductsComponent implements OnInit {

  products: any[] = []

  newProduct: any = {};

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

  addProduct(): void {
    // Add login to send product to DB and add to list
    console.log(this.newProduct);
  }
}
