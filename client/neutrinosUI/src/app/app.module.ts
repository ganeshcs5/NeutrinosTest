import { CartService } from './services/cartservices';
import { CartComponent } from './cartpage/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './services/productservice';
import { LoginComponent } from './loginpage/login.component';
import { LoginService } from './services/loginservices';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { ProductComponent } from './productpage/product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'product', component: ProductComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [LoginService, CookieService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
