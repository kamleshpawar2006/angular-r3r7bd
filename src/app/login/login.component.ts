import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name: 'kamlesh',
    password: 'kamlesh'
  };
  constructor(private _commonService: CommonService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    let userType = this._commonService.login(this.user);
    if(userType == 'employee'){
      this._router.navigateByUrl('/employee-home');
    }else if(userType == 'manager'){
      this._router.navigateByUrl('/manager-home');
    }
    
  }

}
