import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
     selector: 'app-child',
     templateUrl: './child.component.html',
     styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
     @Input() public parentData: string | null = null;

     @Output() public outputData = new EventEmitter<any>();

     constructor() { }

     ngOnInit(): void { }

     public sendData() {
          const obj = {
               name: 'Rajeev',
               age: 24
          };
          this.outputData.emit(obj);
     }
}
