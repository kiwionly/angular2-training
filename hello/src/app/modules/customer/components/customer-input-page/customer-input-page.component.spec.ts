import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInputPageComponent } from './customer-input-page.component';

describe('CustomerInputPageComponent', () => {
  let component: CustomerInputPageComponent;
  let fixture: ComponentFixture<CustomerInputPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInputPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
