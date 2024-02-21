import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckuotComponent } from './checkuot.component';

describe('CheckuotComponent', () => {
  let component: CheckuotComponent;
  let fixture: ComponentFixture<CheckuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckuotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
