import { HttpService } from '@nestjs/common';
import { TopHeadlinesInput } from './models/news/topHeadlinesInput.model';
export declare class NewsService {
    private httpService;
    constructor(httpService: HttpService);
    getTopHeadlines(options: TopHeadlinesInput): Promise<any>;
}
