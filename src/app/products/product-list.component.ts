import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
/**
 * Created by alexandru.ciocan on 04/04/17.
 */

@Component({
  selector: 'pm-products',
  moduleId: module.id,  // For relative paths
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product list';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';

  products: IProduct[];

  constructor(private _productService: ProductService) {}

  onNotify(message: string) : void {
    console.log(message)
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

}
