import { NgModule } from '@angular/core';
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
import { ResultTestsComponent } from './pages/my-account/result-tests/result-tests.component';
import { MiniComponent } from './pages/tests/mini/mini.component';
import { TestsComponent } from './pages/tests/tests.component';
import { AllComponent } from './pages/tests/all/all.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SearchComponent } from './components/search/search.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';

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
    ResultTestsComponent,
    TestsComponent,
    MiniComponent,
    AllComponent,
    MyAccountComponent,
    SidebarComponent,
    PaginatorComponent,
    SearchComponent,
    SocialLinkComponent,
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
})
export class AppModule {}
