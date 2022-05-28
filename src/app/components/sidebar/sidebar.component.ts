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
        text:'All Tasks',
        route:''
      },
      {
        text:'Due Today',
        route:'due-today'
      },
      {
        text:'Important',
        route:'important'
      }

    ]
  }

  ngOnInit(): void {
  }

}
