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
        if (article.urlToImage == null || article.urlToImage == undefined) {
          article.urlToImage = 'https://images.pexels.com/photos/102720/pexels-photo-102720.jpeg?cs=srgb&dl=finance-financial-times-news-102720.jpg&fm=jpg';
        }
        if (article.description == null && article.content != null) {
          article.description = article.content.substring(0, 100) + '...';
        }
        if (article.description == null && article.content == null) {
          article.description = "Dit artikel bevat geen content..."
        }
        return article;
      })
    );
  }

  public GetAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.localApiBase + "/article").pipe(
      map(articles => {       
        articles["articles"].map(article => {
          if (article.urlToImage == null || article.urlToImage == undefined) {
            article.urlToImage = 'https://images.pexels.com/photos/102720/pexels-photo-102720.jpeg?cs=srgb&dl=finance-financial-times-news-102720.jpg&fm=jpg';
          }

          if (article.description == null && article.content != null) {
            article.description = article.content.substring(0, 100) + '...';
          }

          if (article.description == null && article.content == null) {
            article.description = "Dit artikel bevat geen content..."
          }

          return article;
        })
        return articles["articles"];
      }),
      shareReplay()
    );
  }

  public GetFilteredArticles(filter: FilterArticle): Observable<Article[]> {

    return this.http.post<Article[]>(this.localApiBase + "/article/filter", filter).pipe(
      map(articles => {
        articles["articles"].map(article => {
          if (article.urlToImage == null || article.urlToImage == undefined) {
            article.urlToImage = 'https://images.pexels.com/photos/102720/pexels-photo-102720.jpeg?cs=srgb&dl=finance-financial-times-news-102720.jpg&fm=jpg';
          }

          if (article.description == null && article.content != null) {
            article.description = article.content.substring(0, 100) + '...';
          }
          
          if (article.description == null && article.content == null) {
            article.description = "Dit artikel bevat geen content..."
          }

          return article;
        })
        return articles["articles"];
      }),
      shareReplay()
    );
  }

}
