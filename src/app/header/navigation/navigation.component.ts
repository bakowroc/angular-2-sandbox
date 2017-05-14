import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
}) 

export default class NavigationComponent implements OnInit{
    
    Elements: Array<Object>;
    constructor(){}
    
    ngOnInit(){
        this.Elements = [
            {name: 'Home', link: '/home'},
            {name: 'Github', link: '/github'},
            {name: 'About', link: '/about'}
        ];
    }
    
}