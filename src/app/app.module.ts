import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {AlertModule} from 'ng2-bootstrap';
import {ProductListComponent} from "./products/product-list.component";

@NgModule({
  imports:      [ BrowserModule, AlertModule.forRoot()],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
