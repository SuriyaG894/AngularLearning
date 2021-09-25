import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LogapiService {

  constructor(private http:HttpClient) { }
  getlogdata()
  {
    return this.http.get("https://614eb95fb4f6d30017b4835e.mockapi.io/logdata");
  }
  postlogdata(val:any)
  {
    return this.http.post("https://614eb95fb4f6d30017b4835e.mockapi.io/logdata",val);
  }
}
