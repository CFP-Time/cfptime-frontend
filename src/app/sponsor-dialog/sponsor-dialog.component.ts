import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
        //width: '30%',
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

  _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // a and b are javascript Date objects
  dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }  

  dialogHasBeenShown() {
    var now = new Date(Date.now());

    if (localStorage.getItem('SponsorDialog') == null) {
      localStorage.setItem('SponsorDialog', 'yes');
      localStorage.setItem('date', now.toString());
      return false;
    }
    
    console.log(localStorage.getItem('date'))
    // have we already stored the date for the pop up show?
    var stringDate = localStorage.getItem('date');
    if (stringDate == null) {
      localStorage.setItem('date', now.toString());
      stringDate = new Date(Date.now()).toString();
    }

    var date = new Date(stringDate);
    var dateDiff = this.dateDiffInDays(date, now)
    console.log("Diff is : ", dateDiff);
    if (dateDiff > 5) {
      localStorage.setItem('date', now.toString());
      return false;
    } 
    return true;
  }

  ngOnInit() {
  }
}
