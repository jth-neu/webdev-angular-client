import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient } from '../services/user.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private router: Router) { }

  courses: Course[] = [];
  loggedIn = false;
  enrolledCourses: Course[] = [];
  enrolledCourseIds = [];
  enrolledSections = [];

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    this.userService.profile()
      .then(res => {
        return res._id;
    })
      .then((userId) => {
        if (userId !== null) {
          this.loggedIn = true;
          this.sectionService.findSectionsForStudent()
            .then(sections => {
              this.enrolledSections = sections;
              this.findEnrolledCourses();
            });
        }
      });
  }
  findEnrolledCourses() {
    this.enrolledSections.forEach((enrolledSection) => {
      this.courseService.findCourseById(enrolledSection.section.courseId)
        .then(course => {
          const flag = !this.enrolledCourseIds.includes(course.id);
          if (flag) {
            this.enrolledCourseIds.push(course.id);
            this.enrolledCourses.push(course);
          }
        });
    });
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));
  }
}
