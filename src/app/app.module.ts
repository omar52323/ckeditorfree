import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { AppMaterialModule } from './shared/angular-material/app-material.module';
//import { WebcamModule } from 'ngx-webcam';
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import { QRCodeModule } from 'angularx-qrcode';
import { TranslateModule, TranslateService,TranslateLoader } from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json?cb=' + new Date().getTime());
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //AppMaterialModule,
    //WebcamModule,
    //CKEditorModule,
   // QRCodeModule
    
    
    
  ],
  providers: [TranslateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
