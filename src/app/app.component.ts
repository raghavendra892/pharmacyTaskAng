import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pharmacytask';
  constructor(private _router : Router, private _authService : AuthService, private _snackbarService : SnackbarService){

  }


  
  logOut(){
    this._snackbarService.openSnackBar(`!!!! LogOut successfully !!!!`)
    this._router.navigate(['/'])
    this._authService.logOutFromApp()
  }
}
