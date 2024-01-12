import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TestsComponent } from './pages/tests/tests.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guards';
import { InformationComponent } from './pages/my-account/information/information.component';
import { MiniComponent } from './pages/tests/mini/mini.component';
import { AllTestComponent } from './pages/tests/all/all.component';
import { UserGuard } from './guards/user.guards';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { BasicEnglishComponent } from './pages/courses/basic-english/basic-english.component';
import { IeltsComponent } from './pages/courses/ielts/ielts.component';
import { ToeicComponent } from './pages/courses/toeic/toeic.component';
import { AllCoursesComponent } from './pages/courses/all/all.component';
import { AllHomeContentComponent } from './pages/home/all/all.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { BuyingTermsComponent } from './pages/buying-terms/buying-terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ChangePasswordComponent } from './pages/my-account/change-password/change-password.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CalculatorIeltsComponent } from './pages/calculator/ielts/ielts.component';
import { CalculatorToeicComponent } from './pages/calculator/toeic/toeic.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AllHomeContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'buying-terms', component: BuyingTermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthGuard] },
  {
    path: 'tests',
    component: TestsComponent,
    children: [
      { path: '', component: AllTestComponent },
      { path: 'mini', component: MiniComponent },
    ],
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    children: [
      { path: '', component: CalculatorIeltsComponent },
      { path: 'toeic', component: CalculatorToeicComponent },
      { path: 'ielts', component: CalculatorIeltsComponent },
    ],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      { path: '', component: AllCoursesComponent },
      { path: 'ielts', component: IeltsComponent },
      { path: 'toeic', component: ToeicComponent },
      {
        path: 'basic-english',
        component: BasicEnglishComponent,
      },
    ],
  },
  { path: 'blog', component: BlogComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [UserGuard],
    children: [
      { path: '', redirectTo: 'information', pathMatch: 'prefix' },
      { path: 'information', component: InformationComponent },
      { path: 'change-password', component: ChangePasswordComponent },
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
