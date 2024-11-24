import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component : Page404Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
