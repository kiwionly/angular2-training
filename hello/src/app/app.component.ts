import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header = 'lcvojk head ';
  display = 'block';

  count = 0;

  countLogin() {
    console.log(this.count);
    this.count += 1;

    if (this.count === 3) {
      this.display = 'none';
   }
  }
}
