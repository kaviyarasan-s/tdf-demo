import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceCheckListComponent } from './service-check-list/service-check-list.component';
import { ServiceCheckListDialogComponent } from './service-check-list-dialog/service-check-list-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const route: Routes = [
  { path: "", component: AppComponent, redirectTo: '', pathMatch: 'full' },
  { path: "service", component: ServiceCheckListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceCheckListComponent,
    ServiceCheckListDialogComponent,
    SimpleFormComponent,
    FileUploadComponent,
    DashboardComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    NgxChartsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
