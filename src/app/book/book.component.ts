import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute,private movieService:MovieService) { }
  movie:any;
  private sub:any;
  id:number;
  data={
    tickets:0
  }
  movies={
    customer_id:0,
    tickets:0,
    movie_id:0,
    movie_name:'',
    movie_time:'',
    theatre:'',
    screen:'',
    city:'',
    movie_date:'',
    date:'',
    amount:0,
    ticket_price:0
  };
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.movieService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie;
         console.log(this.movie);
       })
    });
  }
  amount=this.data.tickets*50
  addBooking(movie,t){
    console.log(movie,t);
    this.movies={
    customer_id:2,
    tickets:t,
    movie_id:movie.id,
    movie_name:movie.name,
    movie_time:'12:50',
    theatre:'Cinepolis Meenakshi Mall',
    screen:'Screen 2',
    city:'Bangalore',
    movie_date:'2019-05-07',
    date:'2019-03-27',
    amount:this.amount,
    ticket_price:50
    }
    console.log('data sent====>',this.addBooking)
    this.movieService.addBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
    this.router.navigate(['/payment'])
    });
    
  }
  goBack(){
    this.router.navigate(['/tabs/tab1']);
  }

}
