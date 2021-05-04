import { HttpService, Injectable } from '@nestjs/common';
import { TopHeadlinesInput } from './models/news/topHeadlinesInput.model';

@Injectable()
export class NewsService {
  public constructor(private httpService: HttpService) {}

  public async getTopHeadlines(options: TopHeadlinesInput) {
    const response = await this.httpService
      .get('top-headlines', { params: options })
      .toPromise();

    return response.data;
  }
}
