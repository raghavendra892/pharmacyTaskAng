import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedInstatus : boolean = false;
  constructor() { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.isLoggedInstatus)
      },500);
    })
  }

  getStatusOfLoggedIN(){
    return this.isLoggedInstatus
  }

  logInToApp(){
    // {username,passWord} Api call
     this.isLoggedInstatus = true;
  }

  logOutFromApp(){
    //

    this.isLoggedInstatus = false
  }
}
