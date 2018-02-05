import {User} from './user';

export class UserEvent {
  public constructor(
              public id: string,
              public title: string,
              public description: string,
              public owner: string,
              public public_event: boolean,
              public date_begin: Date,
              public date_end: Date,
              public suscribed_users: User[]) {

  }
}
