import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Subscription } from 'rxjs';
import { Article } from '../interfaces/article';

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
    this.articleService.GetAllArticles().subscribe( (articles: Article[]) => {
      this.currentArticles = articles;
      this.loaded = true;      
    });
  }

}
