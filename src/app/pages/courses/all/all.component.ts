import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllCoursesComponent {
  constructor(private router: Router) {}

  getDetailPage(id: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigateByUrl(`/courses/series/${id}`);
  }
}
