import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-feedback',
  templateUrl: './employee-feedback.component.html',
  styleUrls: ['./employee-feedback.component.css']
})
export class EmployeeFeedbackComponent implements OnInit {
  feedback = {
    empId: this._commonService.getUser().id,
    empName: this._commonService.getUser().name,
    project: '',
    projectRating: 0,
    comment: '',
    mgrRating: '',
    mgrComment: ''
  };
  projects = [];
  constructor(private _commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.projects = this._commonService.projects;
  }

  save() {
    this._commonService.saveFeedback(this.feedback);
    this.feedback = {
      empId: this._commonService.getUser().id,
      empName: this._commonService.getUser().name,
      project: '',
      projectRating: 0,
      comment: '',
      mgrRating: '',
      mgrComment: ''
    };
    this.router.navigate(['/employee-home/list']);
  }

}
