import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
public navList: any ;
  constructor() { }
  private initnavList(): void {
   this.navList = [
   {name : 'Home',  value :  'Home', title : 'Home', isSelected : false},
   {name : 'Home1',  value :  'Home1', title : 'Home1', isSelected : false},
   {name : 'Home2',  value :  'Home2', title : 'Home2', isSelected : false},
   {name : 'Home3',  value :  'Home3', title : 'Home3', isSelected : false},
   {name : 'Home4',  value :  'Home4', title : 'Home4', isSelected : false},
   ];
  }
  ngOnInit() {
    this.initnavList();
  }

}
