import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { newsApiResult } from '../interfaces/newsApiResult';
import { newsApiArticle } from '../interfaces/newsApiArticle';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  localApiBase: string = "https://newsapi.org/v2";

  headers = new HttpHeaders({
    'Authorization': 'a4c8252f9d4e4363ad90a43090be172b'
  })

  public GetArticlesFromApiTopHeadlines(): Observable<newsApiArticle[]> {
    const requestOptions = {
      headers: this.headers
    };
    return this.http.get<newsApiArticle[]>(this.localApiBase + "/top-headlines?country=nl", requestOptions).pipe(
      map(result => result["articles"])
    );
  }

  public GetArticlesFromApiTopHeadlinesFromCountry(countryCode: string): Observable<newsApiArticle[]> {
    const requestOptions = {
      headers: this.headers
    };
    return this.http.get<newsApiArticle[]>(this.localApiBase + "/top-headlines?country=" + countryCode, requestOptions)
      .pipe(
        map(result => result["articles"])
      );
  }

  public GetArticlesFromApiFilterContent(content: string): Observable<newsApiArticle[]> {
    const requestOptions = {
      headers: this.headers
    };
    return this.http.get<newsApiArticle[]>(this.localApiBase + "/top-headlines?q=" + content, requestOptions).pipe(
      map(result => result["articles"])
    );
  }

  public PostArticlesToDatabase(article: newsApiArticle[]){

  }
}
