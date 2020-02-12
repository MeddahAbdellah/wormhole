import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-pickups',
  templateUrl: './pickups.page.html',
  styleUrls: ['./pickups.page.scss'],
})
export class PickupsPage implements OnInit {
  pickups: Array<Object>;
  constructor(public modalController: ModalController) {
    this.getPickups();
  }

  ngOnInit() {}
  cancel(p){// TODO: SERVICE
    console.log("Cancelling pickup: "+p.pickup_id);
  }
  async details(p,button){
    let self = this;
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: {
      'fields' : p,
      'modalName':"Pickup",
      'button':button
      }
    });
    return await modal.present();
    }
  async newPickup(){
    let self = this;
    const form = await this.modalController.create({
      component: CustomFormComponent,
      componentProps: {
        'title': "Earn Money On Your Next Flight",
        'fields':self.getAvailablePickups(0),
        'formName':'Pickup',
        'loadCallbackFunction':function(){self.loadParcels()}
      }
    });
    return await form.present();
  }
  getAvailablePickups(index){// TODO: SERVICE
    let self = this;
    return [{label:'Lettre',type:'button',cost:'20$',callback:function(id){self.getParcelDetails(id);},id:'KAMASDZA'}];
  }
  getPickups(){ // TODO: SERVICE
    this.pickups = [{pickup_id:"KKSDAZEM",colis_reçu:"Oui",date_du_vol:'22/01/2020',Liverer_a:"Karim",Numero_du_destinataire:"+213555547789",volume_en_cm2:10,poids_en_kg:2,Livraison_de:"Paris",Livraison_a:"Alger"},
                    {pickup_id:"PSPDAZEM",colis_reçu:"Non",date_du_vol:'03/05/2020',Liverer_a:"Nadia",Numero_du_destinataire:"+213555547789",volume_en_cm2:10,poids_en_kg:2,Livraison_de:"Paris",Livraison_a:"Alger"}];
  }
  async getParcelDetails(id){// TODO: SERVICE
    let self = this;
    let parcel = {parcel_id:"QSMDAZEM",Colis_remis:"Oui",date_de_deposition_du_colis:"13/03/2020",date_de_livraison:'19/03/2020',Nom_du_livreur:"Fateh",Numero_du_livreur:"+3322154785",Livraison_de:"Paris",Livraison_a:"Alger"};
    this.details(parcel,{text:'Prendre le Colis',callback:function(id){self.takeParcel(id)},color:'primary'});
  }
  loadParcels(){// TODO: SERVICE
    console.log("Loading Parcels");
  }
  takeParcel(id){// TODO: SERVICE
    console.log("taking parcel "+id);
  }
}
