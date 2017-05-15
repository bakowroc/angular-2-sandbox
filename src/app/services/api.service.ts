import {Injectable} from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export default class ApiService{
  apiServer:string = 'http://api.github.com';

  constructor(private http:Http){}

  fetchUserRepos(username:string){
    return this.http
      .get(this.getUserRepos(username))
      .map(res => res.json()
              .map(o => <Object>({name: o.name, url: o.url}))
            );
  }

  getUserRepos(username:string):string{
    return this.apiServer+'/users/'+username+'/repos';
  }
}
