import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent implements OnInit {
  @Input() fields: Array<Object>;
  keys:any;
  constructor(navParams: NavParams) {
  }

  ngOnInit() {
    this.keys = Object.keys(this.fields);
  }
  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }
}
