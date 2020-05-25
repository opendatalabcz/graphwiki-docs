import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {DocumentationSpec} from '../documentation-entities';

@Component({
  selector: 'app-kdoc',
  template: `
    <iframe #iframe class="w-100"
            frameborder="0"
            scrolling="no"
            [src]="activeSpec.kdocUrl | safe"
            (load)="resizeIframe()"
            style="margin: -50px"></iframe>
  `
})
export class KdocComponent {

  @Input()
  activeSpec: DocumentationSpec;

  @ViewChild('iframe')
  iframe: ElementRef;

  resizeIframe() {
    if (this.iframe) {
      this.iframe.nativeElement.style.height = this.iframe.nativeElement.contentWindow.document.documentElement.scrollHeight + 'px';
    }
  }
}
