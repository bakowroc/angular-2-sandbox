import { 
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss']
})
 
 export default class RepoListComponent{
     
    @Input() Projects: Array<Object>;
     
     
 }