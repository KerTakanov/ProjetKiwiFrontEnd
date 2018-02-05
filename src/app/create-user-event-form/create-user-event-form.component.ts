import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {NotificationModel} from '../models/notification';
import {UserEvent} from '../models/userEvent';

@Component({
  selector: 'app-create-user-event-form',
  templateUrl: './create-user-event-form.component.html',
  styleUrls: ['./create-user-event-form.component.scss']
})
export class CreateUserEventFormComponent implements OnInit {
  submitted = false;
  public event: UserEvent = new UserEvent(
    null,
    '',
    '',
    'admin', // owner / todo:
    true,
    new Date(),
    new Date(),
    []
  );

  notifications: NotificationModel[] = [];

  constructor(public eventService: RestService<UserEvent>) {
    this.eventService.config = {
      server: 'http://localhost:8080',
      api: '/',
      endpoint: 'userEvents/',
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
