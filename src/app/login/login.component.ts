import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    if (username === undefined || password === undefined) {
      alert('Username and password can not be empty.');
    } else {
      this.service
        .login(username, password)
        .then((user) => {
          if (user === null) {
            alert('Invalid username or password, please try again.');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
