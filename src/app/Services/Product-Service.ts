import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductComponent} from '../product/product.component';

@Injectable()
export class ProductService {
    // decalring the productlist array
  ProductList: Product[]= [];

  constructor() {}
// getProducts method to return the product list
  getProducts(): Product[] {
      return this.ProductList;
  }
// createProduct menthod to store the product details
  createProduct(newProduct: Product) {
      console.log(newProduct);
    this.ProductList.unshift(newProduct);
    // console.log(this.productList);
    }
}
