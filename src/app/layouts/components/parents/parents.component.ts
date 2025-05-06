import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
     selector: 'app-parents',
     templateUrl: './parents.component.html',
     styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
     public childData: any;

     constructor(
          private _dataService: DataService
     ) { }

     ngOnInit(): void {
          this.fetchAPIData();
     }

     public getMessageFromChild(data: any) {
          this.childData = data;
     }

     public fetchAPIData() {
          this._dataService.getData().subscribe({
               next: ((res) => {
                    // console.log(res);

               }),
               error: ((error) => {
                    // console.log(error);

               })
          })
     }
}
