import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../components/header.service';
import { User } from '../customer-list-page/customer-list-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import { IExit } from '../../../../login.guard';

@Component({
  selector: 'app-customer-detail-page',
  templateUrl: './customer-detail-page.component.html',
  styleUrls: ['./customer-detail-page.component.scss']
})
export class CustomerDetailPageComponent implements OnInit, IExit {

  user: User = {};
  color: string;

  constructor(private h: HeaderService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.params.subscribe(x => {
      this.h.getUserDetail(x.id).subscribe(data => {
        this.user = data;
      });
    });

    this.color = this.route.snapshot.queryParamMap.get('color');

    console.log('call ' + this.color + ' '  + id);

    // this.h.getUserDetail(id).subscribe(data => {
    //   this.user = data;
    // });
  }

  after() {
    alert('exit detail');
  }

  get(id: string) {
    this.h.getUserDetail(id).subscribe(data => {
      this.user = data;
    });
  }

}
