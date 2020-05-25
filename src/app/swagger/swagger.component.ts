import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import SwaggerUI from 'swagger-ui';
import {DocumentationSpec} from '../documentation-entities';

@Component({
  selector: 'app-swagger',
  template: `
    <div class="swagger-container" style="margin-top: -50px"></div>
  `
})
export class SwaggerComponent implements OnChanges {

  @Input()
  activeSpec: DocumentationSpec;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.activeSpec) {
      this.showApiSpec();
    }
  }

  showApiSpec() {
    SwaggerUI({
      url: this.activeSpec.apiUrl,
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }
}
