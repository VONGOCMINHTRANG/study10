import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  activeCourseItem: string = 'all-courses';
  isDetailPage: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  handleCourseActive(item: string, link: string) {
    this.activeCourseItem = item;
    this.router.navigateByUrl(`/courses/${link}`);
  }
}
