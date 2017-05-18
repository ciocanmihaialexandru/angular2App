import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import {AlertModule} from 'ng2-bootstrap';
import {ProductListComponent} from "./products/product-list.component";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";

@NgModule({
  imports:      [ BrowserModule, AlertModule.forRoot(), FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
