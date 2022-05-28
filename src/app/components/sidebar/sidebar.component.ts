import { Component, OnInit } from '@angular/core';
import { SidebarItem } from "./sidebar-item/sidebar-item.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarItemData: SidebarItem[] = [];



  constructor() {
    this.sidebarItemData = [
      {
        text:'All Tasks'
      },
      {
        text:'Due Today'
      },
      {
        text:'Important'
      }

    ]
  }

  ngOnInit(): void {
  }

}
