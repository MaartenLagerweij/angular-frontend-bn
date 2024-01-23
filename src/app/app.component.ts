import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  template: `
  <div class="h1-title">
    <h1>Product Frontend App</h1>
  </div>  
    <router-outlet />
  `,
  styles: [`
    div.h1-title {
      margin: auto;
    }
    h1 {
      text-align: center;
    }
  `],
})
export class AppComponent {
  title = 'products-frontend-app2';
}
