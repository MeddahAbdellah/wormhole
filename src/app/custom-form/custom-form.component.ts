import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent implements OnInit {
  @Input() title:string;
  @Input() fields:Array<Object>;
  formData: Object;
  startDate : any;
  minDate : any;
  modal : any;
  parcelsIcons: any;
  @Input() button:any;
  @Input() formName:String;
  @Input() loadCallbackFunction:any;
  constructor(navParams: NavParams) {
    this.startDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
    this.parcelsIcons={"Lettre":"ios-mail","Letter":"ios-mail","Colis":"ios-cube","Parcel":"ios-cube"};
  }
  loadCallback(event){
    console.log('Loading Parcels');
    if(this.loadCallbackFunction!==undefined) this.loadCallbackFunction;
  }
  submitForm(form){
    this.dismissModal();
    this.button.callback(form.value);
  }
  ngOnInit() {}
  dismissModal() {
    this.modal.dismiss({
      'dismissed': true
    });
  }
}
