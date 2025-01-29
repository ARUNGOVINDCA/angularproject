import { Component } from "@angular/core";
import { CourseServices } from "./course.service";

@Component({
  selector: 'courses',
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor =" let course of courses">
      {{course}}
    </li>
  </ul>
  `

})

export class CoursesComponent{
    
  title = "List Of Courses"
  courses;
constructor (service: CourseServices){
  // let service = new  CourseServices()

  this.courses = service.getCourses()
}


  //Logic for Http Services
}