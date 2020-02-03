import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatCardModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'add', component: CfpFormComponent },
  { path: 'cfps/:id', component: CfpdetailsComponent },
  { path: 'conferences/:id', component: ConferenceDetailsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**',
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
    CfpNotFoundDialogComponent
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
