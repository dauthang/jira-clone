import {Component, OnInit} from '@angular/core';

const listMenu = [
  {label: "Dashboards", child: [], isDisplay: true},
  {label: "Projects", child: [], isDisplay: true},
  {label: "Issues", child: [], isDisplay: true},
  {label: "Tempo", child: [], isDisplay: true},
  {label: "Boards", child: [], isDisplay: true},
  {label: "BigGantt", child: [], isDisplay: true},
]

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  listMenu = listMenu;

  constructor() {
  }

  ngOnInit(): void {
  }
}
