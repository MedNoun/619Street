import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courousel',
  templateUrl: './courousel.component.html',
  styleUrls: ['./courousel.component.scss']
})
export class CourouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
catalogueList :string[] =[
  "../assets/carouselImages/image1.jpg",
  "../assets/carouselImages/image2.jpg",
  "../assets/carouselImages/image3.jpg"
]
urlIndex : number =0;
altImage="slide".concat(String(this.urlIndex));
introImage="../assets/carouselImages/image1.jpg";

getUrlFromIndex(urlIndex: number){
return(this.catalogueList[urlIndex]);
}
nextUrl(){
  if(this.urlIndex==this.catalogueList.length-1){
    this.urlIndex=0;
    return(this.getUrlFromIndex(this.urlIndex));
  }else{
    this.urlIndex++;
    return(this.getUrlFromIndex(this.urlIndex));
  }
}
previousUrl(){
  if(this.urlIndex==0){
    this.urlIndex=this.catalogueList.length-1;
    return(this.getUrlFromIndex(this.urlIndex));
  }else{
    this.urlIndex--;
    return(this.getUrlFromIndex(this.urlIndex));
  }
}
}
