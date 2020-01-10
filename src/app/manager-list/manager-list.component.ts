import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  allFeedbacks = [];
  constructor(private _commonService: CommonService) { 
    
  }

  ngOnInit() {
    this.allFeedbacks = this._commonService.getAllFeedbacks();
  }

}
