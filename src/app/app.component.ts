import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
  selector: 'my-app',
  template: `<pm-products></pm-products>`,
  providers: [ProductService]
})
export class AppComponent  { name = 'Angular'; }
