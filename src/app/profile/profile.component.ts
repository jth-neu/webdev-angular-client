import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  username;
  firstName;
  lastName;
  email;
  phone;
  address;
  sections = [];

  update() {
    const user = {
      username : this.username,
      firstName : this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address
    };
    this.service.update(user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  loadSections() {
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

  ngOnInit() {
    this.service
      .profile()
      .then((user) => {
          this.username = user.username;
          this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.email = user.email;
          this.phone = user.phone;
          this.address = user.address;
        }
      );
    this.loadSections();
  }
  withdraw(enrollment) {
    this.sectionService
      .withdrawStudentFromSection(enrollment.section._id)
      .then(() => this.loadSections());
  }
}
