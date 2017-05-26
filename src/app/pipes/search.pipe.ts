import {Pipe, PipeTransform} from '@angular/core';

import RepoDataModel from '../repoData/repoData.model'

@Pipe({
    name: 'search'
})
export default class SearchPipe implements PipeTransform {
    transform(input: Array<RepoDataModel>, filter: string): Array<RepoDataModel> {
        if(input){ 
            return input.filter((value: RepoDataModel)=>{
                return value.name
                            .toLowerCase()
                            .match(filter) ? value : false;
            });
        }
    }
}