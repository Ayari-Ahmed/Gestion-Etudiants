import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  filteredStudents: any[] = [];
  selectedStudent: any;
  searchQuery: string = ''; // For search input
  currentId: number = 0; // For pagination
  maxId: number = 0; // Max ID to handle pagination
  
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.currentStudents.subscribe(students => {
      this.students = students;
      this.filteredStudents = [...students];  // Initialize filtered list
      this.maxId = students.length - 1;
    });
  }

  // Select student for details or editing
  selectStudent(student: any): void {
    this.selectedStudent = student;
  }

  // Remove student from the list
  removeStudent(student: any): void {
    this.studentService.removeStudent(student);
    this.selectedStudent = null;
  }

  // Filter students based on the search query
  filterStudents(): void {
    if (!this.searchQuery) {
      this.filteredStudents = [...this.students];
    } else {
      this.filteredStudents = this.students.filter(student =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Sort students alphabetically by their name
  sortStudents(): void {
    this.filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Pagination: move to the next page
  nextStudent(): void {
    if (this.currentId < this.maxId) {
      this.currentId++;
    }
  }

  // Pagination: move to the previous page
  previousStudent(): void {
    if (this.currentId > 0) {
      this.currentId--;
    }
  }
}
