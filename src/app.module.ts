import { Global, HttpModule, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { NewsModule } from './news/news.module';
import { API_KEY } from './config.json';

const httpModule = HttpModule.register({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': API_KEY,
  },
});

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    httpModule,
    NewsModule,
  ],
  providers: [AppService],
  exports: [httpModule],
})
export class AppModule {}
