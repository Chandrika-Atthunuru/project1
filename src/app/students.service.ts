import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  getstudents():Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students");
  }
  deletestudents(id:string):Observable<any>{
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+id)
  }

  loaddata(queries:any){
    let str="";
    if(queries.filter){
      str +="filter="+queries.filter+"&";
    }
    if(queries.pageno){
      str +="page="+queries.pageno+"&";
      str +="limit="+queries.limit+"&"
    }
    if(queries.sortby){
      str +="sortBy="+queries.sortby+"&";
    }
    if(queries.order){
      str +="order="+queries.order
    }
    console.log(queries,str);
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?"+str)
  }
}
