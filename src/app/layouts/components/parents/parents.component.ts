import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-parents',
     templateUrl: './parents.component.html',
     styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
     public childData: any;

     constructor() { }

     ngOnInit(): void { }

     public getMessageFromChild(data: any) {
          this.childData = data;
     }
}
