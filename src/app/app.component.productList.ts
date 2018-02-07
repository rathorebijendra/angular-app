import { Component } from "@angular/core";

@Component({
    selector:'products',
    templateUrl:'./templates/products.html'
})

export class ProductList{
    productsTitle:string='Products';
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage : boolean = false;
    listFilter:string = 'Cart';
    products:any[] = [
        {
            "productId" : 2,
             "productName": "Garden Cart",
             "productCode" : "GDN-0023",
             "releaseDate" : "March 18, 2016",
             "available" : "true",
             "description" : "15 Galon Capacity of data",
             "price" : 32.99,
             "rating" : 4.2,
             "imageUrl" : "http://www.gstatic.com/webp/gallery/1.jpg"
        },
        {
            "productId" : 3,
             "productName": "Natural show",
             "productCode" : "GDN-0024",
             "releaseDate" : "March 19, 2017",
             "available" : "true",
             "description" : "18 Galon Capacity of data",
             "price" : 42.99,
             "rating" : 4.7,
             "imageUrl" : "http://www.gstatic.com/webp/gallery/2.jpg"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}