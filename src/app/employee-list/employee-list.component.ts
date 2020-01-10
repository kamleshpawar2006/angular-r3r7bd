import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allFeedbacks = [];
  constructor(private _commonService: CommonService) {
    
  }

  ngOnInit() {
    this.allFeedbacks = this._commonService.getAllFeedbacks();
  }

  deleteFeedback(empId, project) {
    var r = confirm("Are you sure you want to delete");
    if (r == true) {
      this._commonService.deleteSpecificFeedback(empId, project)
    }
  }

}
