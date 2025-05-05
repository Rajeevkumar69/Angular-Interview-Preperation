import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutsComponent,
          children: [
               {
                    path: '',
                    component: DashboardComponent
               },
               {
                    path: 'dashboard',
                    component: DashboardComponent
               },
               {
                    path: 'user/data',
                    component: UserDataComponent
               },
               {
                    path: 'user/form',
                    component: UserFormComponent
               },
               {
                    path: 'widget',
                    component: WidgetComponent
               },
               {
                    path: 'parent',
                    component: ParentsComponent
               },
               {
                    path: 'child',
                    component: ChildComponent
               },
               {
                    path: '**',
                    component: LayoutsComponent,
                    pathMatch: 'full'
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule { }
