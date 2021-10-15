import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  Time_s=new Date();
  lists:any;

  constructor(private todocall:TodoserviceService,private snackbar:MatSnackBar) { }
  // getlistdata:any;
  count=0;
  ngOnInit(): void {
    // this.todocall.gettodolist().subscribe((data)=>{
    // this.getlistdata=data;
    // });
    this.todocall.gettodolist().subscribe((val)=>
    {
      console.log(val);
      this.lists=val;
      this.count=this.lists.length;
    })
  }
  
  todoform=new FormGroup({
    listinput: new FormControl(),
   });
  Onsubmit(tododata:any)
  {
    
    // console.log(tododata.value);
    this.todocall.posttodolist(tododata).subscribe();
    this.todocall.gettodolist().subscribe((val)=>
    {
      console.log(val);
      this.lists=val;
      this.ngOnInit();
      this.snackbar.open("Item Added");  
    })
    //this.todocall.posttodolist(tododata.value).subscribe();
  }
  deletelist(val:any)
  {
    this.todocall.deletelist(val.id).subscribe();
    console.log(val.id);
    this.ngOnInit();
    this.snackbar.open("Item Deleted");
  }
  
}
