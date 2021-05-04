import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Source } from '../source/source.model';

@ObjectType()
export class News {
  @Field((type) => Source)
  source: Source;

  @Field((type) => String, { nullable: true })
  author: string;

  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  description: string;

  @Field((type) => String, { nullable: true })
  image: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  publishedAt: Date;

  @Field((type) => String)
  url: string;
}
