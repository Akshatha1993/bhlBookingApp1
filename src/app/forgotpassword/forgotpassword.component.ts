import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  customer={name:'', email:'', phone:'', password:'', address:''}
  private sub: any;
  phone:number
  customers=[];
  constructor(private router : Router,  private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer={
      name:'', email:'', phone:'', password:'', address:''
    }
    this.movieService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
  }
  save(customer){
  for(var i = 0; i< this.customers.length; i++){
    if(this.customers[i].phone === customer.phone){
      this.movieService.updateRemotePassword(customer).subscribe((result=>{
        this.router.navigate(['/tabs/tab1']);
      }))
    }
  }
}
  signup(){
    this.router.navigate(['/signup']);
  }
}
