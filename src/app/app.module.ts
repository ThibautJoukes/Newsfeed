import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArticleComponent } from './article/article.component';
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilterComponent } from './filter/filter.component';
import { NewsApiComponent } from './admin/news-api/news-api.component';
import { ResultComponent } from './admin/news-api/result/result.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ArticleDetailComponent } from './article/article-item/article-detail/article-detail.component';

import { ArticleService } from './article/article.service';

import { SharedMaterialModule } from './shared/shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleItemComponent,
    NavigationComponent,
    FilterComponent,
    NewsApiComponent,
    ResultComponent,
    DashboardComponent,
    ArticleDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedMaterialModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
