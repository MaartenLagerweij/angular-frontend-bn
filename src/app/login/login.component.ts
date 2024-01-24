import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  template: `
    <div class="login-form">
      <form (submit)="onLogin()">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="error-message" [class.hidden]="!loginError">
        {{ loginError }}
      </div>
    </div>
  `,
  styles: [`
  .login-form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: #f9f9f9;
  }
  .login-form label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  .login-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .login-form button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  .login-form button:hover {
    background-color: #0056b3;
  }
  .error-message {
    color: #dc3545;
    margin-top: 10px;
    text-align: center;
    border: 1px solid #dc3545;
    padding: 5px;
    border-radius: 5px;
  }
  .hidden {
    display: none;
  }
  `]
})
export class LoginComponent {
  loginError: string | null = null;

  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  onLogin() {
    console.log('Login credentials:', this.username, this.password);

    const loginData = {
      username: this.username,
      password: this.password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    this.http.post('http://127.0.0.1:8000/api/login', JSON.stringify(loginData), { headers }).subscribe(
      (response) => {
        console.log('Login success:', response);
        this.router.navigate(['/products']);
      },
      (error) => {
        if (error.status === 401) {
          console.error('Wrong login credentials.');
          this.loginError = 'Wrong login credentials.';
        }
        console.error('Error with logging in:', error);
        // Voeg hier logica toe om foutmeldingen aan de gebruiker te tonen.
      }
    );

  }
}
