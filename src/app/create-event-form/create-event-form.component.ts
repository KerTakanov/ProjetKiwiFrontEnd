import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Event} from '../models/event';
import {NotificationModel} from '../models/notification';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {
  submitted = false;
  event: Event = new Event(
    null,
    '',
    '',
    ''
  );

  notifications: NotificationModel[] = [];

  constructor(public eventService: RestService<Event>) {
    this.eventService.config = {
      server: 'http://localhost:8080',
      api: '/',
      endpoint: 'events/',
      username: 'admin',
      password: 'admin'
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    // Si on a déjà créé l'event on sort
    if (this.submitted) {
      return;
    }
    this.submitted = true;
    this.eventService.create(this.event).subscribe(() => {
      console.log('Evenement créé');
      this.notifications.push(new NotificationModel('success', 'Evenement créé avec succès !'));
    });
  }

}
