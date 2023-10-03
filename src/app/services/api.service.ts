import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getProductos() {
    return fetch('https://api.escuelajs.co/api/v1/products').then(
      (response) => response.json()
    );
  }

}
