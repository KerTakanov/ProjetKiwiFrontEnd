import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public events: Event[] = [];

  constructor(public eventService: RestService<Event>) {
    this.eventService.config = {
      server: 'http://localhost:8080',
      api: '/',
      endpoint: 'events/',
      username: 'admin',
      password: 'pass'
    };
  }

  ngOnInit() {
    this.eventService.getAll().subscribe((data) => this.events = data);
  }

}
