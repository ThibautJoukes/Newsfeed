import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  localApiBase: string = "https://localhost:44359";

  constructor(private http: HttpClient) { 

  }

  public GetArticleById(id: number): Observable<Article>{
    return this.http.get<Article>(this.localApiBase);
  }
  public GetAllArticles(): Observable<Article>{
    return this.http.get<Article>(this.localApiBase).pipe(
      shareReplay()
    );
  }
  
}
