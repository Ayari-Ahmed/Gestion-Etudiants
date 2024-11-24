import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNavigatorComponent } from './student-navigator.component';

describe('StudentNavigatorComponent', () => {
  let component: StudentNavigatorComponent;
  let fixture: ComponentFixture<StudentNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentNavigatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
