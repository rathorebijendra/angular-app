import { Component,OnInit } from "@angular/core";
import {IProduct} from './app.component.interfaces.Iproduct';
import { ProductService } from "./app.services.product";

@Component({
    selector:'products',
    templateUrl:'./templates/products.html',
    styleUrls:['./app.component.styles.products.css'],
    providers:[ProductService],
})

export class ProductList implements OnInit{
    productsTitle:string='Products';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage : boolean = false;
    listFilter:string = 'Cart';
    errorMessage:string;

    products:IProduct[] = [];

    constructor(private _productService:ProductService){}
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts().subscribe(products=>this.products=products
            ,error=>this.errorMessage=<any>error);
       console.log('Product List is created'); 
    }
}