import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusSectionComponent } from './aboutus-section.component';

describe('AboutusSectionComponent', () => {
  let component: AboutusSectionComponent;
  let fixture: ComponentFixture<AboutusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
