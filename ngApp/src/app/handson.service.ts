import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandsonService {

  private dbmineurl = "http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.dbmineurl);
  }
}
