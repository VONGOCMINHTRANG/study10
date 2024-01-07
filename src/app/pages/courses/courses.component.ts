import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  activeCourseItem: string = 'all-courses';

  constructor(private router: Router) {}

  handleCourseActive(item: string, link: string) {
    console.log(link);

    this.activeCourseItem = item;
    this.router.navigateByUrl(`/courses/${link}`);
  }
}
