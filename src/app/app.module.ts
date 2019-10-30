import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'followers/:username',
        component: GithubProfileComponent
      },
      { 
        path: 'followers',
        component: GithubFollowersComponent
      },
      { 
        path: 'posts',
        component: PostsComponent
      },
      { 
        path: '**',
        component: NotFoundComponent
      },
    ]),
  ],
  providers: [
    PostService,
    CoursesService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GithubFollowersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
