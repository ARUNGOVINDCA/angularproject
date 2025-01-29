import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
courses: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  greeting: string = 'Welcome to the Increment Button Demo!';
  count: number = 0;

  increment() {
    this.count++;
}
}

