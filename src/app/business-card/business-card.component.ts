import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  newsList: any=[];
  businessCard:any=[];
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
      for(let i=0;i<=4;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.businessCard.push(mygroceries);
      }
      for(let i=0;i<=2;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.sportsCard.push(mygroceries);
      }
      for(let i=0;i<=2;i++){
        let mygroceries = this.newsList[Math.floor(Math.random() * this.newsList.length)]
this.technologyCard.push(mygroceries);
      }
      console.log(this.sportsCard);
    },
    (error) => console.log(error),
    () => console.log("Complete")
  );
   
  }


  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
