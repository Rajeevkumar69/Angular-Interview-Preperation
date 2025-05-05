import {
     AfterViewInit,
     Component,
     EventEmitter,
     Input,
     OnChanges,
     OnDestroy,
     OnInit,
     Output,
     SimpleChanges
} from '@angular/core';

@Component({
     selector: 'app-widget',
     templateUrl: './widget.component.html',
     styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
     @Input() public data: any;
     @Input() public userDataComponentData: string | null = null;
     @Output() public messageEvent = new EventEmitter<any>();

     public intervalId: any;

     ngOnInit() {
          this.startPolling();
     }

     ngOnChanges(changes: SimpleChanges) {
          if (changes['data']) {
               // Handle new data if needed
          }
     }

     ngOnDestroy() {
          clearInterval(this.intervalId);
     }

     ngAfterViewInit(): void { }

     startPolling() {
          this.intervalId = setInterval(() => {

          }, 1000);
     }
}
