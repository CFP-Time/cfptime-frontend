import { Component, OnInit, ViewChild } from '@angular/core';
import { CfptimeService } from '../cfptime.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface CFPData {
  id: number;
  name: string;
  city: string;
}

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  cfps: CFPData[];
  dataSource: any;
  displayedColumns: string[] = ['name', 'city', 'country', 'conf_start_date']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: CfptimeService) {
    console.log('starts here')
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.api.getUpcomingConferences().subscribe(data => {
      this.cfps = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}