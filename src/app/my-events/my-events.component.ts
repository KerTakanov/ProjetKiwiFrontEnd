import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {UserEvent} from '../models/userEvent';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  public myEvents: UserEvent[] = [];

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
    this.eventService.getParam('owner', 'admin').subscribe(data => {
      this.myEvents = data;
    });
  }

}
