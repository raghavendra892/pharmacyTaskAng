import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn : 'root'
})


export class AuthGaurd implements CanActivate{

    constructor(private _authService : AuthService, private _router : Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean>| Promise<boolean > {
        //canActivate Working as call back Fun
        return this._authService.isAuthenticated()
            .then((isAuth : boolean)=>{
                if(isAuth === true){
                    return true
                }else{
                    
                    this._router.navigate(['/'])
                    return false
                }
            })
    }

}