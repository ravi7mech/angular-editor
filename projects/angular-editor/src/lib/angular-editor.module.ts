import {NgModule} from '@angular/core';
import {AngularEditorComponent} from './angular-editor.component';
import {AngularEditorToolbarComponent} from './angular-editor-toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { MathEditorComponent } from './math-editor/math-editor.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMentionModule } from 'projects/angular-editor/src/lib/ngx-mention/ngx-mention.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot(),NgxMentionModule
  ],
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, MathEditorComponent],
  exports: [AngularEditorComponent, AngularEditorToolbarComponent]
})
export class AngularEditorModule {
}
