import { 
    Component,
    OnInit,
    Output,
    EventEmitter

} from '@angular/core';

@Component({
    selector: 'repo-user',
    templateUrl: './repo-user.component.html',
    styleUrls: ['./repo-user.component.scss']
})
 
 export default class RepoUserComponent implements OnInit{
     
    user: string;
    @Output()
        subscribedUser = new EventEmitter<string>();
     
    constructor(){}
     
    ngOnInit(){
       this.user = localStorage.getItem('user') || null;
    }
     
    unwatch(){
        localStorage.removeItem('user');
        this.user = null;
    } 
    
 }