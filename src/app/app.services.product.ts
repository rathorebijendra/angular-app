import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './app.component.interfaces.Iproduct';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService{
    
    constructor(private httpClient:HttpClient){
    }

    getProducts():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>("./app/api/products.json");
    }

    handleError(error:HttpErrorResponse){
        console.log(error.message);
    }

}