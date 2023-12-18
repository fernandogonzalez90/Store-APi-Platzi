import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { ViewProductoComponent } from './components/view-producto/view-producto.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent
  },
  {
    path: 'producto/:id', component: ViewProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
