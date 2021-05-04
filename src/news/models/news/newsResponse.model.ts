import { Field, Int, ObjectType } from '@nestjs/graphql';
import { News } from './news.model';

@ObjectType()
export class NewsResponse {
  @Field((type) => String)
  public status: string;

  @Field((type) => Int)
  public totalResults: number;

  @Field((type) => [News])
  public articles: News[];
}
