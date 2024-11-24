import { Component, Input } from '@angular/core';

import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Input() student: any;
  newStudent = { name: '', age: null, class: '' };
  constructor(private studentService: StudentService) { }
  addStudent(): void {
    if (this.newStudent.name && this.newStudent.age && this.newStudent.class) {
      console.log(this.newStudent);

      this.studentService.addStudent(this.newStudent);
      this.newStudent = { name: '', age: null, class: '' };
    }
  }
}
