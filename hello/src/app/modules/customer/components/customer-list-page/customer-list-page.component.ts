import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../components/header.service';
import { IExit } from '../../../../login.guard';

export interface User {
  name: string;
  username: string;
  email: string;
  address: string;
  suite: string;
  city: string;
}

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss']
})
export class CustomerListPageComponent implements OnInit, IExit {

  list: User[];

  constructor(private h: HeaderService) { }

  ngOnInit() {
    this.h.getUser().subscribe(data => {
      this.list = data;
    });
  }

  after() {
    alert('exit list');
  }

}
