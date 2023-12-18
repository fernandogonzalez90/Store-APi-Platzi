import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent {
  id!: string;

 constructor(private route: ActivatedRoute) { }

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id') ?? '';
 }
}
