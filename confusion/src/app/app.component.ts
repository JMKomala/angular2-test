import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`, //for inline templating
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works';
}
