import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-cfp-form',
  templateUrl: './cfp-form.component.html',
  styleUrls: ['./cfp-form.component.scss']
})
export class CfpFormComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<CfpFormComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}