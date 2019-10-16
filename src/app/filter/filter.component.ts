import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article/article.service';
import { FilterArticle } from '../interfaces/filter-article';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  author: string;
  title: string;
  content: string;

  ngOnInit() {
  }

  articleFilterSearch() {

    let filter: FilterArticle = {
      author: this.author,
      title: this.title,
      content: this.content
    };   

    this.articleService.GetFilteredArticles(filter).subscribe(
      articles => {
        this.articleService.$articles.next(articles);
      }
    );

  }

}
