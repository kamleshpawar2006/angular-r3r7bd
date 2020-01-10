import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-manager-feedback',
  templateUrl: './edit-manager-feedback.component.html',
  styleUrls: ['./edit-manager-feedback.component.css']
})
export class EditManagerFeedbackComponent implements OnInit {

  feedback = null;
  projects = [];
  constructor(private _commonService: CommonService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.projects = this._commonService.projects;
    this.feedback = this._commonService.getSpecificFeedback(this.route.snapshot.params.empId, this.route.snapshot.params.project)
  }

  save() {
    console.log(this.feedback);
    this._commonService.saveFeedback(this.feedback);
    this.router.navigate(['/manager-home/list']);
  }

}
