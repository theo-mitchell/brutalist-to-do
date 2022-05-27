import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() itemData: SidebarItem | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}

export interface SidebarItem {
  text: string;
  // icon: string;
  // route: string;
}
