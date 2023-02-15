import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'CRS-9834',
        duration: 120,
        rating: 5.0,
        releaseDate: 'December, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 49.99,
        code: 'CRH-5234',
        duration: 80,
        rating: 4.0,
        releaseDate: 'January, 2, 2020'
      }
    ]
    }
  }