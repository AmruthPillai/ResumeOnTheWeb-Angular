import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {

  currentImage;

  images = [
    './assets/photos/IMG_1880.jpg',
    './assets/photos/IMG_5184.jpg',
    './assets/photos/IMG_8295.jpg',
    './assets/photos/IMG_9326.jpg',
  ];

  constructor() {
    this.currentImage = this.images[0];
  }

  ngOnInit() {
    setInterval(() => this.currentImage = this.getRandomImage(), 5000);
  }

  getRandomImage(): String {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

}
