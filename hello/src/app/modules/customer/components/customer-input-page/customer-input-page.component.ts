import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-input-page',
  templateUrl: './customer-input-page.component.html',
  styleUrls: ['./customer-input-page.component.scss']
})
export class CustomerInputPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form: any) {
    console.log(form);
  }

}
