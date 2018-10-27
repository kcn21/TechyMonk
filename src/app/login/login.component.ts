import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private AuthServiceService:AuthServiceService) { }

  ngOnInit() {
  }
  Login(username:string,password:string)
  {
    var user={
      username,
      password
    }
    localStorage.setItem("user",username)
    this.AuthServiceService.loginUser(user).subscribe(data=>{
      console.log(data)
      if(data!=null)
        this.route.navigate(['/at']);
      else
        this.route.navigate(['/login'])
    })
   
  }
}
