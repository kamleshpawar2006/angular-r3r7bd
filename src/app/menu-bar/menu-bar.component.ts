import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  loggeduser = null;
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.loggeduser = this._commonService.getUser();
    console.log(this.loggeduser);
  }

  logout(){
    this._commonService.logout();
  }

}
