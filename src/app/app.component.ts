import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('CFP Time - Indexing Security Call For Papers for Conferences and Workshops');
  }
}
