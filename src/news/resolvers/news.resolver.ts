import { Args, Query, Resolver } from '@nestjs/graphql';
import { News } from '../models/news/news.model';
import { NewsService } from '../news.service';
import { NewsResponse } from '../models/news/newsResponse.model';
import { TopHeadlinesInput } from '../models/news/topHeadlinesInput.model';

@Resolver((of) => News)
export class NewsResolver {
  public constructor(private newsService: NewsService) {}

  @Query((returns) => NewsResponse)
  public topHealines(
    @Args('options', { type: () => TopHeadlinesInput })
    options: TopHeadlinesInput,
  ) {
    return this.newsService.getTopHeadlines(options);
  }
}
