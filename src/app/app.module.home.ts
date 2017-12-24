import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HomeComponent} from './app.components.component.home'

@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap : [HomeComponent]
})

export class AppModule{}