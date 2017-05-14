import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component'

import HeaderComponent from './header/header.component'
import NavigationComponent from './header/navigation/navigation.component'
import SearchBoxComponent from './header/search-box/search-box.component'
import SearchResultsComponent from './header/search-results/search-results.component'

import ContainerComponent from './container/container.component';
import BoxComponent from './container/box/box.component';


@NgModule({
    
    imports: [BrowserModule,
             FormsModule],
    declarations: [AppComponent, 
                   HeaderComponent, 
                   NavigationComponent,
                   SearchBoxComponent,
                   SearchResultsComponent,
                   ContainerComponent,
                   BoxComponent
                  ],
    bootstrap: [AppComponent]
    
})

export default class AppModule{}