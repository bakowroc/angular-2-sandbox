import {
    Component,
    Input
} from '@angular/core';

@Component ({
    selector: 'search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})

export default class SearchResultsComponent {
    @Input() 
        filterBy: string;

    constructor(){}
     
    watchUser(user: string){
        localStorage.setItem('user', user);
        location.reload();
    }
} 