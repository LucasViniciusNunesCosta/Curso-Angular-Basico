import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  filteredCourses: Course[]= [];

  _courses: Course[] = [];

  _filterBy: string = "";

  constructor(private coureService: CoursesService) {

  }

  ngOnInit(): void {
      this._courses = this.coureService.retrieveAll();
      this.filteredCourses = this._courses;
    }

    set filter(value: string){
      this._filterBy = value;

      this.filteredCourses = this._courses.filter((course: Course)=> course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
    get filter(){
      return this._filterBy
    }

  }