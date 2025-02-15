import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// dados para exibição mockados
const lista = [
	  {
		"id": "tt9419884",
		"rank": "1",
		"rankUpDown": "0",
		"title": "Doctor Strange in the Multiverse of Madness",
		"fullTitle": "Doctor Strange in the Multiverse of Madness (2022)",
		"year": "2022",
		"image": "https://s2.glbimg.com/VeFao9yKx4fk6i_Op9Y0Ftq625A=/e.glbimg.com/og/ed/f/original/2021/01/07/cidade_invisivel_vertical_pre_ptbr.jpg",
		"crew": "Sam Raimi (dir.), Benedict Cumberbatch, Elizabeth Olsen",
		"imDbRating": "7.4",
		"imDbRatingCount": "159044"
	  },
	  {
		"id": "tt4154796",
		"rank": "2",
		"rankUpDown": "+1",
		"title": "Avengers: Endgame",
		"fullTitle": "Avengers: Endgame (2019)",
		"year": "2019",
		"image": "https://th.bing.com/th/id/R.f2eb7c223e5e3013e275e8a4d6b0feab?rik=RUbeUTBNzlAVKA&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f20%2f07%2f09%2f18%2f25%2f3014499.jpg&ehk=N5YZbpSO5sODNieAFJNpHUfhN3%2bpiNmIeth4rOfKTIM%3d&risl=&pid=ImgRaw&r=0",
		"crew": "Anthony Russo (dir.), Robert Downey Jr., Chris Evans",
		"imDbRating": "8.4",
		"imDbRatingCount": "2503231"
	  },
	  {
		"id": "tt0111161",
		"rank": "3",
		"rankUpDown": "-1",
		"title": "The Shawshank Redemption",
		"fullTitle": "The Shawshank Redemption (1994)",
		"year": "1994",
		"image": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b54a5656af0d2c35c21706eb370385c97ce5067413d874615f4d427ffa63b230._RI_TTW_.jpg",
		"crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
		"imDbRating": "9.3",
		"imDbRatingCount": "2653421"
	  },
	  {
		"id": "tt1375666",
		"rank": "4",
		"rankUpDown": "0",
		"title": "Inception",
		"fullTitle": "Inception (2010)",
		"year": "2010",
		"image": "https://http2.mlstatic.com/D_NQ_NP_860199-MLB51499040376_092022-O.jpg",
		"crew": "Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
		"imDbRating": "8.8",
		"imDbRatingCount": "2309821"
	  },
	  {
		"id": "tt0137523",
		"rank": "5",
		"rankUpDown": "+2",
		"title": "Fight Club",
		"fullTitle": "Fight Club (1999)",
		"year": "1999",
		"image": "https://th.bing.com/th/id/R.4c1a2136964327184de175dcf7b16ee9?rik=Iqvy3E7gItoREA&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fpictures%2f17%2f10%2f23%2f19%2f55%2f0260439.jpg&ehk=hhY5mmdTWhQmAnaM89BtjEKMPgkBQPqHxPf2hzPn4MQ%3d&risl=&pid=ImgRaw&r=0",
		"crew": "David Fincher (dir.), Brad Pitt, Edward Norton",
		"imDbRating": "8.8",
		"imDbRatingCount": "2013123"
	  },
	  {
		"id": "tt6751668",
		"rank": "6",
		"rankUpDown": "+1",
		"title": "Parasite",
		"fullTitle": "Parasite (2019)",
		"year": "2019",
		"image": "https://images.squarespace-cdn.com/content/v1/5b9da7e845776eb027310eb3/1652505753623-ULNMJD91HECY9Y98T31N/shreyas-raut-avatar-2.jpeg",
		"crew": "Bong Joon Ho (dir.), Kang-ho Song, Sun-kyun Lee",
		"imDbRating": "8.6",
		"imDbRatingCount": "734861"
	  },
	  {
		"id": "tt0120737",
		"rank": "7",
		"rankUpDown": "-3",
		"title": "The Lord of the Rings: The Fellowship of the Ring",
		"fullTitle": "The Lord of the Rings: The Fellowship of the Ring (2001)",
		"year": "2001",
		"image": "https://www.cafecomfilme.com.br/media/k2/items/cache/821ee19c73076a9074fe1f4f0b493d5a_XL.jpg?t=20201009_161121",
		"crew": "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
		"imDbRating": "8.8",
		"imDbRatingCount": "1824001"
	  },
	  {
		"id": "tt0167261",
		"rank": "8",
		"rankUpDown": "0",
		"title": "The Lord of the Rings: The Two Towers",
		"fullTitle": "The Lord of the Rings: The Two Towers (2002)",
		"year": "2002",
		"image": "https://th.bing.com/th/id/OIP.vNJWCcm1BcLXv-tzZ6RznQHaK0?w=1401&h=2048&rs=1&pid=ImgDetMain",
		"crew": "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
		"imDbRating": "8.7",
		"imDbRatingCount": "1632854"
	  },
	  {
		"id": "tt0468569",
		"rank": "9",
		"rankUpDown": "0",
		"title": "The Dark Knight",
		"fullTitle": "The Dark Knight (2008)",
		"year": "2008",
		"image": "https://i.pinimg.com/originals/c6/c4/67/c6c4676f2baa4f5e2f28ed5782f5e1d1.jpg",
		"crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
		"imDbRating": "9.0",
		"imDbRatingCount": "2635984"
	  },
	  {
		"id": "tt7286456",
		"rank": "10",
		"rankUpDown": "+2",
		"title": "Joker",
		"fullTitle": "Joker (2019)",
		"year": "2019",
		"image": "https://1.bp.blogspot.com/-0oy1fDoPCe8/Ux-P8rQuz0I/AAAAAAAAAU0/Q0aCcm0a-D4/s1600/dte.jpg",
		"crew": "Todd Phillips (dir.), Joaquin Phoenix, Robert De Niro",
		"imDbRating": "8.4",
		"imDbRatingCount": "1234492"
	  }
	]

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent  implements OnInit{
  
  filmsList: any = [];
  currentFilm = 0;
  
  constructor(private readonly filmService: ImdbService) {}
  
  ngOnInit(): void {
    // alternativa para requisição http e json-server
    // this.filmService.getData().subscribe(data => {
    //   this.filmsList = data;
    // })
    this.filmsList = lista;
  }
  
  onPreviousClick() {
  const previous = this.currentFilm - 1;
  this.currentFilm = previous < 0 ? this.filmsList.length - 1 : previous;
  }
  
  onNextClick() {
    const next = this.currentFilm + 1;
    this.currentFilm = next === this.filmsList.length ? 0 : next;
  }
}
