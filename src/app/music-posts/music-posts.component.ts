import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-music-posts',
  templateUrl: './music-posts.component.html',
  styleUrls: ['./music-posts.component.css']
})
export class MusicPostsComponent implements OnInit {

  newsList: any=[];
  musicCard:any=[];
  sportsCard:any=[];
  technologyCard:any=[];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getAllNews().subscribe(data => {
      this.newsList = Object.keys(data).map(function(e){
        Object.keys(data[e]).forEach(function(k){
           if(typeof data[e][k] == "object") {
             data[e][k] = Object.keys(data[e][k]).map(function(l){
               return data[e][k][l];
             });
           }
        });
        return data[e];
      });
      for(let i=0;i<=3;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.musicCard.push(mygroceries);
      }
    })
}
}
