import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-article-viewer',
  template: `
  <a href="javascript:void(0)" (click)="showModal()" id="article-file-{{id}}">
    <img src="/assets/icons/article.png" alt="article File">
  </a>

  <div class="article-modal" *ngIf="showModalWindow" id="article-file-{{id}}">
      <div class="modal-dialog">
          <div class="modal-header">
              <img src="/assets/icons/article.png" alt="article File" class="article-icon-header pull-left">
              <h3 class="pull-left">{{articleName}}</h3> <button (click)="hideModal()" class="pull-right">x</button>
          </div>
          <div class="modal-body" id="article-pop-{{id}}">
              <ck-editor name="editor1" [readonly]="readOnly" [(ngModel)]="articleSrc" skin="moono-lisa" lang="en" [fullPage]="true" [config]="ediConfig"></ck-editor>
          </div>
      </div>
  </div>
  `,
  styles: [
    `
    .article-modal {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 10001;
    padding: 15px;
    }

    .modal-dialog {
        background-color: #fff;
        border: 1px solid #f2f2f2;
        margin-top: 0px;
        margin-bottom: 0px;
        width: 100%;
        height: 100%;
    }

    .modal-header {
        height: 6%;
        padding: 5px;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        padding: 5px;
    }

    button.pull-right {
        padding: 0 12px;
        background: none;
        outline: none;
        border: none;
        font-size: 25px;
        position: absolute;
        top: 0;
        right: 0;
        border-left: 1px solid #dedede;
        color: #dedede;
    }

    .modal-body {
        width: 100%;
        height: 94%;
        padding: 0px;
        background: #dedede;
    }

    /deep/ .cke_reset,
    /deep/ .cke_contents {
        height: 100% !important;
    }

    .article-icon-header {
        width: 20px;
        height: auto;
    }
    `
  ]
})
export class EcplArticleViewerComponent implements OnInit {
  @Input() id: string;
  @Input() articleSrc: string = 'Test content';
  @Input() articleName: string;
  showModalWindow: boolean;

  // Editor Config
  readOnly: boolean = false;
  ediConfig: any = {
    toolbar: [
      {
        name: 'document',
        items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates']
      },
      {
        name: 'clipboard',
        items: [
          'Cut',
          'Copy',
          'Paste',
          'PasteText',
          'PasteFromWord',
          '-',
          'Undo',
          'Redo'
        ]
      },
      '/',
      { name: 'basicstyles', items: ['Bold', 'Italic'] }
    ]
  };

  constructor(private renderer: Renderer2) {}

  showModal() {
    this.showModalWindow = true;
    this.renderer.addClass(document.body, 'modal-open');
  }

  hideModal() {
    this.showModalWindow = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  ngOnInit() {}
}
