import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  currentArticles: Article[];
  loaded: boolean = false;

  ngOnInit() {

    this.articleService.$articles.subscribe((articles: Article[]) => {
      this.currentArticles = articles;
      this.loaded = true;
    });

    this.articleService.GetAllArticles().subscribe(
      articles => {
        this.articleService.$articles.next(articles);
      }
    );

  }

}
