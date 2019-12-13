import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';




describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent;
  let componentFixture: ComponentFixture<CoursesCardListComponent>;
  let debugElement: DebugElement;

  componentFixture

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [CoursesModule]
    })
    .compileComponents()
    .then(() => {
        componentFixture = TestBed.createComponent(CoursesCardListComponent);
        component = componentFixture.componentInstance;
    });
  }));


  it("should create the component", () => {
    expect(component).toBeTruthy();
  });


  it("should display the course list", () => {
    component.courses = setupCourses();

    componentFixture.detectChanges();
    
    const cards = debugElement.queryAll(By.css(".course-card"));
    expect(cards).toBeTruthy();

    expect(cards.length).toEqual(12, "Unexpected number of courses");
  });


  it("should display the first course", () => {
      component.courses = setupCourses();

      componentFixture.detectChanges();

      const course = component.courses[0];

      const card = debugElement.query(By.css(".course-card:first-child")),
        title = card.query(By.css("mat-card-title")),
        img = card.query(By.css("img"));

      expect(card).toBeTruthy("Could not find card");
      
      expect(title.nativeElement.textContent).toBe(course.titles.description);
      expect(img.nativeElement.src).toBe(course.iconUrl);
  });


});


