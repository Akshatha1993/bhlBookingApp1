import { Component } from '@angular/core';
import {MovieService} from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
movies:any = [];
slideData = []
  constructor(private router: Router , private movieService:MovieService){
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    this.slideData = [{ image: "../../assets/slide-1.jpg" },
    { image: "../../assets/slide-2.jpg" },
    { image: "../../assets/slide-3.jpg" }, 
    { image: "../../assets/slide-4.jpg" }];
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
  onselect(m){
    this.router.navigate(['/book/'+m.id]);
  }
}
