import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store-APi-Platzi';
  buscarIs: boolean = false;

  buscar(){
    this.buscarIs = !this.buscarIs;
  }
}
