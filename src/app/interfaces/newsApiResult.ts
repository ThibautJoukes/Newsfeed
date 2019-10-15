import { newsApiArticle } from './newsApiArticle';

export interface newsApiResult {
    status: string;
    totalResults: number;
    articles: newsApiArticle[];
}