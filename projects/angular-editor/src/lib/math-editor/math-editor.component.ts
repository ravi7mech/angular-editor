import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as iink from 'iink-js';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'math-editor',
  templateUrl: './math-editor.component.html',
  styleUrls: ['./math-editor.component.scss']
})
export class MathEditorComponent implements AfterViewInit, OnDestroy {
  constructor(public bsModalRef: BsModalRef) { }
  @ViewChild("tref", { read: ElementRef }) domEditor: ElementRef;
  editorElement;

  ngAfterViewInit(): void {
    this.editorElement = iink.register(this.domEditor.nativeElement, {
      recognitionParams: {
        type: 'MATH',
        protocol: 'WEBSOCKET',
        server: {
          applicationKey: '',
          hmacKey: ''
        },
        iink: {
          math: {
            mimeTypes: ['application/x-latex', 'application/vnd.myscript.jiix']
          },
          export: {
            jiix: {
              strokes: true
            }
          }
        }
      }
    });

    this.domEditor.nativeElement.addEventListener('exported', this.exportMyScript.bind(this));

  }
  exportMyScript(evt: any): void {
    let exports = evt.detail.exports;
    if (exports && exports['application/x-latex']) {
      //  katex.render(cleanLatex(exports['application/x-latex']), resultElement);
      //  resultElement.innerHTML = '<span>' + exports['application/x-latex'] + '</span>';
    } else if (exports && exports['application/mathml+xml']) {
      // resultElement.innerText = exports['application/mathml+xml'];
    } else if (exports && exports['application/mathofficeXML']) {
      //  resultElement.innerText = exports['application/mathofficeXML'];
    } else {
      //resultElement.innerHTML = '';
    }
  }
  ngOnDestroy(): void {
    this.editorElement.close();
  }
  clear(event: Event) {
    this.editorElement.editor.clear();
  }
  convert(event: Event) {
    this.editorElement.editor.convert();
  }
  undo(event: Event) {
    this.editorElement.editor.undo();
  }
  redo(event: Event) {
    this.editorElement.editor.redo();
  }
  insert(event: Event) {

  }
  cleanLatex(latexExport) {
    if (latexExport.includes('\\\\')) {
      const steps = '\\begin{align*}' + latexExport + '\\end{align*}';
      return steps.replace("\\begin{aligned}", "")
        .replace("\\end{aligned}", "")
        .replace(new RegExp("(align.{1})", "g"), "aligned");
    }
    return latexExport
      .replace(new RegExp("(align.{1})", "g"), "aligned");
  }
}