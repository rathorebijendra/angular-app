import {Component} from '@angular/core';
@Component({
    selector:'home',
    template : '<div><h2 *ngIf = "appStatus">{{name}}</h2></div>',
})
export class HomeComponent{
    name:string='Home screen';
    appStatus:boolean = false;
}