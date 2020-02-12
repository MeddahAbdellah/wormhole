import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  fields: any;
  keys:any;
  constructor() { }

  ngOnInit() {
    this.fields={Name:"Daoud Chekebkeb",Status:"Trusted",Email:"Daoud.Chekebkeb@gmail.com",Phone:"+33068528565"}
    this.keys = Object.keys(this.fields);
  }

}
