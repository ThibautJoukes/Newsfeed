import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NewsApiComponent } from './admin/news-api/news-api.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArticleDetailComponent } from './article/article-item/article-detail/article-detail.component';
import { ArticleResolverService } from './services/article-resolver.service';
import { ArticlesResolverService } from './services/articles-resolver.service';


const routes: Routes = [
  {path: "", component: ArticleComponent, resolve: {articles: ArticlesResolverService}},
  {path: "home", component: ArticleComponent, resolve: {articles: ArticlesResolverService}},
  {path: "article/:id", component: ArticleDetailComponent, resolve: {article: ArticleResolverService}},
  {path: "admin", component: NewsApiComponent},
  {path: "admin/dashboard", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ArticleResolverService,
    ArticlesResolverService
  ]
})
export class AppRoutingModule { }
