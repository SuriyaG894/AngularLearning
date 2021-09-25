import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todocall:TodoserviceService) { }
  getlistdata:any;
  ngOnInit(): void {
    this.todocall.gettodolist().subscribe((data)=>{
    this.getlistdata=data;
    });
  }
  Onsubmit(tododata:any)
  {
    this.todocall.posttodolist(tododata.value).subscribe();
  }

}
