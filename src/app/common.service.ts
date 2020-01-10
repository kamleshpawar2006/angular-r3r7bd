import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  users = [{
      name: "kamlesh",
      password: "kamlesh",
      userType: "employee",
      id: 1234
    },
    {
      name: "mayur",
      password: "mayur",
      userType: "manager",
      id: 54321
    }
  ];

  projects = ["ABC", "XYZ"]

  loggedUser = null;

  constructor() { }

  login(data){
      let employeeType = null;
      this.users.forEach(element => {
        if(element.name == data['name']){
          employeeType = element.userType;
          this.setUser(element);
          // this.loggedUser = element;
        }
    });
    return employeeType;
  }

  setUser(user){
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
  }

  logout(){
    localStorage.removeItem('loggedUser');
  }

  saveFeedback(feedback) {
    let projectsFeedback = this.getAllFeedbacks();
    if(projectsFeedback){
      var index = this.getSpecificFeedbackIndex(feedback.empId, feedback.project);
      if(index != -1){
        projectsFeedback[index] = feedback;
      }else{
        projectsFeedback.push(feedback);
      }
      this.setFeedbacks(projectsFeedback);
    }else{
      this.setFeedbacks([feedback]);
    }
  }

  deleteSpecificFeedback(empId, project) {
    let projectsFeedback = this.getAllFeedbacks();
    let index = projectsFeedback.findIndex(item => item.empId == empId && item.project == project);
    projectsFeedback.splice(index, 1);
    this.setFeedbacks(projectsFeedback);
  }

  getSpecificFeedbackIndex(empId, project) {
    let projectsFeedback = this.getAllFeedbacks();
    return projectsFeedback.findIndex(item => item.empId == empId && item.project == project);
  }

  getSpecificFeedback(empId, project) {
    let projectsFeedback = this.getAllFeedbacks();
    return projectsFeedback.find(item => item.empId == empId && item.project == project);
  }

  setFeedbacks(feedbacks) {
    localStorage.setItem('projectsFeedback', JSON.stringify(feedbacks));
  }

  getAllFeedbacks() {
    return JSON.parse(localStorage.getItem('projectsFeedback'))
  }
}
