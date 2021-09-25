import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }
  gettodolist()
  {
    return this.http.get("https://614ec6e3b4f6d30017b48380.mockapi.io/todolist");
  }
  posttodolist(val:any)
  {
    return this.http.post("https://614ec6e3b4f6d30017b48380.mockapi.io/todolist",{List:val.list});
  }
}
