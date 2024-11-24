import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  newStudent = {
    name: '',
    age: null,
    class: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    profilePicture: 'https://img.icons8.com/plasticine/100/user-male.png',
    hobbies: [],
    skills: [],
    favoriteQuote: ''
  };

  constructor(private studentService: StudentService) { }

  addStudent(): void {
    if (this.newStudent.name && this.newStudent.age && this.newStudent.class) {
      console.log(this.newStudent);

      this.studentService.addStudent(this.newStudent);

      // Reset the form after submission
      this.newStudent = {
        name: '',
        age: null,
        class: '',
        email: '',
        phone: '',
        address: '',
        grade: '',
        profilePicture: 'https://img.icons8.com/plasticine/100/user-male.png',
        hobbies: [],
        skills: [],
        favoriteQuote: ''
      };
    }
  }
}
