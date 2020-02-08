import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  @Input() title:string;
  @Input() fields:Array<Object>;
  startDate : any;
  minDate : any;
  modal : any;
  constructor(navParams: NavParams) {
    this.startDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
  }

  ngOnInit() {
  }
  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }
}
