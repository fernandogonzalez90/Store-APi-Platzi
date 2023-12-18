import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private apiService: ApiService,
    private router: Router,
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

  navegar(id: number){
    this.router.navigate(['/producto',id]);
  }

}