import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinalDocumentComponent } from './view-final-document.component';

describe('ViewFinalDocumentComponent', () => {
  let component: ViewFinalDocumentComponent;
  let fixture: ComponentFixture<ViewFinalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFinalDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFinalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
