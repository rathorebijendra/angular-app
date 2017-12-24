import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {CustomComponent} from './app.components.component.home'

@NgModule({
    imports: [BrowserModule],
    declarations: [CustomComponent],
    bootstrap : [CustomComponent]
})

export class AppModule{}