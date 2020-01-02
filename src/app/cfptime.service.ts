import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CFPData } from './home/home.component';
import { identifierModuleUrl } from '@angular/compiler';
import { CfpdetailsComponent } from './cfpdetails/cfpdetails.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CfptimeService {

  url = 'https://api.cfptime.org'
  // url = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getCFPs(): Observable<CFPData[]> {
    var tmpUrl = this.url + '/api/cfps/';
    return this.http.get<CFPData[]>(tmpUrl);
  }

  getUpcomingConferences(): Observable<CFPData[]> {
    console.log('Upcoming');
    var tmpUrl = this.url + '/api/upcoming/';
    return this.http.get<CFPData[]>(tmpUrl);
  }

  getCFPDetails(cfpId: number): Observable<CFPData>{
    var tmpUrl = this.url + '/api/cfps/' + cfpId + '/';
    return this.http.get<CFPData>(tmpUrl);
  }

  getConferenceDetails(cfpId: number): Observable<CFPData>{
    var tmpUrl = this.url + '/api/conferences/' + cfpId + '/';
    return this.http.get<CFPData>(tmpUrl);
  }
}
