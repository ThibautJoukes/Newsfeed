import { Article } from './article';

export interface Source {
    id: number;
    idSource: string;
    name: string;
    articles: Article[];
}
