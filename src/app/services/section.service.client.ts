export class SectionServiceClient {

  SECTION_URL = 'https://mighty-badlands-90546.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'https://mighty-badlands-90546.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://mighty-badlands-90546.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  withdrawStudentFromSection(sectionId) {
    const url = 'https://mighty-badlands-90546.herokuapp.com/api/section/' + sectionId + '/withdraw';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats, seatsMax) {
    const section = {courseId, name, seats, seatsMax};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch('https://mighty-badlands-90546.herokuapp.com/api/section' + '/' + sectionId, {
      method: 'delete'
    });
  }

  update(sectionId, newName, newSeats, newMax) {
    const section = {id: sectionId, name: newName, seats: newSeats , seatsMax: newMax};
    return fetch('https://mighty-badlands-90546.herokuapp.com/api/section' + '/' + sectionId, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
