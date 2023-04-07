import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertbloggComponent } from './insertblogg.component';

describe('InsertbloggComponent', () => {
  let component: InsertbloggComponent;
  let fixture: ComponentFixture<InsertbloggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertbloggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertbloggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
