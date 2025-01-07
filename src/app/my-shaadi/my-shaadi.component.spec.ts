import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShaadiComponent } from './my-shaadi.component';

describe('MyShaadiComponent', () => {
  let component: MyShaadiComponent;
  let fixture: ComponentFixture<MyShaadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyShaadiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyShaadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
