import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationModel} from '../models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input()
  notifications: NotificationModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  public closeAlert(alert: NotificationModel) {
    const index: number = this.notifications.indexOf(alert);
    this.notifications.splice(index, 1);
  }
}
