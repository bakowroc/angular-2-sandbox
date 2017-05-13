import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './components/app.component'
import HeaderComponent from './components/header.component'


@NgModule({
    
    imports: [BrowserModule],
    declarations: [AppComponent, HeaderComponent],
    bootstrap: [AppComponent]
    
})

export default class AppModule{}