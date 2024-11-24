import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = new BehaviorSubject<any[]>([
    { id: 0, name: 'Alice', age: 20, class: 'Biologie' },
    { id: 1, name: 'Bob', age: 22, class: 'Physique' },
    { id: 2, name: 'Charlie', age: 19, class: 'Mathématiques' }
  ]);
  currentStudents = this.students.asObservable();

  constructor() { }

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
