import { Component,OnInit } from "@angular/core";
import {IProduct} from './app.component.interfaces.Iproduct';
import { ProductService } from "./app.services.product";

@Component({
    selector:'products',
    templateUrl:'./templates/products.html',
    styleUrls:['./app.component.styles.products.css'],
})

export class ProductList implements OnInit{
    productsTitle:string='Products';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage : boolean = false;
    listFilter:string = 'Cart';
    _productService:ProductService;
    errorMessage:string;

    products:IProduct[] = [];

    constructor(_productService:ProductService){
        this._productService = _productService;
    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts().subscribe(products=>this.products=products
            ,error=>this.errorMessage=<any>error);
       console.log('Product List is created'); 
    }
}