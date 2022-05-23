import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  async getSidebar() {
    const res = await this.http.get<any>('assets/sidebar.json')
      .toPromise();
    return <TreeNode[]>res.data;
  }

  async getLazyFiles() {
    const res = await this.http.get<any>('assets/files-lazy.json')
      .toPromise();
    return <TreeNode[]>res.data;
  }
}