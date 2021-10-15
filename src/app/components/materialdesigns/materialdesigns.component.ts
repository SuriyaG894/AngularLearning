import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialdesigns',
  templateUrl: './materialdesigns.component.html',
  styleUrls: ['./materialdesigns.component.css']
})
export class MaterialdesignsComponent implements OnInit {

  notifications=2;
  
  constructor() { }

  ngOnInit(): void
  {
    // if(this.notifications==0)
    // {
    //   this.hidden=0;
    // }
  }
  
}
