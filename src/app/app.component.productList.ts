import { Component } from "@angular/core";

@Component({
    selector:'products',
    templateUrl:'./templates/products.html'
})

export class ProductList{
    productsTitle:string='Products';
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
             "imageUrl" : "https://openclipart.org/detail/296014/penrose-pentagon"
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
             "imageUrl" : "https://openclipart.org/detail/296030/eye-5"
        }
    ];
}