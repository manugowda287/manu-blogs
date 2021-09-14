import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}
  getAllNews() {
  return this.http.get("https://kannada-trending-news-7190b-default-rtdb.firebaseio.com/TrendingNews.json")
  
  }
}
