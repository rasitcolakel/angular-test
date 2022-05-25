import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnaTabloService {
  constructor(private http: HttpClient) {}

  async getAnaTablo(params: any) {
    console.log('getAnaTablo', params);
    const res = await this.http
      .post('http://localhost:4201/ana', {
        ...params,
      })
      .toPromise();
    return res;
  }
  async getAltTablo(params: any) {
    const res = await this.http
      .post('http://localhost:4201/alt', params)
      .toPromise();
    return res;
  }
}
