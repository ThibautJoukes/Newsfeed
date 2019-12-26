import { Injectable } from '@angular/core';
import { ArticleService } from '../article/article.service';
import { Article } from '../interfaces/article';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolverService implements Resolve<Article[]> {

  constructor(private articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.articleService.GetAllArticles();
  }

}

