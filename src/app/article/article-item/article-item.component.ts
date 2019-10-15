import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input () article: Article; 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getDetails(){
    this.router.navigate(['/article', this.article.id]);
  }
}
