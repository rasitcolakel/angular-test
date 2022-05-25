import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AltTablo } from './altTablo';
import { AnaTablo } from './anaTablo';

@Injectable()
export class AnaTabloService {
  constructor(private http: HttpClient) {}

  async getAnaTablo() {
    const res = await this.http.get<any>('assets/anaTablo.json').toPromise();
    return <AnaTablo[]>res.data;
  }
  async getAltTablo() {
    const res = await this.http.get<any>('assets/altTablo.json').toPromise();
    return <AltTablo[]>res.data;
  }
}
