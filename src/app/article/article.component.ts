import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  public currentArticles: Article[] = [];
  public loaded: boolean = true;

  ngOnInit() {
    this.currentArticles = this.route.snapshot.data.articles;
  }

  getNotification($event) {
    this.currentArticles = $event;
  }
}
