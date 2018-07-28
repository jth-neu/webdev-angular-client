import { Component, OnInit, Input } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  constructor(private service: SectionServiceClient) {
  }

  @Input() course;
  courseId: number;
  sections = [];
  sectionName = '';
  seats = '';
  seatsMax = '';
  updateSectionName = '';
  updateSeats = '';
  updateSeatsMax = '';
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  deleteSection(section) {
    this.service.deleteSection(section._id)
      .then(() => this.loadSections(this.courseId));
  }

  createSection(sectionName, seats, seatsMax) {
    if (sectionName === '') {
      sectionName = this.course.title + ' Section ' + (this.sections.length + 1);
    }
    if (seats === '') {
      seats = 0;
    }
    if (seatsMax === '') {
      seatsMax = 50;
    }
    this.service.createSection(this.courseId, sectionName, seats, seatsMax)
      .then(() => this.loadSections(this.courseId))
      .then(() => {
        this.sectionName = '';
        this.seats = '';
        this.seatsMax = ''; });
  }

  ngOnInit() {
    this.courseId = this.course.id;
    this.loadSections(this.courseId);
  }

  update(section, newName, newSeat, newMax) {
    this.service.update(section._id, newName, newSeat, newMax)
      .then(() => this.loadSections(this.courseId))
      .then(() => {
        this.sectionName = '';
        this.seats = '';
        this.seatsMax = ''; });
  }

}
