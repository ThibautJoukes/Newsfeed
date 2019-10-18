import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../article.service';
import { Article } from 'src/app/interfaces/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  article: Article;

  ngOnInit() {
    this.articleService.GetArticleById(this.route.snapshot.params['id']).subscribe(
      result => {
        this.article = result;

        let dateParts = this.article.publishedAt.split('T');
        this.article.publishedAt = dateParts[0] + ' | ' + dateParts[1].split('+')[0].substr(0,5);
      });
  }
}
