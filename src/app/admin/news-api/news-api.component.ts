import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { newsApiArticle } from 'src/app/interfaces/newsApiArticle';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  articlesRetrieved: number;
  articlesCountryRetrieved: number;
  articlesContentRetrieved: number;

  articles: newsApiArticle[];
  articlesTopHeadlines: newsApiArticle[];
  articlesByCountry: newsApiArticle[];
  articlesByContent: newsApiArticle[];

  GetArticles() {
    this.adminService.GetArticlesFromApiTopHeadlines().subscribe(
      articles => {
        this.articlesRetrieved = articles.length;
        this.articlesTopHeadlines = articles;        
      }
    );
  }

  GetArticlesFromCountry(countryCode: HTMLInputElement) {
    this.adminService.GetArticlesFromApiTopHeadlinesFromCountry(countryCode.value.trim()).subscribe(
      articles => {
        this.articlesCountryRetrieved = articles.length;
        this.articlesByCountry = articles;
      }
    );
  }

  GetArticlesByContent(content: HTMLInputElement) {
    this.adminService.GetArticlesFromApiFilterContent(content.value.trim()).subscribe(
      articles => {
        this.articlesContentRetrieved = articles.length;
        this.articlesByContent = articles;
      }
    );
  }

  ShowResultsTopHeadlines(){    
    this.articles = this.articlesTopHeadlines;
    console.log(this.articles);
  }
  ShowResultsByCountry(){
    this.articles = this.articlesByCountry;
  }
  ShowResultsByContent(){
    this.articles = this.articlesByContent;
  }
}
