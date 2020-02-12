import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';
import jsSHA from 'jssha'

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
              public toastController: ToastController,
              private http: HTTP,
              private router: Router) { }

  ngOnInit() {}
  togglePassword(){
    this.showPasswordText = this.showPasswordText=="password" ? "text":"password";
  }
  googleConnect(){
    console.log("Connect with google");
  }
  subscribe(name,email,password,phoneNumber){
    console.log(password);

   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))this.presentToast('Mail Adress Not Valid')
   else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(password)))this.presentToast('Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character. ')
   else {
     let hashedPwd = new jsSHA("SHA-256","TEXT");
     hashedPwd.update(password);
     this.http.post('http://ec2-52-47-201-30.eu-west-3.compute.amazonaws.com/register',
      {
        name: name,
        email: email,
        password: hashedPwd.getHash("HEX"),
        phoneNumber: phoneNumber
      },{
        })
      .then(data => {
        console.log(data.data);
        let resData = JSON.parse(data.data);
        this.presentToast("Registration Successful!");
        this.storage.set('user_id',resData.user_id);
        this.storage.set('email',resData.email);
        this.storage.set('name',resData.name);
        this.storage.set('phoneNumber',resData.phoneNumber);
        this.router.navigateByUrl('/home');
      }).catch(error => {
        console.error(error);
        this.presentToast(error.error)
      });
   }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
