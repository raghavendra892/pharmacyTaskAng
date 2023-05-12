import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {


  
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, "" , {
      duration : 3000,
      horizontalPosition : "center",
      verticalPosition : "top"
    });
    
  
  }
}
