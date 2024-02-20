import { Component, ElementRef, ViewChild } from '@angular/core';
import { CoursesComponent } from '../courses.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  activeNavItem: string = 'objective-course';
  @ViewChild('objectiveRef') objectiveRef!: ElementRef;
  @ViewChild('informationRef') informationRef!: ElementRef;
  @ViewChild('curriculumRef') curriculumRef!: ElementRef;

  constructor(private coursesComponent: CoursesComponent) {}

  ngOnInit() {
    this.coursesComponent.isDetailPage = true;
  }

  handleNavActive(item: string) {
    this.activeNavItem = item;

    switch (item) {
      case 'objective-course':
        this.objectiveRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;

      case 'course-information':
        this.informationRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;

      case 'curriculum':
        this.curriculumRef.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;

      default:
        break;
    }
  }
}
