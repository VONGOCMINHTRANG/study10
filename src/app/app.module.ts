import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InformationComponent } from './pages/my-account/information/information.component';
import { MiniComponent } from './pages/tests/mini/mini.component';
import { TestsComponent } from './pages/tests/tests.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { BasicEnglishComponent } from './pages/courses/basic-english/basic-english.component';
import { IeltsComponent } from './pages/courses/ielts/ielts.component';
import { ToeicComponent } from './pages/courses/toeic/toeic.component';
import { AllTestComponent } from './pages/tests/all/all.component';
import { AllCoursesComponent } from './pages/courses/all/all.component';
import { AllHomeContentComponent } from './pages/home/all/all.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { BuyingTermsComponent } from './pages/buying-terms/buying-terms.component';
import { TermsComponent } from './pages/terms/terms.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { ChangePasswordComponent } from './pages/my-account/change-password/change-password.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CalculatorToeicComponent } from './pages/calculator/toeic/toeic.component';
import { CalculatorIeltsComponent } from './pages/calculator/ielts/ielts.component';

// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CoursesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    DialogComponent,
    InformationComponent,
    TestsComponent,
    MiniComponent,
    AllTestComponent,
    MyAccountComponent,
    SidebarComponent,
    PaginatorComponent,
    SearchComponent,
    SocialLinkComponent,
    BasicEnglishComponent,
    IeltsComponent,
    ToeicComponent,
    AllCoursesComponent,
    AllHomeContentComponent,
    AboutComponent,
    PrivacyComponent,
    BuyingTermsComponent,
    TermsComponent,
    ChangePasswordComponent,
    CalculatorComponent,
    CalculatorIeltsComponent,
    CalculatorToeicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
