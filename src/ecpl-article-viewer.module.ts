import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcplArticleViewerComponent } from './ecpl-article-viewer.component';
import { HelloWorldComponent } from './hello-world.component';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
  declarations: [HelloWorldComponent, EcplArticleViewerComponent],
  imports: [CommonModule, CKEditorModule],
  exports: [HelloWorldComponent, EcplArticleViewerComponent]
})
export class EcplArticleViewerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcplArticleViewerModule
    };
  }
}
