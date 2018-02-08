import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './app.component.interfaces.Iproduct';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService{
    httpClient: HttpClient;
    constructor(_httpClient:HttpClient){
        this.httpClient = _httpClient;
    }

    getProducts():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>("http://localhost:8090/products")
                            .do(data=>console.log('All:'+JSON.stringify(data)));
    }

    handleError(error:HttpErrorResponse){
        console.log(error.message);
    }

}