import {Injectable} from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import RepoDataModel from '../repoData/repoData.model';
import 'rxjs/Rx';

@Injectable()
export default class ApiService{
  apiServer:string = 'http://api.github.com';

  constructor(private http:Http){}

  fetchUserRepos(username:string):Promise<Array<RepoDataModel>>{
    return this.http
                .get(this.getUserReposUrl(username))
                .toPromise()
                .then((res:Response) => res.json()
                      .map(o => new RepoDataModel(o.name, o.owner.login, o.description, o.html_url, o.created_at))
                    );
  }

  getUserReposUrl(username:string):string{
    return this.apiServer+'/users/'+username+'/repos';
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
