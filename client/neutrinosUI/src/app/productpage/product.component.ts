import { Router } from '@angular/router';
import { AccessToken } from './../services/loginservices';
import { ProductService, Product, ItemCart } from './../services/productservice';
import { LoginService, UserInfo, LoginDetails } from '../services/loginservices';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:Product[];
  upload:boolean = false;
  newProduct:Product = {};

  ngOnInit(){
    this.getProducts();
  }
  constructor(private productService:ProductService, private cookies:CookieService,private router:Router){
  
   if(cookies.get("userInfo") === undefined || cookies.get("userInfo") === ""){
    this.router.navigate(['']);
   }
  }

  getProducts(){
    this.productService.getProduct().then(res=>{
      this.products = res;
      console.log(this.products[0])
    }).catch(err=>{
      alert("something went wrong");
    })
  }
  addToCart(product:Product){
    let itemCart:ItemCart = {}
    itemCart.product = product;
    let access:AccessToken = <AccessToken>JSON.parse( this.cookies.get("userInfo"))
    itemCart.userId = access.userId;
    console.log(itemCart)
    this.productService.addToCart(itemCart).then(
      res=>{
        console.log("successfully saved")
      }
    ).catch(err=>{
      alert("something went wrong"+err)
    })
  }
  openNewUplad(){
    this.upload = !this.upload;
    this.newProduct = {};
  }

  uploadData(){
    console.log(this.newProduct)
    this.productService.addProduct(this.newProduct).then(
      res=>{
        this.getProducts();
        console.log("successfully upload")
        this.upload = !this.upload;
    })
    .catch(err=>{
      alert("Somthing went wrong")
    })
   
  }
}

