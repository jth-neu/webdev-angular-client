import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

import { AppComponent } from './app.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import {FormsModule} from '@angular/forms';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from './services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import {SectionServiceClient} from './services/section.service.client';
import { RegisterComponent } from './register/register.component';
import { SectionListComponent } from './section-list/section-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTwoComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
