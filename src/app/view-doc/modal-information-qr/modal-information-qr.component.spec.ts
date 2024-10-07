import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformationQrComponent } from './modal-information-qr.component';

describe('ModalInformationQrComponent', () => {
  let component: ModalInformationQrComponent;
  let fixture: ComponentFixture<ModalInformationQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInformationQrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInformationQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
