import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-article-viewer',
  templateUrl: '/src/ecpl-article-viewer.component.html',
  styleUrls: ['../src/ecpl-article-viewer.component.css']
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
