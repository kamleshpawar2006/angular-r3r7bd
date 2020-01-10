import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-employee-feedback',
  templateUrl: './edit-employee-feedback.component.html',
  styleUrls: ['./edit-employee-feedback.component.css']
})
export class EditEmployeeFeedbackComponent implements OnInit {

  feedback = null;
  projects = [];
  constructor(private _commonService: CommonService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.projects = this._commonService.projects;
    this.feedback = this._commonService.getSpecificFeedback(this.route.snapshot.params.empId, this.route.snapshot.params.project)
    console.log(this.feedback);
  }

  save() {
    this._commonService.saveFeedback(this.feedback);
    this.router.navigate(['/employee-home/list']);
  }
}
