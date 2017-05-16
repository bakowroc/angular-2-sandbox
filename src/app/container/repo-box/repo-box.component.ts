import {
    Component,
    Input
} from '@angular/core';
import RepoDataModel from '../../repoData/repoData.model';

@Component({
    selector: 'repo-box',
    templateUrl: './repo-box.component.html',
    styleUrls: ['./repo-box.component.scss']
})

 export default class RepoBoxComponent{

    @Input() 
        project: RepoDataModel;


 }
