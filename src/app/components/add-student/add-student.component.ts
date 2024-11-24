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

  isSubmitted = false;
  formSubmitted = false;

  constructor(private studentService: StudentService) { }

  addStudent(): void {
    this.formSubmitted = true; // Track if the form is submitted

    // Only submit if form is valid
    if (this.newStudent.name && this.newStudent.age && this.newStudent.class) {
      console.log(this.newStudent);

      this.studentService.addStudent(this.newStudent);
      this.isSubmitted = true;

      // Reset form after submission
      this.resetForm();

      // Reset after a short delay
      setTimeout(() => {
        this.isSubmitted = false;
        this.formSubmitted = false;
      }, 3000);
    }
  }

  resetForm() {
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
