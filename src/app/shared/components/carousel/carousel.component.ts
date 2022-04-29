import { Component, Input, OnInit } from '@angular/core';
import {
    carousel,
    carouselImage
} from 'src/app/classes/fetchers/homepage/carouselImage';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    @Input('carousel') carousel: carousel;
    @Input('indicators') indicators: boolean = true;
    @Input('controls') controls: boolean = true;
    @Input('text') text: boolean = true;
    @Input('auto') autoSlide: boolean = false;
    @Input('interval') slideInterval: number = 3000;
    @Input('maxHeight') maxHeight: string = '100%';
    images: carouselImage[];
    selectedIndex: number;
    brand: string;
    description: string;
    constructor() {
        this.selectedIndex = 0;
    }
    ngOnInit(): void {
        this.setBrand(this.selectedIndex);
        this.images = this.carousel.images;
        if (this.autoSlide) {
            this.autoSlideImages();
        }
    }

    autoSlideImages() {
        setInterval(() => {
            this.selectImage(this.selectedIndex + 1);
        }, this.slideInterval);
    }
    selectImage(i) {
        if (i >= 0 && i <= this.images.length - 1) {
            this.selectedIndex = i;
        } else if (i < 0) {
            this.selectedIndex = this.images.length - 1;
        } else {
            this.selectedIndex = 0;
        }
        this.setBrand(this.selectedIndex);
    }
    setBrand(i) {
        this.brand = this.carousel.images[i].brand;
        this.description = this.carousel.images[i].description;
    }
}
