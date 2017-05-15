import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
import RepoDataModel from '../../repoData/repoData.model';


@Component({
    selector: 'repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss']
})

 export default class RepoListComponent implements OnInit{

    @Input()
        Projects: Array<RepoDataModel> =[];
    @Output()
        selectedProjectBox = new EventEmitter<RepoDataModel>();

    selectedProjectIndex: number;

    constructor(){}

    ngOnInit(){
        // const project: any = this.Projects[0]
        // this.selectedProjectBox.emit(project);
        // this.selectedProject = project.name;
    }

    selectProject(index: number){
        this.selectedProjectIndex = index;
        this.selectedProjectBox.emit(this.Projects[this.selectedProjectIndex]);
    }


 }
