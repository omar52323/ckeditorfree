
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectComponent } from './view-doc/redirect/redirect.component';
import { DocumentComponent } from './view-doc/document/document.component';
import { ViewFinalDocumentComponent } from './view-doc//view-final-document/view-final-document.component';
import { EditDocumentComponent } from './view-doc//edit-document/edit-document.component';
import { EditDocumentPrincipalComponent } from './view-doc//edit-document-principal/edit-document-principal.component';
import { SignaturePhonePadComponent } from './view-doc//signature-phone-pad/signature-phone-pad.component';

export const routes: Routes = [
   {
      path: '',
      loadChildren: () => import('./view-doc/view-doc.module').then(m => m.ViewDocModule)
    },
   
 
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
