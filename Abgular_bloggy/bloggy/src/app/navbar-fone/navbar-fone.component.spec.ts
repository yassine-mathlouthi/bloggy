import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFoneComponent } from './navbar-fone.component';

describe('NavbarFoneComponent', () => {
  let component: NavbarFoneComponent;
  let fixture: ComponentFixture<NavbarFoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
