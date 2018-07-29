export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://webdev-summer2018-jthuang.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
