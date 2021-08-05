import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularEditorModule} from '../../../angular-editor/src/lib/angular-editor.module';
import { NgxMentionModule } from 'projects/ngx-mention/src/lib/ngx-mention.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    NgxMentionModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
