import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReInventsComponent } from './re-invents.component';

describe('ReInventsComponent', () => {
  let component: ReInventsComponent;
  let fixture: ComponentFixture<ReInventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReInventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReInventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
