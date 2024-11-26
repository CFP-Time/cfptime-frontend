import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-cfp-not-found-dialog',
    templateUrl: './cfp-not-found-dialog.component.html',
    styleUrls: ['./cfp-not-found-dialog.component.scss'],
    standalone: false
})
export class CfpNotFoundDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CfpNotFoundDialogComponent, {
      width: '30%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.href = '/';
    });
  }

  ngOnInit() {
  }

}
