import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  counter = new EventEmitter();

  header: 'facebok login';
  color = 'red';
  yellow = '#808080';

  credential = {
    email : '',
    password : ''
  };

  c = 0;

  constructor() { }

  ngOnInit() {
  }

  login() {

    this.counter.emit();

    this.c += 1;
    if (this.c > 3) {
      alert('fail liao la');
      return;
    }

    if (this.credential.email === 'x' && this.credential.password === 'x') {
      alert('login d');
    }

  }

}
