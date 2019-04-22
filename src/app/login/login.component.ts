import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer={name:'', email:'', phone:'', password:'', address:''}
  customers=[];
userName:any;
password:any;
  constructor(private route:ActivatedRoute, private router : Router, public alertController: AlertController, private movieService: MovieService) { }
  ngOnInit() {
    this.movieService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
  }
  login(customer){
    console.log(customer.phone);
    for(var i = 0; i< this.customers.length; i++){
      if((this.customers[i].phone === customer.phone) && (this.customers[i].password=== customer.password)){
        console.log('logged in');
        this.router.navigate(['/tabs/tab1']);
      }else if((this.customers[i].phone === customer.phone) && (this.customers[i].password != customer.password)){
        this.router.navigate(['/forgotpassword']);
      }else{ 
        this.router.navigate(['/signup']);
        //this.presentAlert();
      }
    }
    //this.presentAlert();
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
