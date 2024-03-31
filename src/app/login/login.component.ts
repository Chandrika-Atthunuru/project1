import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _loginService:LoginService ,private _router:Router){}
 public userform:FormGroup=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
 })
 login(){
  this._loginService.postloginform(this.userform.value).subscribe(
      (data:any)=>{
       localStorage.setItem("project1-token",data.token);
       this._router.navigateByUrl("/dashboard");
       alert('login successfully');
      },
      (err:any)=>{
        alert("internal server error")
      } 
  )
  console.log(this.userform.value)
 }
}
