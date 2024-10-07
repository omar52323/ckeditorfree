import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { DocumentComponent } from './document/document.component';
import { ViewFinalDocumentComponent } from './view-final-document/view-final-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { EditDocumentPrincipalComponent } from './edit-document-principal/edit-document-principal.component';
import { SignaturePhonePadComponent } from './signature-phone-pad/signature-phone-pad.component';

const routes: Routes = [
  {
    path: ':timespam/:signature/:instancewf/:activity/:contract/:context/:index', component: RedirectComponent,
    //101010/558/272/72/6/199/1
  },
  {
    path: ':timespam/:signature/:instancewf/:activity/:contract/:context/:index/:view/view', component: RedirectComponent,
    //101010/558/272/72/6/199/1/1/view
  },
  {
    path: ':timespam/:instancewf/:activity/:contract/:context/:name', component: RedirectComponent,
  },
  {
    path: ':timespam/Document', component: DocumentComponent,
  },
  {
    path: ':timespam/FinalDocument', component: ViewFinalDocumentComponent,
  },
  {
    path: ':timespam/edit/:signature/:instancewf/:activity/:contract/:context/:index', component: EditDocumentComponent,
    //101010/edit/558/272/72/6/199/1
    //101010/edit/3003/1023/77/14/209/1
  },
  {
    path: ':timespam/editPrincipal/:signature/:instancewf/:activity/:contract/:context/:index', component: EditDocumentPrincipalComponent,
  },
  {
    path: ':timespam/phone-pad', component: SignaturePhonePadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDocRoutingModule { }
