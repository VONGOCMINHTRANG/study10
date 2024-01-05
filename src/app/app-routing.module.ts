import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TestsComponent } from './pages/tests/tests.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../guards/auth.guards';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'tests', component: TestsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
