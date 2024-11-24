import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
@Component({
selector: 'app-student-navigator',
templateUrl: './student-navigator.component.html',
styleUrls: ['./student-navigator.component.css']
})
export class StudentNavigatorComponent implements OnInit {
currentId: number = 0;
maxId: number = 0;
constructor(
private route: ActivatedRoute,
private router: Router,
private studentService: StudentService
) { }
ngOnInit(): void {
this.route.paramMap.subscribe(params => {
const id = params.get('id');
this.currentId = id ? parseInt(id, 10) : 0;
this.maxId = this.studentService.getMaxId();
});
}
previousStudent(): void {
if (this.currentId > 0) {
this.router.navigate(['/students', this.currentId - 1]);
}
}
nextStudent(): void {
if (this.currentId < this.maxId) {
this.router.navigate(['/students', this.currentId + 1]);
}
}
}