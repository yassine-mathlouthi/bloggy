import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBlogsComponent } from './left-side-blogs.component';

describe('LeftSideBlogsComponent', () => {
  let component: LeftSideBlogsComponent;
  let fixture: ComponentFixture<LeftSideBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
