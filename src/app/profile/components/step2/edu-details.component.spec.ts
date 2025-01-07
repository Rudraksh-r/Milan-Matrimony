import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDetailsComponent } from './edu-details.component';

describe('EduDetailsComponent', () => {
  let component: EduDetailsComponent;
  let fixture: ComponentFixture<EduDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
