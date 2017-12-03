import { Component, OnInit, ViewChild, NgModule, Input } from '@angular/core';
import { Product} from '../models/product';
import { QuantityService } from '../Services/Quantity-Service';
import { NgForm, FormsModule } from '@angular/forms';
import { ProductService } from '../Services/Product-Service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
// declring the Quantity list array
  QuantityList: number[]= [];
  // creating an insatnce for product
  product: Product = new Product();
  // getting the form from HTML
  @ViewChild('form1') form: NgForm;
  // Input directive to make use of productlist and display detail
  @Input() ProductList: Product[] = [];
  @Input() displayDetail: boolean = false;

  // using the Quantity service and product service by constructor dependency injection
  constructor(private quantityService: QuantityService, private productService: ProductService) {
   }
// initializing the product onInit
  ngOnInit() {
  this.product.productName = '';
  this.product.productCode = 0;
  this.product.isAvailable = false;
  this.product.quantity = 0;
  this.QuantityList = this.quantityService.getQuantity();
  this.ProductList = this.productService.getProducts();
  }
  // on button click getting the product data from form and calling the product service to store the product details
saveDetails() {
  this.product = {
    productName: this.form.value.productData.productName,
    productCode: this.form.value.productData.productCode,
    isAvailable: this.form.value.productData.isAvailable,
    quantity: this.form.value.productData.quantity
  };
  // console.log(this.form.value.productData.productCode);
  this.productService.createProduct(this.product);
    this.displayDetail = true;
  this.product = new Product();
}
}
