import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DataService } from './data.service';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DataService
  ]
})
export class DashboardModule { }
