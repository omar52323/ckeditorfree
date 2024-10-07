import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentPrincipalComponent } from './edit-document-principal.component';

describe('EditDocumentPrincipalComponent', () => {
  let component: EditDocumentPrincipalComponent;
  let fixture: ComponentFixture<EditDocumentPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDocumentPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDocumentPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
