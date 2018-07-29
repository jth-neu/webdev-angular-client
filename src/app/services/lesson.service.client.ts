export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('https://webdev-summer2018-jthuang.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
