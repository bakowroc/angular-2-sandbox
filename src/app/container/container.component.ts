import {
    Component,
    OnInit,
    OnChanges,
    Input
} from '@angular/core';
import ApiService from '../services/api.service';
import RepoDataModel from '../repoData/repoData.model';


@Component({
    selector: 'container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    providers: [ApiService]
})

 export default class ContainerComponent implements OnChanges, OnInit {
    Projects: Array<RepoDataModel>;
    selected: Object;
    subscribedUser: string;
     
    constructor(private api:ApiService){}

    ngOnInit(){}
    ngOnChanges(){}
     
    handleSubscribedUser(user: string): Promise<Array<RepoDataModel>>{
        if(user){
            this.subscribedUser = user;
            return this.api
                        .fetchUserRepos(this.subscribedUser)
                        .then(o=> this.Projects=o);
        }
    }
 }