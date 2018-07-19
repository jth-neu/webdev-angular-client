import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-two',
  templateUrl: './hello-world-two.component.html',
  styleUrls: ['./hello-world-two.component.css']
})
export class HelloWorldTwoComponent implements OnInit {

  message = 'Hello World Component';

  courseTitle: string;
  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];


  constructor() { }

  ngOnInit() {
  }


  deleteCourse(courseId) {
    this.courses =
      this.courses
        .filter(course =>
          course.id !== courseId);
  }
  addCourse(courseTitle) {
    const largestId = Math.max.apply(
      Math, this.courses.map(
        function(course) {
          return course.id; }));
    this.courses.push(
      {title: courseTitle, id: largestId + 1}
    );
    this.courseTitle = '';
  }
}
