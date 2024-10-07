import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturePhonePadComponent } from './signature-phone-pad.component';

describe('SignaturePhonePadComponent', () => {
  let component: SignaturePhonePadComponent;
  let fixture: ComponentFixture<SignaturePhonePadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaturePhonePadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignaturePhonePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
