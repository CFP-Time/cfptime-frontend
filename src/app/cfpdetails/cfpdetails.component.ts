import { Component, OnInit } from '@angular/core';
import { CfptimeService } from '../cfptime.service';
import { CFPData } from '../home/home.component';
import { ActivatedRoute, Params } from '@angular/router';
import { SponsorDialogComponent } from '../sponsor-dialog/sponsor-dialog.component';
import { CfpNotFoundDialogComponent } from '../cfp-not-found-dialog/cfp-not-found-dialog.component';

@Component({
    selector: 'app-cfpdetails',
    templateUrl: './cfpdetails.component.html',
    styleUrls: ['./cfpdetails.component.scss'],
    standalone: false
})
export class CfpdetailsComponent implements OnInit {

  // Dynamic parameters for this component's route: /example-params/:first/:second
  routeParams: Params;

  // Query parameters found in the URL: /example-params/one/two?query1=one&query2=two
  queryParams: Params;

  constructor(private api: CfptimeService, private activatedRoute: ActivatedRoute, private sponsorDialog: SponsorDialogComponent, private cfpNotFound: CfpNotFoundDialogComponent) {
    this.getRouteParams();
  }

  cfpId: number;
  details: CFPData;

  // Store parameter values on URL changes
  getRouteParams() {

    // Route parameters
    this.activatedRoute.params.subscribe( params => {
        this.routeParams = params;
    });

    // URL query parameters
    this.activatedRoute.queryParams.subscribe( params => {
        this.queryParams = params;
    });
  }

  ngOnInit() {

    this.sponsorDialog.openDialog();

    this.cfpId = this.routeParams.id;
    this.api.getCFPDetails(this.cfpId).subscribe(data => {
      if (!data['website'].includes('http') && data['website'] != 'N\A'){
        data['website'] = 'http://' + data['website'];
      }
      this.details = data;
      console.log(data);
    },
    error => {
      console.log('error');
      this.cfpNotFound.openDialog();
    });
  }
}
