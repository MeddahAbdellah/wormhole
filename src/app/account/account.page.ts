import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  fields: Array<Object>;
  keys:any;
  constructor() { }

  ngOnInit() {
    this.fields={Name:"Daoud",Surname:"Chekebkeb",Status:"Postman",Review:"4.9/5",AccountBalance:"221.23$"}
    this.keys = Object.keys(this.fields);
  }

}
