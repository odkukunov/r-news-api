import { HttpModule, Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsResolver } from './resolvers/news.resolver';
import { AppService } from '../app.service';

@Module({
  providers: [NewsService, NewsResolver],
})
export class NewsModule {}
