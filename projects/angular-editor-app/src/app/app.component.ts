import {Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import {AngularEditorConfig} from 'angular-editor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Users } from 'projects/angular-editor-app/src/app/Users';

// interface CustomTemplateStructure {
//   id: number;
//   username: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  htmlContent1 = '';
  htmlContent2 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    toolbarPosition: 'bottom',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
    Users = Users;
  // public items = Users;
  // public customSearchItems = Users;
  // public customDenotationItems = Users;
  // public minCharacterItems = Users;
  // public dropUpItems = Users;
  // public customTemplateItems = Users.map((item) => {
  //     return {
  //         username: item.value,
  //         id: item.id,
  //     };
  // });

  // public customSearchNgxMentionConfig: NgxMentionConfig;
  // public customDenotationCharacterConfig: NgxMentionConfig;
  // public minCharactersConfig: NgxMentionConfig;
  // public dropUpConfig: NgxMentionConfig;
  // public customTemplateConfig: NgxMentionConfig<CustomTemplateStructure>;

  // @ViewChild('customTemplate')
  // public customTemplate: TemplateRef<NgTemplateOutlet>;

  constructor(private formBuilder: FormBuilder,) {
  //   this.customSearchNgxMentionConfig = {
  //     disableSearch: true,
  // };

  // this.customDenotationCharacterConfig = {
  //     denotationCharacter: '$',
  // };

  // this.minCharactersConfig = {
  //     minimalCharacters: 3,
  // };

  // this.dropUpConfig = {
  //     dropUp: true,
  // };

  // this.customTemplateConfig = {
  //     formatSelected: (item) => {
  //         return item.username;
  //     },
  // };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
    console.log(this.htmlContent1);
  }

  onChange(event) {
    console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(event) {
    console.warn(this.form.value);
  }

//   public onCustomSearchMentionSearch($event: string) {
//     this.customSearchItems = this.items.filter((item: NgxMention) => {
//         return item.value.toLowerCase().includes($event.toLowerCase());
//     });
// }

// public onMinCharacterSearchMentionSearch($event: string) {
//     this.minCharacterItems = this.items.filter((item: NgxMention) => {
//         return item.value.toLowerCase().includes($event.toLowerCase());
//     });
// }
}
