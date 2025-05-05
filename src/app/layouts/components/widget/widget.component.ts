import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
     selector: 'app-widget',
     templateUrl: './widget.component.html',
     styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
     @Input() public data: any;
     public intervalId: any;

     ngOnInit() {
          this.startPolling();
     }

     ngOnChanges(changes: SimpleChanges) {
          if (changes['data']) {

          }
     }

     ngOnDestroy() {
          clearInterval(this.intervalId);
     }

     startPolling() {
          this.intervalId = setInterval(() => {
          }, 1000);
     }

     ngAfterViewInit(): void {

     }

}
