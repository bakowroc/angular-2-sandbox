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
        this.user = localStorage.getItem('user');
        this.subscribedUser.emit(this.user);
    }
     
    unwatchUser(){
        localStorage.removeItem('user');
        location.reload();
    } 
    
 }