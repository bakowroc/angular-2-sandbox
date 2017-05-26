import {Component, 
        OnInit, 
        Input,
        Output,
        EventEmitter} 
from '@angular/core'

@Component({
    selector: 'search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})

export default class SearchBoxComponent implements OnInit{
    
    searchInput: string;
    
    @Output()
        searchValue = new EventEmitter<string>();
    
    constructor(){}
    
    ngOnInit(){
        this.searchValue.emit(this.searchInput);
    }
    
}