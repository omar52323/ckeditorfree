import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturesValidationComponent } from './signatures-validation.component';

describe('SignaturesValidationComponent', () => {
  let component: SignaturesValidationComponent;
  let fixture: ComponentFixture<SignaturesValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaturesValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignaturesValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
