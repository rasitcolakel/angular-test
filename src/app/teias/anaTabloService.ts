import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnaTabloService {
  constructor(private http: HttpClient) {}
  baseUrl: string =
    process.env['NODE_ENV'] === 'production'
      ? 'https://angular-demo-json.herokuapp.com/'
      : 'http://localhost:3000/';

  async getAnaTablo(params?: any) {
    const res = await this.http
      .post(this.baseUrl + 'ana', {
        ...params,
      })
      .toPromise();
    return res;
  }
  async getAltTablo(params?: any) {
    const res = await this.http.post(this.baseUrl + 'alt', params).toPromise();
    return res;
  }
}
