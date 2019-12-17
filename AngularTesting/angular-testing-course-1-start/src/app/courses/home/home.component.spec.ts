import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed} from '@angular/core/testing';
import {CoursesModule} from '../courses.module';
import {DebugElement} from '@angular/core';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CoursesService} from '../services/courses.service';
import {HttpClient} from '@angular/common/http';
import {COURSES} from '../../../../server/db-data';
import {setupCourses} from '../common/setup-test-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {click} from '../common/test-utils';


describe('HomeComponent', () => {

  let component: HomeComponent;
  let componentFixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let coursesService: any;

  const beginnerCourses = setupCourses()
    .filter(course => course.category === 'BEGINNER');
  const advancedCourses = setupCourses()
    .filter(course => course.category === 'ADVANCED');

  beforeEach(async((() => {
    const coursesServiceSpy = jasmine.createSpyObj('CoursesService', ['findAllCourses']);

    TestBed.configureTestingModule({
      imports: [
        CoursesModule,
        NoopAnimationsModule
      ],
      providers: [{provide: CoursesService, useValue: coursesServiceSpy}]
    }).compileComponents()
    .then(() => {
        componentFixture = TestBed.createComponent(HomeComponent);
        component = componentFixture.componentInstance;
        debugElement = componentFixture.debugElement;
        coursesService = TestBed.get(CoursesService);
    });
  })));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });


  it("should display only beginner courses", () => {
    coursesService.findAllCourses.and
      .returnValue(of(beginnerCourses));

    componentFixture.detectChanges();

    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));

    expect(tabs.length).toEqual(1, "Unexpected number of tabs");
  });


  it("should display only advanced courses", () => {
    coursesService.findAllCourses.and
      .returnValue(of(advancedCourses));

    componentFixture.detectChanges();

    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));

    expect(tabs.length).toEqual(1, "Unexpected number of tabs");
  });


  it("should display both tabs", () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    componentFixture.detectChanges();

    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));

    expect(tabs.length).toEqual(2, "Unexpected number of tabs");
  });


  it("should display advanced courses when tab clicked", fakeAsync(() => {

    coursesService.findAllCourses.and.returnValue(of(setupCourses()));

    componentFixture.detectChanges();

    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));

    click(tabs[1]);

    componentFixture.detectChanges();

    flush();

    const cardTitles = debugElement.queryAll(By.css(".mat-card-title"));

    expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");

    expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
  }));

  it("should display advanced courses when tab clicked-async", async(() => {

    coursesService.findAllCourses.and.returnValue(of(setupCourses()));

    componentFixture.detectChanges();

    const tabs = debugElement.queryAll(By.css(".mat-tab-label"));

    click(tabs[1]);

    componentFixture.detectChanges();

    componentFixture.whenStable().then(() => {
      const cardTitles = debugElement.queryAll(By.css(".mat-card-title"));

      expect(cardTitles.length).toBeGreaterThan(0, "Could not find card titles");

      expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
    });
  }));
});


