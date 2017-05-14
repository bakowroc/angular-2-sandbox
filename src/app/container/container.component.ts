import {
    Component,
    OnInit
} from '@angular/core';
import ApiService from '../services/api.service';

@Component({
    selector: 'container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    providers: [ApiService]
})

 export default class ContainerComponent implements OnInit {

    Projects: Array<Object>;
    selected: Object;
    constructor(private api:ApiService){}

    ngOnInit(){
        this.Projects = [
            {name: 'Angular 2 sandbox', author: 'bakowroc',desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat.', link: 'https://github.com/bakowroc/angular-2-sandbox', date: '14.05.2017'},
            {name: 'Angular Scrollshow', author: 'bakowroc',desc: 'Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra.', link: 'https://github.com/bakowroc/angular-scrollshow', date: '12.03.2016'},
            {name: 'Cross App Links', author: 'bakowroc',desc: ' Donec id pretium leo. Pellentesque luctus massa non elit viverra pellentesque. Cras vitae neque.', link: 'https://github.com/nokia-wroclaw/innovativeproject-cross-app-links', date: '12.05.2017'},
            {name: 'SelectBox', author: 'Tomasz' ,desc: 'Fusce in urna sem. Vivamus vehicula dignissim augue et scelerisque. Etiam quam nisi, molestie ac dolor in.', link: 'https://github.com/TomaszBorczyk/selectbox', date: '12.05.2017'},
        ];

        this.api.fetchData();
    }
 }
