import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Loading Data');
  }
  intrested(state){
    console.log(state);
  }

}
