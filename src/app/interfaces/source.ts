import { Article } from './article';

export interface Source {
    Id: number;
    IdSource: string;
    Name: string;
    Articles: Article[];
}
