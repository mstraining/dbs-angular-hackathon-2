import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { ICustomer } from '../shared/models/customer';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css']
})
export class YourAccountComponent implements OnInit {

  customer: ICustomer;

  constructor(private loginservice: LoginServiceService) { }

  ngOnInit() {
    this.loginservice.loginUser().subscribe((response: ICustomer) => {
      this.customer = response;
      console.log(this.customer.customerId);
      console.log(this.customer.address);
    }, error => {
      console.log(error);
    });
  }
}
