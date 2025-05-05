import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/shared/interfaces/common.interface';
import { APIService } from 'src/app/shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { UserDataDetailsComponent } from '../../popups/user-data-details/user-data-details.component';

@Component({
     selector: 'app-user-data',
     templateUrl: './user-data.component.html',
     styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, AfterViewInit {
     public userData = new MatTableDataSource<PeriodicElement>();
     displayedColumns: string[] = ['id', 'name', 'username', 'email', 'menu'];
     public widgetOptions = ['Weather', 'News', 'Stock'];
     public selectedWidgetData: any = null;

     @ViewChild(MatPaginator) paginator!: MatPaginator;

     constructor(private _APIService: APIService,
          private _dialog: MatDialog,
          private _scrollStrategyOptions: ScrollStrategyOptions,
     ) { }

     ngOnInit(): void {
          this.getUserData();
     }

     ngAfterViewInit(): void {
          this.userData.paginator = this.paginator;
     }

     public getUserData(): void {
          this._APIService.getUserData().subscribe({
               next: (res: PeriodicElement[]) => {
                    if (res) {
                         this.userData.data = res;
                    }
               },
               error: (error) => {
                    console.error('Failed to fetch user data:', error);
               }
          });
     }

     public openUserDataDetailsPopup(param: any) {
          const enterAnimationDuration: string = '300ms';
          const exitAnimationDuration: string = '300ms';
          this._dialog
               .open(UserDataDetailsComponent, {
                    enterAnimationDuration,
                    exitAnimationDuration,
                    maxWidth: '100vw',
                    maxHeight: '95vh',
                    panelClass: 'view-details-dialogue',
                    disableClose: true,
                    data: param,
                    scrollStrategy: this._scrollStrategyOptions.block(),
               })
               .afterClosed()
               .subscribe((response) => {
                    this.getUserData();
               });
     }

     public selectWidget(event: Event) {
          const target = event.target as HTMLSelectElement;
          const name = target.value;
          const date = new Date();
          const formattedDate = new Intl.DateTimeFormat('en-US').format(date);
          this.selectedWidgetData = { name, time: formattedDate };
     }


     public goToBack() {
          history.back()
     }
}
