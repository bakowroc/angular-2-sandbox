import { 
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
 
 export default class BoxComponent{
     
    @Input() project: Object;
     
     
 }