import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  {path:'',component: LoginPageComponent},
  { path: 'login', component: LoginPageComponent },
  {path:'register',component:RegisterPageComponent},
  {path:'todolist',component:TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

