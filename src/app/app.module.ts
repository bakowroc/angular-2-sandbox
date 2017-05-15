import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component'

import ApiService from './services/api.service';

import HeaderComponent from './header/header.component'
import NavigationComponent from './header/navigation/navigation.component'
import SearchBoxComponent from './header/search-box/search-box.component'
import SearchResultsComponent from './header/search-results/search-results.component'

import ContainerComponent from './container/container.component';
import RepoBoxComponent from './container/repo-box/repo-box.component';
import RepoListComponent from './container/repo-list/repo-list.component';
import RepoUserComponent from './container/repo-user/repo-user.component';

@NgModule({

    imports: [BrowserModule,
             FormsModule,
             HttpModule
           ],
    declarations: [AppComponent,
                   HeaderComponent,
                   NavigationComponent,
                   SearchBoxComponent,
                   SearchResultsComponent,
                   ContainerComponent,

                   RepoBoxComponent,
                   RepoListComponent,
                   RepoUserComponent
                  ],
    providers: [ApiService
                ],
    bootstrap: [AppComponent]

})

export default class AppModule{}
