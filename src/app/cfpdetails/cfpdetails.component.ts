import { Component, OnInit } from '@angular/core';
import { CfptimeService } from '../cfptime.service';
import { CFPData } from '../home/home.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cfpdetails',
  templateUrl: './cfpdetails.component.html',
  styleUrls: ['./cfpdetails.component.scss']
})
export class CfpdetailsComponent implements OnInit {

  // Dynamic parameters for this component's route: /example-params/:first/:second
  routeParams: Params;

  // Query parameters found in the URL: /example-params/one/two?query1=one&query2=two
  queryParams: Params;

  constructor(private api: CfptimeService, private activatedRoute: ActivatedRoute) {
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
    this.cfpId = this.routeParams.id;
    this.api.getCFPDetails(this.cfpId).subscribe(data => {
      this.details = data;
      console.log(data);
    });
  }
}
