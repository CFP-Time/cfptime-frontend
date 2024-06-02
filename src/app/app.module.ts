import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CfpdetailsComponent } from './cfpdetails/cfpdetails.component';
import { CfpFormComponent } from './cfp-form/cfp-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConferenceDetailsComponent } from './conference-details/conference-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SponsorDialogComponent } from './sponsor-dialog/sponsor-dialog.component';
import { CfpNotFoundDialogComponent } from './cfp-not-found-dialog/cfp-not-found-dialog.component';
import { SnowComponent } from './snow/snow.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'add', component: CfpFormComponent },
  { path: 'cfps/:id', component: CfpdetailsComponent },
  { path: 'conferences/:id', component: ConferenceDetailsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpcomingComponent,
    CfpdetailsComponent,
    CfpFormComponent,
    ConferenceDetailsComponent,
    SubmitDialogComponent,
    ErrorDialogComponent,
    SponsorDialogComponent,
    CfpNotFoundDialogComponent,
    SnowComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  providers: [SubmitDialogComponent, ErrorDialogComponent, SponsorDialogComponent, CfpNotFoundDialogComponent],
  bootstrap: [AppComponent],
  entryComponents: [CfpFormComponent, SubmitDialogComponent, ErrorDialogComponent, SponsorDialogComponent, CfpNotFoundDialogComponent]
})
export class AppModule { }
