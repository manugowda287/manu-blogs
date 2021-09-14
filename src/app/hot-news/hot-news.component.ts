import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css'],
})
export class HotNewsComponent implements OnInit {
  newsList: any=[];
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
      
      console.log(this.newsList);
    },
    (error) => console.log(error),
    () => console.log("Complete")
  );
   
  }
}
