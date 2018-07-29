export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch
    ('https://webdev-summer2018-jthuang.herokuapp.com/api/course')
      .then(response => response.json());
  }

  findModulesForCourse(courseId) {
    return fetch
    ('https://webdev-summer2018-jthuang.herokuapp.com/api/course/'
      + courseId + '/module')
      .then(response => response.json());
  }

}
