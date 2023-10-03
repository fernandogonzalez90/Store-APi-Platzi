import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
productos: any[] = [];
buscarIs: boolean = false;
  constructor(
    private apiService: ApiService
  ){}

  ngOnInit() {
    this.apiService.getProductos().then((data) => {
      this.productos = data;
      console.log(data)
    });
    this.probando();
  }

  probando(){
    for(let producto of this.productos){
      console.log(producto)
    }
  }

}