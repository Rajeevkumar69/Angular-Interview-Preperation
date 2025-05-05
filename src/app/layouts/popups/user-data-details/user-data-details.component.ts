import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
     selector: 'app-user-data-details',
     templateUrl: './user-data-details.component.html',
     styleUrls: ['./user-data-details.component.scss']
})
export class UserDataDetailsComponent implements OnInit {
     public dialougeDetails: any;

     constructor(
          @Inject(MAT_DIALOG_DATA) private DIALOUGE_DATA: any,
          private _dialogRef: MatDialogRef<UserDataDetailsComponent>,
          private _dialog: MatDialog
     ) {
          this.dialougeDetails = DIALOUGE_DATA
     }


     ngOnInit() {

     }

     public closeDialoge() {
          this._dialogRef.close()
     }

}
