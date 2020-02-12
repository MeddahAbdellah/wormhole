import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent implements OnInit {
  @Input() fields: Array<Object>;
  @Input() modalName:String;
  @Input() button:any;
  keys:any;
  modal:any;
  constructor(navParams: NavParams) {
  }

  ngOnInit() {
    this.keys = Object.keys(this.fields);
  }
  submitModal(id){
    this.dismissModal();
    this.button.callback(id);
  }
  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }
  filterItemsOfType(type){
    return this.keys.filter(x => !x.includes(type));
  }
}
