import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CfptimeService } from '../cfptime.service';
import { CFPData } from '../home/home.component';

@Component({
  selector: 'app-conference-details',
  templateUrl: './conference-details.component.html',
  styleUrls: ['./conference-details.component.scss']
})
export class ConferenceDetailsComponent implements OnInit {

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
    this.api.getConferenceDetails(this.cfpId).subscribe(data => {
      this.details = data;
      console.log(data);
    });
  }


}
