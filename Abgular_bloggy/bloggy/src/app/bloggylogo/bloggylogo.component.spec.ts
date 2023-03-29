import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggylogoComponent } from './bloggylogo.component';

describe('BloggylogoComponent', () => {
  let component: BloggylogoComponent;
  let fixture: ComponentFixture<BloggylogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggylogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggylogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
