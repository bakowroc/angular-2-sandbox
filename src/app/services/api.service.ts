import {Injectable} from '@angular/core';
import {Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export default class ApiService{
  apiServer:string = 'http://api.github.com';

  constructor(private http:Http){}

  fetchData(){
    this.http.get(this.apiServer+'/users/TomaszBorczyk').map(
      res=>res.json()
    ).subscribe(
      data => console.log(data)
    );
  }
}
