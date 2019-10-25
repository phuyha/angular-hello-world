import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true
  }

  courses = [1, 2];

  viewMode = 'somethingElse';

  coursess = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  onAdd() {
    this.coursess.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.coursess.indexOf(course);
    this.coursess.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log("Favorite changed: " + eventArgs.newValue)
  }

  courses1;

  loadCourses() {
    this.courses1 = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
