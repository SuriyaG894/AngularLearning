import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents=[
  MatButtonModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatTabsModule,MatFormFieldModule,MatSnackBarModule,MatCardModule 
]

@NgModule({
 
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
