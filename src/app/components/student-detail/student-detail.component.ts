import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: any;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.student = this.studentService.getStudentById(id);
    });
  }
  deleteStudent(): void {
    const id = this.student.id;
    console.log("Stud : " , this.student);
    
    this.studentService.removeStudent(this.student);
    }
}