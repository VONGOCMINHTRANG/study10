import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TestsComponent } from './pages/tests/tests.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guards';
import { InformationComponent } from './pages/my-account/information/information.component';
import { UserCoursesComponent } from './pages/my-account/courses/courses.component';
import { ResultTestsComponent } from './pages/my-account/result-tests/result-tests.component';
import { MiniComponent } from './pages/tests/mini/mini.component';
import { AllComponent } from './pages/tests/all/all.component';
import { UserGuard } from './guards/user.guards';
import { MyAccountComponent } from './pages/my-account/my-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  {
    path: 'tests',
    component: TestsComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'mini', component: MiniComponent },
    ],
  },
  { path: 'courses', component: CoursesComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [UserGuard],
    children: [
      { path: '', redirectTo: 'information', pathMatch: 'prefix' },
      { path: 'information', component: InformationComponent },
      {
        path: 'user-courses',
        component: UserCoursesComponent,
      },
      {
        path: 'result-tests',
        component: ResultTestsComponent,
      },
    ],
  },
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
