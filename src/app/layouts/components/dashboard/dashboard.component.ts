import { Component, OnInit } from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from 'src/app/shared/constants/global-constant';

@Component({
     selector: 'app-dashboard',
     templateUrl: './dashboard.component.html',
     styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
     homeCount = 0;
     userDataCount = 0;
     userFormCount = 0;
     public options!: EChartsCoreOption;
     theme!: string | ThemeOption;
     coolTheme = CoolTheme;
     optionsTwo: EChartsCoreOption = {
          title: {
               left: '50%',
               text: 'Nightingale Rose Diagram',
               subtext: 'Mocking Data',
               textAlign: 'center',
          },
          tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
               align: 'auto',
               bottom: 10,
               data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
          },
          calculable: true,
          series: [
               {
                    name: 'area',
                    type: 'pie',
                    radius: [30, 110],
                    roseType: 'area',
                    data: [
                         { value: 10, name: 'rose1' },
                         { value: 5, name: 'rose2' },
                         { value: 15, name: 'rose3' },
                         { value: 25, name: 'rose4' },
                         { value: 20, name: 'rose5' },
                         { value: 35, name: 'rose6' },
                         { value: 30, name: 'rose7' },
                         { value: 40, name: 'rose8' },
                    ],
               },
          ],
     };


     constructor() {

     }

     ngOnInit(): void {
          this.animateCount('homeCount', 32000, 50);
          this.animateCount('userDataCount', 5000, 30);
          this.animateCount('userFormCount', 65000, 70);
          const xAxisData = [];
          const data1 = [];
          const data2 = [];

          for (let i = 0; i < 100; i++) {
               xAxisData.push('category' + i);
               data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
               data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
          }

          this.options = {
               legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
               },
               tooltip: {},
               xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                         show: false,
                    },
               },
               yAxis: {},
               series: [
                    {
                         name: 'bar',
                         type: 'bar',
                         data: data1,
                         animationDelay: (idx: number) => idx * 10,
                    },
                    {
                         name: 'bar2',
                         type: 'bar',
                         data: data2,
                         animationDelay: (idx: number) => idx * 10 + 100,
                    },
               ],
               animationEasing: 'elasticOut',
               animationDelayUpdate: idx => idx * 5,
          };
     }

     public animateCount(property: 'homeCount' | 'userDataCount' | 'userFormCount', target: number, speed: number) {
          const interval = setInterval(() => {
               if (this[property] < target) {
                    this[property] += Math.ceil(target / speed);
               } else {
                    this[property] = target;
                    clearInterval(interval);
               }
          }, 30);
     }
}
