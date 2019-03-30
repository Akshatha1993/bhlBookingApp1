import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
slideData:any = [];
movieList:any = [];
  constructor(){
    this.slideData = [{ image: "../../assets/slide-1.jpg" },
    { image: "../../assets/slide-2.jpg" },
    { image: "../../assets/slide-3.jpg" }, 
    { image: "../../assets/slide-4.jpg" }];
    this.movieList = [
{ image: "../../assets/row-1.jpg", name:'Sthree', rating:'80%' },
{ image: "../../assets/row-2.jpeg", name:'Vaayu', rating:'90%'  },
{ image: "../../assets/row-3.jpg", name:'KGF', rating:'100%'  }, 
{ image: "../../assets/row-4.jpg", name:'Yajamana', rating:'100%'  },
{ image: "../../assets/row-5.jpeg", name:'Kanchana', rating:'100%'  },
{ image: "../../assets/row-6.jpg", name:'Vayuputhra', rating:'100%'  },

];
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
  slidesDidLoad1(mslides) {
    mslides.startAutoplay();
  }

}
