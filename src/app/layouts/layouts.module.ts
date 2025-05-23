import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as echarts from 'echarts';
import { PopupsModule } from './popups/popups.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HilightsDirective } from '../shared/directives/hilights.directive';
import { WidgetComponent } from './components/widget/widget.component';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildComponent } from './components/child/child.component';



@NgModule({
     declarations: [
          LayoutsComponent,
          UserDataComponent,
          UserFormComponent,
          DashboardComponent,
          HilightsDirective,
          WidgetComponent,
          ParentsComponent,
          ChildComponent
     ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          FormsModule,
          ReactiveFormsModule,
          NgxEchartsModule.forRoot({ echarts }),
          MatPaginatorModule,
          MatTableModule,
          MatButtonModule,
          MatIconModule,
          MatMenuModule,
          PopupsModule,
          MatDialogModule
     ],
     exports: [
          WidgetComponent,
          ParentsComponent,
          ChildComponent
     ],
     providers: [
          {
               provide: MatDialogRef,
               useValue: {}
          },
     ]
})
export class LayoutsModule { }
