import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  public currentArticles: Article[] = [];
  public loaded: boolean = false;

  ngOnInit() {
    this.articleService.GetAllArticles().subscribe(
      articles => {        
        this.currentArticles = articles;
        this.loaded = true;
      }
    );
  }

  getNotification($event) {
    this.currentArticles = $event;
  }
}
