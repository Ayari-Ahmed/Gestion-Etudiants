import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import {FormsModule} from '@angular/forms';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentNavigatorComponent } from './components/student-navigator/student-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AboutComponent,
    Page404Component,
    StudentDetailComponent,
    AddStudentComponent,
    StudentNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
