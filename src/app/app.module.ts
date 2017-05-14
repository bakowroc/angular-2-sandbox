import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component'
import HeaderComponent from './header/header.component'
import NavigationComponent from './navigation/navigation.component'


@NgModule({
    
    imports: [BrowserModule],
    declarations: [AppComponent, HeaderComponent, NavigationComponent],
    bootstrap: [AppComponent]
    
})

export default class AppModule{}