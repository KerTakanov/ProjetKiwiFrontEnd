import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './rest.service';
import { EventComponent } from './event/event.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
