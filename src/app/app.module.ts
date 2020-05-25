import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SwaggerComponent} from './swagger/swagger.component';
import {KdocComponent} from './kdoc/kdoc.component';
import {SafePipe} from './kdoc/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwaggerComponent,
    KdocComponent,
    SafePipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
