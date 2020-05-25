import {Component} from '@angular/core';
import {DocumentationSpec, documentationSpec} from './documentation-entities';

enum DocumentationType {
  API,
  SOURCE_CODE
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  DocumentationType = DocumentationType;
  documentationType = DocumentationType.API;
  documentationSpec = documentationSpec;
  activeSpec: DocumentationSpec = this.documentationSpec[0];

  setDocumentationType(documentationType: DocumentationType) {
    this.documentationType = documentationType;
  }

  changeActiveSpec(spec: DocumentationSpec) {
    this.activeSpec = spec;
  }
}
