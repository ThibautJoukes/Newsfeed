import { newsApiArticeSource } from './newsApiArticleSource';

export interface newsApiArticle{
    source: newsApiArticeSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}