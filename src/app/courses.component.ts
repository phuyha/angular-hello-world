
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses>
  template: `
  <h2>{{ title }}</h2>
  <h2 [textContent]="title"></h2>

  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>

  <table>
    <tr>
      <td [attr.colspan]="colSpan"></td>
    </tr>
  </table>

  <img src="{{ imageUrl }}" />
  <img [src]="imageUrl" />
  <br>
  <button class="btn btn-primary" [class.active]="isActive">Save</button>
  <div (click)="onDivClicked()">
    <button class="btn btn-primary" (click)="onClick($event)">Click</button>
  </div>

  <input (keyup)="onKeyUp($event)" />

  <input (keyup.enter)="onKeyUp2()" />

  <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyEmail()" />
  <input [(ngModel)]="email" (keyup.enter)="onKeyEmail()" />
  <br>
  {{ course.title | uppercase | lowercase }} <br/>
  {{ course.students | number }} <br/>
  {{ course.rating | number:'2.1-1' }} <br/>
  {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
  {{ course.releaseDate | date:'mediumDate' }} <br/>
  {{ text | summary: 10 }}
  `
})
export class CoursesComponent {
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";
  courses;
  colSpan = 2;
  isActive = false;

  onClick($event) {
    $event.stopPropagation(); // stop parent's event

    console.log('Button was clicked', $event);
  }

  onDivClicked() {
    console.log("Div was clicked");
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) console.log($event.target.value);
  }

  onKeyUp2() {
    console.log("ENTER was pressed");
  }

  email = "me@example.com";

  onKeyEmail() {
    console.log(this.email)
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `;

  // Logic for calling an HTTP service
}