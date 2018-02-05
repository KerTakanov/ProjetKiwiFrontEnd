import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './rest.service';
import { EventComponent } from './event/event.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateEventFormComponent } from './create-event-form/create-event-form.component';
import {FormsModule} from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { CreateUserEventComponent } from './create-user-event/create-user-event.component';
import { CreateUserEventFormComponent } from './create-user-event-form/create-user-event-form.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'createEvent', component: CreateEventComponent },
  { path: 'createUserEvent', component: CreateUserEventComponent },
  { path: 'myEvents', component: MyEventsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    CreateEventComponent,
    CreateEventFormComponent,
    NotificationComponent,
    CreateUserEventComponent,
    CreateUserEventFormComponent,
    MyEventsComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
