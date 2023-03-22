import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../shared/models/response.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.api;
  constructor(private http:HttpClient,private router:Router) { }
  get(url:string):Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseUrl+url).pipe(map((x:any)=>{
      if(x.status == 401){
        return this.router.navigate(['/account']);
      }
      return x;
    }),(e:any)=>{
      
      return e;
    });
  }
  post(url:string,data:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+url,data);
  }
  multiForm(url:string,data:any):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl+url,data);
  }
}
