import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-materialsio',
  templateUrl: './materialsio.component.html',
  styleUrls: ['./materialsio.component.css']
})
export class MaterialsioComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  opensnackbar(message:any,action:any,)
  {
     let Snackbarref =this.snackbar.open(message,action,{duration:2000});
     Snackbarref.afterDismissed().subscribe((val)=>{
       console.log("Dismissed");
     });
     Snackbarref.onAction().subscribe((data)=>{
       console.log("Action is trigged");
     });
  }
  opencustomsnackbar()
  {
    this.snackbar.openFromComponent(CustomSnackBarComponent,{duration:2000});
  }
}
@Component({
  selector:'custom-snackbar',
  template:`<span style='color:red'>Welcome to custom snackbar</span>`
})
export class CustomSnackBarComponent {}