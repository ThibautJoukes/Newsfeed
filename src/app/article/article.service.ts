import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { shareReplay, map, tap, toArray } from 'rxjs/operators';
import { Article } from '../interfaces/article';
import { FilterArticle } from '../interfaces/filter-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  localApiBase: string = "https://localhost:44359";

  constructor(private http: HttpClient) {
  }

  public GetArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.localApiBase + "/article/" + id).pipe(
      map(article => {
        return article;
      })
    );
  }

  public GetAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.localApiBase + "/article").pipe(
      map(articles => {     
        return articles["articles"];
      }),
      shareReplay()
    );
  }

  public GetFilteredArticles(filter: FilterArticle): Observable<Article[]> {

    return this.http.post<Article[]>(this.localApiBase + "/article/filter", filter).pipe(
      map(articles => {
        return articles["articles"];
      }),
      shareReplay()
    );
  }

}
