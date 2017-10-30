import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcplArticleViewerModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, EcplArticleViewerModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
