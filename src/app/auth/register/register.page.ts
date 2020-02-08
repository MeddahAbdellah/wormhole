import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  mail: string;
  password: string;
  phoneNumber:string;
  showPasswordText: string ="password";
  constructor(private storage: Storage,
              public toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('user_id').then((val) => {
      console.log('user id is', val);
    });
  }
  togglePassword(){
    this.showPasswordText = this.showPasswordText=="password" ? "text":"password";
  }
  googleConnect(){
    console.log("Connect with google");
  }
  subscribe(mail,password){
    console.log(password);

   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))this.presentToast('Mail Adress Not Valid')
   else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(password)))this.presentToast('Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character. ')
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
