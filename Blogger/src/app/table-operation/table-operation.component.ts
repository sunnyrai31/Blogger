import { Component, OnInit } from '@angular/core';
import { Tabledata, TableHeader } from '../core/table.ds';


@Component({
  selector: 'app-table-operation',
  templateUrl: './table-operation.component.html',
  styleUrls: ['./table-operation.component.css']
})
export class TableOperationComponent implements OnInit {
 public tableData = {}  as Tabledata;
 public tableHeader = {}  as TableHeader;
 private initTableData (): void {
  const data = [
    {
    'name': 'sunny',
    'address': 'Bangalore',
    'mob': '9643478959',
    'designation': 'Software Engineer',
    'salary': 'DontShare',
    'experience': '3.2'
    },
    {
    'name': 'sunny1',
    'address': 'Bangalore1',
    'mob': '9643478959',
    'designation': 'Software Engineer1',
    'salary': 'DontShare1',
    'experience': '3.21'
    },
    {
    'name': 'sunny2',
    'address': 'Bangalore2',
    'mob': '9643478959',
    'designation': 'Software Engineer2',
    'salary': 'DontShare2',
    'experience': '3.22'
    },
    {
    'name': 'sunny3',
    'address': 'Bangalore3',
    'mob': '9643478959',
    'designation': 'Software Engineer3',
    'salary': 'DontShare3',
    'experience': '3.23'
    }
  ];
  this.tableData.data = data;
  const _tableHeader = {
    sno: 'sno',
    name: 'name',
    address: 'address',
    mob: 'mob',
    designation: 'designation',
    salary: 'salary',
    experience: 'experience',
  };
  this.tableHeader = _tableHeader;
 }
  constructor() {
  }

  ngOnInit() {
    this.initTableData();
  }

}
