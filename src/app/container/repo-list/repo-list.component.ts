import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges
} from '@angular/core';
import RepoDataModel from '../../repoData/repoData.model';


@Component({
    selector: 'repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss']
})

 export default class RepoListComponent implements OnInit, OnChanges{

    @Input()
        Projects: Array<RepoDataModel> =[];
    @Output()
        selectedProjectBox = new EventEmitter<RepoDataModel>();

    selectedProjectIndex: number = 0;

    constructor(){}

    ngOnInit(){
       
    }
     
     ngOnChanges(){
        if(this.Projects)
            this.selectedProjectBox
                .emit(this.Projects[0]);
     }

    selectProject(index: number){
        this.selectedProjectIndex = index;
        this.selectedProjectBox
            .emit(this.Projects[this.selectedProjectIndex]);
    }


 }
