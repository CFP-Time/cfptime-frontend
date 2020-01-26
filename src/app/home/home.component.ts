import { Component, OnInit, ViewChild } from '@angular/core';
import { CfptimeService } from '../cfptime.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CfpFormComponent } from '../cfp-form/cfp-form.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SponsorDialogComponent } from '../sponsor-dialog/sponsor-dialog.component';

export interface CFPData {
  id: number;
  name: string;
  city: string;
  country: string;
  cfp_deadline: Date;
  conf_start_date: Date;
  province: string;
  twitter: string;
  website: string;
  code_of_conduct: string;
  cfp_details: string;
  speaker_benefits: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cfps: CFPData[];
  dataSource: any;
  displayedColumns: string[] = ['name', 'city', 'country', 'cfp_deadline', 'conf_start_date']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private api: CfptimeService, private sponsorDialog: SponsorDialogComponent) {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {

    // localStorage.clear();
    this.sponsorDialog.openDialog();

    this.api.getCFPs().subscribe(data => {
      this.cfps = data;
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

  openDialog() {
    window.location.href = '/add';
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // this.dialog.open(CfpFormComponent, dialogConfig);
}

}
