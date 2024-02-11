import { Component } from '@angular/core';
import { CoursesComponent } from '../courses.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  activeNavItem: string = 'objective-course';

  constructor(private coursesComponent: CoursesComponent) {}

  ngOnInit() {
    this.coursesComponent.isDetailPage = true;
  }

  handleNavActive(item: string) {
    this.activeNavItem = item;
  }
}
