import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  loggeduser = null;
  constructor(private _commonService: CommonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggeduser = this._commonService.getUser();
  }

  logout(){
    this._commonService.logout();
    this.router.navigate(['/home']);
  }

}
