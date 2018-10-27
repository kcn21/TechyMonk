import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { User } from './user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Angular 4 Project!';
  userModel = new User('','','',8511165331);
   todaydate;
   componentproperty;
   emailid;
   passwd;
   formdata;
  constructor(private route:Router,private auth:AuthServiceService) { }

  ngOnInit() /*: void*/ {
    /*this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[^ @]*@[^ @]*")
     ])),
     passwd: new FormControl("", this.passwordvalidation)
   });*/
  }
  /*passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }*/
 //public route:Router;
 onClickSubmit(username:string,password:string,emailid:string) 
 {
   console.log
   var user={
     username,
     password,
     emailid
   }
   console.log(user)
   this.auth.registerUser(user).subscribe(data=>{
     console.log(data)
   })
   console.log("hii")
  this.route.navigate(['/login']);
 /* this.emailid = data.emailid;
  this.passwd = data.passwd;*/
  }
}
