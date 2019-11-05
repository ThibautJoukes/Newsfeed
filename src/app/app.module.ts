import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { DefaultTextPipe } from './pipes/default-text.pipe';
import { PipeDescriptionPipe } from './pipes/pipe-description.pipe';
import { PipeUrlToImagePipe } from './pipes/pipe-url-to-image.pipe';

enableProdMode();

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
    AdminComponent,
    DefaultTextPipe,
    PipeDescriptionPipe,
    PipeUrlToImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
