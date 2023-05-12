import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router, private _authService : AuthService, private _snackbarService : SnackbarService) { }

  ngOnInit(): void {
  }
  // onLogIn(name : HTMLInputElement, password : HTMLInputElement){
  //   if(name.value === "qaifi" && password.value === "qaifi"){
      
      
  //     this._router.navigate(['/Orders'])
  //   }
  //   
    
  // }

  onLogIn(name : HTMLInputElement, password : HTMLInputElement){
    if(name.value === "qaifi" && password.value === "qaifi"){
      this._snackbarService.openSnackBar(`!!!! Your LogIn is Successfully !!!!`)
      this._router.navigate(['/Orders'])
      this._authService.logInToApp()
      
    }else{
      this._snackbarService.openSnackBar(`!!!! Please Enter Valid Username or Password !!!!`)
    }

    
  }

  
  // logOut(){
    
  //   this._router.navigate(['/'])
  //   this._authService.logOutFromApp()
    
  // }
}
