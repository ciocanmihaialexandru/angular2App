import {Component} from "@angular/core";
import {IProduct} from "./product";
/**
 * Created by alexandru.ciocan on 18/05/2017.
 */

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
  pageTitle: string = "Product Detail";
  product: IProduct;
}
