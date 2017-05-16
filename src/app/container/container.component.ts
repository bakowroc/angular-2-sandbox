import {
    Component,
    OnInit,
    OnChanges
} from '@angular/core';
import ApiService from '../services/api.service';
import RepoDataModel from '../repoData/repoData.model';


@Component({
    selector: 'container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    providers: [ApiService]
})

 export default class ContainerComponent implements OnInit, OnChanges {
    Projects: Array<RepoDataModel>;
    selected: Object;
    subscribedUser: string = 'bakowroc';
    constructor(private api:ApiService){}

    ngOnInit(){
        this.subscribedUser = localStorage.getItem('user'); //To solve
        this.api
            .fetchUserRepos(this.subscribedUser)
            .then(o=> this.Projects=o);
    }
    ngOnChanges(){}
    handleSubscribedUser(event){
        this.subscribedUser = event;
    }
 }