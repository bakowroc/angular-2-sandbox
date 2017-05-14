import { 
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';

@Component({
    selector: 'repo-list',
    templateUrl: './repo-list.component.html',
    styleUrls: ['./repo-list.component.scss']
})
 
 export default class RepoListComponent implements OnInit{
     
    @Input() 
        Projects: Array<Object>;
    @Output() 
        selectedProjectBox = new EventEmitter<Object>();
    
    selectedProject: string;
     
    constructor(){}
     
    ngOnInit(){
        const project: any = this.Projects[0]
        this.selectedProjectBox.emit(project);
        this.selectedProject = project.name;
    }
    selectProject(project: any){
        this.selectedProject = project.name;
        this.selectedProjectBox.emit(project);
    }
     
     
 }