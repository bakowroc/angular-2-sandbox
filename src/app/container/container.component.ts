import {
    Component,
    OnInit
} from '@angular/core';
import ApiService from '../services/api.service';
import RepoDataModel from '../repoData/repoData.model';


@Component({
    selector: 'container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    providers: [ApiService]
})

 export default class ContainerComponent implements OnInit {
    Projects: Array<RepoDataModel>;
    selected: Object;
    constructor(private api:ApiService){}

    ngOnInit(){
        this.api
          .fetchUserRepos(localStorage.getItem('user'))
          .then(o=> this.Projects=o);
    }
 }
