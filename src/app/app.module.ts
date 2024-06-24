import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [AppComponent, FileUploadComponent],
  imports: [BrowserModule, AppRoutingModule, NgxFileDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
