import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
userName:any;
password:any;
  constructor(private router : Router, public alertController: AlertController) { }

  ngOnInit() {}
  login(){
    this.router.navigate(['/tabs/tab1']);

    // if(this.userName === this.password){
    //   this.router.navigate(['']);
    //   this.userName = []
    //   this.password = []
    // }else{
    //   this.presentAlert()
    //   this.userName = []
    //   this.password = []
    // }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please Sign up',
      message: 'Either username or password is incorrect / You are not a existing customer. Please Sign up',
      buttons: ['OK']
    });
    await alert.present();
  }
  forgot(){
    this.router.navigate(['/forgotpassword']);
  }
  signup(){
    this.router.navigate(['/signup']);
  }
}
