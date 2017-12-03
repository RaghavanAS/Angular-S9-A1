import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { QuantityService } from './Services/Quantity-Service';
import { ProductService } from './Services/Product-Service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [QuantityService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
