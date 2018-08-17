import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/items/products/products.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductComponent } from '../components/items/product/product.component';
import { ProductEditComponent } from '../components/items/product-edit/product-edit.component';
import { ProductAddComponent } from '../components/items/product-add/product-add.component';

const routes : Routes  = [
  { path : 'products', component : ProductsComponent },
  { path : 'product', component : ProductComponent },
  { path : 'product/add', component : ProductAddComponent  },
  { path : 'product/:id/edit' , component : ProductEditComponent },
  { path : 'home', component : HomeComponent  },
  {path : '/', redirectTo : '/home',pathMatch : 'full'},
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
