import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateLogin implements CanActivate {
    constructor(private _commonService: CommonService, private router: Router) {}
    canActivate() {
        if(this._commonService.getUser()){
            return true;
        }else{
            return false;
        }
    }
  }