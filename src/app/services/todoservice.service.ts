import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }
  link="https://614ec6e3b4f6d30017b48380.mockapi.io/todolist";
  gettodolist()
  {
    return this.http.get(this.link);
  }
  posttodolist(val:any)
  {
    return this.http.post(this.link,val.value);
  }
  deletelist(id:any)
  {
    return this.http.delete(`${this.link}/${id}`);
  }
}
