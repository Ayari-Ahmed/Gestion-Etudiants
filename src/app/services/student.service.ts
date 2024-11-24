import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = new BehaviorSubject<any[]>([
    {
      id: 0,
      name: 'Alice',
      age: 20,
      class: 'Biologie',
      email: 'alice@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Cityville',
      grade: 'A',
      profilePicture: 'https://img.icons8.com/plasticine/100/user-male.png', 
      hobbies: ['Reading', 'Cycling', 'Traveling'],
      skills: ['Biology', 'Research', 'Critical Thinking'],
      favoriteQuote: '“The only limit to our realization of tomorrow is our doubts of today.” - Franklin D. Roosevelt',
    },
    {
      id: 1,
      name: 'Bob',
      age: 22,
      class: 'Physique',
      email: 'bob@example.com',
      phone: '987-654-3210',
      address: '456 Elm St, Townsville',
      grade: 'B',
      profilePicture: 'https://img.icons8.com/plasticine/100/user-male.png',
      hobbies: ['Photography', 'Painting', 'Music'],
      skills: ['Physics', 'Problem Solving', 'Creative Thinking'],
      favoriteQuote: '“Life is what happens when you’re busy making other plans.” - John Lennon',
    },
    {
      id: 2,
      name: 'Charlie',
      age: 19,
      class: 'Mathématiques',
      email: 'charlie@example.com',
      phone: '555-123-4567',
      address: '789 Oak St, Villagetown',
      grade: 'A+',
      profilePicture: 'https://img.icons8.com/plasticine/100/user-male.png', 
      hobbies: ['Gaming', 'Coding', 'Football'],
      skills: ['Mathematics', 'Programming', 'Strategy'],
      favoriteQuote: '“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill',
    }
  ]);
  
  
  
  currentStudents = this.students.asObservable();

  constructor(private router: Router) { }

  addStudent(student: any): void {
    const newId = this.students.value.length
      ? Math.max(...this.students.value.map(s => s.id)) + 1
      : 0;
    this.students.next([...this.students.value, { ...student, id: newId }]);
  }
  removeStudent(student: any): void {
    console.log("Students before remove:", this.students.value);
    const updatedStudents = this.students.value
      .filter(s => s.id !== student.id)
      .map((s, index) => ({ ...s, id: index }));
    this.students.next(updatedStudents);

    console.log("Students after remove:", this.students.value);
    this.router.navigate(['/students']);
  }
  getStudentById(id: string | null): any {
    const studentId = id ? parseInt(id, 10) : -1;
    return this.students.value.find(s => s.id === studentId) || null;
  }
  getMaxId(): number {
    return this.students.value.length
      ? Math.max(...this.students.value.map(s => s.id))
      : 0;
  }
}
