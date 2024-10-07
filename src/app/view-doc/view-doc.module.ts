import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFinalDocumentComponent } from './view-final-document/view-final-document.component';
import { RedirectComponent } from './redirect/redirect.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { DocumentComponent } from './document/document.component';
import { CameraComponent } from './camera/camera.component';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../shared/shared.module';
//import { ngfModule } from 'angular-file';
import { EditDocumentPrincipalComponent } from './edit-document-principal/edit-document-principal.component';
import { SignaturesValidationComponent } from './signatures-validation/signatures-validation.component';
import { ModalInformationQrComponent } from './modal-information-qr/modal-information-qr.component';
import { AppMaterialModule } from '../shared/angular-material/app-material.module';
import { ViewDocRoutingModule } from './view-doc-routing.module';
///import { QRCodeModule } from 'angularx-qrcode';
import { SignaturePhonePadComponent } from './signature-phone-pad/signature-phone-pad.component';
import { TranslateModule } from '@ngx-translate/core';
import { SignatureComponent } from './signature/signature.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [SignatureComponent, DocumentComponent, CameraComponent, ViewFinalDocumentComponent, RedirectComponent, EditDocumentComponent, CommentsComponent, EditDocumentPrincipalComponent, SignaturesValidationComponent, ModalInformationQrComponent, SignaturePhonePadComponent],
  imports: [
    TranslateModule,
    CommonModule,
    AppMaterialModule,
    ViewDocRoutingModule,
    CKEditorModule
  ]
})
export class ViewDocModule { }
