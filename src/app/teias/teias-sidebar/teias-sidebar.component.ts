import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from './nodeService';

@Component({
  selector: 'app-teias-sidebar',
  templateUrl: './teias-sidebar.component.html',
  styleUrls: ['./teias-sidebar.component.css']
})



export class TeiasSidebarComponent implements OnInit {
  sidebar: TreeNode[] = [];
  selectedFile!: TreeNode | null;
  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getSidebar().then(data => this.sidebar = data).then(() => {
      let envanter = this.sidebar.find(x => x.label === "Envanter Kayıt");
      if (envanter) {
        this.selectedFile = envanter;
      }

    }
    );
  }
  nodeSelect(event: any) {
    this.selectedFile = null;
    this.selectedFile = event.node;

    console.log("nodeSelect", event);
    //event.node = selected node
  }
  nodeUnselect(event: TreeNode) {
    this.selectedFile = null;
    console.log("nodeUnselect", event);
    //event.node = selected node
  }
}
