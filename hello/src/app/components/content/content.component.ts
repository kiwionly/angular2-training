import { Component, OnInit } from '@angular/core';
import { HeaderService, DataType } from '../header.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts = [];
  data: DataType[];

  private ser: HeaderService;

  constructor(p: HeaderService) {
    this.ser = p;
  }

  ngOnInit() {
    // console.log(this.ser.getAll());
    this.posts = this.ser.getAll();

    this.ser.get().subscribe(data => {
      this.data = data;
    });
  }

}
