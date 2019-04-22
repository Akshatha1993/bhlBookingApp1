import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
customer={name:'', email:'', phone:'', address:'', password:''};
  constructor(private router : Router, private movieService: MovieService) { }

  ngOnInit() {}
  login(){
    this.router.navigate(['/login']);
  }
  signUp(){
  this.movieService.addCustomers(this.customer).subscribe(()=>{
    this.router.navigate(['/tabs/tab1']);
  });
}
}
