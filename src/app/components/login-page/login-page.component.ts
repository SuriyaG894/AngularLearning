import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LogapiService } from 'src/app/services/logapi.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  myimage="assets/img/naturebg.jpg";
  loginform=new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  glogdata:any;
  mail="suriya@gmail.com";
  pwd="1234";
  bool=true;
  constructor(private logcall:LogapiService) { }
  Onsubmit(datas:any)
  {
    console.log(datas.value);
    this.logcall.postlogdata(datas.value).subscribe();
    if(datas.email==this.mail && datas.password==this.pwd)
    {
      this.bool=true;
    }
    else
    {
      this.bool=false;
    }
  }
  ngOnInit(): void {
    this.logcall.getlogdata().subscribe((data)=>{
      console.log(data);
      this.glogdata=data;
    })
    
  }

}
