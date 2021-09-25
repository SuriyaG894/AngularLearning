import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { LogapiService } from 'src/app/services/logapi.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginform=new FormGroup({
    emailadd: new FormControl(),
    passwd: new FormControl()
  });
  glogdata:any;
  name="suriya@gmail.com";
  password="1234";
  constructor(private logcall:LogapiService) { }
  Onsubmit(datas:any)
  {
    console.log(datas.value);
    this.logcall.postlogdata(datas).subscribe();
  }
  ngOnInit(): void {
    this.logcall.getlogdata().subscribe((data)=>{
      console.log(data);
      this.glogdata=data;
    })
    
  }

}
