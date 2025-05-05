import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataDetailsComponent } from './user-data-details/user-data-details.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



@NgModule({
     declarations: [
          UserDataDetailsComponent
     ],
     imports: [
          CommonModule,
          MatDialogModule
     ],
     providers: [
          {
               provide: MatDialogRef,
               useValue: {}
          },
     ]
})
export class PopupsModule { }
