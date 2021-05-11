import { NewsService } from '../news.service';
import { TopHeadlinesInput } from '../models/news/topHeadlinesInput.model';
export declare class NewsResolver {
    private newsService;
    constructor(newsService: NewsService);
    topHeadlines(options: TopHeadlinesInput): Promise<any>;
}
