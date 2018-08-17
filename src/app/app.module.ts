import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';

import { SmsMaterailModule } from './sms-materail/sms-materail.module';
import {RoutingModule} from './routing/routing.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/items/products/products.component';
import { ProductComponent } from './components/items/product/product.component';
import { ProductEditComponent } from './components/items/product-edit/product-edit.component';
import { ProductAddComponent } from './components/items/product-add/product-add.component';
import { TopHeaderComponent } from './components/core/top-header/top-header.component';
import { LeftSidebarComponent } from './components/core/left-sidebar/left-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProductEditComponent,
    ProductAddComponent,
    TopHeaderComponent,
    LeftSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SmsMaterailModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
