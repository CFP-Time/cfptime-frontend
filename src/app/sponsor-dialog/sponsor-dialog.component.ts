import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sponsor-dialog',
  templateUrl: './sponsor-dialog.component.html',
  styleUrls: ['./sponsor-dialog.component.scss']
})
export class SponsorDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    if (this.dialogHasBeenShown()) {
      return;
    } else {
      const dialogRef = this.dialog.open(SponsorDialogComponent, {
        width: '30%',
        data: {}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });  
    }
  }

  sponsorMe() {
    var win = window.open('https://ko-fi.com/cfptime', '_blank');
    win.focus();
  }

  dialogHasBeenShown() {
    console.log(localStorage.getItem('SponsorDialog'));
    if (localStorage.getItem('SponsorDialog') == null) {
      localStorage.setItem('SponsorDialog', 'yes');
      console.log('false but set it to yes')
      return false;
    } else {
      // has already been shown
      console.log('true')
      return true;
    }
  }

  ngOnInit() {
  }
}
