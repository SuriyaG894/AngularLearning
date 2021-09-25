import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { SignapiService } from 'src/app/services/signapi.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  signdata:any;
  registerform = new FormGroup({
    fname :new FormControl(),
    lname : new FormControl(),
    emailadd:new FormControl(),
    pass : new FormControl(),
    cpass : new FormControl()
    });
  constructor(private signcall:SignapiService) { }
    Onsubmit(mydatas:any)
    {
      console.log(mydatas.value);
      this.signcall.postsignindata(mydatas.value).subscribe();
    }
  ngOnInit(): void {
    this.signcall.getsigndata().subscribe((data)=>{
      this.signdata=data;
    });
  }

}
