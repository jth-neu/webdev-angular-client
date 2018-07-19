import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

import { AppComponent } from './app.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import {FormsModule} from '@angular/forms';
import {CourseNavigatorServiceClient} from '../services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTwoComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseNavigatorServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
