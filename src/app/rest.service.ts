import { Injectable } from '@angular/core';
import {ServiceConfig} from './models/service_config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestService<T> {
  public config: ServiceConfig;

  constructor(protected http: HttpClient) { }

  public getAll(): Observable<T[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .get<T[]>(this.config.server + this.config.api + this.config.endpoint, {headers: headers});
  }

  public getParam(param: string, value: string): Observable<T[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .get<T[]>(this.config.server + this.config.api + this.config.endpoint + param + '/' + value, {headers: headers});
  }

  public getOne(id: string): Observable<T> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .get<T>(this.config.server + this.config.api + this.config.endpoint + id, {headers: headers});
  }

  public create(data: T) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    console.log('Posting to ' + this.config.server + this.config.api + this.config.endpoint);

    return this.http
      .post(this.config.server + this.config.api + this.config.endpoint, data, {headers: headers});
  }

  public update(data: T) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .put(this.config.server + this.config.api + this.config.endpoint + (data as any).id, data, {headers: headers});
  }

  public delete(id: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(this.config.username + ':' + this.config.password));
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .delete(this.config.server + this.config.api + this.config.endpoint + id, {headers: headers});
  }
}
