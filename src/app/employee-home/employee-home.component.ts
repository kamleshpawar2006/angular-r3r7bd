import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  user = null;
  constructor(private _commonService: CommonService) {
    //this.user = this._commonService.loggedUser;
    this.user = {
      name: "kamlesh",
      password: "kamlesh",
      userType: "employee",
    };
  }

  ngOnInit() {
  }

}
