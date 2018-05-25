import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-reactive-form',
  templateUrl: './customer-reactive-form.component.html',
  styleUrls: ['./customer-reactive-form.component.scss']
})
export class CustomerReactiveFormComponent implements OnInit {

  myform;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

      this.myform = this.fb.group({
          name: [''],
          address: this.fb.group({
            line: [''],
            postcode: ['']
          })
      });


      this.myform.valueChanges.subscribe(x => {
        console.log(x);
      });
  }

  submit(isValid: boolean, val) {
    console.log(isValid, val);
  }

}
