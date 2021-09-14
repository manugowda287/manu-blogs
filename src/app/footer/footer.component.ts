import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  newsList: any=[];
  randomPosts:any=[];
  recentPosts:any=[];
  popularPosts:any=[];

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
      for(let i=0;i<3;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.randomPosts.push(mygroceries);
      }
      for(let i=0;i<3;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.recentPosts.push(mygroceries);
      }
      for(let i=0;i<3;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.popularPosts.push(mygroceries);
      }
    })
}
}
