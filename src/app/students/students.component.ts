import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
selector: 'app-students',
templateUrl: './students.component.html',
styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students: any[] = [];
selectedStudent: any;
constructor(private studentService: StudentService) { }
ngOnInit(): void {
this.studentService.currentStudents.subscribe(students => {
this.students = students;
});
}
selectStudent(student: any): void {
this.selectedStudent = student;
}
removeStudent(student: any): void {
this.studentService.removeStudent(student);
this.selectedStudent = null;
}
}