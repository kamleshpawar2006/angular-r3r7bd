import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommonService } from './common.service';

@Injectable()
class AuthenticateLogin implements CanActivate {
    constructor(private _commonService: CommonService) {}

    canActivate() {
        let islogged = this._commonService.getUser();
        if(islogged){
            return true;
        }else{
            return false;
        }
    }
  }