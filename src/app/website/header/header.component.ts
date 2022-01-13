import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
}
