import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NewsApiComponent } from './admin/news-api/news-api.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArticleDetailComponent } from './article/article-item/article-detail/article-detail.component';


const routes: Routes = [
  {path: "", component: ArticleComponent},
  {path: "home", component: ArticleComponent},
  {path: "article/:id", component: ArticleDetailComponent},
  {path: "admin", component: NewsApiComponent},
  {path: "admin/dashboard", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
